import { NextRequest, NextResponse } from 'next/server';
import { stripe, webhookSecret } from '@/lib/stripe';
import { Resend } from 'resend';
import Stripe from 'stripe';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendWelcomeEmail(email: string, name?: string) {
  if (!resend) {
    console.warn('RESEND_API_KEY not set, skipping welcome email');
    return;
  }

  const firstName = name?.split(' ')[0] || 'there';

  try {
    await resend.emails.send({
      from: 'InstaGrow <team@insta-grow.com>',
      to: email,
      subject: 'Welcome to InstaGrow! Here\'s what happens next',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #271f36; font-size: 28px; margin-bottom: 24px;">Hey ${firstName}! 🎉</h1>

          <p style="color: #271f36; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Thank you for joining InstaGrow Early Access! We're excited to help you create Reels that actually convert.
          </p>

          <p style="color: #271f36; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            <strong>Here's what happens next:</strong>
          </p>

          <div style="background: #fbf5ff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #7d5f92; font-size: 14px; font-weight: 600; margin: 0 0 16px 0;">STEP 1</p>
            <p style="color: #271f36; font-size: 16px; margin: 0 0 8px 0;"><strong>Fill out the quick form</strong></p>
            <p style="color: #7d5f92; font-size: 14px; margin: 0;">Tell us about your niche, product, and audience. Takes ~5 minutes.</p>
          </div>

          <div style="background: #fbf5ff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #7d5f92; font-size: 14px; font-weight: 600; margin: 0 0 16px 0;">STEP 2</p>
            <p style="color: #271f36; font-size: 16px; margin: 0 0 8px 0;"><strong>Receive your strategy report</strong></p>
            <p style="color: #7d5f92; font-size: 14px; margin: 0;">Within 48 hours, you'll get a personalized content strategy in your inbox.</p>
          </div>

          <div style="background: #fbf5ff; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
            <p style="color: #7d5f92; font-size: 14px; font-weight: 600; margin: 0 0 16px 0;">STEP 3</p>
            <p style="color: #271f36; font-size: 16px; margin: 0 0 8px 0;"><strong>Get weekly scripts</strong></p>
            <p style="color: #7d5f92; font-size: 14px; margin: 0;">Every week, 5 ready-to-film templates delivered straight to your inbox.</p>
          </div>

          <a href="https://forms.gle/hJ2AU1r3qfZzamp77" style="display: inline-block; background: linear-gradient(135deg, #7d5f92 0%, #b49cc5 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 100px; font-size: 16px; font-weight: 600;">
            Fill Out the Form →
          </a>

          <p style="color: #7d5f92; font-size: 14px; line-height: 1.6; margin-top: 32px;">
            Questions? Just reply to this email — we read everything.
          </p>

          <p style="color: #271f36; font-size: 16px; margin-top: 24px;">
            – The InstaGrow Team
          </p>
        </div>
      `,
    });

    console.log('Welcome email sent to:', email);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}

export async function POST(request: NextRequest) {
  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not set');
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 500 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set for current mode');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log('Payment successful:', {
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        customerId: session.customer,
        subscriptionId: session.subscription,
        amountTotal: session.amount_total,
      });

      // Send welcome email
      if (session.customer_details?.email) {
        await sendWelcomeEmail(
          session.customer_details.email,
          session.customer_details.name || undefined
        );
      }

      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log('Subscription cancelled:', subscription.id);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

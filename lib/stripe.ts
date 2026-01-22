import Stripe from 'stripe';

// Default to test mode for safety — live mode requires explicit opt-in
const isTestMode = process.env.NEXT_PUBLIC_STRIPE_MODE !== 'live';

const secretKey = isTestMode
  ? process.env.STRIPE_SECRET_KEY_TEST
  : process.env.STRIPE_SECRET_KEY_LIVE;

export const webhookSecret = isTestMode
  ? process.env.STRIPE_WEBHOOK_SECRET_TEST
  : process.env.STRIPE_WEBHOOK_SECRET_LIVE;

// Stripe client - only used by webhook for signature verification
// Will be null if secret key is not set (build time)
export const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    })
  : (null as unknown as Stripe);

npm install stripe <– ALREADY DONE
```

**Environment variables** (`.env.local`):
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=https://insta-grow.com
```

**Files to create:**

| File | Purpose |
|------|---------|
| `app/api/checkout/route.ts` | Creates Stripe checkout session |
| `app/api/webhooks/stripe/route.ts` | Handles payment confirmation + sends email |
| `app/success/page.tsx` | Post-purchase thank you page |
| `lib/stripe.ts` | Stripe client instance |

---

### Step 3: Email After Purchase

**Recommended: [Resend](https://resend.com)** — free tier (100 emails/day), easy setup, beautiful React emails.

1. Sign up → Get API key
2. Verify your domain (`insta-grow.com`)
3. Send email from webhook when payment succeeds

---

### Step 4: Webhook Setup

In Stripe Dashboard → Developers → Webhooks:
- Endpoint: `https://insta-grow.com/api/webhooks/stripe`
- Events: `checkout.session.completed`
- Copy webhook secret → add to `.env.local`

---

### Architecture Diagram
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Pricing.tsx    │────▶│  /api/checkout  │────▶│ Stripe Checkout │
│  (Button click) │     │  (Create session)│     │ (Hosted page)   │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                        ┌─────────────────┐              │ Payment
                        │  /success       │◀─────────────┤ Success
                        │  (Thank you)    │              │
                        └─────────────────┘              ▼
                                               ┌─────────────────┐
┌─────────────────┐                            │ Stripe Webhook  │
│  Resend Email   │◀───────────────────────────│ (POST event)    │
│  + Google Form  │                            └─────────────────┘
└─────────────────┘
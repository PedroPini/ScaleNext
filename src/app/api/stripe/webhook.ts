// pages/api/stripe/webhook.ts
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'
import stripeClient from '@/libs/stripe'
import { createClerkSupabaseClient } from '@/utils/supabase/server'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers['stripe-signature'] as string

  let event: Stripe.Event

  try {
    const buf = await buffer(req)
    event = stripeClient.webhooks.constructEvent(buf, sig, process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  const supabase = createClerkSupabaseClient()

  switch (event.type) {
    case 'customer.created':
      const customer = event.data.object as Stripe.Customer
      // Handle the event
      break
    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice
      // Handle the event
      break
    // Add other event types as needed
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.status(200).json({ received: true })
}

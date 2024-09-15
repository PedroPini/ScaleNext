import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: Request) {
  const { planTitle, price, interval } = await req.json()

  try {
    const { userId } = auth();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planTitle} Plan (${interval}ly)`,
            },
            unit_amount: price * 100, // Stripe expects amounts in cents
            recurring: {
              interval: interval === 'year' ? 'year' : 'month',
            },
          },
          quantity: 1,
        },
      ],
      // This is where "event.data.object.metadata?.userId" is defined!
      metadata: {
        userId,
      },
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err: any) {
    console.error('Error creating checkout session:', err)
    return NextResponse.json({ error: { message: err.message } }, { status: 500 })
  }
}
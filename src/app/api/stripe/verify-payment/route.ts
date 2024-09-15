import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { clerkClient, currentUser } from '@clerk/nextjs/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})


export async function POST(req: Request) {
  const { sessionId, clerkUserId } = await req.json()

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId,
      {
        expand: ['subscription', 'subscription.default_payment_method']
      }
    )
    
    const user = await currentUser()
    if (!user) {
      return new NextResponse('You need to sign in first.', { status: 401 })
    }
    const isPaidUser = user.publicMetadata?.stripe?.status === "complete";
    if (session.payment_status === 'paid' && isPaidUser) {

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, message: 'Payment not completed' })
    }
  } catch (err: any) {
    console.error('Error verifying payment:', err)
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}

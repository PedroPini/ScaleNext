// // /app/api/stripe/checkout-session/route.js
// import { NextResponse } from 'next/server';
// import { createStripeCustomer } from './create-customer-stripe';
// import { auth } from '@clerk/nextjs';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-06-20',
// });

// export async function POST(req) {
//   try {
//     const { userId } = auth();
    
//     if (!userId) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const { priceId } = await req.json(); // Ensure you're parsing the JSON body correctly
    
//     // Get user's email from Clerk
//     const email = auth().user?.primaryEmailAddress?.emailAddress ?? '';

//     // Create or get Stripe customer
//     const customerId = await createStripeCustomer(userId, email);

//     // Create checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       customer: customerId,
//       line_items: [
//         {
//           price: priceId,
//           quantity: 1,
//         },
//       ],
//       mode: 'subscription',
//       success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${req.headers.origin}/cancel`,
//     });

//     return NextResponse.json({ sessionId: session.id });
//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
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
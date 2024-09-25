import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server'; // Import the correct types from Next.js
import stripe from '@/libs/stripe'; // Ensure this path points to your initialized Stripe instance
export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
  
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const user = await clerkClient.users.getUser(userId)

    const customerId = user?.privateMetadata?.stripe?.customerId;
    
    if (!customerId) {
      return NextResponse.json({ error: 'No customerId found' }, { status: 400 });
    }

    // Create a session for the customer portal
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: 'http://localhost:3000/', // Replace with your actual return URL
    });

    // Return the URL for the Stripe portal
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: unknown) {
    console.error('Stripe API Error:', error);
    return NextResponse.json({ error: 'Something went wrong with Stripe integration' }, { status: 500 });
  }
}

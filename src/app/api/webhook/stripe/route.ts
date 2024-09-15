import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import configFile from "@/config";

import stripe from "@/libs/stripe"

// Stripe webhook secret
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

// Types for Clerk metadata updates
interface ClerkMetadataUpdate {
  customer_id?: string;
  price_id?: string;
  has_access?: boolean;
}

// POST handler for Stripe webhooks
export async function POST(req: Request): Promise<Response> {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature as string, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
  
  const data = event.data.object as Stripe.Checkout.Session;
  const eventType = event.type;
  const user = await currentUser()
  
  try {
    switch (eventType) {
      case "checkout.session.completed": {
      const session = event.data.object;
      const customerId = session?.customer as string
      console.log(`Payment successful for session ID: ${session.id}`);
      clerkClient.users.updateUserMetadata(
        event.data.object.metadata?.userId as string,
        {
          publicMetadata: {
            stripe: {
              status: session.status,
              payment: session.payment_status,
            },
          },
          privateMetadata: {
            stripe:{
              customerId
            }
          }
        }
      );

        break;
      }

      case "checkout.session.expired": {
        // Optionally handle expired session
        break;
      }

      case "customer.subscription.updated": {
        // Optionally handle subscription updates
        break;
      }

      case "customer.subscription.deleted": {
        // Revoke access in Clerk metadata
        await clerkClient.users.updateUser(event.data.object.metadata?.userId as string, {
          privateMetadata: {
            subscription: {
              status: 'revoked',
              payment: 'cancelled'
            }
          },
          publicMetadata:{
            subscription: {
              status: 'revoked',
              payment: 'cancelled'
            }
          }
        })

        break;
      }

      case "invoice.paid": {

        break;
      }

      case "invoice.payment_failed": {
        // Optionally handle payment failure
        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e: any) {
    console.error(`Stripe error: ${e.message}. EVENT TYPE: ${eventType}`);
  }

  return NextResponse.json({});
}
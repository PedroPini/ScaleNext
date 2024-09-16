import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { StripeWelcome } from '@/components/email/stripe/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Hello <rayden@sonya.dev>', // your verified domain
        to: `${email}`, // the email address you want to send a message
      subject: `${name} has a message!`,
      react: StripeWelcome(),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
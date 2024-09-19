import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { UserEnquiryEmail } from '@/components/email/react-email/enquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  try {
    console.log('API ',email, message)
    const data = await resend.emails.send({
      from: `Hello <${process.env.MY_EMAIL}>`, // your verified domain
        to: `${email}`, // the email address you want to send a message
      subject: `User Enquiry`,
      react: UserEnquiryEmail({message}),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
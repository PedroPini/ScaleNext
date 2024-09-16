import { Resend } from 'resend';

interface emailProps  {
    customerEmail:string,
    emailTemplate: any 
}
export async function SendEmail(emailProps: emailProps){
    try {
        const {customerEmail, emailTemplate} = emailProps;
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Send email using Resend when payment is successful

        // Ensure emailTemplate is invoked (since it's a function returning TSX)
        const emailContent = emailTemplate();
        const data = await resend.emails.send({
          from: `Hello ${process.env.MY_EMAIL}`, // verified domain
          to: customerEmail,
          subject: `Thank you for your purchase!`,
          react: emailContent,
        });
    
        console.log('Email sent successfully:', data);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
}

import { Resend } from 'resend';
interface Attachment {
  filename: string;
  path: string;
}

interface emailProps  {
    customerEmail:string,
    emailTemplate: Function,
    attachments: Attachment[]

}
export async function SendEmail(emailProps: emailProps){
    try {
        const {customerEmail, emailTemplate, attachments} = emailProps;
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Send email using Resend when payment is successful

        // Ensure emailTemplate is invoked (since it's a function returning TSX)
        const emailContent = emailTemplate();
        const data = await resend.emails.send({
          from: `Hello <${process.env.MY_EMAIL}>`, // verified domain
          to: customerEmail,
          subject: `Thank you for your purchase!`,
          react: emailContent,
          attachments: attachments,
        });
    
        console.log('Email sent successfully:', data);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
}

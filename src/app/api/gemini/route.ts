import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { NextRequest, NextResponse } from 'next/server';
import { generateStreamResponse } from '@/app/api/gemini/generate-stream-response'
import { generateTextResponse } from '@/app/api/gemini/generate-text-response'
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY
});

const googleAI = google('gemini-1.5-pro-latest');
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];
    const prompt = lastMessage.content;

    //generateTextResponse you just need change the ui to do a fetch.
    //  const response = await generateTextResponse(googleAI, prompt)
    //  return NextResponse.json(response, { status: 200 })

   //  Use streamText to generate and stream the response
   return generateStreamResponse(googleAI, messages)
  

  } catch (error) {
    console.error('Error generating content:', error);
    return new NextResponse('An error occurred while generating content', { status: 500 });
  }
}

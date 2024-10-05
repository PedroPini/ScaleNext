import { streamText } from 'ai';
/**
 * Generates a stream response using the specified AI model and messages.
 *
 * @param {any} googleAI - The AI model to use for generating the stream response.
 * @param {any[]} messages - An array of message objects to provide to the AI model.
 * @returns {Promise<any>} - A promise that resolves to the stream response.
 */
export async function generateStreamResponse(googleAI: any, messages: any[]): Promise<any> {
    const stream = await streamText({
      model: googleAI,
      messages: messages.map((message: any) => ({
        role: message.role,
        content: message.content,
      })),
    });
    // Convert the response to a ReadableStream
    return stream.toDataStreamResponse();
  }
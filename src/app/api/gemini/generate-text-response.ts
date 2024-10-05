import { generateText } from 'ai';
/**
 * Generates text using the specified AI model and parses the response as JSON.
 * You need to adjust the page to fetch like an API, instead of a chat stream
 *
 * @param {any} googleAI - The AI model to use for generating text.
 * @param {string} prompt - The prompt to provide to the AI model.
 * @returns {Promise<any>} - A promise that resolves to the response.
 */
export async function generateTextResponse(googleAI: any, prompt: string): Promise<any> {
    const { text } = await generateText({
      model: googleAI,
      prompt
    });
    return text;
  }
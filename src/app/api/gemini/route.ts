// Import `GoogleGenerative` from the package we installed earlier.
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Create an asynchronous function POST to handle POST 
// request with parameters request and response.
export async function POST(req) {

    try {
        
        // Access your API key by creating an instance of GoogleGenerativeAI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        // Initialize a generative model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        
        // Retrieve the data we receive as part of the request body
        const data = await req.json();
        // Define a prompt variable
        const prompt = data.body;

        // Pass the prompt to the model and retrieve the output
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const output = await response.text();

        // Send the LLM output as a server response object
        return NextResponse.json({ output: output });
    } catch (error) {
        console.error(error);
        // Return an error response with status 500 and an error message
        return NextResponse.json({ error: 'An error occurred while generating content' }, { status: 500 });
    }
}

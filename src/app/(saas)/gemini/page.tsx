'use client'

import { useChat, Message } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function GeminiChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/gemini',
  })

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Gemini Q&A</CardTitle>
        <CardDescription>Ask a question and get an answer from Gemini</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            placeholder="Enter your question"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? 'Asking...' : 'Ask'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2">Conversation:</h3>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap space-y-4">
            {messages.map((message: Message, index: number) => (
              <div key={index} className={`${message.role === 'user' ? 'text-blue-600' : 'text-green-600'}`}>
                <strong>{message.role === 'user' ? 'You: ' : 'Gemini: '}</strong>
                {message.content}
              </div>
            ))}
          </div>
          {messages.length === 0 && (
            <div className="bg-muted p-4 rounded-md">
              Your conversation will appear here
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
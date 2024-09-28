'use client'
import { useChat } from 'ai/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Component() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateResponse = async () => {
    setIsLoading(true)
    setError(null)
    try {
      console.log('🍎 API FETCH', JSON.stringify({ question: input }))
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: input }),
      })

      if (!res.ok) {
        throw new Error('Failed to fetch response')
      }

      const data = await res.json()
      setResponse(data.output)
    } catch (err) {
      console.error('Error:', err)
      setError('An error occurred while generating the response. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Gemini Q&A</CardTitle>
        <CardDescription>Ask a question and get an answer from Gemini</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            placeholder="Enter your question"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                generateResponse()
              }
            }}
          />
          <Button onClick={generateResponse} disabled={isLoading || !input.trim()}>
            {isLoading ? 'Asking...' : 'Ask'}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2">Response:</h3>
          {isLoading ? (
            <div className="bg-muted p-4 rounded-md">Loading...</div>
          ) : error ? (
            <div className="bg-red-100 text-red-800 p-4 rounded-md">{error}</div>
          ) : response ? (
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
              {response}
            </div>
          ) : (
            <div className="bg-muted p-4 rounded-md">
              Your answer will appear here
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
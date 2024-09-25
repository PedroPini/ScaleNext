'use client'

import { CheckCircle, XCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SuccessPage() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
    const [message, setMessage] = useState('')
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')

    useEffect(() => {
        if (sessionId) {
            verifyPayment(sessionId)
        } else {
            setStatus('error')
            setMessage('No session ID found. Please try again or contact support.')
        }
    }, [sessionId])

    const verifyPayment = async (sessionId: string) => {
        try {
            const response = await fetch('/api/stripe/verify-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId }),
            })

            const data = await response.json()

            if (data.success) {
                setStatus('success')
                setMessage('Your payment was successful! Thank you for your purchase.')
            } else {
                setStatus('error')
                setMessage('There was an issue verifying your payment. Please contact support.')
            }
        } catch (error) {
            setStatus('error')
            setMessage('An error occurred while verifying your payment. Please try again or contact support.')
        }
    }

    return (

        <div className="container mx-auto py-10 flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        {status === 'loading' ? 'Processing Payment' : status === 'success' ? 'Payment Successful' : 'Payment Error'}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    {status === 'loading' ? (
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
                    ) : status === 'success' ? (
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    ) : (
                        <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    )}
                    <CardDescription>{message}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={() => window.location.href = '/'}>Return to Home</Button>
                </CardFooter>
            </Card>
        </div>

    )
}
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

const CheckoutButton = ({ items }) => {
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)

        const res = await fetch('/api/stripe/checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }),
        })

        const { sessionId } = await res.json()
        const stripe = await stripePromise
        await stripe.redirectToCheckout({ sessionId })
        setLoading(false)
    }

    return (
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Loading...' : 'Checkout'}
        </button>
    )
}

export default CheckoutButton

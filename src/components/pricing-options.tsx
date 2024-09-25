'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Check, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ContactForm from '@/components/email/forms/modal/contact-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PricingPlan {
  title: string
  description: string
  monthlyPrice: number | string
  yearlyPrice: number | string
  features: string[]
  cta: string
  ctaVariant: 'default' | 'outline'
  highlighted?: boolean
}

const pricingData: PricingPlan[] = [
  {
    title: 'Hobby',
    description: 'For individual developers',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    features: ['Personal projects', 'Static websites', 'Limited Serverless Functions'],
    cta: 'Get Started',
    ctaVariant: 'default',
  },
  {
    title: 'Pro',
    description: 'For small teams and professionals',
    monthlyPrice: 20,
    yearlyPrice: 192,
    features: ['Team collaboration', 'Increased usage limits', 'Custom domains and SSL'],
    cta: 'Upgrade to Pro',
    ctaVariant: 'default',
    highlighted: true,
  },
  {
    title: 'Enterprise',
    description: 'For large teams and organizations',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    features: ['Advanced security features', 'Dedicated support', 'Custom contracts and SLAs'],
    cta: 'Contact Sales',
    ctaVariant: 'outline',
  },
]

const PricingCard = ({
  plan,
  isYearly,
  isLoading,
  onCheckout,
}: {
  plan: PricingPlan
  isYearly: boolean
  isLoading: boolean
  onCheckout: () => void
}) => {
  const price = typeof plan.monthlyPrice === 'number'
    ? `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
    : plan.monthlyPrice

  return (
    <Card className={`flex flex-col ${plan.highlighted ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex-grow">
        <p className="text-3xl font-bold">
          {price}
          {typeof plan.monthlyPrice === 'number' && (
            <span className="text-sm font-normal">/{isYearly ? 'year' : 'month'}</span>
          )}
        </p>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          variant={plan.ctaVariant}
          className="w-full"
          onClick={onCheckout}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            plan.cta
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function PricingOptions() {
  const [isYearly, setIsYearly] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({})
  const router = useRouter()

  const handleCheckout = async (planTitle: string, price: number | string) => {
    if (typeof price !== 'number') {
      if (planTitle === 'Hobby') {
        router.push('/csr')
      } else if (planTitle === 'Enterprise') {
        setOpenModal(true);
      }
      return
    }

    // Set loading state for the specific plan
    setLoadingStates(prevState => ({ ...prevState, [planTitle]: true }))

    try {
      const response = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planTitle,
          price,
          interval: isYearly ? 'year' : 'month',
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error('Error:', error)
        }
      }
    } catch (err) {
      console.error('Error:', err)
    } finally {
      // Reset loading state for the specific plan
      setLoadingStates(prevState => ({ ...prevState, [planTitle]: false }))
    }
  }

  return (
    <div className="container mx-auto py-10">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that&apos;s right for you and start improving your productivity today.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'font-bold' : ''}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="Toggle yearly pricing" />
            <span className={`text-sm ${isYearly ? 'font-bold' : ''}`}>Yearly</span>
            {isYearly && <span className="text-sm text-green-600 font-bold">(Save 20%)</span>}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                isYearly={isYearly}
                isLoading={!!loadingStates[plan.title]}
                onCheckout={() => handleCheckout(plan.title, isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
              />
            ))}
          </div>
          <ContactForm open={openModal} setOpen={setOpenModal} />
        </div>
      </section>

    </div>
  )
}

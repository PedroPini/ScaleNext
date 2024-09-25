import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CTA() {
    return (
        <div className="w-full">
            {/* Call to Action Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 ">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Boost Your Productivity Today
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Join thousands of satisfied users and take your workflow to the next level.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex space-x-2">
                                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                                <Button type="submit">Get Started</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}

        </div>
    )
}

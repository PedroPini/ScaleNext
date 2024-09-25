
import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'


export default function Features() {
    return (
        <div className="flex flex-col ">
            <main className="flex-1">
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Powerful Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'AI-Powered Insights', description: 'Harness the power of artificial intelligence to gain valuable insights and make data-driven decisions.' },
                                { title: 'Seamless Integration', description: 'Easily integrate with your existing tools and workflows for a smooth transition.' },
                                { title: 'Real-time Collaboration', description: 'Work together with your team in real-time, no matter where they are in the world.' },
                                { title: 'Advanced Analytics', description: 'Dive deep into your data with our advanced analytics tools and customizable dashboards.' },
                                { title: 'Automated Workflows', description: 'Save time and reduce errors with our intelligent automation features.' },
                                { title: '24/7 Support', description: 'Our dedicated support team is always ready to help you succeed.' },
                            ].map((feature, index) => (
                                <Card key={index} className="transition-all hover:shadow-lg">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <Check className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


            </main>

        </div>
    )
}
import config from "@/config";
import ButtonCheckout from "./button-checkout";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils"; // Shadcn helper for conditional classes

const Pricing = () => {
    return (
        <section className="bg-base-200 overflow-hidden" id="pricing">
            <div className="py-24 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8">Pricing</p>
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
                        Save hours of repetitive code and ship faster!
                    </h2>
                </div>

                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {config.stripe.plans.map((plan) => (
                        <Card
                            key={plan.priceId}
                            className={cn("relative w-full max-w-lg", {
                                "border-primary border-2": plan.isFeatured, // Highlight the featured plan
                            })}
                        >
                            {plan.isFeatured && (
                                <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    POPULAR
                                </Badge>
                            )}
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>
                                {plan.description && <p className="text-muted-foreground">{plan.description}</p>}
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2 items-end">
                                    {plan.priceAnchor && (
                                        <p className="line-through text-muted-foreground">${plan.priceAnchor}</p>
                                    )}
                                    <p className="text-5xl font-extrabold">${plan.price}</p>
                                    <p className="text-xs text-muted-foreground uppercase font-semibold">USD</p>
                                </div>
                                {plan.features && (
                                    <ul className="space-y-2 text-base">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-5 h-5 text-primary"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>{feature.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                            <CardFooter className="flex flex-col items-center">
                                <ButtonCheckout priceId={plan.priceId} />
                                <p className="text-sm text-muted-foreground mt-2">Pay once. Access forever.</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

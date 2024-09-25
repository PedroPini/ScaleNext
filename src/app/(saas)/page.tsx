
import CTA from '@/components/cta';
import { PricingOptions } from '@/components/pricing-options';
export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-8 md:space-y-16">
        <CTA />
        <PricingOptions />
      </div>
    </div>
  );
}

import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import FAQ from "../components/pricing/FAQ";
import CTA from "../components/CTA";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black">
            <PricingHero />
            <PricingPlans />
            <FAQ />
            <CTA />
        </main>
    );
}

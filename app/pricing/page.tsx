import type { Metadata } from "next";
import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import FAQ from "../components/pricing/FAQ";
import CTA from "../components/CTA";

export const metadata: Metadata = {
    title: "Pricing & Plans",
    description: "Flexible marketing plans tailored to your brand's growth stage. From Starter to Enterprise solutions.",
};

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

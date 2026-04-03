import type { Metadata } from "next";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServiceBlock from "../components/services/ServiceBlock";
import ServicesComparison from "../components/services/ServicesComparison";
import Process from "../components/home/Process";
import CTA from "../components/CTA";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our comprehensive marketing services: Brand Identity, Social Growth, High-End Design, Ads & Automation.",
};

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen">
            <ServicesHero />
            <ServicesIntro />

            {/* Service Blocks 1 - 4 with alternating layouts */}
            <div className="flex flex-col gap-0">
                <ServiceBlock
                    title="Visual Identity & Social Growth"
                    description="Building a cohesive brand that speaks to your audience through iconic visuals and hyper-active social strategies."
                    tags={["Branding", "Social Media", "Community"]}
                    image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                    index={1}
                />
                <ServiceBlock
                    title="High-End Design & Video"
                    description="Cinematic content and pixel-perfect design that elevates your brand perception to premium heights."
                    tags={["Video Production", "UI/UX", "Motion Graphics"]}
                    image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                    reversed
                    index={2}
                />
                <ServiceBlock
                    title="Ads & SEO Optimization"
                    description="Data-driven visibility through surgical precision in search engine optimization and performance paid media."
                    tags={["Google Ads", "Meta Ads", "Organic Growth"]}
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    index={3}
                />
                <ServiceBlock
                    title="Business Automation & Workflows"
                    description="Eliminate friction. We build custom-tailored automation systems that handle your repetitive tasks at scale."
                    tags={["CRM", "Zapier", "System Design"]}
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    reversed
                    index={4}
                />
            </div>

            <ServicesComparison />
            <Process />
            <CTA />
        </main>
    );
}

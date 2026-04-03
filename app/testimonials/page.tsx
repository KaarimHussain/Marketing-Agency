import type { Metadata } from "next";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import FeaturedStory from "../components/testimonials/FeaturedStory";
import ImpactStats from "../components/testimonials/ImpactStats";
import ReviewsGrid from "../components/testimonials/ReviewsGrid";
import CTA from "../components/CTA";

export const metadata: Metadata = {
    title: "Testimonials",
    description: "Read what our clients say about how Vesol Marketing helped them achieve breakthroughs in growth and design.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-black">
            <TestimonialsHero />
            <FeaturedStory />
            <ImpactStats />
            <ReviewsGrid />
            <CTA />
        </main>
    );
}

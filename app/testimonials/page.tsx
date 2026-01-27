import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import FeaturedStory from "../components/testimonials/FeaturedStory";
import ImpactStats from "../components/testimonials/ImpactStats";
import ReviewsGrid from "../components/testimonials/ReviewsGrid";
import CTA from "../components/CTA";

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

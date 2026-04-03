import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import ValuesGrid from "../components/about/ValuesGrid";
import Team from "../components/about/Team";
import CTA from "../components/CTA";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the mission, values, and talented team behind Vesol Marketing agency.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <AboutHero />
            <OurStory />
            <ValuesGrid />
            <Team />
            <CTA />
        </main>
    );
}

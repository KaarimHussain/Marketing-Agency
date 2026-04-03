import type { Metadata } from "next";
import WorkHero from "../components/work/WorkHero";
import ProjectGallery from "../components/work/ProjectGallery";
import CTA from "../components/CTA";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore our portfolio of successful branding, web design, and digital marketing campaigns.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black">
            <WorkHero />
            <ProjectGallery />
            <CTA />
        </main>
    );
}

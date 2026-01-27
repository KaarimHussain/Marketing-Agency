import WorkHero from "../components/work/WorkHero";
import ProjectGallery from "../components/work/ProjectGallery";
import CTA from "../components/CTA";

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black">
            <WorkHero />
            <ProjectGallery />
            <CTA />
        </main>
    );
}

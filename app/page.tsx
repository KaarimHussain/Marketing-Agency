import Hero from "./components/home/Hero";
import TrustLogos from "./components/home/TrustLogos";
import ProblemPositioning from "./components/home/ProblemPositioning";
import Solutions from "./components/home/Solutions";
import Work from "./components/home/Work";
import Process from "./components/home/Process";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <ProblemPositioning />
      <Solutions />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

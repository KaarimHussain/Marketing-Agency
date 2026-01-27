import About from "./components/home/About";
import Hero from "./components/home/Hero";
import Work from "./components/home/Work";
import Solutions from "./components/home/Solutions";
import Pricing from "./components/home/Pricing";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import Blogs from "./components/home/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Solutions />
      <Pricing />
      <Stats />
      <Testimonials />
      <Blogs />
    </>
  );
}

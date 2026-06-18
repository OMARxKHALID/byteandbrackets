import HeroSection from "../components/sections/hero-section";
import MarqueeSection from "../components/sections/marquee-section";
import ProjectsSection from "../components/sections/projects-section";
import ServicesSection from "../components/sections/services-section";
import ProcessSection from "../components/sections/process-section";
import AboutSection from "../components/sections/about-section";
import TeamSection from "../components/sections/team-section";
import TestimonialsSection from "../components/sections/testimonials-section";
import ContactSection from "../components/sections/contact-section";
import FooterSection from "../components/sections/footer-section";

const Home = () => {
  return (
    <>
      <main id="main-content" className="relative z-10 [overflow-x:clip]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-lime-400 focus:text-neutral-950 focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Home;

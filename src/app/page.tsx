import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { VisionPhilosophySection } from "@/components/sections/VisionPhilosophySection";
import { WhySAJSection } from "@/components/sections/WhySAJSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <>
      {/* Cinematic Hero */}
      <HeroSection />

      {/* Editorial About SAJ Section */}
      <AboutSection />

      {/* Selected Developments - Immersive Project Showcase */}
      <ProjectShowcase />

      {/* Featured Demonstration Architectural Projects Grid */}
      <FeaturedProjectsSection />

      {/* Our Vision & Philosophy Section */}
      <VisionPhilosophySection />

      {/* Why SAJ - Architectural Differentiators & Principles */}
      <WhySAJSection />

      {/* Final Call to Action & Engagement */}
      <CallToActionSection />
    </>
  );
}

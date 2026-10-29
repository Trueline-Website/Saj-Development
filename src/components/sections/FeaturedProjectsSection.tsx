import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { demonstrationProjects } from "@/data/projects";

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Our Portfolio"
      className="py-28 sm:py-36 bg-[#000000] text-white border-t border-neutral-900/90 relative"
    >
      <Container size="wide">
        {/* Section Header: Left Story & Right 'View All Projects →' CTA */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8 pb-8 border-b border-neutral-900/80">
            <div className="max-w-2xl space-y-4">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  OUR PORTFOLIO
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.12] text-white">
                A Vision Shaped <br className="hidden sm:inline" />
                <span className="font-light italic text-neutral-200">
                  Into Landmarks.
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                Explore a collection of considered developments defined by
                architectural precision, thoughtful design, and a lasting vision
                for the built environment.
              </p>
            </div>

            {/* Minimal 'View All Projects →' Link on Right */}
            <div className="shrink-0 pt-2 md:pt-0">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2 border-b border-white hover:border-neutral-400"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Responsive Grid on Desktop with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {demonstrationProjects.slice(0, 3).map((project, index) => (
            <ScrollReveal
              key={project.id}
              variant="fade-up"
              delay={index * 150}
              duration={850}
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

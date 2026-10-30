import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { demonstrationProjects } from "@/data/projects";
import { Project } from "@/types/project";

interface ProjectShowcaseProps {
  projects?: Project[];
  className?: string;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects = demonstrationProjects,
  className = "",
}) => {
  // Use up to 3 showcase projects
  const showcased = projects.slice(0, 3);
  const totalCount = String(showcased.length).padStart(2, "0");

  return (
    <section
      id="showcase"
      aria-label="Project Showcase"
      className={`py-28 sm:py-36 lg:py-44 bg-[#000000] text-white border-t border-neutral-900/90 relative overflow-hidden ${className}`}
    >
      {/* Background Architectural Atmosphere & Hairline Guides */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft centered ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-white/[0.014] rounded-full blur-[170px]" />
        
        {/* Subtle architectural vertical guides */}
        <div className="absolute inset-y-0 left-6 sm:left-12 lg:left-16 w-px bg-neutral-900/40" />
        <div className="absolute inset-y-0 right-6 sm:right-12 lg:right-16 w-px bg-neutral-900/40" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* ======================================================================= */}
        {/* 1. SECTION INTRODUCTION (EDITORIAL HEADER)                              */}
        {/* ======================================================================= */}
        <div className="pb-16 sm:pb-24 border-b border-neutral-900/80 mb-20 sm:mb-28">
          <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-neutral-900">
            {/* Eyebrow */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  SELECTED DEVELOPMENTS
                </span>
              </div>
            </ScrollReveal>

            {/* Metrology Index */}
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                <span className="hidden sm:inline">ARCHITECTURAL EDITORIAL</span>
                <span className="text-neutral-400">01 / {totalCount}</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Main Heading */}
            <div className="lg:col-span-7 xl:col-span-8">
              <ScrollReveal variant="fade-up" delay={150}>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.08] text-white">
                  Architecture That Leaves a{" "}
                  <span className="font-light italic text-neutral-200 block sm:inline">
                    Lasting Impression.
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Supporting Description */}
            <div className="lg:col-span-5 xl:col-span-4 lg:pt-2 space-y-4">
              <ScrollReveal variant="fade-up" delay={300}>
                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Discover a closer perspective on architectural vision, considered design, and the details that shape distinctive spaces. Each development represents an opportunity to translate a broader vision into a meaningful built environment.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 2. IMMERSIVE PROJECT STORYTELLING PANELS                                */}
        {/* ======================================================================= */}
        <div className="space-y-28 sm:space-y-36 lg:space-y-44">
          {showcased.map((project, idx) => {
            const projectNumber = `${String(idx + 1).padStart(2, "0")} / ${totalCount}`;
            const targetHref = project.detailsUrl || `/projects/${project.slug}`;
            const imageSrc = project.coverImage || project.heroImage;
            const projectAlt = project.altText || `Architectural view of ${project.name}`;
            const editorialCopy = project.description || project.shortDescription;

            // Composition rhythm:
            // Index 0: 2/3 image left, 1/3 text right
            // Index 1: Reverse composition (1/3 text left, 2/3 image right)
            // Index 2: Full-width / wide panoramic composition with minimal caption block
            if (idx === 0) {
              return (
                <article
                  key={project.id}
                  aria-label={`${project.name} showcase panel`}
                  className="group relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
                    {/* Large Landscape Architectural Photograph (~2/3 width) */}
                    <div className="lg:col-span-7 xl:col-span-8 order-1">
                      <ScrollReveal variant="fade-up" duration={950} delay={100}>
                        <Link
                          href={targetHref}
                          className="relative block aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#080808] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                          aria-label={`View details of ${project.name}`}
                        >
                          <Image
                            src={imageSrc}
                            alt={projectAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                          {/* Architectural CAD crosshair accents */}
                          <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none">
                            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/50" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/50" />
                            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/50" />
                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/50" />
                          </div>

                          {/* Top Inset Reticle Tag */}
                          <div className="absolute top-8 left-8 z-10">
                            <span className="inline-flex items-center px-3 py-1.5 text-[10px] font-mono tracking-[0.24em] uppercase bg-black/85 backdrop-blur-md border border-neutral-800 rounded-md text-neutral-300">
                              {project.category}
                            </span>
                          </div>

                          {/* Bottom corner notation */}
                          <div className="absolute bottom-8 right-8 z-10 hidden sm:block text-[10px] font-mono tracking-widest text-neutral-400 bg-black/80 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md">
                            DXB · CANAL CORRIDOR
                          </div>
                        </Link>
                      </ScrollReveal>
                    </div>

                    {/* Editorial Storytelling Column (~1/3 width) */}
                    <div className="lg:col-span-5 xl:col-span-4 order-2 space-y-6 lg:pl-2">
                      <ScrollReveal variant="fade-up" duration={850} delay={200}>
                        {/* Project Number */}
                        <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                          <span className="text-xs font-mono tracking-[0.28em] text-neutral-400 uppercase">
                            PROJECT {projectNumber}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
                        </div>

                        {/* Location */}
                        {project.location && (
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 pt-1">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        )}

                        {/* Verified Project Name */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                          <Link
                            href={targetHref}
                            className="focus-visible:outline-none focus-visible:underline"
                          >
                            {project.name}
                          </Link>
                        </h3>

                        {/* Divider */}
                        <div className="w-12 h-px bg-neutral-800 group-hover:w-24 group-hover:bg-white transition-all duration-300" />

                        {/* Editorial Description (concise 30-50 words) */}
                        {editorialCopy && (
                          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                            {editorialCopy}
                          </p>
                        )}

                        {/* Architectural Highlights Pill Tags */}
                        {project.architecturalHighlights && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {project.architecturalHighlights.slice(0, 2).map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-400 border border-neutral-900 bg-[#080808] px-2.5 py-1 rounded-md"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Minimal CTA */}
                        <div className="pt-4">
                          <Link
                            href={targetHref}
                            className="group/cta inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2 border-b border-white hover:border-neutral-400"
                          >
                            <span>Explore Project</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                          </Link>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                </article>
              );
            }

            if (idx === 1) {
              return (
                <article
                  key={project.id}
                  aria-label={`${project.name} showcase panel`}
                  className="group relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
                    {/* Editorial Storytelling Column on Left (~1/3 width) */}
                    <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1 space-y-6 lg:pr-2">
                      <ScrollReveal variant="fade-up" duration={850} delay={200}>
                        {/* Project Number */}
                        <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                          <span className="text-xs font-mono tracking-[0.28em] text-neutral-400 uppercase">
                            PROJECT {projectNumber}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
                        </div>

                        {/* Location */}
                        {project.location && (
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 pt-1">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        )}

                        {/* Verified Project Name */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                          <Link
                            href={targetHref}
                            className="focus-visible:outline-none focus-visible:underline"
                          >
                            {project.name}
                          </Link>
                        </h3>

                        {/* Divider */}
                        <div className="w-12 h-px bg-neutral-800 group-hover:w-24 group-hover:bg-white transition-all duration-300" />

                        {/* Editorial Description */}
                        {editorialCopy && (
                          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                            {editorialCopy}
                          </p>
                        )}

                        {/* Architectural Highlights Pill Tags */}
                        {project.architecturalHighlights && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {project.architecturalHighlights.slice(0, 2).map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-400 border border-neutral-900 bg-[#080808] px-2.5 py-1 rounded-md"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Minimal CTA */}
                        <div className="pt-4">
                          <Link
                            href={targetHref}
                            className="group/cta inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2 border-b border-white hover:border-neutral-400"
                          >
                            <span>Explore Project</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                          </Link>
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Reverse Composition: Large Landscape Architectural Photograph on Right (~2/3 width) */}
                    <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2">
                      <ScrollReveal variant="fade-up" duration={950} delay={100}>
                        <Link
                          href={targetHref}
                          className="relative block aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#080808] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                          aria-label={`View details of ${project.name}`}
                        >
                          <Image
                            src={imageSrc}
                            alt={projectAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                          {/* Architectural CAD crosshair accents */}
                          <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none">
                            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/50" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/50" />
                            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/50" />
                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/50" />
                          </div>

                          {/* Top Inset Reticle Tag */}
                          <div className="absolute top-8 left-8 z-10">
                            <span className="inline-flex items-center px-3 py-1.5 text-[10px] font-mono tracking-[0.24em] uppercase bg-black/85 backdrop-blur-md border border-neutral-800 rounded-md text-neutral-300">
                              {project.category}
                            </span>
                          </div>

                          {/* Bottom corner notation */}
                          <div className="absolute bottom-8 right-8 z-10 hidden sm:block text-[10px] font-mono tracking-widest text-neutral-400 bg-black/80 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md">
                            DXB · COASTAL HORIZON
                          </div>
                        </Link>
                      </ScrollReveal>
                    </div>
                  </div>
                </article>
              );
            }

            // Project 03: Wide, Immersive Panoramic Architectural Spread with Minimal Caption Block
            return (
              <article
                key={project.id}
                aria-label={`${project.name} showcase panel`}
                className="group relative"
              >
                <ScrollReveal variant="fade-up" duration={1050} delay={150}>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-2xl bg-[#080808] border border-neutral-800/90 group">
                    <Image
                      src={imageSrc}
                      alt={projectAlt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none" />

                    {/* Framing CAD Reticle */}
                    <div className="absolute inset-5 sm:inset-8 lg:inset-10 border border-white/10 rounded-xl pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/50" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/50" />
                      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/50" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/50" />

                      {/* Top Corner Badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-neutral-800 rounded-md">
                        PROJECT {projectNumber} • {project.category}
                      </div>
                    </div>

                    {/* Minimal Inset Editorial Storytelling Block */}
                    <div className="absolute bottom-6 sm:bottom-10 lg:bottom-14 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 z-10">
                      <div className="max-w-4xl bg-black/85 backdrop-blur-md p-6 sm:p-8 lg:p-10 border border-neutral-800/90 rounded-2xl shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end justify-between">
                          <div className="md:col-span-8 space-y-3">
                            {project.location && (
                              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                                <span>{project.location}</span>
                              </div>
                            )}

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                              <Link
                                href={targetHref}
                                className="focus-visible:outline-none focus-visible:underline"
                              >
                                {project.name}
                              </Link>
                            </h3>

                            {editorialCopy && (
                              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl pt-1">
                                {editorialCopy}
                              </p>
                            )}
                          </div>

                          <div className="md:col-span-4 flex md:justify-end shrink-0 pt-2 md:pt-0">
                            <Link
                              href={targetHref}
                              className="group/cta inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2 border-b border-white hover:border-neutral-400"
                            >
                              <span>Explore Project</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </article>
            );
          })}
        </div>

        {/* ======================================================================= */}
        {/* 3. OPTIONAL VIEW ALL CTA                                                */}
        {/* ======================================================================= */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="pt-20 sm:pt-28 mt-20 sm:mt-28 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 block">
                COMPLETE PORTFOLIO
              </span>
              <p className="text-sm text-neutral-400 font-light">
                Discover our full collection of upcoming landmark residential developments.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2.5 px-6 border border-neutral-800 bg-[#080808] hover:border-neutral-500"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

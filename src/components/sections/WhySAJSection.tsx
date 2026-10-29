import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface DifferentiatorPrinciple {
  number: string;
  category: string;
  heading: string;
  description: string;
  tag: string;
}

const differentiators: DifferentiatorPrinciple[] = [
  {
    number: "01",
    category: "ARCHITECTURAL INTEGRITY",
    heading: "Design with Purpose.",
    description:
      "Every architectural decision should contribute to a coherent vision, balancing form, function, proportion, and the character of the surrounding environment.",
    tag: "COHERENCE & PROPORTION",
  },
  {
    number: "02",
    category: "STRUCTURAL DISCIPLINE",
    heading: "Precision in Every Detail.",
    description:
      "A considered approach to structure, geometry, and detailing helps create architecture that feels balanced, intentional, and enduring.",
    tag: "RIGOR & CRAFTSMANSHIP",
  },
  {
    number: "03",
    category: "TIMELESS DESIGN",
    heading: "Beyond Passing Trends.",
    description:
      "Inspired by enduring design principles, SAJ's philosophy places lasting elegance and architectural clarity at the heart of the built environment.",
    tag: "PERMANENCE & CLARITY",
  },
  {
    number: "04",
    category: "A LASTING LEGACY",
    heading: "Built Around a Bigger Vision.",
    description:
      "With a vision shaped by Dubai's evolving skyline and the richness of Emirati heritage, SAJ aspires to create landmarks that leave a meaningful and lasting impression.",
    tag: "EMIRATI HERITAGE · DXB",
  },
];

export const WhySAJSection: React.FC = () => {
  return (
    <section
      id="why-saj"
      aria-label="Why SAJ Development"
      className="relative bg-black text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft centered ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.015] rounded-full blur-[180px]" />
        {/* Architectural hairline guide on side */}
        <div className="absolute inset-y-0 right-8 sm:right-16 lg:right-24 w-px bg-neutral-900/60" />
      </div>

      <Container size="wide" className="relative z-10">
        
        {/* ======================================================================= */}
        {/* 1. TOP HEADER: EDITORIAL BRAND ANCHOR                                   */}
        {/* ======================================================================= */}
        <div className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 border-b border-neutral-900">
          
          {/* Eyebrow & Status Lockup */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-neutral-900">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  THE SAJ DIFFERENCE
                </span>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                <span className="hidden sm:inline">APPROACH &amp; DISCIPLINE</span>
                <span className="text-neutral-400">04 PILLARS</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Monumental Headline & Narrative Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <ScrollReveal variant="fade-up" delay={150}>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.04] text-white">
                  Excellence Is in the Details.
                </h2>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 lg:pt-3 space-y-4">
              <ScrollReveal variant="fade-up" delay={300}>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  Exceptional architecture is shaped by more than appearance. It
                  emerges from a clear vision, disciplined design, thoughtful
                  decisions, and an appreciation for the details that define a space.
                </p>
              </ScrollReveal>
            </div>
          </div>

        </div>

        {/* ======================================================================= */}
        {/* 2. THE 4 PILLARS: CLEAN ARCHITECTURAL 2x2 EDITORIAL GRID                 */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-neutral-900 border-b border-neutral-900">
          
          {/* Column 1 (Pillars 01 & 03) */}
          <div className="divide-y divide-neutral-900 lg:border-r border-neutral-900 lg:pr-12 xl:pr-16">
            
            {/* Principle 01 */}
            <ScrollReveal variant="fade-up" delay={100} duration={850}>
              <div className="py-14 sm:py-16 lg:py-20 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {differentiators[0].number}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 border border-neutral-900 px-3 py-1">
                    {differentiators[0].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  {differentiators[0].heading}
                </h3>

                <div className="w-10 h-px bg-neutral-800 mb-6 group-hover:w-20 group-hover:bg-white transition-all duration-300" />

                <p className="text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                  {differentiators[0].description}
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>{differentiators[0].tag}</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Principle 03 */}
            <ScrollReveal variant="fade-up" delay={250} duration={850}>
              <div className="py-14 sm:py-16 lg:py-20 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {differentiators[2].number}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 border border-neutral-900 px-3 py-1">
                    {differentiators[2].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  {differentiators[2].heading}
                </h3>

                <div className="w-10 h-px bg-neutral-800 mb-6 group-hover:w-20 group-hover:bg-white transition-all duration-300" />

                <p className="text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                  {differentiators[2].description}
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>{differentiators[2].tag}</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Column 2 (Pillars 02 & 04) */}
          <div className="divide-y divide-neutral-900 lg:pl-12 xl:pl-16">
            
            {/* Principle 02 */}
            <ScrollReveal variant="fade-up" delay={200} duration={850}>
              <div className="py-14 sm:py-16 lg:py-20 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {differentiators[1].number}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 border border-neutral-900 px-3 py-1">
                    {differentiators[1].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  {differentiators[1].heading}
                </h3>

                <div className="w-10 h-px bg-neutral-800 mb-6 group-hover:w-20 group-hover:bg-white transition-all duration-300" />

                <p className="text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                  {differentiators[1].description}
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>{differentiators[1].tag}</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Principle 04 */}
            <ScrollReveal variant="fade-up" delay={350} duration={850}>
              <div className="py-14 sm:py-16 lg:py-20 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {differentiators[3].number}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 border border-neutral-900 px-3 py-1">
                    {differentiators[3].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  {differentiators[3].heading}
                </h3>

                <div className="w-10 h-px bg-neutral-800 mb-6 group-hover:w-20 group-hover:bg-white transition-all duration-300" />

                <p className="text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                  {differentiators[3].description}
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>{differentiators[3].tag}</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* ======================================================================= */}
        {/* 3. ARCHITECTURAL PANORAMIC FOOTER PLATE                                */}
        {/* ======================================================================= */}
        <div className="py-20 sm:py-28 lg:py-32">
          <ScrollReveal variant="scale-up" duration={1100} delay={150}>
            <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px] overflow-hidden bg-[#070707] border border-neutral-900 group">
              <Image
                src="/images/architecture/saj-hero-cover-full.jpg"
                alt="Sculptural architectural facade with interplay of light and structural shadow by SAJ Development"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center grayscale contrast-120 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
              />

              {/* Atmosphere overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

              {/* Minimalist CAD Inset Guides */}
              <div className="absolute inset-6 sm:inset-10 border border-white/10 pointer-events-none">
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/40" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/40" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/40" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/40" />

                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-widest uppercase text-white/50">
                  SAJ ARCHIVE · ELEVATION STUDY
                </div>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-300 bg-black/80 backdrop-blur-md px-5 py-3 border border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-white" />
                  <span className="text-white">PURPOSEFUL ARCHITECTURE</span>
                </div>
                <span className="text-neutral-400">AUTHENTIC EMIRATI HERITAGE · DUBAI</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </Container>
    </section>
  );
};

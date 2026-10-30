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
  image: string;
  alt: string;
  metric: string;
}

const differentiators: DifferentiatorPrinciple[] = [
  {
    number: "01",
    category: "ARCHITECTURAL INTEGRITY",
    heading: "Design with Purpose.",
    description:
      "Every architectural decision should contribute to a coherent vision, balancing form, function, proportion, and the character of the surrounding environment.",
    tag: "COHERENCE & PROPORTION",
    image: "/images/architecture/saj-detail-01.jpg",
    alt: "Architectural form and minimalist lighting detail",
    metric: "AXIS I · FORM",
  },
  {
    number: "02",
    category: "STRUCTURAL DISCIPLINE",
    heading: "Precision in Every Detail.",
    description:
      "A considered approach to structure, geometry, and detailing helps create architecture that feels balanced, intentional, and enduring.",
    tag: "RIGOR & CRAFTSMANSHIP",
    image: "/images/architecture/saj-detail-02.jpg",
    alt: "Geometric precision and structural steel drafting",
    metric: "AXIS II · RIGOR",
  },
  {
    number: "03",
    category: "TIMELESS DESIGN",
    heading: "Beyond Passing Trends.",
    description:
      "Inspired by enduring design principles, SAJ's philosophy places lasting elegance and architectural clarity at the heart of the built environment.",
    tag: "PERMANENCE & CLARITY",
    image: "/images/architecture/saj-detail-03.jpg",
    alt: "Minimalist luxury materiality and enduring lines",
    metric: "AXIS III · MATERIALITY",
  },
  {
    number: "04",
    category: "A LASTING LEGACY",
    heading: "Built Around a Bigger Vision.",
    description:
      "With a vision shaped by Dubai's evolving skyline and the richness of Emirati heritage, SAJ aspires to create landmarks that leave a meaningful and lasting impression.",
    tag: "EMIRATI HERITAGE · DXB",
    image: "/images/architecture/saj-detail-04.jpg",
    alt: "Monumental architectural presence under Dubai sunlight",
    metric: "AXIS IV · LEGACY",
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
        {/* 2. THE 4 PILLARS: ULTRA-SMOOTH HARDWARE-ACCELERATED INFINITE CAROUSEL    */}
        {/* ======================================================================= */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 py-14 sm:py-20 border-b border-neutral-900 overflow-hidden">
          
          {/* Subtle gradient side vignettes for seamless endless loop blending */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-l from-black via-black/70 to-transparent" />

          {/* Marquee Track (Duplicated twice to form an unbroken seamless 50% loop) */}
          <div className="animate-infinite-carousel flex items-stretch gap-6 sm:gap-8 px-4 sm:px-8">
            {[...differentiators, ...differentiators].map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                className="group relative flex flex-col justify-between w-[320px] sm:w-[420px] lg:w-[460px] flex-shrink-0 bg-[#080808] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 rounded-xl overflow-hidden select-none"
              >
                {/* Background Subtle Gradient & Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/80 pointer-events-none" />

                {/* 1. Architectural Visual Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    className="object-cover object-center contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-black/20 pointer-events-none" />

                  {/* Blueprint Inset Metrology Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-2.5 py-1 border border-neutral-800 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                    <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                    <span>{item.metric}</span>
                  </div>

                  {/* Top Right Principle Category Badge */}
                  <div className="absolute top-4 right-4 z-10 font-mono text-[9px] tracking-widest uppercase text-neutral-400 bg-black/85 backdrop-blur-md px-2.5 py-1 border border-neutral-800 rounded-md">
                    {item.category}
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-7 sm:p-9 flex flex-col justify-between flex-1 relative z-10 space-y-6">
                  <div>
                    {/* Monolithic Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                        {item.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                        SAJ STANDARD
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                      {item.heading}
                    </h3>

                    {/* Dynamic expanding underline */}
                    <div className="w-10 h-px bg-neutral-800 my-4 group-hover:w-20 group-hover:bg-white transition-all duration-500" />

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metrology Strip with Arrow Animation */}
                  <div className="pt-6 border-t border-neutral-900/90 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    <span className="group-hover:text-neutral-300 transition-colors">{item.tag}</span>
                    <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

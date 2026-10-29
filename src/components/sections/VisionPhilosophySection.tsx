import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const VisionPhilosophySection: React.FC = () => {
  return (
    <section
      id="vision"
      aria-label="Our Vision and Philosophy"
      className="relative bg-black text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* Background Architectural Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.012] rounded-full blur-[160px]" />
        {/* Subtle architectural vertical line */}
        <div className="absolute inset-y-0 right-12 lg:right-24 w-px bg-neutral-900/60" />
      </div>

      {/* ========================================================================= */}
      {/* PART 1: SECTION HEADER & MONUMENTAL STATEMENT                            */}
      {/* ========================================================================= */}
      <div className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 relative z-10 border-b border-neutral-900/80">
        <Container size="wide">
          
          {/* Eyebrow & Index Metadata */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-neutral-900">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  OUR VISION &amp; PHILOSOPHY
                </span>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                <span className="hidden sm:inline">DUBAI, UAE</span>
                <span className="text-neutral-400">25.1972° N · 55.2744° E</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Monumental Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <ScrollReveal variant="fade-up" delay={150}>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold tracking-[-0.035em] leading-[1.04] text-white">
                  Designing Beyond <br />
                  the Present.{" "}
                  <span className="font-light italic text-neutral-400 block sm:inline">
                    Building for Generations.
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 lg:pt-4 space-y-6">
              <ScrollReveal variant="fade-up" delay={300}>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  At SAJ, architecture begins with a vision and takes shape through
                  discipline, thoughtful design, and a commitment to lasting quality.
                </p>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mt-4">
                  Inspired by the character of Dubai and the richness of Emirati
                  heritage, our philosophy is centred on creating spaces that feel
                  purposeful today and remain meaningful tomorrow.
                </p>
              </ScrollReveal>
            </div>
          </div>

        </Container>
      </div>

      {/* ========================================================================= */}
      {/* PART 2: VISION MANIFESTO & MONUMENTAL ARCHITECTURAL VISUAL               */}
      {/* ========================================================================= */}
      <div className="relative z-10 border-b border-neutral-900/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[640px]">
          
          {/* Left: The Vision Manifesto Quote (5 cols on lg) */}
          <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-between bg-[#050505] relative border-b lg:border-b-0 lg:border-r border-neutral-900">
            {/* Watermark brand emblem in subtle low opacity */}
            <div className="absolute top-10 right-10 w-28 h-28 pointer-events-none select-none opacity-[0.03] invert">
              <Image
                src="/brand/saj-emblem-clean-white.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <ScrollReveal variant="fade-up" delay={100} className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400">
                  OUR VISION
                </span>
                <span className="h-px w-6 bg-neutral-800" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                  EST. DUBAI
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-white leading-tight">
                To Shape an Enduring <br />
                Architectural Legacy.
              </h3>

              <div className="w-12 h-px bg-neutral-800" />

              <blockquote className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                “We envision a built environment defined by architectural integrity,
                considered innovation, and timeless design—creating landmarks that
                contribute meaningfully to Dubai’s evolving skyline.”
              </blockquote>
            </ScrollReveal>

            {/* Bottom Meta Bar */}
            <div className="pt-10 mt-10 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
              <span>Authentic Emirati Heritage</span>
              <span className="text-neutral-400">ARCHITECTURAL DISCIPLINE</span>
            </div>
          </div>

          {/* Right: Full-bleed Panoramic Architectural Visual Showcase (7 cols on lg) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#070707] group">
            <ScrollReveal variant="fade-in" duration={1200} className="w-full h-full min-h-[380px] lg:min-h-[640px]">
              <Image
                src="/images/architecture/saj-vision-monolith.jpg"
                alt="Contemporary sculptural architectural geometry by SAJ Development"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
              />
              
              {/* Atmospheric overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
              
              {/* Architectural Grid Reticle Lines */}
              <div className="absolute inset-6 sm:inset-10 border border-white/10 pointer-events-none">
                {/* Corner crosshairs */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-white/40" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-white/40" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-white/40" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-white/40" />

                {/* Top corner notation */}
                <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest uppercase text-white/50">
                  DXB · ELEVATION DETAIL
                </div>
              </div>

              {/* Bottom Inset Architectural Metadata Tag */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-300 bg-black/75 backdrop-blur-md px-5 py-3 border border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white" />
                  <span className="text-white">STRUCTURAL GEOMETRY</span>
                </div>
                <span className="text-neutral-400">SCALE: 1:1 MONOLITHIC</span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* PART 3: THE THREE PILLARS (EDITORIAL MANIFESTO SPREAD)                    */}
      {/* ========================================================================= */}
      <div className="py-24 sm:py-32 lg:py-36 relative z-10">
        <Container size="wide">
          
          {/* Subsection Header */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-neutral-900 gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  OUR PHILOSOPHY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Core Guiding Principles
                </h3>
              </div>
              <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                PHILOSOPHY // 01 — 03
              </div>
            </div>
          </ScrollReveal>

          {/* Three Principles: Clean Editorial Architecture (Divided Columns with Stagger) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-900">
            
            {/* Principle 01 */}
            <ScrollReveal variant="fade-up" delay={100} duration={800}>
              <div className="py-10 md:py-0 md:px-8 lg:px-12 first:md:pl-0 last:md:pr-0 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    01
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-neutral-400 border border-neutral-900 px-2.5 py-1">
                    INTENT
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  Purposeful Design
                </h4>

                <div className="w-8 h-px bg-neutral-800 mb-6 group-hover:w-16 group-hover:bg-white transition-all duration-300" />

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Architecture should balance visual expression with thoughtful
                  planning, functionality, and a clear design intent. Every space
                  is calibrated to enhance how people experience life.
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>Form &amp; Function</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 transition-colors">→</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Principle 02 */}
            <ScrollReveal variant="fade-up" delay={250} duration={800}>
              <div className="py-10 md:py-0 md:px-8 lg:px-12 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    02
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-neutral-400 border border-neutral-900 px-2.5 py-1">
                    RIGOR
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  Structural Discipline
                </h4>

                <div className="w-8 h-px bg-neutral-800 mb-6 group-hover:w-16 group-hover:bg-white transition-all duration-300" />

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Precision, considered detailing, and a disciplined approach to
                  the built environment form the foundation of enduring architecture.
                  Engineering integrity remains uncompromised.
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>Precision &amp; Detailing</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 transition-colors">→</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Principle 03 */}
            <ScrollReveal variant="fade-up" delay={400} duration={800}>
              <div className="py-10 md:py-0 md:px-8 lg:px-12 first:md:pl-0 last:md:pr-0 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-300">
                    03
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-neutral-400 border border-neutral-900 px-2.5 py-1">
                    HORIZON
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-200 transition-colors">
                  Timeless Living
                </h4>

                <div className="w-8 h-px bg-neutral-800 mb-6 group-hover:w-16 group-hover:bg-white transition-all duration-300" />

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Create environments guided by lasting design principles rather
                  than short-lived trends, with an enduring emphasis on quality,
                  comfort, and meaningful human experiences.
                </p>

                <div className="pt-8 mt-8 border-t border-neutral-950 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>Generational Value</span>
                  <span className="text-neutral-400 group-hover:text-neutral-300 transition-colors">→</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </Container>
      </div>

    </section>
  );
};

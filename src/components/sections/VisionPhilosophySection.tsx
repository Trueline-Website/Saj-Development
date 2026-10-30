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
      {/* PART 1: SECTION HEADER & MONUMENTAL STATEMENT WITH ARCHITECTURAL VISUAL   */}
      {/* ========================================================================= */}
      <div className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 relative z-10 border-b border-neutral-900/80">
        <Container size="wide">
          
          {/* Eyebrow & Index Metadata Bar */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-neutral-900">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  OUR VISION &amp; PHILOSOPHY
                </span>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                <span className="hidden sm:inline">DUBAI, UAE</span>
                <span className="text-neutral-300 font-medium">25.1972° N · 55.2744° E</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Monumental Headline, Copy & Supporting Architectural Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              <ScrollReveal variant="fade-up" delay={150}>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.035em] leading-[1.04] text-white">
                  Designing Beyond <br />
                  the Present.{" "}
                  <span className="font-light italic text-neutral-300 block sm:inline">
                    Building for Generations.
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={250}>
                <div className="w-20 h-px bg-neutral-800" />
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    At SAJ, architecture begins with a vision and takes shape through
                    discipline, thoughtful design, and a commitment to lasting quality.
                  </p>
                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Inspired by the character of Dubai and the richness of Emirati
                    heritage, our philosophy is centred on creating spaces that feel
                    purposeful today and remain meaningful tomorrow.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Inset Cinematic Architectural Blueprint Card */}
            <div className="lg:col-span-5 xl:col-span-4">
              <ScrollReveal variant="scale-up" delay={350} duration={900}>
                <div className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl bg-[#070707] border border-neutral-800/90 hover:border-neutral-500 transition-all duration-700">
                  <Image
                    src="/images/architecture/saj-foundational-study.jpg"
                    alt="SAJ Architectural Masterpiece Study"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* CAD Inset Reticles */}
                  <div className="absolute inset-4 sm:inset-5 border border-white/10 rounded-lg pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/60" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/60" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/60" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/60" />
                  </div>

                  {/* Top Metrology Tag */}
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>FOUNDATIONAL STUDY</span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-300 bg-black/80 backdrop-blur-md px-4 py-2 border border-neutral-800 rounded-md">
                    <span>EMIRATI HERITAGE</span>
                    <span className="text-neutral-400">DXB // 2026</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 3 Metric Architectural Badges */}
          <ScrollReveal variant="fade-up" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-900 text-neutral-400">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400 block">
                  Vision Index
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  100%
                </span>
                <p className="text-xs text-neutral-400 font-light">Purposeful Built Environments</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400 block">
                  Cultural Root
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  EMIRATI
                </span>
                <p className="text-xs text-neutral-400 font-light">Authentic UAE Architectural Nobility</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400 block">
                  Standard
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  TIMELESS
                </span>
                <p className="text-xs text-neutral-400 font-light">Beyond Transitory Trends</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400 block">
                  Commitment
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  LEGACY
                </span>
                <p className="text-xs text-neutral-400 font-light">Engineered for Generations</p>
              </div>
            </div>
          </ScrollReveal>

        </Container>
      </div>

      {/* ========================================================================= */}
      {/* PART 2: VISION MANIFESTO & MONUMENTAL ARCHITECTURAL VISUAL               */}
      {/* ========================================================================= */}
      <div className="relative z-10 border-b border-neutral-900/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[660px]">
          
          {/* Left: The Vision Manifesto Quote (5 cols on lg) */}
          <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-between bg-[#050505] relative border-b lg:border-b-0 lg:border-r border-neutral-900 group">
            {/* Watermark brand emblem in subtle low opacity with animated pulse glow */}
            <div className="absolute top-10 right-10 w-32 h-32 pointer-events-none select-none opacity-[0.04] invert group-hover:opacity-[0.08] transition-opacity duration-700">
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

              <h3 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-white leading-[1.12]">
                To Shape an Enduring <br />
                <span className="font-light italic text-neutral-300">
                  Architectural Legacy.
                </span>
              </h3>

              <div className="w-16 h-px bg-neutral-800 group-hover:w-28 group-hover:bg-white transition-all duration-500" />

              <blockquote className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed border-l-2 border-neutral-800 pl-6 group-hover:border-neutral-500 transition-colors duration-500">
                “We envision a built environment defined by architectural integrity,
                considered innovation, and timeless design—creating landmarks that
                contribute meaningfully to Dubai’s evolving skyline.”
              </blockquote>
            </ScrollReveal>

            {/* Bottom Meta Bar with Animated Reticle Cross */}
            <div className="pt-10 mt-10 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
              <span className="group-hover:text-neutral-200 transition-colors">Authentic Emirati Heritage</span>
              <span className="text-neutral-400 group-hover:text-white transition-colors">ARCHITECTURAL DISCIPLINE</span>
            </div>
          </div>

          {/* Right: Full-bleed Panoramic Architectural Visual Showcase (7 cols on lg) */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full overflow-hidden bg-[#070707] group">
            <ScrollReveal variant="fade-in" duration={1200} className="w-full h-full min-h-[420px] lg:min-h-[660px]">
              <Image
                src="/images/architecture/saj-vision-monolith.jpg"
                alt="Contemporary sculptural architectural geometry by SAJ Development"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center contrast-105 group-hover:scale-[1.04] transition-all duration-1000 ease-out"
              />
              
              {/* Atmospheric gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35 pointer-events-none group-hover:opacity-75 transition-opacity duration-700" />
              
              {/* Architectural Grid Reticle Lines with CAD Crosshairs */}
              <div className="absolute inset-6 sm:inset-10 border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors duration-700">
                {/* Corner crosshairs with active animation on hover */}
                <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 group-hover:border-white group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 group-hover:border-white group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 group-hover:border-white group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 group-hover:border-white group-hover:scale-110 transition-all duration-500" />

                {/* Top corner notation with glowing pulse badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2.5 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-neutral-800 text-[10px] font-mono tracking-widest uppercase text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>DXB · SKYLINE ELEVATION DETAIL</span>
                </div>

                {/* Center CAD Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none opacity-40 group-hover:opacity-90 group-hover:scale-125 transition-all duration-700">
                  <div className="w-full h-px bg-white absolute top-1/2 -translate-y-1/2" />
                  <div className="h-full w-px bg-white absolute left-1/2 -translate-x-1/2" />
                </div>
              </div>

              {/* Bottom Inset Architectural Metadata Tag */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-300 bg-black/85 backdrop-blur-md px-5 py-3.5 border border-neutral-800 shadow-2xl group-hover:border-neutral-600 transition-colors duration-500">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-white" />
                  <span className="text-white font-medium">STRUCTURAL GEOMETRY</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-400">
                  <span className="hidden sm:inline">COORDINATES: 25.1972° N</span>
                  <span className="text-neutral-300">SCALE: 1:1 MONOLITHIC</span>
                </div>
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

          {/* Three Principles: Smooth Hardware-Accelerated Infinite Carousel */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 py-4 overflow-hidden">
            
            {/* Subtle gradient side vignettes for seamless endless loop blending */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-l from-black via-black/70 to-transparent" />

            <div className="animate-infinite-carousel flex items-stretch gap-6 sm:gap-8 px-4 sm:px-8">
              {[1, 2].map((cycle) => (
                <React.Fragment key={cycle}>
                  {/* Principle 01 */}
                  <div className="group relative flex flex-col justify-between w-[320px] sm:w-[420px] lg:w-[460px] flex-shrink-0 bg-[#070707] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 rounded-xl overflow-hidden select-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/80 pointer-events-none" />

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-neutral-900">
                      <Image
                        src="/images/architecture/saj-pillar-01.jpg"
                        alt="Purposeful Design - Architectural Facade Studies"
                        fill
                        sizes="(max-width: 768px) 320px, 460px"
                        className="object-cover object-center contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                      
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-neutral-800/90 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        <span>AXIS 01 · ELEVATION</span>
                      </div>

                      <div className="absolute top-4 right-4 z-10 font-mono text-xs tracking-widest text-neutral-400 bg-black/80 backdrop-blur-md px-2 py-0.5 border border-neutral-800 rounded-md">
                        INTENT
                      </div>
                    </div>

                    <div className="p-7 sm:p-9 flex flex-col justify-between flex-1 relative z-10 space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                            01
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                            PHASE I · CONCEPT
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                          Purposeful Design
                        </h4>

                        <div className="w-10 h-px bg-neutral-800 my-4 group-hover:w-20 group-hover:bg-white transition-all duration-500" />

                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                          Architecture should balance visual expression with thoughtful
                          planning, functionality, and a clear design intent. Every space
                          is calibrated to enhance how people experience life.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-neutral-900/90 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        <span className="group-hover:text-neutral-300 transition-colors">Form &amp; Function</span>
                        <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                          →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Principle 02 */}
                  <div className="group relative flex flex-col justify-between w-[320px] sm:w-[420px] lg:w-[460px] flex-shrink-0 bg-[#070707] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 rounded-xl overflow-hidden select-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/80 pointer-events-none" />

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-neutral-900">
                      <Image
                        src="/images/architecture/saj-pillar-02.jpg"
                        alt="Structural Discipline - Geometric Exoskeletons"
                        fill
                        sizes="(max-width: 768px) 320px, 460px"
                        className="object-cover object-center contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                      
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-neutral-800/90 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        <span>AXIS 02 · GEOMETRY</span>
                      </div>

                      <div className="absolute top-4 right-4 z-10 font-mono text-xs tracking-widest text-neutral-400 bg-black/80 backdrop-blur-md px-2 py-0.5 border border-neutral-800 rounded-md">
                        RIGOR
                      </div>
                    </div>

                    <div className="p-7 sm:p-9 flex flex-col justify-between flex-1 relative z-10 space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                            02
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                            PHASE II · RIGOR
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                          Structural Discipline
                        </h4>

                        <div className="w-10 h-px bg-neutral-800 my-4 group-hover:w-20 group-hover:bg-white transition-all duration-500" />

                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                          Precision, considered detailing, and a disciplined approach to
                          the built environment form the foundation of enduring architecture.
                          Engineering integrity remains uncompromised.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-neutral-900/90 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        <span className="group-hover:text-neutral-300 transition-colors">Precision &amp; Detailing</span>
                        <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                          →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Principle 03 */}
                  <div className="group relative flex flex-col justify-between w-[320px] sm:w-[420px] lg:w-[460px] flex-shrink-0 bg-[#070707] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-500 rounded-xl overflow-hidden select-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/80 pointer-events-none" />

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-neutral-900">
                      <Image
                        src="/images/architecture/saj-pillar-03.jpg"
                        alt="Timeless Living - Enduring Monoliths"
                        fill
                        sizes="(max-width: 768px) 320px, 460px"
                        className="object-cover object-center contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                      
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-neutral-800/90 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        <span>AXIS 03 · HORIZON</span>
                      </div>

                      <div className="absolute top-4 right-4 z-10 font-mono text-xs tracking-widest text-neutral-400 bg-black/80 backdrop-blur-md px-2 py-0.5 border border-neutral-800 rounded-md">
                        HORIZON
                      </div>
                    </div>

                    <div className="p-7 sm:p-9 flex flex-col justify-between flex-1 relative z-10 space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                            03
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                            PHASE III · LEGACY
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                          Timeless Living
                        </h4>

                        <div className="w-10 h-px bg-neutral-800 my-4 group-hover:w-20 group-hover:bg-white transition-all duration-500" />

                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                          Create environments guided by lasting design principles rather
                          than short-lived trends, with an enduring emphasis on quality,
                          comfort, and meaningful human experiences.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-neutral-900/90 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        <span className="group-hover:text-neutral-300 transition-colors">Generational Value</span>
                        <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

        </Container>
      </div>

    </section>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About SAJ Development"
      className="relative py-28 sm:py-36 lg:py-40 bg-[#000000] text-white border-t border-neutral-900/90 overflow-hidden"
    >
      {/* Background Architectural Ambient Glow & Grid Lines */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft radial glow behind right image */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.018] rounded-full blur-[140px]" />
        
        {/* Architectural hairline guide */}
        <div className="absolute inset-y-0 left-8 sm:left-12 lg:left-16 w-px bg-neutral-900/40" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column — Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:pr-6">
            
            {/* Eyebrow and Supporting Label */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                  ABOUT SAJ
                </span>
                <span className="h-px w-8 bg-neutral-800" />
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 hidden sm:inline-block">
                  VISION · PRECISION · LEGACY
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading: Aeonik Bold styled */}
            <ScrollReveal variant="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                Building a Legacy <br className="hidden sm:inline" />
                <span className="font-light italic text-neutral-200">
                  Beyond Architecture.
                </span>
              </h2>
            </ScrollReveal>

            {/* Subtle Divider */}
            <ScrollReveal variant="slide-right" delay={250}>
              <div className="w-16 h-px bg-neutral-800" />
            </ScrollReveal>

            {/* Description Copy */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="space-y-6 text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
                <p>
                  SAJ Development is driven by a vision to create enduring landmarks
                  that shape the future of Dubai. Rooted in structural discipline,
                  inspired by authentic Emirati heritage, and guided by a commitment
                  to timeless luxury, SAJ brings a considered approach to the built
                  environment.
                </p>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Every detail reflects a belief that exceptional architecture goes
                  beyond aesthetics—it creates lasting impressions, meaningful
                  experiences, and a legacy that stands the test of time.
                </p>
              </div>
            </ScrollReveal>

            {/* Architectural Callout Metadata */}
            <ScrollReveal variant="fade-up" delay={450}>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-neutral-900 text-neutral-400">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
                    Approach
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-200 mt-1 block">
                    Structural Discipline
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
                    Roots
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-200 mt-1 block">
                    Emirati Heritage
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
                    Standard
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-200 mt-1 block">
                    Timeless Luxury
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Minimal CTA Link: Discover Our Vision → */}
            <ScrollReveal variant="fade-up" delay={550}>
              <div className="pt-4">
                <Link
                  href="#vision"
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-2 border-b border-white hover:border-neutral-400"
                >
                  <span>Discover Our Vision</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Architectural Imagery with Scale/Fade reveal */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <ScrollReveal variant="scale-up" duration={1100} delay={200}>
              <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full max-w-lg lg:max-w-none mx-auto overflow-hidden border border-neutral-800/80 bg-[#0a0a0a] group">
                <Image
                  src="/images/architecture/saj-about-unsplash.jpg"
                  alt="Contemporary luxury architectural geometry representing SAJ Development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Gradient vignette for contrast and depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Top Inset Reticle Tag */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center px-3 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase bg-black/85 backdrop-blur-md border border-neutral-800 text-neutral-300">
                    SAJ — ARCHITECTURAL ARCHIVE
                  </span>
                </div>

                {/* Bottom Inset Architectural Caption */}
                <div className="absolute bottom-5 left-5 right-5 z-10 p-5 bg-black/80 backdrop-blur-md border border-neutral-800 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                      Dubai Horizon Benchmark
                    </p>
                    <p className="text-xs sm:text-sm font-light text-neutral-200 mt-1">
                      Sculptural geometries conceived to inspire and endure.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                    01 // DXB
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
};

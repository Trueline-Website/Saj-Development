import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const BrandIntroductionSection: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#050505] text-white relative overflow-hidden border-t border-neutral-900/80">
      {/* Background Architectural Grid & Subtle Monogram Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Top Editorial Eyebrow & Numbering */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-6 mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase font-mono tracking-[0.28em] text-neutral-400">
              01 • Corporate Manifesto
            </span>
          </div>
          <span className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase hidden sm:inline-block">
            Dubai, United Arab Emirates
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] text-white">
            Built on Vision. <br className="hidden sm:inline" />
            <span className="font-light italic text-neutral-200">
              Defined by Precision.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            We don’t just develop properties; we create lasting landmarks.
            Combining architectural vision with technical precision, SAJ
            Development delivers exceptional spaces designed for discerning
            communities and an elevated standard of living.
          </p>
        </div>

        {/* Dynamic Architectural Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Monolithic Architectural Photograph */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#0a0a0a]">
              <Image
                src="/images/projects/project-tower-1.jpg"
                alt="SAJ Development Architectural Landmark"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Inset Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center px-3 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase bg-black/80 backdrop-blur-md border border-neutral-700 rounded-md text-neutral-300">
                  Architectural Precision
                </span>
              </div>

              {/* Bottom Inset Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md">
                  <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    Horizon Benchmark
                  </p>
                  <p className="text-sm font-light text-neutral-200 mt-1 leading-snug">
                    Sculptural geometries conceived to inspire and leave a
                    distinctive mark on Dubai’s skyline.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-mono text-neutral-400">
                    SAJ — DXB
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Architectural Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Pillar 1: Thoughtful Planning */}
            <div className="p-7 sm:p-8 bg-[#0a0a0a] border border-neutral-800/80 hover:border-neutral-600 transition-colors duration-300 rounded-xl flex flex-col justify-between flex-1 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                  Pillar 01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Architectural Distinction
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                By bringing together innovative thinking, refined design, and
                uncompromising attention to detail, we create developments that go
                far beyond functionality.
              </p>
            </div>

            {/* Pillar 2: Heritage & Forward Momentum */}
            <div className="p-7 sm:p-8 bg-[#0a0a0a] border border-neutral-800/80 hover:border-neutral-600 transition-colors duration-300 rounded-xl flex flex-col justify-between flex-1 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                  Pillar 02
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Arabian Heritage & Ambition
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Inspired by the nobility, endurance, and freedom of the Arabian
                horse, our visual and structural identity connects deeply with
                Emirati legacy while engineering modern landmarks.
              </p>
            </div>

            {/* Pillar 3: Brand Promise Card */}
            <div className="p-7 sm:p-8 bg-neutral-950 border border-neutral-800 relative overflow-hidden rounded-xl flex flex-col justify-between flex-1">
              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-3">
                  The Brand Promise
                </span>
                <p className="text-sm italic font-light text-neutral-200 leading-relaxed">
                  “Our promise is to deliver excellence without compromise. From
                  concept and planning to construction and completion, every
                  development reflects the highest standards of craftsmanship,
                  sophistication, and integrity.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Metrology Bar */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-neutral-800/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-400">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
              Focus
            </span>
            <span className="text-sm font-semibold text-white mt-1 block">
              Luxury Residential & Enclaves
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
              Design Rigor
            </span>
            <span className="text-sm font-semibold text-white mt-1 block">
              Architectural Precision
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
              Identity
            </span>
            <span className="text-sm font-semibold text-white mt-1 block">
              Emirati Nobility & Strength
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] block text-neutral-400">
              Commitment
            </span>
            <span className="text-sm font-semibold text-white mt-1 block">
              Generational Value
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

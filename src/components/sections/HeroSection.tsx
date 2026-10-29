import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroParticleOverlay } from "@/components/ui/HeroParticleOverlay";

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-label="Hero Overview"
      className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-neutral-900"
    >
      {/* 1. Full-size Architectural Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/architecture/saj-hero-unsplash.jpg"
          alt="SAJ Development Architectural Landmark"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_60%] brightness-[0.82] contrast-[1.05] select-none"
        />

        {/* Seamless full-width horizontal gradient (no hard line on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent w-full" />
        
        {/* Balanced top-to-bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 w-full" />
      </div>

      {/* 2. Interactive Luminous Floating Particle & Constellation Animation Overlay */}
      <HeroParticleOverlay />

      {/* Spacer to push content down from fixed header */}
      <div className="relative z-20 w-full" />

      {/* 3. Main Editorial Content Container */}
      <Container size="wide" className="relative z-20 my-auto py-8 sm:py-16">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Eyebrow Label: SAJ DEVELOPMENT · DUBAI, UAE */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.28em] uppercase text-neutral-300">
              SAJ DEVELOPMENT · DUBAI, UAE
            </span>
          </div>

          {/* Main Headline with fluid architectural typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.035em] leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Shaping Tomorrow’s <br />
            <span className="font-light italic text-neutral-200">
              Landmarks.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Visionary design. Architectural precision. Spaces created to endure.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              className="group min-w-[210px] shadow-[0_4px_20px_rgba(255,255,255,0.12)]"
            >
              <span>Explore Our Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#about"
              className="min-w-[190px] backdrop-blur-md"
            >
              Discover SAJ
            </Button>
          </div>
        </div>
      </Container>

      {/* 4. Minimal Understated Editorial Detail: Bottom Architectural Caption & Scroll Indicator */}
      <Container size="wide" className="relative z-20 pt-4">
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-400">
          {/* Left: Minimal Architectural Metadata */}
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400">
            <span className="text-neutral-200">ARCHITECTURAL EXCELLENCE</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600 hidden sm:inline-block" />
            <span className="hidden sm:inline-block">EMIRATI HERITAGE & VISION</span>
          </div>

          {/* Right: Vertical Scroll to Explore Indicator */}
          <Link
            href="#about"
            className="group flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="p-1 rounded-full border border-neutral-800 group-hover:border-neutral-500 transition-colors">
              <ArrowDown className="w-3 h-3 text-neutral-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

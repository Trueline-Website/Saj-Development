"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Compass, Building2, CheckCircle2, Award, Landmark, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AboutHeroAtmosphere } from "@/components/ui/AboutHeroAtmosphere";

const heroSlides = [
  {
    image: "/images/architecture/saj-vision-monolith.jpg",
    tagline: "EMIRATI MONUMENTS & NOBLE HERITAGE",
    heading: "Sculpting Tomorrow’s Legacy.",
    subheading: "Where authentic Arabian identity merges with uncompromising structural permanence.",
    caption: "DXB HORIZON // MONOLITHIC ELEVATION",
  },
  {
    image: "/images/architecture/saj-about-unsplash.jpg",
    tagline: "ARCHITECTURAL DISCIPLINE & CRAFTSMANSHIP",
    heading: "Precision Without Compromise.",
    subheading: "Synthesizing spatial geometry, artisanal natural stone, and human-centric sanctuary.",
    caption: "CANAL DISTRICT // STRUCTURAL FACETS",
  },
  {
    image: "/images/architecture/saj-foundational-study.jpg",
    tagline: "AUTHENTIC DUBAI PURPOSE",
    heading: "Architecture as a Cultural Vessel.",
    subheading: "Rooted in the spirit of the UAE, conceived to endure across generations.",
    caption: "ARCHITECTURAL ARCHIVE // VOLUME 01",
  },
];

const pillars = [
  {
    number: "01",
    tag: "PURPOSE",
    title: "Emirati Heritage & Identity",
    description:
      "Rooted in the noble character of the United Arab Emirates, our projects respect tradition while pioneering forward-thinking, sculptural modernity across Dubai's most distinguished coordinates.",
    highlight: "Authentic Cultural Vessel",
  },
  {
    number: "02",
    tag: "DISCIPLINE",
    title: "Structural Rigor & Detailing",
    description:
      "From monolithic post-tensioned cantilevers to artisan limestone joints, we treat architecture not as superficial decoration, but as permanent structural art built to endure centuries.",
    highlight: "Uncompromising Detailing",
  },
  {
    number: "03",
    tag: "LEGACY",
    title: "Generational Value Creation",
    description:
      "We design far beyond ephemeral trends. Every residence, penthouse, and private enclave is calibrated to provide lasting sanctuary, cultural resonance, and enduring capital value.",
    highlight: "Timeless Capital Assets",
  },
];

const milestones = [
  {
    year: "FOUNDING",
    title: "The Sovereign Vision",
    desc: "Established in Dubai to introduce a refined architectural doctrine prioritizing authentic nobility, spatial generosity, and enduring permanence over speculative velocity.",
  },
  {
    year: "STANDARDS",
    title: "Structural Purity & Detailing",
    desc: "Implementing zero-tolerance architectural tolerances, partnering with world-class engineering studios, and sourcing timeless natural materials from European and Middle Eastern quarries.",
  },
  {
    year: "HORIZONS",
    title: "Landmark Residential Portfolio",
    desc: "Directing curated ultra-prime landmarks across the Dubai Canal, waterfront enclaves, and Downtown Dubai skyline—tailored exclusively for discerning families and global patrons.",
  },
];

const leadershipValues = [
  {
    title: "The Vision",
    subtitle: "Beyond the Immediate Horizon",
    text: "Founded on the belief that Dubai deserves architecture that outlives fleeting hype, SAJ is dedicated to creating landmark sanctuaries that cultivate meaningful human experiences.",
    icon: Compass,
  },
  {
    title: "The Craft",
    subtitle: "Precision Without Compromise",
    text: "Partnering with global master-planners, acoustic engineers, and natural stone artisans, our projects balance tactile material beauty with cutting-edge environmental intelligence.",
    icon: Award,
  },
  {
    title: "The Covenant",
    subtitle: "Discretion & Authenticity",
    text: "We serve an international community of discerning patrons, family offices, and institutional partners who prize architectural integrity, quiet luxury, and verified trust.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance cinematic hero background slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ANIMATED HERO SECTION                                        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-black pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-neutral-900">
        
        {/* Background Slides with Slow Kinetic Pan & Dissolve */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center contrast-105 brightness-[0.78] transition-transform duration-[7000ms] ease-out ${
                  activeSlide === idx ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          ))}

          {/* Deep Architectural Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/30 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-transparent via-transparent to-black/70 z-20 pointer-events-none" />
        </div>

        {/* Ambient Canvas Light Motes & Metrology Laser Scanner */}
        <div className="z-20">
          <AboutHeroAtmosphere />
        </div>

        {/* Top Breadcrumb & Status Bar */}
        <Container size="wide" className="relative z-30 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-neutral-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Return to Overview</span>
            </Link>

            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>SAJ MONOGRAPH // WHO WE ARE</span>
            </div>
          </div>
        </Container>

        {/* Main Hero Editorial Body */}
        <Container size="wide" className="relative z-30 my-auto py-8 sm:py-14">
          <div className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-lg">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.28em] uppercase text-neutral-200">
                {heroSlides[activeSlide].tagline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.035em] leading-[1.03] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              {heroSlides[activeSlide].heading}
            </h1>

            <p className="text-base sm:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
              {heroSlides[activeSlide].subheading}
            </p>

            {/* Action Buttons & Minimal Slide Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Button
                variant="primary"
                size="lg"
                href="#heritage"
                className="tracking-widest text-xs font-mono font-medium shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
              >
                <span>Explore Our Ethos</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/projects"
                className="tracking-widest text-xs font-mono backdrop-blur-md"
              >
                View Developments
              </Button>

              {/* Minimal Horizontal Slide Indicator Dots */}
              <div className="flex items-center gap-2 pl-2">
                {heroSlides.map((s, idx) => (
                  <button
                    key={s.caption}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activeSlide === idx ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" : "w-2.5 bg-neutral-700 hover:bg-neutral-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom Hero Metric Bar */}
        <Container size="wide" className="relative z-30 pt-4">
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white uppercase tracking-widest">ESTABLISHED IN DUBAI</span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline text-neutral-400">PURPOSE-DRIVEN MONUMENTAL ARCHITECTURE</span>
            </div>
            <div className="text-[11px] tracking-widest uppercase text-neutral-300">
              {heroSlides[activeSlide].caption}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. DUAL ARCHITECTURAL SPREAD: VISUAL STUDY & MANIFESTO                    */}
      {/* ========================================================================= */}
      <section id="heritage" className="py-24 sm:py-36 border-b border-neutral-900 relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column with CAD Reticles */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="scale-up" delay={150} duration={950}>
                <div className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-[#070707] border border-neutral-800/90 hover:border-neutral-500 transition-colors duration-700 shadow-2xl">
                  <Image
                    src="/images/architecture/saj-foundational-study.jpg"
                    alt="SAJ Architectural Masterpiece Study"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* CAD Crosshairs */}
                  <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/60" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/60" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/60" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/60" />
                  </div>

                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md text-[10px] font-mono tracking-widest uppercase text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>FOUNDATIONAL ARCHITECTURE</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 bg-black/85 backdrop-blur-md px-4 py-2 border border-neutral-800 rounded-md">
                    <span>EMIRATI NOBILITY</span>
                    <span className="text-neutral-400">MONOLITHIC SCALE</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Manifesto Column */}
            <div className="lg:col-span-6 space-y-8">
              <ScrollReveal variant="fade-up" delay={250}>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                    OUR MANIFESTO
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Architecture as a Living Cultural Vessel.
                </h2>
                
                <div className="w-14 h-px bg-neutral-800 my-6" />

                <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
                  <p>
                    Every global metropolis has towers, but Dubai is fueled by an extraordinary spirit of
                    audacity, desert nobility, and sovereign vision. At SAJ Development, we reject the superficial
                    facade. We sculpt architectural monuments shaped by wind vectors, solar geometry, and the deep
                    cultural cadence of Emirati generosity.
                  </p>
                  <p className="text-neutral-400 text-sm sm:text-base">
                    Every site is selected with scrupulous discernment. We create sanctuaries where privacy is absolute,
                    proportions follow classical balance, and every material choice honors the gravity of permanence.
                  </p>
                </div>

                <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-900 text-neutral-400 font-mono">
                  <div className="p-4 bg-[#080808] border border-neutral-900 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-bold text-white block">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500">Purpose-Built</span>
                  </div>
                  <div className="p-4 bg-[#080808] border border-neutral-900 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-bold text-white block">DXB</span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500">Native Roots</span>
                  </div>
                  <div className="p-4 bg-[#080808] border border-neutral-900 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-bold text-white block">LEGACY</span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500">Enduring Horizon</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREE CORE FOUNDING PILLARS                                            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-neutral-900 bg-[#040404]">
        <Container size="wide">
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-neutral-900 gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  OUR CONVICTIONS
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  The Three Pillars of SAJ
                </h3>
              </div>
              <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                DISCIPLINE // 01 — 03
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal
                key={pillar.number}
                variant="fade-up"
                delay={100 * (index + 1)}
                duration={850}
              >
                <div className="group relative p-8 sm:p-10 bg-[#080808] border border-neutral-800/90 hover:border-neutral-500 transition-all duration-700 rounded-2xl h-full flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-4xl sm:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                        {pillar.number}
                      </span>
                      <span className="text-[9px] font-mono tracking-[0.24em] uppercase text-neutral-300 border border-neutral-800 rounded-md px-2.5 py-1 bg-black/60">
                        {pillar.tag}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-neutral-100 transition-colors">
                      {pillar.title}
                    </h4>

                    <div className="w-10 h-px bg-neutral-800 my-4 group-hover:w-20 group-hover:bg-white transition-all duration-500" />

                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-neutral-900/90 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    <span className="group-hover:text-neutral-300 transition-colors">{pillar.highlight}</span>
                    <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. ARCHITECTURAL DOCTRINE & TIMELINE CHRONOLOGY                           */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-neutral-900 relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal variant="fade-up" delay={0}>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                  THE DISCIPLINE
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  A Continuum of Excellence.
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Our development approach is structured upon unbending milestones, sovereign fiscal integrity,
                  and architectural sovereignty.
                </p>
                <div className="pt-4">
                  <Button href="/projects" variant="outline" size="md" className="tracking-widest text-xs font-mono">
                    <span>EXPLORE PORTFOLIO</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {milestones.map((m, idx) => (
                <ScrollReveal
                  key={m.year}
                  variant="fade-up"
                  delay={120 * (idx + 1)}
                  duration={800}
                >
                  <div className="p-8 sm:p-10 bg-[#080808] border border-neutral-900 hover:border-neutral-700 transition-colors duration-500 rounded-2xl flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
                    <div className="shrink-0">
                      <span className="px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                        {m.year}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {m.title}
                      </h4>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. LEADERSHIP ETHOS & COMMITMENTS                                         */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-neutral-900 bg-[#040404]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-4 space-y-4">
              <ScrollReveal variant="fade-up" delay={0}>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                  LEADERSHIP ETHOS
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Guided by Precision. <br />
                  <span className="font-light italic text-neutral-300">
                    Sustained by Trust.
                  </span>
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed pt-2">
                  Our executive leadership brings together decades of sovereign development,
                  high-finance discipline, and architectural artistry.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {leadershipValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <ScrollReveal
                    key={val.title}
                    variant="fade-up"
                    delay={150 * (idx + 1)}
                    duration={800}
                  >
                    <div className="p-7 sm:p-8 bg-[#070707] border border-neutral-900 hover:border-neutral-700 transition-colors duration-500 rounded-2xl h-full flex flex-col justify-between space-y-6 shadow-lg">
                      <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
                        <IconComponent className="w-5 h-5 stroke-[1.5]" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {val.title}
                        </h4>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                          {val.subtitle}
                        </span>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed pt-2">
                          {val.text}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO PRIVATE ENGAGEMENT                                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 text-center">
        <Container size="wide">
          <div className="max-w-2xl mx-auto space-y-8">
            <ScrollReveal variant="fade-up" delay={0}>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                ENGAGE WITH LEADERSHIP
              </span>
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Begin a Private Architectural Dialogue.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                We welcome confidential conversations regarding acquisition, development partnerships,
                and private client viewings.
              </p>
              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg" className="tracking-widest text-xs font-mono">
                  <span>TRANSMIT INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
                <Button href="/projects" variant="outline" size="lg" className="tracking-widest text-xs font-mono">
                  <span>EXPLORE DEVELOPMENTS</span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

    </div>
  );
}

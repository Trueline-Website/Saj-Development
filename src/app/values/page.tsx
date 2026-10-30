"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShieldCheck, Compass, Eye, Award, Scale, CheckCircle2, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ValuesHeroAtmosphere } from "@/components/ui/ValuesHeroAtmosphere";

const pillars = [
  {
    number: "01",
    metric: "FOUNDATIONAL CODES",
    title: "Visionary Thinking",
    tagline: "Purposeful foundations",
    description:
      "Every development begins with a clear vision, thoughtful planning, and a commitment to shaping spaces with enduring purpose. We design for the centuries ahead, not passing quarters.",
    image: "/images/architecture/saj-pillar-01.jpg",
    alt: "Sculptural facade curvature and daylight study",
    quote: "Architecture is not merely constructed; it is conceived as an enduring dialogue with the city.",
    spec: "CALIBRATED AXIS · SOLAR ORIENTATION · EMIRATI HERITAGE",
  },
  {
    number: "02",
    metric: "CRAFTSMANSHIP",
    title: "Design Excellence",
    tagline: "Architectural distinction",
    description:
      "We pursue architectural distinction, refined craftsmanship, and uncompromising attention to detail in every project. Materials are sourced from generational quarries and crafted with master hands.",
    image: "/images/architecture/saj-pillar-02.jpg",
    alt: "Structural discipline and engineering precision",
    quote: "Excellence is found where technical mastery meets aesthetic humility.",
    spec: "TRAVERTINE MARBLE · HAND-HONED BRONZE · ACOUSTIC BUFFERING",
  },
  {
    number: "03",
    metric: "INTELLIGENT SYSTEMS",
    title: "Innovation & Technology",
    tagline: "Intelligent progress",
    description:
      "We embrace modern technologies, intelligent environmental solutions, and forward-thinking structural systems to create developments built for Dubai's sustainable future.",
    image: "/images/architecture/saj-pillar-03.jpg",
    alt: "High-end luxury terrace and horizon view",
    quote: "Pioneering technology exists to serve human tranquility, never to complicate it.",
    spec: "BIOPHILIC COOLING · HIGH-PERFORMANCE FACADE · AI CLIMATE ENVELOPE",
  },
  {
    number: "04",
    metric: "TRUST & DISCRETION",
    title: "Integrity & Discretion",
    tagline: "Uncompromising trust",
    description:
      "We build lasting relationships through transparency, accountability, reliability, and absolute discretion at every stage of development and client partnership.",
    image: "/images/architecture/saj-cta-lounge.jpg",
    alt: "Private executive advisory suite",
    quote: "Integrity is the bedrock of lasting architectural nobility.",
    spec: "PRIVATE CLIENT ADVISORY · CONFIDENTIAL ALLOCATIONS · DIRECT GOVERNANCE",
  },
  {
    number: "05",
    metric: "TIMELESS ENDURANCE",
    title: "Lasting Value & Legacy",
    tagline: "Generational legacy",
    description:
      "We create developments that go beyond the present—enhancing lifestyles, strengthening communities, and delivering enduring emotional and capital value for generations to come.",
    image: "/images/architecture/saj-foundational-study.jpg",
    alt: "Monolithic luxury architecture in Dubai",
    quote: "The ultimate metric of architecture is how beautifully it ages.",
    spec: "GENERATIONAL CAPITAL · ZERO OBSOLESCENCE · ENDURING HARMONY",
  },
];

export default function ValuesPage() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC VALUES HERO SECTION WITH GEODETIC HARMONIC ATMOSPHERE         */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-black pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-neutral-900">
        
        {/* Full-bleed Architectural Atmosphere & Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/architecture/saj-pillar-01.jpg"
            alt="SAJ Development Principles"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.40] contrast-[1.15] select-none scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 z-10 pointer-events-none" />
        </div>

        {/* Harmonic Geodetic Canvas Engine */}
        <ValuesHeroAtmosphere />

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

            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-neutral-300 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>DOCTRINE OF PERMANENCE // DUBAI 2026</span>
            </div>
          </div>
        </Container>

        {/* Main Hero Narrative */}
        <Container size="wide" className="relative z-30 my-auto py-8 sm:py-14">
          <div className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-xl">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.28em] uppercase text-neutral-200">
                FOUNDATIONAL ARCHITECTURAL CONVICTIONS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.035em] leading-[1.03] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              Guided by Principle. <br />
              <span className="font-light italic text-neutral-200">
                Defined by Permanence.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
              Our core values are not decorative statements; they are the architectural doctrine
              that directs every proportion we sculpt, every stone we honor, and every generational
              relationship we steward across the Emirates.
            </p>

            {/* Quick CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#pillars"
                className="tracking-widest text-xs font-mono font-medium shadow-[0_4px_24px_rgba(255,255,255,0.15)] rounded-xl"
              >
                <span>Read The 05 Pillars</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/about"
                className="tracking-widest text-xs font-mono backdrop-blur-md rounded-xl"
              >
                About Our Leadership
              </Button>
            </div>
          </div>
        </Container>

        {/* Bottom Hero Metric Strip */}
        <Container size="wide" className="relative z-30 pt-4">
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-neutral-400">
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">PILLARS</span>
              <span className="text-white font-medium mt-1 block">05 CORE DOCTRINES</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">PHILOSOPHY</span>
              <span className="text-white font-medium mt-1 block">PURPOSEFUL FOUNDATION</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">STANDARD</span>
              <span className="text-white font-medium mt-1 block">GENERATIONAL CRAFT</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">DISCRETION</span>
              <span className="text-white font-medium mt-1 block">CONFIDENTIAL ALLOCATION</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PILLAR QUICK SWITCHER                                      */}
      {/* ========================================================================= */}
      <section className="sticky top-20 z-30 bg-black/90 backdrop-blur-xl border-b border-neutral-900 py-4">
        <Container size="wide">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-500 hidden sm:inline-block shrink-0">
              JUMP TO PILLAR:
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              {pillars.map((p, idx) => (
                <a
                  key={p.number}
                  href={`#pillar-${p.number}`}
                  onClick={() => setActivePillar(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 border whitespace-nowrap ${
                    activePillar === idx
                      ? "bg-white text-black border-white font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
                      : "bg-[#0b0b0b] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <span className="opacity-60 mr-1.5">{p.number}</span>
                  <span>{p.title}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. FIVE MONUMENTAL VALUE PANELS                                           */}
      {/* ========================================================================= */}
      <section id="pillars" className="py-24 sm:py-32 border-b border-neutral-900">
        <Container size="wide" className="space-y-28 sm:space-y-36">
          {pillars.map((val, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                id={`pillar-${val.number}`}
                key={val.number}
                className="scroll-mt-36"
              >
                <ScrollReveal
                  variant="fade-up"
                  delay={100}
                  duration={900}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    
                    {/* Visual Card */}
                    <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="group relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-3xl bg-[#070707] border border-neutral-800 hover:border-neutral-500 transition-all duration-700 shadow-2xl">
                        <Image
                          src={val.image}
                          alt={val.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                        {/* CAD Framing Reticle */}
                        <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-2xl pointer-events-none">
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/70" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white/70" />
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white/70" />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/70" />
                        </div>

                        {/* Top Metric Tag */}
                        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-xl text-[9px] font-mono tracking-widest uppercase text-neutral-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{val.metric}</span>
                        </div>

                        {/* Bottom Tagline */}
                        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-200 bg-black/80 backdrop-blur-md px-4 py-2.5 border border-white/10 rounded-xl">
                          <span>{val.tagline}</span>
                          <span className="text-neutral-400">PILLAR {val.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Card */}
                    <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-5xl sm:text-6xl font-mono font-light text-neutral-600">
                          {val.number}
                        </span>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 border border-neutral-800 rounded-xl px-3 py-1 inline-block">
                            SAJ DOCTRINE // {val.number}
                          </span>
                          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                            PERMANENT DISCIPLINE
                          </p>
                        </div>
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                        {val.title}
                      </h2>

                      <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                        {val.description}
                      </p>

                      <blockquote className="p-5 border-l-2 border-neutral-600 bg-neutral-950/70 rounded-2xl text-sm sm:text-base text-neutral-300 italic font-light shadow-inner">
                        “{val.quote}”
                      </blockquote>

                      {/* Architecture Specification Bar */}
                      <div className="pt-2 p-3.5 bg-neutral-950 border border-neutral-900 rounded-2xl flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span className="text-neutral-500 uppercase tracking-widest">SPECIFICATION</span>
                        <span className="text-white tracking-wider">{val.spec}</span>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. ENGAGEMENT FOOTNOTE BANNER                                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
              EXPERIENCE OUR STANDARDS
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Witness Our Values in Realized Form.
            </h3>
            <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed">
              Explore our landmark monographs across Dubai or schedule a private consultation with our advisory leadership.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/projects" variant="primary" size="lg" className="tracking-widest text-xs font-mono rounded-xl shadow-lg">
                <span>EXPLORE DEVELOPMENTS</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="tracking-widest text-xs font-mono rounded-xl backdrop-blur-md">
                <span>REGISTER PRIVATE INTEREST</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

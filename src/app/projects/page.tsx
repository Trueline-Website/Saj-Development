"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Building2, MapPin, Eye, Compass, ShieldCheck, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { demonstrationProjects } from "@/data/projects";
import { ProjectsHeroAtmosphere } from "@/components/ui/ProjectsHeroAtmosphere";

const filterCategories = [
  "All Developments",
  "Residential Landmark",
  "Private Villa Enclave",
  "Waterfront Residence",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Developments");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === "All Developments"
    ? demonstrationProjects
    : demonstrationProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC PORTFOLIO HERO SECTION WITH RADAR TELEMETRY MATRIX           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-black pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-neutral-900">
        
        {/* Full-bleed Architectural Panorama Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/architecture/saj-hero-unsplash.jpg"
            alt="SAJ Development Portfolio Horizon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.70] contrast-[1.10] select-none scale-100"
          />

          {/* Deep Architectural Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/35 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/80 z-10 pointer-events-none" />
        </div>

        {/* Ambient Radar & Telemetry Canvas Engine */}
        <ProjectsHeroAtmosphere />

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

            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-neutral-300 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>ACTIVE ARCHITECTURAL REPERTOIRE // DUBAI</span>
            </div>
          </div>
        </Container>

        {/* Main Hero Editorial Body */}
        <Container size="wide" className="relative z-30 my-auto py-8 sm:py-14">
          <div className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-lg">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.28em] uppercase text-neutral-200">
                SCULPTED SANCTUARIES &bull; ENDURING PERMANENCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.035em] leading-[1.03] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              Landmarks of Modernity. <br />
              <span className="font-light italic text-neutral-200">
                Sanctuaries of Permanence.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
              Each SAJ development is conceived as a singular sculptural monolith.
              Calibrated to Dubai’s topography and coastal breezes, our landmarks synthesize
              classical proportions, raw natural stone, and discreet sovereign luxury.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#catalogue"
                className="tracking-widest text-xs font-mono font-medium shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
              >
                <span>View All Developments</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                className="tracking-widest text-xs font-mono backdrop-blur-md"
              >
                Request Allocation
              </Button>
            </div>
          </div>
        </Container>

        {/* Bottom Hero Metric Bar */}
        <Container size="wide" className="relative z-30 pt-4">
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-neutral-400">
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">LOCATIONS</span>
              <span className="text-white font-medium mt-1 block">DUBAI CANAL &bull; PALM &bull; MARINA</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">STANDARD</span>
              <span className="text-white font-medium mt-1 block">UNCOMPROMISING PRECISION</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">ACCESS</span>
              <span className="text-white font-medium mt-1 block">PRIVATE CLIENT ALLOCATION</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-widest text-[10px]">STATUS</span>
              <span className="text-white font-medium mt-1 block">PHASE 1 INITIATION</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE CATEGORY FILTER BAR                                        */}
      {/* ========================================================================= */}
      <section id="catalogue" className="py-8 border-b border-neutral-900 sticky top-20 z-30 bg-black/90 backdrop-blur-xl">
        <Container size="wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition-all rounded-lg cursor-pointer ${
                      isActive
                        ? "bg-white text-black border-white font-medium shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        : "bg-[#0a0a0a] text-neutral-400 border-neutral-800 hover:border-neutral-500 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
              <span>SHOWING {filteredProjects.length} OF {demonstrationProjects.length} CURATED PROJECTS</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SHOWCASE PROJECT MONUMENT CARDS                                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32">
        <Container size="wide">
          <div className="space-y-24 sm:space-y-36">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal
                  key={project.id}
                  variant="fade-up"
                  delay={100}
                  duration={900}
                >
                  <article
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch bg-[#080808] border border-neutral-800/90 hover:border-neutral-500 transition-all duration-700 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl"
                  >
                    
                    {/* Visual Container (7 Cols) */}
                    <div className={`lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto w-full min-h-[360px] sm:min-h-[460px] overflow-hidden rounded-2xl bg-black/60 border border-neutral-800/90 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}>
                      <Image
                        src={project.heroImage}
                        alt={project.altText || project.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

                      {/* CAD Inset Framing Reticle */}
                      <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors duration-500">
                        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/60" />
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/60" />
                        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/60" />
                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/60" />
                      </div>

                      {/* Top Category Badge */}
                      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3.5 py-1.5 border border-neutral-800 rounded-lg text-[10px] font-mono tracking-widest uppercase text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{project.category}</span>
                      </div>

                      {/* Bottom Location & Status Pill */}
                      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-200 bg-black/85 backdrop-blur-md px-5 py-3 border border-neutral-800 rounded-xl shadow-xl">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{project.location}</span>
                        </span>
                        <span className="text-neutral-400">{project.status}</span>
                      </div>
                    </div>

                    {/* Details Container (5 Cols) */}
                    <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 pt-4 lg:pt-0 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-4xl sm:text-5xl font-mono font-light text-neutral-500 group-hover:text-white transition-colors duration-500">
                            0{index + 1}
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.24em] text-neutral-300 uppercase border border-neutral-800 rounded-md px-3 py-1 bg-black/40">
                            SAJ SIGNATURE
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                          {project.name}
                        </h2>

                        <div className="w-12 h-px bg-neutral-800 my-5 group-hover:w-24 group-hover:bg-white transition-all duration-500" />

                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Architectural Highlights */}
                        <div className="space-y-3 pt-4 border-t border-neutral-900">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                            ARCHITECTURAL SPECIFICATIONS
                          </span>
                          {project.architecturalHighlights.map((hl) => (
                            <div key={hl} className="flex items-center gap-3 text-xs text-neutral-200 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-8 border-t border-neutral-900/90 flex flex-wrap items-center gap-4">
                        <Button
                          href={project.detailsUrl}
                          variant="primary"
                          size="md"
                          className="tracking-widest text-xs font-mono font-medium shadow-md"
                        >
                          <span>VIEW MONOGRAPH</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                        <Button
                          href="/contact"
                          variant="outline"
                          size="md"
                          className="tracking-widest text-xs font-mono"
                        >
                          <span>INQUIRE ALLOCATION</span>
                        </Button>
                      </div>
                    </div>

                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOOTER ENGAGEMENT CARD                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 border-t border-neutral-900 bg-[#040404] text-center">
        <Container size="wide">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
              CONFIDENTIAL ACQUISITION
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Seeking an Unlisted Landmark?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              A private selection of off-market penthouses, private island parcels, and bespoke
              residential estates are presented exclusively through executive consultation.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="tracking-widest text-xs font-mono">
                <span>COMMENCE CONFIDENTIAL DIALOGUE</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

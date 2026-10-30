"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, MapPin, Building2, PhoneCall } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const CallToActionSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Residential Landmarks & Sky Penthouses");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Private Inquiries & Partnership"
      className="py-24 sm:py-32 lg:py-36 bg-[#030303] text-white border-t border-neutral-900 relative overflow-hidden"
    >
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-white/[0.012] rounded-full blur-[190px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>

      <Container size="wide" className="relative z-10">
        
        {/* Top Eyebrow Bar */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                ENGAGEMENT &amp; PARTNERSHIP
              </span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              <span className="hidden sm:inline">DISCREET INQUIRIES</span>
              <span className="text-neutral-400">DXB · AD · GLOBAL</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Master Showcase Frame: Visual Column + Executive Inquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Left Visual & Narrative Anchor (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.28em] uppercase text-neutral-300 border border-neutral-800 bg-[#070707] px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PRIVATE ADVISORY DESK</span>
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.04] text-white">
                  Let’s Shape What <br />
                  <span className="font-light italic text-neutral-300">
                    Comes Next.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
                  Connect directly with our leadership team to explore ongoing architectural
                  landmarks, confidential investment portfolios, and bespoke residential
                  enclaves across Dubai.
                </p>
              </div>
            </ScrollReveal>

            {/* Immersive Architectural Inset Plate with CAD Crosshairs */}
            <ScrollReveal variant="scale-up" delay={250} duration={950}>
              <div className="relative mt-8 sm:mt-10 aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800/90 bg-[#070707] group">
                <Image
                  src="/images/architecture/saj-cta-lounge.jpg"
                  alt="SAJ Development Executive Advisory Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Cinematic Atmospheric Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

                {/* CAD Reticles */}
                <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/60" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/60" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/60" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/60" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                  <Building2 className="w-3 h-3 text-neutral-400" />
                  <span>DXB EXECUTIVE SUITE // PRIVATE SALON</span>
                </div>

                {/* Bottom Overlay Info Strip */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-300 bg-black/85 backdrop-blur-md px-4 py-2.5 border border-neutral-800 rounded-lg">
                  <span className="text-white font-medium">STRICT DISCRETION ASSURED</span>
                  <span className="text-neutral-400">RESPONSE: &lt; 24 HOURS</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Contact & Verification Footprint */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-300 shrink-0" />
                  <span className="text-neutral-300">advisory@sajdevelopment.ae</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neutral-300 shrink-0" />
                  <span>DIFC · Downtown Dubai, UAE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High-End Registration Desk (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal variant="fade-up" delay={200} duration={850}>
              <div className="relative p-7 sm:p-10 bg-[#080808] border border-neutral-800 hover:border-neutral-600 transition-colors duration-500 rounded-2xl shadow-2xl">
                
                {/* Card Header */}
                <div className="border-b border-neutral-900 pb-6 mb-7 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.26em] uppercase text-neutral-400 block mb-1">
                      CONFIDENTIAL REGISTRATION
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Register Your Interest
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 border border-neutral-800 bg-[#0d0d0d] px-2.5 py-1 rounded-md">
                    PHASE 1
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-white stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-sm mx-auto font-light leading-relaxed">
                      Thank you. A senior partner from our executive advisory team
                      will reach out directly regarding portfolio access and private viewings.
                    </p>
                    <div className="pt-6">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setFormSubmitted(false);
                          setEmail("");
                          setName("");
                          setPhone("");
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. His Excellency / Dr. / Mr. Name"
                        className="w-full bg-[#0d0d0d] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-lg"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Corporate or Private Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full bg-[#0d0d0d] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-lg"
                      />
                    </div>

                    {/* Phone / Mobile */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Contact Number (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#0d0d0d] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-lg"
                      />
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Area of Interest
                      </label>
                      <div className="relative">
                        <select
                          id="interest"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full bg-[#0d0d0d] border border-neutral-800 text-neutral-200 px-4 py-3.5 text-xs focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all cursor-pointer appearance-none rounded-lg"
                        >
                          <option value="Residential Landmarks & Sky Penthouses">
                            Residential Landmarks &amp; Sky Penthouses
                          </option>
                          <option value="Private Villa Waterfront Enclaves">
                            Private Villa Waterfront Enclaves
                          </option>
                          <option value="Institutional Investment & Development Partnerships">
                            Institutional Investment &amp; Development Partnerships
                          </option>
                          <option value="Executive Architectural Inquiry">
                            Executive Architectural Inquiry
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400">
                          <span className="text-[10px]">▼</span>
                        </div>
                      </div>
                    </div>


                    {/* Submit Button */}
                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center group tracking-[0.22em] text-xs py-4 font-mono font-medium"
                      >
                        <span>TRANSMIT INQUIRY</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>

                    {/* Security Footnote */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-mono tracking-wider text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Strictly confidential. Encrypted direct executive channel.</span>
                    </div>

                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </Container>
    </section>
  );
};


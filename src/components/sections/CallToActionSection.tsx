"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const CallToActionSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Residential Landmarks");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Private Inquiries & Partnership"
      className="py-28 sm:py-36 bg-[#030303] text-white border-t border-neutral-900 relative overflow-hidden"
    >
      {/* Refined Ambient Lighting & Background Architectural Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft centered architectural ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.015] rounded-full blur-[160px]" />
        
        {/* Subtle emblem watermark anchored gracefully in corner */}
        <div className="absolute -right-16 -bottom-20 w-[420px] h-[420px] opacity-[0.035] pointer-events-none">
          <Image
            src="/brand/saj-emblem-clean-white.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Subtle grid line accents */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Top Eyebrow Bar */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex items-center justify-between pb-8 mb-14 sm:mb-20 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                ENGAGEMENT &amp; PARTNERSHIP
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              <span className="hidden sm:inline">DISCREET INQUIRIES</span>
              <span className="text-neutral-400">DXB · AD · GLOBAL</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Architectural Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Column: Narrative & Private Office Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10 lg:pr-4">
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="space-y-6">
                <span className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 border border-neutral-800/80 px-3 py-1">
                  PRIVATE DESK
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                  Let’s Shape What <br />
                  <span className="font-light italic text-neutral-200">
                    Comes Next.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
                  Connect directly with our leadership team to explore ongoing architectural
                  landmarks, confidential investment opportunities, and bespoke residential
                  enclaves across Dubai.
                </p>
              </div>
            </ScrollReveal>

            {/* Architectural Trust Points & Details */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="space-y-6 pt-6 border-t border-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-sm bg-neutral-950 border border-neutral-800/80 shrink-0 text-white mt-0.5">
                    <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-200">
                      Strict Confidentiality
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                      All acquisition registrations and development inquiries are handled under
                      strict discretion by our senior advisory desk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-sm bg-neutral-950 border border-neutral-800/80 shrink-0 text-white mt-0.5">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-200">
                      Executive Headquarters
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                      SAJ Development Corporate Suite, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-sm bg-neutral-950 border border-neutral-800/80 shrink-0 text-white mt-0.5">
                    <Mail className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-200">
                      Direct Corporate Line
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                      advisory@sajdevelopment.ae • +971 (4) 000 0000
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Editorial Metrology Pill */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="pt-2 flex items-center gap-6 text-[10px] font-mono tracking-[0.22em] uppercase text-neutral-400">
                <span>RESPONSE: WITHIN 24 HOURS</span>
                <span>•</span>
                <span>VERIFIED DIRECT CONTACT</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Inset Inquiry Panel with Slide & Glow Reveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal variant="fade-up" delay={250} duration={950}>
              <div className="relative p-8 sm:p-12 bg-[#080808]/90 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl">
                
                {/* Corner crosshair accents for architectural finesse */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/50" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/50" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/50" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/50" />

                {/* Form Title & Context */}
                <div className="border-b border-neutral-900 pb-6 mb-8 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-neutral-400 block mb-1">
                      CONFIDENTIAL REGISTRATION
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Register Your Interest
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 border border-neutral-800/70 px-2.5 py-1">
                    PHASE 1
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-white stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-sm mx-auto font-light leading-relaxed">
                      Thank you. A senior representative from our executive advisory desk
                      will reach out directly regarding private portfolio details.
                    </p>
                    <div className="pt-6">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setFormSubmitted(false);
                          setEmail("");
                          setName("");
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Your Full Name"
                        className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-none"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2.5"
                      >
                        Corporate or Private Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-none"
                      />
                    </div>

                    {/* Area of Interest Selector */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-mono mb-2.5"
                      >
                        Area of Interest
                      </label>
                      <div className="relative">
                        <select
                          id="interest"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full bg-[#111111] border border-neutral-800 text-neutral-200 px-4 py-3.5 text-xs focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all cursor-pointer appearance-none rounded-none"
                        >
                          <option value="Residential Landmarks">
                            Residential Landmarks &amp; Sky Penthouses
                          </option>
                          <option value="Private Villa Enclaves">
                            Private Villa Waterfront Enclaves
                          </option>
                          <option value="Development Partnerships">
                            Institutional Investment &amp; Development Partnerships
                          </option>
                          <option value="General Brand Inquiry">
                            Executive Architectural Inquiry
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400">
                          <span className="text-[10px]">▼</span>
                        </div>
                      </div>
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center group tracking-[0.22em] text-xs py-4"
                      >
                        <span>Transmit Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>

                    {/* Security Assurance */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-mono tracking-wider text-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span>Strictly private. No unsolicited communications.</span>
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

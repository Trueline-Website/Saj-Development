"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  Phone,
  Send,
  Lock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const inquiryTypes = [
  { id: "acquisition", label: "Private Residential Acquisition" },
  { id: "penthouse", label: "Sky Penthouse Allocation" },
  { id: "waterfront", label: "Waterfront Villa Enclave" },
  { id: "institutional", label: "Institutional Partnership" },
  { id: "press", label: "Executive Press & Curatorial" },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedType, setSelectedType] = useState(inquiryTypes[0].label);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-28">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-white/[0.012] rounded-full blur-[190px]" />
        <div className="absolute top-3/4 left-1/4 w-[800px] h-[500px] bg-white/[0.008] rounded-full blur-[160px]" />
        <div className="absolute inset-y-0 right-12 lg:right-24 w-px bg-neutral-900/60" />
      </div>

      <Container size="wide" className="relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER & MONUMENTAL STATEMENT                                */}
        {/* ========================================================================= */}
        <div className="pb-14 sm:pb-20 border-b border-neutral-900">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-900/80">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                DISCREET INQUIRY DESK
              </span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              <span className="hidden sm:inline">DUBAI // UAE</span>
              <span className="text-neutral-300 font-medium">25.1972° N · 55.2744° E</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.04] text-white">
                Initiate a Private <br />
                <span className="font-light italic text-neutral-300">
                  Architectural Dialogue.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Connect directly with our senior executive advisory desk to explore confidential residential allocations, private penthouses, and bespoke developments.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THREE KEY CONTACT CARDS                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-neutral-900">
          
          {/* Card 1 */}
          <div className="p-7 bg-[#070707] border border-neutral-800/90 rounded-xl space-y-4 relative group hover:border-neutral-500 transition-colors duration-500">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400">LOCATION</span>
              <MapPin className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Corporate Suite</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                SAJ Development Executive Suite, DIFC · Downtown Dubai, United Arab Emirates
              </p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-900">
              PRIVATE PARKING // SECURITY PROTOCOL
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-7 bg-[#070707] border border-neutral-800/90 rounded-xl space-y-4 relative group hover:border-neutral-500 transition-colors duration-500">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400">DIRECT LINE</span>
              <Mail className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Advisory Transmission</h3>
              <p className="text-xs text-neutral-300 font-mono">advisory@sajdevelopment.ae</p>
              <p className="text-xs text-neutral-400 font-mono mt-1">+971 (4) 000 0000</p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-900">
              RESPONSE WITHIN 24 HOURS
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-7 bg-[#070707] border border-neutral-800/90 rounded-xl space-y-4 relative group hover:border-neutral-500 transition-colors duration-500">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400">DISCRETION</span>
              <Lock className="w-4 h-4 text-neutral-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Private Client Protocol</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                All communications and allocation requests are held in strict institutional confidence under senior partner oversight.
              </p>
            </div>
            <div className="text-[10px] font-mono text-emerald-400/90 pt-2 border-t border-neutral-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>ENCRYPTED DIRECT CHANNEL</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. EDITORIAL INQUIRY DESK & INTEGRATED VISUAL SPREAD                      */}
        {/* ========================================================================= */}
        <div className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Visual Salon Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto h-full min-h-[380px] overflow-hidden rounded-2xl bg-[#070707] border border-neutral-800/90">
                <Image
                  src="/images/architecture/saj-cta-lounge.jpg"
                  alt="SAJ Private Executive Salon Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                {/* CAD Inset Reticles */}
                <div className="absolute inset-5 sm:inset-7 border border-white/10 rounded-xl pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/60" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/60" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/60" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/60" />
                </div>

                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1 border border-neutral-800 rounded-md text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                  <Building2 className="w-3 h-3 text-neutral-400" />
                  <span>EXECUTIVE SALON // PRIVATE CONSULTATION</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                    BY APPOINTMENT ONLY
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Experience Spatial Nobility in Person
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Private viewing rooms curated with architectural models, physical stone samples, and master-plan monographs.
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 bg-[#080808] border border-neutral-800 rounded-2xl relative shadow-2xl">

                <div className="border-b border-neutral-900 pb-6 mb-8 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.26em] uppercase text-neutral-400 block mb-1">
                      REGISTRATION PROTOCOL
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Confidential Inquiry Form
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 border border-neutral-800 bg-[#0d0d0d] px-3 py-1 rounded-md">
                    PHASE 1
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-14 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-white stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-sm mx-auto font-light leading-relaxed">
                      Thank you. A designated partner from our senior advisory team will contact you directly within 24 hours.
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
                          setMessage("");
                        }}
                      >
                        Transmit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Inquiry Type Selector as Pills */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-3">
                        Nature of Inquiry
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => {
                          const isSelected = selectedType === type.label;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setSelectedType(type.label)}
                              className={`px-3 py-2 text-[10px] font-mono tracking-wider uppercase border transition-all text-left cursor-pointer rounded-lg ${
                                isSelected
                                  ? "bg-white text-black border-white font-medium"
                                  : "bg-[#0d0d0d] text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                              }`}
                            >
                              {type.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dual Inputs: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                        >
                          Full Name &amp; Title *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. H.E. / Dr. / Mr. Name"
                          className="w-full bg-[#0d0d0d] border border-neutral-800 text-white px-4 py-3.5 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-lg"
                        />
                      </div>

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
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Contact Telephone (With Country Code)
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

                    {/* Specific Requirements */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono mb-2"
                      >
                        Specific Spatial Requirements or Inquiries (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Specify desired square footage, geographic preferences, or appointment timing..."
                        className="w-full bg-[#0d0d0d] border border-neutral-800 text-white px-4 py-3 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all rounded-lg resize-none"
                      />
                    </div>

                    {/* Transmit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center group tracking-[0.22em] text-xs py-4 font-mono font-medium"
                      >
                        <span>TRANSMIT CONFIDENTIAL INQUIRY</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>

                    {/* Security Notice */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-mono tracking-wider text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Encrypted transmission. Managed with total discretion.</span>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </Container>
    </div>
  );
}

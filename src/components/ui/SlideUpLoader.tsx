"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLoader } from "./LoaderContext";

export const SlideUpLoader: React.FC = () => {
  const { isLoading, isCompleted } = useLoader();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (isCompleted) return;

    // Smooth progressive counter towards 100%
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near end
        const jump = prev < 70 ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + jump, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [isCompleted]);

  if (isCompleted) return null;

  return (
    <div
      aria-hidden={!isLoading}
      className={`fixed inset-0 z-50 pointer-events-none flex flex-col justify-between transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isLoading ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Background with luxury architectural texture and vignette */}
      <div className="absolute inset-0 bg-[#050505] shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle architectural CAD guidelines */}
        <div className="absolute inset-x-8 sm:inset-x-16 top-0 bottom-0 pointer-events-none border-x border-neutral-900/50" />
        <div className="absolute inset-y-12 sm:inset-y-20 left-0 right-0 pointer-events-none border-y border-neutral-900/50" />
      </div>

      {/* Bottom sliding hairline accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none" />

      {/* Top Bar: Brand Coordinates & Status */}
      <div className="relative z-10 px-8 sm:px-16 pt-10 flex items-center justify-between text-[10px] font-mono tracking-[0.28em] uppercase text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>SAJ ARCHITECTURAL INITIALIZATION</span>
        </div>
        <div className="hidden sm:block text-neutral-400">
          DXB · 25.1972° N · 55.2744° E
        </div>
      </div>

      {/* Center: Monolithic Brand Emblem & Wordmark with Progressive Glow */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 text-center">
        {/* Emblem */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 transition-all duration-700">
          <Image
            src="/brand/saj-emblem-clean-white.png"
            alt="SAJ Emblem"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_24px_rgba(255,255,255,0.4)]"
          />
        </div>

        {/* Wordmark Logo */}
        <div className="relative w-44 h-9 sm:w-56 sm:h-11 mb-8">
          <Image
            src="/brand/saj-logo-white.png"
            alt="SAJ Development"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Architectural Creed */}
        <p className="text-xs sm:text-sm font-light tracking-[0.25em] text-neutral-400 uppercase mb-8">
          Shaping Tomorrow’s Landmarks
        </p>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative border border-neutral-800">
          <div
            className="h-full bg-gradient-to-r from-neutral-500 via-white to-neutral-200 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Numeric Metrology Indicator */}
        <div className="mt-4 font-mono text-xs tracking-[0.3em] text-neutral-400">
          {String(percent).padStart(3, "0")} %
        </div>
      </div>

      {/* Bottom Bar: Architectural Standards */}
      <div className="relative z-10 px-8 sm:px-16 pb-10 flex items-center justify-between text-[10px] font-mono tracking-[0.22em] uppercase text-neutral-400 border-t border-neutral-900/80 mx-8 sm:mx-16 pt-4">
        <span>AUTHENTIC EMIRATI NOBILITY</span>
        <span>ARCHITECTURAL RIGOR</span>
      </div>
    </div>
  );
};

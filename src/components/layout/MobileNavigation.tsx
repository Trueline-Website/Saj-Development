"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/Button";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden transition-all duration-300"
    >
      {/* Top bar with close button */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
          Menu
        </span>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-6 my-auto">
        {primaryNavigation.map((item, idx) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors py-2 border-b border-neutral-900"
          >
            <span>{item.label}</span>
            <span className="text-xs font-mono text-neutral-600">0{idx + 1}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom CTA & footer info */}
      <div className="space-y-4 pt-6 border-t border-neutral-900">
        <Button
          variant="primary"
          size="lg"
          href="#contact"
          className="w-full"
          onClick={onClose}
        >
          Enquire Now
        </Button>
        <p className="text-[11px] text-center tracking-widest uppercase text-neutral-400">
          Dubai, United Arab Emirates
        </p>
      </div>
    </div>
  );
};

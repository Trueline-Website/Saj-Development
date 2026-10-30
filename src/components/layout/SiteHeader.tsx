"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";

import { useLoader } from "@/components/ui/LoaderContext";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoading } = useLoader();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          isLoading ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        } ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-4 border-b border-neutral-900 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 lg:py-8"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* SAJ Development Official Logo */}
            <Link
              href="/"
              className="relative flex items-center group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="SAJ Development Homepage"
            >
              <div className="relative h-8 w-40 sm:h-9 sm:w-48">
                <Image
                  src="/brand/saj-logo-white.png"
                  alt="SAJ Development"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center space-x-10"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.22em] font-medium text-neutral-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Action / Enquire Now CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              <Button
                variant="secondary"
                size="sm"
                href="#contact"
                className="backdrop-blur-sm"
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 md:hidden text-neutral-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile navigation overlay */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

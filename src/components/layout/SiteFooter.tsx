import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-20 pb-12 relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative h-12 w-44">
              <Image
                src="/brand/saj-logo-white.png"
                alt="SAJ Development"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Combining architectural vision with technical precision to create
              lasting landmarks and elevated spaces across Dubai, United Arab
              Emirates.
            </p>

            <div className="pt-2">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                Dubai • United Arab Emirates
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-400">
              Architecture & Vision
            </h4>
            <ul className="space-y-3">
              {footerNavigation.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards & Notes Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-400">
              Brand Guidelines
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Built in accordance with the official SAJ Development Brand
              Guidelines 2026. Phase 1 Technical Foundation.
            </p>
            <div className="pt-2">
              <Link
                href="/brand/README.md"
                className="text-xs text-neutral-300 hover:text-white underline underline-offset-4 tracking-wider uppercase font-medium"
              >
                View Asset Register
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 {siteConfig.legalName} All rights reserved.</p>

          <div className="flex items-center space-x-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

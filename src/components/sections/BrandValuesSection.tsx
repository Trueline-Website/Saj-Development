import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { officialBrandValues } from "@/data/projects";

export const BrandValuesSection: React.FC = () => {
  return (
    <section
      id="values"
      className="py-24 sm:py-32 bg-black text-white border-t border-neutral-900 relative"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Core Principles"
          title="Guided by Enduring Values."
          subtitle="The five foundational pillars that inform every decision, blueprint, and development under SAJ Development."
          className="mb-16 sm:mb-20"
        />

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {officialBrandValues.map((val) => (
            <div
              key={val.number}
              className="bg-black p-8 sm:p-10 flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-widest text-neutral-400">
                    {val.number}
                  </span>
                  <div className="w-8 h-px bg-neutral-800 group-hover:w-12 group-hover:bg-neutral-500 transition-all duration-300" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  {val.title}
                </h3>

                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 mb-4 font-mono">
                  {val.tagline}
                </p>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-900/60">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  SAJ Standard
                </span>
              </div>
            </div>
          ))}

          {/* 6th Card: The Arabian Horse Heritage Note */}
          <div className="bg-black p-8 sm:p-10 flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-300 border-t md:border-t-0">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-widest text-neutral-400">
                  HERITAGE
                </span>
                <div className="w-8 h-px bg-neutral-800" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                The Arabian Emblem
              </h3>

              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 mb-4 font-mono">
                Strength & Endurance
              </p>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Rooted in the cultural identity of the UAE, our horse emblem
                symbolizes nobility, freedom, and forward momentum—a company
                embracing growth while honoring its roots.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-900/60">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                Cultural Signature
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

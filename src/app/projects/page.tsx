import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { demonstrationProjects } from "@/data/projects";

export const metadata = {
  title: "Architectural Portfolio | SAJ Development",
  description:
    "Explore our complete collection of considered developments defined by architectural precision and timeless luxury.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-28">
      <Container size="wide">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-neutral-400">
            OUR COMPLETE PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Curated Architectural <br />
            <span className="font-light italic text-neutral-200">
              Landmarks & Sanctuaries.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Discover the full portfolio of upcoming developments, residential
            towers, private enclaves, and waterfront pavilions under SAJ
            Development across Dubai.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {demonstrationProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}

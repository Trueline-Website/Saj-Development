import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article className="group flex flex-col bg-transparent transition-all duration-500">
      {/* 1. Large Architectural Photograph (Clean 4:3 Proportions with Sharp Geometry) */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0d0d0d] border border-neutral-800/80 hover:border-neutral-500 transition-colors duration-500 block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
        aria-label={`Explore ${project.name}`}
      >
        <Image
          src={project.heroImage}
          alt={`Architectural representation of ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Minimal Monospace Index Mark */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-mono text-[11px] tracking-widest text-neutral-400 bg-black/70 backdrop-blur-md px-2 py-0.5 border border-neutral-800 rounded-md">
            0{index + 1}
          </span>
        </div>
      </Link>

      {/* 2. Project Information Beneath Image (Generous Whitespace, Clear Typography) */}
      <div className="flex flex-col flex-1 pt-6 pb-2">
        {/* Secondary Location Text */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2 font-mono uppercase tracking-[0.16em]">
          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>{project.location}</span>
        </div>

        {/* Project Name (Prominent without being oversized) */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {project.name}
          </Link>
        </h3>

        {/* Short Description */}
        {project.shortDescription && (
          <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        )}

        {/* Minimal Explore Project → CTA Link */}
        <div className="mt-5 pt-4 border-t border-neutral-900/80">
          <Link
            href={`/projects/${project.slug}`}
            className="group/cta inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-1"
          >
            <span>Explore Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

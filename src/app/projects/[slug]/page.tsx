import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { demonstrationProjects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return demonstrationProjects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = demonstrationProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-28">
      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{project.location}</span>
            <span className="w-1 h-1 bg-neutral-700 rounded-full" />
            <span>{project.status}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Large Architectural Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-neutral-800 bg-[#0a0a0a] mb-16">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Project Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-900 pt-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400 block">
              Architectural Specifications
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Crafted for Longevity & Distinction.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecturalHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="p-5 border border-neutral-900 bg-[#080808] text-sm text-neutral-300 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Button variant="primary" size="lg" href="/#contact">
                <span>Register Private Interest</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

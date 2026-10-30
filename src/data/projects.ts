import { Project, BrandValue } from "@/types/project";

/**
 * Featured Demonstration Projects
 * NOTE: As per Phase 1 & Portfolio specifications, genuine SAJ development names
 * and commercial terms are not fabricated. These represent clearly identifiable
 * demonstration projects showcasing SAJ's architectural vision across Dubai.
 */
export const demonstrationProjects: Project[] = [
  {
    id: "saj-featured-01",
    slug: "featured-project-01",
    name: "Featured Project 01",
    category: "Residential Landmark",
    location: "Dubai Canal District, UAE",
    heroImage: "/images/projects/project-tower-1.jpg",
    coverImage: "/images/projects/project-tower-1.jpg",
    altText: "Architectural exterior of Featured Project 01, a residential landmark tower in Dubai Canal District",
    shortDescription:
      "A soaring residential landmark crafted with fluted concrete geometries, tinted glass facades, and cantilevered sky terraces overlooking Dubai's horizon.",
    description:
      "A soaring residential landmark crafted with fluted concrete geometries, tinted glass facades, and cantilevered sky terraces overlooking Dubai's horizon. Conceived through structural discipline and pure geometric proportions.",
    architecturalHighlights: [
      "Geometric concrete exoskeleton",
      "Panoramic skyline vistas",
      "Integrated biophilic sky courtyards",
    ],
    status: "Architectural Design",
    isDemonstration: true,
    detailsUrl: "/projects/featured-project-01",
    galleryImages: [
      "/images/projects/project-tower-1.jpg",
      "/images/architecture/saj-hero-architecture.jpg",
    ],
  },
  {
    id: "saj-featured-02",
    slug: "featured-project-02",
    name: "Featured Project 02",
    category: "Private Villa Enclave",
    location: "Palm Jumeirah & Coastal Enclave, Dubai",
    heroImage: "/images/projects/project-waterfront-2.jpg",
    coverImage: "/images/projects/project-waterfront-2.jpg",
    altText: "Coastal architectural pavilion of Featured Project 02 with reflecting pools at Palm Jumeirah",
    shortDescription:
      "An exclusive private waterfront enclave featuring minimal travertine stone pavilions, expansive reflecting pools, and uninterrupted sea vistas.",
    description:
      "An exclusive private waterfront enclave featuring minimal travertine stone pavilions, expansive reflecting pools, and uninterrupted sea vistas. Designed to foster privacy, tranquility, and natural light.",
    architecturalHighlights: [
      "Custom Italian travertine stonework",
      "Infinity edge reflection lagoons",
      "Seamless indoor-outdoor living",
    ],
    status: "Under Planning",
    isDemonstration: true,
    detailsUrl: "/projects/featured-project-02",
    galleryImages: [
      "/images/projects/project-waterfront-2.jpg",
      "/images/architecture/saj-about-structure.jpg",
    ],
  },
  {
    id: "saj-featured-03",
    slug: "featured-project-03",
    name: "Featured Project 03",
    category: "Waterfront Residence",
    location: "Dubai Marina & Harbour, UAE",
    heroImage: "/images/projects/project-penthouse-3.jpg",
    coverImage: "/images/projects/project-penthouse-3.jpg",
    altText: "Double-height interior and panoramic terrace of Featured Project 03 in Dubai Marina",
    shortDescription:
      "Curated multi-level sky residences defined by double-height monolithic walls, dark charcoal terrazzo floors, and bespoke bronze detailing.",
    description:
      "Curated multi-level sky residences defined by double-height monolithic walls, dark charcoal terrazzo floors, and bespoke bronze detailing. A refined synthesis of urban grandeur and domestic sanctuary.",
    architecturalHighlights: [
      "Double-height 7-metre living voids",
      "Charcoal terrazzo flooring",
      "Sculptural architectural lighting",
    ],
    status: "Future Concept Preview",
    isDemonstration: true,
    detailsUrl: "/projects/featured-project-03",
    galleryImages: [
      "/images/projects/project-penthouse-3.jpg",
      "/images/projects/project-billboard-context.jpg",
    ],
  },
];

/**
 * Official Brand Values from SAJ Development Brand Guidelines 2026 (Page 6)
 */
export const officialBrandValues: BrandValue[] = [
  {
    number: "01",
    title: "Visionary Thinking",
    tagline: "Purposeful foundations",
    description:
      "Every development begins with a clear vision, thoughtful planning, and a commitment to shaping spaces with enduring purpose.",
  },
  {
    number: "02",
    title: "Design Excellence",
    tagline: "Architectural distinction",
    description:
      "We pursue architectural distinction, refined craftsmanship, and uncompromising attention to detail in every project.",
  },
  {
    number: "03",
    title: "Innovation",
    tagline: "Intelligent progress",
    description:
      "We embrace modern technologies, intelligent solutions, and forward-thinking approaches to create developments built for the future.",
  },
  {
    number: "04",
    title: "Integrity",
    tagline: "Uncompromising trust",
    description:
      "We build lasting relationships through transparency, accountability, reliability, and trust at every stage of our work.",
  },
  {
    number: "05",
    title: "Lasting Value",
    tagline: "Generational legacy",
    description:
      "We create developments that go beyond the present—enhancing lifestyles, strengthening communities, and delivering enduring value for generations to come.",
  },
];

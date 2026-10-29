export interface Project {
  id: string;
  slug: string;
  name: string;
  category: "Residential Landmark" | "Private Villa Enclave" | "Waterfront Residence" | "Commercial Distinction";
  location: string;
  heroImage: string;
  shortDescription: string;
  architecturalHighlights: string[];
  status: "Future Concept Preview" | "Architectural Design" | "Under Planning";
  isDemonstration: boolean;
}

export interface BrandValue {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

import { NavigationItem } from "@/types/project";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Values", href: "/values" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  navigation: [
    { label: "About SAJ", href: "/about" },
    { label: "Our Philosophy", href: "/#vision" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Core Values", href: "/values" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Brand Standards", href: "/brand/README.md" },
  ],
};

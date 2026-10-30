import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LoaderProvider } from "@/components/ui/LoaderContext";
import { SlideUpLoader } from "@/components/ui/SlideUpLoader";
import "./globals.css";

// Work Sans: Official Secondary Typeface (Brand Guidelines 2026, Page 24)
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/brand/favicon-512.png",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/saj-logo-white.png",
        width: 1200,
        height: 630,
        alt: "SAJ Development",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${workSans.variable} h-full bg-black text-white antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-black text-white"
      >
        <LoaderProvider>
          <SlideUpLoader />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LoaderProvider>
      </body>
    </html>
  );
}

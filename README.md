# SAJ Development — Luxury Real Estate Website (Phase 1)

Production-quality Next.js web application for **SAJ Development**, an ultra-luxury real estate development brand based in Dubai, United Arab Emirates.

Built strictly in accordance with the **SAJ Development Brand Guidelines 2026**.

---

## 🏛️ Project Architecture & Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: TypeScript (Strict type checking)
- **Styling**: Tailwind CSS v4 & Custom CSS Design Tokens
- **Icons**: Lucide React
- **Typography**:
  - Primary Headline Typeface: **Aeonik** (Commercial font placeholder & fallback configured as per brand guide)
  - Secondary Body Typeface: **Work Sans** (Loaded via `next/font/google`)
- **Image Delivery**: `next/image` with responsive sizing and layout shift protection
- **Code Quality**: ESLint

---

## 🎨 Official Brand Design System

### Exact Brand Palette (Guidelines Pages 20–21)
- **Primary Black**: `#000000`
- **Primary White**: `#FFFFFF`
- **Secondary Light Grey**: `#B0B0B0`
- **Secondary Medium Grey**: `#7D7D7D`
- **Secondary Dark Grey**: `#4D4D4D`

### Typography Hierarchy (Guidelines Pages 23–24)
- **Primary**: Aeonik Bold (Headlines & Statements), Aeonik Regular (Digital experiences). *See [public/fonts/README.md](public/fonts/README.md) for official foundry font drop-in instructions.*
- **Secondary**: Work Sans (Content-heavy body copy and specifications).

### Official Identity Assets (Extracted directly from PDF)
- **Primary Black Logo**: `public/brand/saj-logo-black.png`
- **Reversed White Logo**: `public/brand/saj-logo-white.png`
- **Arabian Horse Emblem**: `public/brand/saj-emblem-black.png` & `public/brand/saj-emblem-white.png`
- **Favicon & App Icons**: `public/favicon.ico`, `src/app/favicon.ico`, `public/brand/favicon-512.png`
- **Brand Pattern**: `public/brand/saj-pattern.jpg`

*Full asset audit and pending client items are documented in [public/brand/README.md](public/brand/README.md).*

---

## 📂 Project Directory Structure

```
├── public/
│   ├── brand/               # Official logos, emblem, favicon, brand pattern
│   ├── fonts/               # Font documentation and drop-in folder for Aeonik
│   └── images/
│       ├── architecture/    # Architectural plates extracted from brand guidelines
│       └── projects/        # Demonstration project visuals
├── src/
│   ├── app/
│   │   ├── globals.css      # Core brand tokens, CSS variables, typography reset
│   │   ├── layout.tsx       # Root layout with Work Sans, SEO metadata, OpenGraph
│   │   ├── not-found.tsx    # Branded luxury 404 page
│   │   └── page.tsx         # Homepage combining all editorial sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx       # Sticky minimal header with logo & CTA
│   │   │   ├── SiteFooter.tsx       # Footer with brand watermark & legal links
│   │   │   └── MobileNavigation.tsx # Accessible mobile navigation menu
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx              # Cinematic hero section
│   │   │   ├── BrandIntroductionSection.tsx # Editorial brand overview
│   │   │   ├── FeaturedProjectsSection.tsx  # Architectural portfolio preview
│   │   │   ├── BrandValuesSection.tsx       # 5 core values + Arabian emblem
│   │   │   └── CallToActionSection.tsx      # Engagement form & pattern
│   │   └── ui/
│   │       ├── Button.tsx           # Luxury architectural button component
│   │       ├── Container.tsx        # Flexible container system
│   │       ├── SectionHeading.tsx   # Editorial heading typography
│   │       └── ProjectCard.tsx      # 16:10 project showcase card
│   ├── config/
│   │   ├── site.ts          # Brand metadata, SEO, and legal constants
│   │   └── navigation.ts    # Navigation links & routes
│   ├── data/
│   │   └── projects.ts      # Demonstration projects & brand values data
│   └── types/
│       └── project.ts       # TypeScript interfaces
├── SAJ BRANDING GUIDELINES.pdf # Official brand guidelines source of truth
└── package.json
```

---

## 🚀 Running the Project Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Run linting checks
```bash
npm run lint
```

### 4. Build for production
```bash
npm run build
```

### 5. Start the production server
```bash
npm run start
```
# Saj-Development
# Saj-Development

# SAJ Development Brand Typography Integration Guide

## Official Typefaces (Brand Guidelines 2026)

As defined in Section 04 (Typography, Pages 23–24) of the **SAJ Development Brand Guidelines 2026**:

1. **Primary Typeface**: **Aeonik**
   - **Aeonik Bold**: Used for major headlines, billboard messaging, hero statements, and primary titles.
   - **Aeonik Regular**: Used for body text, digital experiences, and everyday brand communications.
   - **Aeonik Light**: Used for subtle subheadings and refined captions.

2. **Secondary Typeface**: **Work Sans**
   - Designed for modern clarity, versatility, and readability in content-heavy layouts, specifications, tables, and supporting copy.
   - **Google Fonts Source**: Loaded automatically via `next/font/google` (`Work_Sans`).

---

## Current Status & Temporary Fallback

- The licensed **Aeonik** commercial font files (`.otf` / `.woff2`) have **not yet been supplied** by the client in this project repository.
- As strictly instructed in the project guidelines:
  > *"If Aeonik is unavailable, do not pretend that another font is Aeonik. Use a visually appropriate fallback temporarily, document the substitution, and make the font configuration easy to update when the official font files are supplied."*
- Currently, the application configures:
  - **Aeonik placeholder CSS variable**: `--font-aeonik`, falling back cleanly to `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif` with geometric uppercase kerning matching Aeonik's visual proportions.
  - **Work Sans**: Loaded and active via Next.js Google Fonts (`--font-work-sans`).

---

## How to Install Official Aeonik Font Files

Once the official licensed Aeonik font files are obtained from the type foundry (CoType Foundry):

1. Place the font files into `public/fonts/` or `src/fonts/`:
   - `public/fonts/Aeonik-Regular.woff2` (or `.otf`)
   - `public/fonts/Aeonik-Bold.woff2` (or `.otf`)
   - `public/fonts/Aeonik-Light.woff2` (optional)

2. Open `src/app/layout.tsx` and uncomment the `localFont` configuration:
   ```typescript
   import localFont from "next/font/local";

   const aeonik = localFont({
     src: [
       {
         path: "../../public/fonts/Aeonik-Light.woff2",
         weight: "300",
         style: "normal",
       },
       {
         path: "../../public/fonts/Aeonik-Regular.woff2",
         weight: "400",
         style: "normal",
       },
       {
         path: "../../public/fonts/Aeonik-Bold.woff2",
         weight: "700",
         style: "normal",
       },
     ],
     variable: "--font-aeonik",
     display: "swap",
   });
   ```

3. Ensure `aeonik.variable` is included in the `<html>` element class list. The entire website typography will immediately switch to authentic Aeonik across all headlines and interfaces.

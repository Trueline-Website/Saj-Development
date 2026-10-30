"use client";

import React, { useEffect, useState } from "react";

/**
 * ScrollProgressBar:
 * A subtle, razor-sharp architectural gold/white progress line fixed at the very top of the window
 * indicating exact reading progress down the page.
 */
export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-neutral-500 via-white to-neutral-200 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

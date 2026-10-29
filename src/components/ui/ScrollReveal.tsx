"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "curtain";
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  distance?: number; // Travel distance in pixels (for slide/fade-up)
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 900,
  distance = 36,
  className = "",
  threshold = 0.12,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Support reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it hits bottom of viewport
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Generate initial vs visible styles based on variant
  const getTransformStyles = () => {
    const transitionProperty = "opacity, transform, filter, clip-path";
    const transitionTiming = "cubic-bezier(0.16, 1, 0.3, 1)"; // Luxurious smooth ease-out curve

    let initialTransform = "";
    let visibleTransform = "translate3d(0, 0, 0) scale(1)";
    let initialFilter = "none";
    let visibleFilter = "none";

    switch (variant) {
      case "fade-up":
        initialTransform = `translate3d(0, ${distance}px, 0)`;
        break;
      case "fade-in":
        initialTransform = "translate3d(0, 0, 0)";
        initialFilter = "blur(4px)";
        visibleFilter = "blur(0px)";
        break;
      case "slide-left":
        initialTransform = `translate3d(${distance}px, 0, 0)`;
        break;
      case "slide-right":
        initialTransform = `translate3d(-${distance}px, 0, 0)`;
        break;
      case "scale-up":
        initialTransform = "scale(0.95)";
        break;
      case "curtain":
        initialTransform = "translate3d(0, 20px, 0)";
        break;
      default:
        initialTransform = `translate3d(0, ${distance}px, 0)`;
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? visibleTransform : initialTransform,
      filter: isVisible ? visibleFilter : initialFilter,
      transition: `${transitionProperty} ${duration}ms ${transitionTiming} ${delay}ms`,
      willChange: "opacity, transform",
    };
  };

  return (
    <div
      ref={elementRef}
      style={getTransformStyles()}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};

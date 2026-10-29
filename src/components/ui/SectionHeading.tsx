import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = "left",
  theme = "dark",
  className = "",
}) => {
  const isLight = theme === "light";

  return (
    <div
      className={`max-w-3xl ${
        alignment === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4 justify-start">
          {alignment === "center" && (
            <span
              className={`h-px w-6 ${
                isLight ? "bg-neutral-400" : "bg-neutral-600"
              }`}
            />
          )}
          <span
            className={`text-[11px] font-semibold tracking-[0.25em] uppercase ${
              isLight ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            {eyebrow}
          </span>
          <span
            className={`h-px w-6 ${
              isLight ? "bg-neutral-400" : "bg-neutral-600"
            }`}
          />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            isLight ? "text-neutral-600" : "text-neutral-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

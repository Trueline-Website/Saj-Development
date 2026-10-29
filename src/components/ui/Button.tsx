import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 uppercase tracking-[0.2em] text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-light-grey disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-8 sm:px-10 py-4 text-xs",
  };

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-neutral-200 border border-white active:scale-[0.99] shadow-sm",
    secondary:
      "bg-transparent text-white border border-neutral-400/80 hover:border-white hover:bg-white/10 active:scale-[0.99] backdrop-blur-[2px]",
    outline:
      "bg-transparent text-white border border-neutral-600 hover:border-white hover:text-white",
    ghost:
      "bg-transparent text-neutral-300 hover:text-white hover:bg-white/5",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

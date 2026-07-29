import type { ReactNode } from "react";
import Reveal from "../Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FF6A00]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-[1.05] tracking-tight text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-[#B8B8C0]">{subtitle}</p>}
    </Reveal>
  );
}

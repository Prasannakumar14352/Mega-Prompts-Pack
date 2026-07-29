import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#FF6A00] ${className}`}
    >
      {children}
    </span>
  );
}

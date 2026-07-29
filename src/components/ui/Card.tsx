import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  featured?: boolean;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  featured = false,
  hover = true,
  className = "",
  ...rest
}: CardProps) {
  if (featured) {
    return (
      <div
        className={`rounded-2xl bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] p-[1.5px] shadow-[0_0_50px_rgba(255,106,0,0.18)] ${className}`}
        {...rest}
      >
        <div className="h-full rounded-2xl bg-[#171719] p-6 sm:p-8">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-[#2A2A2E] bg-[#121214] transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:border-[#FF6A00]/45 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

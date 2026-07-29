interface GlowProps {
  className?: string;
}

/** Soft orange radial glow. Purely decorative. */
export function OrangeGlow({ className = "" }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-[#FF6A00]/[0.18] blur-3xl ${className}`}
    />
  );
}

/** Faint grid texture for dark sections. Purely decorative. */
export function GridOverlay({ className = "" }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] ${className}`}
    />
  );
}

/** Thin orange accent line. Purely decorative. */
export function AccentLine({ className = "" }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent ${className}`}
    />
  );
}

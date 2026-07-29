import { useMemo } from "react";
import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import { useOfferCountdown } from "../hooks/useOfferCountdown";

type Variant = "inline" | "box";

interface OfferCountdownProps {
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  /** Rendered once this visitor's 20-minute offer has expired. */
  expiredFallback?: ReactNode;
}

export default function OfferCountdown({
  variant = "box",
  className = "",
  showIcon = false,
  expiredFallback,
}: OfferCountdownProps) {
  const { minutes, seconds, isExpired, formattedTime } = useOfferCountdown();

  // Recomputed on every tick, but the string only actually changes once a
  // minute (seconds are omitted) so screen readers aren't interrupted every second.
  const srSummary = useMemo(() => {
    if (isExpired) return "Your launch offer has ended.";
    return `${minutes} minute${minutes === 1 ? "" : "s"} and ${seconds} second${
      seconds === 1 ? "" : "s"
    } remaining in your launch offer.`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes, isExpired]);

  if (isExpired) {
    return (
      <div className={className} role="status" aria-live="polite">
        {expiredFallback ?? (
          <p className="text-sm font-semibold text-[#B8B8C0]">Your launch offer has ended.</p>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {srSummary}
      </span>
      <div aria-hidden="true">
        {variant === "inline" ? (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#090909] px-2.5 py-1 font-heading text-sm font-bold tabular-nums text-white">
            {formattedTime}
          </span>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-xl border border-[#FF6A00]/40 bg-[#121214] px-4 py-2.5 shadow-[0_0_18px_rgba(255,106,0,0.15)]">
            {showIcon && <Clock size={16} className="text-[#FF6A00]" aria-hidden="true" />}
            <span className="font-heading tabular-nums text-xl sm:text-2xl font-bold text-white">
              {formattedTime}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

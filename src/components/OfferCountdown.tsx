import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import { useOfferCountdown } from "../hooks/useOfferCountdown";

type Variant = "inline" | "box";

interface OfferCountdownProps {
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  /** Rendered once the current promotional session has ended. */
  expiredFallback?: ReactNode;
}

function unit(value: number, singular: string): string {
  return `${value} ${singular}${value === 1 ? "" : "s"}`;
}

export default function OfferCountdown({
  variant = "box",
  className = "",
  showIcon = false,
  expiredFallback,
}: OfferCountdownProps) {
  const { hours, minutes, seconds, isExpired, formattedTime } = useOfferCountdown();

  if (isExpired) {
    // The transition to expired is the only moment worth announcing —
    // aria-live is intentionally not used on the ticking countdown below.
    return (
      <div className={className} role="status" aria-live="polite">
        {expiredFallback ?? (
          <p className="text-sm font-semibold text-[#B8B8C0]">
            This promotional session has ended.
          </p>
        )}
      </div>
    );
  }

  const accessibleLabel = `${unit(hours, "hour")}, ${unit(minutes, "minute")} and ${unit(
    seconds,
    "second"
  )} remaining in the current promotional session.`;

  return (
    <div
      className={`inline-flex items-center ${className}`}
      role="timer"
      aria-label={accessibleLabel}
    >
      {variant === "inline" ? (
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 rounded-md bg-[#090909] px-2.5 py-1 font-heading text-sm font-bold tabular-nums text-white"
        >
          {formattedTime}
        </span>
      ) : (
        <div
          aria-hidden="true"
          className="inline-flex items-center gap-2 rounded-xl border border-[#FF6A00]/40 bg-[#121214] px-4 py-2.5 shadow-[0_0_18px_rgba(255,106,0,0.15)]"
        >
          {showIcon && <Clock size={16} className="text-[#FF6A00]" aria-hidden="true" />}
          <span className="font-heading tabular-nums text-xl sm:text-2xl font-bold text-white">
            {formattedTime}
          </span>
        </div>
      )}
    </div>
  );
}

import { useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { LAUNCH_OFFER_END } from "../config";

type Variant = "inline" | "boxes";

interface LaunchCountdownProps {
  variant?: Variant;
  className?: string;
  /** Rendered once the deadline has passed. */
  expiredFallback?: React.ReactNode;
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function LaunchCountdown({
  variant = "boxes",
  className = "",
  expiredFallback,
}: LaunchCountdownProps) {
  const { days, hours, minutes, seconds, expired, invalid } = useCountdown(LAUNCH_OFFER_END);

  // Update the screen-reader summary once a minute rather than every second.
  const srSummary = useMemo(() => {
    if (invalid) return "Launch offer countdown is unavailable.";
    if (expired) return "The launch offer has ended.";
    return `${days} days, ${hours} hours and ${minutes} minutes remaining in the launch offer.`;
  }, [days, hours, minutes, invalid, expired]);

  if (invalid) {
    return null;
  }

  if (expired) {
    return (
      <div className={className} role="status" aria-live="polite">
        {expiredFallback ?? (
          <p className="text-sm font-semibold text-[#B8B8C0]">Launch offer has ended</p>
        )}
      </div>
    );
  }

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-1 ${className}`}>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {srSummary}
        </span>
        <span aria-hidden="true" className="tabular-nums font-semibold">
          {pad(days)}d : {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}
      role="group"
      aria-label="Launch offer countdown"
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {srSummary}
      </span>
      {units.map((unit) => (
        <div
          key={unit.label}
          aria-hidden="true"
          className="flex min-w-[56px] sm:min-w-[64px] flex-col items-center rounded-xl border border-[#FF6A00]/35 bg-[#121214] px-2.5 py-2 sm:px-3 sm:py-3 shadow-[0_0_18px_rgba(255,106,0,0.12)]"
        >
          <span className="font-heading tabular-nums text-xl sm:text-2xl font-bold text-white">
            {pad(unit.value)}
          </span>
          <span className="mt-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#85858E]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

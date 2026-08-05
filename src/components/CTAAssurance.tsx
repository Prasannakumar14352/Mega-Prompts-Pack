import { CheckCircle2 } from "lucide-react";
import { GUARANTEE_DAYS } from "../config";

interface CTAAssuranceProps {
  align?: "center" | "left";
  className?: string;
}

/** Guarantee badge + trust strip shown directly under every "Get Instant Access" button. */
export default function CTAAssurance({ align = "center", className = "" }: CTAAssuranceProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-1.5 ${alignClass} ${className}`}>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
        <CheckCircle2 size={16} className="text-[#FF6A00]" aria-hidden="true" />
        {GUARANTEE_DAYS}-day money-back guarantee
      </span>
      <p className="text-xs text-[#85858E]">
        Instant download • Secure checkout • Works with ChatGPT, Claude, Gemini & Midjourney
      </p>
    </div>
  );
}

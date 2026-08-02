import { Star, Users, Zap } from "lucide-react";
import { BUYER_COUNT, RATING } from "../config";

interface TrustBarProps {
  className?: string;
}

export default function TrustBar({ className = "" }: TrustBarProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#B8B8C0] ${className}`}
    >
      <span className="inline-flex items-center gap-1.5">
        <Star size={15} className="fill-[#FF6A00] text-[#FF6A00]" aria-hidden="true" />
        <span className="font-semibold text-white">{RATING}</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Users size={15} className="text-[#FF6A00]" aria-hidden="true" />
        {BUYER_COUNT}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Zap size={15} className="text-[#FF6A00]" aria-hidden="true" />
        Instant delivery
      </span>
    </div>
  );
}

import { useState } from "react";

interface LogoProps {
  compact?: boolean;
  className?: string;
}

const LOGO_SRC = "/prodxstore-logo.png";
const ALT_TEXT = "PRODXSTORE Digital Products Marketplace";

export default function Logo({ compact = false, className = "" }: LogoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        className={`font-heading text-lg font-bold tracking-tight text-white ${className}`}
      >
        PROD<span className="text-[#FF6A00]">XSTORE</span>
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt={ALT_TEXT}
      onError={() => setErrored(true)}
      className={`${compact ? "w-[150px] sm:w-[165px]" : "w-[190px] sm:w-[210px]"} h-auto object-contain ${className}`}
    />
  );
}

import { useEffect, useState } from "react";
import { scrollToId } from "../utils/scroll";
import Button from "./ui/Button";
import { useOfferCountdown } from "../hooks/useOfferCountdown";
import { PRODUCT_PRICE } from "../config";

export default function StickyMobileCTA() {
  const [pricingVisible, setPricingVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const hidden = pricingVisible || footerVisible;
  const { isExpired, formattedTime } = useOfferCountdown();

  useEffect(() => {
    const pricingEl = document.getElementById("pricing");
    const footerEl = document.getElementById("site-footer");
    if (!pricingEl && !footerEl) return;

    const pricingObserver = new IntersectionObserver(
      ([entry]) => setPricingVisible(entry.intersectionRatio > 0.4),
      { threshold: [0, 0.4, 1] }
    );
    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    if (pricingEl) pricingObserver.observe(pricingEl);
    if (footerEl) footerObserver.observe(footerEl);

    return () => {
      pricingObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-[#2A2A2E] bg-[rgba(7,7,7,0.96)] backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <span className="block text-lg font-bold text-[#FF6A00]">{PRODUCT_PRICE}</span>
          <span className="block truncate text-[11px] font-medium text-[#85858E]">
            {isExpired ? "Available now" : formattedTime}
          </span>
        </div>
        <Button
          onClick={() => scrollToId("pricing")}
          className="!px-5 !py-3 shrink-0 whitespace-nowrap"
          aria-label={`Get Instant Access for ${PRODUCT_PRICE} — scroll to pricing`}
        >
          Get Instant Access — {PRODUCT_PRICE}
        </Button>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./ui/Button";
import Logo from "./Logo";
import { GridOverlay, OrangeGlow } from "./ui/Decor";
import { useOfferCountdown } from "../hooks/useOfferCountdown";
import { scrollToId } from "../utils/scroll";
import { LAUNCH_PRICE, PROMPT_COUNT, REGULAR_PRICE } from "../config";

export default function FinalCTA() {
  const { isExpired } = useOfferCountdown();

  return (
    <section className="relative overflow-hidden bg-[#070707] py-16 sm:py-24">
      <GridOverlay className="opacity-25" />
      <OrangeGlow className="left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[820px] px-4 sm:px-6 text-center">
        <Reveal>
          <div className="mb-6 flex justify-center">
            <Logo compact />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Stop rewriting prompts. <span className="text-[#FF6A00]">Start creating.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#B8B8C0]">
            Get {PROMPT_COUNT} organized AI prompts, five premium bonus collections, lifetime
            access and free monthly updates.
          </p>

          <p className="mt-6 text-xl font-semibold text-white">
            {isExpired ? (
              <>Get complete lifetime access for {REGULAR_PRICE}.</>
            ) : (
              <>
                Get lifetime access for <span className="text-[#FF6A00]">{LAUNCH_PRICE}</span>{" "}
                before your offer ends.
              </>
            )}
          </p>

          <Button onClick={() => scrollToId("pricing")} fullWidthOnMobile className="mt-7">
            {isExpired ? "View Regular Access" : "View Launch Offer"}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>

          <p className="mt-5 text-sm text-[#85858E]">
            Instant digital delivery • No subscription • 7-day guarantee
          </p>
        </Reveal>
      </div>
    </section>
  );
}

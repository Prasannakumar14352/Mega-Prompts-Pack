import { ArrowRight, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { PRODUCT_PRICE, PROMPT_COUNT } from "../config";
import { scrollToId } from "../utils/scroll";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { GridOverlay, OrangeGlow } from "./ui/Decor";
import OfferCountdown from "./OfferCountdown";
import { useOfferCountdown } from "../hooks/useOfferCountdown";

const FILE_CARDS = [
  { name: "ChatGPT.csv", count: "312,480 prompts", rotate: "-rotate-6", offset: "translate-y-2" },
  { name: "Midjourney.csv", count: "138,240 prompts", rotate: "rotate-3", offset: "-translate-y-3" },
  { name: "Claude.csv", count: "98,160 prompts", rotate: "-rotate-2", offset: "translate-y-4" },
  { name: "Flux.csv", count: "138,240 prompts", rotate: "rotate-6", offset: "-translate-y-1" },
  { name: "Sora.csv", count: "44,640 prompts", rotate: "-rotate-4", offset: "translate-y-1" },
  { name: "Landing-Page-Builder.csv", count: "22,080 prompts", rotate: "rotate-2", offset: "-translate-y-2" },
];

export default function Hero() {
  const { isExpired } = useOfferCountdown();

  return (
    <section className="relative overflow-hidden bg-[#070707]">
      <GridOverlay className="opacity-30" />
      <OrangeGlow className="right-[-10%] top-[10%] h-[420px] w-[420px]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Badge>The Complete AI Prompt Library</Badge>

          <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
            <span className="bg-gradient-to-r from-[#FF6A00] via-[#FF9A4D] to-white bg-clip-text text-transparent">
              {PROMPT_COUNT}
            </span>{" "}
            prompts. Better AI results in less time.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-[#B8B8C0]">
            Copy proven prompts for writing, marketing, images, video, coding and business—without
            spending hours learning prompt engineering.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button onClick={() => scrollToId("pricing")} fullWidthOnMobile className="group relative overflow-hidden">
              <span className="relative z-10 inline-flex items-center gap-2">
                Get Instant Access
                <ArrowRight size={18} aria-hidden="true" />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/25 blur-md"
              />
            </Button>
            <p className="text-sm text-[#85858E]">
              One payment. Instant download. Lifetime access.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#B8B8C0]">
            <ShieldCheck size={16} className="text-[#FF6A00]" aria-hidden="true" />
            <span>Instant digital delivery • Secure checkout • 7-day money-back guarantee</span>
          </div>

          <div className="mt-6">
            {isExpired ? (
              <p className="text-sm font-semibold text-[#B8B8C0]">
                Get complete lifetime access for {PRODUCT_PRICE}.
              </p>
            ) : (
              <>
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-[#85858E]">
                  Your promotional session ends in
                </p>
                <OfferCountdown showIcon />
                <p className="mt-2.5 text-xs text-[#85858E]">
                  Get complete lifetime access for {PRODUCT_PRICE}.
                </p>
              </>
            )}
          </div>

          {/* Add verified customer count and rating here only after genuine purchase and review data is available. */}
          <p className="mt-8 text-sm font-medium text-[#85858E] border-t border-[#2A2A2E] pt-6">
            Built for ChatGPT, Claude, Gemini, Midjourney, Sora and more.
          </p>
        </div>

        <div className="relative flex items-center justify-center py-10 lg:py-0" aria-hidden="true">
          <div className="absolute h-72 w-72 rounded-full bg-[#FF6A00]/20 blur-3xl" />
          <div className="absolute right-0 top-8 h-56 w-56 rounded-full bg-[#FF6A00]/10 blur-3xl" />
          <div className="absolute left-4 bottom-6 h-2 w-2 rounded-full bg-[#FF6A00] blur-[1px]" />
          <div className="absolute right-10 top-4 h-1.5 w-1.5 rounded-full bg-[#FF6A00]/80 blur-[1px]" />

          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            {FILE_CARDS.map((card) => (
              <div
                key={card.name}
                className={`animate-float w-36 sm:w-40 rounded-2xl border border-[#2A2A2E] bg-[#121214] p-4 shadow-xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/45 ${card.rotate} ${card.offset}`}
              >
                <div className="flex items-center gap-2">
                  <FileSpreadsheet size={16} className="text-[#FF6A00]" />
                  <span className="truncate text-[11px] font-semibold text-white">{card.name}</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-[#2A2A2E]" />
                  <div className="h-1.5 w-4/5 rounded-full bg-[#2A2A2E]" />
                  <div className="h-1.5 w-3/5 rounded-full bg-[#2A2A2E]" />
                </div>
                <p className="mt-3 text-[10px] font-medium text-[#85858E]">{card.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

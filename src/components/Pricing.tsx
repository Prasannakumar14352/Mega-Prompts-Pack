import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import OfferCountdown from "./OfferCountdown";
import { OrangeGlow } from "./ui/Decor";
import { useOfferCountdown } from "../hooks/useOfferCountdown";
import {
  LAUNCH_BUY_LINK,
  LAUNCH_PRICE,
  PROMPT_COUNT,
  REGULAR_BUY_LINK,
  REGULAR_PRICE,
  SUPPORT_EMAIL,
  TOTAL_VALUE,
  isValidCheckoutLink,
} from "../config";

const VALUE_ITEMS = [
  { label: "Main AI Prompt Vault", price: "₹1,999" },
  { label: "Instant Landing Page Builder", price: "₹700" },
  { label: "Google Imagen & Gemini Image Pack", price: "₹500" },
  { label: "Higgsfield Soul Studio Image Pack", price: "₹500" },
  { label: "AI Video Pack — Volume 1", price: "₹400" },
  { label: "AI Video Pack — Volume 2", price: "₹400" },
];

const INCLUDED_CHIPS = [
  `${PROMPT_COUNT} prompts`,
  "5 bonus collections",
  "CSV format",
  "Lifetime access",
  "Commercial use",
];

export default function Pricing() {
  const { isExpired } = useOfferCountdown();

  const activePrice = isExpired ? REGULAR_PRICE : LAUNCH_PRICE;
  const activeBuyLink = isExpired ? REGULAR_BUY_LINK : LAUNCH_BUY_LINK;
  const activeButtonText = isExpired ? `Get Access for ${REGULAR_PRICE}` : `Get Instant Access for ${LAUNCH_PRICE}`;
  const linkReady = isValidCheckoutLink(activeBuyLink);

  const handlePurchase = () => {
    if (!linkReady) return;
    window.location.href = activeBuyLink;
  };

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-24 bg-[#0D0D0F]">
      <OrangeGlow className="left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-70" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl rounded-3xl bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] p-[1.5px] shadow-[0_30px_90px_rgba(255,106,0,0.22)]">
          <div className="rounded-3xl bg-[#070707] p-6 sm:p-10">
            <div className="flex justify-center">
              <Badge>{isExpired ? "Regular Access" : "2-Hour Launch Offer"}</Badge>
            </div>

            <h2 className="mt-5 text-center font-heading text-2xl sm:text-3xl font-bold text-white">
              Get the complete Mega AI Prompt Vault
            </h2>

            <div className="mt-8 space-y-3">
              {VALUE_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[1fr_auto] items-start gap-4 text-sm"
                >
                  <span className="text-[#B8B8C0]">{item.label}</span>
                  <span className="whitespace-nowrap font-semibold text-white">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-[#2A2A2E]" />

            <div className="text-center">
              <p className="text-sm text-[#B8B8C0]">Total value</p>
              <p className="text-xl font-semibold text-[#85858E] line-through">{TOTAL_VALUE}</p>

              <p className="mt-4 text-sm font-medium text-[#FF6A00]">
                {isExpired ? "Regular price" : "Launch price"}
              </p>
              <p className="mt-1 font-heading text-6xl font-extrabold text-[#FF6A00]">
                {activePrice}
              </p>
              <p className="mt-2 text-sm text-[#B8B8C0]">One-time payment. No subscription.</p>
            </div>

            <div className="mt-8 text-center">
              {isExpired ? (
                <>
                  <p className="text-sm font-semibold text-[#B8B8C0]">
                    Your 2-hour launch offer has ended.
                  </p>
                  <p className="mt-2 text-xs text-[#85858E]">
                    You can still purchase the complete Mega AI Prompt Vault with lifetime access.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#85858E]">
                    Your {LAUNCH_PRICE} launch offer ends in
                  </p>
                  <OfferCountdown className="justify-center" />
                  <p className="mt-3 text-xs text-[#85858E]">
                    Complete your purchase before the countdown reaches zero to lock in the launch
                    price.
                  </p>
                </>
              )}
            </div>

            {linkReady ? (
              <Button
                onClick={handlePurchase}
                aria-label={`${activeButtonText} — proceed to secure checkout`}
                className="mt-6 w-full"
              >
                {activeButtonText}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            ) : (
              <>
                <Button disabled aria-disabled="true" className="mt-6 w-full">
                  {activeButtonText}
                </Button>
                <p className="mt-3 text-center text-xs text-[#F59E0B]">
                  Regular-price checkout is temporarily unavailable.
                </p>
                <p className="mt-1 text-center text-xs text-[#85858E]">
                  Email{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-medium text-[#FF6A00] hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  for access.
                </p>
              </>
            )}

            <p className="mt-3 text-center text-xs text-[#85858E]">
              Instant download • Secure payment • 7-day money-back guarantee
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {INCLUDED_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#2A2A2E] bg-[#121214] px-3 py-1.5 text-xs font-medium text-[#F5F5F7]"
                >
                  <ShieldCheck size={12} className="text-[#FF6A00]" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

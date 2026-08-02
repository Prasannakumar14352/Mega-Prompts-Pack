import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import Badge from "./ui/Badge";
import LinkButton from "./ui/LinkButton";
import OfferCountdown from "./OfferCountdown";
import TrustBar from "./TrustBar";
import PaymentMethods from "./PaymentMethods";
import { OrangeGlow } from "./ui/Decor";
import { useOfferCountdown } from "../hooks/useOfferCountdown";
import {
  COMPARE_AT_PRICE,
  PRODUCT_PRICE,
  SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED,
  SUPERPROFILE_PRODUCT_URL,
  SUPPORT_EMAIL,
  VALUE_STACK,
  formatINR,
  isValidSuperProfileUrl,
} from "../config";

const TOTAL_VALUE = VALUE_STACK.reduce((sum, item) => sum + item.price, 0);

const BUTTON_TEXT = `Get Instant Access for ${PRODUCT_PRICE}`;

export default function Pricing() {
  const { isExpired } = useOfferCountdown();
  const linkReady = isValidSuperProfileUrl(SUPERPROFILE_PRODUCT_URL);

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-24 bg-[#0D0D0F]">
      <OrangeGlow className="left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-70" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="mx-auto flex justify-center">
          <TrustBar className="mb-8 justify-center" />
        </Reveal>

        <Reveal className="mx-auto max-w-xl rounded-3xl bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] p-[1.5px] shadow-[0_30px_90px_rgba(255,106,0,0.22)]">
          <div className="rounded-3xl bg-[#070707] p-6 sm:p-10">
            <div className="flex justify-center">
              <Badge>Limited Offer</Badge>
            </div>

            <h2 className="mt-5 text-center font-heading text-2xl sm:text-3xl font-bold text-white">
              Get the complete Mega AI Prompt Vault
            </h2>

            <div className="mt-8">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#85858E]">
                Everything you get — total value if bought separately
              </p>

              <div className="mt-4 space-y-2.5">
                {VALUE_STACK.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="flex items-start gap-2.5 text-[#B8B8C0]">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#FF6A00]"
                        aria-hidden="true"
                      />
                      {item.label}
                    </span>
                    <span className="shrink-0 font-medium text-white">{formatINR(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#2A2A2E] pt-3 text-sm">
                <span className="text-[#85858E]">Total value</span>
                <span className="font-semibold text-[#85858E] line-through">
                  {formatINR(TOTAL_VALUE)}
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-[#85858E]">
              Searchable CSV files • Lifetime access, no subscription • Personal and commercial use
            </p>

            <div className="my-6 h-px bg-[#2A2A2E]" />

            <div className="text-center">
              <p className="text-sm text-[#85858E] line-through">{COMPARE_AT_PRICE}</p>
              <p className="mt-1 text-sm font-medium text-[#FF6A00]">Launch price</p>
              <p className="mt-1 font-heading text-6xl font-extrabold text-[#FF6A00]">
                {PRODUCT_PRICE}
              </p>
              <p className="mt-2 text-sm text-[#B8B8C0]">One-time payment. No subscription.</p>
            </div>

            <div className="mt-8 text-center">
              {isExpired ? (
                <p className="text-sm font-semibold text-[#B8B8C0]">
                  This promotional session has ended. Access is still available for{" "}
                  {PRODUCT_PRICE}.
                </p>
              ) : (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#85858E]">
                    Current promotional session ends in
                  </p>
                  <OfferCountdown className="justify-center" />
                </>
              )}
            </div>

            <LinkButton
              href={SUPERPROFILE_PRODUCT_URL}
              disabled={!linkReady}
              aria-label={`Purchase The Mega AI Prompt Vault for ${PRODUCT_PRICE}`}
              className="mt-6 w-full"
            >
              {BUTTON_TEXT}
              <ArrowRight size={18} aria-hidden="true" />
            </LinkButton>

            {!linkReady && (
              <p className="mt-3 text-center text-xs text-[#F59E0B]">
                Checkout is temporarily unavailable. Contact{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-medium text-[#FF6A00] hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            )}

            <PaymentMethods className="mt-4" />

            <p className="mt-4 text-center text-xs text-[#85858E]">
              {SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED
                ? "Secure checkout • Instant digital delivery • Product access by email"
                : "Secure checkout • Instant digital delivery"}
            </p>

            <p className="mt-2 text-center text-xs text-[#85858E]">
              {SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED
                ? "After successful payment through SuperProfile, your product access or download instructions will be displayed and sent to the email address used during checkout."
                : "After successful payment through SuperProfile, your product access or download instructions will be displayed on the confirmation page."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";
import Logo from "./Logo";
import LegalLink from "./ui/LegalLink";
import { scrollToId } from "../utils/scroll";
import {
  CONTACT_LINK,
  PRIVACY_LINK,
  REFUND_LINK,
  SUPPORT_EMAIL,
  TERMS_LINK,
} from "../config";

const LINK_CLASS = "text-sm text-[#B8B8C0] hover:text-[#FF6A00] transition-colors";

const PRODUCT_LINKS: { label: string; id: string }[] = [
  { label: "What's Inside", id: "inside" },
  { label: "Bonuses", id: "bonuses" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="relative overflow-hidden border-t border-[#2A2A2E] bg-[#050505]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6A00]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FF6A00]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="w-[175px] sm:w-[210px] lg:w-[230px]" />
            <p className="mt-4 max-w-xs text-sm text-[#B8B8C0] leading-relaxed">
              Premium digital products, AI resources and creator tools designed to help
              freelancers, marketers and small businesses work faster.
            </p>
            <a
              href={CONTACT_LINK}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#FF6A00] hover:underline"
              aria-label={`Email PRODXSTORE support at ${SUPPORT_EMAIL}`}
            >
              <Mail size={15} aria-hidden="true" />
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-4 text-xs text-[#85858E] leading-relaxed">
              Secure checkout • Instant digital delivery • Lifetime product access
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToId(link.id)} className={LINK_CLASS}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <LegalLink href={TERMS_LINK} label="Terms and Conditions" className={LINK_CLASS} />
              </li>
              <li>
                <LegalLink href={PRIVACY_LINK} label="Privacy Policy" className={LINK_CLASS} />
              </li>
              <li>
                <LegalLink href={REFUND_LINK} label="Refund Policy" className={LINK_CLASS} />
              </li>
              <li>
                <a href={CONTACT_LINK} className={LINK_CLASS}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Need help?
            </h3>
            <p className="mt-4 text-sm text-[#B8B8C0] leading-relaxed">
              Questions about payment, downloads or access? Contact our support team.
            </p>
            <a
              href={CONTACT_LINK}
              className="mt-3 inline-block text-sm font-medium text-[#FF6A00] hover:underline"
              aria-label={`Email PRODXSTORE support at ${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-3 text-xs text-[#85858E]">
              Typical response time: within 1–2 business days.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2A2A2E] pt-6">
          <p className="max-w-3xl text-xs text-[#85858E] leading-relaxed">
            Product names, model names and trademarks belong to their respective owners.
            PRODXSTORE is an independent digital-products brand and is not affiliated with,
            sponsored by or endorsed by OpenAI, Anthropic, Google, Adobe, Midjourney or the other
            AI platforms referenced on this website.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[#2A2A2E] pt-6 text-xs text-[#85858E] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} PRODXSTORE. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em] text-[#85858E]">Digital Products Marketplace</p>
        </div>
      </div>
    </footer>
  );
}

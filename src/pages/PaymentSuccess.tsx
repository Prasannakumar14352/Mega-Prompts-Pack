import { Link } from "react-router-dom";
import {
  Check,
  Mail,
  FolderOpen,
  Sparkles,
  ShieldAlert,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";
import Logo from "../components/Logo";
import Reveal from "../components/Reveal";
import Card from "../components/ui/Card";
import LinkButton from "../components/ui/LinkButton";
import LegalLink from "../components/ui/LegalLink";
import { OrangeGlow } from "../components/ui/Decor";
import { BUTTON_BASE, BUTTON_VARIANTS } from "../components/ui/buttonStyles";
import { usePageMeta } from "../hooks/usePageMeta";
import { getSanitizedPaymentReference } from "../utils/paymentReference";
import {
  CONTACT_LINK,
  PRIVACY_LINK,
  PRODUCT_NAME,
  REFUND_LINK,
  SUPPORT_EMAIL,
  TERMS_LINK,
} from "../config";

// This page is no longer the primary post-purchase destination: SuperProfile
// shows its own confirmation page and sends its own delivery email after
// checkout. It is kept temporarily as a generic support/reference page while
// the SuperProfile purchase flow is being tested, and is not linked from the
// main customer journey.

const SUPPORT_MAILTO =
  "mailto:support@prodxstore.com?subject=Mega%20AI%20Prompt%20Vault%20Access%20Support";

const STEPS = [
  {
    icon: Mail,
    title: "Check your email",
    copy: "Look for a message containing your product-access instructions at the email address used during payment.",
  },
  {
    icon: FolderOpen,
    title: "Open your files",
    copy: "Follow the access instructions to download and save The Mega AI Prompt Vault.",
  },
  {
    icon: Sparkles,
    title: "Start creating",
    copy: "Open the relevant CSV collection, choose a prompt and customize it for your task or project.",
  },
];

const INCLUDED_ITEMS = [
  "1,287,840+ core AI prompts",
  "Five premium bonus collections",
  "Searchable CSV files",
  "Lifetime product access",
  "Personal and commercial-use license",
];

const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: TERMS_LINK, label: "Terms and Conditions" },
  { href: PRIVACY_LINK, label: "Privacy Policy" },
  { href: REFUND_LINK, label: "Refund Policy" },
];

export default function PaymentSuccess() {
  usePageMeta({
    title: "Payment Received — The Mega AI Prompt Vault | PRODXSTORE",
    description:
      "Thank you for purchasing The Mega AI Prompt Vault. Review your product-access instructions and contact PRODXSTORE support if you need assistance.",
    robots: "noindex, nofollow",
  });

  // A public redirect page does not securely verify payment. Add server-side
  // verification before automatically unlocking protected files.
  const paymentReference = getSanitizedPaymentReference();
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#070707]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="flex justify-center border-b border-[#2A2A2E] px-4 py-6">
        <Link to="/" aria-label="PRODXSTORE home">
          <Logo />
        </Link>
      </header>

      <main id="main-content" className="relative overflow-hidden">
        <OrangeGlow className="left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 opacity-60" />

        <div className="relative mx-auto max-w-[760px] px-4 sm:px-6 py-14 sm:py-20 text-center">
          {/* 1. Success icon */}
          <Reveal>
            <div
              aria-hidden="true"
              className="mx-auto flex h-20 w-20 animate-pop-in items-center justify-center rounded-full border-2 border-[#FF6A00] bg-[#121214] shadow-[0_0_40px_rgba(255,106,0,0.35)]"
            >
              <Check size={36} className="text-[#FF6A00]" strokeWidth={3} />
            </div>
          </Reveal>

          {/* 2. Main heading */}
          <Reveal delay={80} className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00]">
              Order Received
            </p>
            <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Thank you for your purchase
            </h1>
            <p className="mt-2 text-lg font-semibold text-[#F5F5F7]">{PRODUCT_NAME}</p>

            <p className="mt-5 text-base text-[#B8B8C0] leading-relaxed">
              Your product access is provided through SuperProfile and sent to the email address
              you used during checkout.
            </p>
            <p className="mt-3 text-sm text-[#85858E] leading-relaxed">
              Please allow a few minutes for the email to arrive, and check your Spam or
              Promotions folder if you do not see it.
            </p>

            {paymentReference && (
              <p className="mt-4 text-xs text-[#85858E]">
                Payment reference:{" "}
                <span className="font-mono text-[#B8B8C0]">{paymentReference}</span>
              </p>
            )}
          </Reveal>
        </div>

        {/* 3. What happens next */}
        <section className="border-t border-[#2A2A2E] bg-[#0D0D0F] py-14 sm:py-20">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6">
            <Reveal>
              <h2 className="text-center font-heading text-2xl sm:text-3xl font-bold text-white">
                What happens next?
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <Card hover={false} className="h-full p-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] text-sm font-bold text-[#090909]">
                        {i + 1}
                      </span>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">
                        <step.icon size={20} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">{step.copy}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Product summary */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6">
            <Reveal>
              <Card className="p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-white">Your purchase</h2>
                <p className="mt-1 text-sm text-[#FF6A00] font-medium">{PRODUCT_NAME}</p>

                <ul className="mt-5 space-y-2.5">
                  {INCLUDED_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#B8B8C0]">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#FF6A00]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-[#2A2A2E] pt-5">
                  <p className="text-sm font-medium text-[#F5F5F7]">Price: Confirmed on SuperProfile</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* 5. Important access message */}
        <section className="border-y border-[#2A2A2E] bg-[#0D0D0F] py-14 sm:py-20">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6">
            <Reveal>
              <div className="flex items-start gap-3 rounded-2xl border border-[#FF6A00]/30 bg-[#171719] p-5 sm:p-6">
                <ShieldAlert
                  size={22}
                  className="mt-0.5 shrink-0 text-[#FF6A00]"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-base font-semibold text-white">Keep your payment receipt</h2>
                  <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">
                    Save your SuperProfile payment confirmation and receipt until you have
                    successfully received and downloaded your product.
                  </p>
                  <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">
                    If you entered an incorrect email address during payment, contact support and
                    include your SuperProfile order or payment reference.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Support section */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6 text-center">
            <Reveal>
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00]">
                <LifeBuoy size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold text-white">
                Need help accessing your purchase?
              </h2>
              <p className="mt-3 text-sm text-[#B8B8C0] leading-relaxed">
                Contact our support team and include the email address used during checkout and
                your SuperProfile order or payment reference.
              </p>

              <a
                href={SUPPORT_MAILTO}
                className={`${BUTTON_BASE} ${BUTTON_VARIANTS.secondary} mt-5`}
                aria-label={`Email support at ${SUPPORT_EMAIL}`}
              >
                <Mail size={16} aria-hidden="true" />
                Email Support
              </a>

              <p className="mt-3 text-sm text-[#85858E]">{SUPPORT_EMAIL}</p>
              <p className="mt-1 text-xs text-[#85858E]">
                Typical response time: within 1–2 business days.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 7. Action buttons */}
        <section className="pb-14 sm:pb-20">
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-3 px-4 sm:px-6 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className={`${BUTTON_BASE} ${BUTTON_VARIANTS.primary} w-full sm:w-auto`}
            >
              Return to PRODXSTORE
            </Link>
            <LinkButton href={SUPPORT_MAILTO} variant="secondary" fullWidthOnMobile>
              Email Support
            </LinkButton>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="border-t border-[#2A2A2E] bg-[#050505] py-10">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 px-4 sm:px-6 text-center">
          <Logo compact />

          <a
            href={CONTACT_LINK}
            className="text-sm font-medium text-[#FF6A00] hover:underline"
            aria-label={`Email PRODXSTORE support at ${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>

          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <LegalLink
                key={link.label}
                href={link.href}
                label={link.label}
                className="text-sm text-[#B8B8C0] hover:text-[#FF6A00] transition-colors"
              />
            ))}
          </nav>

          <p className="max-w-2xl text-xs text-[#85858E] leading-relaxed">
            Product names, model names and trademarks belong to their respective owners.
            PRODXSTORE is an independent digital-products brand and is not affiliated with,
            sponsored by or endorsed by OpenAI, Anthropic, Google, Adobe, Midjourney or the other
            AI platforms referenced on this website.
          </p>

          <p className="text-xs text-[#85858E]">© {year} PRODXSTORE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

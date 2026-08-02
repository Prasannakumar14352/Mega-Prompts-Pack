import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, TriangleAlert } from "lucide-react";
import Logo from "./Logo";
import LegalLink from "./ui/LegalLink";
import {
  CONTACT_LINK,
  PRIVACY_LINK,
  REFUND_LINK,
  SUPPORT_EMAIL,
  TERMS_LINK,
} from "../config";

const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: TERMS_LINK, label: "Terms and Conditions" },
  { href: PRIVACY_LINK, label: "Privacy Policy" },
  { href: REFUND_LINK, label: "Refund Policy" },
];

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Shared layout for /terms, /privacy and /refund-policy. Content is a
 * starter draft written for a one-person Indian digital-products business —
 * it is not legal advice and has not been reviewed by a lawyer. Review and
 * customize every page before relying on it for a live business.
 */
export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#070707]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="border-b border-[#2A2A2E] px-4 py-6">
        <div className="mx-auto flex max-w-[820px] items-center justify-between">
          <Link to="/" aria-label="PRODXSTORE home">
            <Logo compact />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B8B8C0] hover:text-[#FF6A00]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" className="py-12 sm:py-16">
        <div className="mx-auto max-w-[820px] px-4 sm:px-6">
          <div className="flex items-start gap-3 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-4 sm:p-5">
            <TriangleAlert size={20} className="mt-0.5 shrink-0 text-[#F59E0B]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[#F5F5F7]">
              <strong className="font-semibold">Starter content — not legal advice.</strong> This
              page is a draft template, not written or reviewed by a lawyer. Review and customize
              it (and get it checked by a qualified professional) before relying on it for a live
              business.
            </p>
          </div>

          <h1 className="mt-8 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[#85858E]">Last updated: {lastUpdated}</p>

          <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-[#B8B8C0] [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:leading-relaxed [&_a]:text-[#FF6A00] [&_a]:hover:underline">
            {children}
          </div>

          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6A00] hover:underline"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#2A2A2E] bg-[#050505] py-10">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 px-4 sm:px-6 text-center">
          <Logo compact />

          <a
            href={CONTACT_LINK}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF6A00] hover:underline"
            aria-label={`Email PRODXSTORE support at ${SUPPORT_EMAIL}`}
          >
            <Mail size={15} aria-hidden="true" />
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

          <p className="text-xs text-[#85858E]">© {year} PRODXSTORE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { AccentLine } from "./ui/Decor";
import { GUARANTEE_DAYS, SUPPORT_EMAIL } from "../config";

export default function Guarantee() {
  return (
    <section className="relative py-16 sm:py-20 bg-[linear-gradient(180deg,#070707_0%,#0D0D0F_100%)] border-y border-[#2A2A2E]">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 text-center">
        <Reveal>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00]">
            <ShieldCheck size={28} aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Try it with a {GUARANTEE_DAYS}-day money-back guarantee
          </h2>
          <AccentLine className="mx-auto mt-5 max-w-[160px]" />
          <p className="mt-5 text-base text-[#B8B8C0] leading-relaxed">
            Download the vault, explore the collections and make sure it fits your workflow. If
            the product is materially different from what is described on this page, contact
            support within seven days of purchase according to the published refund policy.
          </p>
          <p className="mt-3 text-sm font-medium text-white">
            Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#FF6A00] hover:text-[#FF7A1A] hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            with your order details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

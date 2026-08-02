import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import { PROMPT_COUNT, SUPPORT_EMAIL } from "../config";

const FAQS = [
  {
    question: "How do I pay?",
    answer:
      "Checkout supports UPI, Google Pay, PhonePe, credit cards and debit cards (Visa, Mastercard and more) through our secure payment partner. Choose whichever method you're most comfortable with at checkout.",
  },
  {
    question: "How is it delivered?",
    answer:
      "It's an instant digital download — there's nothing physical to ship. As soon as payment is confirmed, your access instructions are shown on the confirmation page and sent to the email address you used at checkout.",
  },
  {
    question: "Do I get lifetime access & updates?",
    answer:
      "Yes. This is a one-time payment with lifetime access to the version you receive, plus free monthly updates as new prompt collections are added.",
  },
  {
    question: "Which AI tools do the prompts work with?",
    answer:
      "The vault includes prompt collections for ChatGPT, Claude, Gemini, Midjourney, Stable Diffusion, DALL·E 3, Flux, Leonardo AI, Ideogram, Adobe Firefly, Sora, Runway and Kling. Many text prompts can also be adapted for other AI assistants. Features and prompt interpretation may vary between platforms and model versions.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. The launch price is a single payment of ₹399. There is no recurring subscription. Your purchase includes lifetime access to the version you receive and eligible free monthly product updates.",
  },
  {
    question: "Can I use the prompts for client work?",
    answer:
      "Yes. You may customize and use the prompts for your own projects and client work. You may not resell, redistribute, share or upload the original prompt files as a competing prompt bundle. You are also responsible for following the terms and commercial-use policies of the AI platform used to generate the final output.",
  },
  {
    question: `Do I really receive more than ${PROMPT_COUNT} prompts?`,
    answer:
      `Yes, ${PROMPT_COUNT} distinct prompts and variations across every collection and bonus pack. Honestly: many of these are tool-specific versions and niche/audience variations built from the same proven templates, not every single one hand-written from scratch. If you open a CSV you'll see that structure clearly — it's still a large, genuinely useful and well-organized library, and we'd rather describe it accurately than round up.`,
  },
  {
    question: "What is the refund policy?",
    answer:
      "The purchase is covered by a 7-day money-back guarantee according to the published refund policy. If the delivered product is materially different from the description on this page, email support@prodxstore.com within seven days and include your order information. Review the full Refund Policy before purchasing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <SectionHeading title="Frequently asked questions" />

        <Reveal className="mt-10 space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={item.question}
                className={`rounded-xl border bg-[#121214] transition-colors duration-300 ${
                  isOpen ? "border-[#FF6A00]/50 shadow-[0_0_24px_rgba(255,106,0,0.12)]" : "border-[#2A2A2E]"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 min-h-[44px] text-left focus-visible:outline-2 focus-visible:outline-[#FF6A00] focus-visible:outline-offset-2 rounded-xl"
                  >
                    <span className="text-base font-semibold text-white">{item.question}</span>
                    <Plus
                      size={20}
                      className={`shrink-0 text-[#FF6A00] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm text-[#B8B8C0] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-6 text-center text-sm text-[#85858E]">
          Still have a question? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-[#FF6A00] hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

import { Download, FolderOpen, ClipboardCopy, Lightbulb } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

const STEPS = [
  {
    icon: Download,
    title: "Buy and download",
    copy: "Complete the secure payment and access your downloadable files immediately.",
  },
  {
    icon: FolderOpen,
    title: "Open your collection",
    copy: "Use the CSV files directly, search them in a spreadsheet, or import them into a compatible workspace such as Notion.",
  },
  {
    icon: ClipboardCopy,
    title: "Copy, paste and create",
    copy: "Choose a prompt, add your details, paste it into your preferred AI tool and refine the result as needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading title="From download to better output in three steps" />

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent sm:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="relative">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] text-[#090909] text-lg font-bold">
                  {i + 1}
                </div>
                <Card hover={false} className="mt-4 w-full p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">
                    <step.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">{step.copy}</p>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#FF6A00]/30 bg-[#171719] p-5 sm:p-6">
          <Lightbulb size={20} className="mt-0.5 shrink-0 text-[#FF6A00]" aria-hidden="true" />
          <p className="text-sm text-[#F5F5F7]">
            For the landing-page bonus: paste one detailed prompt to generate a complete page
            structure, copy and code foundation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

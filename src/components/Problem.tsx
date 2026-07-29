import { Copy, RefreshCw, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

const PAIN_POINTS = [
  {
    icon: Copy,
    title: "Generic output",
    copy: "You ask for something useful, but the result sounds vague, repetitive or exactly like everyone else's.",
  },
  {
    icon: RefreshCw,
    title: "Hours lost rewriting",
    copy: "You keep adjusting the same prompt, adding context and starting again before getting something usable.",
  },
  {
    icon: TrendingUp,
    title: "Opportunities move faster",
    copy: "Other creators publish campaigns, visuals and videos quickly while you are still staring at an empty prompt box.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#0D0D0F] py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          title={
            <>
              Great AI starts with a <span className="text-[#FF6A00]">great prompt</span>
            </>
          }
          subtitle="Powerful AI tools still need clear direction. Weak prompts create generic output, endless rewrites and wasted time."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <Card className="group relative h-full overflow-hidden p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#FF6A00] to-[#D94F00] transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">
                  <point.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">{point.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

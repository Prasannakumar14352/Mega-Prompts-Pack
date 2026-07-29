import { Compass, Repeat, Vault } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

const PROOF_POINTS = [
  {
    icon: Compass,
    title: "Find prompts by task",
    copy: "Collections are divided by model and use case, so you can go directly to the work you need to complete.",
  },
  {
    icon: Repeat,
    title: "Use prompts repeatedly",
    copy: "Customize prompts for different products, clients, topics and campaigns instead of starting from zero.",
  },
  {
    icon: Vault,
    title: "Keep the vault",
    copy: "This is a one-time purchase with lifetime access and free monthly additions to the product.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading title="Designed around real creator workflows" />

        {/* Replace this section with verified customer testimonials only after receiving permission to publish them. Never use invented testimonials in advertisements. */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PROOF_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <Card className="h-full p-6 sm:p-8">
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

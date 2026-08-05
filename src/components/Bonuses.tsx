import { Star, LayoutTemplate, ImageIcon, Wand2, Clapperboard, Film } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { OrangeGlow } from "./ui/Decor";
import { BONUS_COUNT } from "../config";

const BONUSES = [
  {
    icon: ImageIcon,
    title: "Google Imagen & Gemini Image Pack",
    description:
      "241,920 image prompts created for a wide range of commercial, editorial and creative visual styles.",
    value: "Included free",
  },
  {
    icon: Wand2,
    title: "Higgsfield Soul Studio Image Pack",
    description:
      "241,920 prompts for cinematic portraits, branded visuals, fashion concepts and creator-focused imagery.",
    value: "Included free",
  },
  {
    icon: Clapperboard,
    title: "AI Video Pack — Volume 1",
    description:
      "120,960 prompts for scenes, camera movement, composition and cinematic direction across Sora, Runway and Kling.",
    value: "Included free",
  },
  {
    icon: Film,
    title: "AI Video Pack — Volume 2",
    description:
      "120,960 additional prompts for ads, storytelling, product videos, social clips and creative video concepts.",
    value: "Included free",
  },
];

export default function Bonuses() {
  return (
    <section id="bonuses" className="relative overflow-hidden py-16 sm:py-24 bg-[#0D0D0F]">
      <OrangeGlow className="left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 opacity-60" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          title={
            <>
              Plus 5 free bonuses — <span className="text-[#FF6A00]">{BONUS_COUNT}</span> more
              prompts
            </>
          }
          subtitle="Expand the vault with landing-page, image and video prompt collections included at no extra cost during the launch offer."
        />

        <Reveal className="mt-12">
          <Card featured className="shadow-[0_0_60px_rgba(255,106,0,0.18)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FF6A00]/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#FF6A00]">
                <Star size={12} fill="currentColor" aria-hidden="true" />
                Star Bonus
              </span>
              <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                Bonus 1
              </span>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] text-[#090909]">
                <LayoutTemplate size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Instant Landing Page Builder</h3>
                <p className="mt-2 text-sm sm:text-base text-[#B8B8C0] leading-relaxed">
                  22,080 prompts designed to generate complete landing-page structures, copy and
                  page sections from one detailed instruction.
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F7]">
                  Generates page structure, copy and code foundations that can be reviewed,
                  customized and published.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#FF6A00]">Included free</p>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BONUSES.map((bonus, i) => (
            <Reveal key={bonus.title} delay={i * 80}>
              <Card className="relative h-full p-6">
                <span className="absolute -top-2.5 left-6 rounded-full bg-[#FF6A00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#090909]">
                  Bonus
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">
                  <bonus.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{bonus.title}</h3>
                <p className="mt-2 text-sm text-[#B8B8C0] leading-relaxed">{bonus.description}</p>
                <p className="mt-3 text-sm font-semibold text-[#FF6A00]">{bonus.value}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

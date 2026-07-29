import {
  Megaphone,
  Mail,
  Share2,
  Briefcase,
  Code2,
  ShoppingCart,
  UserCheck,
  Video,
  GraduationCap,
  Image,
  Palette,
  Sparkles,
  Layers,
  PenTool,
  Wand2,
  Camera,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { PROMPT_COUNT } from "../config";

const CATEGORIES = [
  { icon: Megaphone, name: "Marketing & Ads", count: "44,160 prompts", tag: "Campaigns, hooks and ad angles" },
  { icon: Mail, name: "Copywriting & Email", count: "38,640 prompts", tag: "Sequences, subject lines and sales copy" },
  { icon: Share2, name: "Social Media", count: "38,640 prompts", tag: "Captions, calendars and content ideas" },
  { icon: Briefcase, name: "Business & Strategy", count: "38,640 prompts", tag: "Planning, positioning and offers" },
  { icon: Code2, name: "Coding & Development", count: "33,120 prompts", tag: "Snippets, debugging and documentation" },
  { icon: ShoppingCart, name: "E-commerce & Sales", count: "33,120 prompts", tag: "Listings, funnels and product pages" },
  { icon: UserCheck, name: "Freelance & Career", count: "33,120 prompts", tag: "Proposals, resumes and outreach" },
  { icon: Video, name: "YouTube & Video", count: "33,120 prompts", tag: "Scripts, titles and descriptions" },
  { icon: GraduationCap, name: "Education & Study", count: "27,600 prompts", tag: "Study guides and explanations" },
  { icon: Image, name: "Midjourney", count: "138,240 prompts", tag: "Cinematic and stylized visuals" },
  { icon: Palette, name: "Stable Diffusion", count: "138,240 prompts", tag: "Flexible open-model imagery" },
  { icon: Sparkles, name: "DALL·E 3", count: "138,240 prompts", tag: "Conceptual and illustrative art" },
  { icon: Layers, name: "Flux", count: "138,240 prompts", tag: "High-fidelity photoreal scenes" },
  { icon: PenTool, name: "Leonardo AI", count: "138,240 prompts", tag: "Character and concept art" },
  { icon: Wand2, name: "Ideogram", count: "138,240 prompts", tag: "Typography-driven visuals" },
  { icon: Camera, name: "Adobe Firefly", count: "138,240 prompts", tag: "Commercial-ready creative assets" },
];

const BENEFITS = [
  "Works with the world's leading AI tools",
  "Searchable CSV files that can be imported into compatible workspace tools",
  "Lifetime access with free monthly updates",
  "Personal and commercial use included, subject to the AI platform's own terms",
];

export default function WhatsInside() {
  return (
    <section id="inside" className="py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          title={
            <>
              <span className="text-[#FF6A00]">{PROMPT_COUNT}</span> prompts, organized and ready
            </>
          }
          subtitle="Browse by goal, open the relevant CSV and copy the prompt you need. Every collection is structured to make finding and using prompts simple."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 4) * 80}>
              <Card className="relative h-full overflow-hidden p-5">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-10 w-10 bg-gradient-to-bl from-[#FF6A00]/25 to-transparent"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <cat.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{cat.name}</h3>
                <p className="mt-1 text-xs font-medium text-[#FF6A00]">{cat.count}</p>
                <p className="mt-2 text-xs text-[#85858E] leading-relaxed">{cat.tag}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#FF6A00]" aria-hidden="true" />
              <span className="text-sm text-[#F5F5F7]">{benefit}</span>
            </div>
          ))}
        </Reveal>

        <p className="mt-6 text-center text-xs text-[#85858E]">
          Outputs and platform permissions remain subject to the terms of the AI service you use.
        </p>
      </div>
    </section>
  );
}

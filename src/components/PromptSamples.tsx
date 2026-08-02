import { Image, Megaphone, Share2, Code2, Video, Copy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

interface SamplePrompt {
  category: string;
  icon: typeof Image;
  prompt: string;
}

// EDIT: swap these for real sample prompts from the vault. Keep the mix
// (2 image, 2 marketing, 2 social, 2 coding, 2 video) or adjust as needed.
const SAMPLE_PROMPTS: SamplePrompt[] = [
  {
    category: "Image",
    icon: Image,
    prompt:
      "Editorial product photo of [product] on a marble surface, soft studio lighting, shallow depth of field, 85mm lens look.", // EDIT
  },
  {
    category: "Image",
    icon: Image,
    prompt:
      "Cinematic portrait of [subject], golden hour rim lighting, shot on 35mm film, warm color grade.", // EDIT
  },
  {
    category: "Marketing",
    icon: Megaphone,
    prompt:
      "Write 5 scroll-stopping ad hooks for [product] targeting [audience], each under 12 words, no clichés.", // EDIT
  },
  {
    category: "Marketing",
    icon: Megaphone,
    prompt:
      "Draft a 3-email abandoned-cart sequence for [store] with a friendly, non-pushy tone and one clear CTA per email.", // EDIT
  },
  {
    category: "Social",
    icon: Share2,
    prompt:
      "Write 7 Instagram caption options for [topic], mixing questions, short stories and one-liners, each under 200 characters.", // EDIT
  },
  {
    category: "Social",
    icon: Share2,
    prompt:
      "Create a 30-day content calendar outline for [niche] covering educational, promotional and behind-the-scenes posts.", // EDIT
  },
  {
    category: "Coding",
    icon: Code2,
    prompt:
      "Review this function for readability and edge cases, then suggest a cleaner version with comments explaining each change: [code]", // EDIT
  },
  {
    category: "Coding",
    icon: Code2,
    prompt:
      "Generate unit tests for [function/module] covering typical inputs, edge cases and error handling.", // EDIT
  },
  {
    category: "Video",
    icon: Video,
    prompt:
      "Write a 60-second video script outline for [topic] with a hook in the first 3 seconds and a clear call to action at the end.", // EDIT
  },
  {
    category: "Video",
    icon: Video,
    prompt:
      "Describe a cinematic B-roll sequence for [product] launch video: camera movement, pacing and mood for each shot.", // EDIT
  },
];

export default function PromptSamples() {
  return (
    <section className="py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="A quick look"
          title="Peek inside the vault"
          subtitle="A small sample of the prompt style and structure you'll find across every collection."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SAMPLE_PROMPTS.map((sample, i) => (
            <Reveal key={sample.prompt} delay={(i % 4) * 60}>
              <Card hover={false} className="flex h-full items-start gap-3 p-4 sm:p-5">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <sample.icon size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF6A00]">
                    {sample.category}
                  </p>
                  <p className="mt-1.5 text-sm text-[#F5F5F7] leading-relaxed">{sample.prompt}</p>
                </div>
                <Copy
                  size={16}
                  className="ml-auto mt-0.5 shrink-0 text-[#38383E]"
                  aria-hidden="true"
                />
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#85858E]">
          Samples shown for illustration. The full vault includes structured CSV files organized
          by category and AI model.
        </p>
      </div>
    </section>
  );
}

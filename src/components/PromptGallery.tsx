import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { PROMPT_COUNT } from "../config";

interface GalleryItem {
  image: string;
  alt: string;
  prompt: string;
  tag: string;
}

// EDIT: swap images/prompts/tags here to update the gallery.
const SAMPLE_GALLERY: GalleryItem[] = [
  {
    image: "/samples/sample-chai-seller.jpg",
    alt: "Photorealistic image of a chai seller at a railway platform at dawn",
    prompt:
      "a chai seller at a railway platform at dawn, photorealistic 8k, golden hour light, close-up 85mm, warm earthy palette",
    tag: "Photorealistic",
  },
  {
    image: "/samples/sample-rickshaw.jpg",
    alt: "Cinematic cyberpunk auto-rickshaw with neon glow",
    prompt:
      "a cyberpunk auto-rickshaw, cinematic film still, neon glow, close-up 85mm, pastel dreamy tones",
    tag: "Cinematic",
  },
  {
    image: "/samples/sample-perfume.jpg",
    alt: "Studio product photography of a perfume bottle",
    prompt:
      "product shot of a perfume bottle, studio product photography, soft lighting, shallow depth of field",
    tag: "Product",
  },
  {
    image: "/samples/sample-diwali.jpg",
    alt: "Cinematic diya-lit Diwali courtyard at night",
    prompt:
      "a diya-lit Diwali courtyard, cinematic film still, candlelight, muted vintage film colors",
    tag: "Festive / India",
  },
];

function GalleryCard({ item, delay }: { item: GalleryItem; delay: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can fail (permissions, insecure context) — fail silently,
      // the prompt text is still fully readable and selectable for manual copy.
    }
  };

  return (
    <Reveal delay={delay}>
      <Card hover={false} className="overflow-hidden p-0">
        <div className="group relative overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-t-2xl border-b border-[#2A2A2E] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full border border-[#FF6A00]/40 bg-[#090909]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#FF6A00] backdrop-blur">
            {item.tag}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="rounded-xl border border-[#2A2A2E] bg-[#070707] p-3.5">
            <p className="font-mono text-xs leading-relaxed text-[#B8B8C0]">{item.prompt}</p>
            <button
              onClick={handleCopy}
              aria-label={copied ? "Prompt copied to clipboard" : "Copy prompt to clipboard"}
              className="mt-3 inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#2A2A2E] bg-[#121214] px-2.5 text-[11px] font-semibold text-[#F5F5F7] transition-colors hover:border-[#FF6A00]/50 hover:text-[#FF6A00] focus-visible:outline-2 focus-visible:outline-[#FF6A00] focus-visible:outline-offset-2"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#22C55E]" aria-hidden="true" />
                  <span className="text-[#22C55E]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} aria-hidden="true" />
                  Copy prompt
                </>
              )}
            </button>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export default function PromptGallery() {
  return (
    <section className="py-16 sm:py-24 bg-[#0D0D0F]">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Real results"
          title="See what these prompts create"
          subtitle={`Copy any prompt, paste it into your favourite AI tool, get results like these — the vault has ${PROMPT_COUNT} ready to use.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAMPLE_GALLERY.map((item, i) => (
            <GalleryCard key={item.image} item={item} delay={(i % 2) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

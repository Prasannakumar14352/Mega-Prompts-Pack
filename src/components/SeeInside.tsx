import { ImageIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import { OrangeGlow } from "./ui/Decor";

interface ProofSlot {
  label: string;
  caption: string;
  dimensions: string;
  // Set once the real screenshot for this slot has been added to /public/proof/.
  image?: { src: string; alt: string };
}

// EDIT: once you have a real screenshot, add an `image: { src, alt }` entry
// (see slot 1 below) pointing at a file you've added to the /public/proof/
// folder. Slots without an `image` still render the dashed placeholder.
const SCREENSHOT_SLOTS: ProofSlot[] = [
  {
    label: "Screenshot 1 — ChatGPT.csv opened in a spreadsheet",
    caption: "Organized & searchable",
    dimensions: "Recommended 1600×1000px (4:5 or 16:10), JPG/PNG",
    image: { src: "/proof/screenshot-1.jpg", alt: "ChatGPT prompts CSV opened in a spreadsheet" },
  },
  {
    label: "Screenshot 2 — Midjourney.csv prompt rows",
    caption: "Organized & searchable",
    dimensions: "Recommended 1600×1000px (4:5 or 16:10), JPG/PNG",
    image: { src: "/proof/screenshot-2.jpg", alt: "Midjourney prompts CSV opened in a spreadsheet" },
  },
  {
    label: "Screenshot 3 — Searching/filtering the CSV by keyword",
    caption: "Copy-paste ready",
    dimensions: "Recommended 1600×1000px (4:5 or 16:10), JPG/PNG",
    image: { src: "/proof/screenshot-3.jpg", alt: "Searching/filtering the CSV by keyword" },
  },
  {
    label: "Screenshot 4 — Full folder view of all CSV collections",
    caption: "Instant download after payment",
    dimensions: "Recommended 1600×1000px (4:5 or 16:10), JPG/PNG",
    image: { src: "/proof/screenshot-4.jpg", alt: "Full folder view of all CSV collections" },
  },
];

export default function SeeInside() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#0D0D0F]">
      <OrangeGlow className="left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 opacity-50" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Proof, not promises"
          title="See exactly what's inside"
          subtitle="Real screenshots of the actual CSV files you download — organized, searchable and ready to paste into any AI tool."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SCREENSHOT_SLOTS.map((slot, i) => (
            <Reveal key={slot.label} delay={(i % 4) * 80}>
              <div className="relative aspect-[8/5] w-full overflow-hidden rounded-2xl border-2 border-dashed border-[#FF6A00]/40 bg-[#121214]">
                {slot.image ? (
                  <img
                    src={slot.image.src}
                    alt={slot.image.alt}
                    loading="lazy"
                    className="h-full w-full object-contain object-center"
                  />
                ) : (
                  // SCREENSHOT PLACEHOLDER — {slot.label}
                  // Once you have the file, add an `image: { src, alt }` entry
                  // for this slot in SCREENSHOT_SLOTS above (see slot 1).
                  // Recommended size: {slot.dimensions}
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                    <ImageIcon size={28} className="text-[#FF6A00]" aria-hidden="true" />
                    <p className="text-sm font-semibold text-white">{slot.label}</p>
                    <p className="text-xs text-[#85858E]">{slot.dimensions}</p>
                  </div>
                )}
              </div>
              <p className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-[#FF6A00]">
                {slot.caption}
              </p>
            </Reveal>
          ))}
        </div>

        {/*
          DEMO GIF/VIDEO PLACEHOLDER — screen recording of searching the CSV
          and copy-pasting a prompt into ChatGPT.
          Replace this dashed box with:
          <video src="/proof/demo.mp4" autoPlay loop muted playsInline className="w-full rounded-2xl object-cover" />
          or <img src="/proof/demo.gif" alt="Demo: searching and copying a prompt into ChatGPT" className="w-full rounded-2xl object-cover" />
          Recommended size: 1280×720px (16:9), GIF under ~8MB or short MP4
        */}
        <Reveal className="mt-6" delay={160}>
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#FF6A00]/40 bg-[#121214] p-6 text-center">
            {/* <PlayCircle size={32} className="text-[#FF6A00]" aria-hidden="true" /> */}
            <video src="/proof/demo.mp4" autoPlay loop muted playsInline className="w-full rounded-2xl object-cover" />
            <p className="text-sm font-semibold text-white">
              Demo GIF/video — searching the CSV and pasting a prompt into ChatGPT
            </p>
            <p className="text-xs text-[#85858E]">
              Recommended 1280×720px (16:9), GIF under ~8MB or short MP4
            </p>
          </div>
          <p className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-[#FF6A00]">
            Copy-paste ready
          </p>
        </Reveal>
      </div>
    </section>
  );
}

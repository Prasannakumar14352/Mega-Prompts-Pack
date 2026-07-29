const MODELS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Midjourney",
  "Stable Diffusion",
  "DALL·E 3",
  "Flux",
  "Leonardo",
  "Ideogram",
  "Adobe Firefly",
  "Sora",
  "Runway",
  "Kling",
];

export default function ModelMarquee() {
  const items = [...MODELS, ...MODELS];

  return (
    <section
      className="border-y border-[#2A2A2E] bg-[#0D0D0F] py-6 overflow-hidden"
      aria-label="Compatible AI tools"
    >
      <div className="group flex w-max gap-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {items.map((model, i) => (
            <span
              key={`${model}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#121214] px-5 py-2 text-sm font-medium text-[#F5F5F7] whitespace-nowrap transition-colors hover:border-[#FF6A00]/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" aria-hidden="true" />
              {model}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-3 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((model, i) => (
            <span
              key={`dup-${model}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#121214] px-5 py-2 text-sm font-medium text-[#F5F5F7] whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" aria-hidden="true" />
              {model}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

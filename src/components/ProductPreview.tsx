import { useMemo, useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";

interface PreviewRow {
  category: string;
  model: string;
  title: string;
  preview: string;
  useCase: string;
  tags: string;
}

const DEMO_ROWS: PreviewRow[] = [
  {
    category: "Marketing & Ads",
    model: "ChatGPT",
    title: "Product launch ad angle",
    preview: "Write 5 ad hooks for [product] targeting [audience] that emphasize...",
    useCase: "Paid social ad copy",
    tags: "ads, hooks, launch",
  },
  {
    category: "Midjourney",
    model: "Midjourney",
    title: "Cinematic product shot",
    preview: "Editorial product photography of [item], moody studio lighting...",
    useCase: "E-commerce visuals",
    tags: "product, cinematic",
  },
  {
    category: "Copywriting & Email",
    model: "Claude",
    title: "Cart abandonment sequence",
    preview: "Draft a 3-email cart abandonment sequence for [store] with tone...",
    useCase: "Email marketing",
    tags: "email, ecommerce",
  },
  {
    category: "Coding & Development",
    model: "ChatGPT",
    title: "Refactor explainer",
    preview: "Review this function and suggest a cleaner structure while...",
    useCase: "Code review",
    tags: "code, refactor",
  },
  {
    category: "YouTube & Video",
    model: "Gemini",
    title: "Video script outline",
    preview: "Create a 60-second script outline for a video about [topic]...",
    useCase: "Short-form video",
    tags: "youtube, script",
  },
  {
    category: "Flux",
    model: "Flux",
    title: "Brand lifestyle scene",
    preview: "Photorealistic lifestyle scene featuring [product] in a...",
    useCase: "Social media imagery",
    tags: "lifestyle, brand",
  },
];

export default function ProductPreview() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEMO_ROWS;
    return DEMO_ROWS.filter((row) =>
      [row.category, row.model, row.title, row.preview, row.useCase, row.tags]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section className="py-16 sm:py-24 bg-[#0D0D0F]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading title="Organized files—not a messy document" />

        <Reveal className="mt-10 rounded-2xl border border-[#38383E] bg-[#121214] shadow-[0_20px_60px_rgba(255,106,0,0.06)] overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-[#2A2A2E] bg-[#171719] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38383E]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#38383E]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#38383E]" aria-hidden="true" />
            <span className="ml-3 text-[11px] font-semibold uppercase tracking-widest text-[#85858E]">
              Interface Preview
            </span>
          </div>

          <div className="border-b border-[#2A2A2E] p-4 sm:p-5">
            <label htmlFor="preview-search" className="sr-only">
              Search demo prompt collection
            </label>
            <div className="relative max-w-md">
              <Search
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FF6A00]"
                aria-hidden="true"
              />
              <input
                id="preview-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search demo prompts (e.g. email, product, video)"
                className="w-full rounded-xl border border-[#2A2A2E] bg-[#070707] py-2.5 pl-10 pr-4 text-sm text-[#F5F5F7] placeholder:text-[#85858E] focus:border-[#FF6A00]"
              />
            </div>
            <p className="mt-3 text-xs text-[#85858E]">
              Your purchase includes downloadable prompt files, not access to a separate software
              platform.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#2A2A2E] bg-[#171719] text-xs uppercase tracking-wide text-[#85858E]">
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Prompt title</th>
                  <th className="px-4 py-3 font-semibold">Preview</th>
                  <th className="px-4 py-3 font-semibold">Use case</th>
                  <th className="px-4 py-3 font-semibold">Tags</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => (
                  <tr
                    key={row.title}
                    className={`border-b border-[#2A2A2E] last:border-0 ${i % 2 === 1 ? "bg-[#171719]/40" : ""}`}
                  >
                    <td className="px-4 py-3 text-white">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#B8B8C0]">{row.model}</td>
                    <td className="px-4 py-3 font-medium text-white">{row.title}</td>
                    <td className="px-4 py-3 text-[#85858E] max-w-[260px] truncate">{row.preview}</td>
                    <td className="px-4 py-3 text-[#B8B8C0]">{row.useCase}</td>
                    <td className="px-4 py-3 text-[#85858E]">{row.tags}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[#85858E]">
                      No demo prompts match that search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["Easy to search", "Easy to copy", "Easy to organize"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-[#2A2A2E] bg-[#121214] px-4 py-3"
            >
              <CheckCircle2 size={18} className="shrink-0 text-[#FF6A00]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#F5F5F7]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { RATING } from "../config";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

// EDIT: replace with real, verified customer quotes once available. Keep the
// same {name, role, quote} shape. Do not publish invented testimonials in
// paid advertisements.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya",
    role: "Content creator",
    quote:
      "Saved me hours every week — I just pick a prompt from the Instagram set and tweak it for my niche.", // EDIT
  },
  {
    name: "Rohit",
    role: "Freelancer",
    quote:
      "Client asked for ad copy on short notice. Found a ready template in the Marketing folder and delivered same day.", // EDIT
  },
  {
    name: "Priya",
    role: "Student",
    quote:
      "The coding prompts helped me actually understand my assignments instead of just copying answers.", // EDIT
  },
  {
    name: "Arjun",
    role: "Small business owner",
    quote:
      "Used the product-listing prompts for my Etsy shop. Descriptions sound way more professional now.", // EDIT
  },
  {
    name: "Sneha",
    role: "Creator",
    quote:
      "The Midjourney prompt packs alone were worth it — my thumbnails finally look consistent.", // EDIT
  },
  {
    name: "Vikram",
    role: "Freelancer",
    quote:
      "Good organization by CSV made it easy to search instead of scrolling through one giant file.", // EDIT
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#0D0D0F]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeading
          eyebrow={`Rated ${RATING} by creators`}
          title="What buyers are saying"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <Card className="h-full p-6">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} className="fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>
                <span className="sr-only">5 out of 5 stars</span>
                <p className="mt-4 text-sm text-[#F5F5F7] leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-white">
                  {t.name}
                  <span className="ml-2 text-xs font-normal text-[#85858E]">{t.role}</span>
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

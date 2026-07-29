import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { scrollToId } from "../utils/scroll";

const NAV_LINKS = [
  { label: "What's Inside", id: "inside" },
  { label: "Bonuses", id: "bonuses" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(7,7,7,0.92)] backdrop-blur border-b border-[#2A2A2E] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 py-3"
        aria-label="Primary"
      >
        <a href="#top" className="shrink-0" aria-label="PRODXSTORE home">
          <span className="block sm:hidden">
            <Logo compact />
          </span>
          <span className="hidden sm:block">
            <Logo />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm font-medium text-white hover:text-[#FF6A00] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button
              onClick={() => handleNav("pricing")}
              className="!px-5 !py-2.5 !text-sm"
              aria-label="Scroll to pricing to get access"
            >
              Get Access
            </Button>
          </span>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 min-h-[44px] min-w-[44px] text-white hover:bg-white/5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#2A2A2E] bg-[#070707] px-4 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-left text-base font-medium text-white py-3 min-h-[44px] hover:text-[#FF6A00]"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => handleNav("pricing")} className="mt-2 w-full">
            Get Access
          </Button>
        </div>
      )}
    </header>
  );
}

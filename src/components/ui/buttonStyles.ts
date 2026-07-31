export type ButtonVariant = "primary" | "secondary";

export const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 min-h-[44px] text-sm sm:text-base font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#FF6A00] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:hover:shadow-none";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "text-[#090909] bg-[linear-gradient(135deg,#FF6A00_0%,#FF7A1A_50%,#D94F00_100%)] shadow-[0_8px_30px_rgba(255,106,0,0.28)] hover:shadow-[0_10px_36px_rgba(255,106,0,0.4)] hover:-translate-y-0.5",
  secondary:
    "text-white bg-transparent border border-[#38383E] hover:border-[#FF6A00]/60 hover:-translate-y-0.5",
};

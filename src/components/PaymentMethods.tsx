import { Lock } from "lucide-react";

interface PaymentMethodsProps {
  className?: string;
}

const METHODS: { label: string; className: string }[] = [
  { label: "UPI", className: "bg-[#5F259F]/15 text-[#B794E8] border-[#5F259F]/40" },
  { label: "GPay", className: "bg-white/10 text-[#F5F5F7] border-[#38383E]" },
  { label: "PhonePe", className: "bg-[#5F259F]/15 text-[#B794E8] border-[#5F259F]/40" },
  { label: "Visa", className: "bg-[#1A1F71]/25 text-[#8C93E8] border-[#1A1F71]/50" },
  { label: "Mastercard", className: "bg-[#EB001B]/10 text-[#F2A0A8] border-[#EB001B]/40" },
];

/** Text-pill payment badges plus a secure-checkout lock badge — no external image assets. */
export default function PaymentMethods({ className = "" }: PaymentMethodsProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {METHODS.map((method) => (
        <span
          key={method.label}
          className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold ${method.className}`}
        >
          {method.label}
        </span>
      ))}
      <span className="inline-flex items-center gap-1 rounded-md border border-[#22C55E]/40 bg-[#22C55E]/10 px-2.5 py-1 text-[11px] font-semibold text-[#4ADE80]">
        <Lock size={11} aria-hidden="true" />
        100% Secure Checkout
      </span>
    </div>
  );
}

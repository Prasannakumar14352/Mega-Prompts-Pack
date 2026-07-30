import { useOfferCountdown } from "../hooks/useOfferCountdown";
import OfferCountdown from "./OfferCountdown";
import { LAUNCH_PRICE, PREVIOUS_PRICE } from "../config";

export default function AnnouncementBar() {
  const { isExpired } = useOfferCountdown();

  return (
    <div className="bg-[#FF6A00] text-[#090909] text-xs sm:text-sm">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-1.5 px-4 py-2.5 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-1">
        {isExpired ? (
          <>
            <span className="inline-flex items-center rounded-full bg-[#090909] px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">
              Launch offer ended
            </span>
            <span className="font-medium">
              The Mega AI Prompt Vault is still available for {PREVIOUS_PRICE}
            </span>
          </>
        ) : (
          <>
            <span className="inline-flex items-center rounded-full bg-[#090909] px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">
              2-Hour Launch Offer
            </span>
            <span className="font-medium">
              Get lifetime access for{" "}
              <span className="font-bold">{LAUNCH_PRICE}</span>{" "}
              <span className="text-[#090909]/60 line-through">{PREVIOUS_PRICE}</span>
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 font-medium">
              <span>Ends in</span>
              <OfferCountdown variant="inline" />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

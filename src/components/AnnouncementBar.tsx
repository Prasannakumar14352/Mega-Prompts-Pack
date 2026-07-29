import { useCountdown } from "../hooks/useCountdown";
import LaunchCountdown from "./LaunchCountdown";
import { LAUNCH_OFFER_END, LAUNCH_PRICE, PREVIOUS_PRICE } from "../config";

export default function AnnouncementBar() {
  const { expired, invalid } = useCountdown(LAUNCH_OFFER_END);
  const showCountdown = !expired && !invalid;

  return (
    <div className="bg-[#FF6A00] text-[#090909] text-xs sm:text-sm">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-1.5 px-4 py-2.5 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-1">
        <span className="inline-flex items-center rounded-full bg-[#090909] px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">
          Limited launch price
        </span>

        {showCountdown ? (
          <span className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 font-medium">
            <span>Launch offer ends in</span>
            <LaunchCountdown variant="inline" className="text-[#090909]" />
          </span>
        ) : (
          <span className="font-medium">Launch offer has ended</span>
        )}

        <span className="font-medium">
          <span className="font-bold">{LAUNCH_PRICE}</span>{" "}
          <span className="text-[#090909]/60 line-through">{PREVIOUS_PRICE}</span>
        </span>
      </div>
    </div>
  );
}

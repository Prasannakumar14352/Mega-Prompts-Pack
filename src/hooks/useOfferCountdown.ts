import { useEffect, useState } from "react";
import { OFFER_DURATION_MS } from "../config";

export interface OfferCountdownState {
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  isExpired: boolean;
  formattedTime: string;
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

// Computed once, the moment this module is first evaluated — i.e. once per
// full page load or refresh. Every component that calls useOfferCountdown()
// reads this same in-memory value, so all countdown displays on the page
// stay in sync. This is intentionally NOT written to localStorage,
// sessionStorage, a cookie or any other storage: reloading the page
// re-evaluates this module from scratch and starts a brand new 2-hour
// promotional session.
const sessionExpiry = Date.now() + OFFER_DURATION_MS;

function computeState(expiryMs: number): OfferCountdownState {
  const totalMilliseconds = Math.max(0, expiryMs - Date.now());
  const hours = Math.floor(totalMilliseconds / 3_600_000);
  const minutes = Math.floor((totalMilliseconds % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMilliseconds % 60_000) / 1_000);

  return {
    hours,
    minutes,
    seconds,
    totalMilliseconds,
    isExpired: totalMilliseconds <= 0,
    formattedTime: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  };
}

/**
 * A 2-hour promotional-session countdown that lives only in this page load's
 * memory — nothing is persisted anywhere. Refreshing the page, reopening it,
 * or opening it in a new tab all start a fresh session.
 */
export function useOfferCountdown(): OfferCountdownState {
  const [state, setState] = useState<OfferCountdownState>(() => computeState(sessionExpiry));

  useEffect(() => {
    // Recompute immediately in case time passed between the initial render and mount.
    setState(computeState(sessionExpiry));

    const interval = window.setInterval(() => {
      setState(computeState(sessionExpiry));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return state;
}

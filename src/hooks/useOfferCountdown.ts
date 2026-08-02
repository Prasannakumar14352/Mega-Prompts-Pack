import { useEffect, useState } from "react";
import { OFFER_DURATION_HOURS } from "../config";

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

const OFFER_DURATION_MS = OFFER_DURATION_HOURS * 60 * 60 * 1000;

// Computed once, the moment this module is first evaluated — i.e. once per
// full page load or refresh. Every component that calls useOfferCountdown()
// reads this same in-memory value, so all countdown displays on the page
// stay in sync. This is intentionally NOT written to localStorage,
// sessionStorage, a cookie or any other storage: reloading the page
// re-evaluates this module from scratch and starts a brand new countdown.
const sessionExpiry = Date.now() + OFFER_DURATION_MS;

function computeState(): OfferCountdownState {
  const totalMilliseconds = Math.max(0, sessionExpiry - Date.now());
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
 * A countdown that resets to OFFER_DURATION_HOURS on every page load or
 * refresh — nothing is persisted anywhere. At zero it freezes at 00:00:00
 * (never negative, never loops). The price and checkout button must never be
 * gated on `isExpired`, only the countdown display changes.
 */
export function useOfferCountdown(): OfferCountdownState {
  const [state, setState] = useState<OfferCountdownState>(() => computeState());

  useEffect(() => {
    setState(computeState());

    const interval = window.setInterval(() => {
      setState(computeState());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return state;
}

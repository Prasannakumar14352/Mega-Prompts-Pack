import { useEffect, useState } from "react";
import { OFFER_DURATION_MINUTES, OFFER_STORAGE_KEY } from "../config";

export interface OfferCountdownState {
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  isExpired: boolean;
  formattedTime: string;
}

const DURATION_MS = OFFER_DURATION_MINUTES * 60 * 1000;

/**
 * Reads this visitor's stored offer-expiry timestamp, or creates one (now + 20
 * minutes) on their first visit. Safe to call during SSR/before `window`
 * exists — falls back to an in-memory expiry that isn't persisted.
 */
function readOrCreateExpiry(): number {
  if (typeof window === "undefined") {
    return Date.now() + DURATION_MS;
  }

  try {
    const stored = window.localStorage.getItem(OFFER_STORAGE_KEY);
    const parsed = stored === null ? NaN : Number(stored);

    if (Number.isFinite(parsed)) {
      // A stored timestamp exists — keep using it whether the countdown is
      // still running or has already expired. The offer must not silently
      // restart on refresh just because time has passed.
      return parsed;
    }
  } catch {
    // localStorage unavailable (private browsing, blocked storage, etc.) —
    // fall through and use an in-memory expiry for this render only.
    return Date.now() + DURATION_MS;
  }

  // No stored timestamp at all — this is a new visitor/browser, so start a
  // fresh 20-minute offer.
  const fresh = Date.now() + DURATION_MS;
  try {
    window.localStorage.setItem(OFFER_STORAGE_KEY, String(fresh));
  } catch {
    // Ignore write failures — the timer still works for this page view.
  }
  return fresh;
}

function computeState(expiryMs: number): OfferCountdownState {
  const totalMilliseconds = Math.max(0, expiryMs - Date.now());
  const minutes = Math.floor(totalMilliseconds / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);

  return {
    minutes,
    seconds,
    totalMilliseconds,
    isExpired: totalMilliseconds <= 0,
    formattedTime: `${minutes}:${seconds.toString().padStart(2, "0")}`,
  };
}

/**
 * A 20-minute launch-offer countdown scoped to this visitor's browser. The
 * expiry is created on first visit and persisted in localStorage, so
 * refreshing the page or reopening the tab continues the same countdown
 * instead of resetting it. Every component calling this hook reads the same
 * stored expiry, so all timers on the page stay in sync.
 */
export function useOfferCountdown(): OfferCountdownState {
  const [expiryMs] = useState<number>(readOrCreateExpiry);
  const [state, setState] = useState<OfferCountdownState>(() => computeState(expiryMs));

  useEffect(() => {
    // Recompute immediately in case time passed between the initial render and mount.
    setState(computeState(expiryMs));

    const interval = window.setInterval(() => {
      setState(computeState(expiryMs));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [expiryMs]);

  return state;
}

/**
 * Development-only helper: clears this visitor's stored offer expiry and
 * reloads the page so a fresh 20-minute countdown starts. Developers can also
 * clear it manually via devtools: localStorage.removeItem("prodxstore_offer_expiry").
 * Never wire this to a visible button or expose it to real visitors.
 */
export function resetOfferTimerForTesting(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(OFFER_STORAGE_KEY);
    window.location.reload();
  }
}

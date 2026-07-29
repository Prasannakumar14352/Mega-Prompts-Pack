import { useEffect, useState } from "react";

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
  invalid: boolean;
}

function computeState(deadlineMs: number): CountdownState {
  if (Number.isNaN(deadlineMs)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false, invalid: true };
  }

  const diffMs = Math.max(0, deadlineMs - Date.now());
  const expired = diffMs <= 0;

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, expired, invalid: false };
}

/** Real-time countdown to a fixed ISO deadline. Same deadline for every visitor; never persisted. */
export function useCountdown(deadlineIso: string): CountdownState {
  const deadlineMs = new Date(deadlineIso).getTime();
  const [state, setState] = useState<CountdownState>(() => computeState(deadlineMs));

  useEffect(() => {
    if (Number.isNaN(deadlineMs)) {
      setState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false, invalid: true });
      return;
    }

    setState(computeState(deadlineMs));

    const interval = window.setInterval(() => {
      setState(computeState(deadlineMs));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [deadlineMs]);

  return state;
}

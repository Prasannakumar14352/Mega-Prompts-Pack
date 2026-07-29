import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { resetOfferTimerForTesting } from './hooks/useOfferCountdown'

// Dev-only: lets developers run `resetOfferTimer()` in the browser console to
// clear this visitor's stored offer expiry and reload with a fresh 20-minute
// timer. Never exposed in production and never wired to a visible button.
if (import.meta.env.DEV) {
  (window as typeof window & { resetOfferTimer?: () => void }).resetOfferTimer =
    resetOfferTimerForTesting;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

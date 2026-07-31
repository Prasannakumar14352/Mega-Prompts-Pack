const MAX_REFERENCE_LENGTH = 64;
// Only allow characters checkout-provider reference/order IDs actually use, so
// nothing resembling markup or script content can ever reach the DOM.
const SAFE_CHARACTERS = /[^a-zA-Z0-9_-]/g;

// Query parameters can be modified by visitors and must not be used as proof of payment.
/**
 * Reads an optional, display-only order/payment reference from the current
 * URL's query string. Returns null when absent or when nothing safe remains
 * after sanitizing. Never treat a non-null result as confirmation that
 * payment succeeded — it is untrusted client input.
 */
export function getSanitizedPaymentReference(): string | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const raw = params.get("payment_id") || params.get("order_id") || params.get("reference");

  if (!raw) return null;

  const sanitized = raw.replace(SAFE_CHARACTERS, "").slice(0, MAX_REFERENCE_LENGTH);
  return sanitized.length > 0 ? sanitized : null;
}

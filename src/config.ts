// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// This SuperProfile product must be configured with a fixed one-time price of ₹399.
export const SUPERPROFILE_PRODUCT_URL: string =
  "https://superprofile.bio/vp/the-mega-ai-prompt-vault-—-launch-offer";

// Numeric prices (₹, no formatting) — the single source of truth for the
// display strings below.
export const LAUNCH_PRICE = 399;
export const REGULAR_PRICE = 4499;

export const PRODUCT_PRICE = `₹${LAUNCH_PRICE}`;
// The anchor/original price shown struck through next to the launch price.
export const COMPARE_AT_PRICE = `₹${REGULAR_PRICE.toLocaleString("en-IN")}`;
export const SUPPORT_EMAIL = "Prodxstoresupport@gmail.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";

/** Formats a plain number as an Indian Rupee string, e.g. 2494 -> "₹2,494". */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// ------------------------------------------------------------
// Prompt count — single source of truth
// ------------------------------------------------------------
// The vault contains distinct prompts and template variations (many entries
// are tool-specific or audience/niche variants built from proven templates,
// not every one hand-written from scratch) — "distinct" stays accurate even
// if a buyer opens a CSV and sees repeated structures.
export const PROMPT_COUNT = "2,889,564+";
export const PROMPT_COUNT_SHORT = "2.8M+";
export const PROMPT_COUNT_LABEL = `${PROMPT_COUNT_SHORT} distinct prompts & variations`;
// Combined total across all five bonus collections (22,080 + 241,920 + 241,920 + 120,960 + 120,960).
export const BONUS_COUNT = "747,840";

export const GUARANTEE_DAYS = 7;

// Set this to true only once the SuperProfile product above has been confirmed
// to email product-access/download instructions to buyers after checkout.
export const SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED = true;

// ------------------------------------------------------------
// Offer countdown
// ------------------------------------------------------------
// A fresh countdown that RESETS on every page load/refresh — it is never
// persisted to localStorage or anywhere else. Each visit starts a brand new
// countdown from this duration. At zero, it freezes at 00:00:00 (no loop, no
// negatives) but the price stays ₹399 and checkout stays fully enabled —
// never gate the buy button on this timer.
export const OFFER_DURATION_HOURS = 2;

// ------------------------------------------------------------
// India trust signals — update with real numbers as they become available
// ------------------------------------------------------------
export const RATING = "4.8/5";
export const BUYER_COUNT = "1,200+ creators";
// Replace with the real WhatsApp support number (with country code, no + or spaces), e.g. "919876543210".
export const WHATSAPP_NUMBER = "+919440157573";

// These point to the in-app legal pages (src/pages/Terms.tsx etc). Their
// content is a starter draft, not legal advice — review before relying on it.
export const TERMS_LINK = "/terms";
export const PRIVACY_LINK = "/privacy";
export const REFUND_LINK = "/refund-policy";
export const CONTACT_LINK = "mailto:prodxstoresupport@gmail.com";

// Set to true once the legal pages/content have been reviewed and are ready
// to link from the main footer. Flip this back on with one line — the
// footer's Legal column markup stays intact, it's just conditionally shown.
export const SHOW_LEGAL = false;

export const BRAND_NAME = "PRODXSTORE";

/**
 * Rejects placeholders and anything that isn't a published SuperProfile
 * product checkout URL. If SuperProfile provides another verified checkout
 * domain, update the allowed-hostname check below after confirming the
 * exact published URL — do not accept arbitrary external URLs silently.
 */
export function isValidSuperProfileUrl(url: string): boolean {
  const value = url.trim();

  if (!value || value === "#" || value.includes("PASTE_") || value.includes("YOUR_")) {
    return false;
  }

  try {
    const parsed = new URL(value);

    return (
      parsed.protocol === "https:" &&
      (parsed.hostname === "superprofile.bio" || parsed.hostname.endsWith(".superprofile.bio"))
    );
  } catch {
    return false;
  }
}

// ============================================================
// CONFIG — single object for all the numbers you'll want to tweak later.
// (Individual named exports above are also available and are what the
// components actually import; this object just mirrors them in one place
// using the names requested for quick reference/editing.)
// ============================================================
export const CONFIG = {
  PRICE: PRODUCT_PRICE,
  ANCHOR_PRICE: COMPARE_AT_PRICE,
  PROMPT_COUNT,
  BONUS_COUNT,
  WHATSAPP_NUMBER,
  OFFER_DURATION_HOURS,
  BUYER_COUNT,
  RATING,
};

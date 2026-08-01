// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// This SuperProfile product must be configured with a fixed one-time price of ₹399.
export const SUPERPROFILE_PRODUCT_URL: string =
  "https://superprofile.bio/vp/the-mega-ai-prompt-vault-—-launch-offer";

export const PRODUCT_PRICE = "₹399";
export const COMPARE_AT_PRICE = "₹1,999";
export const TOTAL_VALUE = "₹4,499";
export const SUPPORT_EMAIL = "Prodxstoresupport@gmail.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";
export const PROMPT_COUNT = "1,287,840+";
export const GUARANTEE_DAYS = 7;

// Set this to true only once the SuperProfile product above has been confirmed
// to email product-access/download instructions to buyers after checkout.
export const SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED = true;

// ------------------------------------------------------------
// Promotional session timer
// ------------------------------------------------------------
// This countdown exists only in page memory for the current page load. It is
// never written to localStorage, sessionStorage, a cookie or a database, so
// refreshing the page, reopening it, or opening it in a new tab always starts
// a fresh 2-hour promotional session. The price never changes when a session
// ends — it stays ₹399.
export const OFFER_DURATION_MS = 2 * 60 * 60 * 1000;

// Replace # with published legal-policy URLs before running paid advertisements.
export const TERMS_LINK = "#";
export const PRIVACY_LINK = "#";
export const REFUND_LINK = "#";
export const CONTACT_LINK = "mailto:prodxstoresupport@gmail.com";

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

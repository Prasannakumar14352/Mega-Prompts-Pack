// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// Each SuperProfile product URL must use the same price displayed on this landing page.
export const LAUNCH_SUPERPROFILE_URL: string = "https://superprofile.bio/vp/the-mega-ai-prompt-vault-—-launch-offer";
export const REGULAR_SUPERPROFILE_URL: string = "https://superprofile.bio/vp/the-mega-ai-prompt-vault-—-regular-access";

export const LAUNCH_PRICE = "₹399";
export const PREVIOUS_PRICE = "₹1,999";
// Regular (post-launch) price — same value as PREVIOUS_PRICE, kept as one source of truth.
export const REGULAR_PRICE = PREVIOUS_PRICE;
export const TOTAL_VALUE = "₹4,499";
export const SUPPORT_EMAIL = "Prodxstoresupport@gmail.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";
export const PROMPT_COUNT = "1,287,840+";
export const GUARANTEE_DAYS = 7;

// Set this to true only once the SuperProfile product above has been confirmed
// to email product-access/download instructions to buyers after checkout.
export const SUPERPROFILE_EMAIL_DELIVERY_CONFIGURED = true;

// ------------------------------------------------------------
// Visitor-session launch-offer timer
// ------------------------------------------------------------
// Each visitor gets their own 2-hour countdown starting the first time they
// open this website in their browser. It is stored in localStorage so it
// survives refreshes and reopened tabs, but it is specific to that visitor —
// it is not a single global deadline shared by every visitor.
export const OFFER_DURATION_MS = 2 * 60 * 60 * 1000;
export const OFFER_STORAGE_KEY = "prodxstore_launch_offer_expiry";

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

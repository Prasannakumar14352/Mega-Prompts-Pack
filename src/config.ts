// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// Replace this value with the live Razorpay Payment Page, Gumroad or checkout URL before publishing.
export const BUY_LINK: string = "https://rzp.io/rzp/Kx9tgGJ";

export const LAUNCH_PRICE = "₹399";
export const PREVIOUS_PRICE = "₹1,999";
// Regular (post-launch) price — same value as PREVIOUS_PRICE, kept as one source of truth.
export const REGULAR_PRICE = PREVIOUS_PRICE;
export const TOTAL_VALUE = "₹4,499";
export const SUPPORT_EMAIL = "Prodxstoresupport@gmail.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";
export const PROMPT_COUNT = "1,287,840+";
export const GUARANTEE_DAYS = 7;

// ------------------------------------------------------------
// Visitor-session launch-offer timer
// ------------------------------------------------------------
// Each visitor gets their own 2-hour countdown starting the first time they
// open this website in their browser. It is stored in localStorage so it
// survives refreshes and reopened tabs, but it is specific to that visitor —
// it is not a single global deadline shared by every visitor.
export const OFFER_DURATION_MS = 2 * 60 * 60 * 1000;
export const OFFER_STORAGE_KEY = "prodxstore_launch_offer_expiry";

// Each Razorpay link must be configured with the same amount displayed on the landing page.
export const LAUNCH_BUY_LINK: string = BUY_LINK;
export const REGULAR_BUY_LINK: string = "PASTE_YOUR_1999_RAZORPAY_PAYMENT_LINK_HERE";

// Replace # with published legal-policy URLs before running paid advertisements.
export const TERMS_LINK = "#";
export const PRIVACY_LINK = "#";
export const REFUND_LINK = "#";
export const CONTACT_LINK = "mailto:support@prodxstore.com";

export const BRAND_NAME = "PRODXSTORE";

/** Rejects placeholder values and anything that isn't a real http(s) URL. */
export function isValidCheckoutLink(link: string): boolean {
  const value = link.trim();

  return (
    value.length > 0 &&
    value !== "#" &&
    !value.includes("PASTE_YOUR") &&
    !value.includes("YOUR_RAZORPAY") &&
    /^https?:\/\//i.test(value)
  );
}

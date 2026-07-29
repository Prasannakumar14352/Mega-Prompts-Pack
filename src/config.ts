// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// Replace this value with the live Razorpay Payment Page, Gumroad or checkout URL before publishing.
export const BUY_LINK: string = "https://rzp.io/rzp/Kx9tgGJ";

export const LAUNCH_PRICE = "₹399";
export const PREVIOUS_PRICE = "₹1,999";
// Regular (pre-launch) price — same value as PREVIOUS_PRICE, kept as one source of truth.
export const REGULAR_PRICE = PREVIOUS_PRICE;
export const TOTAL_VALUE = "₹4,499";
export const SUPPORT_EMAIL = "support@prodxstore.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";
export const PROMPT_COUNT = "1,287,840+";
export const GUARANTEE_DAYS = 7;

// Set this to the genuine launch-offer expiry date and timezone before publishing.
export const LAUNCH_OFFER_END = "2026-08-05T23:59:59+05:30";

// Replace # with published legal-policy URLs before running paid advertisements.
export const TERMS_LINK = "#";
export const PRIVACY_LINK = "#";
export const REFUND_LINK = "#";
export const CONTACT_LINK = "mailto:support@prodxstore.com";

export const BRAND_NAME = "PRODXSTORE";

export function isBuyLinkConfigured(): boolean {
  return BUY_LINK !== "YOUR_RAZORPAY_OR_GUMROAD_LINK" && BUY_LINK.trim().length > 0;
}

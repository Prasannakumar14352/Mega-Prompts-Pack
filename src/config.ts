// ============================================================
// EDITABLE SITE CONFIGURATION
// Update these values before publishing the page live.
// ============================================================

// Replace this value with the live Razorpay Payment Page, Gumroad or checkout URL before publishing.
export const BUY_LINK: string = "https://rzp.io/rzp/Kx9tgGJ";

export const LAUNCH_PRICE = "₹499";
export const PREVIOUS_PRICE = "₹1,999";
// Regular (pre-launch) price — same value as PREVIOUS_PRICE, kept as one source of truth.
export const REGULAR_PRICE = PREVIOUS_PRICE;
// Price shown once a visitor's 20-minute session offer has expired — same value as PREVIOUS_PRICE.
export const EXPIRED_PRICE = PREVIOUS_PRICE;
export const TOTAL_VALUE = "₹4,499";
export const SUPPORT_EMAIL = "Prodxstoresupport@gmail.com";
export const PRODUCT_NAME = "The Mega AI Prompt Vault";
export const PROMPT_COUNT = "1,287,840+";
export const GUARANTEE_DAYS = 7;

// ------------------------------------------------------------
// Visitor-session launch-offer timer
// ------------------------------------------------------------
// Each visitor gets their own 20-minute countdown starting the first time they
// open this website in their browser. It is stored in localStorage so it
// survives refreshes and reopened tabs, but it is specific to that visitor —
// it is not a single global deadline shared by every visitor.
export const OFFER_DURATION_MINUTES = 20;
export const OFFER_STORAGE_KEY = "prodxstore_offer_expiry";

// The launch and regular Razorpay links must be configured with matching payment amounts before publishing.
export const LAUNCH_BUY_LINK: string = BUY_LINK;
export const REGULAR_BUY_LINK: string = "YOUR_RAZORPAY_₹1999_LINK";

// Replace # with published legal-policy URLs before running paid advertisements.
export const TERMS_LINK = "#";
export const PRIVACY_LINK = "#";
export const REFUND_LINK = "#";
export const CONTACT_LINK = "mailto:support@prodxstore.com";

export const BRAND_NAME = "PRODXSTORE";

const UNCONFIGURED_LINK_VALUES = new Set([
  "YOUR_RAZORPAY_OR_GUMROAD_LINK",
  "CURRENT_RAZORPAY_₹399_LINK",
  "YOUR_RAZORPAY_₹1999_LINK",
  "",
]);

export function isBuyLinkConfigured(link: string = BUY_LINK): boolean {
  return !UNCONFIGURED_LINK_VALUES.has(link.trim());
}

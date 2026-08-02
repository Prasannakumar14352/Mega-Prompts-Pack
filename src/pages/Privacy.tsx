// STARTER CONTENT — NOT LEGAL ADVICE.
// This page is a draft template for a one-person Indian digital-products
// business. It has not been written or reviewed by a lawyer. Review,
// customize (see the {/* EDIT: ... */} markers below) and get it checked by
// a qualified professional before relying on it for a live business.

import LegalPageLayout from "../components/LegalPageLayout";
import { usePageMeta } from "../hooks/usePageMeta";
import { PRODUCT_NAME, SUPPORT_EMAIL } from "../config";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy | PRODXSTORE",
    description: `How PRODXSTORE collects and uses your information when you purchase ${PRODUCT_NAME}.`,
    robots: "index, follow",
  });

  return (
    // EDIT: set the real "last updated" date whenever you revise this page.
    <LegalPageLayout title="Privacy Policy" lastUpdated="1 August 2026">
      <p>
        This Privacy Policy explains what information PRODXSTORE ("we", "us", "our") collects
        when you visit this website or purchase {PRODUCT_NAME}, and how that information is used.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong className="text-white">Email address.</strong> Collected at checkout so we can
          deliver your product-access instructions and send order-related communication.
        </li>
        <li>
          <strong className="text-white">Payment information.</strong> Payment is handled entirely
          by our payment partner
          {/* EDIT: name the actual gateway(s) used, e.g. SuperProfile / Razorpay / PayPal */}{" "}
          (SuperProfile, which may route payment through Razorpay, PayPal or a similar processor).
          Card numbers, UPI IDs and bank details are entered directly on the payment gateway's own
          secure page — we do not receive or store your full payment details.
        </li>
        <li>
          <strong className="text-white">Basic usage data.</strong> Standard website analytics and
          the Meta (Facebook) Pixel may collect anonymous browsing data such as page views, for
          measuring ad performance.{" "}
          {/* EDIT: confirm which analytics/ad-pixel tools are actually active and adjust this line to match. */}
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To deliver your purchased product and access instructions.</li>
        <li>To send order confirmations, support replies and — if you opt in — product updates.</li>
        <li>To respond to support requests you send us.</li>
        <li>To measure and improve the performance of this website and our advertising.</li>
      </ul>

      <h2>3. Payment processing</h2>
      <p>
        We do not store your card number, UPI PIN, CVV or bank login details. These are processed
        directly by our payment gateway in accordance with its own privacy and security policies.
        We only receive confirmation that a payment was completed and basic order metadata.
      </p>

      <h2>4. We do not sell your data</h2>
      <p>
        We do not sell, rent or trade your personal information to third parties for their own
        marketing purposes.
      </p>

      <h2>5. Data retention and your rights</h2>
      <p>
        We retain order and email records for as long as reasonably necessary to provide support,
        honor the refund window and meet accounting/legal obligations. You can request a copy of
        the data we hold about you, ask us to correct it, or ask us to delete it (subject to
        legitimate business and legal record-keeping needs) by emailing{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        This site may use cookies or similar technologies from third-party tools (such as
        advertising pixels) to remember basic preferences and measure traffic.{" "}
        {/* EDIT: add a cookie-consent banner if required in your target markets. */}
      </p>

      <h2>7. Contact</h2>
      <p>
        For any privacy questions or data requests, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
}

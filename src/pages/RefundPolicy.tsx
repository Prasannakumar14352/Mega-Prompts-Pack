// STARTER CONTENT — NOT LEGAL ADVICE.
// This page is a draft template for a one-person Indian digital-products
// business. It has not been written or reviewed by a lawyer. Review,
// customize (see the {/* EDIT: ... */} markers below) and get it checked by
// a qualified professional before relying on it for a live business.

import LegalPageLayout from "../components/LegalPageLayout";
import { usePageMeta } from "../hooks/usePageMeta";
import { GUARANTEE_DAYS, PRODUCT_NAME, SUPPORT_EMAIL } from "../config";

export default function RefundPolicy() {
  usePageMeta({
    title: "Refund Policy | PRODXSTORE",
    description: `The ${GUARANTEE_DAYS}-day money-back guarantee and refund process for ${PRODUCT_NAME}.`,
    robots: "index, follow",
  });

  return (
    // EDIT: set the real "last updated" date whenever you revise this page.
    <LegalPageLayout title="Refund Policy" lastUpdated="1 August 2026">
      <p>
        {PRODUCT_NAME} is an instantly-delivered digital product. Because there is no physical
        item and access is granted immediately, refunds are handled under the guarantee below
        rather than a standard "return" process.
      </p>

      <h2>1. {GUARANTEE_DAYS}-day money-back guarantee</h2>
      <p>
        If you're not satisfied with your purchase, you can request a full refund within{" "}
        {GUARANTEE_DAYS} days of your purchase date. We want you to feel confident buying from us,
        and this window gives you time to download the vault and check it fits your workflow.
      </p>

      <h2>2. How to request a refund</h2>
      <p>To request a refund:</p>
      <ul>
        <li>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> within{" "}
          {GUARANTEE_DAYS} days of purchase.
        </li>
        <li>Include the email address you used at checkout.</li>
        <li>Include your order/payment reference or receipt from the checkout confirmation.</li>
        <li>
          Optionally, let us know why the product didn't work for you — it helps us improve.
        </li>
      </ul>
      <p>
        We aim to respond to refund requests within 1–2 business days
        {/* EDIT: confirm your actual typical response/processing time. */}.
      </p>

      <h2>3. Conditions</h2>
      <ul>
        <li>Refund requests must be made within {GUARANTEE_DAYS} days of the original purchase date.</li>
        <li>
          One refund per customer/household for this product. Repeated purchase-and-refund
          patterns may not be honored.{" "}
          {/* EDIT: adjust this condition to match your actual policy. */}
        </li>
        <li>
          If the product delivered is materially different from what was described on the sales
          page, that's covered — contact us and we'll make it right.
        </li>
      </ul>

      <h2>4. How refunds are issued</h2>
      <p>
        Approved refunds are returned to your original payment method through our payment
        gateway (SuperProfile, which may route through Razorpay or a similar processor){" "}
        {/* EDIT: name the actual gateway you use. */}. Depending on your bank or card issuer,
        it can take a few business days for the refund to appear in your account after we process
        it.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about a refund? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we'll help.
      </p>
    </LegalPageLayout>
  );
}

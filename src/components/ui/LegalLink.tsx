import type { MouseEvent } from "react";

interface LegalLinkProps {
  href: string;
  label: string;
  className?: string;
}

/**
 * Renders a legal-page link. If the href is still the unconfigured "#"
 * placeholder, clicking it is prevented (rather than jumping to the top of
 * the page) and a console warning is logged so the gap is caught before launch.
 */
export default function LegalLink({ href, label, className = "" }: LegalLinkProps) {
  const isConfigured = href.trim().length > 0 && href.trim() !== "#";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.warn(
        `PRODXSTORE: The "${label}" legal link is not configured yet. Update it in src/config.ts before publishing.`
      );
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      title={isConfigured ? undefined : "Legal page link must be configured before publishing"}
      className={className}
    >
      {label}
    </a>
  );
}

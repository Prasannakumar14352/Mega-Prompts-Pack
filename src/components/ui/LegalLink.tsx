import type { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface LegalLinkProps {
  href: string;
  label: string;
  className?: string;
}

/**
 * Renders a legal-page link. Internal paths (starting with "/") use React
 * Router's <Link> for client-side navigation. If the href is still the
 * unconfigured "#" placeholder, clicking it is prevented (rather than
 * jumping to the top of the page) and a console warning is logged so the
 * gap is caught before launch.
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

  if (isConfigured && href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

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

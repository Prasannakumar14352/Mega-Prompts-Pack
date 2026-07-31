import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { BUTTON_BASE, BUTTON_VARIANTS, type ButtonVariant } from "./buttonStyles";

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidthOnMobile?: boolean;
  className?: string;
}

/**
 * A checkout-style button rendered as a real anchor so it navigates like a
 * normal link (works with "open in new tab", right-click, etc). When
 * `disabled` it renders inert: no href, not focusable, clicks suppressed —
 * matching the visual and functional disabled state of the button component.
 */
export default function LinkButton({
  href,
  disabled = false,
  variant = "primary",
  children,
  className = "",
  fullWidthOnMobile = false,
  ...rest
}: LinkButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    rest.onClick?.(event);
  };

  return (
    <a
      href={disabled ? undefined : href}
      role={disabled ? "button" : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${fullWidthOnMobile ? "w-full sm:w-auto" : ""} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { BUTTON_BASE, BUTTON_VARIANTS, type ButtonVariant } from "./buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidthOnMobile?: boolean;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  fullWidthOnMobile = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${fullWidthOnMobile ? "w-full sm:w-auto" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

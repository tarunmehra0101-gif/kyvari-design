import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-200 ease-[var(--ease-out-expo)] select-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon-500 " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-lagoon-500 text-white shadow-soft hover:bg-lagoon-600 hover:shadow-lift hover:-translate-y-px",
  secondary:
    "bg-surface text-ink border border-line-strong shadow-soft hover:border-lagoon-300 hover:text-lagoon-700 hover:-translate-y-px",
  ghost: "text-ink-soft hover:text-ink hover:bg-parchment",
  onDark:
    "bg-white text-lagoon-900 shadow-pop hover:bg-lagoon-50 hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-13 px-8 text-base",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: StyleProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

/** Link styled as a button — for navigation CTAs. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: StyleProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

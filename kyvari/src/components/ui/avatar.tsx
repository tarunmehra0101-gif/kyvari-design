import { cn } from "@/lib/utils";

/** Initials avatar — quiet parchment disc, ink initials. */
export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

  const sizes = {
    sm: "h-7 w-7 text-[0.6rem]",
    md: "h-9 w-9 text-[0.7rem]",
    lg: "h-12 w-12 text-sm",
  };

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-parchment font-semibold tracking-wide text-ink-soft",
        sizes[size],
        className
      )}
    >
      {initials}
    </span>
  );
}

import { cn } from "@/lib/utils";

/** Initials avatar — deterministic tint per name so lists feel alive. */
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

  const tints = [
    "bg-lagoon-100 text-lagoon-800",
    "bg-sky-50 text-sky-500",
    "bg-dune-50 text-dune-600",
    "bg-iris-50 text-iris-500",
    "bg-ember-50 text-ember-600",
  ];
  const tint = tints[name.length % tints.length];

  const sizes = {
    sm: "h-7 w-7 text-[0.65rem]",
    md: "h-9 w-9 text-xs",
    lg: "h-12 w-12 text-sm",
  };

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-bold",
        tint,
        sizes[size],
        className
      )}
    >
      {initials}
    </span>
  );
}

import { cn } from "@/lib/utils";

/**
 * Kyvari brand mark — a route line arcing to a star (the "closed deal").
 * Pure SVG so it scales anywhere; `tone` flips it for dark surfaces.
 */
export function KyvariMark({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "onDark";
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kyvari-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0fa383" />
          <stop offset="100%" stopColor="#085744" />
        </linearGradient>
      </defs>
      <rect
        width="40"
        height="40"
        rx="12"
        fill={tone === "brand" ? "url(#kyvari-g)" : "rgba(255,255,255,0.12)"}
      />
      {/* dotted route */}
      <path
        d="M9 28c4.5-1 6.5-4.5 8-9"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0.5 4.5"
      />
      {/* departure dot */}
      <circle cx="9" cy="28" r="2.4" fill="#ffffff" opacity="0.85" />
      {/* four-point star at the destination */}
      <path
        d="M25 9c1 4.2 2.8 6 7 7-4.2 1-6 2.8-7 7-1-4.2-2.8-6-7-7 4.2-1 6-2.8 7-7Z"
        fill="#ffffff"
      />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export function KyvariLogo({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "onDark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <KyvariMark tone={tone} className="h-8 w-8" />
      <span
        className={cn(
          "font-display text-[1.35rem] font-semibold tracking-tight",
          tone === "onDark" ? "text-white" : "text-ink"
        )}
      >
        Kyvari
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";

/**
 * Kyvari brand mark — a four-point star over a dotted route, ink on paper.
 * Monochrome by design; flips to white on dark surfaces via `tone`.
 */
export function KyvariMark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "onDark";
}) {
  const bg = tone === "ink" ? "#1b1b18" : "rgba(255,255,255,0.16)";
  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill={bg} />
      <path
        d="M9 29c5-1 7.5-5 9-10"
        fill="none"
        stroke={tone === "ink" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.55)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0.5 4.5"
      />
      <circle cx="9" cy="29" r="2.2" fill="#ffffff" opacity="0.9" />
      <path
        d="M25.5 9.5c.9 4 2.6 5.7 6.5 6.5-3.9.9-5.6 2.6-6.5 6.5-.9-3.9-2.6-5.6-6.5-6.5 3.9-.8 5.6-2.5 6.5-6.5Z"
        fill="#ffffff"
      />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export function KyvariLogo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "onDark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <KyvariMark tone={tone} className="h-7 w-7" />
      <span
        className={cn(
          "text-[1.1rem] font-semibold tracking-tight",
          tone === "onDark" ? "text-white" : "text-ink"
        )}
      >
        kyvari
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tone =
  | "neutral"
  | "lagoon"
  | "ember"
  | "dune"
  | "sky"
  | "iris"
  | "good"
  | "onDark";

const tones: Record<Tone, string> = {
  neutral: "bg-parchment text-ink-soft",
  lagoon: "bg-lagoon-50 text-lagoon-700",
  ember: "bg-ember-50 text-ember-600",
  dune: "bg-dune-50 text-dune-600",
  sky: "bg-sky-50 text-sky-500",
  iris: "bg-iris-50 text-iris-500",
  good: "bg-lagoon-50 text-status-good-deep",
  onDark: "bg-white/12 text-white/90 backdrop-blur-sm",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Itinerary lifecycle pill — one place defines the status → tone map. */
export function StatusBadge({
  status,
  className,
}: {
  status: "draft" | "sent" | "viewed" | "booked";
  className?: string;
}) {
  const map = {
    draft: { tone: "neutral" as Tone, label: "Draft" },
    sent: { tone: "sky" as Tone, label: "Sent" },
    viewed: { tone: "dune" as Tone, label: "Viewed" },
    booked: { tone: "good" as Tone, label: "Booked" },
  }[status];
  return (
    <Badge tone={map.tone} className={className}>
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "draft" && "bg-ink-mute",
          status === "sent" && "bg-sky-500",
          status === "viewed" && "bg-dune-500",
          status === "booked" && "bg-status-good"
        )}
        aria-hidden
      />
      {map.label}
    </Badge>
  );
}

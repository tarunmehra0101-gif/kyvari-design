import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Chips are deliberately quiet: white or parchment with a hairline.
 * Meaning is carried by a small dot or icon, never a loud fill.
 */
type Tone = "neutral" | "outline" | "onImage";

const tones: Record<Tone, string> = {
  neutral: "bg-parchment text-ink-soft",
  outline: "bg-surface text-ink-soft border border-line",
  onImage: "bg-white/90 text-ink backdrop-blur-sm",
};

export function Badge({
  tone = "outline",
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
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

const statusDot = {
  draft: "bg-ink-mute",
  sent: "bg-ink",
  viewed: "bg-clay-500",
  booked: "bg-status-good",
} as const;

const statusLabel = {
  draft: "Draft",
  sent: "Sent",
  viewed: "Viewed",
  booked: "Booked",
} as const;

/** Itinerary lifecycle pill — neutral chip + semantic dot. */
export function StatusBadge({
  status,
  tone = "outline",
  className,
}: {
  status: keyof typeof statusDot;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Badge tone={tone} className={className}>
      <span
        className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])}
        aria-hidden
      />
      {statusLabel[status]}
    </Badge>
  );
}

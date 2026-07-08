import {
  BedDouble,
  CarFront,
  Plane,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { StopType } from "@/lib/data";

/** One place defines the stop-type → icon/tint language used everywhere. */
const config: Record<
  StopType,
  { Icon: typeof Plane; tint: string; label: string }
> = {
  flight: { Icon: Plane, tint: "bg-sky-50 text-sky-500", label: "Flight" },
  hotel: { Icon: BedDouble, tint: "bg-iris-50 text-iris-500", label: "Stay" },
  experience: {
    Icon: Sparkles,
    tint: "bg-lagoon-50 text-lagoon-600",
    label: "Experience",
  },
  meal: {
    Icon: UtensilsCrossed,
    tint: "bg-ember-50 text-ember-600",
    label: "Dining",
  },
  transfer: {
    Icon: CarFront,
    tint: "bg-parchment text-ink-soft",
    label: "Transfer",
  },
};

export function stopLabel(type: StopType) {
  return config[type].label;
}

export function StopIcon({
  type,
  className,
}: {
  type: StopType;
  className?: string;
}) {
  const { Icon, tint, label } = config[type];
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        tint,
        className
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
    </span>
  );
}

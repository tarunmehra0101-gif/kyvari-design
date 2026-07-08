import {
  BedDouble,
  CarFront,
  Plane,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { StopType } from "@/lib/data";

/** Stop-type → icon/label. Icons stay ink-on-parchment; photos carry color. */
const config: Record<StopType, { Icon: typeof Plane; label: string }> = {
  flight: { Icon: Plane, label: "Flight" },
  hotel: { Icon: BedDouble, label: "Stay" },
  experience: { Icon: Sparkles, label: "Experience" },
  meal: { Icon: UtensilsCrossed, label: "Dining" },
  transfer: { Icon: CarFront, label: "Transfer" },
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
  const { Icon, label } = config[type];
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-parchment text-ink-soft",
        className
      )}
    >
      <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} />
    </span>
  );
}

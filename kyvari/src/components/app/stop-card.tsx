import {
  ArrowLeftRight,
  Car,
  Footprints,
  Ship,
  Star,
  Trash2,
} from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { StopIcon, stopLabel } from "@/components/ui/stop-icon";
import { sourceMeta, type Stop } from "@/lib/data";
import { formatMoney } from "@/lib/utils";

/** Travel leg between two stops — “8.5 km · 9 min drive”. */
export function LegConnector({ leg }: { leg: NonNullable<Stop["leg"]> }) {
  const Icon = { drive: Car, walk: Footprints, ferry: Ship }[leg.mode];
  return (
    <p className="flex items-center gap-2 py-2 pl-7 text-xs text-ink-mute">
      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
      {leg.distanceKm} km · {leg.minutes} min {leg.mode}
    </p>
  );
}

/**
 * One itinerary row. Photo thumb, quiet metadata, price at the right —
 * separated by hairlines inside the day card, never nested cards.
 * Hover reveals edit affordances (presentational in the prototype).
 */
export function StopRow({ stop, currency }: { stop: Stop; currency: string }) {
  const source = sourceMeta[stop.source];

  return (
    <article className="group relative flex gap-4 px-5 py-4 transition-colors hover:bg-paper/60">
      {stop.photo ? (
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-18 sm:w-18">
          <Photo src={stop.photo} alt="" tone="sand" sizes="72px" />
        </span>
      ) : (
        <StopIcon type={stop.type} className="mt-1" />
      )}

      <div className="min-w-0 flex-1">
        <p className="text-[0.68rem] font-medium uppercase tracking-wider text-ink-mute">
          {stop.time} · {stopLabel(stop.type)}
          <span className="normal-case tracking-normal"> · via {source.short}</span>
        </p>
        <h4 className="mt-1 truncate text-[0.95rem] font-medium text-ink">
          {stop.title}
        </h4>
        <p className="mt-0.5 truncate text-sm text-ink-soft">{stop.subtitle}</p>
        {stop.detail && (
          <p className="mt-0.5 text-xs text-ink-mute">{stop.detail}</p>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-end justify-center gap-1 text-sm">
        {stop.pricePerPerson != null && (
          <span className="font-medium tabular-nums text-ink">
            {formatMoney(stop.pricePerPerson, currency)}
          </span>
        )}
        {stop.rating && (
          <span className="flex items-center gap-1 text-xs text-ink-soft">
            <Star className="h-3 w-3 fill-clay-500 text-clay-500" />
            {stop.rating}
          </span>
        )}
      </div>

      {/* Hover actions */}
      <div className="absolute right-4 top-3 flex gap-1 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100">
        <button
          type="button"
          aria-label={`Swap ${stop.title}`}
          className="rounded-full border border-line bg-surface p-1.5 text-ink-mute shadow-soft transition-colors hover:text-ink"
        >
          <ArrowLeftRight className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          aria-label={`Remove ${stop.title}`}
          className="rounded-full border border-line bg-surface p-1.5 text-ink-mute shadow-soft transition-colors hover:text-status-bad"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

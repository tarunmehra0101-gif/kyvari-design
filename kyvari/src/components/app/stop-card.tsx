import { ArrowLeftRight, Car, Clock, Footprints, Ship, Star, Trash2 } from "lucide-react";
import { StopIcon, stopLabel } from "@/components/ui/stop-icon";
import { sourceMeta, type Stop } from "@/lib/data";
import { formatMoney } from "@/lib/utils";

/** Travel leg between two stops — “8.5 km · 9 min · drive”. */
export function LegConnector({ leg }: { leg: NonNullable<Stop["leg"]> }) {
  const Icon = { drive: Car, walk: Footprints, ferry: Ship }[leg.mode];
  return (
    <div className="flex items-center gap-3 py-1 pl-5">
      <span className="route-dashed h-8 w-px" aria-hidden />
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink-mute">
        <Icon className="h-3.5 w-3.5" />
        {leg.distanceKm} km · {leg.minutes} min {leg.mode}
      </span>
    </div>
  );
}

/**
 * One itinerary line item in the builder canvas.
 * Hover reveals edit affordances (presentational in the prototype).
 */
export function StopCard({ stop, currency }: { stop: Stop; currency: string }) {
  const source = sourceMeta[stop.source];

  return (
    <article className="card group relative flex gap-4 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-lagoon-200 hover:shadow-lift">
      <StopIcon type={stop.type} />

      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-ink-mute">
          <span className="text-lagoon-600">{stopLabel(stop.type)}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {stop.time}
          </span>
          <span aria-hidden>·</span>
          <span title={source.label}>via {source.short}</span>
        </p>

        <h4 className="mt-1 font-display text-[1.05rem] font-semibold leading-snug text-ink">
          {stop.title}
        </h4>
        <p className="mt-0.5 truncate text-sm text-ink-soft">{stop.subtitle}</p>
        {stop.detail && (
          <p className="mt-1 text-xs text-ink-mute">{stop.detail}</p>
        )}

        <div className="mt-2 flex items-center gap-3 text-sm">
          {stop.rating && (
            <span className="inline-flex items-center gap-1 font-semibold text-ink">
              <Star className="h-3.5 w-3.5 fill-dune-500 text-dune-500" />
              {stop.rating}
            </span>
          )}
          {stop.pricePerPerson && (
            <span className="font-semibold text-ink">
              {formatMoney(stop.pricePerPerson, currency)}
              <span className="font-normal text-ink-mute"> /person</span>
            </span>
          )}
        </div>
      </div>

      {/* Hover actions */}
      <div className="absolute right-3 top-3 flex gap-1 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100">
        <button
          type="button"
          aria-label={`Swap ${stop.title}`}
          className="rounded-full border border-line bg-surface p-2 text-ink-mute shadow-soft transition-colors hover:text-lagoon-600"
        >
          <ArrowLeftRight className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          aria-label={`Remove ${stop.title}`}
          className="rounded-full border border-line bg-surface p-2 text-ink-mute shadow-soft transition-colors hover:text-status-bad"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

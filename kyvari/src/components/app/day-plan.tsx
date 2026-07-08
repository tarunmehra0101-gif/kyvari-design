import { Plus } from "lucide-react";
import { LegConnector, StopRow } from "./stop-card";
import type { Day } from "@/lib/data";

/**
 * One day of the itinerary: a single card — serif day header, summary,
 * then hairline-divided stop rows. No card-in-card nesting.
 */
export function DayPlan({
  day,
  index,
  currency,
}: {
  day: Day;
  index: number;
  currency: string;
}) {
  const totalKm = day.stops
    .reduce((sum, s) => sum + (s.leg?.distanceKm ?? 0), 0)
    .toFixed(1);

  return (
    <section aria-labelledby={`day-${index}`} className="card scroll-mt-28 overflow-hidden">
      <header className="border-b border-line px-5 py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 id={`day-${index}`} className="font-display text-2xl text-ink">
            {day.label}
            <span className="text-ink-soft"> — {day.title}</span>
          </h3>
          <p className="text-xs tabular-nums text-ink-mute">
            {day.stops.length} stops{Number(totalKm) > 0 && ` · ${totalKm} km`}
          </p>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {day.summary}
        </p>
      </header>

      <div className="divide-y divide-line">
        {day.stops.map((stop) => (
          <div key={stop.id}>
            {stop.leg && <LegConnector leg={stop.leg} />}
            <StopRow stop={stop} currency={currency} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 border-t border-line py-3.5 text-sm text-ink-mute transition-colors hover:bg-paper/60 hover:text-ink"
      >
        <Plus className="h-4 w-4" />
        Add a stop
      </button>
    </section>
  );
}

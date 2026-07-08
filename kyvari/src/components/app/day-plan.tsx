import { Plus } from "lucide-react";
import { LegConnector, StopCard } from "./stop-card";
import type { Day } from "@/lib/data";

/** One day of the itinerary in the builder canvas. */
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
    <section aria-labelledby={`day-${index}`} className="scroll-mt-28">
      {/* Day header */}
      <div className="card border-l-4 border-l-lagoon-500 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 id={`day-${index}`} className="text-display-md text-ink">
            {day.label}
            <span className="ml-3 text-[0.6em] text-ink-soft">{day.title}</span>
          </h3>
          <p className="text-xs font-semibold text-ink-mute">
            {day.stops.length} stops
            {Number(totalKm) > 0 && ` · ${totalKm} km`}
          </p>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {day.summary}
        </p>
      </div>

      {/* Stops */}
      <div className="mt-4">
        {day.stops.map((stop) => (
          <div key={stop.id}>
            {stop.leg && <LegConnector leg={stop.leg} />}
            <StopCard stop={stop} currency={currency} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong py-3 text-sm font-medium text-ink-mute transition-colors hover:border-lagoon-300 hover:text-lagoon-600"
      >
        <Plus className="h-4 w-4" />
        Add a stop to {day.label}
      </button>
    </section>
  );
}

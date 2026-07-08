import { Search, SlidersHorizontal } from "lucide-react";
import { TripCard } from "@/components/app/trip-card";
import { itineraries } from "@/lib/data";

export const metadata = { title: "Itineraries" };

export default function ItinerariesPage() {
  const counts = {
    all: itineraries.length,
    booked: itineraries.filter((t) => t.status === "booked").length,
    inPlay: itineraries.filter((t) => t.status === "sent" || t.status === "viewed").length,
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-display-lg text-ink">Trips</h1>
          <p className="mt-2 text-ink-soft">
            {counts.all} trips · {counts.inPlay} with clients · {counts.booked}{" "}
            booked
          </p>
        </div>

        {/* Search + filter (presentational in the prototype) */}
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <label className="relative flex-1 sm:w-72">
            <span className="sr-only">Search itineraries</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute" />
            <input
              type="search"
              placeholder="Search by trip or client…"
              className="h-11 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-ink/30"
            />
          </label>
          <button
            type="button"
            aria-label="Filter"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          >
            <SlidersHorizontal className="h-4.5 w-4.5" />
          </button>
        </div>
      </header>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {itineraries.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

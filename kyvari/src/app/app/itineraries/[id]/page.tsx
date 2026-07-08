import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Eye, Link2, Send } from "lucide-react";
import { BuildFeed } from "@/components/app/build-feed";
import { DayPlan } from "@/components/app/day-plan";
import { MapPanel } from "@/components/app/map-panel";
import { SourceStrip } from "@/components/app/source-strip";
import { StatusBadge } from "@/components/ui/badge";
import { itineraries } from "@/lib/data";
import { formatDateRange, formatMoney, nightsBetween } from "@/lib/utils";

export function generateStaticParams() {
  return itineraries.map((t) => ({ id: t.id }));
}

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = itineraries.find((t) => t.id === id);
  if (!trip) notFound();

  const nights = nightsBetween(trip.startDate, trip.endDate);
  const brief = `${nights}-night ${trip.theme.split("·")[0]!.trim().toLowerCase()} trip to ${trip.destination} for ${trip.travelers}, ${formatDateRange(trip.startDate, trip.endDate)} — around ${formatMoney(trip.pricePerPerson, trip.currency)} per person.`;
  const mapStops = trip.days[0]!.stops.map((s) => s.title);

  return (
    <div className="flex min-h-dvh flex-col">
      {/* ---------- Builder toolbar ---------- */}
      <header className="sticky top-14 z-30 border-b border-line bg-paper/90 px-4 py-3 backdrop-blur sm:px-6 lg:top-0">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/app/itineraries"
            aria-label="Back to trips"
            className="rounded-full border border-line bg-surface p-2 text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <div className="min-w-0 flex-1">
            <h1 className="font-display truncate text-xl text-ink">
              {trip.title}
            </h1>
            <p className="mt-0.5 truncate text-xs text-ink-mute">
              {trip.destination}, {trip.country} ·{" "}
              {formatDateRange(trip.startDate, trip.endDate)} ·{" "}
              {trip.travelers} travellers · {trip.client}
            </p>
          </div>

          <StatusBadge status={trip.status} className="hidden sm:inline-flex" />

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Copy share link"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
            >
              <Link2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copy link</span>
            </button>
            <Link
              href={`/app/itineraries/${trip.id}/preview`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </Link>
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-black"
            >
              <Send className="h-3.5 w-3.5" />
              Send
            </button>
          </div>
        </div>

        {/* Aggregation sources */}
        <div className="mt-3">
          <SourceStrip />
        </div>
      </header>

      {/* ---------- Workspace: chat · itinerary · map ---------- */}
      <div className="grid flex-1 lg:grid-cols-[360px_1fr]">
        <aside
          aria-label="Kyvari assistant"
          className="border-b border-line bg-surface lg:sticky lg:top-[118px] lg:h-[calc(100dvh-118px)] lg:border-b-0 lg:border-r"
        >
          <BuildFeed brief={brief} />
        </aside>

        <section aria-label="Itinerary canvas" className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-start gap-6 xl:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              {trip.days.map((day, i) => (
                <DayPlan key={day.label} day={day} index={i} currency={trip.currency} />
              ))}

              {/* Trip total */}
              <div className="card flex flex-wrap items-center justify-between gap-3 p-5">
                <div>
                  <p className="text-eyebrow text-ink-mute">Estimated total</p>
                  <p className="font-display mt-1 text-3xl text-ink">
                    {formatMoney(trip.pricePerPerson, trip.currency)}
                    <span className="text-base text-ink-soft"> /person</span>
                  </p>
                </div>
                <p className="max-w-xs text-xs leading-relaxed text-ink-mute">
                  Flights, {nights} nights and all listed experiences. Margin
                  12% — adjust before sending.
                </p>
              </div>
            </div>

            <div className="hidden xl:sticky xl:top-[142px] xl:block">
              <MapPanel stops={mapStops} place={trip.destination} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Eye,
  Link2,
  MapPin,
  Send,
  Users,
} from "lucide-react";
import { BuildFeed } from "@/components/app/build-feed";
import { DayPlan } from "@/components/app/day-plan";
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

  return (
    <div className="flex min-h-dvh flex-col">
      {/* ---------- Builder toolbar ---------- */}
      <header className="sticky top-14 z-30 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur sm:px-6 lg:top-0">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/app/itineraries"
            aria-label="Back to itineraries"
            className="rounded-full border border-line bg-surface p-2 text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <div className="min-w-0 flex-1">
            <h1 className="truncate font-display text-lg font-semibold text-ink">
              {trip.title}
            </h1>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-ink-mute">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {trip.destination}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {formatDateRange(trip.startDate, trip.endDate)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3 w-3" /> {trip.travelers} travellers
              </span>
              <span className="hidden sm:inline">· {trip.client}</span>
            </p>
          </div>

          <StatusBadge status={trip.status} className="hidden sm:inline-flex" />

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-lagoon-300 hover:text-lagoon-700"
            >
              <Link2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copy link</span>
            </button>
            <Link
              href={`/app/itineraries/${trip.id}/preview`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-lagoon-300 hover:text-lagoon-700"
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </Link>
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-lagoon-500 px-4 text-sm font-medium text-white shadow-soft transition-all hover:bg-lagoon-600"
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

      {/* ---------- Workspace: AI feed + canvas ---------- */}
      <div className="grid flex-1 lg:grid-cols-[380px_1fr]">
        <aside
          aria-label="Kyvari assistant"
          className="border-b border-line bg-surface/60 lg:sticky lg:top-[118px] lg:h-[calc(100dvh-118px)] lg:border-b-0 lg:border-r"
        >
          <BuildFeed brief={brief} />
        </aside>

        <section aria-label="Itinerary canvas" className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-10">
            {trip.days.map((day, i) => (
              <DayPlan key={day.label} day={day} index={i} currency={trip.currency} />
            ))}

            {/* Trip total */}
            <div className="card flex flex-wrap items-center justify-between gap-3 border-lagoon-200 bg-lagoon-50/60 p-5">
              <div>
                <p className="text-eyebrow text-lagoon-700">Estimated total</p>
                <p className="font-display mt-1 text-3xl font-semibold text-ink">
                  {formatMoney(trip.pricePerPerson, trip.currency)}
                  <span className="text-base font-normal text-ink-soft">
                    {" "}
                    /person
                  </span>
                </p>
              </div>
              <p className="max-w-xs text-xs leading-relaxed text-ink-soft">
                Includes flights, {nights} nights and all listed experiences.
                Margin: 12% — adjust before sending.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

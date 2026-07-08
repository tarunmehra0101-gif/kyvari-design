import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BriefComposer } from "@/components/app/brief-composer";
import { TripCard } from "@/components/app/trip-card";
import { Avatar } from "@/components/ui/avatar";
import { agency, clientActivity, itineraries } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = { title: "Home" };

const weekStats = [
  { label: "Trips created", value: "19" },
  { label: "Client views", value: "127" },
  { label: "Booked", value: "4" },
  { label: "Avg. dwell", value: "5m 42s" },
];

export default function AppHome() {
  const recent = itineraries.slice(0, 3);
  const firstName = agency.agent.split(" ")[0];

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-16">
      {/* Greeting + composer */}
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-display-lg text-ink">
          Where to next, {firstName}?
        </h1>
        <p className="mt-3 text-ink-soft">
          Type a brief, paste a chat, or drop a PDF — Kyvari drafts the trip
          while you watch.
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-2xl">
        <BriefComposer />
      </div>

      {/* This week — quiet stat strip */}
      <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-y-6 border-y border-line py-6 text-center sm:grid-cols-4">
        {weekStats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-3xl text-ink">{s.value}</dd>
            <dt className="mt-1 text-xs text-ink-mute">{s.label}</dt>
          </div>
        ))}
      </dl>

      {/* Recent trips */}
      <section aria-labelledby="recent" className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 id="recent" className="text-display-md text-ink">
            Recent trips
          </h2>
          <Link
            href="/app/itineraries"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            All trips <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      {/* Client signals */}
      <section aria-labelledby="signals" className="mt-16">
        <h2 id="signals" className="text-display-md text-ink">
          Worth a call today
        </h2>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {clientActivity.slice(0, 3).map((a) => (
            <li key={a.id} className="flex items-center gap-4 py-4">
              <Avatar name={a.client} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{a.client}</p>
                <p className="mt-0.5 truncate text-sm text-ink-soft">
                  {a.action}
                </p>
              </div>
              <span
                className={cn(
                  "shrink-0 text-xs",
                  a.signal === "hot" ? "font-medium text-clay-500" : "text-ink-mute"
                )}
              >
                {a.when}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
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
];

export default function AppHome() {
  const recent = itineraries.slice(0, 4);
  const firstName = agency.agent.split(" ")[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Greeting */}
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-display-lg text-ink">
          Where to today, {firstName}?
        </h1>
        <p className="mt-3 text-ink-soft">
          Type a brief, paste a chat, or drop a PDF — Kyvari builds the
          itinerary while you watch.
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-2xl">
        <BriefComposer />
      </div>

      {/* Two-column: recent trips + this week */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
        <section aria-labelledby="jump-back">
          <div className="flex items-baseline justify-between">
            <h2 id="jump-back" className="text-display-md text-ink">
              Jump back in
            </h2>
            <Link
              href="/app/itineraries"
              className="inline-flex items-center gap-1 text-sm font-semibold text-lagoon-600 hover:text-lagoon-700"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {recent.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section aria-labelledby="week" className="card p-5">
            <h2 id="week" className="text-display-sm text-ink">
              Your week
            </h2>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
              {weekStats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-paper px-2 py-4">
                  <dd className="font-display text-2xl font-semibold text-ink">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-mute">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="hot" className="card p-5">
            <h2
              id="hot"
              className="text-display-sm flex items-center gap-2 text-ink"
            >
              <Flame className="h-4.5 w-4.5 text-ember-500" />
              Hot right now
            </h2>
            <ul className="mt-4 space-y-4">
              {clientActivity.slice(0, 3).map((a) => (
                <li key={a.id} className="flex items-start gap-3">
                  <Avatar name={a.client} size="sm" className="mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-ink">
                      {a.client}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      {a.action}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                        a.signal === "hot" ? "text-ember-500" : "text-ink-mute"
                      )}
                    >
                      {a.when}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

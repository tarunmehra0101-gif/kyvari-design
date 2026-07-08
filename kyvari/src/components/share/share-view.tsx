import {
  CalendarDays,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Moon,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { KyvariMark } from "@/components/ui/logo";
import { StopIcon, stopLabel } from "@/components/ui/stop-icon";
import { agency, type Itinerary, type Stop } from "@/lib/data";
import { formatDateRange, formatMoney, nightsBetween } from "@/lib/utils";

/** A stop as the client sees it — read-only, editorial, no chrome. */
function ClientStop({ stop, currency }: { stop: Stop; currency: string }) {
  return (
    <li data-reveal className="relative flex gap-4 pb-8 last:pb-0">
      {/* timeline spine */}
      <div className="flex flex-col items-center">
        <StopIcon type={stop.type} />
        <span className="route-dashed mt-2 w-px flex-1 group-last:hidden" aria-hidden />
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-wide text-ink-mute">
          <span className="text-lagoon-600">{stopLabel(stop.type)}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {stop.time}
          </span>
        </p>
        <h4 className="font-display mt-1 text-xl font-semibold leading-snug text-ink">
          {stop.title}
        </h4>
        <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {stop.subtitle}
        </p>
        {stop.detail && <p className="mt-1 text-sm text-ink-mute">{stop.detail}</p>}
        <p className="mt-2 flex items-center gap-4 text-sm">
          {stop.rating && (
            <span className="inline-flex items-center gap-1 font-semibold text-ink">
              <Star className="h-3.5 w-3.5 fill-dune-500 text-dune-500" />
              {stop.rating}
            </span>
          )}
          {stop.pricePerPerson && (
            <span className="font-semibold text-ink">
              {formatMoney(stop.pricePerPerson, currency)}
              <span className="font-normal text-ink-mute"> per person</span>
            </span>
          )}
        </p>
      </div>
    </li>
  );
}

/**
 * The itinerary exactly as the client receives it — a branded microsite.
 * Rendered standalone at /share/[id] and inside the agent's preview frame.
 */
export function ShareView({ trip }: { trip: Itinerary }) {
  const nights = nightsBetween(trip.startDate, trip.endDate);

  return (
    <article className="bg-paper">
      {/* ---------- Cover ---------- */}
      <header className={`scene-${trip.scene} grain relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-3xl flex-col justify-end px-6 py-14">
          <p className="flex items-center gap-2.5 text-white/90">
            <KyvariMark className="h-8 w-8" />
            <span className="text-sm">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-white/65">
                Prepared for {trip.client}
              </span>
              <span className="font-semibold">
                {agency.agent} · {agency.name}
              </span>
            </span>
          </p>

          <span className="mt-8 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {trip.theme}
          </span>
          <h1 className="text-display-xl mt-4 text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.3)]">
            {trip.title}
          </h1>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              <dt className="sr-only">Destination</dt>
              <dd>
                {trip.destination}, {trip.country}
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden />
              <dt className="sr-only">Dates</dt>
              <dd>{formatDateRange(trip.startDate, trip.endDate)}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Moon className="h-4 w-4" aria-hidden />
              <dt className="sr-only">Nights</dt>
              <dd>{nights} nights</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" aria-hidden />
              <dt className="sr-only">Travellers</dt>
              <dd>{trip.travelers} travellers</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- Days ---------- */}
      <div className="mx-auto max-w-3xl px-6 py-14">
        {trip.days.map((day, i) => (
          <Reveal key={day.label} as="section" className="mb-14 last:mb-0" stagger={0.07}>
            <div data-reveal className="flex items-center gap-4">
              <span className="font-display inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lagoon-900 text-lg font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-eyebrow text-lagoon-600">{day.label}</p>
                <h2 className="text-display-md text-ink">{day.title}</h2>
              </div>
            </div>

            <p
              data-reveal
              className="font-display mt-5 rounded-2xl border border-dune-100 bg-dune-50/60 p-5 text-[1.05rem] leading-relaxed text-ink-soft"
            >
              {day.summary}
            </p>

            <ol className="mt-8">
              {day.stops.map((stop) => (
                <ClientStop key={stop.id} stop={stop} currency={trip.currency} />
              ))}
            </ol>
          </Reveal>
        ))}

        {/* ---------- Price + respond ---------- */}
        <Reveal className="mt-16">
          <div
            data-reveal
            className="grain relative overflow-hidden rounded-[var(--radius-panel)] bg-lagoon-900 p-8 text-center sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_15%_0%,rgb(11_138_110/0.5)_0%,transparent_60%)]"
            />
            <div className="relative">
              <p className="text-eyebrow text-lagoon-200">Your trip, all in</p>
              <p className="font-display mt-2 text-5xl font-semibold tracking-tight text-white">
                {formatMoney(trip.pricePerPerson, trip.currency)}
                <span className="text-lg font-normal text-lagoon-100/80">
                  {" "}
                  per person
                </span>
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-lagoon-100/85">
                Flights, {nights} nights and every listed experience included.
                Nothing is booked until you say the word.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[0.95rem] font-semibold text-lagoon-900 shadow-pop transition-transform hover:-translate-y-px"
                >
                  <Check className="h-4.5 w-4.5" />
                  Love it — let&apos;s book
                </button>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/15"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Ask {agency.agent.split(" ")[0]} something
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- Colophon ---------- */}
      <footer className="border-t border-line py-8 text-center text-xs text-ink-mute">
        Crafted by {agency.name} · Itinerary powered by{" "}
        <span className="font-semibold text-ink-soft">Kyvari</span>
      </footer>
    </article>
  );
}

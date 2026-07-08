import {
  CalendarDays,
  Check,
  MapPin,
  MessageCircle,
  Moon,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { KyvariMark } from "@/components/ui/logo";
import { Photo } from "@/components/ui/photo";
import { StopIcon, stopLabel } from "@/components/ui/stop-icon";
import { agency, type Itinerary, type Stop } from "@/lib/data";
import { formatDateRange, formatMoney, nightsBetween } from "@/lib/utils";

/** A stop as the client sees it — photo, time, essentials. Read-only. */
function ClientStop({ stop, currency }: { stop: Stop; currency: string }) {
  return (
    <li data-reveal className="flex gap-4 py-5 sm:gap-5">
      {stop.photo ? (
        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
          <Photo src={stop.photo} alt="" tone="sand" sizes="96px" />
        </span>
      ) : (
        <StopIcon type={stop.type} className="mt-1" />
      )}

      <div className="min-w-0 flex-1">
        <p className="text-[0.68rem] font-medium uppercase tracking-wider text-ink-mute">
          {stop.time} · {stopLabel(stop.type)}
        </p>
        <h4 className="mt-1 text-[1.05rem] font-medium leading-snug text-ink">
          {stop.title}
        </h4>
        <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
          {stop.subtitle}
        </p>
        {stop.detail && (
          <p className="mt-0.5 text-xs text-ink-mute">{stop.detail}</p>
        )}
        <p className="mt-1.5 flex items-center gap-4 text-sm">
          {stop.rating && (
            <span className="inline-flex items-center gap-1 text-ink-soft">
              <Star className="h-3.5 w-3.5 fill-clay-500 text-clay-500" />
              {stop.rating}
            </span>
          )}
          {stop.pricePerPerson != null && (
            <span className="font-medium tabular-nums text-ink">
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
 * The itinerary exactly as the client receives it — a photography-led
 * microsite under the agent's name. Rendered standalone at /share/[id]
 * and inside the agent's preview frame.
 */
export function ShareView({ trip }: { trip: Itinerary }) {
  const nights = nightsBetween(trip.startDate, trip.endDate);

  return (
    <article className="bg-paper">
      {/* ---------- Cover ---------- */}
      <header className="relative">
        <div className="relative h-[68vh] min-h-105">
          <Photo
            src={trip.photo}
            alt={`${trip.destination}, ${trip.country}`}
            tone={trip.tone}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/25" />

          <div className="absolute inset-x-0 top-0 mx-auto flex max-w-3xl items-center gap-2.5 px-6 py-6 text-white">
            <KyvariMark tone="onDark" className="h-7 w-7" />
            <span className="text-sm">
              <span className="block text-[0.62rem] font-medium uppercase tracking-widest text-white/70">
                Prepared for {trip.client}
              </span>
              <span className="font-medium">
                {agency.agent} · {agency.name}
              </span>
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-12">
            <p className="text-eyebrow text-white/75">{trip.theme}</p>
            <h1 className="text-display-xl mt-3 text-white">{trip.title}</h1>
            <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
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
        </div>
      </header>

      {/* ---------- Days ---------- */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        {trip.days.map((day) => (
          <Reveal
            key={day.label}
            as="section"
            className="mb-16 last:mb-0"
            stagger={0.07}
          >
            <div data-reveal>
              <p className="text-eyebrow text-ink-mute">{day.label}</p>
              <h2 className="text-display-md mt-2 text-ink">{day.title}</h2>
              <p className="font-display mt-4 max-w-2xl text-[1.15rem] leading-relaxed text-ink-soft">
                {day.summary}
              </p>
            </div>

            <ol className="mt-6 divide-y divide-line border-y border-line">
              {day.stops.map((stop) => (
                <ClientStop key={stop.id} stop={stop} currency={trip.currency} />
              ))}
            </ol>
          </Reveal>
        ))}

        {/* ---------- Price + respond ---------- */}
        <Reveal className="mt-20">
          <div data-reveal className="rounded-3xl border border-line bg-surface p-8 text-center sm:p-12">
            <p className="text-eyebrow text-ink-mute">Your trip, all in</p>
            <p className="font-display mt-3 text-6xl text-ink">
              {formatMoney(trip.pricePerPerson, trip.currency)}
            </p>
            <p className="mt-1 text-sm text-ink-mute">per person</p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              Flights, {nights} nights and every listed experience included.
              Nothing is booked until you say the word.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[0.95rem] font-medium text-paper transition-all hover:bg-black hover:shadow-lift"
              >
                <Check className="h-4.5 w-4.5" />
                Love it — let&apos;s book
              </button>
              <button
                type="button"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-surface px-7 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/40"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Ask {agency.agent.split(" ")[0]} something
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- Colophon ---------- */}
      <footer className="border-t border-line py-8 text-center text-xs text-ink-mute">
        Crafted by {agency.name} · Itinerary powered by{" "}
        <span className="font-medium text-ink-soft">Kyvari</span>
      </footer>
    </article>
  );
}

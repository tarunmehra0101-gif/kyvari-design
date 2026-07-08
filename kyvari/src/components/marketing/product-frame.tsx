import { Check, MapPin, Send, Star } from "lucide-react";
import { KyvariMark } from "@/components/ui/logo";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/lib/photos";

/**
 * The hero product shot: a faithful, hand-built recreation of the builder
 * (chat rail + itinerary + map) rendered from the same tokens as the real
 * app — sharper than a screenshot and always in sync with the design.
 */
export function ProductFrame() {
  return (
    <div
      aria-hidden
      className="frame overflow-hidden text-left"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-4 hidden rounded-full border border-line px-3 py-1 text-[0.65rem] text-ink-mute sm:block">
          kyvari.com/app · Santorini, Slowly
        </span>
      </div>

      <div className="grid sm:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr_300px]">
        {/* chat rail */}
        <div className="hidden flex-col gap-4 border-r border-line p-5 sm:flex">
          <div className="ml-6 rounded-2xl rounded-br-md bg-parchment px-3.5 py-2.5 text-[0.72rem] leading-relaxed text-ink">
            7 nights in Santorini for our honeymoon, around $5k — she loves
            quiet mornings and wine.
          </div>
          <div className="flex items-start gap-2.5">
            <KyvariMark className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-[0.72rem] leading-relaxed text-ink-soft">
              Done — three unhurried days are drafted. Flights held, cave suite
              shortlisted, wine tasting at golden hour.
            </p>
          </div>
          <ul className="mt-1 space-y-2 text-[0.68rem] text-ink-soft">
            {["Parsed WhatsApp brief", "Matched flights on Amadeus", "Shortlisted 6 stays"].map(
              (s) => (
                <li key={s} className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-moss-500" /> {s}
                </li>
              )
            )}
          </ul>
          <div className="mt-auto flex items-center justify-between rounded-full border border-line py-1.5 pl-3.5 pr-1.5 text-[0.7rem] text-ink-mute">
            Make day 2 slower…
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper">
              <Send className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* itinerary */}
        <div className="p-5 sm:p-6">
          <p className="font-display text-[1.35rem] text-ink">Day 2 — Oia by morning, wine by dusk</p>
          <p className="mt-1 text-[0.7rem] text-ink-mute">3 stops · 16 km · walking + one drive</p>
          <ul className="mt-4 divide-y divide-line">
            {[
              { photo: photos.oldTown, tone: "sea", time: "08:30", title: "Oia old town & Ammoudi Bay walk", meta: "Private guide · 3 hrs", rating: "4.9" },
              { photo: photos.beach, tone: "sand", time: "13:00", title: "Seafood lunch at Ammoudi Fish Tavern", meta: "On the water · fresh catch", rating: "4.6" },
              { photo: photos.vineyard, tone: "citrus", time: "17:00", title: "Santo Wines caldera tasting", meta: "6 varietals · sunset seating", rating: "4.8" },
            ].map((s) => (
              <li key={s.time} className="flex items-center gap-3.5 py-3">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                  <Photo src={s.photo} alt="" tone={s.tone} sizes="48px" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.8rem] font-medium text-ink">
                    {s.title}
                  </span>
                  <span className="mt-0.5 block text-[0.68rem] text-ink-mute">
                    {s.time} · {s.meta}
                  </span>
                </span>
                <span className="flex items-center gap-1 text-[0.7rem] font-medium text-ink">
                  <Star className="h-3 w-3 fill-clay-500 text-clay-500" />
                  {s.rating}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* map */}
        <div className="relative hidden border-l border-line lg:block">
          <svg viewBox="0 0 300 340" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <rect width="300" height="340" fill="#f2f0e9" />
            {/* coastline */}
            <path
              d="M50 340 C70 260 40 210 90 170 C130 140 120 90 170 60 C200 40 240 50 300 20 L300 340 Z"
              fill="#e9e6dd"
            />
            <path
              d="M50 340 C70 260 40 210 90 170 C130 140 120 90 170 60 C200 40 240 50 300 20"
              fill="none" stroke="#d8d4c8" strokeWidth="1.5"
            />
            {/* route */}
            <path
              d="M110 250 C130 210 150 190 165 150 C176 122 200 105 224 92"
              fill="none" stroke="#1b1b18" strokeWidth="1.6" strokeDasharray="1 6" strokeLinecap="round"
            />
            {[
              [110, 250, "1"],
              [165, 150, "2"],
              [224, 92, "3"],
            ].map(([x, y, n]) => (
              <g key={String(n)}>
                <circle cx={Number(x)} cy={Number(y)} r="10" fill="#1b1b18" />
                <text x={Number(x)} y={Number(y) + 3.5} textAnchor="middle" fontSize="10" fill="#faf9f6" fontWeight="600">
                  {n}
                </text>
              </g>
            ))}
          </svg>
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-medium text-ink backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> Oia, Santorini
          </span>
        </div>
      </div>
    </div>
  );
}

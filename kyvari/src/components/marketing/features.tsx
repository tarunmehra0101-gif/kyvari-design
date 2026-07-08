import { Check, Eye, Link2, Loader2, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/lib/photos";

/**
 * Three quiet feature splits. Each "visual" is a small, honest recreation
 * of real product UI built from the same tokens — no abstract illustration.
 */

function AggregationVisual() {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {[
          ["Amadeus GDS", "4"],
          ["Booking.com", "6"],
          ["WhatsApp brief", "12"],
          ["Viator", "9"],
        ].map(([name, count]) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-soft"
          >
            <Check className="h-3 w-3 text-moss-500" />
            {name}
            <span className="text-ink-mute">{count}</span>
          </span>
        ))}
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-soft">
          <Loader2 className="h-3 w-3 animate-spin text-ink-mute motion-reduce:animate-none" />
          Hotel brochure.pdf
        </span>
      </div>
      <div className="route-dashed my-4 ml-5 h-7 w-px" aria-hidden />
      <ul className="divide-y divide-line rounded-2xl border border-line">
        {[
          { photo: photos.planeWing, tone: "sea", title: "Athens → Santorini · A3 356 · seats held", meta: "Matched from Amadeus in 1.8s" },
          { photo: photos.poolVilla, tone: "palm", title: "Aerino Cave Suites, Imerovigli", meta: "Shortlisted from 214 stays · $177/night" },
        ].map((r) => (
          <li key={r.title} className="flex items-center gap-3.5 p-3.5">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
              <Photo src={r.photo} alt="" tone={r.tone} sizes="44px" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-ink">{r.title}</span>
              <span className="text-xs text-ink-mute">{r.meta}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShareVisual() {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-64">
        <Photo src={photos.santoriniWide} alt="Oia, Santorini at dusk" tone="sea" sizes="(min-width: 768px) 44vw, 92vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="text-eyebrow text-white/75">Prepared by Saffron Trails</p>
          <p className="font-display mt-1 text-3xl">Santorini, Slowly</p>
        </div>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-medium text-ink backdrop-blur-sm">
          <Link2 className="h-3 w-3" /> kyvari.link/sharma
        </span>
      </div>
      <div className="flex items-center justify-between px-5 py-4 text-sm">
        <span className="flex items-center gap-1.5 text-ink-soft">
          <Eye className="h-4 w-4 text-ink-mute" /> Rohan viewed 3× today
        </span>
        <span className="flex items-center gap-1 font-medium text-ink">
          <Star className="h-3.5 w-3.5 fill-clay-500 text-clay-500" /> 6m 12s dwell
        </span>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-eyebrow text-ink-mute">Sent → booked</p>
          <p className="font-display mt-1 text-5xl text-ink">31%</p>
        </div>
        <p className="text-sm font-medium text-status-good-deep">↑ 4 pts this month</p>
      </div>
      <svg viewBox="0 0 320 80" className="mt-6 h-20 w-full" aria-hidden>
        <polyline
          points="0,64 40,58 80,60 120,46 160,48 200,30 240,24 280,16 320,8"
          fill="none"
          stroke="var(--color-chart-1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="0" y1="76" x2="320" y2="76" stroke="var(--color-chart-grid)" strokeWidth="1" />
      </svg>
      <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
        <li className="flex justify-between border-t border-line pt-2.5">
          <span>Rohan &amp; Ananya · reading now</span>
          <span className="flex items-center gap-1.5 font-medium text-ink">
            <span className="animate-live h-2 w-2 rounded-full bg-moss-500" /> live
          </span>
        </li>
        <li className="flex justify-between border-t border-line pt-2.5">
          <span>Fernandes family · booked</span>
          <span className="font-medium text-ink">$4,720</span>
        </li>
      </ul>
    </div>
  );
}

const splits = [
  {
    eyebrow: "Aggregation",
    title: "Every source you use, gathered for you",
    body: "Kyvari pulls live inventory from your GDS and OTAs, parses WhatsApp chats and PDF brochures, and reconciles it all into one editable plan. The afternoon of tabs and copy-paste becomes eleven minutes.",
    Visual: AggregationVisual,
  },
  {
    eyebrow: "Client experience",
    title: "Share pages that look like you hired a studio",
    body: "One elegant link under your name and brand — photography-first, effortless to read on a phone, and impossible to mistake for a PDF attachment. Clients forward them; forwards become referrals.",
    Visual: ShareVisual,
  },
  {
    eyebrow: "Signal",
    title: "Know the moment they fall in love with it",
    body: "Opens, dwell time, re-visits and shares per client. Follow up while the trip is still on their mind — agents on Kyvari close a third more of what they send.",
    Visual: AnalyticsVisual,
  },
];

export function Features() {
  return (
    <section id="product" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl space-y-24 sm:space-y-32">
        {splits.map(({ eyebrow, title, body, Visual }, i) => (
          <Reveal
            key={eyebrow}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            stagger={0.12}
          >
            <div data-reveal className={i % 2 === 1 ? "md:order-2" : undefined}>
              <p className="text-eyebrow text-ink-mute">{eyebrow}</p>
              <h2 className="text-display-md mt-3 text-ink">{title}</h2>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
                {body}
              </p>
            </div>
            <div data-reveal className={i % 2 === 1 ? "md:order-1" : undefined}>
              <Visual />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import {
  BarChart3,
  FileText,
  Link2,
  MapPin,
  Plane,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

/**
 * "#product" bento — each tile is a miniature, honest render of the real UI
 * built from the same tokens, not screenshots.
 */
export function Features() {
  return (
    <Reveal as="section" className="bg-surface/60 border-y border-line px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl" id="product">
        <div className="max-w-2xl">
          <p data-reveal className="text-eyebrow text-lagoon-600">
            The product
          </p>
          <h2 data-reveal className="text-display-lg mt-3 text-ink">
            Every source you already use, one itinerary your client will love.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* ---- Tile 1 (wide): multi-source aggregation ---- */}
          <div data-reveal className="card p-7 md:col-span-2">
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Amadeus GDS", icon: Plane },
                { label: "Booking.com", icon: MapPin },
                { label: "WhatsApp brief", icon: FileText },
                { label: "Viator", icon: Star },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  <Icon className="h-3.5 w-3.5 text-lagoon-600" />
                  {label}
                </span>
              ))}
            </div>

            {/* flow arrow */}
            <div className="my-4 ml-4 h-8 w-px route-dashed" aria-hidden />

            {/* resulting stop card */}
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                <Plane className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">
                  Athens → Santorini · A3 356 · seats held
                </p>
                <p className="text-xs text-ink-mute">
                  Matched from Amadeus in 1.8s · fare locked 24h
                </p>
              </div>
              <Badge tone="lagoon">Auto</Badge>
            </div>

            <h3 className="text-display-sm mt-7 text-ink">
              Multi-source aggregation, zero copy-paste
            </h3>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
              Kyvari pulls live inventory and parses unstructured briefs, then
              reconciles it all into one editable plan. You approve; it assembles.
            </p>
          </div>

          {/* ---- Tile 2: branded share page ---- */}
          <div data-reveal className="card overflow-hidden">
            <div className="scene-santorini grain relative h-40 p-5">
              <p className="text-eyebrow text-white/80">Prepared by Saffron Trails</p>
              <p className="font-display mt-1 text-xl font-semibold leading-tight text-white">
                Santorini, Slowly
              </p>
              <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Link2 className="h-3 w-3" /> kyvari.link/sharma-honeymoon
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-display-sm text-ink">Share pages that sell</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Your logo, your colors, one elegant link — indistinguishable
                from a bespoke microsite.
              </p>
            </div>
          </div>

          {/* ---- Tile 3: engagement analytics ---- */}
          <div data-reveal className="card p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-lagoon-50 text-lagoon-600">
              <BarChart3 className="h-5 w-5" />
            </span>
            {/* tiny honest sparkline, tokens only */}
            <svg viewBox="0 0 200 48" className="mt-5 h-12 w-full" aria-hidden>
              <polyline
                points="0,40 28,34 56,36 84,26 112,28 140,16 168,12 200,4"
                fill="none"
                stroke="var(--color-chart-1)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-display-sm mt-4 text-ink">Know who&apos;s hot</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              Opens, dwell time, shares and re-visits per client — follow up
              while the trip is still on their mind.
            </p>
          </div>

          {/* ---- Tile 4: agent in control ---- */}
          <div data-reveal className="card p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-iris-50 text-iris-500">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="text-display-sm mt-5 text-ink">You stay the expert</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              Every AI suggestion is editable, sourced and priced with your
              margin. Kyvari drafts; you decide what your name goes on.
            </p>
          </div>

          {/* ---- Tile 5: speed claim ---- */}
          <div data-reveal className="card bg-lagoon-900 p-6 text-white">
            <p className="font-display text-5xl font-semibold tracking-tight">
              11<span className="text-lagoon-300">min</span>
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-lagoon-100/90">
              Median time from pasted brief to client-ready itinerary — work
              that used to take an afternoon of tabs and copy-paste.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

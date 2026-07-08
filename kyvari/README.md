# Kyvari — the AI copilot for travel agents

A full product experience: marketing landing page, itinerary-builder app,
client share pages, and an analytics dashboard. Built as a portfolio-grade,
replicable design system on Next.js.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Route | What it is |
|---|---|
| `/` | Marketing landing (GSAP scroll reveals, lazy three.js globe hero) |
| `/app` | Agent home — brief composer, recent trips, hot clients |
| `/app/itineraries` | Itinerary index |
| `/app/itineraries/santorini-honeymoon` | **Builder** — AI feed, source aggregation strip, day canvas |
| `/app/itineraries/santorini-honeymoon/preview` | Client preview inside the agent frame |
| `/share/santorini-honeymoon` | **Client share page** — the branded microsite clients receive |
| `/app/analytics` | KPIs, engagement chart, funnel, revenue, activity |

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — every token lives in `src/app/globals.css` under `@theme`
- **GSAP + ScrollTrigger** — scroll reveals & hero timeline (`components/motion/reveal.tsx`)
- **react-three-fiber / three** — hero dot-globe with animated flight arcs,
  lazy-loaded and skipped under `prefers-reduced-motion` (`marketing/globe-loader.tsx`)
- **Framer Motion** — component micro-interactions in the app (`app/build-feed.tsx`)
- **Recharts** — dashboard charts (`components/analytics/charts.tsx`)
- **lucide-react** — icons

## Design system

### Brand

- **Voice**: aspirational but trustworthy — an expert concierge, not a toy.
- **Logo**: route-to-star mark (`components/ui/logo.tsx`), pure SVG.
- **Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif —
  headlines, itinerary titles, hero numbers) + [Inter](https://fonts.google.com/specimen/Inter)
  (UI/body). Wired via `next/font` in `src/app/layout.tsx`.
  Scale utilities: `text-display-xl/lg/md/sm`, `text-eyebrow`.

### Color tokens (all in `globals.css @theme`)

| Role | Token | Hex |
|---|---|---|
| Page plane | `paper` | `#f6f4ef` |
| Recessed wash | `parchment` | `#efece4` |
| Card | `surface` | `#ffffff` |
| Text | `ink` / `ink-soft` / `ink-mute` | `#14201c` / `#49554f` / `#78827c` |
| Hairline | `line` / `line-strong` | `#e6e2d7` / `#d5d0c2` |
| **Primary** | `lagoon-500` (50→950 ramp) | `#0b8a6e` |
| Warm accent | `ember-500` | `#e4572e` |
| Amber support | `dune-500` | `#c98500` |
| Chart support | `sky-500` / `iris-500` | `#2a78d6` / `#7c5ce0` |

Chart categorical order (`chart-1…5`) is **CVD-validated** — lagoon, sky, dune,
iris, ember. Don't shuffle it; a filtered series keeps its color. The funnel
uses the validated ordinal teal ramp `#66bfa6 → #31a487 → #0b8a6e → #0a6b57`.

### Surfaces, depth, radius, motion

- Shadows: `shadow-soft` (resting card) → `shadow-lift` (hover) → `shadow-pop` (modal/featured).
- Radius: `rounded-[var(--radius-card)]` 20px cards, `--radius-panel` 28px hero panels, pills for actions.
- Utilities: `card`, `glass`, `grain` (SVG noise over gradients), `route-dashed`
  (dotted travel connectors), `scene-*` (destination gradient cover art — swap
  these classes for real photography via `<Image>` when you have it).
- Motion: `Reveal` wraps a section; anything with `data-reveal` fades/rises in
  once on scroll. All motion (GSAP, marquee, spinners, globe) respects
  `prefers-reduced-motion`, and content is never hidden when JS is off.

## Structure

```
src/
├── app/
│   ├── layout.tsx              # fonts, metadata, js-class gate
│   ├── globals.css             # ← THE design-token source of truth
│   ├── page.tsx                # landing
│   ├── app/                    # product (rail/tab-bar shell)
│   │   ├── page.tsx            # agent home
│   │   ├── itineraries/        # index, [id] builder, [id]/preview
│   │   └── analytics/page.tsx
│   └── share/[id]/page.tsx     # public client microsite
├── components/
│   ├── ui/                     # logo, button, badge, avatar, stop-icon
│   ├── motion/reveal.tsx       # GSAP scroll reveal
│   ├── marketing/              # navbar, hero, globe, sections
│   ├── app/                    # sidebar, trip-card, builder pieces
│   ├── share/share-view.tsx    # client-facing itinerary
│   └── analytics/              # recharts charts + funnel
└── lib/
    ├── data.ts                 # typed sample data = the API contract
    └── utils.ts                # cn, money/date formatting
```

## Replication notes

- All sample data flows from `src/lib/data.ts`; swap it for API calls and every
  screen keeps working.
- The three.js globe is code-split (`next/dynamic`, `ssr: false`) so the landing
  stays light; reduced-motion users get a static composition.
- Charts follow a strict spec: hairline grids, recessive axes, 2px lines,
  ≤16px bars with 4px data-end radius, legends for ≥2 series, and a
  "View as table" fallback under each chart for accessibility.

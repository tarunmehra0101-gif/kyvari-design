'use client';

import { useMemo, useState } from 'react';
import {
  Camera,
  Hotel,
  Utensils,
  Mountain,
  Plane,
  Star,
  Car,
  MapPin,
  ExternalLink,
  Clock,
  Navigation,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Types
   ───────────────────────────────────────────────────────────── */

export type StopCategory = 'SIGHTSEEING' | 'HOTEL' | 'FOOD' | 'ACTIVITY';

export interface RouteStop {
  cat: StopCategory;
  title: string;
  meta: string;
  rating?: string;
  hasDrive?: boolean;
  drive?: string;
}

export interface RouteDay {
  name: string;
  badge: string;
  headline: string;
  stops: RouteStop[];
}

export interface RouteMapProps {
  days: RouteDay[];
}

/* ─────────────────────────────────────────────────────────────
   Design tokens
   ───────────────────────────────────────────────────────────── */

const INK = '#09090b';
const ASH = '#a1a1aa';
const PAPER = '#ffffff';
const BORDER = '#ececee';
const MAGENTA = '#fe45e2';

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */

const categoryIcon: Record<StopCategory, typeof Camera> = {
  SIGHTSEEING: Camera,
  HOTEL: Hotel,
  FOOD: Utensils,
  ACTIVITY: Mountain,
};

const categoryLabel: Record<StopCategory, string> = {
  SIGHTSEEING: 'Sightseeing',
  HOTEL: 'Stay',
  FOOD: 'Food',
  ACTIVITY: 'Activity',
};

// Detect a "flight" stop so we can show the Plane icon instead of the category icon.
function isFlight(stop: RouteStop): boolean {
  const haystack = `${stop.title} ${stop.meta}`.toLowerCase();
  return (
    haystack.includes('flight') ||
    haystack.includes('fly') ||
    haystack.includes('airport') ||
    haystack.includes('arrival') ||
    haystack.includes('departure') ||
    /\b[A-Z]{3}\b\s*[–-]\s*[A-Z]{3}\b/.test(`${stop.title} ${stop.meta}`)
  );
}

// Synthesize a scannable clock time per-stop (props carry no explicit time).
function stopTime(index: number): string {
  const start = 9 * 60; // 09:00
  const minutes = start + index * 105; // ~1h45 cadence
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  const period = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${m.toString().padStart(2, '0')} ${period}`;
}

// Synthesize a day date, anchored to a stable base so SSR/CSR match.
function dayDate(dayIndex: number): string {
  const base = new Date(Date.UTC(2026, 6, 15)); // 15 Jul 2026 (stable, no Date.now)
  base.setUTCDate(base.getUTCDate() + dayIndex);
  return base.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/* ─────────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────────── */

export function RouteMap(props: RouteMapProps): React.JSX.Element {
  const { days } = props;

  const [activeDay, setActiveDay] = useState<number>(0);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const safeDays = days.length > 0 ? days : [];
  const current = safeDays[activeDay] ?? safeDays[0];

  const totalStops = useMemo(
    () => safeDays.reduce((sum, d) => sum + d.stops.length, 0),
    [safeDays],
  );

  // OpenStreetMap bbox around the Paro / Thimphu corridor (Bhutan).
  // bbox = minLon,minLat,maxLon,maxLat ; marker centred on Paro.
  const osmSrc =
    'https://www.openstreetmap.org/export/embed.html' +
    '?bbox=89.20%2C27.30%2C89.75%2C27.62' +
    '&layer=mapnik&marker=27.4305%2C89.4155';

  const gmapsHref =
    'https://www.google.com/maps/dir/Paro,+Bhutan/Tigers+Nest+Monastery/Thimphu,+Bhutan';

  if (safeDays.length === 0) {
    return <div />;
  }

  return (
    <section aria-label="Route and map" style={{ width: '100%' }}>
      <style>{scopedCss}</style>

      {/* ══════════════ 2. DAYWISE MAP (cinematic dark band) ══════════════ */}
      <div className="km-map-band">
        <div className="km-map-head">
          <div>
            <div className="km-eyebrow km-eyebrow-dark">
              <MapPin size={12} /> Your route map
            </div>
            <h3 className="km-map-title">The Paro Valley loop, mapped</h3>
            <p className="km-map-sub">
              Paro arrival, the ascent to Tiger&apos;s Nest, and the valley drive
              down to Thimphu — the full daywise route on a live map.
            </p>
          </div>
          <a
            className="km-gmaps"
            href={gmapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <ExternalLink size={14} />
          </a>
        </div>

        <div className="km-map-grid">
          {/* real map via OpenStreetMap */}
          <div className="km-osm">
            <iframe
              title="Route map — Paro to Thimphu, Bhutan"
              src={osmSrc}
              loading="lazy"
              className="km-osm-frame"
            />
            <div className="km-osm-badge">
              <MapPin size={12} /> Paro · Bhutan
            </div>
          </div>

          {/* stylized animated SVG summary overlay */}
          <div className="km-svgmap">
            <svg viewBox="0 0 420 460" className="km-svg" role="img" aria-label="Stylized route">
              <defs>
                <radialGradient id="kmGlow" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#1a1a1f" />
                  <stop offset="100%" stopColor="#09090b" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="420" height="460" fill="url(#kmGlow)" />

              {/* faint grid */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 60}
                  x2="420"
                  y2={i * 60}
                  stroke="#ffffff"
                  strokeOpacity="0.04"
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 60}
                  y1="0"
                  x2={i * 60}
                  y2="460"
                  stroke="#ffffff"
                  strokeOpacity="0.04"
                />
              ))}

              {/* dashed animated route */}
              <path
                d="M90 90 C 150 150, 130 220, 210 250 S 300 330, 330 390"
                stroke={MAGENTA}
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="9 7"
                strokeLinecap="round"
                className="km-flow"
              />

              {/* moving plane */}
              <g className="km-plane">
                <Plane size={18} color="#ffffff" />
              </g>

              {/* pins */}
              {[
                { x: 90, y: 90, label: 'Paro (PBH)' },
                { x: 210, y: 250, label: "Tiger's Nest" },
                { x: 330, y: 390, label: 'Thimphu' },
              ].map((p, i) => (
                <g key={p.label}>
                  <circle cx={p.x} cy={p.y} r="15" fill={MAGENTA} fillOpacity="0.16" className="km-pulse" />
                  <circle cx={p.x} cy={p.y} r="8" fill={i === 1 ? MAGENTA : '#27272a'} />
                  <circle cx={p.x} cy={p.y} r="3.5" fill="#ffffff" />
                  <text
                    x={p.x + 18}
                    y={p.y + 4}
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight={700}
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="km-svg-legend">
              <div className="km-legend-item">
                <span className="km-legend-label">Distance</span>
                <span className="km-legend-val">~65 km loop</span>
              </div>
              <span className="km-legend-div" />
              <div className="km-legend-item">
                <span className="km-legend-label">Transport</span>
                <span className="km-legend-val">Private SUV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Scoped styles (responsive via media queries)
   ───────────────────────────────────────────────────────────── */

const scopedCss = `
.km-timeline-shell{
  background:${PAPER};
  border:1px solid ${BORDER};
  border-radius:28px;
  padding:28px;
  box-shadow:0 12px 40px -20px rgba(9,9,11,0.18);
}
.km-timeline-head{
  display:flex; align-items:flex-end; justify-content:space-between;
  gap:16px; flex-wrap:wrap; margin-bottom:24px;
}
.km-eyebrow{
  display:inline-flex; align-items:center; gap:6px;
  font-size:11px; font-weight:800; letter-spacing:.14em; text-transform:uppercase;
  color:${MAGENTA}; margin-bottom:8px;
}
.km-eyebrow-dark{ color:${MAGENTA}; }
.km-title{
  font-size:24px; font-weight:800; letter-spacing:-.02em; color:${INK}; margin:0;
}
.km-summary{
  display:flex; align-items:center; gap:10px;
  font-size:13px; color:#52525b; font-weight:600;
}
.km-summary strong{ color:${INK}; font-weight:800; }
.km-summary-dot{ width:4px; height:4px; border-radius:50%; background:#d4d4d8; }

.km-timeline-body{ display:grid; grid-template-columns:220px 1fr; gap:24px; }

/* left rail */
.km-rail{ display:flex; flex-direction:column; gap:8px; position:sticky; top:16px; align-self:start; }
.km-rail-item{
  display:flex; align-items:center; gap:12px; width:100%;
  background:#fafafa; border:1px solid ${BORDER}; border-radius:16px;
  padding:12px 14px; cursor:pointer; text-align:left;
  transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
}
.km-rail-item:hover{ transform:translateY(-1px); box-shadow:0 8px 24px -16px rgba(9,9,11,.35); }
.km-rail-item.is-active{
  background:${INK}; border-color:${INK};
  box-shadow:0 14px 30px -16px rgba(9,9,11,.5);
}
.km-rail-index{
  flex:0 0 auto; width:26px; height:26px; border-radius:9px;
  display:flex; align-items:center; justify-content:center;
  font-size:13px; font-weight:800; color:${INK}; background:#ececee;
}
.km-rail-item.is-active .km-rail-index{ background:${MAGENTA}; color:#fff; }
.km-rail-text{ display:flex; flex-direction:column; min-width:0; flex:1; }
.km-rail-name{ font-size:14px; font-weight:700; color:${INK}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.km-rail-date{ font-size:11px; font-weight:600; color:#a1a1aa; }
.km-rail-item.is-active .km-rail-name{ color:#fff; }
.km-rail-item.is-active .km-rail-date{ color:${ASH}; }
.km-rail-count{
  flex:0 0 auto; font-size:11px; font-weight:800; color:#71717a;
  background:#fff; border:1px solid ${BORDER}; border-radius:8px; padding:2px 7px;
}
.km-rail-item.is-active .km-rail-count{ background:rgba(255,255,255,.14); border-color:transparent; color:#fff; }

/* right stops */
.km-stops-head{ display:flex; align-items:center; gap:10px; margin-bottom:18px; flex-wrap:wrap; }
.km-badge{
  font-size:11px; font-weight:800; letter-spacing:.08em; text-transform:uppercase;
  color:${INK}; background:#f4f4f5; border:1px solid ${BORDER};
  border-radius:100px; padding:5px 12px;
}
.km-headline{ font-size:15px; font-weight:600; color:#52525b; }

.km-track{ display:flex; flex-direction:column; }

.km-stop{
  display:grid; grid-template-columns:72px 40px 1fr; align-items:stretch; gap:6px;
  background:${PAPER}; border:1px solid ${BORDER}; border-radius:18px;
  padding:14px 16px; position:relative;
  transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  box-shadow:0 6px 18px -14px rgba(9,9,11,.22);
}
.km-stop.is-hover{
  transform:translateY(-2px);
  border-color:#dcdce0;
  box-shadow:0 18px 40px -20px rgba(9,9,11,.4);
}
.km-stop-time{ display:flex; flex-direction:column; justify-content:center; }
.km-time{ font-size:13px; font-weight:800; color:${INK}; }
.km-date{ font-size:10px; font-weight:600; color:#a1a1aa; }
.km-node-col{ display:flex; flex-direction:column; align-items:center; }
.km-node{
  width:32px; height:32px; border-radius:10px; flex:0 0 auto;
  display:flex; align-items:center; justify-content:center;
  background:${INK}; color:#fff;
  transition:background .18s ease;
}
.km-stop.is-hover .km-node{ background:${MAGENTA}; }
.km-line{ width:2px; flex:1; background:${BORDER}; margin-top:4px; min-height:8px; }
.km-stop-main{ display:flex; flex-direction:column; gap:3px; min-width:0; }
.km-stop-top{ display:flex; align-items:center; gap:10px; }
.km-cat{
  font-size:10px; font-weight:800; letter-spacing:.1em; text-transform:uppercase;
  color:${MAGENTA};
}
.km-rating{
  display:inline-flex; align-items:center; gap:4px;
  font-size:12px; font-weight:800; color:${INK};
}
.km-stop-title{ font-size:16px; font-weight:700; color:${INK}; margin:0; letter-spacing:-.01em; }
.km-stop-meta{ display:inline-flex; align-items:center; gap:5px; font-size:13px; color:#71717a; margin:0; font-weight:500; }

.km-drive{ display:flex; align-items:center; gap:0; padding:8px 0 8px 76px; }
.km-drive-rail{ width:36px; height:2px; background:repeating-linear-gradient(90deg,#d4d4d8 0 5px,transparent 5px 10px); }
.km-drive-chip{
  display:inline-flex; align-items:center; gap:6px;
  font-size:12px; font-weight:700; color:#52525b;
  background:#fafafa; border:1px solid ${BORDER}; border-radius:100px; padding:5px 12px;
}

/* ── map band ── */
.km-map-band{
  margin-top:24px; background:${INK}; border-radius:28px;
  padding:32px; color:#fff; overflow:hidden;
  border:1px solid #1f1f23;
}
.km-map-head{ display:flex; align-items:flex-start; justify-content:space-between; gap:20px; flex-wrap:wrap; margin-bottom:24px; }
.km-map-title{ font-size:26px; font-weight:800; letter-spacing:-.02em; color:#fff; margin:0 0 8px; }
.km-map-sub{ font-size:14px; line-height:1.6; color:${ASH}; margin:0; max-width:460px; }
.km-gmaps{
  display:inline-flex; align-items:center; gap:7px; flex:0 0 auto;
  font-size:13px; font-weight:800; color:#fff; text-decoration:none;
  background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.14);
  border-radius:100px; padding:10px 16px;
  transition:background .18s ease, border-color .18s ease;
}
.km-gmaps:hover{ background:${MAGENTA}; border-color:${MAGENTA}; }

.km-map-grid{ display:grid; grid-template-columns:1.15fr 1fr; gap:16px; }

.km-osm{ position:relative; border-radius:20px; overflow:hidden; border:1px solid #27272a; min-height:360px; background:#111; }
.km-osm-frame{ width:100%; height:100%; min-height:360px; border:0; display:block; filter:grayscale(.2) contrast(1.02); }
.km-osm-badge{
  position:absolute; top:14px; left:14px;
  display:inline-flex; align-items:center; gap:6px;
  font-size:11px; font-weight:800; color:#fff;
  background:rgba(9,9,11,.82); border:1px solid #27272a; border-radius:100px; padding:6px 12px;
  backdrop-filter:blur(6px);
}

.km-svgmap{ position:relative; border-radius:20px; overflow:hidden; border:1px solid #27272a; background:#09090b; min-height:360px; display:flex; flex-direction:column; }
.km-svg{ width:100%; height:100%; flex:1; display:block; }
.km-svg-legend{
  position:absolute; bottom:14px; left:14px; right:14px;
  display:flex; align-items:center; gap:18px;
  background:rgba(9,9,11,.82); border:1px solid #27272a; border-radius:14px;
  padding:12px 16px; backdrop-filter:blur(6px);
}
.km-legend-item{ display:flex; flex-direction:column; gap:2px; }
.km-legend-label{ font-size:10px; font-weight:700; color:${ASH}; text-transform:uppercase; letter-spacing:.08em; }
.km-legend-val{ font-size:14px; font-weight:800; color:#fff; }
.km-legend-div{ width:1px; height:28px; background:#27272a; }

@keyframes kmFlow{ to{ stroke-dashoffset:-320; } }
.km-flow{ animation:kmFlow 14s linear infinite; }
@keyframes kmPulse{ 0%,100%{ opacity:.5; transform:scale(1); } 50%{ opacity:1; transform:scale(1.25); } }
.km-pulse{ transform-box:fill-box; transform-origin:center; animation:kmPulse 3s ease-in-out infinite; }
@keyframes kmPlaneMove{
  0%{ transform:translate(82px,80px) rotate(45deg); }
  50%{ transform:translate(200px,240px) rotate(70deg); }
  100%{ transform:translate(320px,380px) rotate(60deg); }
}
.km-plane{ animation:kmPlaneMove 12s ease-in-out infinite alternate; }

@media (max-width:860px){
  .km-timeline-body{ grid-template-columns:1fr; }
  .km-rail{ position:static; flex-direction:row; overflow-x:auto; padding-bottom:4px; }
  .km-rail-item{ flex:0 0 auto; min-width:180px; }
  .km-map-grid{ grid-template-columns:1fr; }
}
@media (max-width:560px){
  .km-timeline-shell{ padding:20px; border-radius:22px; }
  .km-map-band{ padding:22px; border-radius:22px; }
  .km-stop{ grid-template-columns:58px 34px 1fr; padding:12px; }
  .km-drive{ padding-left:58px; }
  .km-title{ font-size:20px; }
  .km-map-title{ font-size:21px; }
}
@media (prefers-reduced-motion:reduce){
  .km-flow,.km-pulse,.km-plane{ animation:none; }
}
`;

'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Camera,
  Hotel,
  Utensils,
  Mountain,
  Plane,
  Star,
  MapPin,
  Clock,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────────────────────────────────── */

export type PlaceCategory = 'SIGHTSEEING' | 'HOTEL' | 'FOOD' | 'ACTIVITY';
export type PartOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

/** Icon per day (arrival → ascent → explore), cycles for longer trips. */
const DAY_ICONS = [Plane, Mountain, MapPin, Camera] as const;
const dayIconFor = (i: number) => DAY_ICONS[i % DAY_ICONS.length];

export interface ItineraryPlace {
  photoUrl: string;
  cat: PlaceCategory;
  name?: string;
  rating?: number;
  reviews?: string;
  address?: string;
  why?: string;
  about?: string;
  dress?: string;
  booking?: string;
}

export interface ItineraryEntry {
  label: string;
  copy: string;
  place: ItineraryPlace;
}

export interface ItinerarySection {
  part: PartOfDay;
  title: string;
  time: string;
  entries: ItineraryEntry[];
}

export interface ItineraryDay {
  name: string;
  badge: string;
  headline: string;
  blurb: string;
  chips: { t: string }[];
  sections: ItinerarySection[];
  image?: string;
}

export interface ItineraryProps {
  days: ItineraryDay[];
}

/* ────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS
   ──────────────────────────────────────────────────────────────────────── */

const OBSIDIAN = '#09090b';
const IRON = '#3f3f46';
const FOG = '#71717a';
const PAPER = '#f4f4f5';
const HAIRLINE = '#ececee';
const MAGENTA = '#fe45e2';

const GLOSSY_DARK_BUTTON: React.CSSProperties = {
  background: '#09090b',
  color: '#fff',
  borderRadius: '14px',
  border: '0.5px solid rgba(255,255,255,0.2)',
  boxShadow:
    'rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0',
};

/* ────────────────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────────────────── */

/** Strip a leading emoji / symbol + optional spaces from a badge string. */
function stripLeadingEmoji(badge: string): string {
  return badge.replace(
    /^[\s☀-➿←-⇿⬀-⯿️ -⁯☀☁◐◑◒◓▲►◉⌂➤✈✦♥▤◔⏱⛁]+/u,
    '',
  ).trim();
}

/** Sentence-case a shouty title like "MORNING" -> "Morning". */
function toSentenceCase(s: string): string {
  const lower = s.trim().toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const FLIGHT_CODE = /\b([A-Z]{2}\d{2,4})\b/;
const ROUTE = /\b([A-Z]{3})\s*(?:→|->|to)\s*([A-Z]{3})\b/;

function isFlightEntry(entry: ItineraryEntry): boolean {
  return entry.label.includes('KB') || FLIGHT_CODE.test(entry.label);
}

interface FlightInfo {
  code: string;
  from: string;
  to: string;
  fromCity: string;
  toCity: string;
  depTime: string;
  duration: string;
  notes: string;
}

const CITY_BY_CODE: Record<string, string> = {
  DEL: 'Delhi',
  PBH: 'Paro',
  BKK: 'Bangkok',
  HAN: 'Hanoi',
  DXB: 'Dubai',
  KUL: 'Kuala Lumpur',
};

function parseFlight(entry: ItineraryEntry, section: ItinerarySection): FlightInfo {
  const code = FLIGHT_CODE.exec(entry.label)?.[1] ?? 'KB205';
  const routeMatch = ROUTE.exec(entry.label);
  const from = routeMatch?.[1] ?? 'DEL';
  const to = routeMatch?.[2] ?? 'PBH';
  const depTime = section.time.split(/[–-]/)[0]?.trim() || '06:00';
  return {
    code,
    from,
    to,
    fromCity: CITY_BY_CODE[from] ?? from,
    toCity: CITY_BY_CODE[to] ?? to,
    depTime,
    duration: '2h 15m',
    notes: entry.copy,
  };
}

/** Pick the header image for a day: explicit image, else first hotel/sightseeing photo. */
function pickDayImage(day: ItineraryDay): string {
  if (day.image) return day.image;
  const all = day.sections.flatMap((s) => s.entries);
  const preferred =
    all.find((e) => e.place.cat === 'HOTEL' || e.place.cat === 'SIGHTSEEING') ?? all[0];
  return preferred?.place.photoUrl ?? '';
}

/** Reliable Himalaya/Bhutan fallbacks for dead source image URLs. */
const IMG_FALLBACKS = [
  'https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1000&q=80',
  'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=1000&q=80',
  'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1000&q=80',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&q=80',
];
function handleImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget;
  if (el.dataset.fbk) return;
  el.dataset.fbk = '1';
  const idx = (el.alt ? el.alt.length : 0) % IMG_FALLBACKS.length;
  el.src = IMG_FALLBACKS[idx];
}

/* ────────────────────────────────────────────────────────────────────────
   ICON BADGES
   ──────────────────────────────────────────────────────────────────────── */

interface TimeOfDayStyle {
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  gradient: string;
  iconColor: string;
}

const TIME_OF_DAY: Record<PartOfDay, TimeOfDayStyle> = {
  morning: {
    Icon: Sunrise,
    gradient: 'linear-gradient(135deg,#fde68a,#fbbf24)',
    iconColor: '#7c4a03',
  },
  afternoon: {
    Icon: Sun,
    gradient: 'linear-gradient(135deg,#bae6fd,#38bdf8)',
    iconColor: '#075985',
  },
  evening: {
    Icon: Sunset,
    gradient: 'linear-gradient(135deg,#fed7aa,#fb7185)',
    iconColor: '#9f1239',
  },
  night: {
    Icon: Moon,
    gradient: 'linear-gradient(135deg,#c7d2fe,#3730a3)',
    iconColor: '#eef2ff',
  },
};

export function TimeOfDayIcon({ part }: { part: PartOfDay }) {
  const style = TIME_OF_DAY[part] ?? TIME_OF_DAY.morning;
  const { Icon } = style;
  return (
    <span
      style={{
        width: '36px',
        height: '36px',
        flexShrink: 0,
        borderRadius: '11px',
        background: style.gradient,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px -3px rgba(0,0,0,0.18)',
      }}
    >
      <Icon size={18} color={style.iconColor} strokeWidth={2.4} />
    </span>
  );
}

const CATEGORY_ICON: Record<PlaceCategory, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  SIGHTSEEING: Camera,
  HOTEL: Hotel,
  FOOD: Utensils,
  ACTIVITY: Mountain,
};

export function ItemIcon({ cat, flight = false }: { cat: PlaceCategory; flight?: boolean }) {
  const Icon = flight ? Plane : CATEGORY_ICON[cat] ?? Camera;
  return (
    <span
      style={{
        width: '30px',
        height: '30px',
        flexShrink: 0,
        borderRadius: '9px',
        background: '#fff',
        border: `1px solid ${HAIRLINE}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon size={15} color={IRON} strokeWidth={2} />
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   FLIGHT / BOARDING-PASS CARD
   ──────────────────────────────────────────────────────────────────────── */

function FlightCard({ flight }: { flight: FlightInfo }) {
  return (
    <div
      className="kv-flight-card"
      style={{
        background: '#fff',
        borderRadius: '16px',
        border: `1px solid ${HAIRLINE}`,
        overflow: 'hidden',
        boxShadow: '0 12px 30px -18px rgba(9,9,11,0.26)',
      }}
    >
      {/* header: airline + flight no + duration */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: `1px solid ${PAPER}` }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: OBSIDIAN, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Plane size={14} color="#fff" strokeWidth={2.2} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: OBSIDIAN, letterSpacing: '-.01em', lineHeight: 1.15 }}>Druk Air</div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: FOG }}>Flight {flight.code}</div>
        </div>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '99px', background: PAPER, border: `1px solid ${HAIRLINE}`, fontSize: '11px', fontWeight: 700, color: IRON, whiteSpace: 'nowrap' }}>
          <Clock size={12} color={IRON} /> {flight.duration} · Nonstop
        </span>
      </div>

      {/* route with animated plane */}
      <div style={{ padding: '18px 20px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '26px', fontWeight: 800, color: OBSIDIAN, letterSpacing: '-.02em', lineHeight: 1 }}>{flight.from}</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: FOG, marginTop: '5px' }}>{flight.depTime} · {flight.fromCity}</div>
          </div>

          <div className="kv-flightpath" style={{ flex: 1, position: 'relative', height: '34px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '2%', right: '2%', borderTop: `2px dashed ${HAIRLINE}` }} />
            <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translate(-50%,-50%)', width: '8px', height: '8px', borderRadius: '50%', background: OBSIDIAN }} />
            <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translate(50%,-50%)', width: '8px', height: '8px', borderRadius: '50%', background: OBSIDIAN }} />
            {/* animated plane */}
            <div className="kv-fly" style={{ position: 'absolute', top: '50%' }}>
              <div className="kv-fly-bob" style={{ width: '30px', height: '30px', marginLeft: '-15px', marginTop: '-15px', borderRadius: '50%', background: '#fff', border: `1px solid ${HAIRLINE}`, boxShadow: '0 5px 14px -4px rgba(9,9,11,0.32)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plane size={14} color={OBSIDIAN} strokeWidth={2.2} />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: OBSIDIAN, letterSpacing: '-.02em', lineHeight: 1 }}>{flight.to}</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: FOG, marginTop: '5px' }}>{flight.toCity}</div>
          </div>
        </div>

        {/* flying tip */}
        <div style={{ marginTop: '14px', padding: '12px 0 4px', borderTop: `1px solid ${PAPER}`, fontSize: '12px', lineHeight: 1.5, color: IRON, fontWeight: 500 }}>
          <span style={{ fontWeight: 800, color: OBSIDIAN }}>Flying tip.</span> {flight.notes}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   EVENT CARD
   ──────────────────────────────────────────────────────────────────────── */

function EventCard({ entry }: { entry: ItineraryEntry }) {
  const { place, label, copy } = entry;
  return (
    <div
      className="kv-event-card"
      style={{
        display: 'flex',
        background: '#fff',
        borderRadius: '16px',
        border: `1px solid ${HAIRLINE}`,
        overflow: 'hidden',
        boxShadow: '0 10px 26px -18px rgba(9,9,11,0.22)',
      }}
    >
      {/* Thumbnail */}
      <div className="kv-event-thumb" style={{ width: '128px', flexShrink: 0, position: 'relative', background: PAPER }}>
        <img
          src={place.photoUrl}
          alt={label}
          onError={handleImgError}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '100%' }}
        />
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '15px 17px', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '7px' }}>
          <ItemIcon cat={place.cat} />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '.04em',
              color: FOG,
            }}
          >
            {toSentenceCase(place.cat)}
          </span>
          {place.rating !== undefined && (
            <span
              style={{
                marginLeft: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '12px',
                fontWeight: 700,
                color: OBSIDIAN,
              }}
            >
              <Star size={12} fill="#f59e0b" color="#f59e0b" /> {place.rating}
            </span>
          )}
        </div>

        <div style={{ fontSize: '15px', fontWeight: 700, color: OBSIDIAN, letterSpacing: '-.01em', lineHeight: 1.3 }}>
          {label}
        </div>

        <p style={{ fontSize: '13px', color: IRON, lineHeight: 1.55, margin: '5px 0 0', fontWeight: 500 }}>
          {copy}
        </p>

        {place.address && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '9px',
              fontSize: '11.5px',
              color: FOG,
              fontWeight: 500,
            }}
          >
            <MapPin size={11} /> {place.address}
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   DAY HEADER (image + scrim + frosted blur panel)
   ──────────────────────────────────────────────────────────────────────── */

function DayHeader({ day, index = 0 }: { day: ItineraryDay; index?: number }) {
  const image = pickDayImage(day);
  const badge = stripLeadingEmoji(day.badge);
  const BadgeIcon = dayIconFor(index);

  return (
    <div
      className="kv-day-header"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '220px',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '26px',
        boxShadow: '0 22px 50px -26px rgba(9,9,11,0.5)',
      }}
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={day.headline}
          onError={handleImgError}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* Frosted blur panel — feathered from the LEFT (text region frosts, image stays sharp on the right) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          background:
            'linear-gradient(103deg, rgba(9,9,11,0.8) 0%, rgba(9,9,11,0.58) 34%, rgba(9,9,11,0.18) 56%, rgba(9,9,11,0) 74%)',
          maskImage: 'linear-gradient(103deg, #000 0%, #000 44%, rgba(0,0,0,0.4) 64%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(103deg, #000 0%, #000 44%, rgba(0,0,0,0.4) 64%, transparent 80%)',
        }}
      />
      {/* Mild overall scrim for bottom legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.1) 45%, rgba(9,9,11,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', padding: '24px', color: '#fff', width: '100%' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            background: 'rgba(255,255,255,0.16)',
            border: '1px solid rgba(255,255,255,0.28)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            borderRadius: '99px',
            padding: '6px 13px 6px 11px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '.01em',
            marginBottom: '12px',
          }}
        >
          <BadgeIcon size={13} />
          {badge.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>

        <h2
          style={{
            fontSize: '30px',
            fontWeight: 800,
            letterSpacing: '-.025em',
            lineHeight: 1.12,
            margin: '0 0 8px',
            color: '#fff',
            textShadow: '0 2px 18px rgba(0,0,0,0.3)',
          }}
        >
          {day.headline}
        </h2>

        <p
          style={{
            fontSize: '13.5px',
            lineHeight: 1.55,
            color: 'rgba(255,255,255,0.86)',
            margin: '0 0 14px',
            fontWeight: 500,
            maxWidth: '640px',
          }}
        >
          {day.blurb}
        </p>

        {/* Glass chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {day.chips.map((chip, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.26)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '99px',
                padding: '6px 13px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              {chip.t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   SECTION
   ──────────────────────────────────────────────────────────────────────── */

function SectionBlock({ section }: { section: ItinerarySection }) {
  return (
    <div style={{ marginBottom: '26px' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '14px' }}>
        <TimeOfDayIcon part={section.part} />
        <span style={{ fontSize: '17px', fontWeight: 800, color: OBSIDIAN, letterSpacing: '-.01em' }}>
          {toSentenceCase(section.title)}
        </span>
        {section.time && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12.5px',
              fontWeight: 600,
              color: FOG,
            }}
          >
            <Clock size={12} /> {section.time}
          </span>
        )}
      </div>

      {/* Entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {section.entries.map((entry, i) =>
          isFlightEntry(entry) ? (
            <FlightCard key={i} flight={parseFlight(entry, section)} />
          ) : (
            <EventCard key={i} entry={entry} />
          ),
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   ROOT
   ──────────────────────────────────────────────────────────────────────── */

const SCOPED_STYLES = `
.kv-itinerary { width: 100%; }
.kv-day-scrubber {
  position: sticky; top: 56px; z-index: 30;
  display: flex; gap: 8px; overflow-x: auto;
  padding: 12px 0; margin-bottom: 8px;
  background: rgba(244,244,245,0.86); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  scrollbar-width: none;
}
.kv-day-scrubber::-webkit-scrollbar { display: none; }
.kv-day-tab {
  flex-shrink: 0; white-space: nowrap; cursor: pointer;
  display: inline-flex; align-items: center;
  padding: 9px 15px; border-radius: 12px;
  background: #fff; color: #3f3f46; border: 1px solid #ececee;
  font-size: 13px; font-weight: 700; font-family: inherit;
  transition: all 180ms ease-out;
}
.kv-day-tab.is-active { background: #09090b; color: #fff; border-color: #09090b; }

/* Fun flight animation — plane glides along the route + gentle bob */
.kv-fly { animation: kvFly 3.6s ease-in-out infinite; }
.kv-fly-bob { animation: kvBob 1.7s ease-in-out infinite; }
@keyframes kvFly {
  0%   { left: 4%;  opacity: 0; }
  12%  { opacity: 1; }
  86%  { opacity: 1; }
  100% { left: 96%; opacity: 0; }
}
@keyframes kvBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@media (prefers-reduced-motion: reduce) {
  .kv-fly { left: 50%; animation: none; }
  .kv-fly-bob { animation: none; }
}
@media (max-width: 560px) { .kv-day-tab-sub { display: none; } }

/* Smooth hover on activity / hotel event cards */
.kv-event-card { transition: transform .32s cubic-bezier(0.16,1,0.3,1), box-shadow .32s ease, border-color .32s ease; will-change: transform; }
.kv-event-card:hover { transform: translateY(-3px); box-shadow: 0 20px 42px -22px rgba(9,9,11,0.4); border-color: #d4d4d8; }
.kv-event-card .kv-event-thumb img { transition: transform .55s cubic-bezier(0.16,1,0.3,1); }
.kv-event-card:hover .kv-event-thumb img { transform: scale(1.07); }
@media (prefers-reduced-motion: reduce) {
  .kv-event-card, .kv-event-card .kv-event-thumb img { transition: none; }
  .kv-event-card:hover { transform: none; }
  .kv-event-card:hover .kv-event-thumb img { transform: none; }
}
@media (max-width: 640px) {
  .kv-day-header h2 { font-size: 24px !important; }
  .kv-day-header { padding: 0 !important; }
  .kv-event-card { flex-direction: column; }
  .kv-event-thumb { width: 100% !important; height: 150px; }
  .kv-flight-card { flex-direction: column; }
  .kv-flight-fields { grid-template-columns: repeat(2, 1fr) !important; }
  .kv-notch-t, .kv-notch-b { display: none !important; }
  .kv-flight-stub {
    width: 100% !important;
    border-left: 0 !important;
    border-top: 2px dashed ${HAIRLINE} !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    padding: 14px 20px !important;
  }
}
`;

export function Itinerary({ days }: ItineraryProps) {
  const dayRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeDay, setActiveDay] = useState(0);

  const scrollToDay = (i: number) => {
    dayRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = dayRefs.current.indexOf(e.target as HTMLElement);
            if (idx >= 0) setActiveDay(idx);
          }
        });
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );
    dayRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [days]);

  return (
    <div className="kv-itinerary">
      <style>{SCOPED_STYLES}</style>

      {/* Sticky day scrubber */}
      <div className="kv-day-scrubber">
        {days.map((day, i) => {
          const DayIcon = dayIconFor(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => scrollToDay(i)}
              className={`kv-day-tab${activeDay === i ? ' is-active' : ''}`}
            >
              <DayIcon size={13} style={{ marginRight: '7px', flexShrink: 0 }} />
              Day {i + 1}<span className="kv-day-tab-sub"> · {day.headline.split(' ').slice(0, 3).join(' ')}</span>
            </button>
          );
        })}
      </div>

      {days.map((day, i) => (
        <section
          key={i}
          ref={(el) => { dayRefs.current[i] = el; }}
          style={{ marginBottom: '44px', scrollMarginTop: '116px' }}
        >
          <DayHeader day={day} index={i} />
          {day.sections.map((section, sIdx) => (
            <SectionBlock key={sIdx} section={section} />
          ))}
        </section>
      ))}
    </div>
  );
}

export default Itinerary;

/* Keep the glossy-dark button token exported-adjacent for reuse by callers. */
export { GLOSSY_DARK_BUTTON };

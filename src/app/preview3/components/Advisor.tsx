'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award, Globe, Star, ArrowRight, Check, ShieldCheck } from 'lucide-react';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export type Review = {
  name: string;
  initials?: string;
  text: string;
  rating: number;
  when: string;
  avatar?: string;
};

export type AdvisorProps = {
  name: string;
  photo: string;
  title: string;
  bio: string;
  years: number;
  trips: number;
  satisfaction: number;
  responseTime: string;
  expertise: string[];
  reviews: Review[];
  onAsk?: () => void;
  onCustomize?: () => void;
  // Agency ("About" section) — all optional; section hides gracefully if agencyName absent.
  agencyName?: string;
  agencyAbout?: string;
  agencyLogo?: string;
};

/* ─────────────────────────────────────────────
   Palette (neutral awesomic DNA)
───────────────────────────────────────────── */
const OBSIDIAN = '#09090b';
const IRON = '#3f3f46';
const FOG = '#71717a';
const HAIRLINE = '#ececee';
const PAPER = '#f4f4f5';
const GOLD = '#f59e0b'; // review stars only

const GLOSSY_DARK: React.CSSProperties = {
  background: '#09090b',
  color: '#fff',
  borderRadius: '14px',
  border: '0.5px solid rgba(255,255,255,0.2)',
  boxShadow:
    'rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0',
};

/* ─────────────────────────────────────────────
   Scoped styles
───────────────────────────────────────────── */
const ADVISOR_CSS = `
@keyframes ky-adv-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.ky-adv-root { color: ${OBSIDIAN}; }

/* Compact bento: 3 columns, portrait smaller */
.ky-adv-bento {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 14px;
}
/* Portrait on the left spans both rows */
.ky-adv-portrait { grid-row: span 2; }

.ky-adv-reviews {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.ky-adv-lift { transition: transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s cubic-bezier(0.16,1,0.3,1); }
.ky-adv-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08), 0 0 0 1.5px rgba(0,0,0,0.02); z-index: 10; }

.ky-adv-btn { transition: transform .18s ease, box-shadow .2s ease; }
.ky-adv-btn:hover { transform: translateY(-1px); }

@media (max-width: 1024px) {
  .ky-adv-bento { grid-template-columns: 1fr 1fr; gap: 10px; }
  .ky-adv-portrait { grid-column: span 2; grid-row: span 1; min-height: 240px; }
  .ky-adv-reviews { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .ky-adv-about { flex-direction: column !important; align-items: flex-start !important; }
}
@media (max-width: 640px) {
  .ky-adv-bento { grid-template-columns: 1fr 1fr; gap: 10px; }
  .ky-adv-portrait { grid-column: span 2; min-height: 200px; }
  .ky-adv-reviews { grid-template-columns: 1fr; }
  .ky-adv-actions { flex-direction: column !important; }
  .ky-adv-actions > button { width: 100% !important; }
}
`;

/* ─────────────────────────────────────────────
   CountUp (viewport-triggered)
───────────────────────────────────────────── */
function CountUp({ end, suffix = '', duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const start = Date.now();
          const step = () => {
            const p = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
  const clamped = Math.max(0, Math.min(5, rating));
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-label={`${clamped} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < Math.round(clamped);
        return (
          <Star
            key={i}
            size={size}
            color={filled ? GOLD : '#d4d4d8'}
            fill={filled ? GOLD : 'none'}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stat tile
───────────────────────────────────────────── */
function StatTile({
  icon,
  value,
  suffix,
  label,
  accent,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  accent?: string;
}) {
  return (
    <div
      className="ky-adv-tile ky-adv-lift"
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '20px',
        border: `1px solid ${HAIRLINE}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '118px',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '12px',
          background: accent ?? PAPER,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '14px',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '34px', fontWeight: 800, color: OBSIDIAN, letterSpacing: '-.03em', lineHeight: 1 }}>
          <CountUp end={value} suffix={suffix} />
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: FOG, marginTop: '5px' }}>{label}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Review card (Google-review styling)
───────────────────────────────────────────── */
function ReviewCard({ review }: { review: Review }) {
  const initials = review.initials ?? initialsFrom(review.name);
  return (
    <div
      style={{
        background: '#fff',
        border: `1px solid ${HAIRLINE}`,
        borderRadius: '18px',
        padding: '24px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {/* header: avatar + name + verified chip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
        ) : (
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: PAPER,
              border: `1px solid ${HAIRLINE}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 800,
              color: IRON,
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
        )}
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: OBSIDIAN, lineHeight: 1.2 }}>{review.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <StarRow rating={review.rating} />
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#a1a1aa' }}>{review.when}</span>
          </div>
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: PAPER,
            border: `1px solid ${HAIRLINE}`,
            borderRadius: '100px',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 700,
            color: FOG,
            flexShrink: 0,
          }}
        >
          <ShieldCheck size={12} color={IRON} />
          Verified
        </div>
      </div>

      {/* body */}
      <p style={{ fontSize: '14px', color: IRON, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function Advisor(props: AdvisorProps) {
  const {
    name,
    photo,
    title,
    bio,
    years,
    trips,
    satisfaction,
    expertise,
    reviews,
    onAsk,
    onCustomize,
    agencyName,
    agencyAbout,
    agencyLogo,
  } = props;

  const firstName = name.split(/\s+/)[0] ?? name;

  // Agency logo mark: first letter of agencyLogo, else first letter of agencyName.
  const agencyMark = (agencyLogo?.trim()?.[0] ?? agencyName?.trim()?.[0] ?? '')?.toUpperCase();

  // Trust chips: sensible defaults, always shown alongside the agency name.
  const agencyChips = ['Since 2009', `${trips.toLocaleString()}+ trips`, 'YC-backed'];

  return (
    <section
      className="ky-adv-root"
      style={{ background: PAPER, padding: '64px 40px' }}
    >
      <style>{ADVISOR_CSS}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              color: FOG,
              textTransform: 'none',
              letterSpacing: '.15em',
              marginBottom: '8px',
            }}
          >
            Your Travel Advisor
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-.02em', color: OBSIDIAN, margin: 0 }}>
            Why travelers choose {firstName}
          </h2>
        </div>

        {/* Bento */}
        <div className="ky-adv-bento" style={{ marginBottom: '0' }}>
          {/* Center portrait — compact, left side */}
          <div
            className="ky-adv-portrait ky-adv-lift"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              background: '#e4e4e7',
              minHeight: '180px',
              border: `1px solid ${HAIRLINE}`,
              display: 'flex',
              cursor: 'default',
            }}
          >
            <img
              src={photo}
              alt={name}
              style={{ width: '110px', height: '100%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: 'grayscale(15%)' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 20%, rgba(9,9,11,0.88) 90%)',
              }}
            />

            {/* Compact badge */}
            <div style={{ position: 'absolute', top: '12px', right: '12px', width: '48px', height: '48px' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={10} color="#fff" />
                </div>
              </div>
              <svg style={{ width: '100%', height: '100%', animation: 'ky-adv-spin 20s linear infinite' }} viewBox="0 0 100 100">
                <path id="ky-adv-badge-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                <text fontWeight="800" fill="#fff" fontSize="8" letterSpacing="1.2">
                  <textPath href="#ky-adv-badge-path">CERTIFIED · SPECIALIST · ✦ · </textPath>
                </text>
              </svg>
            </div>

            {/* Name + bio overlay on right side */}
            <div style={{ position: 'absolute', top: '0', bottom: '0', left: '110px', right: '0', padding: '16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
              <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '2px' }}>{name}</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#d4d4d8', textTransform: 'none', letterSpacing: '.06em', marginBottom: '8px' }}>
                {title}
              </div>
              <p style={{ fontSize: '12px', color: '#d4d4d8', margin: 0, fontWeight: 500, lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{bio}</p>
            </div>
          </div>

          {/* Years */}
          <StatTile
            icon={<Award size={18} color={OBSIDIAN} />}
            value={years}
            suffix="+"
            label="Years"
          />

          {/* Trips */}
          <StatTile
            icon={<Globe size={18} color={OBSIDIAN} />}
            value={trips}
            suffix="+"
            label="Trips"
          />

          {/* Expertise */}
          <div
            className="ky-adv-tile ky-adv-lift"
            style={{
              gridColumn: 'span 2',
              background: '#fff',
              borderRadius: '16px',
              padding: '16px',
              border: `1px solid ${HAIRLINE}`,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: '10px',
                fontWeight: 800,
                color: '#a1a1aa',
                textTransform: 'none',
                letterSpacing: '.12em',
                marginBottom: '10px',
              }}
            >
              Expertise
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {expertise.slice(0, 4).map((tag, i) => {
                const filled = i < 2;
                return (
                  <span
                    key={`${tag}-${i}`}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '100px',
                      background: filled ? OBSIDIAN : '#fff',
                      color: filled ? '#fff' : IRON,
                      border: filled ? '1px solid transparent' : `1px solid ${HAIRLINE}`,
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
              {expertise.length > 4 && (
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: PAPER,
                    color: FOG,
                    border: `1px solid ${HAIRLINE}`,
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  +{expertise.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* About the agency — logo-forward trust card */}
        {agencyName ? (
          <div
            className="ky-adv-about ky-adv-lift"
            style={{
              background: '#fff',
              border: `1px solid ${HAIRLINE}`,
              borderRadius: '22px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              marginTop: '18px',
              marginBottom: '64px',
              position: 'relative',
            }}
          >
            {/* Logo mark */}
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '20px',
                background: `linear-gradient(160deg, ${OBSIDIAN} 0%, #27272a 100%)`,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '38px',
                fontWeight: 800,
                letterSpacing: '-.02em',
                flexShrink: 0,
                border: '0.5px solid rgba(255,255,255,0.14)',
                boxShadow: 'rgba(255,255,255,0.35) 0 0.5px 0 0 inset, rgba(0,0,0,0.18) 0 6px 14px -4px',
              }}
            >
              {agencyMark || '★'}
            </div>

            {/* Copy + chips */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: FOG,
                  letterSpacing: '.15em',
                  marginBottom: '6px',
                }}
              >
                About the agency
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-.02em', color: OBSIDIAN, marginBottom: '8px' }}>
                {agencyName}
              </div>
              <p style={{ fontSize: '14px', color: IRON, lineHeight: 1.6, margin: '0 0 14px', fontWeight: 500, maxWidth: '58ch' }}>
                {agencyAbout ??
                  `${agencyName} pairs on-the-ground expertise with obsessive planning, so every itinerary is built around how you actually like to travel.`}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {agencyChips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      background: PAPER,
                      border: `1px solid ${HAIRLINE}`,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: IRON,
                    }}
                  >
                    <Check size={12} color={IRON} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="ky-adv-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
              <button
                className="ky-adv-btn p3-shine"
                type="button"
                onClick={onAsk}
                style={{
                  ...GLOSSY_DARK,
                  padding: '13px 22px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Ask {firstName}
                <ArrowRight size={16} />
              </button>
              <button
                className="ky-adv-btn"
                type="button"
                onClick={onCustomize}
                style={{
                  background: '#fff',
                  color: OBSIDIAN,
                  border: `1px solid ${HAIRLINE}`,
                  borderRadius: '14px',
                  padding: '13px 22px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Customize
              </button>
            </div>
          </div>
        ) : (
          // No agency: keep the CTA reachable directly under the bento.
          <div
            className="ky-adv-actions"
            style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '18px', marginBottom: '64px' }}
          >
            <button
              className="ky-adv-btn p3-shine"
              type="button"
              onClick={onAsk}
              style={{
                ...GLOSSY_DARK,
                padding: '13px 22px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Ask {firstName}
              <ArrowRight size={16} />
            </button>
            <button
              className="ky-adv-btn"
              type="button"
              onClick={onCustomize}
              style={{
                background: '#fff',
                color: OBSIDIAN,
                border: `1px solid ${HAIRLINE}`,
                borderRadius: '14px',
                padding: '13px 22px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Customize
            </button>
          </div>
        )}

        {/* Reviews */}
        <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-.02em', color: OBSIDIAN, margin: 0 }}>
            What travelers say
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: FOG, fontSize: '13px', fontWeight: 600 }}>
            <StarRow rating={5} size={15} />
            <span>
              {satisfaction}% satisfaction · {reviews.length} verified reviews
            </span>
          </div>
        </div>

        <div className="ky-adv-reviews">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

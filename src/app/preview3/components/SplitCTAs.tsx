'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Shared design tokens (NEUTRAL awesomic DNA)                        */
/* ------------------------------------------------------------------ */

const OBSIDIAN = '#09090b';
const IRON = '#3f3f46';
const FOG = '#71717a';
const HAIRLINE = '#ececee';
const MAGENTA = '#fe45e2';

const glossyDarkButton: React.CSSProperties = {
  background: '#09090b',
  color: '#fff',
  borderRadius: '14px',
  border: '0.5px solid rgba(255,255,255,0.2)',
  boxShadow:
    'rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '-0.01em',
};

const cardShell = (accent?: string): React.CSSProperties => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '420px',
  background: '#fff',
  border: `1px solid ${HAIRLINE}`,
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: accent
    ? `0 1px 2px rgba(9,9,11,0.04), 0 24px 48px -24px rgba(9,9,11,0.18), 0 0 0 0.5px ${accent}22, 0 32px 80px -40px ${accent}33`
    : '0 1px 2px rgba(9,9,11,0.04), 0 24px 48px -24px rgba(9,9,11,0.18)',
});

const eyebrowStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  color: FOG,
  textTransform: 'none',
};

const headingStyle: React.CSSProperties = {
  margin: '14px 0 0',
  fontSize: 'clamp(30px, 4.2vw, 44px)',
  lineHeight: 1.02,
  fontWeight: 600,
  letterSpacing: '-0.03em',
  color: OBSIDIAN,
};

const paragraphStyle: React.CSSProperties = {
  margin: '16px 0 0',
  fontSize: '15px',
  lineHeight: 1.55,
  color: IRON,
  maxWidth: '34ch',
};

const legalStyle: React.CSSProperties = {
  margin: '14px 0 0',
  fontSize: '12px',
  lineHeight: 1.45,
  color: FOG,
};

/* ------------------------------------------------------------------ */
/*  StartJourneyCard                                                   */
/* ------------------------------------------------------------------ */

export interface StartJourneyCardProps {
  agencyName: string;
  onSubmit?: (email: string) => void;
}

export function StartJourneyCard({ agencyName, onSubmit }: StartJourneyCardProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    onSubmit?.(email.trim());
  };

  return (
    <section className="sj-card" style={cardShell()}>
      <style>{`
        .sj-card { }
        .sj-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255,255,255,0.28) 50%,
            transparent 100%
          );
          transform: skewX(-18deg);
          animation: sj-sweep 3.6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes sj-sweep {
          0%, 60% { left: -60%; }
          100% { left: 130%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sj-shine::after { animation: none; }
        }
        @media (max-width: 720px) {
          .sj-card {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .sj-media {
            order: -1;
            min-height: 180px;
            border-radius: 0 !important;
          }
          .sj-media-fade { display: none !important; }
          .sj-content { padding: 28px 24px !important; }
          .sj-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>

      {/* LEFT — content */}
      <div
        className="sj-content"
        style={{
          padding: '44px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <span style={eyebrowStyle}>{agencyName}</span>
        <h2 style={headingStyle}>
          Plan your{' '}
          <span style={{ color: '#c4c4cc', fontWeight: 600 }}>journey</span>
        </h2>
        <p style={paragraphStyle}>
          Plan a trip of your own with Wanderlust Experts. Share your email and the agency will follow up about your travel plans, dates, availability, and next steps.
        </p>

        <form
          onSubmit={handleSubmit}
          className="sj-row"
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '22px',
            alignItems: 'center',
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            aria-label="Email address"
            style={{
              flex: 1,
              minWidth: 0,
              height: '46px',
              padding: '0 14px',
              fontSize: '15px',
              color: OBSIDIAN,
              background: '#fff',
              border: `1px solid ${HAIRLINE}`,
              borderRadius: '14px',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            className="sj-shine"
            style={{
              ...glossyDarkButton,
              position: 'relative',
              overflow: 'hidden',
              height: '46px',
              padding: '0 22px',
              whiteSpace: 'nowrap',
            }}
          >
            Send
          </button>
        </form>

        <p style={legalStyle}>
          By sending, you agree to our{' '}
          <span style={{ color: IRON, textDecoration: 'underline' }}>
            Privacy Policy
          </span>
          .
        </p>
      </div>

      {/* RIGHT — image */}
      <div
        className="sj-media"
        style={{
          position: 'relative',
          backgroundImage:
            "url('/hilsolman-mountains-10368354_1920.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="sj-media-fade"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.55) 22%, rgba(255,255,255,0) 55%)',
          }}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MakeItYoursCard — Dark Theme                                       */
/* ------------------------------------------------------------------ */

export interface MakeItYoursCardProps {
  onCustomize?: () => void;
}

export function MakeItYoursCard({ onCustomize }: MakeItYoursCardProps) {
  return (
    <section className="miy-card" style={{
      ...cardShell(),
      background: '#09090b',
      border: '1px solid #27272a',
    }}>
      <style>{`
        .miy-card { }
        .miy-cta {
          position: relative;
        }
        .miy-cta::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 18px;
          border: 1.5px solid ${MAGENTA};
          opacity: 0;
          animation: miy-ring 2.8s ease-out infinite;
          pointer-events: none;
        }
        @keyframes miy-ring {
          0% { opacity: 0.55; transform: scale(0.98); }
          70%, 100% { opacity: 0; transform: scale(1.06); }
        }
        .miy-arrow { transition: transform 0.25s ease; }
        .miy-cta:hover .miy-arrow { transform: translateX(3px); }
        @media (prefers-reduced-motion: reduce) {
          .miy-cta::before { animation: none; }
        }
        @media (max-width: 720px) {
          .miy-card {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .miy-media {
            order: -1;
            min-height: 160px;
          }
          .miy-media-fade { display: none !important; }
          .miy-content { padding: 28px 24px !important; }
        }
      `}</style>

      {/* LEFT — content (dark) */}
      <div
        className="miy-content"
        style={{
          position: 'relative',
          padding: '44px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Magenta glow orb */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${MAGENTA}30 0%, transparent 70%)`,
            filter: 'blur(20px)',
            pointerEvents: 'none',
          }}
        />

        <span style={{ ...eyebrowStyle, textTransform: 'none', color: MAGENTA }}>
          Fully customizable
        </span>
        <h2 style={{ ...headingStyle, color: '#fff' }}>
          Make it{' '}
          <span style={{ color: '#52525b', fontWeight: 600 }}>yours</span>
        </h2>
        <p style={{ ...paragraphStyle, color: '#a1a1aa' }}>
          Swap any stop, stretch a night, or reroute a whole leg. Every
          itinerary is a starting point — flex it until it fits the trip you
          actually want.
        </p>

        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            className="miy-cta"
            onClick={onCustomize}
            style={{
              ...glossyDarkButton,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              height: '48px',
              padding: '0 24px',
            }}
          >
            Customize this trip
            <ArrowRight className="miy-arrow" size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* RIGHT — image (Florian Schonbrunner style) */}
      <div
        className="miy-media"
        style={{
          position: 'relative',
          backgroundImage:
            "url('/florian-schonbrunner-rj6P1M_fz6M-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="miy-media-fade"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #09090b 0%, rgba(9,9,11,0.6) 20%, rgba(9,9,11,0.2) 50%)',
          }}
        />
        <div
          className="miy-media-fade"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(160deg, rgba(254,69,226,0.08) 0%, transparent 60%)`,
          }}
        />
      </div>
    </section>
  );
}

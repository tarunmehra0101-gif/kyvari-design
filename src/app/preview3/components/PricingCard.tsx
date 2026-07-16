'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Check,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  CreditCard,
  CalendarClock,
  FileText,
  Info,
  ShieldCheck,
} from 'lucide-react';

/* ─── Palette (NEUTRAL awesomic — paper card, white tiles, one dark accent tile) ─── */
const OBSIDIAN = '#09090b'; // headings + dark price tile
const IRON = '#3f3f46'; // body text
const FOG = '#71717a'; // muted
const PAPER = '#f4f4f5'; // card / soft tile bg
const WHITE = '#ffffff';
const HAIRLINE = '#ececee';
const CHECK_GREEN = '#22c55e';
const TILE_SHADOW = '0 1px 2px rgba(9,9,11,0.05), 0 8px 20px -14px rgba(9,9,11,0.18)';

type PriceMode = 'pp' | 'total';

export interface GoodToKnowItem {
  icon?: string;
  title: string;
  preview: string;
  text: string;
}

export interface PricingCardProps {
  pricePerPerson: number;
  priceTotal: number;
  travelers: string;
  /** When false, hide all prices and show a "Pricing on request" state. */
  showPrice: boolean;
  inclusions: string[];
  exclusions: string[];
  goodToKnow: GoodToKnowItem[];
  onBook?: () => void;
  onAsk?: () => void;
  agencyName: string;
  agentName: string;
}

/* Resolve a goodToKnow icon from its (optional) string name, else infer from title. */
function resolveIcon(item: GoodToKnowItem): LucideIcon {
  const key = (item.icon ?? item.title).toLowerCase();
  if (key.includes('deposit') || key.includes('payment') || key.includes('card')) return CreditCard;
  if (key.includes('cancel') || key.includes('refund')) return CalendarClock;
  if (key.includes('visa') || key.includes('passport') || key.includes('document')) return FileText;
  return Info;
}

function GoodToKnowRow({
  item,
  isOpen,
  onToggle,
}: {
  item: GoodToKnowItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const RowIcon = resolveIcon(item);
  return (
    <div style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '11px',
          padding: '11px 2px',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '9px',
            background: PAPER,
            border: `1px solid ${HAIRLINE}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <RowIcon size={15} color={IRON} />
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: OBSIDIAN }}>
            {item.title}
          </span>
          {!isOpen && (
            <span
              style={{
                display: 'block',
                fontSize: '12px',
                color: FOG,
                fontWeight: 500,
                marginTop: '1px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.preview}
            </span>
          )}
        </span>
        <ChevronDown
          size={15}
          color={FOG}
          style={{
            flexShrink: 0,
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {isOpen && (
        <p
          style={{
            margin: '0 2px 12px 41px',
            fontSize: '12.5px',
            lineHeight: 1.6,
            color: IRON,
            fontWeight: 500,
          }}
        >
          {item.text}
        </p>
      )}
    </div>
  );
}

export function PricingCard(props: PricingCardProps) {
  const {
    pricePerPerson,
    priceTotal,
    travelers,
    showPrice,
    inclusions,
    exclusions,
    goodToKnow,
    onBook,
    onAsk,
    agencyName,
    agentName,
  } = props;

  const [mode, setMode] = useState<PriceMode>('pp');
  const [openIdx, setOpenIdx] = useState<number>(0);

  const primaryAmount = mode === 'pp' ? pricePerPerson : priceTotal;

  const tileBase: React.CSSProperties = {
    background: WHITE,
    borderRadius: '18px',
    border: `1px solid ${HAIRLINE}`,
    boxShadow: TILE_SHADOW,
    padding: '22px',
  };

  return (
    <section className="kyvari-pricing">
      <style>{`
        .kyvari-pricing { box-sizing: border-box; }
        .kyvari-pricing * { box-sizing: border-box; }
        .kyvari-pricing__card {
          background: ${PAPER};
          border: 1px solid ${HAIRLINE};
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 18px 44px -20px rgba(9,9,11,0.22), 0 1px 2px rgba(0,0,0,0.04);
          padding: 18px;
        }
        .kyvari-pricing__grid {
          display: grid;
          grid-template-columns: 320px 1fr 1fr;
          grid-template-areas:
            "price included notincluded"
            "price goodtoknow goodtoknow";
          gap: 14px;
          align-items: stretch;
        }
        .kyvari-pricing__price { grid-area: price; }
        .kyvari-pricing__included { grid-area: included; }
        .kyvari-pricing__notincluded { grid-area: notincluded; }
        .kyvari-pricing__goodtoknow { grid-area: goodtoknow; }
        .kyvari-pricing__incgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px 16px;
        }
        .kyvari-pricing__book:hover { transform: translateY(-1px); }
        .kyvari-pricing__book:active { transform: translateY(0); }
        .kyvari-pricing__ask:hover { background: rgba(255,255,255,0.08); }
        .kyvari-pricing__shine {
          position: absolute;
          top: 0;
          left: -150%;
          width: 55%;
          height: 100%;
          background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
          transform: skewX(-20deg);
          animation: kyvariShine 3.6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes kyvariShine {
          0% { left: -150%; }
          55% { left: 150%; }
          100% { left: 150%; }
        }
        @media (max-width: 900px) {
          .kyvari-pricing__grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "price price"
              "included notincluded"
              "goodtoknow goodtoknow";
          }
        }
        @media (max-width: 560px) {
          .kyvari-pricing__grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "price"
              "included"
              "notincluded"
              "goodtoknow";
          }
          .kyvari-pricing__incgrid { grid-template-columns: 1fr; }
          .kyvari-pricing__price-amount { font-size: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .kyvari-pricing__shine { animation: none; }
        }
      `}</style>

      <div className="kyvari-pricing__card">
        {/* ─── Compact heading row ─── */}
        <div style={{ padding: '4px 6px 14px' }}>
          <h2
            style={{
              fontSize: '23px',
              fontWeight: 800,
              letterSpacing: '-.02em',
              color: OBSIDIAN,
              margin: 0,
            }}
          >
            What&apos;s included
          </h2>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: FOG, fontWeight: 500 }}>
            Transparent pricing — everything in your trip, at a glance.
          </p>
        </div>

        {/* ─── Bento grid ─── */}
        <div className="kyvari-pricing__grid">
          {/* ─── Price tile (dark accent) ─── */}
          <div
            className="kyvari-pricing__price"
            style={{
              background: OBSIDIAN,
              borderRadius: '18px',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: TILE_SHADOW,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              color: WHITE,
            }}
          >
            {showPrice ? (
              <>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '6px',
                  }}
                >
                  Estimated price
                </div>
                <div
                  className="kyvari-pricing__price-amount"
                  style={{
                    fontSize: '44px',
                    fontWeight: 800,
                    color: WHITE,
                    letterSpacing: '-.03em',
                    lineHeight: 1,
                  }}
                >
                  ${primaryAmount.toLocaleString()}
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.6)',
                      marginLeft: '6px',
                    }}
                  >
                    {mode === 'pp' ? 'pp' : 'total'}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 500,
                    marginTop: '8px',
                  }}
                >
                  Total ${priceTotal.toLocaleString()} · {travelers}
                </div>

                {/* Per-person / Total toggle */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '100px',
                    padding: '3px',
                    marginTop: '16px',
                  }}
                >
                  {(['pp', 'total'] as PriceMode[]).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      style={{
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '100px',
                        padding: '6px 13px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: mode === m ? OBSIDIAN : 'rgba(255,255,255,0.65)',
                        background: mode === m ? '#fff' : 'transparent',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {m === 'pp' ? 'Per person' : 'Total'}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '8px',
                  }}
                >
                  Pricing on request
                </div>
                <div
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: WHITE,
                    letterSpacing: '-.02em',
                    lineHeight: 1.3,
                  }}
                >
                  Contact your advisor for a tailored quote
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 500,
                    marginTop: '8px',
                  }}
                >
                  {travelers}
                </div>
              </>
            )}

            <p
              style={{
                fontSize: '12.5px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.55,
                margin: '16px 0 18px',
              }}
            >
              {agentName} at {agencyName} will confirm live fares and availability before any payment
              is processed.
            </p>

            {/* CTAs */}
            <div style={{ marginTop: 'auto' }}>
              <button
                type="button"
                className="kyvari-pricing__book"
                onClick={onBook}
                style={{
                  position: 'relative',
                  width: '100%',
                  background: '#09090b',
                  color: '#fff',
                  borderRadius: '14px',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  boxShadow:
                    'rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0',
                  padding: '13px 18px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.15s ease',
                }}
              >
                <span className="kyvari-pricing__shine" />
                Book this trip <ArrowRight size={16} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '10px',
                }}
              >
                <ShieldCheck size={13} color={CHECK_GREEN} />
                <span style={{ fontSize: '11.5px', fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}>
                  Secure booking · no payment until confirmed
                </span>
              </div>

              <button
                type="button"
                className="kyvari-pricing__ask"
                onClick={onAsk}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background 0.2s ease',
                }}
              >
                <MessageCircle size={16} /> Ask about this trip
              </button>
            </div>
          </div>

          {/* ─── Included tile ─── */}
          <div className="kyvari-pricing__included" style={tileBase}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                margin: '0 0 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                color: OBSIDIAN,
              }}
            >
              <Check size={16} color={CHECK_GREEN} strokeWidth={3} /> Included
            </h3>
            <div className="kyvari-pricing__incgrid">
              {inclusions.map((inc, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '13px',
                    color: IRON,
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-start',
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  <Check
                    size={14}
                    color={CHECK_GREEN}
                    strokeWidth={3}
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  {inc}
                </div>
              ))}
            </div>
          </div>

          {/* ─── Not included tile ─── */}
          <div className="kyvari-pricing__notincluded" style={tileBase}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                margin: '0 0 13px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                color: IRON,
              }}
            >
              <Info size={16} color={FOG} /> Not included
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {exclusions.map((exc, i) => (
                <span
                  key={i}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '100px',
                    background: PAPER,
                    border: `1px solid ${HAIRLINE}`,
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: FOG,
                  }}
                >
                  {exc}
                </span>
              ))}
            </div>
          </div>

          {/* ─── Good to know tile (integrated accordion) ─── */}
          {goodToKnow.length > 0 && (
            <div className="kyvari-pricing__goodtoknow" style={{ ...tileBase, padding: '18px 22px 6px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  margin: '0 0 6px',
                  color: OBSIDIAN,
                }}
              >
                Good to know
              </h3>
              {goodToKnow.map((item, i) => (
                <GoodToKnowRow
                  key={i}
                  item={item}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

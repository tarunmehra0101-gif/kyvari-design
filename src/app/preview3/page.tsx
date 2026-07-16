'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin, Calendar, Clock, Star, Users, CheckCircle, ArrowRight, Heart,
  Sun, Cloud, Briefcase, Car, Shield, ChevronDown, ChevronUp, MessageCircle,
  Plane, Hotel, Map as MapIcon, Share2, Bookmark, Camera, SlidersHorizontal, Navigation,
  ThermometerSun, Shirt, Lightbulb, X, Phone, Award, Globe, TrendingUp,
  ChevronLeft, ChevronRight, CreditCard, Info, Compass, Menu,
  Zap, Coffee, Mountain, Sunset, Eye
} from 'lucide-react';
import { days } from '../../data';
import { Itinerary, type ItineraryDay } from './components/Itinerary';
import { RouteMap, type RouteDay } from './components/RouteMap';
import { Advisor } from './components/Advisor';
import { PricingCard } from './components/PricingCard';
import { StartJourneyCard, MakeItYoursCard } from './components/SplitCTAs';
import AuthModal from '../../components/AuthModal';

/* ═══════════════════════════════════════════
   FONT + ANIMATIONS + RESPONSIVE CSS
   ═══════════════════════════════════════════ */
const PAGE_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format('woff2');font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format('woff2');font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}

* { box-sizing: border-box; }

/* Scroll reveal */
.p3-reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.p3-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.p3-reveal-d1 { transition-delay: 80ms; }
.p3-reveal-d2 { transition-delay: 160ms; }
.p3-reveal-d3 { transition-delay: 240ms; }
.p3-reveal-d4 { transition-delay: 320ms; }
.p3-reveal-d5 { transition-delay: 400ms; }

/* Hide scrollbar */
.p3-hide-scroll::-webkit-scrollbar { display: none; }
.p3-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }

/* Snap carousel */
.p3-snap {
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
}
.p3-snap > * {
  scroll-snap-align: center;
}

/* Bottom bar pill slide */
@keyframes p3PillSlide {
  from { transform: scaleX(0.8); opacity: 0; }
  to { transform: scaleX(1); opacity: 1; }
}

/* Subtle float */
@keyframes p3Float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Accordion height */
.p3-accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 240ms ease-out;
}
.p3-accordion.open {
  grid-template-rows: 1fr;
}
.p3-accordion > div {
  overflow: hidden;
}

/* Bottom sheet */
.p3-sheet-backdrop {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.5);
  opacity: 0;
  transition: opacity 220ms ease-out;
  pointer-events: none;
}
.p3-sheet-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}
.p3-sheet {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 1001;
  background: #fff;
  border-radius: 16px 16px 0 0;
  transform: translateY(100%);
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 85vh;
  overflow-y: auto;
}
.p3-sheet.open {
  transform: translateY(0);
}

/* ── AWESOMIC MOTION LAYER ── */

/* Scale-in reveal (for stat numbers / cards) */
.p3-pop {
  opacity: 0;
  transform: scale(0.94) translateY(10px);
  transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.34,1.56,0.64,1);
}
.p3-pop.visible { opacity: 1; transform: scale(1) translateY(0); }

/* Hover lift + tilt (interactive cards) */
.p3-lift { transition: transform 260ms cubic-bezier(0.16,1,0.3,1), box-shadow 260ms ease-out; will-change: transform; }
.p3-lift:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(9,9,11,0.14); }

.p3-tilt { transition: transform 300ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms ease-out; transform-style: preserve-3d; will-change: transform; }
.p3-tilt:hover { box-shadow: 0 24px 60px rgba(9,9,11,0.28); }

/* Ken-Burns slow zoom on carousel imagery */
.p3-kenburns { transition: transform 6s ease-out; }
.p3-tilt:hover .p3-kenburns { transform: scale(1.08); }

/* Infinite marquee */
@keyframes p3Marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.p3-marquee-track {
  display: flex; width: max-content; gap: 48px;
  animation: p3Marquee 26s linear infinite;
}
.p3-marquee-mask {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  overflow: hidden;
}

/* Animated gradient shift (CTA band) */
@keyframes p3GradShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
.p3-grad-anim { background-size: 200% 200%; animation: p3GradShift 12s ease infinite; }

/* Soft floating glow orb */
@keyframes p3OrbFloat { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(12px,-14px) scale(1.06); } }
.p3-orb { position: absolute; border-radius: 50%; filter: blur(38px); pointer-events: none; animation: p3OrbFloat 9s ease-in-out infinite; }

/* SVG route path draw-on */
.p3-path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1); }
.p3-path.visible { stroke-dashoffset: 0; }

/* Plane travels the path */
@keyframes p3PlaneFly { from { offset-distance: 0%; } to { offset-distance: 100%; } }
.p3-plane-fly.visible { animation: p3PlaneFly 1.6s cubic-bezier(0.65,0,0.35,1) forwards; }

/* Pulsing map dots */
@keyframes p3Pulse { 0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); } 70% { box-shadow: 0 0 0 10px rgba(255,255,255,0); } 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); } }
.p3-pulse { animation: p3Pulse 2.4s ease-out infinite; }

/* Staggered checklist check-in */
.p3-check { opacity: 0; transform: translateX(-8px); transition: opacity .4s ease-out, transform .4s cubic-bezier(0.16,1,0.3,1); }
.p3-check.visible { opacity: 1; transform: translateX(0); }

/* Value-viz bar grow */
.p3-bar-fill { width: 0; transition: width 1.1s cubic-bezier(0.16,1,0.3,1); }
.p3-bar-fill.visible { width: var(--bar-w, 0%); }

/* CTA shine sweep + pulse */
.p3-shine { position: relative; overflow: hidden; }
.p3-shine::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.28) 50%, transparent 72%);
  transform: translateX(-120%);
  animation: p3ShineSweep 4s ease-in-out infinite;
}
@keyframes p3ShineSweep { 0% { transform: translateX(-120%); } 45%,100% { transform: translateX(120%); } }

/* Snap-dot indicators */
.p3-dot { width: 6px; height: 6px; border-radius: 50%; background: #d4d4d8; transition: all 240ms ease-out; }
.p3-dot.active { width: 20px; border-radius: 4px; background: #09090b; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .p3-reveal, .p3-pop { transition: opacity 0.01ms; transform: none; }
  .p3-reveal.visible, .p3-pop.visible { transform: none; }
  .p3-accordion, .p3-sheet, .p3-sheet-backdrop, .p3-lift, .p3-tilt { transition: none; }
  .p3-marquee-track, .p3-grad-anim, .p3-orb, .p3-pulse, .p3-plane-fly { animation: none !important; }
  .p3-kenburns { transition: none; }
  .p3-path { transition: none; stroke-dashoffset: 0; }
  .p3-bar-fill { transition: none; width: var(--bar-w, 0%); }
  .p3-check { opacity: 1; transform: none; transition: none; }
}

/* ── LAYOUT / CONTAINER SYSTEM ── */
/* Every flow section is a centered max-width container (fixes desktop stretch) */
.p3-section-pad { max-width: 1160px; margin-left: auto; margin-right: auto; width: 100%; box-sizing: border-box; }
.p3-container { max-width: 1160px; margin-left: auto; margin-right: auto; width: 100%; }

/* Responsive bento grid (summary) — desktop 3-col, tablet 2-col, mobile 1-col */
.p3-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; grid-auto-rows: minmax(0, auto); }
.p3-bento .b-span2 { grid-column: span 2; }
.p3-bento .b-span3 { grid-column: span 3; }
.p3-bento .b-rows2 { grid-row: span 2; }
@media (max-width: 900px) {
  .p3-bento { grid-template-columns: repeat(2, 1fr); }
  .p3-bento .b-span3 { grid-column: span 2; }
  .p3-bento .b-rows2 { grid-row: auto; }
}
@media (max-width: 560px) {
  .p3-bento { grid-template-columns: 1fr; }
  .p3-bento .b-span2, .p3-bento .b-span3 { grid-column: span 1; }
  .p3-gtk { grid-template-columns: 1fr !important; }
  .p3-trip-detail { grid-template-columns: 1fr !important; }
}

/* Generic two-column section: side-by-side on desktop, stacked on mobile */
.p3-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
@media (max-width: 768px) { .p3-two { grid-template-columns: 1fr; } }

/* Responsive */
@media (max-width: 768px) {
  .p3-desktop-only { display: none !important; }
  .p3-hero-title { font-size: 32px !important; }
  .p3-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
  .p3-pricing-split { flex-direction: column !important; }
  .p3-day-event-row { flex-direction: column !important; }
  .p3-day-event-img { width: 100% !important; height: 180px !important; }
}
@media (min-width: 769px) {
  .p3-mobile-only { display: none !important; }
  /* larger hero + section rhythm on desktop */
  .p3-hero-title { font-size: 56px !important; }
  .p3-section-pad { padding-left: 40px !important; padding-right: 40px !important; }
}
@media (max-width: 480px) {
  .p3-hero-title { font-size: 28px !important; }
}
`;

/* ═══════════════════════════════════════════
   DATA / CONFIG
   ═══════════════════════════════════════════ */
const config = {
  agency_name: "Wanderlust Experts",
  agency_logo: "W",
  agent_name: "Riya Malhotra",
  agent_photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
  brand_color: "#09090b",       // obsidian — fully neutral, awesomic-authentic
  brand_spark: "#fe45e2",       // magenta-spark — used ONCE (single glow moment)
  booking_enabled: true,
  show_price: true,             // agent toggle: show pricing, or share without price
};

/* Signature awesomic glossy dark button (exact values from live awesomic.com) */
const awBtnPrimary: React.CSSProperties = {
  background: '#09090b', color: '#fff', borderRadius: '16px',
  border: '0.5px solid rgba(255,255,255,0.2)',
  boxShadow: 'rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0',
  cursor: 'pointer', fontWeight: 600,
};
const awBtnSecondary: React.CSSProperties = {
  background: '#fff', color: '#3f3f46', borderRadius: '16px',
  border: '1px solid #ececee', boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  cursor: 'pointer', fontWeight: 600,
};

const tripData = {
  title: "Bhutanese Bliss: A Himalayan Adventure",
  client: "Meera & Arjun's Honeymoon",
  subtitle: "Embark on an immersive journey blending wellness, spiritual discovery, and breathtaking scenery.",
  dates: "20–22 Jul",
  travelers: "2 Adults",
  duration: "7 days",
  pacing: "Moderate",
  pacing_effort: "~3–4 hrs walking/day",
  price_per_person: 1850,
  price_total: 3700,
  agent_bio: "15 years crafting luxury Himalayan trips. Specializes in wellness and cultural immersion.",
  agent_years: 15,
  agent_trips: 200,
  agent_satisfaction: 98,
  agent_response: "Under 2 hours",
  inclusions: ["All internal flights", "6 nights boutique stays", "Private English-speaking guide", "All entrance fees & permits", "Daily breakfast and 4 dinners", "Airport transfers"],
  exclusions: ["International flights", "Travel insurance", "Personal expenses"],
  goodToKnow: [
    { icon: "💰", title: "Deposit & Payment", preview: "25% deposit required", text: "A 25% deposit is required to secure your booking. The remaining balance is due 60 days before departure." },
    { icon: "↩", title: "Cancellation Policy", preview: "Refundable up to 90 days", text: "Fully refundable up to 90 days before departure. Flexible dates available upon request." },
    { icon: "🛂", title: "Visa Requirements", preview: "Bhutan visa included", text: "Bhutan visa is included in your package and will be arranged by our team. No embassy visit needed." },
  ],
  highlights: [
    { title: "Sunrise flight past Everest", description: "Catch first light hitting the highest peak on Earth from seat 12A.", photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", day: 1 },
    { title: "The Tiger's Nest climb", description: "Climb past waterfalls to the cliffside sanctuary pinned to the rock face.", photo: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80", day: 2 },
    { title: "A hot-stone bath under the stars", description: "Relax in warm river water infused with local medicinal herbs after the hike.", photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", day: 2 },
    { title: "Prayer flags at Dochula Pass", description: "Stand among 108 memorial chortens at 3,100 meters above the clouds.", photo: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80", day: 3 },
    { title: "Traditional archery in Thimphu", description: "Watch Bhutan's national sport played with ancient bows and modern cheers.", photo: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", day: 3 },
  ],
  hero_img: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1600&q=80",
  reviews: 64,
  testimonial: {
    quote: "Absolutely seamless experience. Riya understood exactly what we wanted for our honeymoon. The custom flight window suggestion was fantastic — we saw Everest at sunrise.",
    name: "Priya & Vikram",
    context: "Honeymoon · March 2024",
    rating: 5,
  },
};

const NAV_TABS = [
  { id: 'summary', label: 'Summary', icon: Compass },
  { id: 'days', label: 'Days', icon: Calendar },
  { id: 'map', label: 'Map', icon: MapIcon },
  { id: 'advisor', label: 'Advisor', icon: Heart },
  { id: 'price', label: 'Price', icon: CreditCard },
] as const;

const packingItems = [
  { item: "Trail shoes", why: "The Tiger's Nest hike has uneven stone paths — proper grip prevents slips." },
  { item: "Layered jacket", why: "Mornings can be 14°C even in July. Layers let you adjust as the day warms." },
  { item: "Temple cover-ups", why: "Shoulders and knees must be covered inside dzongs and monasteries." },
  { item: "SPF 50", why: "High altitude means stronger UV even on cloudy days. Reapply every 2 hours." },
  { item: "Reusable bottle", why: "Clean water refill stations at most stops. Reduces plastic waste in Bhutan." },
  { item: "Evening fleece", why: "Evenings drop below 12°C. The hotel terrace is magical but crisp." },
];

const customChips = [
  "Add luxury stay", "Reduce hiking intensity", "Add photography stops", "Swap to romantic spa day"
];

const totalExperiences = days.reduce((n, d) => n + d.stops.length, 0);

const advisorReviews = [
  { name: "Priya & Vikram", initials: "PV", rating: 5, when: "March 2024", text: "Absolutely seamless experience. Riya understood exactly what we wanted for our honeymoon. The custom flight window suggestion was fantastic — we saw Everest at sunrise." },
  { name: "The Kapoors", initials: "TK", rating: 5, when: "Nov 2023", text: "Every detail was handled. The boutique stays were stunning and the private guide made Bhutan come alive. We never once felt lost or rushed." },
  { name: "Aditya S.", initials: "AS", rating: 5, when: "Feb 2024", text: "Riya replied within an hour every single time. She rebuilt our whole Day 2 around a spa request without any fuss. Genuinely the best trip we've taken." },
  { name: "Meera R.", initials: "MR", rating: 4, when: "Jan 2024", text: "Beautiful itinerary and thoughtful pacing. The hot-stone bath under the stars was a highlight we'd never have found on our own." },
];

/* ═══════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════ */

function useRevealObserver(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    const targets = el.querySelectorAll('.p3-reveal, .p3-bar-fill, .p3-check');
    targets.forEach(t => observer.observe(t));
    return () => { targets.forEach(t => observer.unobserve(t)); };
  }, [containerRef]);
}

/* Single-element in-view observer → returns [ref, inView] */
function useInView<T extends HTMLElement>(threshold = 0.3): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* Count-up animated number */
function CountUp({ end, suffix = '', prefix = '', duration = 1400 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(end); return; }
    let raf = 0; const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* Pointer-tracked 3D tilt wrapper */
function TiltCard({ children, style, className = '', max = 8, onClick }: { children: React.ReactNode; style?: React.CSSProperties; className?: string; max?: number; onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} className={`p3-tilt ${className}`} style={style} onMouseMove={handleMove} onMouseLeave={reset} onClick={onClick}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════ */

function Accordion({ title, preview, icon, children }: { title: string; preview: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>{title}</div>
          <div style={{ fontSize: '12px', fontWeight: 500, color: '#71717a', marginTop: '2px' }}>{preview}</div>
        </div>
        <ChevronDown size={16} color="#a1a1aa" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 220ms ease-out', flexShrink: 0 }} />
      </button>
      <div className={`p3-accordion ${open ? 'open' : ''}`}>
        <div>
          <div style={{ padding: '0 20px 16px', fontSize: '13px', color: '#52525b', lineHeight: 1.6, fontWeight: 500 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionDark({ title, preview, icon, children }: { title: string; preview: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{title}</div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: '#71717a', marginTop: '1px' }}>{preview}</div>
        </div>
        <ChevronDown size={15} color="#71717a" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 220ms ease-out', flexShrink: 0 }} />
      </button>
      <div className={`p3-accordion ${open ? 'open' : ''}`}>
        <div>
          <div style={{ padding: '0 14px 14px', fontSize: '12px', color: '#a1a1aa', lineHeight: 1.6, fontWeight: 500 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisaCard({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p3-reveal p3-lift" style={{ position: 'relative', overflow: 'hidden', background: '#09090b', borderRadius: '20px', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 20px' }}>
      <Globe size={180} color="#fff" strokeWidth={0.6} style={{ position: 'absolute', bottom: '-40px', right: '-40px', opacity: 0.05, zIndex: 1, pointerEvents: 'none' }} />
      {/* header row — same layout as Local know-how accordion */}
      <button
        onClick={() => setOpen(!open)}
        style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '2px', width: '100%' }}
      >
        <span style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Shield size={18} color="#fff" /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>Visa information</div>
          <div style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 500, marginTop: '2px' }}>Bhutan visa included</div>
        </div>
        <ChevronDown size={17} color="#71717a" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 220ms ease-out' }} />
      </button>
      {/* Inline expand */}
      <div className={`p3-accordion ${open ? 'open' : ''}`} style={{ position: 'relative', zIndex: 2 }}>
        <div>
          <div style={{ padding: '12px 2px 2px 52px', fontSize: '12.5px', color: '#a1a1aa', lineHeight: 1.6, fontWeight: 500 }}>{text}</div>
        </div>
      </div>
    </div>
  );
}

function PackingChip({ item, why }: { item: string; why: string }) {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <button
        onClick={() => { setChecked(!checked); setExpanded(!expanded); }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 14px', borderRadius: '10px',
          background: checked ? `${config.brand_color}10` : '#f4f4f5',
          border: `1px solid ${checked ? config.brand_color + '30' : '#e4e4e7'}`,
          cursor: 'pointer', fontSize: '13px', fontWeight: 600,
          color: checked ? config.brand_color : '#3f3f46',
          transition: 'all 200ms ease-out',
        }}
      >
        <CheckCircle size={14} color={checked ? config.brand_color : '#a1a1aa'} />
        {item}
      </button>
      <div className={`p3-accordion ${expanded ? 'open' : ''}`}>
        <div>
          <div style={{ padding: '8px 0 0 22px', fontSize: '12px', color: '#71717a', lineHeight: 1.5, fontWeight: 500 }}>
            {why}
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ entry, section, isFirst, dayIdx }: { entry: any; section: any; isFirst: boolean; dayIdx: number }) {
  const [expanded, setExpanded] = useState(false);
  const isFlight = entry.place.cat === 'SIGHTSEEING' && entry.label.includes('KB');
  const isHotel = entry.place.cat === 'HOTEL';
  const catColors: Record<string, string> = {
    SIGHTSEEING: '#3f3f46', HOTEL: '#52525b', FOOD: '#3f3f46', ACTIVITY: '#18181b'
  };
  const catColor = catColors[entry.place.cat] || '#71717a';

  if (isFlight) {
    const parts = entry.label.split(' · ');
    const code = parts[0] || 'KB205';
    const route = parts[1] || 'DEL → PBH';
    return (
      <div className="p3-reveal" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e4e4e7', overflow: 'hidden' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plane size={14} color="#3b82f6" />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '.06em' }}>Flight</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#09090b' }}>{route.split('→')[0]?.trim() || 'DEL'}</span>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ height: '1px', flex: 1, background: '#e4e4e7' }} />
              <Plane size={12} color="#a1a1aa" />
              <div style={{ height: '1px', flex: 1, background: '#e4e4e7' }} />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#09090b' }}>{route.split('→')[1]?.trim() || 'PBH'}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#71717a', fontWeight: 500 }}>
            <span>{code}</span>
            <span>·</span>
            <span>{section.time}</span>
            <span>·</span>
            <span>2h 15m</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
            <span style={{ padding: '4px 10px', borderRadius: '8px', background: '#f0fdf4', fontSize: '11px', fontWeight: 700, color: '#15803d' }}>Window requested</span>
          </div>
        </div>
        {expanded && (
          <div style={{ padding: '0 20px 16px', borderTop: '1px solid #f4f4f5' }}>
            <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, margin: '12px 0 0', fontWeight: 500 }}>{entry.copy}</p>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '10px', background: '#fafafa', border: 'none', borderTop: '1px solid #f4f4f5', cursor: 'pointer', fontSize: '12px', fontWeight: 600, color: '#71717a' }}
        >
          {expanded ? 'Less' : 'Flight notes'} <ChevronDown size={12} style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
        </button>
      </div>
    );
  }

  // One-line summary: truncate copy to first sentence or 80 chars
  const shortCopy = entry.copy.length > 80 ? entry.copy.slice(0, 80).replace(/\s+\S*$/, '') + '…' : entry.copy;

  return (
    <div className="p3-reveal" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e4e4e7', overflow: 'hidden' }}>
      {/* Collapsed: compact row — type + name + time + one-line + metadata */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        {/* Thumbnail */}
        <div style={{ width: '48px', height: '48px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={entry.place.photoUrl} alt={entry.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: `${catColor}14`, fontSize: '9px', fontWeight: 800, color: catColor, textTransform: 'uppercase', letterSpacing: '.04em' }}>{entry.place.cat}</span>
            <span style={{ fontSize: '11px', fontWeight: 500, color: '#a1a1aa' }}>{section.time}</span>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#09090b', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{entry.label}</div>
          <div style={{ fontSize: '12px', color: '#71717a', fontWeight: 500, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{shortCopy}</div>
        </div>
        {/* Metadata + chevron */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {entry.place.rating && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#71717a', fontWeight: 600 }}>
              <Star size={10} fill="#f59e0b" color="#f59e0b" />{entry.place.rating}
            </span>
          )}
          <ChevronDown size={14} color="#a1a1aa" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease-out' }} />
        </div>
      </button>

      {/* Expanded: full details */}
      <div className={`p3-accordion ${expanded ? 'open' : ''}`}>
        <div>
          <div style={{ padding: '0 16px 16px', borderTop: '1px solid #f4f4f5' }}>
            {/* Full image */}
            <div style={{ borderRadius: '10px', overflow: 'hidden', marginTop: '12px', height: '160px' }}>
              <img src={entry.place.photoUrl} alt={entry.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Full copy */}
            <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, margin: '12px 0 0', fontWeight: 500 }}>{entry.copy}</p>
            {/* Why chosen */}
            {entry.place.why && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 12px', background: '#fffbeb', borderRadius: '10px', marginTop: '10px' }}>
                <Star size={13} color="#f59e0b" fill="#f59e0b" style={{ flexShrink: 0, marginTop: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#92400e', lineHeight: 1.4, fontStyle: 'italic' }}>{entry.place.why}</span>
              </div>
            )}
            {/* About */}
            {entry.place.about && (
              <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, margin: '10px 0 0', fontWeight: 500 }}>{entry.place.about}</p>
            )}
            {/* Address */}
            {entry.place.address && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '10px', fontSize: '12px', color: '#71717a', fontWeight: 500 }}>
                <MapPin size={11} /> {entry.place.address}
              </div>
            )}
            {/* Logistics chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
              {entry.place.rating && entry.place.reviews && <span style={{ padding: '4px 10px', borderRadius: '8px', background: '#f4f4f5', fontSize: '11px', fontWeight: 600, color: '#52525b' }}>⭐ {entry.place.rating} ({entry.place.reviews})</span>}
              {entry.place.dress && <span style={{ padding: '4px 10px', borderRadius: '8px', background: '#f4f4f5', fontSize: '11px', fontWeight: 600, color: '#52525b' }}>👔 {entry.place.dress}</span>}
              {entry.place.booking && <span style={{ padding: '4px 10px', borderRadius: '8px', background: '#f4f4f5', fontSize: '11px', fontWeight: 600, color: '#52525b' }}>📋 {entry.place.booking}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Cinematic animated route — SVG path draws on + plane flies when in view */
function CinematicRoute() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const D = "M24,88 C88,26 150,22 176,60 C200,96 258,104 300,62";
  const nodes = [
    { x: 24, y: 88, label: 'Paro', day: 1, icon: 'plane' },
    { x: 176, y: 60, label: "Tiger's Nest", day: 2, icon: 'mountain' },
    { x: 300, y: 62, label: 'Thimphu', day: 3, icon: 'pin' },
  ];
  return (
    <div ref={ref} style={{ position: 'relative', height: '150px', margin: '4px 0 8px' }}>
      <svg viewBox="0 0 324 130" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        {/* faint base track */}
        <path d={D} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 5" />
        {/* animated ember draw-on */}
        <path className={`p3-path ${inView ? 'visible' : ''}`} d={D} fill="none" stroke="url(#routeGrad)" strokeWidth="3" strokeLinecap="round" pathLength={1} />
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>
        </defs>
        {/* distance labels */}
        <text x="96" y="34" fill="#71717a" fontSize="9" fontWeight="700">64 km</text>
        <text x="236" y="102" fill="#71717a" fontSize="9" fontWeight="700">53 km</text>
      </svg>

      {/* flying plane */}
      <div className={`p3-plane-fly ${inView ? 'visible' : ''}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', offsetPath: `path('${D}')`, offsetRotate: 'auto' } as React.CSSProperties}>
        <div style={{ position: 'absolute', width: '26px', height: '26px', marginLeft: '-13px', marginTop: '-13px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }}>
          <Plane size={13} color="#09090b" style={{ transform: 'rotate(45deg)' }} />
        </div>
      </div>

      {/* node markers */}
      {nodes.map((n, i) => (
        <div key={i} style={{ position: 'absolute', left: `${(n.x / 324) * 100}%`, top: `${(n.y / 130) * 100}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 3 }}>
          <div className={i === 0 ? 'p3-pulse' : ''} style={{ width: '30px', height: '30px', borderRadius: '50%', background: i === 0 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.1)', border: i === 0 ? 'none' : '1.5px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            {(() => { const c = i === 0 ? '#09090b' : '#fff'; return n.icon === 'plane' ? <Plane size={13} color={c} /> : n.icon === 'mountain' ? <Mountain size={13} color={c} /> : <MapPin size={13} color={c} />; })()}
          </div>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#fff', marginTop: '6px', whiteSpace: 'nowrap' }}>{n.label}</div>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#71717a' }}>Day {n.day}</div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Preview3Page() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('summary');
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const highlightsRef = useRef<HTMLDivElement>(null);

  const handleHighlightScroll = () => {
    const el = highlightsRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0, min = Infinity;
    cards.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < min) { min = d; closest = i; }
    });
    setActiveHighlight(closest);
  };
  const [sheetOpen, setSheetOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [sheetContent, setSheetContent] = useState<React.ReactNode>(null);
  const [heroExited, setHeroExited] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useRevealObserver(containerRef);

  // Scroll handler
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const top = e.currentTarget.scrollTop;
    setScrollY(top);

    // Hero exit detection
    if (heroRef.current) {
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      setHeroExited(top > heroBottom * 0.6);
    }

    // Scroll spy for bottom bar
    const sectionOrder = ['summary', 'days', 'map', 'advisor', 'price'];
    let closest = 'summary';
    let minDist = Infinity;
    for (const id of sectionOrder) {
      const el = sectionRefs.current[id];
      if (el) {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - 120);
        if (dist < minDist) { minDist = dist; closest = id; }
      }
    }
    setActiveTab(closest);

    // Day spy
    const dayEls = Array.from(document.querySelectorAll('[data-day-idx]')) as HTMLElement[];
    let closestDay = 0;
    let minDayDist = Infinity;
    dayEls.forEach((el, i) => {
      const dist = Math.abs(el.getBoundingClientRect().top - 180);
      if (dist < minDayDist) { minDayDist = dist; closestDay = i; }
    });
    setActiveDayIndex(closestDay);
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el && containerRef.current) {
      const containerTop = containerRef.current.scrollTop;
      const elTop = el.offsetTop;
      containerRef.current.scrollTo({ top: elTop - 120, behavior: 'smooth' });
    }
  };

  const scrollToDay = (idx: number) => {
    const el = document.querySelector(`[data-day-idx="${idx}"]`) as HTMLElement;
    if (el && containerRef.current) {
      containerRef.current.scrollTo({ top: el.offsetTop - 160, behavior: 'smooth' });
    }
  };

  const openSheet = (content: React.ReactNode) => {
    setSheetContent(content);
    setSheetOpen(true);
  };

  const closeSheet = () => setSheetOpen(false);

  // Save / Love / auth-gated actions → open the sign-up screen (same as home2)
  const requireAuth = () => setAuthOpen(true);

  const headerOpaque = scrollY > 24;
  const showHeaderTitle = heroExited;

  return (
    <>
      <style>{PAGE_CSS}</style>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />

      {/* ─── STICKY HEADER ─── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '56px', zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
        background: headerOpaque ? 'rgba(244,244,245,0.92)' : 'transparent',
        backdropFilter: headerOpaque ? 'blur(12px)' : 'none',
        boxShadow: heroExited ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 180ms ease-out, box-shadow 180ms ease-out',
        fontFamily: 'Cosmic, sans-serif',
      }}>
        {/* Left: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '10px',
            background: headerOpaque ? config.brand_color : 'rgba(255,255,255,0.92)',
            color: headerOpaque ? '#fff' : '#09090b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 800,
            transition: 'background 180ms ease-out, color 180ms ease-out',
          }}>{config.agency_logo}</div>
          <span className="p3-desktop-only" style={{ fontSize: '13px', fontWeight: 700, color: headerOpaque ? '#09090b' : '#fff', textShadow: headerOpaque ? 'none' : '0 1px 8px rgba(0,0,0,0.4)', transition: 'color 180ms ease-out' }}>{config.agency_name}</span>
        </div>

        {/* Center: title (fades in after hero exits) */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          fontSize: '13px', fontWeight: 700, color: '#09090b',
          maxWidth: '260px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          opacity: showHeaderTitle ? 1 : 0,
          transition: 'opacity 220ms ease-out, transform 220ms ease-out',
        }}>
          {tripData.title}
        </div>

        {/* Right: actions (Save + Love) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {[{ Icon: Bookmark, label: 'Save' }, { Icon: Heart, label: 'Love' }].map(({ Icon, label }, i) => (
            <button key={i} onClick={requireAuth} aria-label={label} style={{ width: '36px', height: '36px', borderRadius: '10px', border: headerOpaque ? '1px solid #e4e4e7' : '1px solid rgba(255,255,255,0.25)', background: headerOpaque ? '#fff' : 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon size={16} color={headerOpaque ? '#3f3f46' : '#fff'} />
            </button>
          ))}
        </div>
      </div>

      {/* ─── BOTTOM JOURNEY BAR — Dark Theme ─── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(9,9,11,0.96)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '8px 12px 12px',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        fontFamily: 'Cosmic, sans-serif',
      }}>
        <style>{`
          .p3-nav-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            padding: 10px 14px;
            border-radius: 14px;
            border: none;
            cursor: pointer;
            background: transparent;
            transition: all 240ms cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            min-width: 56px;
          }
          .p3-nav-btn:hover {
            background: rgba(255,255,255,0.06);
          }
          .p3-nav-btn:active {
            transform: scale(0.92);
            background: rgba(254,69,226,0.15);
          }
          .p3-nav-btn.active {
            background: rgba(254,69,226,0.12);
          }
          @media (prefers-reduced-motion: reduce) {
            .p3-nav-btn, .p3-nav-btn:active { transition: none; transform: none; }
            .p3-nav-btn.active::before { display: none; }
          }
          .nav-label {
            font-size: 11px;
            font-weight: 600;
            color: #a1a1aa;
            transition: color 240ms;
          }
          .p3-nav-btn.active .nav-label {
            color: #fff;
          }
        `}</style>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', maxWidth: '500px', margin: '0 auto' }}>
          {NAV_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`p3-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection(tab.id)}
              >
                <Icon size={22} color={isActive ? '#fff' : '#71717a'} strokeWidth={isActive ? 2.2 : 1.8} />
                <span className="nav-label">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM SHEET ─── */}
      <div className={`p3-sheet-backdrop ${sheetOpen ? 'open' : ''}`} onClick={closeSheet} />
      <div className={`p3-sheet p3-hide-scroll ${sheetOpen ? 'open' : ''}`}>
        <div style={{ padding: '12px 0 4px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '4px', background: '#d4d4d8' }} />
        </div>
        <button onClick={closeSheet} style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '50%', background: '#f4f4f5', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <X size={16} color="#71717a" />
        </button>
        <div style={{ padding: '8px 24px 32px', fontFamily: 'Cosmic, sans-serif' }}>
          {sheetContent}
        </div>
      </div>

      {/* ─── MAIN SCROLLABLE CONTAINER ─── */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          height: '100vh', overflowY: 'auto', overflowX: 'hidden',
          fontFamily: 'Cosmic, sans-serif', color: '#09090b', background: '#f4f4f5',
          paddingBottom: '80px',
        }}
      >
        {/* ═══════ SECTION 1: HERO ═══════ */}
        <div ref={heroRef} style={{ position: 'relative' }}>
          {/* Hero media */}
          <div style={{ position: 'relative', height: '50svh', minHeight: '380px', maxHeight: '560px', overflow: 'hidden', borderRadius: '0 0 28px 28px' }}>
            <img
              src={tripData.hero_img}
              alt="Bhutan mountains"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%',
                transform: `scale(${1 + scrollY * 0.0002})`,
                transition: 'transform 100ms linear',
              }}
            />
            {/* Blur ONLY the left region (text sits here); right side of the image stays sharp */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 0, width: '58%',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              maskImage: 'linear-gradient(to right, #000 0%, #000 58%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, #000 0%, #000 58%, transparent 100%)',
            }} />
            {/* Dark scrim for text legibility (feathers away to the right) */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(103deg, rgba(9,9,11,0.72) 0%, rgba(9,9,11,0.5) 34%, rgba(9,9,11,0.12) 56%, rgba(9,9,11,0) 72%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(9,9,11,0.32) 100%)' }} />

            {/* Powered by Kyvari AI — bottom-right badge */}
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 6, display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '6px 13px 6px 8px', borderRadius: '100px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src="/kyvari-logo.png" alt="Kyvari" style={{ width: '20px', height: '20px', borderRadius: '5px', objectFit: 'contain' }} />
              <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#fff' }}>Powered by Kyvari AI</span>
            </div>

            {/* Hero content */}
            <div className="p3-section-pad" style={{ position: 'absolute', bottom: '96px', left: 0, right: 0, padding: '0 24px', zIndex: 5 }}>
              <div className="p3-reveal visible" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '12.5px', fontWeight: 600, color: '#fff', marginBottom: '18px' }}>
                <Heart size={13} fill="#fff" color="#fff" /> Made for {tripData.client}
              </div>
              <h1 className="p3-hero-title" style={{ fontSize: '40px', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.08, letterSpacing: '-0.03em', maxWidth: '640px' }}>
                {tripData.title}
              </h1>

              {/* Metadata chips */}
              <div className="p3-hide-scroll" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {[
                  { icon: MapPin, text: 'Bhutan & Nepal' },
                  { icon: Calendar, text: tripData.dates },
                  { icon: Users, text: tripData.travelers },
                  { icon: Clock, text: tripData.duration },
                ].map((chip, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 13px', borderRadius: '100px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.14)', fontSize: '12px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    <chip.icon size={13} color="#fff" strokeWidth={2.2} />
                    {chip.text}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Floating summary card */}
          <div className="p3-float-card" style={{ margin: '-48px auto 0', maxWidth: '760px', width: '100%', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box', position: 'relative', zIndex: 10 }}>
            <div style={{ background: '#fff', borderRadius: '24px', padding: '22px', boxShadow: '0 18px 44px -20px rgba(9,9,11,0.22), 0 1px 2px rgba(0,0,0,0.04)', border: '1px solid #ececee' }}>
              {/* Trip detail rows */}
              <div className="p3-trip-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 20px', marginBottom: '18px' }}>
                {[
                  { icon: Compass, label: 'Focus', value: 'Adventure & Wellness' },
                  { icon: TrendingUp, label: 'Travel pace', value: tripData.pacing },
                  { icon: Camera, label: 'Experiences', value: `${totalExperiences} activities, stays & dining`, span: true },
                ].map((r, i) => (
                  <div key={i} style={{ gridColumn: r.span ? 'span 2' : undefined, display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: '1px solid #f4f4f5' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#f4f4f5', border: '1px solid #ececee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><r.icon size={15} color="#3f3f46" /></span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#a1a1aa' }}>{r.label}</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#09090b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <button onClick={requireAuth} className="p3-shine" style={{ ...awBtnPrimary, width: '100%', padding: '13px', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '8px' }}>
                Customise this trip <ArrowRight size={15} />
              </button>
              {/* Secondary CTA row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { icon: Heart, label: 'Love this trip' },
                  { icon: MessageCircle, label: 'Ask Wanderlust' },
                  { icon: Share2, label: 'Share this trip' },
                ].map((b, i) => (
                  <button key={i} onClick={requireAuth} style={{ ...awBtnSecondary, padding: '10px 8px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <b.icon size={13} /> <span className="p3-desktop-only">{b.label}</span><span className="p3-mobile-only">{b.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Agency line + rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f4f4f5' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: config.brand_color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0 }}>{config.agency_logo}</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#52525b' }}>Curated by {config.agency_name} · {tripData.reviews} reviews</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '12px', fontWeight: 700, color: '#3f3f46' }}><Star size={12} fill="#f59e0b" color="#f59e0b" /> 4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ SECTION 2: SUMMARY ═══════ */}
        <div ref={el => { sectionRefs.current['summary'] = el; }} className="p3-section-pad p3-container" style={{ padding: '56px 24px 40px' }}>
          <h2 className="p3-reveal" style={{ fontSize: '26px', fontWeight: 800, color: '#09090b', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Trip at a glance</h2>
          <p className="p3-reveal" style={{ fontSize: '15px', color: '#71717a', margin: '0 0 20px', fontWeight: 500 }}>Everything you need to know before you go.</p>

          <div className="p3-bento">
            {/* Visa — square info tile, expands inline (same style as Local know-how) */}
            <VisaCard text={tripData.goodToKnow.find(g => g.title.includes('Visa'))?.text ?? ''} />

            {/* Weather — PHOTOGRAPHIC media card (sky) + oversized temp */}
            <div className="p3-reveal p3-tilt" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', minHeight: '230px', cursor: 'default' }}>
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="" className="p3-kenburns" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.82) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ThermometerSun size={16} color="#fff" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Weather · July</span>
                </div>
                <div>
                  <div style={{ fontSize: '52px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '8px' }}>22°<span style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginLeft: '6px' }}>avg</span></div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: '0 0 10px', fontWeight: 500 }}>Clear, cool mornings with sharp Himalayan light. Showers most afternoons — pack a light shell.</p>
                  <span style={{ display: 'inline-block', padding: '5px 11px', borderRadius: '100px', background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 700, color: '#fff' }}>Best for trekking visibility</span>
                </div>
              </div>
            </div>

            {/* Local know-how — DARK obsidian card, real icons */}
            <div className="p3-reveal p3-reveal-d1 p3-lift" style={{ position: 'relative', overflow: 'hidden', background: '#09090b', borderRadius: '20px', padding: '20px', border: '1px solid #27272a' }}>
              <div className="p3-orb" style={{ width: '130px', height: '130px', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)', bottom: '-50px', left: '-30px' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Lightbulb size={16} color="#fff" />
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>Local know-how</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <AccordionDark title="Temple etiquette" preview="Remove shoes, cover shoulders" icon={<Shirt size={15} color="#fff" />}>
                    Remove shoes before entering dzongs and monasteries. Shoulders and knees must be covered. Walk clockwise around prayer wheels — always.
                  </AccordionDark>
                  <AccordionDark title="Cultural note" preview="Gross National Happiness" icon={<Heart size={15} color="#fff" />}>
                    Bhutan measures Gross National Happiness, not GDP. Say &quot;shezu&quot; (thank you) when seated. Tipping is appreciated but not expected.
                  </AccordionDark>
                </div>
              </div>
            </div>

            {/* Packing — Light theme bento tile */}
            <div className="p3-reveal p3-reveal-d3 p3-lift b-span2" style={{ position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: '20px', border: '1px solid #e4e4e7', padding: '24px' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f4f4f5', border: '1px solid #e4e4e7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shirt size={20} color="#09090b" />
                  </div>
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#09090b', letterSpacing: '-0.01em' }}>What to pack</span>
                    <div style={{ fontSize: '12px', color: '#71717a', fontWeight: 500 }}>Tap any item to see why it matters for this trip</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {packingItems.map((p, i) => <PackingChip key={i} item={p.item} why={p.why} />)}
                </div>
              </div>
            </div>

            {/* Getting Around — with image */}
            <div className="p3-reveal p3-reveal-d4 p3-lift" style={{ position: 'relative', overflow: 'hidden', background: '#09090b', borderRadius: '20px', border: '1px solid #27272a', minHeight: '180px', display: 'flex', alignItems: 'flex-end' }}>
              <video autoPlay muted loop playsInline preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="/278839_medium.mp4" type="video/mp4" />
              </video>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,11,0.1) 0%, rgba(9,9,11,0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '20px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Car size={18} color="#fff" />
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>Getting around</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Private luxury SUV</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, margin: '0 0 12px', fontWeight: 500 }}>English-speaking guide for all transfers.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Wi-Fi', 'Private transfers', 'Airport pickup'].map((a, i) => (
                    <span key={i} style={{ padding: '4px 10px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 600, color: '#fff' }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stay — full-width media banner (spans 3) */}
            <div className="p3-reveal p3-reveal-d5 p3-lift b-span3" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', minHeight: '180px', display: 'flex', alignItems: 'flex-end' }}>
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="" className="p3-kenburns" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Luma-style blurred backdrop feathering from the LEFT (text region) */}
              <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(103deg, #000 0%, #000 46%, rgba(0,0,0,0.4) 66%, transparent 82%)', WebkitMaskImage: 'linear-gradient(103deg, #000 0%, #000 46%, rgba(0,0,0,0.4) 66%, transparent 82%)', background: 'linear-gradient(103deg, rgba(9,9,11,0.7) 0%, rgba(9,9,11,0.4) 40%, transparent 72%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,11,0.05) 0%, rgba(9,9,11,0.6) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '22px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Hotel size={16} color="#fff" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>Your stay</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '3px 9px', borderRadius: '100px', background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 800, color: '#fff' }}>
                    <Star size={11} fill="#f59e0b" color="#f59e0b" /> 4.5
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '21px', fontWeight: 800, color: '#fff', marginBottom: '5px', letterSpacing: '-0.01em' }}>Hotel Olathang</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: '8px' }}>
                      <MapPin size={12} /> P.Box No. 1214, Paro 12008, Bhutan
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Check-in 12:00', 'Check-out 11:00', '2 nights', 'Breakfast incl.'].map((t, i) => (
                        <span key={i} style={{ padding: '4px 10px', borderRadius: '8px', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '11px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 13px', borderRadius: '10px', cursor: 'pointer', flexShrink: 0 }}>
                    <MapIcon size={12} /> View on map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ SECTION 3: HIGHLIGHTS ═══════ */}
        <div className="p3-section-pad" style={{ padding: '32px 0 40px' }}>
          <div style={{ padding: '0 24px', marginBottom: '20px' }}>
            <h2 className="p3-reveal" style={{ fontSize: '22px', fontWeight: 800, color: '#09090b', margin: '0 0 4px' }}>Moments you&apos;ll remember</h2>
            <p className="p3-reveal" style={{ fontSize: '14px', color: '#71717a', margin: 0, fontWeight: 500 }}>The highlights of your journey.</p>
          </div>

          <div ref={highlightsRef} onScroll={handleHighlightScroll} className="p3-snap p3-hide-scroll" style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '0 24px', scrollPadding: '0 24px' }}>
            {tripData.highlights.map((h, i) => (
              <TiltCard
                key={i}
                max={5}
                className="p3-reveal"
                style={{
                  flex: '0 0 min(76vw, 264px)', borderRadius: '18px', overflow: 'hidden',
                  position: 'relative', height: '340px', cursor: 'pointer',
                }}
                onClick={() => scrollToDay(h.day - 1)}
              >
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                  <img src={h.photo} alt={h.title} className="p3-kenburns" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* bottom-feathered blur for text legibility */}
                <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to top, #000 0%, #000 24%, transparent 52%)', WebkitMaskImage: 'linear-gradient(to top, #000 0%, #000 24%, transparent 52%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,11,0.2) 0%, transparent 34%, transparent 46%, rgba(9,9,11,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', marginBottom: '5px' }}>Day {h.day}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{h.title}</h3>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 11px', borderRadius: '10px', backdropFilter: 'blur(6px)' }}>See the day <ArrowRight size={12} /></span>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* snap dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '20px' }}>
            {tripData.highlights.map((_, i) => (
              <div key={i} className={`p3-dot ${activeHighlight === i ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 4: DAYS ═══════ */}
        <div ref={el => { sectionRefs.current['days'] = el; }} className="p3-section-pad" style={{ padding: '40px 24px 40px' }}>
          <h2 className="p3-reveal" style={{ fontSize: '26px', fontWeight: 800, color: '#09090b', margin: '0 0 24px', letterSpacing: '-0.02em' }}>Your itinerary</h2>
          <Itinerary days={days as unknown as ItineraryDay[]} />
        </div>

        {/* ═══════ SECTION 5: ROUTE MAP ═══════ */}
        <div ref={el => { sectionRefs.current['map'] = el; }}>
          <RouteMap days={days as unknown as RouteDay[]} />
        </div>

        {/* ═══════ SECTION 6: ADVISOR ═══════ */}
        <div ref={el => { sectionRefs.current['advisor'] = el; }} className="p3-section-pad" style={{ padding: '48px 24px 40px' }}>
          <Advisor
            name={config.agency_name}
            photo={config.agent_photo}
            title="Certified Himalayan specialists"
            bio={tripData.agent_bio}
            years={tripData.agent_years}
            trips={tripData.agent_trips}
            satisfaction={tripData.agent_satisfaction}
            responseTime={tripData.agent_response}
            expertise={['Himalayan Treks', 'Wellness', 'Cultural Immersion', 'Luxury Stays', 'Honeymoons', 'Photography', 'Spiritual Journeys', 'Adventure']}
            reviews={advisorReviews}
            agencyName={config.agency_name}
            agencyLogo={config.agency_logo}
            agencyAbout="Wanderlust Experts has crafted immersive Himalayan and Southeast Asian journeys since 2009 — pairing every traveller with a certified specialist and boutique, locally-rooted stays. No mass tours, no filler: just trips shaped around how you actually want to travel."
            onAsk={requireAuth}
            onCustomize={requireAuth}
          />
        </div>

        {/* ═══════ SECTION 6.5: MAKE IT YOURS ═══════ */}
        <div className="p3-section-pad" style={{ padding: '8px 24px 40px' }}>
          <MakeItYoursCard onCustomize={requireAuth} />
        </div>

        {/* ═══════ SECTION 7: PRICING ═══════ */}
        <div ref={el => { sectionRefs.current['price'] = el; }} className="p3-section-pad" style={{ padding: '48px 24px 32px' }}>
          <PricingCard
            pricePerPerson={tripData.price_per_person}
            priceTotal={tripData.price_total}
            travelers={tripData.travelers}
            showPrice={config.show_price}
            inclusions={tripData.inclusions}
            exclusions={tripData.exclusions}
            goodToKnow={tripData.goodToKnow.filter(g => !g.title.includes('Visa'))}
            agencyName={config.agency_name}
            agentName={config.agent_name}
            onBook={requireAuth}
            onAsk={requireAuth}
          />
        </div>

        {/* ═══════ SECTION 8: START YOUR JOURNEY ═══════ */}
        <div className="p3-section-pad" style={{ padding: '8px 24px 44px' }}>
          <StartJourneyCard agencyName={config.agency_name} onSubmit={() => requireAuth()} />
        </div>

        {/* ═══════ FOOTER ═══════ */}
        <footer style={{ padding: '24px', borderTop: '1px solid #e4e4e7' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '12px', color: '#a1a1aa', fontWeight: 500 }}>
            <span>Crafted by <strong style={{ color: '#3f3f46', fontWeight: 700 }}>{config.agency_name}</strong></span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
              <img src="/kyvari-logo.png" alt="Kyvari" style={{ width: '18px', height: '18px', borderRadius: '5px', objectFit: 'contain' }} />
              <span style={{ color: '#3f3f46', fontWeight: 700 }}>Powered by Kyvari AI</span>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

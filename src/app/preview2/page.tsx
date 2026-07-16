'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Sparkles, MapPin, Calendar, Clock, Star, Users, CheckCircle, ArrowRight, Heart, 
  MoreHorizontal, Sun, Cloud, Briefcase, Car, Info, Shield, CreditCard, ChevronDown, 
  ChevronUp, MessageCircle, Navigation, Plane, Hotel, Map as MapIcon, ExternalLink, 
  RefreshCw, X, Share2, Clipboard, HeartHandshake, Compass, Award, Globe, Zap,
  ChevronLeft, ChevronRight, ThermometerSun, Shirt, Lightbulb, TrendingUp, Phone
} from 'lucide-react';
import { days } from '../../data';

/* ─── Cosmic Font & All Animations ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}

/* === KEYFRAME ANIMATIONS === */
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes floatBlobA {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -60px) scale(1.15); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}
@keyframes floatBlobB {
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  50% { transform: translate(-50px, 50px) scale(0.85); }
}
@keyframes spinBadge {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.4; }
  50% { transform: scale(1.08); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.4; }
}
@keyframes pathFlow {
  0% { stroke-dashoffset: 40; }
  100% { stroke-dashoffset: 0; }
}
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes gradientShine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes cloudDrift {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
}
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 1; }
}
@keyframes countPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

/* === SCROLL REVEAL === */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-reveal-delay-1 { transition-delay: 0.1s; }
.scroll-reveal-delay-2 { transition-delay: 0.2s; }
.scroll-reveal-delay-3 { transition-delay: 0.3s; }
.scroll-reveal-delay-4 { transition-delay: 0.4s; }

/* === UTILITY CLASSES === */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.ky-lightbox { animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1); }

/* 3D Card Tilt */
.tilt-card {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.5s;
}
.tilt-card:hover {
  transform: translateY(-6px) rotateX(1deg) rotateY(1deg);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
}

/* Dot grid patterns */
.dot-grid {
  background-image: radial-gradient(#d4d4d8 1px, transparent 1px);
  background-size: 16px 16px;
}
.dot-grid-dark {
  background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 16px 16px;
}

/* Gradient shine button */
.shine-btn {
  position: relative;
  overflow: hidden;
}
.shine-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s ease;
}
.shine-btn:hover::after {
  left: 120%;
}

/* Marquee */
.marquee-track {
  display: flex;
  gap: 64px;
  animation: marqueeScroll 30s linear infinite;
  width: max-content;
}
.marquee-track:hover { animation-play-state: paused; }

/* CSS Snap Carousel */
.snap-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 8px 0 20px 0;
}
.snap-carousel::-webkit-scrollbar { display: none; }
.snap-carousel { -ms-overflow-style: none; scrollbar-width: none; }
.snap-card {
  scroll-snap-align: start;
  flex-shrink: 0;
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .hero-content { padding: 0 24px !important; bottom: 40px !important; }
  .hero-h1 { font-size: 44px !important; }
  .hero-top-bar { padding: 0 24px !important; }
  .summary-card-inner { flex-direction: column !important; gap: 32px !important; padding: 32px !important; }
  .summary-card-left { border-right: none !important; border-bottom: 1px solid #ececee !important; padding-right: 0 !important; padding-bottom: 32px !important; width: 100% !important; }
  .summary-card-right { width: 100% !important; }
  .journey-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
  .sticky-map-container { position: relative !important; top: 0 !important; height: 380px !important; margin-top: 32px !important; }
  .journey-timeline-left { padding-left: 0 !important; margin-left: 0 !important; border-left: none !important; }
  .stop-card-flex { flex-direction: column !important; }
  .stop-card-image { width: 100% !important; height: 220px !important; }
  .main-content-container { padding: 32px 24px !important; }
  .boarding-pass-card { flex-direction: column !important; }
  .boarding-pass-stub { border-left: none !important; border-top: 2px dashed #e4e4e7 !important; width: 100% !important; padding: 24px !important; }
  .bento-intel { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto auto !important; }
  .bento-intel-weather { grid-column: span 1 !important; }
  .bento-intel-pack { grid-row: span 1 !important; }
  .bento-agent { grid-template-columns: 1fr !important; }
  .bento-agent-center { grid-column: span 1 !important; grid-row: span 1 !important; }
  .bento-price { grid-template-columns: 1fr !important; }
}

@media (max-width: 768px) {
  .bento-intel { grid-template-columns: 1fr !important; }
  .bento-intel-weather { grid-column: span 1 !important; }
  .bento-intel-pack { grid-row: span 1 !important; }
  .trust-inclusions-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
  .price-inclusions-flex { flex-direction: column !important; gap: 40px !important; }
  .price-inclusions-right { width: 100% !important; }
  .intel-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
  .cta-immersive-inner { flex-direction: column !important; }
  .cta-immersive-img { width: 100% !important; height: 240px !important; position: relative !important; }
}

@media (max-width: 640px) {
  .sticky-bottom-bar { padding: 0 20px !important; }
  .sticky-bottom-bar-title { display: none !important; }
  .sticky-bottom-bar-price { font-size: 15px !important; }
  .hero-h1 { font-size: 36px !important; }
  .day-nav-bar { padding: 12px 20px !important; }
  .day-banner-inner { padding: 24px !important; }
  .day-banner-inner h2 { font-size: 28px !important; }
}
`;

/* ─── DUMMY DATA / GLOBAL CONFIG ─── */
const isEditorView = false; 

const config = {
  agency_name: "Wanderlust Experts",
  agency_logo: "W",
  agent_name: "Riya Malhotra",
  agent_photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
  brand_color: "#ff5a00",
  price_display: "per_person" as "per_person" | "total" | "hidden",
  booking_mode: "book" as "book" | "request" | "contact_only",
  booking_enabled: true,
  show_per_stop_prices: true
};

const tripData = {
  title: "Bhutanese Bliss: A Himalayan Adventure",
  client: "Meera & Arjun's Honeymoon",
  subtitle: "Embark on an immersive journey blending wellness, spiritual discovery, and breathtaking scenery.",
  dates: "20-22 Jul",
  travelers: "2 Adults",
  duration: "7 days",
  pacing: "Moderate",
  pacing_effort: "~3–4 hrs walking",
  price_per_person: 1850,
  price_total: 3700,
  agent_bio: "15 years crafting luxury Himalayan trips. Specializes in wellness and cultural immersion.",
  inclusions: ["All internal flights", "6 nights boutique stays", "Private English-speaking guide", "All entrance fees & permits", "Daily breakfast and 4 dinners"],
  exclusions: ["International flights", "Travel insurance", "Personal expenses"],
  goodToKnow: [
    { title: "Deposit & Payment", text: "A 25% deposit is required to secure your booking. The remaining balance is due 60 days before departure." },
    { title: "Cancellation Policy", text: "Fully refundable up to 90 days before departure. Flexible dates available." },
    { title: "Visa Requirements", text: "Bhutan visa is included in your package and will be arranged by our team." }
  ],
  highlights: [
    { title: "Sunrise flight past Everest", description: "Catch first light hitting the highest peak on Earth.", photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
    { title: "The Tiger's Nest climb", description: "Climb past waterfalls to the cliffside sanctuary.", photo: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80" },
    { title: "A hot-stone bath under the stars", description: "Relax in warm river water infused with local medicinal herbs.", photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
    { title: "Prayer flags at Dochula Pass", description: "Stand among 108 memorial chortens at 3,100 meters.", photo: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80" },
    { title: "Traditional archery in Thimphu", description: "Watch Bhutan's national sport played with ancient bows.", photo: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80" }
  ],
  hero_img: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1600&q=80",
  stops_summary: "1 flight · 6 stays · 8 experiences",
  reviews: 64
};

const dayHeroImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&q=80"
];

const stopPhotos = [
  "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
];

/* ─── HELPERS ─── */
const formatReviews = (num: number | string) => {
  if (typeof num === 'string') return num;
  return num >= 1000 ? (num / 1000).toFixed(0) + 'k' : num.toString();
};

const getPrimaryCTA = () => {
  if (config.booking_mode === 'contact_only') return `Contact ${config.agency_name}`;
  if (config.booking_mode === 'request') return "Request to book";
  return config.booking_enabled ? "Book this trip" : "Request to book";
};

/* ─── IntersectionObserver Scroll Reveal Hook ─── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    
    const targets = el.querySelectorAll('.scroll-reveal');
    targets.forEach(t => observer.observe(t));
    
    return () => { targets.forEach(t => observer.unobserve(t)); };
  }, []);
  
  return ref;
}

/* ─── CountUp Component ─── */
function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}


export default function PreviewPage() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [expandedStops, setExpandedStops] = useState<Record<string, boolean>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [priceMode, setPriceMode] = useState<'per_person' | 'total'>('per_person');
  const carouselRef = useRef<HTMLDivElement>(null);
  const pageRef = useScrollReveal();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollY(scrollTop);

    const sections = Array.from(document.querySelectorAll('div[data-day-id]')) as HTMLElement[];
    if (sections.length === 0) return;
    
    let currentIdx = 0;
    let minDiff = Infinity;
    
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].getBoundingClientRect().top;
      const diff = Math.abs(top - 200); 
      if (diff < minDiff) {
        minDiff = diff;
        currentIdx = i;
      }
    }
    setActiveDayIndex(currentIdx);
  };

  const toggleStop = (id: string) => {
    setExpandedStops(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFavorite = (id: string, label: string) => {
    setFavorites(prev => {
      const isFav = !prev[id];
      showToast(isFav ? `Saved "${label}" to favorites` : `Removed "${label}"`);
      return { ...prev, [id]: isFav };
    });
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{FONT_CSS}</style>
      
      {/* Dynamic Action Toast */}
      {toastMsg && (
        <div style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", background: "#09090b", color: "#fff", padding: "12px 24px", borderRadius: "100px", zIndex: 10000, display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 12px 32px rgba(0,0,0,0.15)", fontSize: "14px", fontWeight: 700 }}>
          <Sparkles size={16} color={config.brand_color} />
          {toastMsg}
        </div>
      )}

      {/* Lightbox for Photos */}
      {lightboxImg && (
        <div className="ky-lightbox" style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(9,9,11,0.97)", display: "flex", alignItems: "center", justifyItems: "center" }} onClick={() => setLightboxImg(null)}>
          <button style={{ position: "absolute", top: "40px", right: "40px", background: "none", border: "none", color: "#fff", cursor: "pointer", zIndex: 100 }}>
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Gallery view" style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain", margin: "0 auto", borderRadius: "16px", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div 
        ref={pageRef}
        style={{ background: "#f4f4f5", minHeight: "100vh", color: "#09090b", fontFamily: "Cosmic, sans-serif", position: "relative", zIndex: 2, height: "100vh", overflowY: "auto", overflowX: "hidden" }}
        onScroll={handleScroll}
      >
        
        {/* ─── TOP BAR ─── */}
        <div className="hero-top-bar" style={{ padding: "20px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f4f4f5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "32px", background: config.brand_color, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", color: "#fff" }}>
              {config.agency_logo}
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#09090b" }}>
              {config.agency_name}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#71717a" }}>Prepared for {tripData.client}</span>
            {isEditorView && (
              <button style={{ background: "#fff", padding: "8px 16px", borderRadius: "100px", color: "#09090b", fontSize: "12px", fontWeight: 700, border: "1px solid #ececee", cursor: "pointer" }}>
                Edit cover
              </button>
            )}
          </div>
        </div>

        {/* ─── 1. COMPACT ROUNDED HERO CARD (Awesomic Style) ─── */}
        <div style={{ padding: "0 40px 40px" }}>
          <div style={{ position: "relative", width: "100%", height: "480px", borderRadius: "36px", overflow: "hidden", background: "#09090b" }}>
            
            <img 
              src={tripData.hero_img} 
              alt="Hero Background" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                objectPosition: "center 30%", 
                opacity: 0.8,
                transform: `scale(${1 + scrollY * 0.0003})`,
                transition: "transform 0.15s ease-out"
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 20%, rgba(9,9,11,0.85) 100%)" }}></div>
            
            {/* Hero Content — compact */}
            <div className="hero-content" style={{ position: "absolute", bottom: "48px", left: "0", width: "100%", padding: "0 48px", zIndex: 10 }}>
              <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", padding: "5px 14px", fontSize: "11px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#fff", marginBottom: "16px" }}>
                ✨ Made for {tripData.client}
              </div>
              <h1 className="hero-h1" style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 12px", lineHeight: 1.15, color: "#fff" }}>
                {tripData.title}
              </h1>
              <p style={{ fontSize: "16px", color: "#d4d4d8", lineHeight: 1.5, margin: "0 0 20px 0", fontWeight: 500, maxWidth: "560px", opacity: 0.9 }}>
                {tripData.subtitle}
              </p>
              
              {/* Fact Row */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", color: "#d4d4d8", fontSize: "13px", fontWeight: 600 }}>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><MapPin size={14} color={config.brand_color} /> Bhutan & Nepal</span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#71717a" }} />
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Calendar size={14} color={config.brand_color} /> {tripData.dates}</span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#71717a" }} />
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Users size={14} color={config.brand_color} /> {tripData.travelers}</span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#71717a" }} />
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Clock size={14} color={config.brand_color} /> {tripData.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 1.5 TRUST MARQUEE STRIP ─── */}
        <div className="scroll-reveal" style={{ background: "#fff", borderBottom: "1px solid #ececee", padding: "20px 0", overflow: "hidden", position: "relative" }}>
          {/* Fade edges */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(90deg, #fff, transparent)", zIndex: 5 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(270deg, #fff, transparent)", zIndex: 5 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "64px", overflow: "hidden" }}>
            <div className="marquee-track">
              {/* Real travel industry logos as text marks */}
              {["Lonely Planet", "Condé Nast Traveler", "National Geographic", "TripAdvisor", "Travel + Leisure", "Forbes Travel Guide", "Lonely Planet", "Condé Nast Traveler", "National Geographic", "TripAdvisor", "Travel + Leisure", "Forbes Travel Guide"].map((name, i) => (
                <div key={i} style={{ fontSize: "16px", fontWeight: 700, color: "#a1a1aa", letterSpacing: ".02em", whiteSpace: "nowrap", userSelect: "none", flexShrink: 0 }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 2. TRIP SUMMARY CARD (GLASSMORPHIC BENTO) ─── */}
        <div className="main-content-container" style={{ padding: "40px 80px 0 80px", position: "relative", zIndex: 20 }}>
          
          {/* Animated 3D Floating Blobs */}
          <div style={{ position: "absolute", top: "10%", left: "15%", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, #ff5a0025 0%, transparent 70%)", pointerEvents: "none", zIndex: 1, animation: "floatBlobA 12s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "15%", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, #fe45e218 0%, transparent 70%)", pointerEvents: "none", zIndex: 1, animation: "floatBlobB 10s ease-in-out infinite" }} />

          <div className="summary-card-inner scroll-reveal" style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            background: "rgba(255, 255, 255, 0.75)", 
            backdropFilter: "blur(24px)", 
            border: "1px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "36px", 
            padding: "40px", 
            display: "flex", 
            gap: "40px", 
            boxShadow: "0 20px 48px rgba(0,0,0,0.03)", 
            alignItems: "center",
            position: "relative",
            zIndex: 10
          }}>
            
            {/* Zones A & B */}
            <div className="summary-card-left" style={{ flex: 1, borderRight: "1px solid #ececee", paddingRight: "40px" }}>
              <div style={{ display: "flex", gap: "32px", marginBottom: "24px" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "4px" }}>Pacing</div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#09090b" }}>{tripData.pacing} <span style={{ color: "#71717a", fontWeight: 500 }}>({tripData.pacing_effort})</span></div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "4px" }}>Included</div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#09090b" }}>{tripData.stops_summary}</div>
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "#18181b", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                Includes internal transportation, boutique stays, and hand-picked local experiences. Final pricing is customized to your travel dates.
              </p>
            </div>

            {/* Zone C: Price & Actions */}
            <div className="summary-card-right" style={{ width: "360px" }}>
              
              <div style={{ display: "inline-flex", background: "#f4f4f5", border: "1px solid #ececee", padding: "3px", borderRadius: "100px", marginBottom: "16px" }}>
                <button 
                  onClick={() => setPriceMode('per_person')}
                  style={{ padding: "6px 14px", borderRadius: "100px", fontSize: "11px", fontWeight: 800, background: priceMode === 'per_person' ? '#fff' : 'none', color: priceMode === 'per_person' ? '#09090b' : '#71717a', border: "none", cursor: "pointer", transition: "all 0.2s" }}
                >
                  Per Person
                </button>
                <button 
                  onClick={() => setPriceMode('total')}
                  style={{ padding: "6px 14px", borderRadius: "100px", fontSize: "11px", fontWeight: 800, background: priceMode === 'total' ? '#fff' : 'none', color: priceMode === 'total' ? '#09090b' : '#71717a', border: "none", cursor: "pointer", transition: "all 0.2s" }}
                >
                  Total Price
                </button>
              </div>

              {config.price_display !== 'hidden' && (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "4px" }}>Estimated Price</div>
                  <div style={{ fontSize: "32px", fontWeight: 800, color: "#09090b", letterSpacing: "-.02em" }}>
                    ${priceMode === 'per_person' ? tripData.price_per_person.toLocaleString() : tripData.price_total.toLocaleString()} 
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#71717a", marginLeft: "4px" }}>
                      {priceMode === 'per_person' ? 'pp' : 'total'}
                    </span>
                  </div>
                </div>
              )}
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button className="shine-btn" style={{ width: "100%", background: config.brand_color, color: "#fff", border: "none", padding: "14px 20px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", boxShadow: `0 8px 20px ${config.brand_color}25`, transition: "transform 0.2s" }}>
                  {getPrimaryCTA()} <ArrowRight size={16} />
                </button>
                <button style={{ width: "100%", background: "transparent", color: "#18181b", border: "1px solid #ececee", padding: "14px 20px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                  Contact {config.agency_name}
                </button>
              </div>

              {/* Trust Micro-Row */}
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#71717a", fontWeight: 600 }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Star size={12} color="#ff5a00" fill="#ff5a00"/> Curated by {config.agent_name}</span>
                <span>·</span>
                <span>{formatReviews(tripData.reviews)} real reviews</span>
              </div>
            </div>

          </div>
        </div>

        {/* ─── 3. TRIP INTELLIGENCE (ASYMMETRIC BENTO GRID) ─── */}
        <div className="main-content-container" style={{ padding: "80px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            <div className="intel-header-row scroll-reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", borderBottom: "1px solid #ececee", paddingBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: config.brand_color, textTransform: "uppercase", letterSpacing: ".15em", marginBottom: "6px" }}>TRIP INTELLIGENCE</div>
                <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", margin: 0 }}>What to know before you go</h2>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#71717a", background: "#ececee", padding: "6px 16px", borderRadius: "100px" }}>
                {tripData.stops_summary}
              </div>
            </div>

            {/* ASYMMETRIC BENTO — 3 columns, Weather is 2-col, Pack is 2-row tall */}
            <div className="bento-intel" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "20px", marginBottom: "32px" }}>
              
              {/* Card 1: Weather (2-column wide, warm gradient sky) */}
              <div className="bento-intel-weather scroll-reveal tilt-card" style={{ gridColumn: "span 2", background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)", borderRadius: "36px", padding: "32px", border: "1px solid #ffedd5", position: "relative", overflow: "hidden", minHeight: "180px" }}>
                {/* Animated clouds */}
                <svg style={{ position: "absolute", top: "20px", right: "40px", width: "120px", height: "60px", opacity: 0.2, animation: "cloudDrift 8s ease-in-out infinite" }} viewBox="0 0 120 60">
                  <ellipse cx="60" cy="35" rx="50" ry="20" fill="#000" />
                  <ellipse cx="40" cy="25" rx="30" ry="18" fill="#000" />
                  <ellipse cx="80" cy="28" rx="25" ry="15" fill="#000" />
                </svg>
                <svg style={{ position: "absolute", top: "50px", right: "160px", width: "80px", height: "40px", opacity: 0.1, animation: "cloudDrift 12s ease-in-out infinite 2s" }} viewBox="0 0 120 60">
                  <ellipse cx="60" cy="35" rx="50" ry="20" fill="#000" />
                  <ellipse cx="40" cy="25" rx="30" ry="18" fill="#000" />
                </svg>
                
                <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "rgba(255,90,0,0.15)", color: config.brand_color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ThermometerSun size={22} />
                      </div>
                      <h3 style={{ fontSize: "18px", fontWeight: 800, margin: 0, color: "#09090b" }}>Weather & Climate</h3>
                    </div>
                    <p style={{ fontSize: "15px", color: "#78350f", lineHeight: 1.6, margin: 0, fontWeight: 500, maxWidth: "400px" }}>
                      Expect mild days (20-25°C) and cooler Himalayan evenings. Perfect trekking conditions with clear mountain views.
                    </p>
                  </div>
                  {/* Large temperature display */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "56px", fontWeight: 800, color: "#9a3412", letterSpacing: "-.04em", lineHeight: 1 }}>22°</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#c2410c", marginTop: "4px" }}>Avg. daytime</div>
                  </div>
                </div>
              </div>

              {/* Card 2: What to Pack (2-row tall, dark inverted) */}
              <div className="bento-intel-pack scroll-reveal scroll-reveal-delay-1 tilt-card" style={{ gridRow: "span 2", background: "#18181b", borderRadius: "36px", padding: "28px", border: "1px solid #27272a", color: "#fff", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "rgba(255,255,255,0.08)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Shirt size={20} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 20px", color: "#fff" }}>What to pack</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {["Comfortable trail shoes", "Light layered jacket", "Temple cover-ups", "Sun protection (SPF 50)", "Reusable water bottle", "Warm fleece for evenings"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 500, color: "#d4d4d8" }}>
                      <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Getting Around (map path visual) */}
              <div className="scroll-reveal scroll-reveal-delay-2 tilt-card" style={{ background: "#ffffff", borderRadius: "36px", padding: "28px", border: "1px solid #ececee", position: "relative", overflow: "hidden" }}>
                {/* Animated route path watermark */}
                <svg style={{ position: "absolute", bottom: "10px", right: "10px", width: "100px", height: "80px", opacity: 0.12 }} viewBox="0 0 100 80">
                  <path d="M10 60 Q 30 10 50 40 T 90 20" stroke={config.brand_color} strokeWidth="3" fill="none" strokeDasharray="6 4" style={{ animation: "pathFlow 8s linear infinite" }} />
                  <circle cx="10" cy="60" r="4" fill={config.brand_color} />
                  <circle cx="90" cy="20" r="4" fill={config.brand_color} />
                </svg>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#f4f4f5", color: "#18181b", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Car size={20} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 10px", color: "#09090b" }}>Getting around</h3>
                <p style={{ fontSize: "14px", color: "#52525b", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Private luxury SUV with English-speaking guide.</p>
              </div>

              {/* Card 4: Local Know-How (coral/cultural) */}
              <div className="scroll-reveal scroll-reveal-delay-3 tilt-card" style={{ background: "linear-gradient(135deg, #fef2f2 0%, #fecaca40 100%)", borderRadius: "36px", padding: "28px", border: "1px solid #fecaca60", position: "relative", overflow: "hidden" }}>
                {/* Cultural pattern watermark */}
                <svg style={{ position: "absolute", bottom: "8px", right: "8px", width: "70px", height: "70px", opacity: 0.08 }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#000" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="30" stroke="#000" strokeWidth="1.5" fill="none" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#000" strokeWidth="1" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="#000" strokeWidth="1" />
                </svg>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "rgba(239,68,68,0.1)", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Lightbulb size={20} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 10px", color: "#09090b" }}>Local know-how</h3>
                <p style={{ fontSize: "14px", color: "#52525b", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Remove shoes before Dzongs. Bhutan measures Gross National Happiness.</p>
              </div>

            </div>

            {/* Stay Details */}
            <div className="scroll-reveal" style={{ background: "#fff", borderRadius: "36px", padding: "28px", border: "1px solid #ececee", display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#f4f4f5", color: "#18181b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Hotel size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 4px", color: "#09090b" }}>Confirmed Lodging Details</h4>
                <p style={{ fontSize: "14px", color: "#52525b", margin: 0, fontWeight: 500 }}>
                  Hotel Olathang · P.Box No. 1214, Paro 12008, Bhutan · Check-in: 12:00 PM / Check-out: 11:00 AM
                </p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: config.brand_color, textDecoration: "none" }}>
                View on Map <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>

        {/* ─── 3.5 TRIP HIGHLIGHTS (CSS SNAP CAROUSEL) ─── */}
        <div className="main-content-container" style={{ padding: "0 80px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="scroll-reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", margin: 0 }}>Moments you&apos;ll remember</h2>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => scrollCarousel('left')} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #d4d4d8", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}>
                  <ChevronLeft size={18} color="#09090b" />
                </button>
                <button onClick={() => scrollCarousel('right')} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #d4d4d8", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}>
                  <ChevronRight size={18} color="#09090b" />
                </button>
              </div>
            </div>
            
            <div ref={carouselRef} className="snap-carousel scroll-reveal">
              {tripData.highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="snap-card tilt-card"
                  style={{ 
                    position: "relative", 
                    borderRadius: "28px", 
                    overflow: "hidden", 
                    width: i === 0 ? "420px" : "320px",
                    height: i === 0 ? "400px" : "340px",
                    cursor: "pointer", 
                    border: "1px solid #ececee",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.03)"
                  }} 
                  onClick={() => setLightboxImg(h.photo)}
                >
                  <img src={h.photo} alt={h.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, rgba(9,9,11,0.85) 100%)" }}></div>
                  
                  {/* Number badge */}
                  <div style={{ position: "absolute", top: "20px", left: "20px", width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "#fff" }}>
                    {i + 1}
                  </div>
                  
                  <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", color: "#fff" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1.3, margin: "0 0 6px" }}>{h.title}</h3>
                    <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, fontWeight: 500, lineHeight: 1.4 }}>{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── STICKY DAY NAVIGATION SWITCHER ─── */}
        <div className="day-nav-bar hide-scrollbar" style={{ position: "sticky", top: 0, background: "rgba(244, 244, 245, 0.95)", backdropFilter: "blur(16px)", zIndex: 40, borderBottom: "1px solid #ececee", padding: "12px 80px", display: "flex", gap: "12px", overflowX: "auto", whiteSpace: "nowrap" }}>
          <div style={{ maxWidth: "1600px", width: "100%", margin: "0 auto", display: "flex", gap: "12px" }}>
            {days.map((d, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  const el = document.querySelector(`div[data-day-id="day-${idx}"]`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{ 
                  padding: "8px 18px", 
                  borderRadius: "100px", 
                  border: activeDayIndex === idx ? `2px solid ${config.brand_color}` : "1px solid #d4d4d8", 
                  background: activeDayIndex === idx ? `${config.brand_color}10` : "#fff", 
                  color: activeDayIndex === idx ? config.brand_color : "#52525b", 
                  fontSize: "13px", 
                  fontWeight: 800, 
                  cursor: "pointer", 
                  transition: "all 0.25s",
                  whiteSpace: "nowrap",
                  flexShrink: 0 
                }}
              >
                Day {idx + 1}: {d.headline}
              </button>
            ))}
          </div>
        </div>

        {/* ─── 4. THE JOURNEY & MAP ─── */}
        <div className="main-content-container" style={{ padding: "80px 80px" }}>
          <div className="journey-grid" style={{ maxWidth: "1600px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 400px", gap: "64px" }}>
            
            {/* Timeline Left */}
            <div className="journey-timeline-left">
              {days.map((day, dIdx) => (
                <div key={dIdx} data-day-id={`day-${dIdx}`} style={{ marginBottom: "64px" }}>
                  
                  {/* Day Banner */}
                  <div className="scroll-reveal" style={{ position: "relative", width: "100%", height: "280px", borderRadius: "36px", overflow: "hidden", marginBottom: "36px" }}>
                    <img src={dayHeroImages[dIdx % dayHeroImages.length]} alt={day.headline} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 20%, rgba(9,9,11,0.9) 100%)" }}></div>
                    <div className="day-banner-inner" style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px", color: "#fff" }}>
                      <div style={{ display: "inline-flex", background: `${config.brand_color}20`, border: `1px solid ${config.brand_color}40`, borderRadius: "100px", padding: "4px 14px", fontSize: "11px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: config.brand_color, marginBottom: "12px" }}>
                        {day.badge}
                      </div>
                      <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-.02em", margin: 0, lineHeight: 1.2 }}>{day.headline}</h2>
                    </div>
                  </div>

                  {/* Day Sections */}
                  {day.sections.map((section, sIdx) => (
                    <div key={sIdx} style={{ marginBottom: "28px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 800, color: config.brand_color, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "16px" }}>{section.title}</div>
                      
                      {/* Stop Cards */}
                      {section.entries.map((entry, eIdx) => {
                        if (!entry.place) return null;
                        const stopId = `day${dIdx}-s${sIdx}-e${eIdx}`;
                        const isExpanded = expandedStops[stopId];
                        const isFav = favorites[stopId];
                        
                        return (
                          <div key={eIdx} className="scroll-reveal" style={{ marginBottom: "16px" }}>
                            
                            {entry.place.cat === 'SIGHTSEEING' && entry.label.includes('KB') ? (
                              /* Flight / Boarding Pass Card */
                              <div className="boarding-pass-card" style={{ display: "flex", background: "#fff", borderRadius: "24px", border: "1px solid #ececee", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                                <div style={{ flex: 1, padding: "28px" }}>
                                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "12px" }}>BOARDING PASS</div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                                    <div>
                                      <div style={{ fontSize: "28px", fontWeight: 800, color: "#09090b", letterSpacing: "-.02em" }}>DEL</div>
                                      <div style={{ fontSize: "12px", fontWeight: 500, color: "#71717a" }}>Delhi</div>
                                    </div>
                                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
                                      <div style={{ flex: 1, height: "1px", background: "#ececee" }}></div>
                                      <Plane size={16} color={config.brand_color} />
                                      <div style={{ flex: 1, height: "1px", background: "#ececee" }}></div>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                      <div style={{ fontSize: "28px", fontWeight: 800, color: "#09090b", letterSpacing: "-.02em" }}>PBH</div>
                                      <div style={{ fontSize: "12px", fontWeight: 500, color: "#71717a" }}>Paro</div>
                                    </div>
                                  </div>
                                  <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#52525b", fontWeight: 500 }}>
                                    <span>{section.time}</span>
                                    <span>KB205 · 2h 15m</span>
                                    <span>Window requested</span>
                                  </div>
                                </div>
                                <div className="boarding-pass-stub" style={{ width: "140px", borderLeft: "2px dashed #e4e4e7", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", gap: "8px" }}>
                                  {/* Barcode */}
                                  <div style={{ display: "flex", gap: "2px", height: "48px", alignItems: "flex-end" }}>
                                    {[3,5,2,6,4,3,7,2,5,4,6,3,5,2,4].map((h, i) => (
                                      <div key={i} style={{ width: "2px", height: `${h * 6}px`, background: "#09090b" }}></div>
                                    ))}
                                  </div>
                                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase" }}>KB 205</div>
                                </div>
                              </div>
                            ) : (
                              /* Regular Stop Card */
                              <div style={{ background: "#fff", borderRadius: "24px", border: "1px solid #ececee", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", transition: "all 0.3s" }}>
                                
                                {false ? (
                                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 28px", background: "#fafafa" }}>
                                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${config.brand_color}10`, color: config.brand_color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <Navigation size={16} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#09090b" }}>{entry.label}</div>
                                      <div style={{ fontSize: "13px", color: "#71717a", fontWeight: 500 }}>{entry.place.about || ''}</div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="stop-card-flex" style={{ display: "flex" }}>
                                    {/* Photo */}
                                    <div className="stop-card-image" style={{ width: "200px", flexShrink: 0, position: "relative" }}>
                                      <img src={stopPhotos[eIdx % stopPhotos.length]} alt={entry.label} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "160px" }} />
                                      {entry.place.cat && (
                                        <div style={{ position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "8px", background: "rgba(9,9,11,0.7)", backdropFilter: "blur(8px)", fontSize: "10px", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: ".05em" }}>
                                          {entry.place.cat}
                                        </div>
                                      )}
                                    </div>

                                    {/* Info */}
                                    <div style={{ flex: 1, padding: "24px" }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                                        <div>
                                          <div style={{ fontSize: "16px", fontWeight: 800, color: "#09090b", marginBottom: "4px" }}>{entry.label}</div>
                                          {section.time && <div style={{ fontSize: "12px", color: "#71717a", fontWeight: 600 }}>{section.time}</div>}
                                        </div>
                                        {/* Actions */}
                                        <div style={{ display: "flex", gap: "6px" }}>
                                          <button onClick={() => toggleFavorite(stopId, entry.label)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
                                            <Heart size={16} color={isFav ? "#ef4444" : "#a1a1aa"} fill={isFav ? "#ef4444" : "none"} />
                                          </button>
                                          <div style={{ position: "relative" }}>
                                            <button onClick={() => setActiveMenuId(activeMenuId === stopId ? null : stopId)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
                                              <MoreHorizontal size={16} color="#a1a1aa" />
                                            </button>
                                            {activeMenuId === stopId && (
                                              <div style={{ position: "absolute", top: "100%", right: 0, background: "#fff", borderRadius: "12px", border: "1px solid #ececee", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", padding: "8px", zIndex: 50, minWidth: "160px" }}>
                                                <button onClick={() => { showToast(`Link copied for "${entry.label}"`); setActiveMenuId(null); }} style={{ width: "100%", textAlign: "left", padding: "8px 12px", borderRadius: "8px", border: "none", background: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "#09090b", display: "flex", alignItems: "center", gap: "8px" }}>
                                                  <Clipboard size={14}/> Copy link
                                                </button>
                                                <button onClick={() => { showToast(`Shared "${entry.label}"`); setActiveMenuId(null); }} style={{ width: "100%", textAlign: "left", padding: "8px 12px", borderRadius: "8px", border: "none", background: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "#09090b", display: "flex", alignItems: "center", gap: "8px" }}>
                                                  <Share2 size={14}/> Share
                                                </button>
                                                <button onClick={() => { showToast(`Swap requested for "${entry.label}"`); setActiveMenuId(null); }} style={{ width: "100%", textAlign: "left", padding: "8px 12px", borderRadius: "8px", border: "none", background: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: config.brand_color, display: "flex", alignItems: "center", gap: "8px" }}>
                                                  <RefreshCw size={14}/> Swap this
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>

                                      {/* Rating & Location */}
                                      {entry.place.rating && (
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#71717a", fontWeight: 500, marginBottom: "8px" }}>
                                          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Star size={12} fill="#f59e0b" color="#f59e0b" /> {entry.place.rating}</span>
                                          {entry.place.reviews && <span>({entry.place.reviews} reviews)</span>}
                                          {entry.place.address && <span style={{ display: "flex", alignItems: "center", gap: "3px" }}><MapPin size={11}/> {entry.place.address}</span>}
                                        </div>
                                      )}

                                      {/* Why chosen */}
                                      {entry.place.why && (
                                        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "10px 14px", background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "12px", marginBottom: "8px" }}>
                                          <Sparkles size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                                          <p style={{ fontSize: "12px", fontWeight: 600, color: "#92400e", margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>{entry.place.why}</p>
                                        </div>
                                      )}

                                      {/* Expand */}
                                      <button onClick={() => toggleStop(stopId)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 700, color: config.brand_color, padding: "4px 0" }}>
                                        {isExpanded ? 'Show less' : 'Show details'} {isExpanded ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
                                      </button>

                                      {/* Expanded Details */}
                                      {isExpanded && (
                                        <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #f4f4f5" }}>
                                          {entry.place.about && <p style={{ fontSize: "14px", color: "#52525b", lineHeight: 1.6, margin: "0 0 12px", fontWeight: 500 }}>{entry.place.about}</p>}
                                          {entry.place.highlights && (
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                              {entry.place.highlights.map((hl: any, iIdx: number) => (
                                                <span key={iIdx} style={{ padding: "4px 10px", borderRadius: "8px", background: "#f4f4f5", fontSize: "11px", fontWeight: 700, color: "#52525b" }}>{typeof hl === 'string' ? hl : hl.t}</span>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* ─── 5. STICKY MAP (Right Rail) ─── */}
            <div className="sticky-map-container" style={{ position: "sticky", top: "80px", height: "calc(100vh - 160px)", borderRadius: "36px", overflow: "hidden", background: "#18181b", border: "1px solid #27272a" }}>
              <div className="dot-grid-dark" style={{ width: "100%", height: "100%", position: "relative" }}>
                {/* SVG Route Map */}
                <svg viewBox="0 0 400 600" style={{ width: "100%", height: "60%", padding: "40px" }}>
                  <path d="M200 50 C 100 150 300 250 200 350 S 100 500 200 560" stroke={config.brand_color} strokeWidth="3" fill="none" strokeDasharray="8 4" style={{ animation: "pathFlow 20s linear infinite" }} />
                  {/* Day Markers */}
                  {[{ x: 200, y: 80, label: "Paro" }, { x: 150, y: 200, label: "Tiger's Nest" }, { x: 250, y: 350, label: "Thimphu" }].map((point, i) => (
                    <g key={i}>
                      <circle cx={point.x} cy={point.y} r={activeDayIndex === i ? 14 : 10} fill={activeDayIndex === i ? config.brand_color : '#27272a'} style={{ transition: "all 0.4s" }} />
                      <circle cx={point.x} cy={point.y} r={5} fill="#fff" />
                      <text x={point.x + 20} y={point.y + 5} fill="#fff" fontSize="12" fontWeight="700">{point.label}</text>
                    </g>
                  ))}
                </svg>
                
                {/* Map Controls */}
                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "11px", color: "#71717a", fontWeight: 700 }}>
                    Day {activeDayIndex + 1} of {days.length}
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: config.brand_color, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                    Open in Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5.5 FULL-WIDTH ROUTE MAP DECORATION ─── */}
        <div className="main-content-container scroll-reveal" style={{ padding: "80px 80px", background: "#09090b", color: "#fff", borderTop: "1px solid #27272a", borderBottom: "1px solid #27272a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-flex", background: `rgba(255,90,0,0.15)`, color: config.brand_color, border: `1px solid ${config.brand_color}30`, borderRadius: "100px", padding: "6px 16px", fontSize: "12px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "16px" }}>
              YOUR ROUTE MAP
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#fff", letterSpacing: "-.02em", marginBottom: "20px" }}>The Himalayan Loop at a glance</h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 48px auto", lineHeight: 1.6 }}>
              A total journey of ~1,663 km crossing the Paro Valley, ascending Tiger&apos;s Nest, and touring down the valley to Thimphu Buddha view.
            </p>
            
            <div className="dot-grid-dark" style={{ background: "#18181b", borderRadius: "36px", height: "450px", overflow: "hidden", border: "1px solid #27272a", position: "relative" }}>
              <svg viewBox="0 0 1000 450" style={{ width: "100%", height: "100%" }}>
                <path d="M100 225 Q 300 100 500 225 T 900 225" stroke={config.brand_color} strokeWidth="4" fill="none" strokeDasharray="10 10" style={{ animation: "pathFlow 15s linear infinite" }} />
                <circle cx="100" cy="225" r="16" fill={config.brand_color} />
                <circle cx="100" cy="225" r="8" fill="#fff" />
                <text x="100" y="270" fill="#fff" textAnchor="middle" fontSize="14" fontWeight="800">DELHI (DEL)</text>
                <g transform="translate(300, 160) rotate(15)">
                  <Plane size={24} color="#fff" />
                </g>
                <circle cx="500" cy="225" r="16" fill={config.brand_color} />
                <circle cx="500" cy="225" r="8" fill="#fff" />
                <text x="500" y="270" fill="#fff" textAnchor="middle" fontSize="14" fontWeight="800">PARO (PBH)</text>
                <circle cx="900" cy="225" r="16" fill={config.brand_color} />
                <circle cx="900" cy="225" r="8" fill="#fff" />
                <text x="900" y="270" fill="#fff" textAnchor="middle" fontSize="14" fontWeight="800">THIMPHU</text>
              </svg>
              
              <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "rgba(9,9,11,0.8)", border: "1px solid #27272a", borderRadius: "12px", padding: "16px", display: "flex", gap: "24px" }} className="boarding-pass-card">
                <div>
                  <div style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: 700 }}>FLIGHT PATH</div>
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>Nonstop · 2h 15m</div>
                </div>
                <div style={{ width: "1px", height: "30px", background: "#27272a" }}></div>
                <div>
                  <div style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: 700 }}>LAND ROUTE</div>
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>Private SUV · 4G WiFi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. STOPS AT A GLANCE (Category colored) ─── */}
        <div className="main-content-container scroll-reveal" style={{ padding: "80px 80px", background: "#fff", borderTop: "1px solid #ececee" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", marginBottom: "36px", textAlign: "center" }}>Stops at a glance</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {days.map((day, dIdx) => {
                const dayColors = ["#eff6ff", "#f0fdf4", "#fefce8"];
                const dayBorderColors = ["#bfdbfe", "#bbf7d0", "#fef08a"];
                const dayAccentColors = ["#3b82f6", "#22c55e", "#eab308"];
                return (
                  <div key={dIdx} className="scroll-reveal" style={{ background: dayColors[dIdx % 3], padding: "24px", borderRadius: "20px", border: `1px solid ${dayBorderColors[dIdx % 3]}` }}>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: dayAccentColors[dIdx % 3], textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: dayAccentColors[dIdx % 3] }} />
                      Day {dIdx + 1}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {day.sections.flatMap(s => s.entries).map((e, eIdx) => {
                        if(!e.place) return null;
                        return (
                          <div key={eIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: eIdx === day.sections.flatMap(s => s.entries).length - 1 ? "none" : `1px solid ${dayBorderColors[dIdx % 3]}` }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {e.place.cat === 'SIGHTSEEING' && e.label.includes('KB') ? <Plane size={14} color="#71717a" /> : e.place.cat === 'HOTEL' ? <Hotel size={14} color="#71717a" /> : <MapPin size={14} color="#71717a" />}
                              </div>
                              <span style={{ fontSize: "15px", fontWeight: 600, color: "#09090b" }}>{e.label}</span>
                            </div>
                            {e.place.rating && (
                              <span style={{ fontSize: "13px", fontWeight: 700, color: "#71717a", display: "flex", alignItems: "center", gap: "4px" }}>
                                <Star size={12} fill="#f59e0b" color="#f59e0b" /> {e.place.rating}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── 6.5 AGENT TRUST — ASYMMETRIC BENTO SOCIAL PROOF ─── */}
        <div className="main-content-container" style={{ padding: "80px 80px", background: "#f4f4f5" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: config.brand_color, textTransform: "uppercase", letterSpacing: ".15em", marginBottom: "8px" }}>YOUR TRAVEL ADVISOR</div>
              <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", margin: 0 }}>Why travelers choose {config.agent_name}</h2>
            </div>

            {/* ASYMMETRIC BENTO GRID */}
            <div className="bento-agent" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gridTemplateRows: "auto auto", gap: "20px", marginBottom: "32px" }}>
              
              {/* Stat: Years */}
              <div className="scroll-reveal tilt-card" style={{ background: "#fff", borderRadius: "28px", padding: "32px", border: "1px solid #ececee", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Award size={20} color="#09090b" />
                </div>
                <div>
                  <div style={{ fontSize: "44px", fontWeight: 800, color: "#09090b", letterSpacing: "-.03em", lineHeight: 1 }}>
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Years Experience</div>
                </div>
              </div>

              {/* Center: Agent Portrait (2-row tall) */}
              <div className="bento-agent-center scroll-reveal scroll-reveal-delay-1" style={{ gridRow: "span 2", borderRadius: "28px", overflow: "hidden", position: "relative", background: "#e4e4e7", minHeight: "360px" }}>
                <img src={config.agent_photo} alt={config.agent_name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(9,9,11,0.9) 100%)" }} />
                
                {/* Spinning badge */}
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "80px", height: "80px" }}>
                  <svg style={{ width: "100%", height: "100%", animation: "spinBadge 20s linear infinite" }} viewBox="0 0 100 100">
                    <path id="agent-badge-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text fontWeight="800" fill="#fff" fontSize="9" letterSpacing="1.5">
                      <textPath href="#agent-badge-path">
                        CERTIFIED · HIMALAYAN · SPECIALIST · ✦ · 
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "#fff" }}>
                  <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "4px" }}>{config.agent_name}</div>
                  <p style={{ fontSize: "14px", color: "#d4d4d8", margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{tripData.agent_bio}</p>
                </div>
              </div>

              {/* Stat: Trips */}
              <div className="scroll-reveal scroll-reveal-delay-2 tilt-card" style={{ background: "#fff", borderRadius: "28px", padding: "32px", border: "1px solid #ececee", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Globe size={20} color="#09090b" />
                </div>
                <div>
                  <div style={{ fontSize: "44px", fontWeight: 800, color: "#09090b", letterSpacing: "-.03em", lineHeight: 1 }}>
                    <CountUp end={200} suffix="+" />
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Trips Completed</div>
                </div>
              </div>

              {/* Expertise Tag Cloud */}
              <div className="scroll-reveal scroll-reveal-delay-3 tilt-card" style={{ background: "#fff", borderRadius: "28px", padding: "24px", border: "1px solid #ececee", overflow: "hidden" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "14px" }}>Expertise</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {["Himalayan Treks", "Wellness", "Cultural Immersion", "Luxury Stays", "Honeymoons", "Photography Tours", "Spiritual Journeys", "Adventure"].map((tag, i) => (
                    <span key={i} style={{ padding: "6px 12px", borderRadius: "100px", background: i < 3 ? "#09090b" : "#f4f4f5", color: i < 3 ? "#fff" : "#52525b", fontSize: "12px", fontWeight: 700 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stat: Satisfaction */}
              <div className="scroll-reveal scroll-reveal-delay-4 tilt-card" style={{ background: "#fff", borderRadius: "28px", padding: "32px", border: "1px solid #ececee", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <TrendingUp size={20} color="#22c55e" />
                </div>
                <div>
                  <div style={{ fontSize: "44px", fontWeight: 800, color: "#09090b", letterSpacing: "-.03em", lineHeight: 1 }}>
                    <CountUp end={98} suffix="%" />
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card (wide, editorial) */}
            <div className="scroll-reveal" style={{ background: "#fff", padding: "40px 48px", borderRadius: "28px", border: "1px solid #ececee", position: "relative" }}>
              <span style={{ fontSize: "96px", fontStyle: "italic", fontFamily: "Georgia, serif", color: "#ff5a0015", position: "absolute", top: "-10px", left: "28px", pointerEvents: "none", lineHeight: 1 }}>&ldquo;</span>
              <p style={{ fontSize: "18px", color: "#18181b", fontStyle: "italic", margin: "0 0 20px 0", lineHeight: 1.7, fontWeight: 500, position: "relative", zIndex: 2, maxWidth: "700px" }}>
                Absolutely seamless experience. Riya understood exactly what we wanted for our honeymoon. The custom flight window suggestion was fantastic — we saw Everest at sunrise.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "#71717a" }}>TK</div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#09090b" }}>The Kapoors</div>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#a1a1aa" }}>Honeymoon · March 2024</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
                </div>
              </div>
            </div>

            {/* Good to Know Accordion */}
            <div className="scroll-reveal" style={{ marginTop: "48px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#09090b", marginBottom: "20px" }}>Good to know</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {tripData.goodToKnow.map((item, i) => (
                  <div key={i} style={{ background: "#fff", borderRadius: "20px", padding: "20px 24px", border: "1px solid #ececee" }}>
                    <div style={{ fontSize: "15px", fontWeight: 800, color: "#09090b", marginBottom: "6px" }}>{item.title}</div>
                    <p style={{ fontSize: "13px", color: "#52525b", lineHeight: 1.5, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── MAKE IT YOURS — IMMERSIVE CTA CARD ─── */}
        <div className="main-content-container scroll-reveal" style={{ padding: "0 80px", background: "#fff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 0" }}>
            <div className="cta-immersive-inner" style={{ display: "flex", background: "#fafaf9", borderRadius: "36px", overflow: "hidden", border: "1px solid #ececee", minHeight: "300px" }}>
              {/* Left: Content */}
              <div style={{ flex: 1, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, color: config.brand_color, textTransform: "uppercase", letterSpacing: ".15em", marginBottom: "12px" }}>FULLY CUSTOMIZABLE</div>
                <h3 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", margin: "0 0 16px", lineHeight: 1.2 }}>
                  Make it <span style={{ color: "#a1a1aa" }}>yours</span>
                </h3>
                <p style={{ fontSize: "16px", color: "#52525b", lineHeight: 1.6, margin: "0 0 28px", fontWeight: 500, maxWidth: "400px" }}>
                  Prefer a beach day instead of the hike? Your advisor can swap any stop. This itinerary is a starting point — completely flexible to your vision.
                </p>
                <button className="shine-btn" style={{ alignSelf: "flex-start", background: "#09090b", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                  Customize this trip <ArrowRight size={16} />
                </button>
              </div>
              {/* Right: Organic destination imagery */}
              <div className="cta-immersive-img" style={{ width: "45%", position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80" alt="Bhutan landscape" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #fafaf9 0%, transparent 30%)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 7. PRICE & INCLUSIONS (BENTO LAYOUT WITH STAT CARDS) ─── */}
        <div className="main-content-container scroll-reveal" style={{ padding: "80px 80px", background: "#09090b", color: "#fff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: config.brand_color, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "8px" }}>Transparent Pricing</div>
              <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-.02em", color: "#fff", margin: 0 }}>What&apos;s Included</h2>
            </div>

            <div className="bento-price" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "24px" }}>
              
              {/* Left: Inclusions & Exclusions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ background: "#18181b", borderRadius: "28px", padding: "32px", border: "1px solid #27272a" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}><CheckCircle color="#22c55e" size={18} /> Included</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    {tripData.inclusions.map((inc, i) => (
                      <div key={i} style={{ fontSize: "14px", color: "#d4d4d8", display: "flex", gap: "10px", alignItems: "flex-start", lineHeight: 1.4 }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", marginTop: "6px", flexShrink: 0 }} />
                        {inc}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#18181b", borderRadius: "28px", padding: "32px", border: "1px solid #27272a" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa" }}><Info color="#a1a1aa" size={18} /> Not Included</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {tripData.exclusions.map((exc, i) => (
                      <span key={i} style={{ padding: "6px 14px", borderRadius: "100px", background: "#27272a", fontSize: "13px", fontWeight: 600, color: "#71717a" }}>
                        {exc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stat cards row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                  <div style={{ background: "#18181b", borderRadius: "20px", padding: "24px", border: "1px solid #27272a", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}><CountUp end={98} suffix="%" /></div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Satisfaction</div>
                  </div>
                  <div style={{ background: "#18181b", borderRadius: "20px", padding: "24px", border: "1px solid #27272a", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}><CountUp end={24} suffix="hr" /></div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Response Time</div>
                  </div>
                  <div style={{ background: "#18181b", borderRadius: "20px", padding: "24px", border: "1px solid #27272a", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}>
                      <Shield size={20} color="#22c55e" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#71717a", marginTop: "4px" }}>Secure Booking</div>
                  </div>
                </div>
              </div>

              {/* Right: Price Card */}
              <div className="dot-grid-dark" style={{ background: "#18181b", borderRadius: "28px", padding: "36px", border: "1px solid #27272a", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {config.price_display !== 'hidden' && (
                  <>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "6px" }}>Estimated Price</div>
                      <div style={{ fontSize: "48px", fontWeight: 800, color: "#fff", letterSpacing: "-.03em", marginBottom: "6px" }}>
                        ${priceMode === 'per_person' ? tripData.price_per_person.toLocaleString() : tripData.price_total.toLocaleString()} 
                        <span style={{ fontSize: "16px", fontWeight: 500, color: "#a1a1aa", marginLeft: "4px" }}>
                          {priceMode === 'per_person' ? 'pp' : 'total'}
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#71717a", fontWeight: 500, marginBottom: "28px" }}>
                        {priceMode === 'per_person' ? `Total: $${tripData.price_total.toLocaleString()}` : `2 travelers · $${tripData.price_per_person.toLocaleString()} pp`}
                      </div>
                    </div>
                  </>
                )}
                
                <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: 1.5, marginBottom: "28px", opacity: 0.8 }}>
                  Your travel advisor will confirm the final live fares and availability before any payment is processed.
                </p>

                {/* Pulsing ring under button */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: "-4px", background: config.brand_color, filter: "blur(8px)", borderRadius: "100px", animation: "pulseRing 3s ease-in-out infinite", zIndex: 1 }}></div>
                  <button className="shine-btn" style={{ position: "relative", zIndex: 10, width: "100%", background: config.brand_color, color: "#fff", border: "none", padding: "16px 20px", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                    {getPrimaryCTA()} <ArrowRight size={16} />
                  </button>
                </div>
                
                <button style={{ width: "100%", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", padding: "14px 20px", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginTop: "12px", transition: "all 0.2s" }}>
                  Ask about this trip
                </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* ─── 8. LEAD CAPTURE — IMMERSIVE CTA WITH IMAGERY ─── */}
        <div className="main-content-container scroll-reveal" style={{ padding: "0 80px", background: "#f4f4f5" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 0" }}>
            <div className="cta-immersive-inner" style={{ display: "flex", background: "#fff", borderRadius: "36px", overflow: "hidden", border: "1px solid #ececee", minHeight: "320px" }}>
              {/* Left: Form */}
              <div style={{ flex: 1, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-.02em", color: "#09090b", margin: "0 0 12px", lineHeight: 1.2 }}>
                  Start your <span style={{ color: "#a1a1aa" }}>journey</span>
                </h2>
                <p style={{ fontSize: "15px", color: "#52525b", lineHeight: 1.6, marginBottom: "24px", fontWeight: 500, maxWidth: "420px" }}>
                  Plan a trip of your own with {config.agency_name}. Share your email and the agency will follow up about dates, availability, and next steps.
                </p>
                <div style={{ display: "flex", gap: "10px", maxWidth: "420px" }}>
                  <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "14px 20px", borderRadius: "100px", border: "1px solid #d4d4d8", fontSize: "15px", outline: "none", background: "#fff", fontFamily: "Cosmic, sans-serif" }} />
                  <button className="shine-btn" style={{ background: "#09090b", color: "#fff", border: "none", padding: "0 28px", borderRadius: "100px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>Send</button>
                </div>
                <div style={{ fontSize: "11px", color: "#a1a1aa", marginTop: "12px" }}>By sending, you agree to our Privacy Policy.</div>
              </div>
              {/* Right: Destination image */}
              <div className="cta-immersive-img" style={{ width: "45%", position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80" alt="Prayer flags" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #fff 0%, transparent 30%)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 9. FOOTER ─── */}
        <footer style={{ padding: "32px 40px", background: "#09090b", borderTop: "1px solid #27272a", display: "flex", justifyContent: "space-between", color: "#71717a", fontSize: "13px", fontWeight: 500 }}>
          <div>Crafted by <strong style={{ color: "#fff" }}>{config.agency_name}</strong></div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>Interactive itinerary by <Sparkles size={12} color={config.brand_color}/> <strong style={{ color: "#fff" }}>Kyvari</strong></div>
        </footer>

        {/* ─── STICKY BOTTOM BAR ─── */}
        <div style={{ height: "64px" }}></div> 
        
        <div className="sticky-bottom-bar" style={{ 
          position: "fixed", 
          bottom: 0, 
          left: 0, 
          width: "100%", 
          height: "64px", 
          background: "rgba(9, 9, 11, 0.95)", 
          backdropFilter: "blur(20px)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "0 80px", 
          borderTop: "1px solid rgba(255,255,255,0.08)", 
          boxShadow: "0 -4px 24px rgba(0,0,0,0.2)", 
          zIndex: 999 
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", overflow: "hidden" }}>
            <span className="sticky-bottom-bar-title" style={{ fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "-.01em", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: "350px" }}>
              {tripData.title}
            </span>
            <span className="sticky-bottom-bar-title" style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
            {config.price_display !== 'hidden' && (
              <span className="sticky-bottom-bar-price" style={{ fontSize: "14px", fontWeight: 800, color: "#fff", flexShrink: 0 }}>
                Estimated Price: ${priceMode === 'per_person' ? tripData.price_per_person.toLocaleString() : tripData.price_total.toLocaleString()} 
                <span style={{ fontSize: "11px", fontWeight: 500, color: "#a1a1aa", marginLeft: "4px" }}>
                  {priceMode === 'per_person' ? 'pp' : 'total'}
                </span>
              </span>
            )}
          </div>
          <button className="shine-btn" style={{ background: config.brand_color, color: "#fff", border: "none", padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", boxShadow: `0 4px 10px ${config.brand_color}40`, flexShrink: 0 }}>
            {getPrimaryCTA()} <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </>
  );
}

"use client";
import React, { useState, useEffect, useRef } from 'react';

/* ─── Cosmica @font-face (placeholder — swap for licensed font later) ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Light.woff2) format('woff2');font-weight:300;font-style:normal;font-display:swap}
`;

/* ─── CDN assets (placeholders — replaced with custom assets later) ─── */
const CDN = 'https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871';
const A = {
  ycBadge: `${CDN}/68c2a33d71ce477bc4cfaa4c_YC-small-badge.svg`,
  google: `${CDN}/68c2a33d71ce477bc4cfa969_google_symbol.svg.svg`,
  faces: `${CDN}/68c2a33d71ce477bc4cfa96b_faq_two-faces.avif`,
  loginW: `${CDN}/68c2a33d71ce477bc4cfa8d5_login-icon-white.svg`,
  loginB: `${CDN}/68c2a33d71ce477bc4cfa8d6_login-icon-black.svg`,
  check: `${CDN}/68c2a33d71ce477bc4cfa900_checkmark-circle-dark.svg`,
  customersIcon: `${CDN}/68c2a33d71ce477bc4cfb027_customers-icon.png`,
  projectsIcon: `${CDN}/68c2a33d71ce477bc4cfb02a_projects-icon.png`,
  skillSetIcon: `${CDN}/68c2a33d71ce477bc4cfb029_skill%20set%20icon.png`,
  rockLogo: `${CDN}/68c2a33d71ce477bc4cfb028_logo%20on%20rock.avif`,
  heroFaces: `${CDN}/68c2a33d71ce477bc4cfab0f_hero-faces-span.avif`,
  step4Img: `${CDN}/68c2a33d71ce477bc4cfaac5_step-4-image.avif`,
  howImg: 'https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home%20page%20images/How%20it%20work%20img.jpg',
  whiteBg: 'https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/BG%20Images/white%20bg.jpg',
};

const LOGOS = [
  { alt: 'YC', src: `${CDN}/68c2a33d71ce477bc4cfb072_yc-new-png.png` },
  { alt: 'Coca-Cola', src: `${CDN}/68c2a33d71ce477bc4cfb06e_coca-cola-new-png.png` },
  { alt: 'Disney', src: `${CDN}/68c2a33d71ce477bc4cfb070_disney-new-png.png` },
  { alt: 'Genesis', src: `${CDN}/68c2a33d71ce477bc4cfaa42_genesis.avif` },
  { alt: 'Udemy', src: `${CDN}/68c2a33d71ce477bc4cfb06d_udemy-new-png.png` },
  { alt: 'EY', src: `${CDN}/68c2a33d71ce477bc4cfb06f_ey-new-png.png` },
  { alt: 'PandaDoc', src: `${CDN}/68c2a33d71ce477bc4cfb071_panda-doc-new-png.png` },
];

/* ─── travel imagery placeholders (swapped later) ─── */
const IMG = {
  santorini: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
  tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
  alps: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80',
  safari: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
  aurora: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&q=80',
  taj: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
  rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  hills: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=80',
  valley: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80',
  panorama: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80',
  lake: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  face1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces',
  face2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces',
  face3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces',
  face4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
  face5: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
  face6: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces',
};

/* ═══ content ═══ */
const SERVICE_CARDS = [
  { title: 'Deep destination\nresearch', type: 'list', items: ['Live maps & routing APIs', 'Verified local reviews', 'Opening hours checking', 'Custom flight inputs', 'Curated culinary spots', 'Off-beat travel ideas', 'And more'] },
  { title: 'Interactive web\nproposals', type: 'image', tags: ['Web itinerary', 'Mobile optimized', 'Proposal builder'], img: IMG.santorini },
  { title: 'One-click\nAI customization', type: 'image', tags: ['AI swapping', 'Drag & drop days', 'Live canvas'], img: IMG.kyoto },
  { title: 'Client engagement\ntracking', type: 'image', tags: ['View alerts', 'Dwell time', 'Collab link'], img: IMG.aurora },
  { title: 'Modern agent\nworkspace', type: 'list', items: ['Natural language input', 'E-mail parsing', 'PDF brochure import', 'Clean dashboard', 'Collaborative links', 'Brand personalization', 'And more'] },
  { title: 'No-code itinerary\nbranding', type: 'image', tags: ['Custom subdomain', 'Agent logo', 'Personal brand'], img: IMG.maldives },
  { title: 'Stunning visual\ngalleries', type: 'image', tags: ['Photo galleries', 'Scenic routes'], img: IMG.paris },
];

const BOTTLENECK_ITEMS = [
  { gray: 'Forget about ', bold: 'hours of manual hotel research' },
  { gray: 'No more ', bold: 'copy-pasting into Word or PowerPoint' },
  { gray: 'Stop ', bold: 'sending static PDFs clients can’t open' },
  { gray: 'Say bye to ', bold: 'manual distance and routing checks' },
  { gray: 'Skip ', bold: 'waiting days to send a proposal' },
  { gray: 'Done with ', bold: 'weeks of back-and-forth changes' },
];

const DESTINATIONS = [
  { name: 'Paris', role: 'Culinary France', years: '5 days', tags: ['Eiffel Tower', 'Le Marais', 'Pastry tour'], photo: IMG.paris, stay: 'Le Marais boutique stays' },
  { name: 'Tokyo', role: 'Foodie Escape', years: '7 days', tags: ['Sushi class', 'Shibuya', 'Temples'], photo: IMG.tokyo, stay: 'Shinjuku design hotels' },
  { name: 'Santorini', role: 'Honeymooners', years: '7 days', tags: ['Yacht cruise', 'Oia sunset', 'Wine'], photo: IMG.santorini, stay: 'Clifftop cave villas' },
  { name: 'Rome', role: 'Heritage Seekers', years: '6 days', tags: ['Colosseum', 'Vatican', 'Pasta making'], photo: IMG.rome, stay: 'Monti guesthouses' },
  { name: 'Bali', role: 'Wellness Retreat', years: '8 days', tags: ['Yoga shala', 'Ubud forest', 'Waterfalls'], photo: IMG.bali, stay: 'Ubud jungle lodges' },
  { name: 'Maldives', role: 'Island Escape', years: '10 days', tags: ['Overwater villa', 'Reef snorkel'], photo: IMG.maldives, stay: 'Overwater bungalows' },
];

const HOW_STEPS = [
  { num: '01', title: 'Join Kyvari', desc: 'Create your agent workspace in under a minute. No onboarding calls, no setup fees.' },
  { num: '02', title: 'Describe the trip', desc: 'Send in any request — text, client email, or files. It takes just minutes to get started.' },
  { num: '03', title: 'AI crafts the proposal', desc: 'Kyvari researches hotels, routes and opening times, and plans a day-by-day itinerary.' },
  { num: '04', title: 'Refine until perfect', desc: 'Tweak details on a live canvas, then share one interactive link and track every view.' },
];

const VETTING_STEPS = [
  { step: 'Step 1', title: 'Real-time maps & APIs', pct: '55%', desc: 'go through live distance, route and transit checks', thumbs: [IMG.paris, IMG.tokyo, IMG.rome, IMG.bali, IMG.maldives, IMG.alps, IMG.safari], plus: '+60' },
  { step: 'Step 2', title: 'Vetted hotel directory', pct: '21%', desc: 'pass multi-source review checks for style, quality and location', thumbs: [IMG.santorini, IMG.kyoto, IMG.taj, IMG.aurora, IMG.beach, IMG.lake], plus: '+19' },
  { step: 'Step 3', title: 'Local expert verification', pct: '5.3%', desc: 'get approved against current local guides and opening schedules', thumbs: [IMG.hills, IMG.valley], plus: '' },
  { step: 'Step 4', title: 'Final agent approval', pct: '0.82%', desc: 'of raw suggestions reach your client — fully verified and on-brand', thumbs: [], plus: '' },
];

const WHY_TAGS_ROWS = [
  { dir: 'normal', tags: ['Paris 🗼', 'Santorini 🏝️', 'Rome 🏛️', 'Tokyo ⛩️', 'Bali 🍃', 'Maldives 🐠', 'Culinary tour', 'Honeymoon', 'Adventure', 'Private villa'] },
  { dir: 'reverse', tags: ['Itinerary builder', 'Proposal canvas', 'Maps & routing', 'Hotel swapping', 'Client tracking', 'View alerts', 'Analytics'] },
  { dir: 'normal', tags: ['E-mail parser', 'PDF import', 'Voice notes', 'Collaborative link', 'Unlimited revisions', 'Branding control'] },
  { dir: 'reverse', tags: ['Save 4 hours', '43% more bookings', '80% faster delivery', 'Modern travel agent'] },
];

const CASES = [
  { title: 'Everything in one place — the agent workspace', tags: ['Dashboard', 'Workspace'], img: IMG.lake, light: true },
  { title: 'Santorini honeymoon: brief to booked in one call', tags: ['Honeymoon', '7 days', 'Luxury', 'Web proposal'], video: '/265655_medium.mp4' },
  { title: 'Rajasthan heritage circuit for a family of six', tags: ['Heritage', '14 days', 'Family'], img: IMG.taj },
  { title: 'Alpine slow-travel by rail, timed to the minute', tags: ['Mountains', '6 days', 'Rail-first'], img: IMG.alps },
  { title: 'Serengeti safari with private-camp upgrades', tags: ['Safari', '9 days', 'Adventure'], img: IMG.safari },
];

const SERVE_BEST = [
  { initial: 'W', color: '#6366f1', name: 'Wanderlux', desc: 'Boutique honeymoons across the Mediterranean', label: 'Closed:', stat: '$4.2M' },
  { initial: 'S', color: '#ec4899', name: 'Serene Routes', desc: 'Luxury South Asia tours for global clients', label: 'Closed:', stat: '$2.8M' },
  { initial: 'H', color: '#0ea5e9', name: 'Heritage Trails', desc: 'NRI journeys across Rajasthan and beyond', label: 'Closed:', stat: '$500K+' },
  { initial: 'O', color: '#10b981', name: 'Offbeat Journeys', desc: 'Slow travel and local experiences', label: '', stat: '', award: 'Most loved agency on Kyvari' },
];

const CAPABILITIES = [
  { title: 'Itinerary design', tags: ['Day-by-day plans', 'Maps & routing', 'Golden-hour timing', 'Route audit'], img: IMG.kyoto, span: 3 },
  { title: 'Proposal microsites', tags: ['Custom domain', 'Mobile-first', 'Galleries', 'Video covers'], img: IMG.santorini, span: 3 },
  { title: 'Client analytics', tags: ['View alerts', 'Dwell time', 'Conversion'], img: IMG.aurora, span: 2 },
  { title: 'Destination research', tags: ['Verified reviews', 'Opening hours'], img: IMG.paris, span: 2 },
  { title: 'Brand identity', tags: ['Your logo', 'Your colors'], img: IMG.maldives, span: 2 },
  { title: 'Travel documents', tags: ['Boarding passes', 'Vouchers'], img: IMG.tokyo, span: 3 },
  { title: 'Group departures', tags: ['Multi-room logic', 'Shared payments'], img: IMG.safari, span: 3 },
];
const CAPABILITY_MENU = ['Itineraries', 'Proposals', 'Analytics', 'Research'];

const TESTIMONIALS = [
  { name: 'Riya Malhotra', role: 'Founder at Wanderlux Travel', text: 'Before Kyvari, building a 7-day Europe proposal used to take me 4–5 hours — cross-referencing hotels, writing day-by-day notes, formatting everything in Word. Now I describe the brief and get a full itinerary with maps in under 10 minutes. Clients comment on how premium it looks.', photo: IMG.face1 },
  { name: 'Arjun Nair', role: 'CEO at Serene Routes', text: 'The level of detail Kyvari generates is honestly better than what I used to write manually after 10 years in luxury South Asia tours. Proposal turnaround went from 2 days to 2 hours.', photo: IMG.face2 },
  { name: 'Deepa Krishnamurthy', role: 'Senior Consultant at Heritage Trails', text: 'I can input “14 days, Rajasthan circuit, family of 6, heritage hotels” and get a structured day-by-day plan with map view. My NRI clients want everything planned before they land — Kyvari handles that complexity perfectly.', photo: IMG.face3 },
  { name: 'Sameer Qureshi', role: 'Director at Offbeat Journeys', text: 'I was skeptical — most AI tools gave generic, copy-paste itineraries. Kyvari actually understands nuance. “Slow travel, local experiences, no tourist traps, ₹80,000 for 10 days in Vietnam” — it gave me exactly that.', photo: IMG.face4 },
  { name: 'Elena Vasquez', role: 'Owner at GlobeTrail', text: 'We did the Pro plan, exceeded our expectations. Amazing support. Highly recommend.', photo: IMG.face5 },
  { name: 'Daniel Koch', role: 'Co-Founder at AtlasTravel', text: 'Only a week into using Kyvari and we already have an entire branded proposal flow that my team and clients are super happy with. Speed, quality, and cost — somehow it pulls off all three.', photo: IMG.face6 },
  { name: 'Aiko Tanaka', role: 'Independent advisor, Osaka', text: 'Kyvari quickly became my quiet co-worker. Clients send screenshots of the itinerary back with heart emojis.', photo: IMG.face3 },
];

const FAQ_ITEMS = [
  { q: 'What is Kyvari?', a: 'Kyvari is an AI-powered conversational travel assistant that helps travel agents build professional, interactive itineraries in seconds instead of hours.' },
  { q: 'How does Kyvari work?', a: 'You paste a client brief, email, or simple notes. The AI parses the request, searches maps, hotels, and routing, and generates a day-by-day plan you can refine on a live canvas.' },
  { q: 'Can I edit the generated itineraries?', a: 'Yes, absolutely. Kyvari features an editable canvas where you can add/remove days, swap hotels, edit text, and customize photos.' },
  { q: 'Can clients view the itineraries on mobile?', a: 'Yes. Every itinerary gets a beautiful, mobile-optimized public link you can share. It includes maps, photos, and hotel links.' },
  { q: 'How much does Kyvari cost?', a: 'We offer a Free plan with basic itinerary generations, and Pro/Agency plans starting at $29/month for unlimited itineraries and custom branding.' },
  { q: 'Does Kyvari support integrations?', a: 'Yes, you can export itineraries to PDFs, integrate with client management systems, or share directly to WhatsApp/Email.' },
];

const FOOTER_COLS = [
  { title: 'Product', links: ['AI Assistant', 'Proposal Builder', 'Editable Canvas', 'Live Map View', 'Client Tracking', 'Integrations'] },
  { title: 'Destinations', links: ['Paris Guide', 'Tokyo Guide', 'Santorini Guide', 'Rome Guide', 'Bali Guide'] },
  { title: 'Company', links: ['About us', 'Pricing', 'Case studies', 'Wall of Love', 'Blog', 'Careers'] },
  { title: 'Compare', links: ['vs. Manual Word Docs', 'vs. Static PDFs', 'vs. Legacy Software'] },
];

/* ═══ small components ═══ */
function KyvariMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38">
      <defs><linearGradient id="kylg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff8a5c" /><stop offset="1" stopColor="#e8543f" /></linearGradient></defs>
      <rect x="1" y="1" width="36" height="36" rx="11" fill="url(#kylg)" />
      <path d="M10 26 L23 12 c1.3-1.4 3.2-1.4 4-.5 .8.8.8 2.7-.5 4L12.6 29z" fill="#fff" />
      <circle cx="12.6" cy="27" r="2" fill="#ffe08a" />
    </svg>
  );
}

const Arrow = ({ dir = 'r', s = 16 }: { dir?: 'r' | 'l' | 'ur' | 'd'; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    {dir === 'r' && <path d="M5 12h14M13 6l6 6-6 6" />}
    {dir === 'l' && <path d="M19 12H5M11 6l-6 6 6 6" />}
    {dir === 'ur' && <path d="M7 17L17 7M8 7h9v9" />}
    {dir === 'd' && <path d="M6 9l6 6 6-6" />}
  </svg>
);

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ky-faq-item ${open ? 'ky-faq-item--open' : ''}`}>
      <button className="ky-faq-item__q" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <span className="ky-faq-chevron"><Arrow dir="d" s={18} /></span>
      </button>
      <div className="ky-faq-item__a"><p>{item.a}</p></div>
    </div>
  );
}

function useRail() {
  const ref = useRef<HTMLDivElement>(null);
  const go = (d: number) => ref.current?.scrollBy({ left: d * (ref.current.clientWidth * 0.72), behavior: 'smooth' });
  return { ref, go };
}
const RailArrows = ({ go }: { go: (d: number) => void }) => (
  <div className="ky-arrows">
    <button onClick={() => go(-1)} aria-label="Previous"><Arrow dir="l" s={15} /></button>
    <button onClick={() => go(1)} aria-label="Next"><Arrow dir="r" s={15} /></button>
  </div>
);

/* ─── HOW IT WORKS: accordion left + big image right (ref layout) ─── */
function HowItWorks() {
  const [active, setActive] = useState(1);
  return (
    <section className="ky-section" id="how-it-works">
      <div className="ky-text-center">
        <h2 className="ky-h3">How it works</h2>
        <p className="ky-subtitle">Skip the research pain and the formatting headache.<br />Move right to a signed-off trip.</p>
      </div>
      <div className="ky-how">
        <div className="ky-how__list">
          {HOW_STEPS.map((s, i) => (
            <button key={i} className={`ky-how-item ${active === i ? 'ky-how-item--active' : ''}`} onClick={() => setActive(i)}>
              <div className="ky-how-item__top">
                <span className="ky-how-item__num">{s.num}</span>
                <span className="ky-how-item__title">{s.title}</span>
                <span className="ky-how-item__chev"><Arrow dir={active === i ? 'r' : 'd'} s={15} /></span>
              </div>
              <div className="ky-how-item__body">
                <p>{s.desc}</p>
                <a href="#" className="ky-btn-dark ky-btn--sm"><span>Start now</span><Arrow dir="ur" s={13} /></a>
              </div>
            </button>
          ))}
        </div>
        <div className="ky-how__visual">
          <img src={A.howImg} alt="" className="ky-how__bg" />
          <div className="ky-how__panel">
            <div className="ky-how__panel-head">Untitled trip ⌄</div>
            <div className="ky-how__field">
              <label>Trip title</label>
              <div className="ky-how__input">Santorini honeymoon · 7 days</div>
              <label>Brief</label>
              <div className="ky-how__input ky-how__input--area">Boutique cave hotels, private sunset cruise, quiet beaches. Budget $5k.<span className="ky-how__gen">Generate with AI ✦</span></div>
              <div className="ky-how__row">
                <div className="ky-how__input">📅 Add travel dates</div>
                <div className="ky-how__input">⬆ Upload files</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */
export default function KyvariHome() {
  const services = useRail();
  const cases = useRail();
  const dests = useRail();
  const serve = useRail();

  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = FONT_CSS;
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div className="ky">

        {/* ═══ 1 · NAV ═══ */}
        <nav className="ky-nav">
          <a href="#" className="ky-nav__logo"><KyvariMark size={28} /><span>kyvari</span></a>
          <div className="ky-nav__links">
            <a href="#work">Our work</a>
            <a href="#pricing">Pricing</a>
            <a href="#features">Services</a>
            <a href="#destinations">Browse destinations</a>
            <a href="#testimonials">♥ Love</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ky-nav__right">
            <a href="#" className="ky-nav__login"><img src={A.loginB} alt="" />Log in</a>
            <a href="#" className="ky-btn-dark"><span>Book demo</span></a>
          </div>
        </nav>

        {/* ═══ 2 · ANNOUNCEMENT STRIP ═══ */}
        <div className="ky-strip">
          <img src={IMG.hills} alt="" className="ky-strip__img" />
          <div className="ky-strip__fade" />
          <div className="ky-strip__row">
            <span>🔥&nbsp; How modern travel agencies scale with AI: read the Kyvari benchmark report</span>
            <a href="#" className="ky-btn-white"><span>Get the free report</span>&nbsp;🎁</a>
          </div>
        </div>

        {/* ═══ 3 · HERO ═══ */}
        <section className="ky-hero">
          <div className="ky-hero__badges">
            <span className="ky-tag"><img src={A.ycBadge} alt="" style={{ height: 16 }} />Built for travel professionals</span>
            <span className="ky-tag"><img src={A.google} alt="" style={{ height: 15 }} /> 4.9 <span className="ky-star">★</span> 4.9</span>
          </div>
          <div className="ky-hero__grid">
            <h1 className="ky-hero__h1">
              All your <span className="ky-gray">travel</span><br />
              proposals done<br />
              in 60 seconds
            </h1>
            <div className="ky-hero__right">
              <p className="ky-hero__text">
                Stop researching hotels, routes and opening hours by hand. Describe the trip, match with
                a ready itinerary <img src={A.heroFaces} alt="" className="ky-hero__inlinefaces" /> and get your proposal delivered.
              </p>
              <div className="ky-heroform">
                <input type="email" placeholder="Email address" />
                <a href="#" className="ky-btn-dark ky-btn--lg"><span>Book demo</span></a>
              </div>
            </div>
          </div>
          <div className="ky-hero__foot">
            <div className="ky-hero__stats">
              <div className="ky-stat"><span className="ky-stat__num">15 000+</span><span className="ky-stat__label">itineraries<br />generated</span></div>
              <div className="ky-stat"><span className="ky-stat__num">5 000+</span><span className="ky-stat__label">travel advisors<br />worldwide</span></div>
            </div>
            <div className="ky-hero__logos">
              {LOGOS.slice(1, 6).map((l, i) => <img key={i} src={l.src} alt={l.alt} />)}
            </div>
          </div>
        </section>

        {/* ═══ 4 · SERVICE CARDS ═══ */}
        <section id="features" className="ky-flush">
          <div className="ky-railwrap" ref={services.ref}>
            {SERVICE_CARDS.map((c, i) => (
              <div key={i} className={`ky-scard ${c.type === 'image' ? 'ky-scard--img' : 'ky-scard--light'}`}>
                {c.type === 'image' && c.img && <><img className="ky-scard__bg" src={c.img} alt="" /><span className="ky-scard__shade" /></>}
                <div className="ky-scard__content">
                  <div className="ky-scard__title" style={{ whiteSpace: 'pre-line' }}>{c.title}</div>
                  {c.items && (
                    <ul className="ky-scard__list">
                      {c.items.map((it, j) => <li key={j}><img src={A.check} alt="" />{it}</li>)}
                    </ul>
                  )}
                  {c.tags && <div className="ky-scard__tags">{c.tags.map((t, j) => <span key={j} className="ky-cattag ky-cattag--glass">{t}</span>)}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 5 · BOTTLENECKS ═══ */}
        <section className="ky-block">
          <div className="ky-block__inner">
            <div className="ky-bottleneck">
              <div className="ky-bottleneck__left">
                <h2 className="ky-h3">We solve the bottlenecks that kill your speed</h2>
                <div className="ky-review-card">
                  <div className="ky-review-card__header">
                    <img src={TESTIMONIALS[0].photo} alt="" className="ky-avatar" />
                    <div><div className="ky-review-card__name">{TESTIMONIALS[0].name}</div><div className="ky-review-card__role">{TESTIMONIALS[0].role}</div></div>
                  </div>
                  <p className="ky-review-card__text">Game-changer for our agency — working with Kyvari has been one of the best decisions we’ve made for scaling our proposals.</p>
                </div>
              </div>
              <div className="ky-bottleneck__dark">
                {BOTTLENECK_ITEMS.map((b, i) => (
                  <div key={i} className="ky-bn-item">
                    <span className="ky-bn-item__arrow"><Arrow dir="r" s={13} /></span>
                    <span><span className="ky-gray2">{b.gray}</span>{b.bold}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ky-bnstats">
              <div className="ky-bnstat"><span className="ky-bnstat__num">80%</span><span className="ky-bnstat__desc">less time vs manual Word docs, PDFs, and legacy tools</span></div>
              <div className="ky-bnstat"><span className="ky-bnstat__num">43%</span><span className="ky-bnstat__desc">higher conversion on every proposal sent</span></div>
              <div className="ky-bnstat"><span className="ky-bnstat__num">60%</span><span className="ky-bnstat__desc">fewer revisions — powered by AI and verified data</span></div>
            </div>
          </div>
        </section>

        {/* ═══ 6 · DESTINATIONS (talent cards) ═══ */}
        <section className="ky-section" id="destinations">
          <div className="ky-rowhead">
            <h2 className="ky-h5">Why research from scratch if 140+ destinations are pre-vetted?</h2>
            <a href="#" className="ky-btn-dark"><span>Browse destinations</span></a>
          </div>
          <div className="ky-railwrap ky-railwrap--tight" ref={dests.ref}>
            {DESTINATIONS.map((t, i) => (
              <div key={i} className="ky-talent">
                <div className="ky-talent__photo"><img src={t.photo} alt={t.name} /></div>
                <div className="ky-talent__info">
                  <div className="ky-talent__name">{t.name}</div>
                  <div className="ky-talent__role"><b>{t.role}</b>, {t.years}</div>
                  <div className="ky-talent__tags">{t.tags.map((tag, j) => <span key={j} className="ky-cattag">{tag}</span>)}</div>
                  <div className="ky-talent__worked">
                    <span>Featured stays</span>
                    <b>{t.stay}</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 7 · WHY TEAMS CHOOSE KYVARI (bento) ═══ */}
        <section className="ky-section" id="testimonials">
          <h2 className="ky-h2 ky-text-center" style={{ marginBottom: 48 }}>Why teams choose Kyvari</h2>
          <div className="ky-why">
            <div className="ky-why__col">
              <div className="ky-why-card">
                <div className="ky-why-card__row">
                  <div><div className="ky-why-num">5 000+</div><div className="ky-why-sub">Travel advisors</div></div>
                  <img src={A.customersIcon} alt="" className="ky-why-icon" />
                </div>
                <div className="ky-minilogos"><div className="ky-minilogos__track">{[...LOGOS, ...LOGOS].map((l, i) => <img key={i} src={l.src} alt={l.alt} />)}</div></div>
              </div>
              <div className="ky-why-card ky-why-card--imgbg">
                <img src={IMG.valley} alt="" className="ky-why-card__bg" />
                <div className="ky-why-card__overlay" />
                <div className="ky-why-sub ky-why-sub--onimg">Verified<br />0.82% travel data</div>
              </div>
              <div className="ky-why-card ky-why-card--imgbg ky-why-card--short">
                <img src={IMG.hills} alt="" className="ky-why-card__bg" />
                <div className="ky-why-card__overlay" />
                <div className="ky-why-sub ky-why-sub--onimg">Proposals ready<br />within 60 seconds</div>
              </div>
            </div>

            <div className="ky-why__col">
              <div className="ky-why-card ky-why-card--video">
                <div className="ky-review-card__header">
                  <img src={TESTIMONIALS[1].photo} alt="" className="ky-avatar" />
                  <div><div className="ky-review-card__name">{TESTIMONIALS[1].name}</div><div className="ky-review-card__role">{TESTIMONIALS[1].role}</div></div>
                </div>
                <div className="ky-whyvideo">
                  <video autoPlay loop muted playsInline><source src="/265655_medium.mp4" type="video/mp4" /></video>
                  <span className="ky-whyvideo__play">▶</span>
                  <span className="ky-whyvideo__tag">OUR FIRST</span>
                </div>
              </div>
            </div>

            <div className="ky-why__col">
              <div className="ky-why-card ky-why-card--short">
                <div className="ky-why-card__row">
                  <div><div className="ky-why-num">15 000+</div><div className="ky-why-sub">Itineraries generated</div></div>
                  <img src={A.projectsIcon} alt="" className="ky-why-icon" />
                </div>
              </div>
              <div className="ky-why-card">
                <div className="ky-tagmark">
                  {WHY_TAGS_ROWS.map((row, i) => (
                    <div key={i} className="ky-tagmark__row">
                      <div className={`ky-tagmark__inner ${row.dir === 'reverse' ? 'ky-tagmark__inner--rev' : ''}`}>
                        {[...row.tags, ...row.tags].map((t, j) => <span key={j} className={`ky-cattag ${j % 6 === 3 ? 'ky-cattag--dark' : ''}`}>{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ky-why-card ky-why-card--short">
                <div className="ky-why-card__row">
                  <div><div className="ky-why-num">140+</div><div className="ky-why-sub">Destinations</div></div>
                  <img src={A.skillSetIcon} alt="" className="ky-why-icon" />
                </div>
              </div>
              <div className="ky-why-card ky-why-card--fee">
                <div className="ky-why-sub" style={{ textAlign: 'center' }}>Flat monthly fee</div>
                <span className="ky-cattag" style={{ marginTop: 10, background: '#fff' }}>from $0/month</span>
                <img src={A.rockLogo} alt="" className="ky-why-card__rock" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8 · HOW IT WORKS ═══ */}
        <HowItWorks />

        {/* ═══ 9 · VETTING FUNNEL ═══ */}
        <section className="ky-block">
          <div className="ky-block__inner">
            <div className="ky-text-center">
              <h2 className="ky-h2">Only the top 0.82% gets proposed</h2>
              <p className="ky-subtitle">Every suggestion is matched against verified, real-time travel data</p>
            </div>
            <div className="ky-vetting">
              {VETTING_STEPS.map((s, i) => (
                <div key={i} className={`ky-vet ky-vet--${i}`}>
                  <div className="ky-vet__top">
                    <span className="ky-cattag ky-vet__badge">{s.step}</span>
                    <div className="ky-vet__title">{s.title}</div>
                  </div>
                  <div className="ky-vet__bottom">
                    {i === 3 && <img src={A.step4Img} alt="" style={{ width: 96, margin: '0 auto 18px' }} />}
                    <div className="ky-vet__pct">{s.pct}</div>
                    <p>{s.desc}</p>
                    {s.thumbs.length > 0 && (
                      <div className="ky-vet__thumbs">
                        {s.thumbs.map((f, j) => <img key={j} src={f} alt="" />)}
                        {s.plus && <span>{s.plus}</span>}
                      </div>
                    )}
                    {i === 3 && <a href="#pricing" className="ky-btn-dark ky-btn--full" style={{ marginTop: 18 }}><span>Start free</span><img src={A.loginW} alt="" style={{ height: 16 }} /></a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 10 · MID BANNER ═══ */}
        <section className="ky-midbanner">
          <div className="ky-midbanner__content">
            <h2 className="ky-h2">Get your <span className="ky-gray">proposals</span><br />done without headache</h2>
            <div className="ky-heroform" style={{ maxWidth: 460, marginTop: 36 }}>
              <input type="email" placeholder="Email address" />
              <a href="#" className="ky-btn-dark ky-btn--lg"><span>Get started</span></a>
            </div>
          </div>
          <img src={IMG.hills} alt="" className="ky-midbanner__img" />
        </section>

        {/* ═══ 11 · CASE CAROUSEL ═══ */}
        <section id="work" className="ky-flush ky-flush--gray">
          <div className="ky-rowhead">
            <h2 className="ky-h5">15 000+ briefs became booked journeys</h2>
            <RailArrows go={cases.go} />
          </div>
          <div className="ky-railwrap" ref={cases.ref}>
            {CASES.map((c, i) => (
              <div key={i} className={`ky-case ${c.light ? 'ky-case--light' : ''}`}>
                {c.video
                  ? <video className="ky-case__bg" autoPlay loop muted playsInline><source src={c.video} type="video/mp4" /></video>
                  : <img className="ky-case__bg" src={c.img} alt="" />}
                {!c.light && <span className="ky-case__shade" />}
                <div className="ky-case__bottom">
                  <div className="ky-case__title">{c.title}</div>
                  <div className="ky-case__row">
                    <div className="ky-case__tags">{c.tags.map((t, j) => <span key={j} className="ky-cattag ky-cattag--glass">{t}</span>)}</div>
                    <span className="ky-case__open"><Arrow dir="ur" s={15} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 12 · WE SERVE THE BEST ═══ */}
        <section className="ky-flush">
          <div className="ky-rowhead">
            <h2 className="ky-h5">We serve the best in travel</h2>
            <RailArrows go={serve.go} />
          </div>
          <div className="ky-railwrap ky-railwrap--tight" ref={serve.ref}>
            {SERVE_BEST.map((s, i) => (
              <div key={i} className="ky-serve">
                <div className="ky-serve__head">
                  <span className="ky-serve__logo" style={{ background: s.color }}>{s.initial}</span>
                  <b>{s.name}</b>
                </div>
                <p>{s.desc}</p>
                {s.stat ? (
                  <div className="ky-serve__stat"><span>{s.label}</span><b>{s.stat}</b></div>
                ) : (
                  <div className="ky-serve__award">🏆 {s.award}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 13 · ONE SUBSCRIPTION ═══ */}
        <section className="ky-section">
          <div className="ky-onesub">
            <div className="ky-onesub__left">
              <h2 className="ky-h2">One <img src={A.rockLogo} alt="" className="ky-onesub__rock" /> subscription.<br />Every <span className="ky-gray">travel</span><br />capability</h2>
              <div className="ky-onesub__menu">
                {CAPABILITY_MENU.map((m, i) => (
                  <div key={i} className={`ky-onesub__menuitem ${i === 0 ? 'ky-onesub__menuitem--active' : ''}`}>{i === 0 && '✦ '}{m}</div>
                ))}
                <div className="ky-onesub__menuimg">
                  <img src={IMG.lake} alt="" />
                  <a href="#" className="ky-btn-dark ky-btn--full"><span>Get started</span></a>
                </div>
              </div>
            </div>
            <div className="ky-caps">
              {CAPABILITIES.map((c, i) => (
                <div key={i} className="ky-cap" style={{ gridColumn: `span ${c.span}` }}>
                  <div className="ky-cap__img"><img src={c.img} alt="" /></div>
                  <div className="ky-cap__body">
                    <div className="ky-cap__title">{c.title}</div>
                    <div className="ky-cap__tags">{c.tags.map((t, j) => <span key={j} className="ky-cattag">{t}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 14 · CONSULTATION BANNER ═══ */}
        <section className="ky-consult">
          <img src={IMG.panorama} alt="" className="ky-consult__img" />
          <div className="ky-consult__overlay" />
          <div className="ky-consult__content">
            <h2>Free walkthrough to scope<br />your travel workflow</h2>
            <a href="#" className="ky-btn-glassdark"><span>›››&nbsp; Book demo &nbsp;‹‹‹</span></a>
          </div>
        </section>

        {/* ═══ 15 · TRUSTED / TESTIMONIAL MASONRY ═══ */}
        <section className="ky-section">
          <div className="ky-text-center">
            <div className="ky-trusted__pills">
              <span className="ky-tag"><img src={A.google} alt="" style={{ height: 14 }} /> 4.9</span>
              <span className="ky-tag"><span className="ky-star">★</span> 4.8</span>
            </div>
            <h2 className="ky-h2" style={{ marginTop: 18 }}>Trusted by 5 000+ travel companies</h2>
          </div>
          <div className="ky-masonry">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="ky-review-card ky-masonry__card">
                <div className="ky-review-card__header">
                  <img src={t.photo} alt="" className="ky-avatar" />
                  <div><div className="ky-review-card__name">{t.name}</div><div className="ky-review-card__role">{t.role}</div></div>
                </div>
                {i === 1 && (
                  <div className="ky-masonry__video">
                    <img src={IMG.beach} alt="" />
                    <span className="ky-whyvideo__play">▶</span>
                  </div>
                )}
                <p className="ky-review-card__text">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 16 · PRICING ═══ */}
        <section className="ky-section" id="pricing">
          <div className="ky-text-center">
            <h2 className="ky-h2">Simple, flat-rate pricing</h2>
            <p className="ky-subtitle">No hidden fees. Scale your travel business with predictable pricing.</p>
          </div>
          <div className="ky-pricing">
            {[
              { name: 'Starter', price: '$0', desc: 'Perfect for trying out Kyvari AI for your agency.', feats: ['5 itineraries per month', 'AI prompt planner', 'Interactive web links', 'Live map view'], cta: 'Start free', dark: false },
              { name: 'Pro', price: '$29', desc: 'For professional travel agents ready to scale.', feats: ['Unlimited itineraries', 'Custom branding & logo', 'Client view tracking & analytics', 'Priority AI processing queue', 'Premium image gallery access'], cta: 'Go Pro', dark: true, badge: 'MOST POPULAR' },
              { name: 'Agency', price: '$79', desc: 'For collaborative teams and travel groups.', feats: ['Everything in Pro', 'Up to 5 team members', 'Collaborative workspace', 'Custom subdomain setup', 'Dedicated support desk'], cta: 'Contact sales', dark: false },
            ].map((p, i) => (
              <div key={i} className={`ky-price ${p.dark ? 'ky-price--dark' : ''}`}>
                {p.badge && <span className="ky-price__badge">{p.badge}</span>}
                <div className="ky-price__name">{p.name}</div>
                <div className="ky-price__amount">{p.price}<span>/mo</span></div>
                <p className="ky-price__desc">{p.desc}</p>
                <ul className="ky-price__feats">
                  {p.feats.map((f, j) => <li key={j}><img src={A.check} alt="" />{f}</li>)}
                </ul>
                <a href="#" className={`${p.dark ? 'ky-btn-white2' : 'ky-btn-dark'} ky-btn--full`} style={{ marginTop: 'auto' }}><span>{p.cta}</span></a>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 17 · FINAL CTA ═══ */}
        <section className="ky-cta">
          <h2 className="ky-cta__h">
            You are one call away from<br />a top travel{' '}
            <span className="ky-cta__faces">
              <img src={IMG.face1} alt="" /><img src={IMG.face2} alt="" /><img src={IMG.face4} alt="" />
            </span>{' '}
            team
          </h2>
          <div className="ky-heroform ky-cta__form">
            <input type="email" placeholder="Email address" />
            <a href="#" className="ky-btn-dark ky-btn--lg"><span>Book a call</span></a>
          </div>
          <div className="ky-cta__pan"><img src={IMG.panorama} alt="" /></div>
        </section>

        {/* ═══ 18 · FAQ ═══ */}
        <section className="ky-section" id="faq">
          <div className="ky-faq">
            <div className="ky-faq__left">
              <h2 className="ky-h3">FAQ</h2>
              <p className="ky-subtitle" style={{ marginTop: 14 }}>Ask AI to summarize Kyvari</p>
              <div className="ky-faq__ai">
                {['✦', '❋', '✳', '✧', '◎'].map((g, i) => <span key={i} className="ky-faq__aichip">{g}</span>)}
              </div>
              <div className="ky-faq__still">
                <div style={{ fontWeight: 600, fontSize: 18 }}>Still have questions?</div>
                <p>Let&apos;s talk — book an intro call with our product experts.</p>
                <a href="#" className="ky-btn-dark"><span>Book a call</span><img src={A.faces} alt="" style={{ height: 20 }} /></a>
              </div>
            </div>
            <div className="ky-faq__right">
              {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} />)}
            </div>
          </div>
        </section>

        {/* ═══ 19 · FOOTER ═══ */}
        <footer className="ky-footer">
          <div className="ky-footer__inner">
            <div className="ky-footer__top">
              <div>
                <div className="ky-footer__brand"><KyvariMark size={28} /><span>kyvari</span></div>
                <p className="ky-footer__tag">The AI workspace that matches travel advisors with ready-to-send itineraries.</p>
                <div className="ky-footer__socials">
                  {['in', 'X', 'ig', 'yt'].map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
              {FOOTER_COLS.map((col, i) => (
                <div key={i} className="ky-footer__col">
                  <div className="ky-footer__col-title">{col.title}</div>
                  {col.links.map((link, j) => <a key={j} href="#">{link}</a>)}
                </div>
              ))}
            </div>
            <div className="ky-footer__bottom">
              <span>© 2026 Kyvari AI. All rights reserved.</span>
              <div className="ky-footer__bottom-links">
                <a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Settings</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ═══════════════════════ CSS (scoped .ky) ═══════════════════════ */
const PAGE_CSS = `
.ky,.ky *,.ky *::before,.ky *::after{box-sizing:border-box;margin:0;padding:0}
.ky{font-family:Cosmic,ui-sans-serif,system-ui,sans-serif;color:#09090b;background:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.ky a{color:inherit;text-decoration:none}
.ky a.ky-btn-dark{color:#fff}
.ky img,.ky video{max-width:100%;display:block}
.ky button{cursor:pointer;border:none;background:none;font-family:inherit;color:inherit}
.ky ul{list-style:none}
.ky-text-center{text-align:center}
.ky-gray{color:#a1a1aa}
.ky-gray2{color:#a1a1aa}
.ky-star{color:#00b67a;font-size:14px}
.ky-h2{font-size:56px;font-weight:600;line-height:1.12;letter-spacing:-.01em}
.ky-h3{font-size:44px;font-weight:600;line-height:1.18;letter-spacing:-.01em}
.ky-h5{font-size:24px;font-weight:600;line-height:1.3}
.ky-subtitle{font-size:16px;font-weight:400;color:#52525b;margin-top:18px;line-height:1.55}

/* buttons */
.ky-btn-dark{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#09090b;color:#fff;font-size:14px;font-weight:500;padding:11px 20px;border-radius:1000px;border:1.5px solid #2c2e34;box-shadow:rgba(255,255,255,.5) 0 .5px 0 0 inset,rgba(117,123,133,.4) 0 9px 14px -5px inset,rgb(44,46,52) 0 0 0 1.5px,rgba(0,0,0,.14) 0 4px 6px 0;transition:transform .2s;white-space:nowrap}
.ky-btn-dark:hover{transform:translateY(-1px)}
.ky-btn-dark.ky-btn--lg{padding:13px 26px;font-size:15px}
.ky-btn-dark.ky-btn--sm{padding:8px 16px;font-size:13px}
.ky-btn--full{width:100%}
.ky-btn-white{display:inline-flex;align-items:center;gap:6px;background:#fff;color:#18181b;font-size:13.5px;font-weight:500;padding:9px 16px;border-radius:1000px;border:1px solid #ececee;box-shadow:0 2px 6px rgba(0,0,0,.06);white-space:nowrap;transition:transform .2s}
.ky-btn-white:hover{transform:translateY(-1px)}
.ky-btn-white2{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#fff;color:#09090b;font-size:14px;font-weight:600;padding:12px 20px;border-radius:1000px;white-space:nowrap;transition:transform .2s}
.ky-btn-white2:hover{transform:translateY(-1px)}
.ky-btn-glassdark{display:inline-flex;align-items:center;gap:8px;background:rgba(9,9,11,.55);backdrop-filter:blur(10px);color:#fff;font-size:15px;font-weight:500;padding:13px 26px;border-radius:14px;border:1px solid rgba(255,255,255,.18);white-space:nowrap;transition:transform .2s}
.ky-btn-glassdark:hover{transform:translateY(-1px)}
.ky a.ky-btn-glassdark,.ky a.ky-btn-white2{color:#fff}
.ky a.ky-btn-white2{color:#09090b}

/* tags */
.ky-tag{display:inline-flex;align-items:center;gap:7px;background:#fafafa;border:1px solid #ececee;border-radius:12px;padding:5px 12px;font-size:13.5px;font-weight:500;color:#18181b}
.ky-cattag{display:inline-flex;align-items:center;border:1px solid #ececee;border-radius:1000px;padding:4px 10px;font-size:12.5px;font-weight:400;color:#18181b;white-space:nowrap;background:#fff}
.ky-cattag--glass{background:rgba(20,20,22,.4);border-color:rgba(255,255,255,.34);color:#fff;backdrop-filter:blur(8px)}
.ky-cattag--dark{background:#3f3f46;border-color:#3f3f46;color:#fafafa}
.ky-avatar{width:46px;height:46px;border-radius:50%;object-fit:cover}

/* nav */
.ky-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:64px}
.ky-nav__logo{display:flex;align-items:center;gap:8px;font-size:20px;font-weight:700;letter-spacing:-.02em}
.ky-nav__links{display:flex;gap:26px;font-size:14.5px;font-weight:500;color:#18181b}
.ky-nav__links a:hover{color:#71717a}
.ky-nav__right{display:flex;gap:14px;align-items:center}
.ky-nav__login{display:inline-flex;align-items:center;gap:7px;font-size:14.5px;font-weight:500}
.ky-nav__login img{height:16px}

/* announcement strip */
.ky-strip{position:relative;margin:76px 12px 0;height:62px;border-radius:18px;overflow:hidden}
.ky-strip__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-strip__fade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.35),#fff 22%,#fff 78%,rgba(255,255,255,.35))}
.ky-strip__row{position:relative;height:100%;display:flex;align-items:center;justify-content:center;gap:18px;padding:0 20px;font-size:14.5px;font-weight:500;flex-wrap:wrap}

/* hero */
.ky-hero{max-width:1344px;margin:0 auto;padding:64px 32px 40px}
.ky-hero__badges{display:flex;gap:10px;margin-bottom:28px;flex-wrap:wrap}
.ky-hero__grid{display:grid;grid-template-columns:1.35fr 1fr;gap:56px;align-items:start}
.ky-hero__h1{font-size:clamp(40px,4.9vw,70px);font-weight:600;line-height:1.1;letter-spacing:-.015em}
.ky-hero__right{padding-top:10px}
.ky-hero__text{font-size:17px;font-weight:400;line-height:1.55;color:#18181b;margin-bottom:36px;max-width:420px}
.ky-hero__inlinefaces{display:inline;height:22px;vertical-align:-4px}
.ky-heroform{display:flex;align-items:center;background:#fff;border:1px solid #ececee;border-radius:1000px;padding:5px 5px 5px 20px;box-shadow:0 8px 24px rgba(0,0,0,.05);max-width:520px}
.ky-heroform input{flex:1;min-width:0;border:none;outline:none;font-family:inherit;font-size:14.5px;color:#09090b;background:transparent}
.ky-heroform input::placeholder{color:#a1a1aa}
.ky-hero__foot{display:flex;align-items:center;justify-content:space-between;gap:32px;margin-top:72px;flex-wrap:wrap}
.ky-hero__stats{display:flex;gap:48px}
.ky-stat{display:flex;align-items:baseline;gap:12px}
.ky-stat__num{font-size:42px;font-weight:600;letter-spacing:-.01em}
.ky-stat__label{font-size:13.5px;font-weight:500;color:#52525b;line-height:1.35}
.ky-hero__logos{display:flex;align-items:center;gap:36px;flex-wrap:wrap}
.ky-hero__logos img{height:26px;opacity:.45;filter:grayscale(1)}

/* rails */
.ky-flush{padding:36px 0}
.ky-flush--gray{background:#f4f4f5;border-radius:36px;margin:36px 8px;padding:64px 0}
.ky-rowhead{max-width:1344px;margin:0 auto 28px;padding:0 32px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.ky-arrows{display:flex;gap:8px}
.ky-arrows button{width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid #ececee;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.05);transition:background .2s}
.ky-arrows button:hover{background:#f4f4f5}
.ky-railwrap{display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;padding-top:4px;padding-bottom:8px;padding-left:max(32px,calc(50vw - 672px));padding-right:max(32px,calc(50vw - 672px))}
.ky-railwrap::-webkit-scrollbar{display:none}
.ky-railwrap--tight{gap:12px}

/* service cards */
.ky-scard{flex:none;width:418px;height:576px;border-radius:32px;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:32px}
.ky-scard--light{background:#f0f0f1}
.ky-scard--img{color:#fff}
.ky-scard__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.ky-scard__shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.42),rgba(0,0,0,.04) 45%,rgba(0,0,0,.5));z-index:0}
.ky-scard__content{position:relative;z-index:1;display:flex;flex-direction:column;height:100%}
.ky-scard__title{font-size:27px;font-weight:600;line-height:1.28;letter-spacing:-.01em}
.ky-scard__list{margin-top:36px;display:flex;flex-direction:column;gap:14px}
.ky-scard__list li{display:flex;align-items:center;gap:11px;font-size:16px;font-weight:400}
.ky-scard__list img{width:22px;height:22px;flex:none}
.ky-scard__tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}

/* gray blocks */
.ky-block{background:#f4f4f5;border-radius:36px;margin:36px 8px}
.ky-block__inner{max-width:1344px;margin:0 auto;padding:88px 44px}
.ky-section{max-width:1344px;margin:0 auto;padding:88px 32px}

/* bottleneck */
.ky-bottleneck{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:start}
.ky-bottleneck__left .ky-h3{max-width:420px;margin-bottom:100px}
.ky-bottleneck__dark{background:#18181b;border-radius:28px;padding:12px 32px;color:#fff}
.ky-bn-item{display:flex;align-items:center;gap:14px;font-size:19px;font-weight:600;padding:19px 0;border-bottom:1px solid #27272a}
.ky-bn-item:last-child{border-bottom:none}
.ky-bn-item__arrow{width:28px;height:28px;flex:none;border-radius:50%;background:#27272a;display:flex;align-items:center;justify-content:center;color:#fff}
.ky-bnstats{display:flex;gap:56px;padding-top:48px;border-top:1px solid #e4e4e7;margin-top:56px;flex-wrap:wrap}
.ky-bnstat{display:flex;align-items:baseline;gap:14px}
.ky-bnstat__num{font-size:52px;font-weight:600;letter-spacing:-.015em}
.ky-bnstat__desc{font-size:14.5px;color:#52525b;line-height:1.45;max-width:210px}
.ky-review-card{background:#fff;border:1px solid #ececee;border-radius:28px;padding:24px}
.ky-review-card__header{display:flex;gap:12px;align-items:center;margin-bottom:14px}
.ky-review-card__name{font-size:18px;font-weight:700}
.ky-review-card__role{font-size:13.5px;color:#52525b}
.ky-review-card__text{font-size:15px;line-height:1.55;color:#18181b}

/* talent/destination cards */
.ky-talent{flex:none;width:300px;border-radius:28px;overflow:hidden;border:1px solid #ececee;background:#fff}
.ky-talent__photo{height:300px;background:#e9e9eb}
.ky-talent__photo img{width:100%;height:100%;object-fit:cover}
.ky-talent__info{padding:18px 20px 22px}
.ky-talent__name{font-size:14px;color:#52525b}
.ky-talent__role{font-size:15px;color:#52525b;margin:2px 0 12px}
.ky-talent__role b{font-size:21px;font-weight:600;color:#09090b;letter-spacing:-.01em}
.ky-talent__tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:18px}
.ky-talent__worked span{display:block;font-size:13px;color:#71717a;margin-bottom:4px}
.ky-talent__worked b{font-size:15px;font-weight:600}

/* why bento */
.ky-why{display:grid;grid-template-columns:1fr 1.02fr 1fr;gap:14px;align-items:stretch}
.ky-why__col{display:flex;flex-direction:column;gap:14px;min-width:0}
.ky-why-card{background:#f0f0f1;border-radius:28px;padding:26px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;flex:1;min-height:170px;min-width:0;width:100%;max-width:100%}
.ky-why-card__row{display:flex;align-items:center;justify-content:space-between;width:100%;gap:14px}
.ky-why-num{font-size:38px;font-weight:600;letter-spacing:-.015em}
.ky-why-sub{font-size:17px;font-weight:600;line-height:1.4}
.ky-why-icon{width:72px;height:72px;object-fit:contain}
.ky-minilogos{width:100%;overflow:hidden;margin-top:20px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.ky-minilogos__track{display:flex;align-items:center;gap:34px;width:max-content;animation:ky-marq 22s linear infinite}
.ky-minilogos__track img{height:20px;opacity:.5;filter:grayscale(1)}
@keyframes ky-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.ky-why-card--imgbg{min-height:280px}
.ky-why-card--short{min-height:150px;flex:none}
.ky-why-card__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-why-card__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.1) 55%)}
.ky-why-sub--onimg{position:relative;text-align:center}
.ky-why-card--video{background:#fff;border:1px solid #ececee;align-items:stretch;justify-content:flex-start;padding:20px}
.ky-whyvideo{position:relative;border-radius:18px;overflow:hidden;flex:1;min-height:420px;margin-top:4px}
.ky-whyvideo video,.ky-masonry__video img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-whyvideo__play{position:absolute;left:16px;bottom:16px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.9);color:#09090b;display:flex;align-items:center;justify-content:center;font-size:15px}
.ky-whyvideo__tag{position:absolute;right:0;bottom:22px;background:#09090b;color:#fff;font-size:12px;font-weight:700;letter-spacing:.06em;padding:8px 14px}
.ky-tagmark{display:flex;flex-direction:column;gap:8px;width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.ky-tagmark__row{overflow:hidden}
.ky-tagmark__inner{display:flex;gap:6px;width:max-content;animation:ky-marq 36s linear infinite}
.ky-tagmark__inner--rev{animation-direction:reverse}
.ky-why-card--fee{min-height:230px;justify-content:flex-start;padding-top:30px}
.ky-why-card__rock{position:absolute;bottom:-16px;right:50%;transform:translateX(50%);width:170px}

/* how */
.ky-how{display:grid;grid-template-columns:.92fr 1.08fr;gap:18px;margin-top:56px;align-items:stretch}
.ky-how__list{display:flex;flex-direction:column;gap:14px}
.ky-how-item{background:#f0f0f1;border-radius:26px;padding:24px 28px;text-align:left;transition:all .3s}
.ky-how-item--active{background:#fff;box-shadow:0 18px 44px rgba(0,0,0,.09)}
.ky-how-item__top{display:flex;align-items:center;gap:16px}
.ky-how-item__num{font-size:13px;font-weight:600;color:#71717a;background:#fff;border-radius:50%;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex:none}
.ky-how-item--active .ky-how-item__num{background:#09090b;color:#fff}
.ky-how-item__title{font-size:21px;font-weight:600;letter-spacing:-.01em}
.ky-how-item__chev{margin-left:auto;color:#71717a;width:34px;height:34px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none}
.ky-how-item--active .ky-how-item__chev{background:#09090b;color:#fff}
.ky-how-item__body{max-height:0;overflow:hidden;transition:max-height .4s ease}
.ky-how-item--active .ky-how-item__body{max-height:160px}
.ky-how-item__body p{font-size:15px;color:#52525b;line-height:1.5;padding:16px 0}
.ky-how__visual{position:relative;border-radius:32px;overflow:hidden;min-height:560px}
.ky-how__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-how__panel{position:absolute;inset:0;margin:auto;width:min(78%,460px);height:fit-content;background:rgba(255,255,255,.72);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.7);border-radius:20px;padding:22px;box-shadow:0 30px 70px rgba(9,9,11,.22)}
.ky-how__panel-head{font-size:13px;font-weight:600;color:#52525b;margin-bottom:14px}
.ky-how__field label{display:block;font-size:11.5px;font-weight:600;color:#71717a;margin:12px 0 6px}
.ky-how__input{background:#fff;border:1px solid #ececee;border-radius:11px;padding:10px 13px;font-size:13px;color:#18181b;position:relative}
.ky-how__input--area{min-height:74px;line-height:1.5}
.ky-how__gen{position:absolute;right:10px;bottom:8px;font-size:11px;font-weight:600;color:#7c3aed}
.ky-how__row{display:flex;gap:8px;margin-top:12px}
.ky-how__row .ky-how__input{flex:1;color:#71717a}

/* vetting */
.ky-vetting{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:56px}
.ky-vet{border-radius:28px;padding:26px;display:flex;flex-direction:column;justify-content:space-between;min-height:520px}
.ky-vet--0{background:#3f3f46;color:#fff}
.ky-vet--1{background:#fff;border:1px solid #ececee}
.ky-vet--1 .ky-vet__bottom{background:#a1a1aa;color:#fff;margin:-26px;margin-top:20px;padding:26px;border-radius:0 0 28px 28px}
.ky-vet--2{background:#fff;border:1px solid #ececee}
.ky-vet--2 .ky-vet__bottom{background:#d4d4d8;margin:-26px;margin-top:20px;padding:26px;border-radius:0 0 28px 28px}
.ky-vet--3{background:#fff;border:1px solid #ececee;text-align:center}
.ky-vet__badge{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.22);color:inherit}
.ky-vet--1 .ky-vet__badge,.ky-vet--2 .ky-vet__badge,.ky-vet--3 .ky-vet__badge{background:#fafafa;border-color:#ececee;color:#09090b}
.ky-vet__title{font-size:21px;font-weight:600;margin-top:16px;letter-spacing:-.01em}
.ky-vet__pct{font-size:52px;font-weight:600;letter-spacing:-.02em;margin-bottom:10px}
.ky-vet__bottom p{font-size:14px;line-height:1.5;opacity:.85}
.ky-vet__thumbs{display:flex;align-items:center;margin-top:18px}
.ky-vet__thumbs img{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.8);margin-left:-10px}
.ky-vet__thumbs img:first-child{margin-left:0}
.ky-vet__thumbs span{margin-left:10px;font-size:12.5px;font-weight:600;opacity:.8}

/* mid banner */
.ky-midbanner{position:relative;max-width:1408px;margin:36px auto;width:calc(100% - 16px);border-radius:36px;overflow:hidden;background:#f0f0f1;min-height:440px;display:flex;align-items:center}
.ky-midbanner__content{position:relative;z-index:1;padding:64px;max-width:640px}
.ky-midbanner__img{position:absolute;right:0;top:0;bottom:0;width:52%;height:100%;object-fit:cover;-webkit-mask-image:linear-gradient(90deg,transparent,#000 34%);mask-image:linear-gradient(90deg,transparent,#000 34%)}

/* cases */
.ky-case{flex:none;width:820px;height:600px;border-radius:32px;overflow:hidden;position:relative;color:#fff}
.ky-case--light{color:#09090b}
.ky-case__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-case__shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.12),transparent 45%,rgba(0,0,0,.62))}
.ky-case__bottom{position:absolute;left:26px;right:26px;bottom:24px}
.ky-case__title{font-size:24px;font-weight:600;letter-spacing:-.01em;max-width:520px;line-height:1.25}
.ky-case__row{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-top:14px}
.ky-case__tags{display:flex;flex-wrap:wrap;gap:6px}
.ky-case--light .ky-cattag--glass{background:rgba(255,255,255,.72);border-color:#ececee;color:#09090b}
.ky-case__open{width:44px;height:44px;flex:none;border-radius:12px;background:#fff;color:#09090b;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.18)}

/* serve best */
.ky-serve{flex:none;width:440px;background:#fff;border:1px solid #ececee;border-radius:28px;padding:28px;display:flex;flex-direction:column;min-height:250px}
.ky-serve__head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.ky-serve__head b{font-size:22px;font-weight:700;letter-spacing:-.01em}
.ky-serve__logo{width:40px;height:40px;border-radius:12px;color:#fff;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center}
.ky-serve p{font-size:15.5px;color:#52525b;line-height:1.5}
.ky-serve__stat{margin-top:auto;padding-top:22px}
.ky-serve__stat span{display:block;font-size:13.5px;color:#71717a;margin-bottom:4px}
.ky-serve__stat b{font-size:40px;font-weight:600;letter-spacing:-.015em}
.ky-serve__award{margin-top:auto;padding-top:22px;font-size:16px;font-weight:600}

/* one subscription */
.ky-onesub{display:grid;grid-template-columns:.9fr 2.1fr;gap:48px;align-items:start}
.ky-onesub__left{position:sticky;top:96px}
.ky-onesub__rock{display:inline;height:44px;vertical-align:-8px}
.ky-onesub__menu{margin-top:36px;background:#f0f0f1;border-radius:24px;padding:12px;display:flex;flex-direction:column;gap:4px}
.ky-onesub__menuitem{font-size:15px;font-weight:500;color:#52525b;padding:12px 16px;border-radius:14px;cursor:pointer}
.ky-onesub__menuitem--active{background:#fff;color:#09090b;font-weight:600;box-shadow:0 3px 10px rgba(0,0,0,.05)}
.ky-onesub__menuimg{position:relative;margin-top:10px;border-radius:16px;overflow:hidden}
.ky-onesub__menuimg img{width:100%;height:190px;object-fit:cover}
.ky-onesub__menuimg a{position:absolute;left:12px;right:12px;bottom:12px}
.ky-caps{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
.ky-cap{background:#fff;border:1px solid #ececee;border-radius:26px;overflow:hidden;display:flex;flex-direction:column}
.ky-cap__img{height:280px;background:#f0f0f1}
.ky-cap__img img{width:100%;height:100%;object-fit:cover}
.ky-cap__body{padding:20px 22px 24px}
.ky-cap__title{font-size:22px;font-weight:600;letter-spacing:-.01em;margin-bottom:12px}
.ky-cap__tags{display:flex;flex-wrap:wrap;gap:6px}

/* consultation banner */
.ky-consult{position:relative;max-width:1408px;margin:36px auto;width:calc(100% - 16px);border-radius:36px;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center}
.ky-consult__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-consult__overlay{position:absolute;inset:0;background:rgba(9,9,11,.28)}
.ky-consult__content{position:relative;text-align:center;color:#fff;padding:32px}
.ky-consult__content h2{font-size:clamp(34px,4.6vw,60px);font-weight:600;line-height:1.16;letter-spacing:-.012em;margin-bottom:36px}

/* trusted masonry */
.ky-trusted__pills{display:flex;justify-content:center;gap:8px}
.ky-masonry{columns:3;column-gap:16px;margin-top:52px}
.ky-masonry__card{break-inside:avoid;margin-bottom:16px}
.ky-masonry__video{position:relative;border-radius:18px;overflow:hidden;height:300px;margin-bottom:14px}

/* pricing */
.ky-pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px}
.ky-price{background:#fff;border:1px solid #ececee;border-radius:32px;padding:32px;display:flex;flex-direction:column;min-height:520px;position:relative}
.ky-price--dark{background:#09090b;color:#fff;border-color:#2c2e34;box-shadow:0 24px 56px rgba(0,0,0,.2)}
.ky-price__badge{position:absolute;top:22px;right:22px;background:#fff;color:#09090b;font-size:10px;font-weight:700;padding:5px 10px;border-radius:1000px;letter-spacing:.06em}
.ky-price__name{font-size:23px;font-weight:700;margin-bottom:8px}
.ky-price__amount{font-size:50px;font-weight:600;line-height:1;letter-spacing:-.02em;margin-bottom:12px}
.ky-price__amount span{font-size:16px;font-weight:500;color:#71717a;letter-spacing:0}
.ky-price--dark .ky-price__amount span{color:#a1a1aa}
.ky-price__desc{font-size:14px;color:#52525b;margin-bottom:24px;line-height:1.45}
.ky-price--dark .ky-price__desc{color:#a1a1aa}
.ky-price__feats{display:flex;flex-direction:column;gap:12px;margin-bottom:30px}
.ky-price__feats li{display:flex;align-items:center;gap:10px;font-size:14.5px}
.ky-price__feats img{width:18px;height:18px;flex:none}
.ky-price--dark .ky-price__feats img{filter:brightness(0) invert(1)}

/* cta */
.ky-cta{padding:110px 24px 0;text-align:center;overflow:hidden}
.ky-cta__h{font-size:clamp(36px,5vw,64px);font-weight:600;line-height:1.14;letter-spacing:-.015em}
.ky-cta__faces{display:inline-flex;vertical-align:middle;margin:0 6px}
.ky-cta__faces img{width:52px;height:52px;border-radius:50%;object-fit:cover;border:3px solid #fff;margin-left:-14px;box-shadow:0 6px 16px rgba(0,0,0,.15)}
.ky-cta__faces img:first-child{margin-left:0}
.ky-cta__form{margin:40px auto 0;max-width:460px}
.ky-cta__pan{margin-top:-30px;height:380px;pointer-events:none}
.ky-cta__pan img{width:100%;height:130%;object-fit:cover;object-position:center 60%;-webkit-mask-image:linear-gradient(180deg,transparent,#000 36%);mask-image:linear-gradient(180deg,transparent,#000 36%)}

/* faq */
.ky-faq{display:grid;grid-template-columns:1fr 1.55fr;gap:64px}
.ky-faq__left{position:sticky;top:100px;align-self:start}
.ky-faq__ai{display:flex;gap:8px;margin-top:16px}
.ky-faq__aichip{width:44px;height:44px;border-radius:14px;background:#fff;border:1px solid #ececee;box-shadow:0 3px 10px rgba(0,0,0,.05);display:flex;align-items:center;justify-content:center;font-size:17px}
.ky-faq__still{margin-top:40px;padding:24px;background:#fafafa;border:1px solid #ececee;border-radius:24px}
.ky-faq__still p{font-size:14px;color:#52525b;margin:8px 0 18px;line-height:1.5}
.ky-faq-item{border-bottom:1px solid #ececee}
.ky-faq-item__q{display:flex;align-items:center;justify-content:space-between;padding:22px 0;font-size:20px;font-weight:600;width:100%;text-align:left;gap:16px}
.ky-faq-chevron{color:#71717a;transition:transform .3s;display:flex}
.ky-faq-item--open .ky-faq-chevron{transform:rotate(180deg)}
.ky-faq-item__a{overflow:hidden;max-height:0;transition:max-height .35s ease,padding .35s ease}
.ky-faq-item--open .ky-faq-item__a{max-height:300px;padding-bottom:22px}
.ky-faq-item__a p{font-size:15px;line-height:1.6;color:#52525b}

/* footer */
.ky-footer{background:#09090b;padding:80px 32px 28px;border-radius:36px 36px 0 0;color:#fff;margin-top:44px}
.ky-footer__inner{max-width:1344px;margin:0 auto}
.ky-footer__top{display:grid;grid-template-columns:1.7fr repeat(4,1fr);gap:36px;margin-bottom:64px}
.ky-footer__brand{display:flex;align-items:center;gap:8px;font-size:20px;font-weight:700;letter-spacing:-.02em}
.ky-footer__tag{margin-top:16px;max-width:280px;font-size:14px;color:#a1a1aa;line-height:1.55}
.ky-footer__socials{display:flex;gap:8px;margin-top:20px}
.ky-footer__socials span{width:38px;height:38px;border-radius:50%;background:#1c1c1f;color:#a1a1aa;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s}
.ky-footer__socials span:hover{background:#fff;color:#09090b}
.ky-footer__col-title{font-size:14px;font-weight:600;margin-bottom:14px}
.ky-footer__col a{display:block;font-size:14px;color:#a1a1aa;padding:4px 0;transition:color .2s}
.ky-footer__col a:hover{color:#fff}
.ky-footer__bottom{border-top:1px solid #1f1f23;padding-top:24px;display:flex;justify-content:space-between;font-size:13px;color:#71717a;flex-wrap:wrap;gap:12px}
.ky-footer__bottom-links{display:flex;gap:24px}
.ky-footer__bottom a:hover{color:#fff}

/* responsive */
@media(max-width:1080px){
  .ky-hero__grid{grid-template-columns:1fr;gap:32px}
  .ky-hero__foot{flex-direction:column;align-items:flex-start}
  .ky-bottleneck{grid-template-columns:1fr}
  .ky-bottleneck__left .ky-h3{margin-bottom:36px}
  .ky-why{grid-template-columns:1fr 1fr}
  .ky-why__col:last-child{grid-column:1/-1;flex-direction:row;flex-wrap:wrap}
  .ky-why__col:last-child .ky-why-card{min-width:240px}
  .ky-how{grid-template-columns:1fr}
  .ky-vetting{grid-template-columns:1fr 1fr}
  .ky-onesub{grid-template-columns:1fr}
  .ky-onesub__left{position:static}
  .ky-caps{grid-template-columns:1fr 1fr}
  .ky-cap{grid-column:auto !important}
  .ky-masonry{columns:2}
  .ky-pricing{grid-template-columns:1fr;max-width:460px;margin-left:auto;margin-right:auto}
  .ky-price{min-height:auto}
  .ky-faq{grid-template-columns:1fr}
  .ky-faq__left{position:static}
  .ky-footer__top{grid-template-columns:1fr 1fr}
  .ky-case{width:86vw;height:520px}
  .ky-midbanner__img{position:relative;width:100%;height:260px;-webkit-mask-image:none;mask-image:none}
  .ky-midbanner{flex-direction:column;align-items:stretch}
  .ky-midbanner__content{padding:44px 28px}
}
@media(max-width:720px){
  .ky-nav__links{display:none}
  .ky-strip__row span{font-size:12.5px}
  .ky-hero{padding:44px 20px 24px}
  .ky-h2{font-size:36px}
  .ky-h3{font-size:30px}
  .ky-h5{font-size:20px}
  .ky-heroform{flex-direction:row}
  .ky-hero__stats{gap:24px;flex-wrap:wrap}
  .ky-stat__num{font-size:30px}
  .ky-section{padding:52px 20px}
  .ky-block__inner{padding:52px 22px}
  .ky-rowhead{padding:0 20px}
  .ky-railwrap{padding-left:20px;padding-right:20px}
  .ky-scard{width:82vw;height:520px}
  .ky-case{height:420px}
  .ky-serve{width:82vw}
  .ky-vetting{grid-template-columns:1fr}
  .ky-vet{min-height:auto;gap:24px}
  .ky-caps{grid-template-columns:1fr}
  .ky-masonry{columns:1}
  .ky-bn-item{font-size:15.5px}
  .ky-bnstats{gap:28px}
  .ky-bnstat__num{font-size:38px}
  .ky-cta__faces img{width:38px;height:38px}
  .ky-cta__pan{height:220px}
  .ky-consult{min-height:420px}
  .ky-footer{padding:52px 20px 22px}
  .ky-footer__top{grid-template-columns:1fr;gap:26px}
  .ky-footer__bottom{flex-direction:column;align-items:center;text-align:center}
}
`;

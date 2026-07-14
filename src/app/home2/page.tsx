"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Zap, Workflow, Compass, CreditCard, Gift, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import AuthModal from '../../components/AuthModal';


/* ═══════════════════════════════════════════════════════════════
   KYVARI /home2 — upgraded version of /home (same design system)
   Base: the 100% awesomic-style copy at /home. Upgrades:
   · richer hero (badges + inline faces + form shine)
   · case-study carousel with live video card
   · why-grid rebuilt as true 3-column bento w/ tall video center
   · how-it-works: tabs left + big visual right with glass panel
   · consultation image banner
   · trusted-by testimonial masonry with rating pills
   · CTA headline with inline faces
   · FAQ "ask AI" chips
   ═══════════════════════════════════════════════════════════════ */

/* ─── Cosmica @font-face ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Light.woff2) format('woff2');font-weight:300;font-style:normal;font-display:swap}
`;

/* ─── CDN assets ─── */
const CDN = 'https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871';
const A = {
  ycBadge: `${CDN}/68c2a33d71ce477bc4cfaa4c_YC-small-badge.svg`,
  google: `${CDN}/68c2a33d71ce477bc4cfa969_google_symbol.svg.svg`,
  trustpilot: `${CDN}/68c2a33d71ce477bc4cfa967_google_symbol.svg.svg`,
  faces: `${CDN}/68c2a33d71ce477bc4cfa96b_faq_two-faces.avif`,
  loginW: `${CDN}/68c2a33d71ce477bc4cfa8d5_login-icon-white.svg`,
  loginB: `${CDN}/68c2a33d71ce477bc4cfa8d6_login-icon-black.svg`,
  check: `${CDN}/68c2a33d71ce477bc4cfa900_checkmark-circle-dark.svg`,
  openLink: `${CDN}/68c2a33d71ce477bc4fa909_open-link-black-icon.svg`,
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
  { alt: "Booking.com", src: "https://logos.hunter.io/booking.com" },
  { alt: "Expedia", src: "https://logos.hunter.io/expedia.com" },
  { alt: "TripAdvisor", src: "https://logos.hunter.io/tripadvisor.com" },
  { alt: "Airbnb", src: "https://logos.hunter.io/airbnb.com" },
  { alt: "Skyscanner", src: "https://logos.hunter.io/skyscanner.net" },
  { alt: "Kayak", src: "https://logos.hunter.io/kayak.com" },
  { alt: "TUI Group", src: "https://logos.hunter.io/tui.com" },
  { alt: "Viator", src: "https://logos.hunter.io/viator.com" },
  { alt: "GetYourGuide", src: "https://logos.hunter.io/getyourguide.com" },
  { alt: "Trivago", src: "https://logos.hunter.io/trivago.com" },
  { alt: "Priceline", src: "https://logos.hunter.io/priceline.com" },
  { alt: "Orbitz", src: "https://logos.hunter.io/orbitz.com" },
  { alt: "Hotwire", src: "https://logos.hunter.io/hotwire.com" },
  { alt: "Marriott", src: "https://logos.hunter.io/marriott.com" },
  { alt: "Hilton", src: "https://logos.hunter.io/hilton.com" },
  { alt: "Hyatt", src: "https://logos.hunter.io/hyatt.com" },
  { alt: "Emirates", src: "https://logos.hunter.io/emirates.com" },
  { alt: "Singapore Airlines", src: "https://logos.hunter.io/singaporeair.com" },
];

const SERVICE_CARDS = [
  { title: "Deep Destination\nResearch", type: "list", items: ["Live maps & routing APIs", "Verified local reviews", "Opening hours checking", "Custom flight inputs", "Curated culinary spots", "Off-beat travel ideas", "And more"] },
  { title: "Interactive Web\nProposals", type: "image", tags: ["Web Itinerary", "Mobile Optimized", "Proposal Builder"], img: "/florian-schonbrunner-rj6P1M_fz6M-unsplash.jpg" },
  { title: "One-Click\nAI Customization", type: "image", tags: ["AI Swapping", "Live Editable Canvas", "Drag & Drop Days", "Photo Galleries"], img: "/airplane-window.png" },
  { title: "Client Engagement\nTracking", type: "image", tags: ["View Alerts", "Dwell Time Analytics", "Collaboration Link"], img: "/casey-horner-w9mFAHtqB-k-unsplash.jpg" },
  { title: "Modern Agent\nWorkspace", type: "list", items: ["Natural language input", "E-mail parsing", "PDF brochure import", "Clean dashboard", "Collaborative links", "Brand personalization", "And more"] },
  { title: "Custom Itinerary\nBranding", type: "image", tags: ["Custom Colors", "Agent Logo", "Personal Brand"], img: "/Custom Itinerary .jpg" },
  { title: "Stunning Visual\nGalleries", type: "image", tags: ["Eiffel Tower Spotlights", "Scenic Coastal Views"], img: "/stunning visuals itineraries.jpg" },
];

const BOTTLENECK_ITEMS = [
  { gray: "Forget about ", bold: "hours of manual hotel research" },
  { gray: "No more ", bold: "copy-pasting into Word or PowerPoint" },
  { gray: "Stop ", bold: "struggling with static PDF files that clients can't interact with" },
  { gray: "Say bye to ", bold: "manual distance and routing checks" },
  { gray: "Skip ", bold: "waiting days to send a proposal to clients" },
  { gray: "Done with ", bold: "wasting weeks on back-and-forth email changes" },
];

const CASES = [
  { title: "Mount Fuji for two, chasing the first light", tags: ["Couple", "5 days", "Spring", "Ryokan stays"], video: "/mount%20fuji.mp4" },
  { title: "A honeymoon painted in Santorini blue", tags: ["Honeymoon", "7 days", "Luxury"], img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1400&q=80" },
  { title: "The Andes, the Amazon, and everything between", tags: ["Peru", "Adventure", "10 days", "Andes + Amazon"], img: "/peru.png" },
  { title: "Slow trains, high passes, endless Alpine gold", tags: ["Mountains", "6 days", "Rail-first"], img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1400&q=80" },
  { title: "Dawn on the Serengeti, and the plains all to yourselves", tags: ["Safari", "9 days", "Adventure"], img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&q=80" },
  { title: "Cherry blossoms and quiet shrines, all across Kyoto", tags: ["Culture", "5 days", "Foodie"], img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1400&q=80" },
];

const DESTINATIONS = [
  { name: "Paris", role: "Culinary France", years: "5 days", tags: ["Eiffel Tower", "Le Marais", "Boutique Hotels", "Pastry Tour"], photo: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=640` },
  { name: "Tokyo", role: "Foodie Escape", years: "7 days", tags: ["Sushi Masterclass", "Shibuya Crossing", "Temple Tours", "Anime Culture"], photo: `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=640` },
  { name: "Santorini", role: "Honeymooners", years: "7 days", tags: ["Private Yacht Cruise", "Oia Sunset", "Clifftop Villas", "Wine Tasting"], photo: `https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=640` },
  { name: "Rome", role: "Heritage Seekers", years: "6 days", tags: ["Colosseum Access", "Vatican Secrets", "Pasta Making", "Ancient Ruins"], photo: `https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=640` },
  { name: "Bali", role: "Wellness Retreat", years: "8 days", tags: ["Yoga Shala", "Ubud Monkey Forest", "Waterfall Trekking", "Vegan Culinary"], photo: `https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=640` },
  { name: "Maldives", role: "Island Escape", years: "10 days", tags: ["Overwater Bungalow", "Snorkeling Reef", "Private Dining", "Seaplane Tour"], photo: `https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=640` },
];

const HOW_STEPS = [
  { num: "01", title: "Describe the trip", desc: "Paste client emails, write details, or input a simple prompt. No templates required." },
  { num: "02", title: "AI crafts the proposal", desc: "Kyvari AI researches hotels, routes, opening times, and plans a day-by-day itinerary." },
  { num: "03", title: "Customize in one click", desc: "Tweak details on a live canvas. Swap hotels, edit text, and adjust custom branding." },
  { num: "04", title: "Share interactive link", desc: "Send clients a beautiful mobile-friendly web page. Track their views and close the sale." },
];

const VETTING_STEPS = [
  { step: "Step 1", title: "Real-time Maps & APIs", pct: "55", desc: "Automatically check actual distances, routes, and transit options" },
  { step: "Step 2", title: "Vetted Hotel Directory", pct: "21", desc: "Filter accommodation based on verified reviews, style, and agent notes" },
  { step: "Step 3", title: "Local Expert Verification", pct: "5.3", desc: "Align activity choices with current local guides and opening schedules" },
  { step: "Step 4", title: "Final Agent Quality Check", pct: "0.82", desc: "Customize proposals to match your client's exact desires" },
];

const WHY_TAGS_ROWS = [
  { dir: "normal", tags: ["Paris 🗼", "Santorini 🏝️", "Rome 🏛️", "Tokyo ⛩️", "Bali 🍃", "Maldives 🏊‍♂️", "Culinary Tour", "Honeymoon", "Adventure", "Private Villa"] },
  { dir: "reverse", tags: ["Itinerary Builder", "Proposal Canvas", "Maps & Routing", "Hotel Swapping", "Client Tracking", "View Alerts", "Analytics"] },
  { dir: "normal", tags: ["E-mail Parser", "PDF Brochure Import", "Voice Note Input", "Collaborative Link", "Unlimited Revisions", "Branding Control"] },
  { dir: "reverse", tags: ["Save 4 Hours", "43% More Bookings", "80% Faster Delivery", "Modern Travel Agent", "Autonomous Travel Assistant"] },
];

const TESTIMONIALS = [
  { name: "Riya Malhotra", role: "Founder, Wanderlux Travel", text: "Before Kyvari, building a 7-day Europe proposal for a family used to take me 4 to 5 hours (cross-referencing hotels, writing day-by-day notes, and formatting everything in Word). Now I describe the brief and get a full itinerary with maps in under 10 minutes. My clients comment on how premium the output looks.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces", location: "Mumbai, India" },
  { name: "Anamika Chauhan", role: "Founder, Girls on Trip (GOT Travel)", text: "Kyvari has completely transformed how we plan group trips. We can coordinate complex multi-destination itineraries for 20+ travelers in minutes, keeping every detail organized in one beautiful link.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces", location: "New Delhi, India", video: "/flightcard.mp4" },
  { name: "Arjun Nair", role: "CEO, Serene Routes", text: "I run a boutique agency focused on luxury South Asia tours, including Sri Lanka, Bhutan, and the Maldives. The level of detail Kyvari generates is honestly better than what I used to write manually after 10 years of experience. I've cut my proposal turnaround from 2 days to 2 hours.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces", location: "Kochi, India", mediaImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80" },
  { name: "Deepa Krishnamurthy", role: "Senior Travel Consultant, Heritage Trails", text: "My clients are mostly NRIs planning India trips, and they want everything planned before they land. Kyvari handles the complexity perfectly. I can input '14 days, Rajasthan circuit, family of 6, heritage hotels' and it gives me a structured day-by-day plan with map view.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces", location: "Bengaluru, India" },
  { name: "Sameer Qureshi", role: "Director, Offbeat Journeys", text: "I was skeptical about AI tools, having tried a few that gave generic, copy-paste itineraries. Kyvari is different. It actually understands nuance. When I said 'slow travel, local experiences, no tourist traps, budget ₹80,000 for 10 days in Vietnam', it gave me exactly that.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces", location: "Pune, India" },
  { name: "Elena Vasquez", role: "Owner, GlobeTrail", text: "We did the Pro plan, exceeded our expectations. Amazing support. Highly recommend.", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces", location: "Lisbon, Portugal" },
  { name: "Daniel Koch", role: "Co-Founder, AtlasTravel", text: "Only a week into using Kyvari and we already have an entire branded proposal flow that my team and clients are super happy with. Speed, quality, and cost: somehow it pulls off all three.", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces", location: "Berlin, Germany" },
  { name: "Aiko Tanaka", role: "Independent advisor", text: "Kyvari quickly became my quiet co-worker. Clients send screenshots of the itinerary back with heart emojis.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces", location: "Osaka, Japan" },
];

const FAQ_ITEMS = [
  { q: "What is Kyvari?", a: "Kyvari is an AI-powered conversational travel assistant that helps travel agents build professional, interactive itineraries in seconds instead of hours." },
  { q: "How does Kyvari work?", a: "You paste a client brief, email, or simple notes. The AI parses the request, searches maps, hotels, and routing, and generates a day-by-day plan." },
  { q: "Can I edit the generated itineraries?", a: "Yes, absolutely. Kyvari features an editable canvas where you can add/remove days, swap hotels, edit text, and customize photos." },
  { q: "Can clients view the itineraries on mobile?", a: "Yes. Every itinerary gets a beautiful, mobile-optimized public link you can share. It includes maps, photos, and hotel links." },
  { q: "How much does Kyvari cost?", a: "We offer a Free plan with basic itinerary generations, and Pro/Agency plans starting at $29/month for unlimited itineraries and custom branding." },
  { q: "Does Kyvari support integrations?", a: "Yes, you can export itineraries to PDFs, integrate with client management systems, or share directly to WhatsApp/Email." },
];

const FOOTER_COLS = [
  { title: "Product", links: ["AI Assistant", "Proposal Builder", "Editable Canvas", "Live Map View", "Client Tracking", "Integrations"] },
  { title: "Destinations", links: ["Paris Guide", "Tokyo Guide", "Santorini Guide", "Rome Guide", "Bali Guide"] },
  { title: "Company", links: ["About us", "Pricing", "Case studies", "Wall of Love", "Blog", "Careers"] },
  { title: "Compare", links: ["vs. Manual Word Docs", "vs. Static PDFs", "vs. Legacy Software"] },
];

/* ─── Kyvari logo mark (replaces missing /favicon_logo.png) ─── */
function KyvariMark({ size = 32 }: { size?: number }) {
  return (
    <img src="/kyvari-logo.png" alt="Kyvari Logo" style={{ width: `${size}px`, height: `${size}px`, borderRadius: "8px", objectFit: "contain", display: 'block' }} />
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ky-faq-item ${open ? 'ky-faq-item--open' : ''}`}>
      <button className="ky-faq-item__q" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ky-faq-chevron" style={{ flexShrink: 0, color: '#71717a', transition: 'transform .3s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="ky-faq-item__a"><p>{item.a}</p></div>
    </div>
  );
}

/* ─── carousel helper ─── */
function useRail() {
  const ref = useRef<HTMLDivElement>(null);
  const go = (d: number) => ref.current?.scrollBy({ left: d * (ref.current.clientWidth * 0.72), behavior: 'smooth' });
  return { ref, go };
}
const RailArrows = ({ go }: { go: (d: number) => void }) => (
  <div className="ky-arrows">
    <button onClick={() => go(-1)} aria-label="Previous">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
    </button>
    <button onClick={() => go(1)} aria-label="Next">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </button>
  </div>
);

/* ─── Main Page Component ─── */
export default function KyvariHome2() {
  const cases = useRail();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [oneToOneMode, setOneToOneMode] = useState<'fulltime' | 'parttime'>('fulltime');
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

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

        {/* ═══ 1. NAVBAR ═══ */}
        <nav className="ky-nav">
          <Link href="/dashboard" className="ky-nav__logo" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <KyvariMark size={32} />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#111', letterSpacing: '-0.02em' }}>Kyvari</span>
            </div>
          </Link>
          <div className="ky-nav__links">
            <a href="#features">
              <Zap size={14} />
              <span>Features</span>
            </a>
            <a href="#how-it-works">
              <Workflow size={14} />
              <span>How it works</span>
            </a>
            <a href="#destinations">
              <Compass size={14} />
              <span>Inspirations</span>
            </a>
            <a href="#pricing">
              <CreditCard size={14} />
              <span>Pricing</span>
            </a>
          </div>
          <div className="ky-nav__right">
            <a href="#" onClick={(e) => { e.preventDefault(); setAuthModalOpen(true); }} className="ky-nav__cta">
              <span>Start Free</span>
              {/* <img src={A.loginW} alt="" /> */}
            </a>
          </div>
        </nav>

        {/* ═══ 2. ANNOUNCEMENT BANNER ═══ */}
        <div className="ky-banner">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>🔥</span>
            <span>How modern travel agencies scale: read the Kyvari AI benchmark report</span>
          </span>
          <a href="#" className="ky-banner__btn">
            <span>Get the free report</span>
            <Gift size={15} />
          </a>
        </div>

        {/* ═══ 3. HERO ═══ */}
        <section className="ky-hero" style={{ paddingTop: "120px" }}>
          {/* Landmark Clay Icons */}
          <img src="/eiffel.png" alt="" className="ky-landmark ky-landmark--eiffel" />
          <img src="/bridge.png" alt="" className="ky-landmark ky-landmark--bridge" />
          <img src="/liberty.png" alt="" className="ky-landmark ky-landmark--liberty" />
          <img src="/burj.png" alt="" className="ky-landmark ky-landmark--burj" />

          <div className="ky-hero__tags">
            <span className="ky-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><KyvariMark size={14} />Built for travel professionals</span>
            <span className="ky-tag">
              <img src={A.google} alt="" style={{ height: 16 }} /> 4.9
              <span style={{ color: '#00b67a', marginLeft: 8 }}>★</span> 4.8
            </span>
          </div>

          <h1 className="ky-hero__h1">
            All your travel{' '}
            <span className="ky-rotate">
              <span className="ky-rotate__inner">
                <span>research</span><span>planning</span><span>itineraries</span><span>proposals</span><span>research</span>
              </span>
            </span>
          </h1>
          <div className="ky-hero__h1-sub">done in 60 seconds.</div>

          <p className="ky-hero__text">
            Kyvari does the deep research, tailors every trip to the{' '}
            <img src={A.heroFaces} alt="" style={{ display: 'inline', height: 22, verticalAlign: '-4px' }} />{' '}
            traveler, and turns it into an interactive itinerary you can share in a click. Every trip, one of a kind.
          </p>

          {/* AI Chat Prompt Box (Centrally aligned, styled like Dashboard) */}
          <div style={{
            width: "100%",
            maxWidth: "720px",
            background: "#fff",
            border: "1px solid #eeece5",
            borderRadius: "32px",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.03)",
            margin: "0 auto"
          }}>
            {/* Glowing Blue AI Orb */}
            <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "50%", background: "#fff", border: "1px solid #eeece5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <span style={{ position: "absolute", width: "24px", height: "24px", borderRadius: "50%", background: "#3b82f6", opacity: 0.25, animation: "pulse 2s infinite" }} />
              <span style={{ position: "relative", width: "14px", height: "14px", background: "#3b82f6", borderRadius: "50%", boxShadow: "0 0 10px rgba(59,130,246,0.6)" }} />
            </div>

            {/* Input Box (Textarea for wrapping 2-line placeholder) */}
            <textarea 
              rows={2}
              placeholder="Describe the travelers, dates, pace, budget, and what would make the trip memorable..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "15px",
                fontFamily: "Cosmic, sans-serif",
                color: "#09090b",
                background: "transparent",
                resize: "none",
                height: "44px",
                lineHeight: "22px",
                padding: "0"
              }}
            />
            
            {/* Mic and Send Button matching dashboard */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Mic Icon */}
              <span style={{ color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </span>
              {/* Send Button */}
              <Link href="/dashboard" className="hover:scale-105 hover:bg-[#e8543f] active:scale-95 transition-all" style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "#1d1f24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(29,31,36,.15)",
                color: "#fff",
                textDecoration: "none"
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16">
                  <path d="M2.5 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="#fff" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* CTA Button directly below AI Prompt Box */}
          <div style={{ marginTop: "8px" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setAuthModalOpen(true); }} className="ky-btn-dark ky-btn--lg" style={{ textDecoration: 'none', padding: "14px 40px", fontSize: "16px", borderRadius: "16px" }}>
              <span>Start Free</span>
              <img src={A.loginW} alt="" style={{ marginLeft: "8px" }} />
            </a>
          </div>

          {/* Centered Stats Grid */}
          <div className="ky-hero__stats">
            <div className="ky-stat"><div className="ky-stat__num">5 000+</div><div className="ky-stat__label">itineraries<br />generated</div></div>
            <div className="ky-stat"><div className="ky-stat__num">1 000+</div><div className="ky-stat__label">travel advisors<br />worldwide</div></div>
          </div>
        </section>

        {/* ═══ 4. LOGO CAROUSEL ═══ */}
        <div className="ky-logos"><div className="ky-logos__track">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => <img key={i} src={l.src} alt={l.alt} />)}
        </div></div>

        {/* ═══ 5. FEATURE CARDS SLIDER ═══ */}
        <section id="features">
          <div className="ky-services">
            <div className="ky-services__grid">
              {SERVICE_CARDS.map((c, i) => (
                <div key={i} className={`ky-scard ${c.type === 'image' ? 'ky-scard--img' : 'ky-scard--light'}`}>
                  {c.type === 'image' && c.img && <img className="ky-scard__bg" src={c.img} alt={c.title} />}
                  {c.type === 'image' && <span className="ky-scard__shade" />}
                  <div className="ky-scard__content">
                    <div className="ky-scard__title" style={{ whiteSpace: 'pre-line' }}>{c.title}</div>
                    {c.type === 'list' && c.items && <ul className="ky-scard__list">{c.items.map((it, j) => <li key={j}><img src={A.check} alt="" />{it}</li>)}</ul>}
                    {c.tags && <div className="ky-scard__tags">{c.tags.map((t, j) => <span key={j} className="ky-cattag">{t}</span>)}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6. BOTTLENECK SECTION ═══ */}
        <section className="ky-bottleneck">
          <div className="ky-bottleneck__inner">
            <div className="ky-bottleneck__left">
              <h2 className="ky-h3">We solve the bottlenecks that kill your speed</h2>
            </div>
            <div className="ky-bottleneck__right" style={{ position: 'relative', overflow: 'hidden' }}>
              <video 
                src="/bottle%20neck%20cards.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  opacity: 0.65
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(20, 20, 22, 0.4), rgba(20, 20, 22, 0.7))',
                zIndex: 2
              }} />
              <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
                {BOTTLENECK_ITEMS.map((b, i) => (
                  <div key={i} className="ky-bn-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#fff' }}>
                      <circle cx="12" cy="12" r="10" fill="#27272a" stroke="none" />
                      <path d="M10 8l4 4-4 4" stroke="#fff" />
                    </svg>
                    <span><span className="ky-text-muted">{b.gray}</span>{b.bold}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ky-bottleneck__review">
              <div className="ky-review-card">
                <div className="ky-review-card__header">
                  <img src={TESTIMONIALS[0].photo} alt={TESTIMONIALS[0].name} className="ky-avatar" />
                  <div><div className="ky-review-card__name">{TESTIMONIALS[0].name}</div><div className="ky-review-card__role">{TESTIMONIALS[0].role}</div></div>
                </div>
                <p className="ky-review-card__text">Game-changer for our agency — working with Kyvari has been one of the best decisions we&apos;ve made for scaling proposals.</p>
              </div>
            </div>
            <div className="ky-bottleneck__nums">
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">80%</div><div className="ky-bn-stat__desc">less time spent compared to traditional manual Word docs</div></div>
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">43%</div><div className="ky-bn-stat__desc">higher conversion rates on proposals sent</div></div>
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">60%</div><div className="ky-bn-stat__desc">fewer revisions — powered by AI and verified travel data</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 7. CASE CAROUSEL (new) ═══ */}
        <section className="ky-section ky-section--white" id="work" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="ky-section__header-row" style={{ padding: '0 32px' }}>
            <h2 className="ky-h4">5,000+ ideas turned into unforgettable journeys</h2>
            <RailArrows go={cases.go} />
          </div>
          <div className="ky-cases" ref={cases.ref}>
            <div className="ky-cases__grid">
              {CASES.map((c, i) => (
                <div key={i} className="ky-case-card">
                  {c.video
                    ? <video className="ky-case-card__bg" autoPlay loop muted playsInline><source src={c.video} type="video/mp4" /></video>
                    : <img className="ky-case-card__bg" src={c.img} alt="" />}
                  <span className="ky-case-card__shade" />
                  {c.video && <span className="ky-case-card__live"><span className="ky-livedot" />LIVE PROPOSAL</span>}
                  <div className="ky-case-card__bottom">
                    <div className="ky-case-card__title">{c.title}</div>
                    <div className="ky-case-card__row">
                      <div className="ky-case-card__tags">{c.tags.map((t, j) => <span key={j} className="ky-cattag">{t}</span>)}</div>
                      <span className="ky-case-card__open">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 8. DESTINATIONS SLIDER ═══ */}
        <section className="ky-section ky-section--white" id="destinations">
          <div className="ky-section__header-row">
            <h2 className="ky-h4">Why build manually when you can customize global destinations in seconds?</h2>
            <a href="#" className="ky-btn-dark"><span>Explore destinations</span><img src={A.loginW} alt="" /></a>
          </div>
          <div className="ky-talents">
            <div className="ky-talents__grid">
              {DESTINATIONS.map((t, i) => (
                <div key={i} className="ky-talent-card">
                  <div className="ky-talent-card__photo"><img src={t.photo} alt={t.name} /></div>
                  <div className="ky-talent-card__info">
                    <div className="ky-talent-card__name-row">
                      <span className="ky-text-sm">{t.name}</span>
                      <div><span className="ky-talent-card__role">{t.role}</span><span className="ky-text-sm">, {t.years}</span></div>
                    </div>
                    <div className="ky-talent-card__tags">{t.tags.map((tag, j) => <span key={j} className="ky-cattag ky-cattag--sm">{tag}</span>)}</div>
                    <div className="ky-talent-card__worked">
                      <span className="ky-text-sm ky-text-muted">Featured Hotels</span>
                      <div className="ky-text-sm" style={{ fontWeight: 600, color: '#09090b' }}>Boutique & Luxury Selected</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 9. WHY TEAMS CHOOSE KYVARI (3-col bento, tall video center) ═══ */}
        <section className="ky-section ky-section--white" id="testimonials">
          <h2 className="ky-h3 ky-text-center">Why travel experts choose Kyvari</h2>
          <div className="ky-why2">
            <div className="ky-why2__col">
              <div className="ky-why-card">
                <div className="ky-why-card__row"><div><div className="ky-h4">1 000+</div><div className="ky-h5">Travel Advisors & Creators</div></div><img src={A.customersIcon} alt="" width={72} /></div>
                <div className="ky-why-card__logos"><div className="ky-logos ky-logos--sm"><div className="ky-logos__track">{[...LOGOS, ...LOGOS].map((l, i) => <img key={i} src={l.src} alt={l.alt} />)}</div></div></div>
              </div>
              <div className="ky-why-card ky-why-card--imgbg" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="/hilsolman-mountains-10368354_1920.jpg" alt="" className="ky-why-card__bgimg" style={{ height: '133.33%', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.55)', zIndex: 2 }} />
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3 }}>
                  <div className="ky-h4" style={{ fontSize: '38px', fontWeight: '800', color: '#18181b', marginBottom: '4px' }}>100%</div>
                  <div className="ky-h5 ky-text-center" style={{ color: '#18181b', fontWeight: '600', fontSize: '15px', lineHeight: '1.4' }}>Verified, real-time<br />travel data</div>
                </div>
              </div>
              <div className="ky-why-card ky-why-card--dark" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="/hilsolman-mountains-10368354_1920.jpg" alt="" className="ky-why-card__bgimg" style={{ height: '400%', objectPosition: 'bottom', bottom: 0, top: 'auto', opacity: 0.85 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(24, 24, 27, 0.45)', zIndex: 2 }} />
                <div className="ky-h5 ky-text-center ky-text-white" style={{ position: 'relative', zIndex: 3 }}>Plan every trip with an unfair advantage</div>
              </div>
            </div>

            <div className="ky-why2__col">
              <div className="ky-why-card ky-why-card--videotall">
                <div className="ky-review-card__header" style={{ width: '100%' }}>
                  <img src={TESTIMONIALS[1].photo} alt={TESTIMONIALS[1].name} className="ky-avatar" />
                  <div>
                    <div className="ky-review-card__name">{TESTIMONIALS[1].name}</div>
                    <div className="ky-review-card__role">{TESTIMONIALS[1].role}</div>
                  </div>
                </div>
                <p style={{ fontSize: '15px', color: '#18181b', margin: '12px 4px 12px 4px', fontWeight: 500, textAlign: 'left', width: '100%' }}>
                  &ldquo;Our first month with Kyvari&rdquo;
                </p>
                <div className="ky-whyvideo" style={{ marginTop: '0', width: '100%' }}>
                  <video autoPlay loop muted playsInline><source src="/265655_medium.mp4" type="video/mp4" /></video>
                  <div className="ky-play-btn">▶</div>
                </div>
              </div>
            </div>

            <div className="ky-why2__col">
              <div className="ky-why-card ky-why-card--short">
                <div className="ky-why-card__row"><div><div className="ky-h4">5,000+</div><div className="ky-h5">Trips planned</div></div><img src={A.projectsIcon} alt="" width={72} /></div>
              </div>
              <div className="ky-why-card" style={{ overflow: 'hidden' }}>
                <div className="ky-tag-marquee">{WHY_TAGS_ROWS.map((row, i) => (
                  <div key={i} className={`ky-tag-row ${row.dir === 'reverse' ? 'ky-tag-row--reverse' : ''}`}>
                    <div className="ky-tag-row__inner">{[...row.tags, ...row.tags].map((t, j) => <span key={j} className={`ky-cattag ${j % 5 === 0 ? 'ky-cattag--featured' : ''}`}>{t}</span>)}</div>
                  </div>
                ))}</div>
                <div className="ky-why-card__row" style={{ marginTop: 16 }}><div><div className="ky-h4">140+</div><div className="ky-h5">Destinations Mapped</div></div><img src={A.skillSetIcon} alt="" width={72} /></div>
              </div>
              <div className="ky-why-card ky-why-card--fee">
                <div className="ky-h5 ky-text-center">Flat monthly pricing</div>
                <span className="ky-cattag" style={{ marginTop: 12, background: '#fff' }}>from $0/month</span>
                <img src="/Gemini_Generated_Image_uvq593uvq593uvq5.png" alt="" className="ky-why-card__rock" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. HOW IT WORKS (tabs left + visual right) ═══ */}
        <HowItWorks />

        {/* ═══ 12. CONSULTATION BANNER (new) ═══ */}
        <section className="ky-consult">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80" alt="" className="ky-consult__img" />
          <div className="ky-consult__overlay" />
          <div className="ky-consult__content">
            <h2>Everything you need to plan a<br />great trip, fast</h2>
            <a href="#" onClick={(e) => { e.preventDefault(); setAuthModalOpen(true); }} className="ky-btn-glassdark" style={{ textDecoration: 'none' }}><span>›››&nbsp;&nbsp;Start Free&nbsp;&nbsp;‹‹‹</span></a>
          </div>
        </section>

        {/* ═══ 13. TRUSTED MASONRY (new) ═══ */}
        <section className="ky-section ky-section--white">
          <div className="ky-text-center">
            <div className="ky-trusted__pills">
              <span className="ky-tag"><img src={A.google} alt="" style={{ height: 14 }} /> 4.9</span>
              <span className="ky-tag"><span style={{ color: '#00b67a' }}>★</span> 4.8</span>
            </div>
            <h2 className="ky-h3" style={{ marginTop: 18 }}>Trusted by 1,000+ travel pros</h2>
          </div>
          <div className="ky-masonry">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="ky-review-card ky-masonry__card" style={{ position: 'relative' }}>
                {/* Top Right Placeholder Logo */}
                <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.15 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="ky-review-card__header">
                  <img src={t.photo} alt={t.name} className="ky-avatar" />
                  <div><div className="ky-review-card__name">{t.name}</div><div className="ky-review-card__role">{t.role}</div></div>
                </div>
                {t.mediaImg && (
                  <div className="ky-masonry__media">
                    <img src={t.mediaImg} alt="" />
                    <div className="ky-play-btn">▶</div>
                  </div>
                )}
                <p className="ky-review-card__text">{t.text}</p>
                {t.video && (
                  <div className="ky-whyvideo" style={{ marginTop: '16px', width: '100%', minHeight: '220px', height: '220px', borderRadius: '22px' }}>
                    <video autoPlay loop muted playsInline style={{ borderRadius: '22px' }}><source src={t.video} type="video/mp4" /></video>
                    <div className="ky-play-btn">▶</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 14. PRICING ═══ */}
        <section className="ky-section ky-section--white" id="pricing">
          <div className="ky-section__header ky-text-center">
            <h2 className="ky-h3">Simple, flat-rate pricing</h2>
            <p className="ky-subtitle">No hidden fees. Scale your travel business with pricing that grows with you.</p>
            
            {/* Billing Switcher */}
            <div className="ky-pricing-tabs" style={{ display: "flex", justifyContent: "center", marginTop: "24px", marginBottom: "8px" }}>
              <div className="ky-pricing-tab-menu" style={{ display: "inline-flex", background: "#e4e4e7", padding: "4px", borderRadius: "12px", gap: "4px" }}>
                <button 
                  onClick={() => setBillingCycle('monthly')} 
                  className={`ky-pricing-tab-btn ${billingCycle === 'monthly' ? 'ky-pricing-tab-btn--active' : ''}`}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    transition: "all 0.2s",
                    color: billingCycle === 'monthly' ? "#09090b" : "#71717a",
                    background: billingCycle === 'monthly' ? "#fff" : "transparent",
                    boxShadow: billingCycle === 'monthly' ? "0 4px 10px rgba(0,0,0,0.06)" : "none",
                    cursor: "pointer"
                  }}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle('annually')} 
                  className={`ky-pricing-tab-btn ${billingCycle === 'annually' ? 'ky-pricing-tab-btn--active' : ''}`}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    transition: "all 0.2s",
                    color: billingCycle === 'annually' ? "#09090b" : "#71717a",
                    background: billingCycle === 'annually' ? "#fff" : "transparent",
                    boxShadow: billingCycle === 'annually' ? "0 4px 10px rgba(0,0,0,0.06)" : "none",
                    cursor: "pointer"
                  }}
                >
                  Annually · Save 22%
                </button>
              </div>
            </div>
          </div>

          <div className="ky-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "40px" }}>
            
            {/* CARD 1: Basic (white card) */}
            <div className="ky-price-card" style={{ background: "#fff", border: "1px solid #ececee", borderRadius: "36px", padding: "32px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa8fb_rock-light.avif" alt="" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '20px', fontWeight: 600 }}>Basic</span>
              </div>
              <p className="ky-price-card__desc" style={{ color: "#52525b", fontSize: "14px", marginBottom: "24px", lineHeight: 1.45 }}>For solo advisors getting started.</p>
              
              <div className="ky-price-card__price" style={{ fontSize: "40px", fontWeight: 800, color: "#09090b", marginBottom: "24px", fontFamily: "Cosmic, serif" }}>
                $0<span style={{ fontSize: "14px", color: "#71717a", fontWeight: 500 }}>/forever</span>
              </div>

              <Link href="/dashboard" className="ky-btn-dark ky-btn--full" style={{ textDecoration: 'none', marginBottom: "28px" }}>
                <span>Get Started Free</span>
              </Link>

              <div style={{ borderTop: "1px solid #ececee", paddingTop: "20px", marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#71717a" }}>Free, forever:</span>
              </div>

              <ul className="ky-price-card__features" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>10 AI itineraries / month</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Up to 5-day trips</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>AI &quot;brief-to-trip&quot; builder</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Auto image sourcing</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Interactive smart maps</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Mobile-first share links</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Standard Kyvari branding</span>
                </li>
              </ul>
            </div>

            {/* CARD 2: Pro (featured black card ⭐ Most popular) */}
            <div className="ky-price-card ky-price-card--featured" style={{ background: "#09090b", color: "#fff", borderColor: "#2c2e34", display: "flex", flexDirection: "column", padding: "32px", borderRadius: "36px", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
              <div style={{ position: "absolute", top: "20px", right: "20px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "1000px", letterSpacing: ".05em" }}>⭐ MOST POPULAR</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa8fd_rock-super.avif" alt="" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '20px', fontWeight: 600 }}>Pro</span>
              </div>
              <p className="ky-price-card__desc" style={{ color: "#a1a1aa", fontSize: "14px", marginBottom: "24px", lineHeight: 1.45 }}>Everything a growing advisor needs to win and wow clients.</p>
              
              <div className="ky-price-card__price" style={{ fontSize: "40px", fontWeight: 800, color: "#fff", marginBottom: "24px", fontFamily: "Cosmic, serif" }}>
                {billingCycle === 'annually' ? (
                  <>
                    <span style={{ fontSize: "16px", textDecoration: "line-through", color: "#a1a1aa", marginRight: "8px", fontWeight: 500 }}>$49</span>
                    $39<span style={{ fontSize: "14px", color: "#a1a1aa", fontWeight: 500 }}>/mo</span>
                  </>
                ) : (
                  <>$49<span style={{ fontSize: "14px", color: "#a1a1aa", fontWeight: 500 }}>/mo</span></>
                )}
              </div>

              <Link href="/dashboard" className="ky-btn-dark ky-btn--full" style={{ textDecoration: 'none', marginBottom: "28px" }}>
                <span>Unlock Pro</span>
              </Link>

              <div style={{ borderTop: "1px solid #27272a", paddingTop: "20px", marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa" }}>Everything in Basic, plus:</span>
              </div>

              <ul className="ky-price-card__features" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>100 AI itineraries / month</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Up to 14-day trips</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Custom branding &amp; colors on share links</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Client engagement analytics (opens, dwell, geography)</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Custom AI powered itinerary editing</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Export to PDF</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#fff" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
                  <span>Priority email support</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#a1a1aa" }}>
                  <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa903_checkmark-circle-white.svg" alt="" style={{ width: "16px", height: "16px", opacity: 0.3, flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ opacity: 0.7 }}>Coming soon: client collaboration (comments &amp; likes)</span>
                </li>
              </ul>
            </div>

            {/* CARD 3: Ultimate (white card using 1 to 1 icon) */}
            <div className="ky-price-card" style={{ background: "#fff", border: "1px solid #ececee", borderRadius: "36px", padding: "32px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa8fe_rock-1-1.avif" alt="" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: '20px', fontWeight: 600 }}>Ultimate</span>
              </div>
              <p className="ky-price-card__desc" style={{ color: "#52525b", fontSize: "14px", marginBottom: "24px", lineHeight: 1.45 }}>For agencies scaling volume and going fully branded.</p>
              
              <div className="ky-price-card__price" style={{ fontSize: "40px", fontWeight: 800, color: "#09090b", marginBottom: "24px", fontFamily: "Cosmic, serif" }}>
                {billingCycle === 'annually' ? (
                  <>
                    <span style={{ fontSize: "16px", textDecoration: "line-through", color: "#a1a1aa", marginRight: "8px", fontWeight: 500 }}>$199</span>
                    $159<span style={{ fontSize: "14px", color: "#71717a", fontWeight: 500 }}>/mo</span>
                  </>
                ) : (
                  <>$199<span style={{ fontSize: "14px", color: "#71717a", fontWeight: 500 }}>/mo</span></>
                )}
              </div>

              <Link href="/dashboard" className="ky-btn-dark ky-btn--full" style={{ textDecoration: 'none', marginBottom: "28px" }}>
                <span>Unlock Ultimate</span>
              </Link>

              <div style={{ borderTop: "1px solid #ececee", paddingTop: "20px", marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#71717a" }}>Everything in Pro, plus:</span>
              </div>

              <ul className="ky-price-card__features" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>500 AI itineraries / month</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Up to 28-day trips</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Deep analytics dashboard</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#09090b" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px" }} />
                  <span>Priority 24/7 support</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#71717a" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px", opacity: 0.4 }} />
                  <span style={{ opacity: 0.7 }}>Coming soon: affiliate booking links (Viator, Booking, Expedia)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#71717a" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px", opacity: 0.4 }} />
                  <span style={{ opacity: 0.7 }}>Coming soon: white-label custom domain</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#71717a" }}>
                  <img src={A.check} alt="" style={{ width: "16px", height: "16px", opacity: 0.4 }} />
                  <span style={{ opacity: 0.7 }}>Coming soon: team seats &amp; CRM / Zapier sync</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ═══ 15. CTA SECTION (inline faces) ═══ */}
        <section className="ky-cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/hilsolman-mountains-10368354_1920.jpg" alt="" className="ky-cta-section__bg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'none', left: 0, right: 0, bottom: 0, zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(9, 9, 11, 0.3)', zIndex: 1 }} />
          <div className="ky-cta-section__inner" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="ky-h2 ky-text-center" style={{ color: '#ffffff' }}>
              Stop building itineraries manually.<br />Start growing your{' '}
              <span className="ky-cta-faces">
                <img src={TESTIMONIALS[0].photo} alt="" /><img src={TESTIMONIALS[1].photo} alt="" /><img src={TESTIMONIALS[2].photo} alt="" />
              </span>{' '}
              agency.
            </h2>
            <div style={{
              maxWidth: "600px",
              background: "#fff",
              border: "1px solid #eeece5",
              borderRadius: "28px",
              padding: "10px 14px 10px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              margin: "40px auto 0",
              position: "relative"
            }}>
              {/* Sparkle Icon */}
              <span style={{ color: '#3b82f6', fontSize: '18px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>✦</span>
              
              {/* Prompt Input */}
              <input 
                type="text"
                placeholder="Describe the travelers, dates, pace, budget..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontFamily: "Cosmic, sans-serif",
                  color: "#09090b",
                  background: "transparent",
                  padding: "0"
                }}
              />
              
              {/* Mic Icon */}
              <span style={{ color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center", marginRight: '4px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </span>
              
              {/* Start Free Button */}
              <a href="#" onClick={(e) => { e.preventDefault(); setAuthModalOpen(true); }} className="ky-btn-dark" style={{ borderRadius: '18px', padding: '10px 20px', fontSize: '14px', textDecoration: 'none' }}>
                <span>Start Free</span>
              </a>
            </div>
          </div>
        </section>

        {/* ═══ 16. FAQ ═══ */}
        <section className="ky-section ky-section--white" id="faq">
          <div className="ky-faq-layout">
            <div className="ky-faq-left">
              <h2 className="ky-h3">FAQ</h2>
              <p className="ky-subtitle" style={{ marginTop: 20 }}>Ask AI to summarize Kyvari</p>
              <div className="ky-ai-chips">
                {['✦', '❋', '✳', '✧', '◎'].map((g, i) => <span key={i} className="ky-ai-chip">{g}</span>)}
              </div>
              <div className="ky-faq-still">
                <div className="ky-h5">Still have questions?</div>
                <p className="ky-text-sm" style={{ margin: '8px 0 16px' }}>Let&apos;s talk — book an intro call with our product experts</p>
                <a href="#" className="ky-btn-dark"><span>Book a call</span><img src={A.faces} alt="" /></a>
              </div>
            </div>
            <div className="ky-faq-right">
              {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} />)}
            </div>
          </div>
        </section>

        {/* ═══ 17. FOOTER ═══ */}
        <footer className="ky-footer">
          <div className="ky-footer__inner">
            <div className="ky-footer__top">
              <div className="ky-footer__brand">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <KyvariMark size={32} />
                  <span style={{ fontSize: '20px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Kyvari</span>
                </div>
                <p className="ky-text-sm ky-text-muted" style={{ marginTop: 16, maxWidth: 280 }}>Kyvari helps travel advisors research, design, and send stunning trips - in a fraction of the time.</p>
                <div className="ky-footer__socials" style={{ marginTop: 16 }}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ky-footer-social" style={{ textDecoration: 'none' }}>
                    <Linkedin size={16} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ky-footer-social" style={{ textDecoration: 'none' }}>
                    <Twitter size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ky-footer-social" style={{ textDecoration: 'none' }}>
                    <Instagram size={16} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="ky-footer-social" style={{ textDecoration: 'none' }}>
                    <Youtube size={16} />
                  </a>
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
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Settings</a>
              </div>
            </div>
          </div>
        </footer>
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />
      </div>
    </>
  );
}

/* ─── How It Works: tabs left + big visual right ─── */
function HowItWorks() {
  const [active, setActive] = useState(0);
  const [steps, setSteps] = useState([
    { icon: "✈", title: "AF1204 · CDG → JTR", desc: "09:10 · window seats left for the caldera", state: "normal", id: 1 },
    { icon: "🏨", title: "Check-in · Cave villa, Oia", desc: "13:00 · clifftop, sea view", state: "normal", id: 2 },
    { icon: "🌅", title: "Sunset · Ammoudi Bay dinner", desc: "19:40 · table on the water", state: "normal", id: 3 },
  ]);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % 4), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (active !== 1) return;

    const generatorPool = [
      { icon: "✈", title: "AF1204 · CDG → JTR", desc: "09:10 · window seats left for the caldera" },
      { icon: "🏨", title: "Check-in · Cave villa, Oia", desc: "13:00 · clifftop, sea view" },
      { icon: "🌅", title: "Sunset · Ammoudi Bay dinner", desc: "19:40 · table on the water" },
      { icon: "🛥", title: "Caldera Catamaran Cruise", desc: "10:00 · semi-private, barbecue lunch" },
      { icon: "🍷", title: "Wine Tasting at Santo Wines", desc: "17:00 · local Assyrtiko, sunset views" },
      { icon: "🚶", title: "Hike Oia to Fira", desc: "08:30 · 10km scenic trail" },
      { icon: "🍽", title: "Akrotiri archaeological tour", desc: "11:00 · ancient Minoan city guide" },
      { icon: "🏖", title: "Black Sand beach swim", desc: "14:30 · Kamari beach loungers reserved" }
    ];

    let poolIdx = 3;
    let nextId = 4;

    const interval = setInterval(() => {
      const nextItem = generatorPool[poolIdx];
      poolIdx = (poolIdx + 1) % generatorPool.length;
      const currentNextId = nextId++;

      setSteps(prev => {
        const updated = prev.map((item, idx) => idx === 0 ? { ...item, state: "leaving" } : item);
        return [...updated, { ...nextItem, state: "entering", id: currentNextId }];
      });

      setTimeout(() => {
        setSteps(prev => {
          return prev
            .filter(item => item.state !== "leaving")
            .map(item => item.state === "entering" ? { ...item, state: "normal" } : item);
        });
      }, 400);

    }, 1800);

    return () => {
      clearInterval(interval);
      setSteps([
        { icon: "✈", title: "AF1204 · CDG → JTR", desc: "09:10 · window seats left for the caldera", state: "normal", id: 1 },
        { icon: "🏨", title: "Check-in · Cave villa, Oia", desc: "13:00 · clifftop, sea view", state: "normal", id: 2 },
        { icon: "🌅", title: "Sunset · Ammoudi Bay dinner", desc: "19:40 · table on the water", state: "normal", id: 3 },
      ]);
    };
  }, [active]);

  return (
    <section className="ky-section ky-section--white" id="how-it-works">
      <div className="ky-section__header ky-text-center">
        <h2 className="ky-h3">How it works</h2>
        <p className="ky-subtitle">Skip the research pain and formatting headache.<br />Move right to booked trips</p>
      </div>
      <div className="ky-how2">
        <div className="ky-how2__tabs">
          {HOW_STEPS.map((s, i) => (
            <button key={i} className={`ky-how-tab ${active === i ? 'ky-how-tab--active' : ''}`} onClick={() => setActive(i)}>
              <div className="ky-how-tab__num">{s.num}</div>
              <div className="ky-how-tab__title">{s.title}</div>
              <div className="ky-how-tab__desc">{s.desc}</div>
              <div className="ky-how-tab__progress"><div className="ky-how-tab__bar" style={{ animationPlayState: active === i ? 'running' : 'paused' }} /></div>
            </button>
          ))}
        </div>
        <div className="ky-how2__visual">
          <img src="/hilsolman-mountains-10368354_1920.jpg" alt="" className="ky-how2__bg" />
          <div className="ky-how2__panel" key={active} style={{ overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {active === 0 && <>
              <div className="ky-how2__panel-head">Untitled trip ⌄</div>
              <label>Trip title</label>
              <div className="ky-how2__input">Santorini honeymoon · 7 days</div>
              <label>Brief</label>
              <div className="ky-how2__input ky-how2__input--area">Boutique cave hotels, private sunset cruise, quiet beaches. Budget $5k.<span className="ky-how2__gen">Generate with AI ✦</span></div>
              <div className="ky-how2__row"><div className="ky-how2__input">📅 Add travel dates</div><div className="ky-how2__input">⬆ Upload files</div></div>
            </>}
            {active === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '250px', overflow: 'hidden' }}>
                <div className="ky-how2__panel-head" style={{ marginBottom: '12px' }}>Kyvari is crafting · Day 1 of 7</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                  {steps.map(step => {
                    let className = "ky-how2__step";
                    if (step.state === "leaving") className += " ky-how2__step--leaving";
                    if (step.state === "entering") className += " ky-how2__step--entering";
                    return (
                      <div key={step.id} className={className}>
                        <b>{step.icon} {step.title}</b>
                        <em>{step.desc}</em>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {active === 2 && <>
              <div className="ky-how2__panel-head">Live canvas · editing Day 3</div>
              <div className="ky-how2__step"><b>Hotel Aria → Canaves Suites</b><em>swapped in one click</em></div>
              <div className="ky-how2__row">
                <div className="ky-how2__input">↻ Swap hotel</div>
                <div className="ky-how2__input">✎ Edit note</div>
                <div className="ky-how2__input" style={{ background: '#09090b', color: '#fff', borderColor: '#09090b' }}>✓ Approved</div>
              </div>
            </>}
            {active === 3 && <>
              <div className="ky-how2__panel-head">kyvari.link/santorini-honeymoon</div>
              <div className="ky-how2__step"><b>🔔 Meera opened the trip</b><em>3rd visit today · dwell 4m 12s</em></div>
              <div className="ky-how2__step"><b>👁 128 client views this week</b><em>↑ 27% vs last week</em></div>
              <a href="#" className="ky-btn-dark ky-btn--full" style={{ marginTop: 8 }}><span>Share link</span></a>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CSS — all scoped under .ky  (base = /home stylesheet + V2)
   ═══════════════════════════════════════════════════════════════ */
const PAGE_CSS = `
/* ── Reset ── */
.ky,.ky *,.ky *::before,.ky *::after{box-sizing:border-box;margin:0;padding:0}
.ky{font-family:Cosmic,ui-sans-serif,system-ui,sans-serif;color:#09090b;background:#f4f4f5;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.ky a{color:inherit;text-decoration:none}
.ky img{max-width:100%;display:block}
.ky video{max-width:100%;display:block}
.ky button{cursor:pointer;border:none;background:none;font-family:inherit}
.ky ul{list-style:none}

/* ── Utility ── */
.ky-text-center{text-align:center}
.ky-text-white{color:#fff}
.ky-text-muted{color:#71717a}
.ky-text-sm{font-size:14px;font-weight:400;line-height:1.56}
.ky-h2{font-size:56px;font-weight:600;line-height:1.12}
.ky-h3{font-size:40px;font-weight:700;line-height:1.28}
.ky-h4{font-size:32px;font-weight:700;line-height:1.28}
.ky-h5{font-size:20px;font-weight:600;line-height:1.56}
.ky-subtitle{font-size:16px;font-weight:400;line-height:1.5;color:#52525b;margin-top:20px}

/* ── Buttons ── */
.ky-btn-dark{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#09090b;color:#fff;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:10px 20px;border-radius:14px;border:1.5px solid #2c2e34;box-shadow:rgba(255,255,255,.5) 0 .5px 0 0 inset,rgba(117,123,133,.4) 0 9px 14px -5px inset,rgb(44,46,52) 0 0 0 1.5px,rgba(0,0,0,.14) 0 4px 6px 0;transition:transform .2s;white-space:nowrap;cursor:pointer}
.ky a.ky-btn-dark{color:#fff}
.ky-btn-dark:hover{transform:translateY(-1px)}
.ky-btn-dark img{height:20px}
.ky-btn-dark.ky-btn--lg{padding:12px 24px;font-size:15px}
.ky-btn-dark.ky-btn--full{width:100%;justify-content:center}
.ky-btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#fff;color:#3f3f46;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:8px 16px;border-radius:10000px;border:1px solid #ececee;cursor:pointer;transition:background .2s;white-space:nowrap}
.ky a.ky-btn-outline{color:#3f3f46}
.ky-btn-outline:hover{background:#fafafa}
.ky-btn-outline img{height:16px}
.ky-btn-outline.ky-btn--full{width:100%}
.ky-btn--sm{padding:6px 14px;font-size:13px}
.ky-btn-glassdark{display:inline-flex;align-items:center;gap:8px;background:rgba(9,9,11,.5);backdrop-filter:blur(10px);color:#fff;font-family:Cosmic,sans-serif;font-size:15px;font-weight:500;padding:13px 28px;border-radius:14px;border:1px solid rgba(255,255,255,.2);white-space:nowrap;transition:transform .2s}
.ky a.ky-btn-glassdark{color:#fff}
.ky-btn-glassdark:hover{transform:translateY(-1px)}
.ky-input{flex:1;min-width:0;background:#fff;border:1px solid transparent;border-radius:14px;padding:12px 16px;font-family:Cosmic,sans-serif;font-size:14px;color:#09090b;outline:none;box-shadow:rgb(228,228,231) 0 1px 0 0 inset}
.ky-input::placeholder{color:#a1a1aa}
.ky-input:focus{border-color:#ececee}

/* ── Tags ── */
.ky-tag{display:inline-flex;align-items:center;gap:6px;background:#fafafa;border:1px solid #ececee;border-radius:12px;padding:4px 10px;font-size:13px;font-weight:500;color:#18181b}
.ky-tag img{height:16px}
.ky-cattag{display:inline-block;border:1px solid #ececee;border-radius:12px;padding:3px 8px;font-size:12px;font-weight:400;color:#18181b;white-space:nowrap;background:#fff}
.ky-cattag--sm{font-size:11px;padding:2px 6px}
.ky-cattag--featured{background:#3f3f46;color:#fafafa;border-color:transparent}
.ky-scard--img .ky-cattag{border-color:rgba(255,255,255,.3);color:#fff;background:rgba(20,20,22,.35);backdrop-filter:blur(6px)}
.ky-case-card .ky-cattag{border-color:rgba(255,255,255,.3);color:#fff;background:rgba(20,20,22,.35);backdrop-filter:blur(6px)}

/* ── Navbar ── */
.ky-nav{position:fixed;top:24px;left:50%;transform:translateX(-50%);width:92%;max-width:1080px;height:68px;background:rgba(255,255,255,0.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.6);border-radius:9999px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;z-index:1000;box-shadow:0 8px 32px rgba(0,0,0,0.08)}
.ky-nav__logo{color:#111 !important;text-decoration:none}
.ky-nav__links{display:flex;align-items:center;gap:32px;font-size:14px;font-weight:600;color:rgba(0,0,0,0.6)}
.ky .ky-nav__links a{display:inline-flex;align-items:center;gap:8px;color:rgba(0,0,0,0.6);text-decoration:none;transition:all 0.2s}
.ky .ky-nav__links a:hover{color:#000}
.ky-nav__right{display:flex;align-items:center}
.ky a.ky-nav__cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#000;border-radius:9999px;padding:10px 24px;color:#fff;font-size:14px;font-weight:600;text-decoration:none;transition:all 0.25s;box-shadow:0 4px 12px rgba(0,0,0,0.08)}
.ky a.ky-nav__cta:hover{background:#333;box-shadow:0 6px 16px rgba(0,0,0,0.15);transform:translateY(-1px)}


.ky-banner{margin:108px auto 0;width:92%;max-width:1080px;height:54px;border-radius:9999px;background:linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.88) 24%, rgba(255, 255, 255, 0.88) 76%, rgba(255, 255, 255, 0) 100%), url('/florian-schonbrunner-rj6P1M_fz6M-unsplash.jpg') 50% 22%/cover no-repeat;border:1px solid rgba(0, 0, 0, 0.06);display:flex;align-items:center;justify-content:space-between;padding:0 8px 0 24px;color:#18181b;font-size:14px;font-weight:500;box-shadow:0 4px 20px rgba(0,0,0,0.03);overflow:hidden}
.ky-banner span{color:#18181b;font-weight:500}
.ky-banner__btn{display:inline-flex;align-items:center;gap:6px;background:#fff;color:#18181b;border:1px solid rgba(0,0,0,0.08);border-radius:9999px;padding:8px 16px;font-size:13px;font-weight:600;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,0.04);transition:all 0.2s ease;white-space:nowrap}
.ky-banner__btn:hover{background:#fafafa;transform:translateY(-0.5px);box-shadow:0 4px 12px rgba(0,0,0,0.06)}
.ky a.ky-banner__btn{color:#18181b}


/* ── Hero ── */
.ky-hero{position:relative;max-width:960px;margin:0 auto;padding:96px 24px 0;display:flex;flex-direction:column;align-items:center;text-align:center;gap:24px}
.ky-landmark{position:absolute;pointer-events:none;z-index:10;transition:all 0.3s ease;filter:drop-shadow(0 20px 30px rgba(0,0,0,0.06))}
.ky-landmark--eiffel{top:10px;left:-20px;width:180px;height:auto;animation:float-eiffel 6s ease-in-out infinite}
.ky-landmark--bridge{bottom:40px;left:-20px;width:220px;height:auto;animation:float-bridge 7s ease-in-out infinite}
.ky-landmark--liberty{top:0px;right:-20px;width:220px;height:auto;animation:float-liberty 8s ease-in-out infinite}
.ky-landmark--burj{bottom:60px;right:-20px;width:180px;height:auto;animation:float-burj 6.5s ease-in-out infinite}

@keyframes float-eiffel { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
@keyframes float-bridge { 0%, 100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(-10px) rotate(-1deg); } }
@keyframes float-liberty { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-6px) rotate(1deg); } }
@keyframes float-burj { 0%, 100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(-12px) rotate(-1deg); } }
.ky-hero__tags{display:flex;gap:8px;justify-content:center;margin-bottom:8px;flex-wrap:wrap}
.ky-hero__h1{font-size:64px;font-weight:600;line-height:1.12;letter-spacing:-.02em}
.ky-hero__h1-sub{font-size:64px;font-weight:600;line-height:1.12;margin-top:-4px}
.ky-rotate{display:inline-block;overflow:hidden;height:1.12em;vertical-align:bottom;position:relative}
.ky-rotate__inner{display:block;animation:ky-scroll 10s cubic-bezier(.175,.885,.32,1.275) infinite}
.ky-rotate__inner span{display:block;color:#a1a1aa;height:1.12em;line-height:1.12em}
@keyframes ky-scroll{0%,20%{transform:translateY(0)}25%,45%{transform:translateY(-20%)}50%,70%{transform:translateY(-40%)}75%,95%{transform:translateY(-60%)}100%{transform:translateY(-80%)}}
.ky-hero__text{font-size:16px;font-weight:400;line-height:1.56;color:#52525b;max-width:680px;margin:0 auto 12px}
.ky-hero__form{display:flex;gap:8px;justify-content:center;width:100%}
.ky-hero__stats{display:flex;gap:48px;justify-content:center;margin-top:24px}
.ky-stat__num{font-size:32px;font-weight:600;line-height:1}
.ky-stat__label{font-size:13px;font-weight:500;color:#52525b;line-height:1.35;margin-top:6px}

/* ── Logo Carousel ── */
.ky-logos{padding:32px 0;overflow:hidden;position:relative}
.ky-logos--sm{padding:12px 0}
.ky-logos__track{display:flex;align-items:center;gap:48px;animation:ky-logo-scroll 25s linear infinite;width:max-content}
.ky-logos__track img{height:24px;opacity:.5;filter:grayscale(1);transition:all .3s}
.ky-logos__track img:hover{opacity:1;filter:none}
@keyframes ky-logo-scroll{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}

/* ── Service Cards ── */
.ky-services{max-width:1344px;margin:0 auto;padding:0 32px 0;overflow-x:auto;scrollbar-width:none}
.ky-services::-webkit-scrollbar{display:none}
.ky-services__grid{display:flex;gap:12px;padding-bottom:12px}
.ky-scard{flex-shrink:0;width:300px;min-height:400px;border-radius:36px;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:28px}
.ky-scard--light{background:#fff;border:1px solid #ececee}
.ky-scard--img{background:#18181b;color:#fff}
.ky-scard__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.ky-scard__shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.05) 45%,rgba(0,0,0,.45));z-index:0}
.ky-scard__content{position:relative;z-index:1;display:flex;flex-direction:column;height:100%}
.ky-scard__title{font-size:22px;font-weight:600;line-height:1.4;margin-bottom:12px}
.ky-scard__tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:auto}
.ky-scard__list{padding:0;margin-top:12px}
.ky-scard__list li{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:400;line-height:1.45;padding:5px 0}
.ky-scard__list img{width:20px;height:20px;flex-shrink:0}

/* ── Section ── */
.ky-section{max-width:1344px;margin:0 auto;padding:80px 32px}
.ky-section--white{background:#fff;border-radius:36px 36px 0 0;position:relative}
.ky-section--gray{background:#f4f4f5;border-radius:36px 36px 0 0;position:relative}
.ky-section__header{margin-bottom:48px}
.ky-section__header-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:16px}

/* ── Bottleneck ── */
.ky-bottleneck{background:#f4f4f5;border-radius:36px;overflow:hidden;margin-top:80px}
.ky-bottleneck__inner{max-width:1280px;margin:0 auto;padding:80px 32px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.ky-bottleneck__left{grid-column:1;grid-row:1}
.ky-bottleneck__right{grid-column:2;grid-row:1 / span 2;background:#18181b;border-radius:28px;padding:32px;color:#fff;display:flex;flex-direction:column;gap:8px;align-self:start}
.ky-bottleneck__review{grid-column:1;grid-row:2}
.ky-bottleneck__nums{grid-column:1/-1;display:flex;gap:40px;padding-top:40px;border-top:1px solid #ececee;margin-top:16px}
.ky-bn-item{display:flex;align-items:center;gap:12px;font-size:20px;font-weight:600;line-height:1.56;padding:16px 0;border-bottom:1px solid #27272a}
.ky-bn-item:last-child{border-bottom:none}
.ky-bn-stat__num{font-size:40px;font-weight:700;line-height:1.28}
.ky-bn-stat__desc{font-size:15px;font-weight:400;line-height:1.45;color:#52525b;margin-top:8px}
.ky-review-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px}
.ky-review-card__header{display:flex;gap:12px;align-items:center;margin-bottom:16px}
.ky-review-card__name{font-size:20px;font-weight:700;line-height:1.48}
.ky-review-card__role{font-size:14px;font-weight:400;color:#52525b}
.ky-review-card__text{font-size:16px;font-weight:400;line-height:1.5}
.ky-avatar{width:48px;height:48px;border-radius:48px;object-fit:cover}
.ky-play-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;border-radius:48px;background:rgba(0,0,0,.6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}

/* ── Arrows ── */
.ky-arrows{display:flex;gap:8px}
.ky-arrows button{width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid #ececee;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.05);transition:background .2s;color:#09090b}
.ky-arrows button:hover{background:#f4f4f5}

/* ── Case Carousel (V2) ── */
.ky-cases{overflow-x:auto;scrollbar-width:none;padding:0 32px}
.ky-cases::-webkit-scrollbar{display:none}
.ky-cases__grid{display:flex;gap:12px}
.ky-case-card{flex-shrink:0;width:760px;height:540px;border-radius:36px;overflow:hidden;position:relative;color:#fff}
.ky-case-card__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-case-card__shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.12),transparent 45%,rgba(0,0,0,.62))}
.ky-case-card__live{position:absolute;top:18px;left:18px;display:inline-flex;align-items:center;gap:7px;background:rgba(0,0,0,.5);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.24);color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.14em;padding:7px 12px;border-radius:1000px}
.ky-livedot{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:ky-blink 1.6s ease-in-out infinite}
@keyframes ky-blink{0%,100%{opacity:1}50%{opacity:.3}}
.ky-case-card__bottom{position:absolute;left:24px;right:24px;bottom:22px}
.ky-case-card__title{font-size:22px;font-weight:600;line-height:1.3;max-width:520px}
.ky-case-card__row{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-top:12px}
.ky-case-card__tags{display:flex;flex-wrap:wrap;gap:5px}
.ky-case-card__open{width:42px;height:42px;flex-shrink:0;border-radius:12px;background:#fff;color:#09090b;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.18)}

/* ── Talent Cards ── */
.ky-talents{overflow-x:auto;scrollbar-width:none;margin-top:0}
.ky-talents::-webkit-scrollbar{display:none}
.ky-talents__grid{display:flex;gap:12px}
.ky-talent-card{flex-shrink:0;width:240px;border-radius:36px;overflow:hidden;border:1px solid #ececee;background:#fff}
.ky-talent-card__photo{height:240px;overflow:hidden;background:#f0f0f1}
.ky-talent-card__photo img{width:100%;height:100%;object-fit:cover}
.ky-talent-card__info{padding:16px}
.ky-talent-card__name-row{margin-bottom:8px}
.ky-talent-card__role{font-size:20px;font-weight:600;line-height:1.56}
.ky-talent-card__tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px}
.ky-talent-card__worked{display:flex;flex-direction:column;gap:4px}

/* ── Why bento V2 (3 columns, tall video center) ── */
.ky-why2{display:grid;grid-template-columns:1fr 1.05fr 1fr;gap:12px;margin-top:48px}
.ky-why2__col{display:flex;flex-direction:column;gap:12px;min-width:0}
.ky-why-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:180px;position:relative;flex:1;min-width:0;width:100%}
.ky-why-card__row{display:flex;align-items:center;justify-content:space-between;width:100%;gap:12px}
.ky-why-card__logos{width:100%;margin-top:16px;overflow:hidden}
.ky-why-card--imgbg{min-height:260px}
.ky-why-card--dark{background:#18181b;border-color:#18181b;min-height:150px}
.ky-why-card--short{min-height:140px;flex:none}
.ky-why-card__bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-why-card__bgfade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.15) 60%)}
.ky-why-card--videotall{align-items:stretch;justify-content:flex-start;padding:20px}
.ky-whyvideo{position:relative;border-radius:22px;overflow:hidden;flex:1;min-height:420px;margin-top:6px}
.ky-whyvideo video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-whyvideo__tag{position:absolute;right:0;bottom:24px;background:#09090b;color:#fff;font-size:12px;font-weight:700;letter-spacing:.06em;padding:8px 14px}
.ky-why-card--fee{position:relative;overflow:hidden;min-height:220px;justify-content:flex-start;padding-top:30px}
.ky-why-card__rock{position:absolute;bottom:-30px;right:50%;transform:translateX(50%);width:230px;opacity:.95}

/* ── Tag Marquee ── */
.ky-tag-marquee{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.ky-tag-row{overflow:hidden;padding:3px 0}
.ky-tag-row__inner{display:flex;gap:6px;animation:ky-logo-scroll 40s linear infinite;width:max-content}
.ky-tag-row--reverse .ky-tag-row__inner{animation-direction:reverse}

/* ── How It Works V2 (tabs + visual) ── */
.ky-how2{display:grid;grid-template-columns:.95fr 1.05fr;gap:16px;align-items:stretch}
.ky-how2__tabs{display:flex;flex-direction:column;gap:12px}
.ky-how-tab{background:#f4f4f5;border:1px solid transparent;border-radius:28px;padding:24px;text-align:left;transition:all .3s;cursor:pointer}
.ky-how-tab--active{background:#fff;border-color:#ececee;box-shadow:0 12px 32px rgba(0,0,0,.08)}
.ky-how-tab__num{font-size:14px;font-weight:600;color:#a1a1aa;margin-bottom:8px}
.ky-how-tab__title{font-size:20px;font-weight:600;line-height:1.56;margin-bottom:8px}
.ky-how-tab__desc{font-size:14px;font-weight:400;line-height:1.45;color:#52525b;max-height:0;overflow:hidden;transition:max-height .35s ease}
.ky-how-tab--active .ky-how-tab__desc{max-height:120px}
.ky-how-tab__progress{height:3px;background:#ececee;border-radius:3px;margin-top:16px;overflow:hidden}
.ky-how-tab__bar{height:100%;width:0;background:#09090b;border-radius:3px;animation:ky-progress 5s ease-in-out forwards;animation-play-state:paused}
.ky-how-tab--active .ky-how-tab__bar{animation-play-state:running}
@keyframes ky-progress{0%{width:0}100%{width:100%}}
.ky-how2__visual{position:relative;border-radius:36px;overflow:hidden;min-height:560px}
.ky-how2__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-how2__panel{position:absolute;inset:0;margin:auto;width:min(80%,440px);height:fit-content;background:rgba(255,255,255,.78);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.7);border-radius:22px;padding:22px;box-shadow:0 30px 70px rgba(9,9,11,.22);animation:ky-fadein .45s ease both}
@keyframes ky-fadein{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.ky-how2__panel-head{font-size:13px;font-weight:600;color:#52525b;margin-bottom:12px}
.ky-how2__panel label{display:block;font-size:11.5px;font-weight:600;color:#71717a;margin:12px 0 6px}
.ky-how2__input{background:#fff;border:1px solid #ececee;border-radius:11px;padding:10px 13px;font-size:13px;color:#18181b;position:relative;flex:1;text-align:center}
.ky-how2__input--area{min-height:74px;line-height:1.5;text-align:left}
.ky-how2__gen{position:absolute;right:10px;bottom:8px;font-size:11px;font-weight:600;color:#7c3aed}
.ky-how2__row{display:flex;gap:8px;margin-top:12px}
.ky-how2__step{background:#fff;border:1px solid #ececee;border-radius:13px;padding:11px 14px;margin-bottom:9px;transition:all 0.4s ease}
.ky-how2__step b{display:block;font-size:13.5px;font-weight:600}
.ky-how2__step em{display:block;font-style:normal;font-size:11.5px;color:#71717a;margin-top:2px}
.ky-how2__step--entering{animation:ky-craft-slide-in 0.4s ease forwards}
.ky-how2__step--leaving{animation:ky-craft-fade-out 0.4s ease forwards}
@keyframes ky-craft-slide-in{from{opacity:0;transform:translateY(20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ky-craft-fade-out{from{opacity:1;transform:translateY(0) scale(1);height:52px;margin-bottom:9px;padding-top:11px;padding-bottom:11px;border-color:#ececee}to{opacity:0;transform:translateY(-20px) scale(0.96);height:0;margin-bottom:0;padding-top:0;padding-bottom:0;border-color:transparent;overflow:hidden}}

/* ── Vetting Steps ── */
.ky-vetting{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:48px}
.ky-vet-step{border:1px solid #ececee;border-right:none;padding:24px;display:flex;flex-direction:column;background:#fff;min-height:420px}
.ky-vet-step--first{border-radius:36px 0 0 36px;background:#18181b;color:#fff;border-color:#18181b}
.ky-vet-step--first .ky-cattag{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);color:#fff}
.ky-vet-step--first .ky-vet-step__pct{color:#fff}
.ky-vet-step--last{border-radius:0 36px 36px 0;border-right:1px solid #ececee;text-align:center}
.ky-vet-step__top{margin-bottom:auto}
.ky-vet-step__bottom{margin-top:32px}
.ky-vet-step__pct{font-size:44px;font-weight:700;line-height:1.28;margin-bottom:8px}

/* ── Consultation banner (V2) ── */
.ky-consult{position:relative;max-width:1344px;margin:0 auto;border-radius:36px;overflow:hidden;min-height:540px;display:flex;align-items:center;justify-content:center}
.ky-consult__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ky-consult__overlay{position:absolute;inset:0;background:rgba(9,9,11,.3)}
.ky-consult__content{position:relative;text-align:center;color:#fff;padding:32px}
.ky-consult__content h2{font-size:clamp(34px,4.6vw,56px);font-weight:600;line-height:1.18;margin-bottom:36px}

/* ── Trusted masonry (V2) ── */
.ky-trusted__pills{display:flex;justify-content:center;gap:8px}
.ky-masonry{columns:3;column-gap:12px;margin-top:52px}
.ky-masonry__card{break-inside:avoid;margin-bottom:12px}
.ky-masonry__media{position:relative;border-radius:20px;overflow:hidden;height:300px;margin-bottom:16px}
.ky-masonry__media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}

/* ── Pricing ── */
.ky-pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:40px}
.ky-price-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:32px;display:flex;flex-direction:column;min-height:540px;position:relative;transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1)}
.ky-price-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,0.05)}
.ky-price-card--featured{background:#09090b;color:#fff;border-color:#2c2e34;box-shadow:0 12px 32px rgba(0,0,0,.15)}
.ky-price-card--featured:hover{box-shadow:0 24px 48px rgba(0,0,0,0.25)}
.ky-price-card__badge{position:absolute;top:20px;right:20px;background:#fff;color:#09090b;font-size:10px;font-weight:700;padding:4px 8px;border-radius:1000px;letter-spacing:.05em}
.ky-price-card__title{font-size:24px;font-weight:700;margin-bottom:8px}
.ky-price-card__price{font-size:48px;font-weight:800;line-height:1;margin-bottom:12px}
.ky-price-card__price span{font-size:16px;font-weight:500;color:#71717a}
.ky-price-card--featured .ky-price-card__price span{color:#a1a1aa}
.ky-price-card__desc{font-size:14px;color:#52525b;margin-bottom:24px;line-height:1.4}
.ky-price-card--featured .ky-price-card__desc{color:#a1a1aa}
.ky-price-card__features{margin-bottom:32px;display:flex;flex-direction:column;gap:12px}
.ky-price-card__features li{display:flex;align-items:center;gap:8px;font-size:14px}
.ky-price-card__features img{width:16px;height:16px;flex-shrink:0}
.ky-price-card--featured .ky-price-card__features img{filter:brightness(0) invert(1)}

/* ── CTA ── */
.ky-cta-section{position:relative;padding:144px 32px 80px;max-width:1344px;margin:0 auto;overflow:hidden;border-radius:36px}
.ky-cta-section__inner{position:relative;z-index:1}
.ky-cta-section__bg{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:1400px;max-width:none;pointer-events:none;z-index:0}
.ky-cta-faces{display:inline-flex;vertical-align:middle;margin:0 6px}
.ky-cta-faces img{width:52px;height:52px;border-radius:50%;object-fit:cover;border:3px solid #fff;margin-left:-14px;box-shadow:0 6px 16px rgba(0,0,0,.15)}
.ky-cta-faces img:first-child{margin-left:0}

/* ── FAQ ── */
.ky-faq-layout{display:grid;grid-template-columns:1fr 1.5fr;gap:64px}
.ky-faq-left{position:sticky;top:100px;align-self:start}
.ky-ai-chips{display:flex;gap:8px;margin-top:16px}
.ky-ai-chip{width:44px;height:44px;border-radius:14px;background:#fff;border:1px solid #ececee;box-shadow:0 3px 10px rgba(0,0,0,.05);display:flex;align-items:center;justify-content:center;font-size:17px}
.ky-faq-still{margin-top:40px;padding:24px;background:#fafafa;border:1px solid #ececee;border-radius:24px}
.ky-faq-item{border-bottom:1px solid #ececee}
.ky-faq-item__q{display:flex;align-items:center;justify-content:space-between;padding:20px 0;font-size:20px;font-weight:600;color:#09090b;width:100%;text-align:left;gap:16px}
.ky-faq-chevron{width:20px;height:20px;flex-shrink:0;transition:transform .3s}
.ky-faq-item--open .ky-faq-chevron{transform:rotate(180deg)}
.ky-faq-item__a{overflow:hidden;max-height:0;transition:max-height .35s ease,padding .35s ease}
.ky-faq-item--open .ky-faq-item__a{max-height:400px;padding-bottom:20px}
.ky-faq-item__a p{font-size:15px;font-weight:400;line-height:1.56;color:#52525b}

/* ── Footer ── */
.ky-footer{background:#09090b;padding:80px 32px 32px;margin-top:0;border-radius:36px 36px 0 0}
.ky-footer__inner{max-width:1344px;margin:0 auto}
.ky-footer__top{display:grid;grid-template-columns:2fr repeat(4,1fr);gap:32px;margin-bottom:64px}
.ky-footer__col-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:12px}
.ky-footer__col a{display:block;font-size:14px;font-weight:400;color:#a1a1aa;padding:3px 0;transition:color .2s}
.ky-footer__col a:hover{color:#fff}
.ky-footer__socials{display:flex;gap:8px}
.ky-footer-social{width:36px;height:36px;border-radius:36px;background:#27272a;color:#a1a1aa;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}
.ky-footer__bottom{border-top:1px solid #27272a;padding-top:24px;display:flex;justify-content:space-between;font-size:13px;color:#71717a;flex-wrap:wrap;gap:12px}
.ky-footer__bottom-links{display:flex;gap:24px}
.ky-footer__bottom a{color:#71717a;transition:color .2s}
.ky-footer__bottom a:hover{color:#fff}

/* ── Responsive ── */
@media(max-width:1200px){
  .ky-landmark--eiffel{left:-70px;width:130px}
  .ky-landmark--bridge{left:-50px;width:160px}
  .ky-landmark--liberty{right:-80px;width:160px}
  .ky-landmark--burj{right:-80px;width:130px}
}
@media(max-width:991px){
  .ky-landmark{display:none}
  .ky-nav__links{display:none}
  .ky-hero{padding-top:120px}
  .ky-hero__h1,.ky-hero__h1-sub{font-size:40px}
  .ky-h2{font-size:40px}
  .ky-h3{font-size:32px}
  .ky-bottleneck__inner{grid-template-columns:1fr}
  .ky-bottleneck__right{grid-column:1;grid-row:auto}
  .ky-bottleneck__review{grid-column:1;grid-row:auto}
  .ky-why2{grid-template-columns:1fr 1fr}
  .ky-why2__col:nth-child(2){grid-column:1/-1;order:3}
  .ky-how2{grid-template-columns:1fr}
  .ky-vetting{grid-template-columns:1fr 1fr}
  .ky-vet-step--first{border-radius:36px 36px 0 0}
  .ky-vet-step--last{border-radius:0 0 36px 36px}
  .ky-case-card{width:86vw;height:480px}
  .ky-masonry{columns:2}
  .ky-pricing-grid{grid-template-columns:repeat(2,1fr)}
  .ky-price-card{min-height:auto}
  .ky-faq-layout{grid-template-columns:1fr}
  .ky-faq-left{position:static}
  .ky-footer__top{grid-template-columns:1fr 1fr}
}
@media(max-width:767px){
  .ky-hero{padding:48px 20px 0}
  .ky-banner{border-radius:20px;height:auto;padding:16px;flex-direction:column;gap:12px;text-align:center;background:#ffffff;border:1px solid rgba(0,0,0,0.08)}
  .ky-banner__btn{width:100%;justify-content:center}
  .ky-hero__h1,.ky-hero__h1-sub{font-size:32px}
  .ky-hero__form{flex-direction:column}
  .ky-section{padding:48px 20px}
  .ky-services{padding:0 20px}
  .ky-cases{padding:0 20px}
  .ky-bottleneck__inner{padding:48px 20px}
  .ky-why2{grid-template-columns:1fr}
  .ky-why2__col:nth-child(2){grid-column:auto;order:0}
  .ky-vetting{grid-template-columns:1fr}
  .ky-vet-step{border-right:1px solid #ececee;min-height:auto}
  .ky-vet-step--first{border-radius:36px 36px 0 0}
  .ky-vet-step--last{border-radius:0 0 36px 36px}
  .ky-case-card{height:400px}
  .ky-masonry{columns:1}
  .ky-consult{min-height:420px;margin:0 8px}
  .ky-cta-section{padding:80px 20px 48px}
  .ky-cta-faces img{width:38px;height:38px}
  .ky-footer{padding:48px 20px 24px}
  .ky-footer__top{grid-template-columns:1fr;gap:24px}
  .ky-footer__bottom{flex-direction:column;text-align:center}
  .ky-bn-stat__num{font-size:32px}
  .ky-bottleneck__nums{flex-direction:column;gap:24px}
  .ky-pricing-grid{grid-template-columns:1fr !important}
}
`;

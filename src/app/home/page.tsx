"use client";
import React, { useState, useEffect, useRef } from 'react';

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
  logo: '/favicon_logo.png', // Kyvari logo
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
};

const LOGOS = [
  { alt:"YC", src:`${CDN}/68c2a33d71ce477bc4cfb072_yc-new-png.png` },
  { alt:"Coca-Cola", src:`${CDN}/68c2a33d71ce477bc4cfb06e_coca-cola-new-png.png` },
  { alt:"Disney", src:`${CDN}/68c2a33d71ce477bc4cfb070_disney-new-png.png` },
  { alt:"Genesis", src:`${CDN}/68c2a33d71ce477bc4cfaa42_genesis.avif` },
  { alt:"Udemy", src:`${CDN}/68c2a33d71ce477bc4cfb06d_udemy-new-png.png` },
  { alt:"EY", src:`${CDN}/68c2a33d71ce477bc4cfb06f_ey-new-png.png` },
  { alt:"PandaDoc", src:`${CDN}/68c2a33d71ce477bc4cfb071_panda-doc-new-png.png` },
];

const SERVICE_CARDS = [
  { title:"Deep Destination\nResearch", type:"list", items:["Live maps & routing APIs","Verified local reviews","Opening hours checking","Custom flight inputs","Curated culinary spots","Off-beat travel ideas","And more"] },
  { title:"Interactive Web\nProposals", type:"image", tags:["Web Itinerary","Mobile Optimized","Proposal Builder"], img:`${CDN}/698b4d1e064d84b3b0931f2d_web-and-prod-card.avif` },
  { title:"One-Click\nAI Customization", type:"image", tags:["AI Swapping","Alternatives","Live Editable Canvas","Drag & Drop Days","Custom Travel Notes","Boutique Hotels Selection","Photo Galleries","Any itinerary details"], img:`${CDN}/698b4e0e0361d2746acc91ba_Graphic%20design%20card.avif` },
  { title:"Client Engagement\nTracking", type:"image", tags:["View Alerts","Dwell Time Analytics","Collaboration Link"], img:`${CDN}/699ee05f16453d7ac44ef111_brand-hero01.avif` },
  { title:"Modern Agent\nWorkspace", type:"list", items:["Natural language input","E-mail parsing","PDF brochure import","Clean dashboard","Collaborative links","Brand personalization","And more"] },
  { title:"No-code Itinerary\nBranding", type:"image", tags:["Custom Subdomain","Agent Logo","Personal Brand"], img:`${CDN}/698b5725e5db271f48eb9d34_No-code%20development%20card.avif` },
  { title:"Stunning Visual\nGalleries", type:"image", tags:["Eiffel Tower Spotlights","Scenic Coastal Views"], img:`${CDN}/699ee0b2099e68d5257c7264_ill-hero-1.avif` },
];

const BOTTLENECK_ITEMS = [
  { gray:"Forget about ", bold:"hours of manual hotel research" },
  { gray:"No more ", bold:"copy-pasting into Word or PowerPoint" },
  { gray:"Stop ", bold:"struggling with static PDF files that clients can't interact with" },
  { gray:"Say bye to ", bold:"manual distance and routing checks" },
  { gray:"Skip ", bold:"waiting days to send a proposal to clients" },
  { gray:"Done with ", bold:"wasting weeks on back-and-forth email changes" },
];

const DESTINATIONS = [
  { name:"Paris", role:"Culinary France", years:"5 days", tags:["Eiffel Tower","Le Marais","Boutique Hotels","Pastry Tour"], photo:`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=640` },
  { name:"Tokyo", role:"Foodie Escape", years:"7 days", tags:["Sushi Masterclass","Shibuya Crossing","Temple Tours","Anime Culture"], photo:`https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=640` },
  { name:"Santorini", role:"Honeymooners", years:"7 days", tags:["Private Yacht Cruise","Oia Sunset","Clifftop Villas","Wine Tasting"], photo:`https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=640` },
  { name:"Rome", role:"Heritage Seekers", years:"6 days", tags:["Colosseum Access","Vatican Secrets","Pasta Making","Ancient Ruins"], photo:`https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=640` },
  { name:"Bali", role:"Wellness Retreat", years:"8 days", tags:["Yoga Shala","Ubud Monkey Forest","Waterfall Trekking","Vegan Culinary"], photo:`https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=640` },
  { name:"Maldives", role:"Island Escape", years:"10 days", tags:["Overwater Bungalow","Snorkeling Reef","Private Dining","Seaplane Tour"], photo:`https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=640` },
];

const HOW_STEPS = [
  { num:"01", title:"Describe the trip", desc:"Paste client emails, write details, or input a simple prompt. No templates required.", img:"https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home%20page%20images/How%20it%20work%20img.jpg" },
  { num:"02", title:"AI crafts the proposal", desc:"Kyvari AI researches hotels, routes, opening times, and plans a day-by-day itinerary." },
  { num:"03", title:"Customize in one click", desc:"Tweak details on a live canvas. Swap hotels, edit text, and adjust custom branding." },
  { num:"04", title:"Share interactive link", desc:"Send clients a beautiful mobile-friendly web page. Track their views and close the sale." },
];

const VETTING_STEPS = [
  { step:"Step 1", title:"Real-time Maps & APIs", pct:"55", desc:"Automatically check actual distances, routes, and transit options" },
  { step:"Step 2", title:"Vetted Hotel Directory", pct:"21", desc:"Filter accommodation based on verified reviews, style, and agent notes" },
  { step:"Step 3", title:"Local Expert Verification", pct:"5.3", desc:"Align activity choices with current local guides and opening schedules" },
  { step:"Step 4", title:"Final Agent Quality Check", pct:"0.82", desc:"Customize proposals to match your client's exact desires" },
];

const WHY_TAGS_ROWS = [
  { dir:"normal", tags:["Paris 🗼","Santorini 🏝️","Rome 🏛️","Tokyo ⛩️","Bali 🍃","Maldives 🏊‍♂️","Culinary Tour","Honeymoon","Adventure","Private Villa"] },
  { dir:"reverse", tags:["Itinerary Builder","Proposal Canvas","Maps & Routing","Hotel Swapping","Client Tracking","View Alerts","Analytics"] },
  { dir:"normal", tags:["E-mail Parser","PDF Brochure Import","Voice Note Input","Collaborative Link","Unlimited Revisions","Branding Control"] },
  { dir:"reverse", tags:["Save 4 Hours","43% More Bookings","80% Faster Delivery","Modern Travel Agent","Autonomous Travel Assistant"] },
];

const TESTIMONIALS = [
  { name: "Riya Malhotra", role: "Founder, Wanderlux Travel", text: "Before Kyvari, building a 7-day Europe proposal for a family used to take me 4–5 hours — cross-referencing hotels, writing day-by-day notes, formatting everything in Word. Now I describe the brief and get a full itinerary with maps in under 10 minutes. My clients comment on how premium the output looks.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces", location: "Mumbai, India", url: "wanderluxtravel.in" },
  { name: "Arjun Nair", role: "CEO, Serene Routes", text: "I run a boutique agency focused on luxury South Asia tours — Sri Lanka, Bhutan, Maldives. The level of detail Kyvari generates is honestly better than what I used to write manually after 10 years of experience. The destination context, the timing of activities, the meal suggestions — it's all there. I've cut my proposal turnaround from 2 days to 2 hours.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces", location: "Kochi, India", url: "sereneroutes.com" },
  { name: "Deepa Krishnamurthy", role: "Senior Travel Consultant, Heritage Trails", text: "My clients are mostly NRIs planning India trips — they want everything planned before they land. Kyvari handles the complexity perfectly. I can input '14 days, Rajasthan circuit, family of 6, heritage hotels' and it gives me a structured day-by-day plan with map view.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces", location: "Bengaluru, India", url: "heritagetrailsindia.com" },
  { name: "Sameer Qureshi", role: "Director, Offbeat Journeys", text: "I was skeptical about AI tools — tried a few and they gave generic, copy-paste itineraries. Kyvari is different. It actually understands nuance. When I said 'slow travel, local experiences, no tourist traps, budget ₹80,000 for 10 days in Vietnam', it gave me exactly that.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces", location: "Pune, India", url: "offbeatjourneys.in" }
];

const FAQ_ITEMS = [
  { q:"What is Kyvari?", a:"Kyvari is an AI-powered conversational travel assistant that helps travel agents build professional, interactive itineraries in seconds instead of hours." },
  { q:"How does the AI create itineraries?", a:"You paste a client brief, email, or simple notes. The AI parses the request, searches maps, hotels, and routing, and generates a day-by-day plan." },
  { q:"Can I edit the generated itineraries?", a:"Yes, absolutely. Kyvari features an editable canvas where you can add/remove days, swap hotels, edit text, and customize photos." },
  { q:"Can clients view the itineraries on mobile?", a:"Yes. Every itinerary gets a beautiful, mobile-optimized public link you can share. It includes maps, photos, and hotel links." },
  { q:"How much does Kyvari cost?", a:"We offer a Free plan with basic itinerary generations, and Pro/Agency plans starting at $29/month for unlimited itineraries and custom branding." },
  { q:"Does Kyvari support integrations?", a:"Yes, you can export itineraries to PDFs, integrate with client management systems, or share directly to WhatsApp/Email." }
];

const FOOTER_COLS = [
  { title:"Product", links:["AI Assistant","Proposal Builder","Editable Canvas","Live Map View","Client Tracking","Integrations"] },
  { title:"Destinations", links:["Paris Guide","Tokyo Guide","Santorini Guide","Rome Guide","Bali Guide"] },
  { title:"Company", links:["About us","Pricing","Case studies","Wall of Love","Blog","Careers"] },
  { title:"Compare", links:["vs. Manual Word Docs","vs. Static PDFs","vs. Legacy Software"] },
];

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

/* ─── Main Page Component ─── */
export default function KyvariHome() {
  const servicesRef = useRef<HTMLDivElement>(null);

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
          <a href="#" className="ky-nav__logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={A.logo} alt="Kyvari" style={{ height: '32px', borderRadius: '8px' }} />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#09090b', letterSpacing: '-0.02em' }}>Kyvari</span>
            </div>
          </a>
          <div className="ky-nav__links">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ky-nav__right">
            <a href="#" className="ky-btn-outline"><span>Log in</span><img src={A.loginB} alt="" /></a>
            <a href="#" className="ky-btn-dark"><span>Start free</span><img src={A.faces} alt="" /></a>
          </div>
        </nav>

        {/* ═══ 2. ANNOUNCEMENT BANNER ═══ */}
        <div className="ky-banner">
          <span>🔥&nbsp; How modern travel agencies scale: read the Kyvari AI agent benchmark report</span>
          <a href="#" className="ky-btn-outline ky-btn--sm"><span>Read the report</span></a>
        </div>

        {/* ═══ 3. HERO ═══ */}
        <section className="ky-hero">
          <div className="ky-hero__left">
            <div className="ky-hero__tags">
              <span className="ky-tag"><img src={A.ycBadge} alt="YC" />Backed by Y Combinator</span>
              <span className="ky-tag">
                <img src={A.google} alt="" style={{height:16}} /> 4.9
                <img src={A.trustpilot} alt="" style={{height:16, marginLeft:8}} /> 4.9
              </span>
            </div>
            <h1 className="ky-hero__h1">
              All your travel{' '}
              <span className="ky-rotate">
                <span className="ky-rotate__inner">
                  <span>itineraries</span><span>proposals</span><span>research</span><span>bookings</span><span>itineraries</span>
                </span>
              </span>
            </h1>
            <div className="ky-hero__h1-sub">done in under 60 seconds</div>
          </div>
          <div className="ky-hero__right">
            <p className="ky-hero__text">Automate deep destination research and build high-converting, interactive proposals in 60 seconds. Let Kyvari handle the heavy lifting so you can focus on scaling your business.</p>
            <div className="ky-hero__form">
              <input className="ky-input" type="email" placeholder="Paste brief or describe your destination..." />
              <a href="#" className="ky-btn-dark ky-btn--lg"><span>Start free</span><img src={A.loginW} alt="" /></a>
            </div>
            <div className="ky-hero__stats">
              <div className="ky-stat"><div className="ky-stat__num">80%</div><div className="ky-stat__label">less time spent<br/>on research</div></div>
              <div className="ky-stat"><div className="ky-stat__num">43%</div><div className="ky-stat__label">higher client<br/>conversion</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 4. LOGO CAROUSEL ═══ */}
        <div className="ky-logos"><div className="ky-logos__track">
          {[...LOGOS,...LOGOS,...LOGOS].map((l,i) => <img key={i} src={l.src} alt={l.alt} />)}
        </div></div>

        {/* ═══ 5. FEATURE CARDS SLIDER ═══ */}
        <section id="features">
          <div className="ky-services" ref={servicesRef}>
            <div className="ky-services__grid">
              {SERVICE_CARDS.map((c, i) => (
                <div key={i} className={`ky-scard ${c.type==='image' ? 'ky-scard--img' : 'ky-scard--light'}`}>
                  {c.type==='image' && c.img && <img className="ky-scard__bg" src={c.img} alt={c.title} />}
                  <div className="ky-scard__content">
                    <div className="ky-scard__title" style={{whiteSpace:'pre-line'}}>{c.title}</div>
                    {c.type==='list' && c.items && <ul className="ky-scard__list">{c.items.map((it,j) => <li key={j}><img src={A.check} alt="" />{it}</li>)}</ul>}
                    {c.tags && <div className="ky-scard__tags">{c.tags.map((t,j) => <span key={j} className="ky-cattag">{t}</span>)}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6. BOTTLENECK SECTION (Dark) ═══ */}
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
                <p className="ky-review-card__text">{TESTIMONIALS[0].text}</p>
              </div>
            </div>
            <div className="ky-bottleneck__nums">
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">80%</div><div className="ky-bn-stat__desc">less time spent compared to traditional manual Word docs</div></div>
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">43%</div><div className="ky-bn-stat__desc">higher conversion rates on proposals sent</div></div>
              <div className="ky-bn-stat"><div className="ky-bn-stat__num">17K+</div><div className="ky-bn-stat__desc">hours saved collectively by travel advisors</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 7. DESTINATIONS SLIDER ═══ */}
        <section className="ky-section ky-section--white">
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
                    <div className="ky-talent-card__tags">{t.tags.map((tag,j) => <span key={j} className="ky-cattag ky-cattag--sm">{tag}</span>)}</div>
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

        {/* ═══ 8. WHY TEAMS CHOOSE KYVARI (Bento Grid) ═══ */}
        <section className="ky-section ky-section--white" id="testimonials">
          <h2 className="ky-h3 ky-text-center">Why travel experts choose Kyvari</h2>
          <div className="ky-why-grid">
            {/* Row 1 */}
            <div className="ky-why-card ky-why-card--customers">
              <div className="ky-why-card__row"><div><div className="ky-h4">5 000+</div><div className="ky-h5">Travel Advisors</div></div><img src={A.customersIcon} alt="" width={80} /></div>
              <div className="ky-why-card__logos"><div className="ky-logos ky-logos--sm"><div className="ky-logos__track">{[...LOGOS,...LOGOS].map((l,i) => <img key={i} src={l.src} alt={l.alt} />)}</div></div></div>
            </div>
            <div className="ky-why-card ky-why-card--vetted">
              <div className="ky-h5 ky-text-center">Verified<br/>Real-Time Travel Data</div>
            </div>
            <div className="ky-why-card ky-why-card--match">
              <div className="ky-h5 ky-text-center ky-text-white">Build high-converting travel proposals in 60 seconds</div>
            </div>

            {/* Row 2 */}
            <div className="ky-why-card ky-why-card--review">
              <div className="ky-review-card ky-review-card--sm">
                <div className="ky-review-card__header">
                  <img src={TESTIMONIALS[1].photo} alt={TESTIMONIALS[1].name} className="ky-avatar" />
                  <div><div className="ky-review-card__name">{TESTIMONIALS[1].name}</div><div className="ky-review-card__role">{TESTIMONIALS[1].role}</div></div>
                </div>
                <div className="ky-review-card__video-placeholder">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" alt="Video preview" className="ky-review-card__preview" style={{ height: '300px', objectFit: 'cover' }} />
                  <div className="ky-play-btn">▶</div>
                </div>
                <p className="ky-review-card__text" style={{ marginTop: '16px' }}>{TESTIMONIALS[1].text}</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="ky-why-card ky-why-card--projects">
              <div className="ky-why-card__row"><div><div className="ky-h4">15,000+</div><div className="ky-h5">Itineraries Generated</div></div><img src={A.projectsIcon} alt="" width={80} /></div>
            </div>
            <div className="ky-why-card ky-why-card--skills">
              <div className="ky-tag-marquee">{WHY_TAGS_ROWS.map((row,i) => (
                <div key={i} className={`ky-tag-row ${row.dir==='reverse' ? 'ky-tag-row--reverse' : ''}`}>
                  <div className="ky-tag-row__inner">{[...row.tags,...row.tags].map((t,j) => <span key={j} className={`ky-cattag ${j%5===0?'ky-cattag--featured':''}`}>{t}</span>)}</div>
                </div>
              ))}</div>
              <div className="ky-why-card__row" style={{marginTop:16}}><div><div className="ky-h4">100+</div><div className="ky-h5">Destinations Map</div></div><img src={A.skillSetIcon} alt="" width={80} /></div>
            </div>
            <div className="ky-why-card ky-why-card--fee">
              <div className="ky-h5 ky-text-center">Flat monthly pricing</div>
              <span className="ky-cattag" style={{marginTop:12,background:'#fff'}}>from $0/month</span>
              <img src={A.rockLogo} alt="" className="ky-why-card__rock" />
            </div>
          </div>
        </section>

        {/* ═══ 9. HOW IT WORKS (Tabs) ═══ */}
        <HowItWorks />

        {/* ═══ 10. ONLY THE BEST PROPOSALS (Vetting Funnel) ═══ */}
        <section className="ky-section ky-section--gray">
          <div className="ky-section__header ky-text-center">
            <h2 className="ky-h3">Guaranteed Accurate Travel Details</h2>
            <p className="ky-subtitle">No more copy-pasting wrong hotels or closed museums</p>
          </div>
          <div className="ky-vetting">
            {VETTING_STEPS.map((s, i) => (
              <div key={i} className={`ky-vet-step ${i===0?'ky-vet-step--first':''} ${i===3?'ky-vet-step--last':''}`}>
                <div className="ky-vet-step__top">
                  <span className="ky-cattag">{s.step}</span>
                  <div className="ky-h5" style={{marginTop:12}}>{s.title}</div>
                </div>
                <div className="ky-vet-step__bottom">
                  {i===3 && <img src={A.step4Img} alt="" width={112} style={{marginBottom:24}} />}
                  <div className="ky-vet-step__pct">{s.pct}%</div>
                  <p className="ky-text-sm">{s.desc}</p>
                  {i===3 && <a href="#" className="ky-btn-dark ky-btn--full" style={{marginTop:24}}><span>Start Free</span><img src={A.openLink} alt="" /></a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 11. PRICING SECTION ═══ */}
        <section className="ky-section ky-section--white" id="pricing">
          <div className="ky-section__header ky-text-center">
            <h2 className="ky-h3">Simple, flat-rate pricing</h2>
            <p className="ky-subtitle">No hidden fees. Scale your travel business with predictable pricing.</p>
          </div>
          <div className="ky-pricing-grid">
            <div className="ky-price-card">
              <div className="ky-price-card__title">Starter</div>
              <div className="ky-price-card__price">$0<span>/mo</span></div>
              <p className="ky-price-card__desc">Perfect for trying out Kyvari AI for your agency.</p>
              <ul className="ky-price-card__features">
                <li><img src={A.check} alt="" />5 itineraries per month</li>
                <li><img src={A.check} alt="" />AI prompt planner</li>
                <li><img src={A.check} alt="" />Interactive web links</li>
                <li><img src={A.check} alt="" />Live map view</li>
              </ul>
              <a href="#" className="ky-btn-outline ky-btn--full" style={{ marginTop: 'auto' }}><span>Start free</span></a>
            </div>

            <div className="ky-price-card ky-price-card--featured">
              <span className="ky-price-card__badge">MOST POPULAR</span>
              <div className="ky-price-card__title">Pro</div>
              <div className="ky-price-card__price">$29<span>/mo</span></div>
              <p className="ky-price-card__desc">For professional travel agents ready to scale.</p>
              <ul className="ky-price-card__features">
                <li><img src={A.check} alt="" />Unlimited itineraries</li>
                <li><img src={A.check} alt="" />Custom branding & logo</li>
                <li><img src={A.check} alt="" />Client view tracking & analytics</li>
                <li><img src={A.check} alt="" />Priority AI processing queue</li>
                <li><img src={A.check} alt="" />Premium image gallery access</li>
              </ul>
              <a href="#" className="ky-btn-dark ky-btn--full" style={{ marginTop: 'auto' }}><span>Go Pro</span><img src={A.loginW} alt="" /></a>
            </div>

            <div className="ky-price-card">
              <div className="ky-price-card__title">Agency</div>
              <div className="ky-price-card__price">$79<span>/mo</span></div>
              <p className="ky-price-card__desc">For collaborative teams and travel groups.</p>
              <ul className="ky-price-card__features">
                <li><img src={A.check} alt="" />Everything in Pro</li>
                <li><img src={A.check} alt="" />Up to 5 team members</li>
                <li><img src={A.check} alt="" />Collaborative workspace</li>
                <li><img src={A.check} alt="" />Custom subdomain setup</li>
                <li><img src={A.check} alt="" />Dedicated support desk</li>
              </ul>
              <a href="#" className="ky-btn-outline ky-btn--full" style={{ marginTop: 'auto' }}><span>Contact sales</span></a>
            </div>
          </div>
        </section>

        {/* ═══ 12. CTA SECTION ═══ */}
        <section className="ky-cta-section">
          <div className="ky-cta-section__inner">
            <h2 className="ky-h2 ky-text-center">Create your first proposal in 60 seconds</h2>
            <div className="ky-hero__form" style={{maxWidth:520, margin:'40px auto 0'}}>
              <input className="ky-input" type="email" placeholder="Email address" />
              <a href="#" className="ky-btn-dark ky-btn--lg"><span>Start free</span><img src={A.loginW} alt="" /></a>
            </div>
          </div>
          <img src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/BG%20Images/white%20bg.jpg" alt="" className="ky-cta-section__bg" />
        </section>

        {/* ═══ 13. FAQ ═══ */}
        <section className="ky-section ky-section--white" id="faq">
          <div className="ky-faq-layout">
            <div className="ky-faq-left">
              <h2 className="ky-h3">FAQ</h2>
              <p className="ky-subtitle" style={{marginTop:24}}>Ask any question about Kyvari AI</p>
              <div className="ky-faq-still">
                <div className="ky-h5">Still have questions?</div>
                <p className="ky-text-sm" style={{margin:'8px 0 16px'}}>Let's talk — book an intro call with our product experts</p>
                <a href="#" className="ky-btn-dark"><span>Book a call</span><img src={A.faces} alt="" /></a>
              </div>
            </div>
            <div className="ky-faq-right">
              {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} />)}
            </div>
          </div>
        </section>

        {/* ═══ 14. FOOTER ═══ */}
        <footer className="ky-footer">
          <div className="ky-footer__inner">
            <div className="ky-footer__top">
              <div className="ky-footer__brand">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', filter:'brightness(0) invert(1)' }}>
                  <img src={A.logo} alt="Kyvari" style={{ height: '32px', borderRadius: '8px' }} />
                  <span style={{ fontSize: '20px', fontWeight: 800, color: '#000', letterSpacing: '-0.02em' }}>Kyvari</span>
                </div>
                <p className="ky-text-sm ky-text-muted" style={{marginTop:16, maxWidth:280}}>The conversational workspace that matches travel advisors with AI itinerary builder tools.</p>
                <div className="ky-footer__socials" style={{marginTop:16}}>
                  {['LinkedIn','X','Instagram','YouTube'].map(s => <span key={s} className="ky-footer-social">{s[0]}</span>)}
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

      </div>
    </>
  );
}

/* ─── How It Works component with tab switching ─── */
function HowItWorks() {
  const [active, setActive] = useState(0);
  useEffect(() => { const t = setInterval(() => setActive(p => (p+1)%4), 5000); return () => clearInterval(t); }, []);
  return (
    <section className="ky-section ky-section--white" id="how-it-works">
      <div className="ky-section__header ky-text-center">
        <h2 className="ky-h3">How it works</h2>
      </div>
      <div className="ky-how">
        {HOW_STEPS.map((s, i) => (
          <button key={i} className={`ky-how-tab ${active===i ? 'ky-how-tab--active' : ''}`} onClick={() => setActive(i)}>
            <div className="ky-how-tab__num">{s.num}</div>
            <div className="ky-how-tab__title">{s.title}</div>
            <div className="ky-how-tab__desc">{s.desc}</div>
            <div className="ky-how-tab__progress"><div className="ky-how-tab__bar" style={{ animationPlayState: active===i ? 'running' : 'paused' }} /></div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CSS — all scoped under .ky
   ═══════════════════════════════════════════════════════════════ */
const PAGE_CSS = `
/* ── Reset ── */
.ky,.ky *,.ky *::before,.ky *::after{box-sizing:border-box;margin:0;padding:0}
.ky{font-family:Cosmic,ui-sans-serif,system-ui,sans-serif;color:#09090b;background:#f4f4f5;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.ky a{color:inherit;text-decoration:none}
.ky img{max-width:100%;display:block}
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
.ky-btn-dark{display:inline-flex;align-items:center;gap:8px;background:#09090b;color:#fff;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:10px 20px;border-radius:14px;border:1.5px solid #2c2e34;box-shadow:rgba(255,255,255,.5) 0 .5px 0 0 inset,rgba(117,123,133,.4) 0 9px 14px -5px inset,rgb(44,46,52) 0 0 0 1.5px,rgba(0,0,0,.14) 0 4px 6px 0;transition:transform .2s;white-space:nowrap;cursor:pointer}
.ky-btn-dark:hover{transform:translateY(-1px)}
.ky-btn-dark img{height:20px}
.ky-btn-dark.ky-btn--lg{padding:12px 24px;font-size:15px}
.ky-btn-dark.ky-btn--full{width:100%;justify-content:center}
.ky-btn-outline{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#3f3f46;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:8px 16px;border-radius:10000px;border:1px solid #ececee;cursor:pointer;transition:background .2s;white-space:nowrap}
.ky-btn-outline:hover{background:#fafafa}
.ky-btn-outline img{height:16px}
.ky-btn--sm{padding:6px 14px;font-size:13px}
.ky-input{flex:1;min-width:0;background:#fff;border:1px solid transparent;border-radius:14px;padding:12px 16px;font-family:Cosmic,sans-serif;font-size:14px;color:#09090b;outline:none;box-shadow:rgb(228,228,231) 0 1px 0 0 inset}
.ky-input::placeholder{color:#a1a1aa}
.ky-input:focus{border-color:#ececee}

/* ── Tags ── */
.ky-tag{display:inline-flex;align-items:center;gap:6px;background:#fafafa;border:1px solid #ececee;border-radius:12px;padding:4px 10px;font-size:13px;font-weight:500;color:#18181b}
.ky-tag img{height:16px}
.ky-cattag{display:inline-block;border:1px solid #ececee;border-radius:12px;padding:3px 8px;font-size:12px;font-weight:400;color:#18181b;white-space:nowrap}
.ky-cattag--sm{font-size:11px;padding:2px 6px}
.ky-cattag--featured{background:#3f3f46;color:#fafafa;border-color:transparent}
.ky-scard--img .ky-cattag{border-color:rgba(255,255,255,.3);color:#fff}

/* ── Navbar ── */
.ky-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:64px}
.ky-nav__logo img{height:28px}
.ky-nav__links{display:flex;gap:24px;font-size:14px;font-weight:500;color:#18181b}
.ky-nav__right{display:flex;gap:12px;align-items:center}

/* ── Banner ── */
.ky-banner{margin-top:64px;background:#09090b;color:#fff;text-align:center;padding:14px 20px;font-size:14px;font-weight:500;display:flex;justify-content:center;align-items:center;gap:12px;flex-wrap:wrap}

/* ── Hero ── */
.ky-hero{max-width:1280px;margin:0 auto;padding:96px 32px 0;display:grid;grid-template-columns:1.3fr 1fr;gap:48px;align-items:start}
.ky-hero__tags{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.ky-hero__h1{font-size:64px;font-weight:600;line-height:1.12;letter-spacing:-.02em}
.ky-hero__h1-sub{font-size:64px;font-weight:600;line-height:1.12;margin-top:-4px}
.ky-rotate{display:inline-block;overflow:hidden;height:1.15em;vertical-align:bottom;position:relative}
.ky-rotate__inner{display:inline-block;animation:ky-scroll 10s cubic-bezier(.175,.885,.32,1.275) infinite}
.ky-rotate__inner span{display:block;color:#a1a1aa;margin-top:8px}
@keyframes ky-scroll{0%,20%{transform:translateY(-85%)}25%,45%{transform:translateY(-65%)}50%,70%{transform:translateY(-45%)}75%,95%{transform:translateY(-25%)}100%{transform:translateY(-5%)}}
.ky-hero__right{padding-top:24px}
.ky-hero__text{font-size:15px;font-weight:400;line-height:1.56;color:#52525b;margin-bottom:48px}
.ky-hero__form{display:flex;gap:8px}
.ky-hero__stats{display:flex;gap:40px;margin-top:48px}
.ky-stat__num{font-size:32px;font-weight:600;line-height:1}
.ky-stat__label{font-size:13px;font-weight:500;color:#52525b;line-height:1.35}

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
.ky-scard{flex-shrink:0;width:260px;min-height:340px;border-radius:36px;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding:24px}
.ky-scard--light{background:#fff;border:1px solid #ececee}
.ky-scard--img{background:#18181b;color:#fff}
.ky-scard__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.ky-scard__content{position:relative;z-index:1}
.ky-scard__title{font-size:20px;font-weight:600;line-height:1.56;margin-bottom:8px}
.ky-scard__tags{display:flex;flex-wrap:wrap;gap:4px}
.ky-scard__list{padding:0}
.ky-scard__list li{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:400;line-height:1.45;padding:4px 0}
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
.ky-bottleneck__right{grid-column:2;grid-row:1;background:#18181b;border-radius:28px;padding:32px;color:#fff;display:flex;flex-direction:column;gap:8px}
.ky-bottleneck__review{grid-column:2;grid-row:2}
.ky-bottleneck__nums{grid-column:1/-1;display:flex;gap:40px;padding-top:40px;border-top:1px solid #ececee;margin-top:16px}
.ky-bn-item{display:flex;align-items:center;gap:12px;font-size:20px;font-weight:600;line-height:1.56;padding:16px 0;border-bottom:1px solid #27272a}
.ky-bn-item:last-child{border-bottom:none}
.ky-bn-stat__num{font-size:40px;font-weight:700;line-height:1.28}
.ky-bn-stat__desc{font-size:15px;font-weight:400;line-height:1.45;color:#52525b;margin-top:8px}
.ky-review-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px}
.ky-review-card--sm .ky-review-card__preview{width:100%;border-radius:20px;margin-top:16px}
.ky-review-card__header{display:flex;gap:12px;align-items:center;margin-bottom:16px}
.ky-review-card__name{font-size:20px;font-weight:700;line-height:1.48}
.ky-review-card__role{font-size:14px;font-weight:400;color:#52525b}
.ky-review-card__text{font-size:16px;font-weight:400;line-height:1.5}
.ky-review-card__video-placeholder{position:relative}
.ky-avatar{width:48px;height:48px;border-radius:48px;object-fit:cover}
.ky-play-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;border-radius:48px;background:rgba(0,0,0,.6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}

/* ── Talent Cards ── */
.ky-talents{overflow-x:auto;scrollbar-width:none;margin-top:0}
.ky-talents::-webkit-scrollbar{display:none}
.ky-talents__grid{display:flex;gap:12px}
.ky-talent-card{flex-shrink:0;width:240px;border-radius:36px;overflow:hidden;border:1px solid #ececee;background:#fff}
.ky-talent-card__photo{height:240px;overflow:hidden}
.ky-talent-card__photo img{width:100%;height:100%;object-fit:cover}
.ky-talent-card__info{padding:16px}
.ky-talent-card__name-row{margin-bottom:8px}
.ky-talent-card__role{font-size:20px;font-weight:600;line-height:1.56}
.ky-talent-card__tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px}
.ky-talent-card__worked{display:flex;flex-direction:column;gap:8px}

/* ── Why Grid ── */
.ky-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:48px}
.ky-why-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px}
.ky-why-card__row{display:flex;align-items:center;justify-content:space-between;width:100%}
.ky-why-card--customers{grid-column:1/3}
.ky-why-card--customers .ky-why-card__logos{width:100%;margin-top:16px;overflow:hidden}
.ky-why-card--vetted{background:#fafafa}
.ky-why-card--match{background:#18181b}
.ky-why-card--review{grid-column:1/4}
.ky-why-card--projects{}
.ky-why-card--skills{grid-column:2/3;overflow:hidden}
.ky-why-card--fee{position:relative;overflow:hidden}
.ky-why-card__rock{position:absolute;bottom:-20px;right:-10px;width:190px;opacity:.9}

/* ── Tag Marquee ── */
.ky-tag-marquee{width:100%;overflow:hidden}
.ky-tag-row{overflow:hidden;padding:3px 0}
.ky-tag-row__inner{display:flex;gap:6px;animation:ky-logo-scroll 40s linear infinite;width:max-content}
.ky-tag-row--reverse .ky-tag-row__inner{animation-direction:reverse}

/* ── How It Works Tabs ── */
.ky-how{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.ky-how-tab{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px;text-align:left;transition:all .3s;cursor:pointer}
.ky-how-tab--active{background:#fff;border-color:#d4d4d8;box-shadow:0 4px 12px rgba(0,0,0,.045)}
.ky-how-tab__num{font-size:14px;font-weight:600;color:#a1a1aa;margin-bottom:8px}
.ky-how-tab__title{font-size:20px;font-weight:600;line-height:1.56;margin-bottom:8px}
.ky-how-tab__desc{font-size:14px;font-weight:400;line-height:1.45;color:#52525b;max-height:0;overflow:hidden;transition:max-height .35s ease}
.ky-how-tab--active .ky-how-tab__desc{max-height:120px}
.ky-how-tab__progress{height:3px;background:#ececee;border-radius:3px;margin-top:16px;overflow:hidden}
.ky-how-tab__bar{height:100%;width:0;background:#09090b;border-radius:3px;animation:ky-progress 5s ease-in-out forwards;animation-play-state:paused}
.ky-how-tab--active .ky-how-tab__bar{animation-play-state:running}
@keyframes ky-progress{0%{width:0}100%{width:100%}}

/* ── Vetting Steps ── */
.ky-vetting{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:48px}
.ky-vet-step{border:1px solid #ececee;border-right:none;padding:24px;display:flex;flex-direction:column;background:#fff}
.ky-vet-step--first{border-radius:36px 0 0 36px;background:#18181b;color:#fff}
.ky-vet-step--first .ky-cattag{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);color:#fff}
.ky-vet-step--first .ky-vet-step__pct{color:#fff}
.ky-vet-step--last{border-radius:0 36px 36px 0;border-right:1px solid #ececee}
.ky-vet-step__top{margin-bottom:auto}
.ky-vet-step__bottom{margin-top:32px}
.ky-vet-step__pct{font-size:40px;font-weight:700;line-height:1.28;margin-bottom:8px}

/* ── Pricing ── */
.ky-pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.ky-price-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:32px;display:flex;flex-direction:column;min-height:500px;position:relative}
.ky-price-card--featured{background:#09090b;color:#fff;border-color:#2c2e34;box-shadow:0 12px 32px rgba(0,0,0,.15)}
.ky-price-card__badge{position:absolute;top:20px;right:20px;background:#e8543f;color:#fff;font-size:10px;font-weight:700;padding:4px 8px;border-radius:1000px;letter-spacing:.05em}
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

/* ── FAQ ── */
.ky-faq-layout{display:grid;grid-template-columns:1fr 1.5fr;gap:64px}
.ky-faq-left{position:sticky;top:100px;align-self:start}
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
@media(max-width:991px){
  .ky-nav__links{display:none}
  .ky-hero{grid-template-columns:1fr;padding-top:64px}
  .ky-hero__h1,.ky-hero__h1-sub{font-size:40px}
  .ky-h2{font-size:40px}
  .ky-h3{font-size:32px}
  .ky-bottleneck__inner{grid-template-columns:1fr}
  .ky-how{grid-template-columns:1fr 1fr}
  .ky-vetting{grid-template-columns:1fr 1fr}
  .ky-vet-step--first{border-radius:36px 36px 0 0}
  .ky-vet-step--last{border-radius:0 0 36px 36px}
  .ky-why-grid{grid-template-columns:1fr 1fr}
  .ky-why-card--customers{grid-column:1/3}
  .ky-why-card--review{grid-column:1/3}
  .ky-pricing-grid{grid-template-columns:1fr}
  .ky-price-card{min-height:auto}
  .ky-faq-layout{grid-template-columns:1fr}
  .ky-faq-left{position:static}
  .ky-footer__top{grid-template-columns:1fr 1fr}
}
@media(max-width:767px){
  .ky-hero{padding:48px 20px 0}
  .ky-hero__h1,.ky-hero__h1-sub{font-size:32px}
  .ky-hero__form{flex-direction:column}
  .ky-section{padding:48px 20px}
  .ky-services{padding:0 20px}
  .ky-bottleneck__inner{padding:48px 20px}
  .ky-how{grid-template-columns:1fr}
  .ky-vetting{grid-template-columns:1fr}
  .ky-vet-step{border-right:1px solid #ececee}
  .ky-vet-step--first{border-radius:36px 36px 0 0}
  .ky-vet-step--last{border-radius:0 0 36px 36px}
  .ky-why-grid{grid-template-columns:1fr}
  .ky-why-card--customers,.ky-why-card--review{grid-column:auto}
  .ky-cta-section{padding:80px 20px 48px}
  .ky-footer{padding:48px 20px 24px}
  .ky-footer__top{grid-template-columns:1fr;gap:24px}
  .ky-footer__bottom{flex-direction:column;text-align:center}
  .ky-bn-stat__num{font-size:32px}
  .ky-bottleneck__nums{flex-direction:column;gap:24px}
}
`;

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
  logo: `${CDN}/68c2a33d71ce477bc4cfa8ea_awesomic-logo.svg`,
  ycBadge: `${CDN}/68c2a33d71ce477bc4cfaa4c_YC-small-badge.svg`,
  google: `${CDN}/68c2a33d71ce477bc4cfa969_google_symbol.svg.svg`,
  trustpilot: `${CDN}/68c2a33d71ce477bc4cfa967_google_symbol.svg.svg`,
  faces: `${CDN}/68c2a33d71ce477bc4cfa96b_faq_two-faces.avif`,
  loginW: `${CDN}/68c2a33d71ce477bc4cfa8d5_login-icon-white.svg`,
  loginB: `${CDN}/68c2a33d71ce477bc4cfa8d6_login-icon-black.svg`,
  check: `${CDN}/68c2a33d71ce477bc4cfa900_checkmark-circle-dark.svg`,
  arrow: `${CDN}/68c2a33d71ce477bc4cfaa72_arrrow-right-circle-white.svg`,
  chevron: `${CDN}/68c2a33d71ce477bc4cfa96a_chevron-down-gray.svg`,
  openLink: `${CDN}/68c2a33d71ce477bc4cfa909_open-link-black-icon.svg`,
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
  { title:"Software\ndevelopment", type:"list", items:["Frontend & Backend","Full stack","Mobile App","WordPress","AI development","QA engineering","And more"] },
  { title:"Web & product", type:"image", tags:["Web","UX/UI design","Mobile app"], img:`${CDN}/698b4d1e064d84b3b0931f2d_web-and-prod-card.avif` },
  { title:"Graphic design\n& marketing material", type:"image", tags:["Social media creative","Banners","Pitch decks & presentation","Packaging","Merch design","Book & eBook","Email design","Any graphic material"], img:`${CDN}/698b4e0e0361d2746acc91ba_Graphic%20design%20card.avif` },
  { title:"Brand identity", type:"image", tags:["Logo design","Brand guidelines"], img:`${CDN}/699ee05f16453d7ac44ef111_brand-hero01.avif` },
  { title:"Marketing\nand content creation", type:"list", items:["Social media marketing","Copywriting","Content marketing","PPC & paid ads","Analytics & strategy","SEO","And more"] },
  { title:"No-code\ndevelopment", type:"image", tags:["Webflow","Framer","And more"], img:`${CDN}/698b5725e5db271f48eb9d34_No-code%20development%20card.avif` },
  { title:"Custom illustrations", type:"image", tags:["2D/3D illustrations","Digital art"], img:`${CDN}/699ee0b2099e68d5257c7264_ill-hero-1.avif` },
];

const BOTTLENECK_ITEMS = [
  { gray:"Forget about ", bold:"unreliable freelancers" },
  { gray:"No more ", bold:"contractors ghosting before launch" },
  { gray:"Stop ", bold:"juggling scattered design and dev" },
  { gray:"Say bye to ", bold:"payroll and contracts" },
  { gray:"Skip ", bold:"one month onboarding with agencies" },
  { gray:"Done with ", bold:"wasting weeks filtering CVs" },
];

const TALENTS = [
  { name:"Hamza", role:"Product designer", years:"7+", tags:["FinTech","AI","Healthcare","Crypto"], workedWith:"Coca-Cola", workedLogo:`${CDN}/68c2a33d71ce477bc4cfaf71_coca-cola-darker.svg`, photo:`${CDN}/68c2a33d71ce477bc4cfaa65_hamza-slide-photo.avif` },
  { name:"Juana", role:"Illustrator", years:"11+", tags:["E-commerce","Gaming","NFT"], workedWith:"Disney", workedLogo:`${CDN}/68c2a33d71ce477bc4cfaa5f_disney-darker.svg`, photo:`${CDN}/68c2a33d71ce477bc4cfaa5e_Juana%20Slide%20Photo.avif` },
  { name:"João", role:"Brand designer", years:"15+", tags:["SaaS","EdTech","Fintech","AI"], workedWith:"PandaDoc", workedLogo:`${CDN}/68e520ef701bab4b83eb367f_panda-doc-card-logo.svg`, photo:`${CDN}/68c2a33d71ce477bc4cfaa61_Joao%20Slide%20Photo.avif` },
  { name:"Federico", role:"Graphic artist", years:"15+", tags:["Gaming","AI","Fashion","Advertising"], workedWith:"MTV", workedLogo:`${CDN}/68c2a33d71ce477bc4cfaf73_mtv-dark-logo.png`, photo:`${CDN}/68c2a33d71ce477bc4cfaf72_Federico%20photo.avif` },
  { name:"Iury", role:"Full-Stack engineer", years:"8+", tags:["HealthTech","Blockchain","Financial"], workedWith:"VEED", workedLogo:`${CDN}/68c2a33d71ce477bc4cfaa66_VEED-logo.avif`, photo:`${CDN}/68c2a33d71ce477bc4cfaa64_Iuri%20Slide%20Photo.avif` },
  { name:"Juanjo", role:"Brand designer", years:"10+", tags:["HealthTech","Real Estate","FinTech"], workedWith:"Udemy", workedLogo:`${CDN}/68c2a33d71ce477bc4cfaa67_udemy_logo-darker.svg`, photo:`${CDN}/68c2a33d71ce477bc4cfaa63_Juanjo%20Slide%20Photo.avif` },
];

const HOW_STEPS = [
  { num:"01", title:"Describe your task", desc:"Tell us what you need — share files, references, and goals. No long briefs required.", img:"https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home%20page%20images/How%20it%20work%20img.jpg" },
  { num:"02", title:"Get matched in 24h", desc:"Our algorithm matches you with the right vetted talent based on your project type, industry, and style." },
  { num:"03", title:"Review daily updates", desc:"Your talent sends updates every day. Give feedback, request revisions, and stay in control." },
  { num:"04", title:"Approve & ship", desc:"When you're happy, approve the task and move on to the next one. Unlimited revisions included." },
];

const VETTING_STEPS = [
  { step:"Step 1", title:"Portfolio & interview", pct:"55", desc:"go through our manual check of experience, English, and portfolio" },
  { step:"Step 2", title:"Awesomic test task", pct:"21", desc:"pass a multi-step task to prove real skills & communication" },
  { step:"Step 3", title:"Community review", pct:"5.3", desc:"get approved by senior talents through blind task evaluation" },
  { step:"Step 4", title:"Final leadership approval", pct:"0.82", desc:"align with Awesomic's values and get fully onboarded" },
];

const WHY_TAGS_ROWS = [
  { dir:"normal", tags:["Design","UI/UX","Motion","Brand identity","Product design","Presentation","Graphic","Illustration","Packaging & merch"] },
  { dir:"reverse", tags:["Analytics & strategy","Marketing","Copywriting","Content marketing","SEO","PPC & paid ads","Social media marketing","Email marketing"] },
  { dir:"normal", tags:["QA engineering","Software development","Frontend","Full stack","Backend","Web development","Mobile app","AI development"] },
  { dir:"reverse", tags:["Platform connections","No-code","Webflow","Framer","Airtable","Zapier","Make","CMS integration"] },
];

const FAQ_ITEMS = [
  { q:"What is Awesomic?", a:"Awesomic is a revolutionary app that matches companies with vetted professionals across 30+ skill sets, from design and development to marketing and product. Based in San Francisco with a global core team, we offer a faster and more flexible alternative to traditional hiring through a subscription-based model." },
  { q:"How does Awesomic work?", a:"We function as a subscription-based service that matches you to top-tier, vetted talent. Submit a project in just a few clicks and start receiving deliverables in as little as 24 hours. Scale your Awesomic plan up or down as your business needs change." },
  { q:"How many revisions can I request for a project?", a:"Every Awesomic subscription comes with unlimited revisions. You receive daily progress updates via the app, and you can provide feedback or request iterations as needed. If your project requires a different approach, you can request a talent rematch at any time, at no extra cost." },
  { q:"What's a talent marketplace?", a:"A talent marketplace is a platform that utilizes data and intelligent matching algorithms to connect professionals with projects based on their skills, experience, and availability. Awesomic applies this model at scale, matching vetted global talent to your most critical business needs." },
  { q:"Why choose Awesomic over traditional hiring or freelancing platforms?", a:"Hiring is time-consuming, expensive, and risky. Awesomic eliminates that problem. We rigorously vet all talent for technical ability, communication, and soft skills, ensuring only senior-level professionals work on your projects." },
  { q:"Is Awesomic just a design subscription service?", a:"No, Awesomic goes beyond design. While many clients utilize us for branding, UI/UX design, or motion graphics, we also provide vetted talent in no-code web development, product design, marketing, and more." },
  { q:"How does communication with Awesomic work?", a:"You can talk directly with your matched talent via the Awesomic app, connect via Slack, email, or schedule video calls. No matter the plan, you'll receive daily updates in the app for every active task." },
];

const FOOTER_COLS = [
  { title:"Services", links:["Design services","Video production","Web design","Branding","Graphic design","No-code development","Marketing services","Software development","Merch"] },
  { title:"Solutions", links:["Webflow","Framer","WordPress","Mid-market","Agencies"] },
  { title:"Company", links:["About us","Pricing","Case studies","Gallery","Video launches","Wall of Love","Blog","Careers"] },
  { title:"Compare", links:["vs. Agencies","vs. Freelancers","vs. In-house"] },
];

/* ─── FAQ Accordion ─── */
function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`aw-faq-item ${open ? 'aw-faq-item--open' : ''}`}>
      <button className="aw-faq-item__q" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <img src={A.chevron} alt="" className="aw-faq-chevron" />
      </button>
      <div className="aw-faq-item__a"><p>{item.a}</p></div>
    </div>
  );
}

/* ─── Main Page Component ─── */
export default function AwesomicClone() {
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
      <div className="aw">

        {/* ═══ 1. NAVBAR ═══ */}
        <nav className="aw-nav">
          <a href="#" className="aw-nav__logo"><img src={A.logo} alt="Awesomic" /></a>
          <div className="aw-nav__links">
            <a href="#">Our work</a>
            <a href="#">Pricing</a>
            <a href="#">Services</a>
            <a href="#">Browse talents</a>
            <a href="#">About us</a>
            <a href="#">Love</a>
            <a href="#">Apply</a>
          </div>
          <div className="aw-nav__right">
            <a href="#" className="aw-btn-outline"><span>Log in</span><img src={A.loginB} alt="" /></a>
            <a href="#" className="aw-btn-dark"><span>Book demo</span><img src={A.faces} alt="" /></a>
          </div>
        </nav>

        {/* ═══ 2. ANNOUNCEMENT BANNER ═══ */}
        <div className="aw-banner">
          <span>🔥&nbsp; How top startups launch with video: read the launch video report</span>
          <a href="#" className="aw-btn-outline aw-btn--sm"><span>Get the free report</span></a>
        </div>

        {/* ═══ 3. HERO ═══ */}
        <section className="aw-hero">
          <div className="aw-hero__left">
            <div className="aw-hero__tags">
              <span className="aw-tag"><img src={A.ycBadge} alt="YC" />Backed by Y Combinator</span>
              <span className="aw-tag">
                <img src={A.google} alt="" style={{height:16}} /> 4.9
                <img src={A.trustpilot} alt="" style={{height:16, marginLeft:8}} /> 4.9
              </span>
            </div>
            <h1 className="aw-hero__h1">
              All your{' '}
              <span className="aw-rotate">
                <span className="aw-rotate__inner">
                  <span>design</span><span>marketing</span><span>product</span><span>video</span><span>design</span>
                </span>
              </span>
            </h1>
            <div className="aw-hero__h1-sub">tasks done for one fixed monthly fee</div>
          </div>
          <div className="aw-hero__right">
            <p className="aw-hero__text">Stop searching for pro designers, developers, and marketers. Start getting design done. Match with top-tier talent and get your projects delivered.</p>
            <div className="aw-hero__form">
              <input className="aw-input" type="email" placeholder="Email address" />
              <a href="#" className="aw-btn-dark aw-btn--lg"><span>Book demo</span><img src={A.loginW} alt="" /></a>
            </div>
            <div className="aw-hero__stats">
              <div className="aw-stat"><div className="aw-stat__num">20 000+</div><div className="aw-stat__label">completed<br/>projects</div></div>
              <div className="aw-stat"><div className="aw-stat__num">4 000+</div><div className="aw-stat__label">customers<br/>worldwide</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 4. LOGO CAROUSEL ═══ */}
        <div className="aw-logos"><div className="aw-logos__track">
          {[...LOGOS,...LOGOS,...LOGOS].map((l,i) => <img key={i} src={l.src} alt={l.alt} />)}
        </div></div>

        {/* ═══ 5. SERVICE CARDS SLIDER ═══ */}
        <div className="aw-services" ref={servicesRef}>
          <div className="aw-services__grid">
            {SERVICE_CARDS.map((c, i) => (
              <div key={i} className={`aw-scard ${c.type==='image' ? 'aw-scard--img' : 'aw-scard--light'}`}>
                {c.type==='image' && c.img && <img className="aw-scard__bg" src={c.img} alt={c.title} />}
                <div className="aw-scard__content">
                  <div className="aw-scard__title" style={{whiteSpace:'pre-line'}}>{c.title}</div>
                  {c.type==='list' && c.items && <ul className="aw-scard__list">{c.items.map((it,j) => <li key={j}><img src={A.check} alt="" />{it}</li>)}</ul>}
                  {c.tags && <div className="aw-scard__tags">{c.tags.map((t,j) => <span key={j} className="aw-cattag">{t}</span>)}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ 6. BOTTLENECK SECTION (Dark) ═══ */}
        <section className="aw-bottleneck">
          <div className="aw-bottleneck__inner">
            <div className="aw-bottleneck__left">
              <h2 className="aw-h3">We solve the bottlenecks that kill your speed</h2>
            </div>
            <div className="aw-bottleneck__right">
              {BOTTLENECK_ITEMS.map((b, i) => (
                <div key={i} className="aw-bn-item">
                  <img src={A.arrow} alt="" />
                  <span><span className="aw-text-muted">{b.gray}</span>{b.bold}</span>
                </div>
              ))}
            </div>
            <div className="aw-bottleneck__review">
              <div className="aw-review-card">
                <div className="aw-review-card__header">
                  <img src={`${CDN}/68c2a33d71ce477bc4cfaffe_Jason%20Cornelius.avif`} alt="Jason Cornelius" className="aw-avatar" />
                  <div><div className="aw-review-card__name">Jason Cornelius</div><div className="aw-review-card__role">Co-Founder at Perseus Defense</div></div>
                </div>
                <p className="aw-review-card__text">Game-Changer for Our Team — Awesomic Is Truly Awesome. Working with Awesomic has been one of the best decisions we've made as a YC startup.</p>
              </div>
            </div>
            <div className="aw-bottleneck__nums">
              <div className="aw-bn-stat"><div className="aw-bn-stat__num">70%</div><div className="aw-bn-stat__desc">lower cost vs freelancers, agencies, and in-house teams</div></div>
              <div className="aw-bn-stat"><div className="aw-bn-stat__num">40%</div><div className="aw-bn-stat__desc">faster turnaround on every update</div></div>
              <div className="aw-bn-stat"><div className="aw-bn-stat__num">60%</div><div className="aw-bn-stat__desc">fewer revisions — powered by AI and senior-level talent</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 7. TALENT SLIDER ═══ */}
        <section className="aw-section aw-section--white">
          <div className="aw-section__header-row">
            <h2 className="aw-h4">Why hire if you can subscribe to 200+ vetted talents?</h2>
            <a href="#" className="aw-btn-dark"><span>Browse talents</span><img src={A.loginW} alt="" /></a>
          </div>
          <div className="aw-talents">
            <div className="aw-talents__grid">
              {TALENTS.map((t, i) => (
                <div key={i} className="aw-talent-card">
                  <div className="aw-talent-card__photo"><img src={t.photo} alt={t.name} /></div>
                  <div className="aw-talent-card__info">
                    <div className="aw-talent-card__name-row">
                      <span className="aw-text-sm">{t.name}</span>
                      <div><span className="aw-talent-card__role">{t.role}</span><span className="aw-text-sm">, {t.years} years</span></div>
                    </div>
                    <div className="aw-talent-card__tags">{t.tags.map((tag,j) => <span key={j} className="aw-cattag aw-cattag--sm">{tag}</span>)}</div>
                    <div className="aw-talent-card__worked">
                      <span className="aw-text-sm aw-text-muted">Worked with</span>
                      <img src={t.workedLogo} alt={t.workedWith} className="aw-talent-card__client-logo" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 8. WHY TEAMS CHOOSE AWESOMIC (Bento Grid) ═══ */}
        <section className="aw-section aw-section--white">
          <h2 className="aw-h3 aw-text-center">Why teams choose Awesomic</h2>
          <div className="aw-why-grid">
            {/* Row 1 */}
            <div className="aw-why-card aw-why-card--customers">
              <div className="aw-why-card__row"><div><div className="aw-h4">4 000+</div><div className="aw-h5">Customers</div></div><img src={A.customersIcon} alt="" width={80} /></div>
              <div className="aw-why-card__logos"><div className="aw-logos aw-logos--sm"><div className="aw-logos__track">{[...LOGOS,...LOGOS].map((l,i) => <img key={i} src={l.src} alt={l.alt} />)}</div></div></div>
            </div>
            <div className="aw-why-card aw-why-card--vetted">
              <div className="aw-h5 aw-text-center">Vetted<br/>0.82% talent</div>
            </div>
            <div className="aw-why-card aw-why-card--match">
              <div className="aw-h5 aw-text-center aw-text-white">Match with talents within 24 hours</div>
            </div>

            {/* Row 2 */}
            <div className="aw-why-card aw-why-card--review">
              <div className="aw-review-card aw-review-card--sm">
                <div className="aw-review-card__header">
                  <img src={`${CDN}/697b77c8acf436529854bf2e_Marty%20Kausas%20photo.png`} alt="Marty Kausas" className="aw-avatar" />
                  <div><div className="aw-review-card__name">Marty Kausas</div><div className="aw-review-card__role">Founder of Pylon</div></div>
                </div>
                <div className="aw-review-card__video-placeholder">
                  <img src={`${CDN}/697b77c8b0bf40e24b72a6e6_Marty%20Kausas%20preview.avif`} alt="Video preview" className="aw-review-card__preview" />
                  <div className="aw-play-btn">▶</div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="aw-why-card aw-why-card--projects">
              <div className="aw-why-card__row"><div><div className="aw-h4">20,000+</div><div className="aw-h5">Projects completed</div></div><img src={A.projectsIcon} alt="" width={80} /></div>
            </div>
            <div className="aw-why-card aw-why-card--skills">
              <div className="aw-tag-marquee">{WHY_TAGS_ROWS.map((row,i) => (
                <div key={i} className={`aw-tag-row ${row.dir==='reverse' ? 'aw-tag-row--reverse' : ''}`}>
                  <div className="aw-tag-row__inner">{[...row.tags,...row.tags].map((t,j) => <span key={j} className={`aw-cattag ${j%5===0?'aw-cattag--featured':''}`}>{t}</span>)}</div>
                </div>
              ))}</div>
              <div className="aw-why-card__row" style={{marginTop:16}}><div><div className="aw-h4">30+</div><div className="aw-h5">Skill sets</div></div><img src={A.skillSetIcon} alt="" width={80} /></div>
            </div>
            <div className="aw-why-card aw-why-card--fee">
              <div className="aw-h5 aw-text-center">Flat monthly fee</div>
              <span className="aw-cattag" style={{marginTop:12,background:'#fff'}}>from $2995/month</span>
              <img src={A.rockLogo} alt="" className="aw-why-card__rock" />
            </div>
          </div>
        </section>

        {/* ═══ 9. HOW IT WORKS (Tabs) ═══ */}
        <HowItWorks />

        {/* ═══ 10. ONLY THE TOP 0.82% (Vetting Funnel) ═══ */}
        <section className="aw-section aw-section--gray">
          <div className="aw-section__header aw-text-center">
            <h2 className="aw-h3">Only the top 0.82% get approved</h2>
            <p className="aw-subtitle">Get matched to the best-vetted professionals</p>
          </div>
          <div className="aw-vetting">
            {VETTING_STEPS.map((s, i) => (
              <div key={i} className={`aw-vet-step ${i===0?'aw-vet-step--first':''} ${i===3?'aw-vet-step--last':''}`}>
                <div className="aw-vet-step__top">
                  <span className="aw-cattag">{s.step}</span>
                  <div className="aw-h5" style={{marginTop:12}}>{s.title}</div>
                </div>
                <div className="aw-vet-step__bottom">
                  {i===3 && <img src={A.step4Img} alt="" width={112} style={{marginBottom:24}} />}
                  <div className="aw-vet-step__pct">{s.pct}%</div>
                  <p className="aw-text-sm">{s.desc}</p>
                  {i===3 && <a href="#" className="aw-btn-dark aw-btn--full" style={{marginTop:24}}><span>Get match</span><img src={A.openLink} alt="" /></a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 11. CTA SECTION ═══ */}
        <section className="aw-cta-section">
          <div className="aw-cta-section__inner">
            <h2 className="aw-h2 aw-text-center">You are one call away from a top creative team</h2>
            <div className="aw-hero__form" style={{maxWidth:520, margin:'40px auto 0'}}>
              <input className="aw-input" type="email" placeholder="Email address" />
              <a href="#" className="aw-btn-dark aw-btn--lg"><span>Book a call</span><img src={A.loginW} alt="" /></a>
            </div>
          </div>
          <img src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/BG%20Images/white%20bg.jpg" alt="" className="aw-cta-section__bg" />
        </section>

        {/* ═══ 12. FAQ ═══ */}
        <section className="aw-section aw-section--white">
          <div className="aw-faq-layout">
            <div className="aw-faq-left">
              <h2 className="aw-h3">FAQ</h2>
              <p className="aw-subtitle" style={{marginTop:24}}>Ask AI to summarize Awesomic</p>
              <div className="aw-faq-still">
                <div className="aw-h5">Still have questions?</div>
                <p className="aw-text-sm" style={{margin:'8px 0 16px'}}>Let's talk — book a 15-minute intro call with our team</p>
                <a href="#" className="aw-btn-dark"><span>Book a call</span><img src={A.faces} alt="" /></a>
              </div>
            </div>
            <div className="aw-faq-right">
              {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} />)}
            </div>
          </div>
        </section>

        {/* ═══ 13. FOOTER ═══ */}
        <footer className="aw-footer">
          <div className="aw-footer__inner">
            <div className="aw-footer__top">
              <div className="aw-footer__brand">
                <img src={A.logo} alt="Awesomic" style={{height:28, filter:'brightness(0) invert(1)'}} />
                <p className="aw-text-sm aw-text-muted" style={{marginTop:16, maxWidth:280}}>The talent marketplace that matches you with top design and development professionals in 24 hours.</p>
                <div className="aw-footer__socials" style={{marginTop:16}}>
                  {['LinkedIn','X','Instagram','Dribbble','YouTube'].map(s => <span key={s} className="aw-footer-social">{s[0]}</span>)}
                </div>
              </div>
              {FOOTER_COLS.map((col, i) => (
                <div key={i} className="aw-footer__col">
                  <div className="aw-footer__col-title">{col.title}</div>
                  {col.links.map((link, j) => <a key={j} href="#">{link}</a>)}
                </div>
              ))}
            </div>
            <div className="aw-footer__bottom">
              <span>© 2026 Awesomic Inc. All rights reserved.</span>
              <div className="aw-footer__bottom-links">
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
    <section className="aw-section aw-section--white" id="how-it-works">
      <div className="aw-section__header aw-text-center">
        <h2 className="aw-h3">How it works</h2>
      </div>
      <div className="aw-how">
        {HOW_STEPS.map((s, i) => (
          <button key={i} className={`aw-how-tab ${active===i ? 'aw-how-tab--active' : ''}`} onClick={() => setActive(i)}>
            <div className="aw-how-tab__num">{s.num}</div>
            <div className="aw-how-tab__title">{s.title}</div>
            <div className="aw-how-tab__desc">{s.desc}</div>
            <div className="aw-how-tab__progress"><div className="aw-how-tab__bar" style={{ animationPlayState: active===i ? 'running' : 'paused' }} /></div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CSS — all scoped under .aw
   ═══════════════════════════════════════════════════════════════ */
const PAGE_CSS = `
/* ── Reset ── */
.aw,.aw *,.aw *::before,.aw *::after{box-sizing:border-box;margin:0;padding:0}
.aw{font-family:Cosmic,ui-sans-serif,system-ui,sans-serif;color:#09090b;background:#f4f4f5;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.aw a{color:inherit;text-decoration:none}
.aw img{max-width:100%;display:block}
.aw button{cursor:pointer;border:none;background:none;font-family:inherit}
.aw ul{list-style:none}

/* ── Utility ── */
.aw-text-center{text-align:center}
.aw-text-white{color:#fff}
.aw-text-muted{color:#71717a}
.aw-text-sm{font-size:14px;font-weight:400;line-height:1.56}
.aw-h2{font-size:56px;font-weight:600;line-height:1.12}
.aw-h3{font-size:40px;font-weight:700;line-height:1.28}
.aw-h4{font-size:32px;font-weight:700;line-height:1.28}
.aw-h5{font-size:20px;font-weight:600;line-height:1.56}
.aw-subtitle{font-size:16px;font-weight:400;line-height:1.5;color:#52525b;margin-top:20px}

/* ── Buttons ── */
.aw-btn-dark{display:inline-flex;align-items:center;gap:8px;background:#09090b;color:#fff;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:10px 20px;border-radius:14px;border:1.5px solid #2c2e34;box-shadow:rgba(255,255,255,.5) 0 .5px 0 0 inset,rgba(117,123,133,.4) 0 9px 14px -5px inset,rgb(44,46,52) 0 0 0 1.5px,rgba(0,0,0,.14) 0 4px 6px 0;transition:transform .2s;white-space:nowrap;cursor:pointer}
.aw-btn-dark:hover{transform:translateY(-1px)}
.aw-btn-dark img{height:20px}
.aw-btn-dark.aw-btn--lg{padding:12px 24px;font-size:15px}
.aw-btn-dark.aw-btn--full{width:100%;justify-content:center}
.aw-btn-outline{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#3f3f46;font-family:Cosmic,sans-serif;font-size:14px;font-weight:500;padding:8px 16px;border-radius:10000px;border:1px solid #ececee;cursor:pointer;transition:background .2s;white-space:nowrap}
.aw-btn-outline:hover{background:#fafafa}
.aw-btn-outline img{height:16px}
.aw-btn--sm{padding:6px 14px;font-size:13px}
.aw-input{flex:1;min-width:0;background:#fff;border:1px solid transparent;border-radius:14px;padding:12px 16px;font-family:Cosmic,sans-serif;font-size:14px;color:#09090b;outline:none;box-shadow:rgb(228,228,231) 0 1px 0 0 inset}
.aw-input::placeholder{color:#a1a1aa}
.aw-input:focus{border-color:#ececee}

/* ── Tags ── */
.aw-tag{display:inline-flex;align-items:center;gap:6px;background:#fafafa;border:1px solid #ececee;border-radius:12px;padding:4px 10px;font-size:13px;font-weight:500;color:#18181b}
.aw-tag img{height:16px}
.aw-cattag{display:inline-block;border:1px solid #ececee;border-radius:12px;padding:3px 8px;font-size:12px;font-weight:400;color:#18181b;white-space:nowrap}
.aw-cattag--sm{font-size:11px;padding:2px 6px}
.aw-cattag--featured{background:#3f3f46;color:#fafafa;border-color:transparent}
.aw-scard--img .aw-cattag{border-color:rgba(255,255,255,.3);color:#fff}

/* ── Navbar ── */
.aw-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:64px}
.aw-nav__logo img{height:28px}
.aw-nav__links{display:flex;gap:24px;font-size:14px;font-weight:500;color:#18181b}
.aw-nav__right{display:flex;gap:12px;align-items:center}

/* ── Banner ── */
.aw-banner{margin-top:64px;background:#09090b;color:#fff;text-align:center;padding:14px 20px;font-size:14px;font-weight:500;display:flex;justify-content:center;align-items:center;gap:12px;flex-wrap:wrap}

/* ── Hero ── */
.aw-hero{max-width:1280px;margin:0 auto;padding:96px 32px 0;display:grid;grid-template-columns:1.3fr 1fr;gap:48px;align-items:start}
.aw-hero__tags{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.aw-hero__h1{font-size:64px;font-weight:600;line-height:1.12;letter-spacing:-.02em}
.aw-hero__h1-sub{font-size:64px;font-weight:600;line-height:1.12;margin-top:-4px}
.aw-rotate{display:inline-block;overflow:hidden;height:1.15em;vertical-align:bottom;position:relative}
.aw-rotate__inner{display:inline-block;animation:aw-scroll 10s cubic-bezier(.175,.885,.32,1.275) infinite}
.aw-rotate__inner span{display:block;color:#a1a1aa;margin-top:8px}
@keyframes aw-scroll{0%,20%{transform:translateY(-85%)}25%,45%{transform:translateY(-65%)}50%,70%{transform:translateY(-45%)}75%,95%{transform:translateY(-25%)}100%{transform:translateY(-5%)}}
.aw-hero__right{padding-top:24px}
.aw-hero__text{font-size:15px;font-weight:400;line-height:1.56;color:#52525b;margin-bottom:48px}
.aw-hero__form{display:flex;gap:8px}
.aw-hero__stats{display:flex;gap:40px;margin-top:48px}
.aw-stat__num{font-size:32px;font-weight:600;line-height:1.2}
.aw-stat__label{font-size:13px;font-weight:500;color:#52525b;line-height:1.35}

/* ── Logo Carousel ── */
.aw-logos{padding:32px 0;overflow:hidden;position:relative}
.aw-logos--sm{padding:12px 0}
.aw-logos__track{display:flex;align-items:center;gap:48px;animation:aw-logo-scroll 25s linear infinite;width:max-content}
.aw-logos__track img{height:24px;opacity:.5;filter:grayscale(1);transition:all .3s}
.aw-logos__track img:hover{opacity:1;filter:none}
@keyframes aw-logo-scroll{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}

/* ── Service Cards ── */
.aw-services{max-width:1344px;margin:0 auto;padding:0 32px 0;overflow-x:auto;scrollbar-width:none}
.aw-services::-webkit-scrollbar{display:none}
.aw-services__grid{display:flex;gap:12px;padding-bottom:12px}
.aw-scard{flex-shrink:0;width:260px;min-height:340px;border-radius:36px;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding:24px}
.aw-scard--light{background:#fff;border:1px solid #ececee}
.aw-scard--img{background:#18181b;color:#fff}
.aw-scard__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.aw-scard__content{position:relative;z-index:1}
.aw-scard__title{font-size:20px;font-weight:600;line-height:1.56;margin-bottom:8px}
.aw-scard__tags{display:flex;flex-wrap:wrap;gap:4px}
.aw-scard__list{padding:0}
.aw-scard__list li{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:400;line-height:1.45;padding:4px 0}
.aw-scard__list img{width:20px;height:20px;flex-shrink:0}

/* ── Section ── */
.aw-section{max-width:1344px;margin:0 auto;padding:80px 32px}
.aw-section--white{background:#fff;border-radius:36px 36px 0 0;position:relative}
.aw-section--gray{background:#f4f4f5;border-radius:36px 36px 0 0;position:relative}
.aw-section__header{margin-bottom:48px}
.aw-section__header-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:16px}

/* ── Bottleneck ── */
.aw-bottleneck{background:#f4f4f5;border-radius:36px;overflow:hidden;margin-top:80px}
.aw-bottleneck__inner{max-width:1280px;margin:0 auto;padding:80px 32px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.aw-bottleneck__left{grid-column:1;grid-row:1}
.aw-bottleneck__right{grid-column:2;grid-row:1}
.aw-bottleneck__review{grid-column:2;grid-row:2}
.aw-bottleneck__nums{grid-column:1/-1;display:flex;gap:40px;padding-top:40px;border-top:1px solid #ececee;margin-top:16px}
.aw-bn-item{display:flex;align-items:center;gap:12px;font-size:20px;font-weight:600;line-height:1.56;padding:8px 0;border-bottom:1px solid #ececee}
.aw-bn-item:last-child{border-bottom:none}
.aw-bn-item img{width:24px;height:24px;flex-shrink:0}
.aw-bn-stat__num{font-size:40px;font-weight:700;line-height:1.28}
.aw-bn-stat__desc{font-size:15px;font-weight:400;line-height:1.45;color:#52525b;margin-top:8px}
.aw-review-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px}
.aw-review-card--sm .aw-review-card__preview{width:100%;border-radius:20px;margin-top:16px}
.aw-review-card__header{display:flex;gap:12px;align-items:center;margin-bottom:16px}
.aw-review-card__name{font-size:20px;font-weight:700;line-height:1.48}
.aw-review-card__role{font-size:14px;font-weight:400;color:#52525b}
.aw-review-card__text{font-size:16px;font-weight:400;line-height:1.5}
.aw-review-card__video-placeholder{position:relative}
.aw-avatar{width:48px;height:48px;border-radius:48px;object-fit:cover}
.aw-play-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;border-radius:48px;background:rgba(0,0,0,.6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}

/* ── Talent Cards ── */
.aw-talents{overflow-x:auto;scrollbar-width:none;margin-top:0}
.aw-talents::-webkit-scrollbar{display:none}
.aw-talents__grid{display:flex;gap:12px}
.aw-talent-card{flex-shrink:0;width:240px;border-radius:36px;overflow:hidden;border:1px solid #ececee;background:#fff}
.aw-talent-card__photo{height:240px;overflow:hidden}
.aw-talent-card__photo img{width:100%;height:100%;object-fit:cover}
.aw-talent-card__info{padding:16px}
.aw-talent-card__name-row{margin-bottom:8px}
.aw-talent-card__role{font-size:20px;font-weight:600;line-height:1.56}
.aw-talent-card__tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px}
.aw-talent-card__worked{display:flex;flex-direction:column;gap:8px}
.aw-talent-card__client-logo{height:20px;width:auto}

/* ── Why Grid ── */
.aw-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:48px}
.aw-why-card{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px}
.aw-why-card__row{display:flex;align-items:center;justify-content:space-between;width:100%}
.aw-why-card--customers{grid-column:1/3}
.aw-why-card--customers .aw-why-card__logos{width:100%;margin-top:16px;overflow:hidden}
.aw-why-card--vetted{background:#fafafa}
.aw-why-card--match{background:#18181b}
.aw-why-card--review{grid-column:1/4}
.aw-why-card--projects{}
.aw-why-card--skills{grid-column:2/3;overflow:hidden}
.aw-why-card--fee{position:relative;overflow:hidden}
.aw-why-card__rock{position:absolute;bottom:-20px;right:-10px;width:190px;opacity:.9}

/* ── Tag Marquee ── */
.aw-tag-marquee{width:100%;overflow:hidden}
.aw-tag-row{overflow:hidden;padding:3px 0}
.aw-tag-row__inner{display:flex;gap:6px;animation:aw-tag-scroll 40s linear infinite;width:max-content}
.aw-tag-row--reverse .aw-tag-row__inner{animation-direction:reverse}
@keyframes aw-tag-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* ── How It Works Tabs ── */
.aw-how{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.aw-how-tab{background:#fff;border:1px solid #ececee;border-radius:36px;padding:24px;text-align:left;transition:all .3s;cursor:pointer}
.aw-how-tab--active{background:#fff;border-color:#d4d4d8;box-shadow:0 4px 12px rgba(0,0,0,.04)}
.aw-how-tab__num{font-size:14px;font-weight:600;color:#a1a1aa;margin-bottom:8px}
.aw-how-tab__title{font-size:20px;font-weight:600;line-height:1.56;margin-bottom:8px}
.aw-how-tab__desc{font-size:14px;font-weight:400;line-height:1.45;color:#52525b;max-height:0;overflow:hidden;transition:max-height .35s ease}
.aw-how-tab--active .aw-how-tab__desc{max-height:120px}
.aw-how-tab__progress{height:3px;background:#ececee;border-radius:3px;margin-top:16px;overflow:hidden}
.aw-how-tab__bar{height:100%;width:0;background:#09090b;border-radius:3px;animation:aw-progress 5s ease-in-out forwards;animation-play-state:paused}
.aw-how-tab--active .aw-how-tab__bar{animation-play-state:running}
@keyframes aw-progress{0%{width:0}100%{width:100%}}

/* ── Vetting Steps ── */
.aw-vetting{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:48px}
.aw-vet-step{border:1px solid #ececee;border-right:none;padding:24px;display:flex;flex-direction:column;background:#fff}
.aw-vet-step--first{border-radius:36px 0 0 36px;background:#18181b;color:#fff}
.aw-vet-step--first .aw-cattag{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);color:#fff}
.aw-vet-step--first .aw-vet-step__pct{color:#fff}
.aw-vet-step--last{border-radius:0 36px 36px 0;border-right:1px solid #ececee}
.aw-vet-step__top{margin-bottom:auto}
.aw-vet-step__bottom{margin-top:32px}
.aw-vet-step__pct{font-size:40px;font-weight:700;line-height:1.28;margin-bottom:8px}

/* ── CTA ── */
.aw-cta-section{position:relative;padding:144px 32px 80px;max-width:1344px;margin:0 auto;overflow:hidden;border-radius:36px}
.aw-cta-section__inner{position:relative;z-index:1}
.aw-cta-section__bg{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:1400px;max-width:none;pointer-events:none;z-index:0}

/* ── FAQ ── */
.aw-faq-layout{display:grid;grid-template-columns:1fr 1.5fr;gap:64px}
.aw-faq-left{position:sticky;top:100px;align-self:start}
.aw-faq-still{margin-top:40px;padding:24px;background:#fafafa;border:1px solid #ececee;border-radius:24px}
.aw-faq-item{border-bottom:1px solid #ececee}
.aw-faq-item__q{display:flex;align-items:center;justify-content:space-between;padding:20px 0;font-size:20px;font-weight:600;color:#09090b;width:100%;text-align:left;gap:16px}
.aw-faq-chevron{width:20px;height:20px;flex-shrink:0;transition:transform .3s}
.aw-faq-item--open .aw-faq-chevron{transform:rotate(180deg)}
.aw-faq-item__a{overflow:hidden;max-height:0;transition:max-height .35s ease,padding .35s ease}
.aw-faq-item--open .aw-faq-item__a{max-height:400px;padding-bottom:20px}
.aw-faq-item__a p{font-size:15px;font-weight:400;line-height:1.56;color:#52525b}

/* ── Footer ── */
.aw-footer{background:#09090b;padding:80px 32px 32px;margin-top:0;border-radius:36px 36px 0 0}
.aw-footer__inner{max-width:1344px;margin:0 auto}
.aw-footer__top{display:grid;grid-template-columns:2fr repeat(4,1fr);gap:32px;margin-bottom:64px}
.aw-footer__col-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:12px}
.aw-footer__col a{display:block;font-size:14px;font-weight:400;color:#a1a1aa;padding:3px 0;transition:color .2s}
.aw-footer__col a:hover{color:#fff}
.aw-footer__socials{display:flex;gap:8px}
.aw-footer-social{width:36px;height:36px;border-radius:36px;background:#27272a;color:#a1a1aa;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}
.aw-footer__bottom{border-top:1px solid #27272a;padding-top:24px;display:flex;justify-content:space-between;font-size:13px;color:#71717a;flex-wrap:wrap;gap:12px}
.aw-footer__bottom-links{display:flex;gap:24px}
.aw-footer__bottom a{color:#71717a;transition:color .2s}
.aw-footer__bottom a:hover{color:#fff}

/* ── Responsive ── */
@media(max-width:991px){
  .aw-nav__links{display:none}
  .aw-hero{grid-template-columns:1fr;padding-top:64px}
  .aw-hero__h1,.aw-hero__h1-sub{font-size:40px}
  .aw-h2{font-size:40px}
  .aw-h3{font-size:32px}
  .aw-bottleneck__inner{grid-template-columns:1fr}
  .aw-how{grid-template-columns:1fr 1fr}
  .aw-vetting{grid-template-columns:1fr 1fr}
  .aw-vet-step--first{border-radius:36px 36px 0 0}
  .aw-vet-step--last{border-radius:0 0 36px 36px}
  .aw-why-grid{grid-template-columns:1fr 1fr}
  .aw-why-card--customers{grid-column:1/3}
  .aw-why-card--review{grid-column:1/3}
  .aw-faq-layout{grid-template-columns:1fr}
  .aw-faq-left{position:static}
  .aw-footer__top{grid-template-columns:1fr 1fr}
}
@media(max-width:767px){
  .aw-hero{padding:48px 20px 0}
  .aw-hero__h1,.aw-hero__h1-sub{font-size:32px}
  .aw-hero__form{flex-direction:column}
  .aw-section{padding:48px 20px}
  .aw-services{padding:0 20px}
  .aw-bottleneck__inner{padding:48px 20px}
  .aw-how{grid-template-columns:1fr}
  .aw-vetting{grid-template-columns:1fr}
  .aw-vet-step{border-right:1px solid #ececee}
  .aw-vet-step--first{border-radius:36px 36px 0 0}
  .aw-vet-step--last{border-radius:0 0 36px 36px}
  .aw-why-grid{grid-template-columns:1fr}
  .aw-why-card--customers,.aw-why-card--review{grid-column:auto}
  .aw-cta-section{padding:80px 20px 48px}
  .aw-footer{padding:48px 20px 24px}
  .aw-footer__top{grid-template-columns:1fr;gap:24px}
  .aw-footer__bottom{flex-direction:column;text-align:center}
  .aw-bn-stat__num{font-size:32px}
  .aw-bottleneck__nums{flex-direction:column;gap:24px}
}
`;

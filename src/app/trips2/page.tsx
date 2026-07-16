'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus, Search, Filter, MapPin, Star, Calendar, Users,
  Heart, Eye, Clock, ChevronDown, Grid, List, SlidersHorizontal,
  Home, FileText, BarChart3, Settings, ChevronLeft, ChevronRight,
  Compass, Mountain, Building
} from 'lucide-react';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
`;

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGradTrips" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradTrips)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Nav Item ─── */
function NavItem({ icon: Icon, label, href, active, collapsed }: { icon: any; label: string; href: string; active?: boolean; collapsed?: boolean }) {
  return (
    <Link href={href} 
      className={`ky-nav-item ${active ? 'ky-nav-item--active' : ''}`}
      style={{
        display: "flex", alignItems: "center", gap: collapsed ? "0" : "12px",
        padding: collapsed ? "10px" : "12px 16px",
        borderRadius: "12px", textDecoration: "none",
        color: active ? "#e8543f" : "#52525b",
        background: active ? "#fef2ef" : "transparent",
        fontWeight: active ? 600 : 400, fontSize: "14px",
        transition: "all 0.2s", justifyContent: collapsed ? "center" : "flex-start",
        width: "100%"
      }}
    >
      <Icon size={20} style={{ flexShrink: 0 }} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

/* ─── Data ─── */
const tagColors: Record<string, { bg: string; text: string }> = {
  adventure: { bg: 'linear-gradient(135deg,#ff7a59,#ff4d6d)', text: '#fff' },
  romantic: { bg: 'linear-gradient(135deg,#ec4899,#f43f5e)', text: '#fff' },
  urban: { bg: 'linear-gradient(135deg,#6366f1,#0ea5e9)', text: '#fff' },
  luxury: { bg: 'linear-gradient(135deg,#f59e0b,#d97706)', text: '#fff' },
};

const trips = [
  { image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=600&h=800&fit=crop', title: "REFLECT WHERE SKY MEETS MOUNTAIN", short: 'Bhutanese Bliss', city: 'PARO, BHUTAN', dates: '20–22 Jul', client: 'Meera & Arjun', rating: '4.8', tag: 'adventure', price: 120, avatarSeed: 'Felix', views: '2.1k', loves: '342' },
  { image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&h=800&fit=crop', title: "LIVE WHERE COLOR MEETS COASTLINE", short: "Hanoi's Romantic Charms", city: 'MANAROLA, CINQUE TERRE, ITALY', dates: '20–22 Jul', client: 'The Kapoors', rating: '4.7', tag: 'romantic', price: 80, avatarSeed: 'Aneka', views: '14.5k', loves: '1.2k' },
  { image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=800&fit=crop', title: 'ICELANDIC HIGHLANDS, ICELAND', short: 'Bangkok Bazaar', city: 'BANGKOK, THAILAND', dates: '20–21 Jul', client: 'Ritu S.', rating: '4.6', tag: 'urban', price: 200, avatarSeed: 'Molly', views: '840', loves: '96' },
  { image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&h=800&fit=crop', title: 'AZURE ESCAPES & LUXURY RETREATS', short: 'Azure Escapes', city: 'LAKSHADWEEP, INDIA', dates: '24–28 Jul', client: 'Honeymoon', rating: '4.9', tag: 'luxury', price: 250, avatarSeed: 'Jack', views: '32k', loves: '4.1k' },
  { image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=800&fit=crop', title: 'KUALA LUMPUR SKYLINE SPRINT', short: 'KL Skyline Sprint', city: 'KUALA LUMPUR, MALAYSIA', dates: '1–3 Aug', client: 'Solo · Dev', rating: '4.5', tag: 'urban', price: 95, avatarSeed: 'Oliver', views: '5k', loves: '210' },
  { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop', title: 'DUBAI DESERT LIGHTS TO DOWNTOWN', short: 'Dubai Desert Lights', city: 'DUBAI, UAE', dates: '8–11 Aug', client: 'Family · 4', rating: '4.7', tag: 'adventure', price: 180, avatarSeed: 'Jude', views: '12', loves: '2' },
];

const tripIcons: Record<string, any> = {
  All: Compass,
  Adventure: Mountain,
  Romantic: Heart,
  Urban: Building,
  Luxury: Star,
};

export default function TripsPage() {
  const [filter, setFilter] = useState('All');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = FONT_CSS;
    document.head.appendChild(s);
    setMounted(true);
    return () => { document.head.removeChild(s); };
  }, []);

  const filters = ['All', 'Adventure', 'Romantic', 'Urban', 'Luxury'];
  const filteredTrips = filter === 'All' ? trips : trips.filter(t => t.tag === filter.toLowerCase());

  if (!mounted) return null;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ky-trips-page { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-trips-page * { box-sizing: border-box; }

        /* Filters */
        .ky-filters { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
        .ky-filter {
          padding: 10px 20px; border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all .2s; color: #71717a; border: 1px solid #ececee;
          background: #fff; font-family: Cosmic, sans-serif;
        }
        .ky-filter.active { background: #09090b; color: #fff; border-color: #09090b; }
        .ky-filter:hover:not(.active) { background: #f4f4f5; }

        /* Trip Grid */
        .ky-trip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ky-trip-card {
          border-radius: 24px; overflow: hidden; background: #fff; border: 1px solid #ececee;
          text-decoration: none; color: inherit; transition: all .3s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .ky-trip-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,.1); }
        .ky-trip-img { height: 260px; position: relative; overflow: hidden; }
        .ky-trip-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
        .ky-trip-card:hover .ky-trip-img img { transform: scale(1.05); }
        .ky-trip-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%); }
        .ky-trip-top { position: absolute; top: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: flex-start; }
        .ky-trip-tag { padding: 4px 10px; border-radius: 100px; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .ky-trip-rating { background: rgba(255,255,255,.9); backdrop-filter: blur(8px); padding: 4px 10px; border-radius: 100px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .ky-trip-price { position: absolute; bottom: 16px; left: 16px; font-size: 20px; font-weight: 700; color: #fff; }
        .ky-trip-price span { font-size: 13px; font-weight: 500; opacity: .8; }
        .ky-trip-body { padding: 20px; }
        .ky-trip-title { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
        .ky-trip-city { font-size: 12px; color: #a1a1aa; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; }
        .ky-trip-meta { display: flex; gap: 16px; font-size: 13px; color: #71717a; padding-top: 12px; border-top: 1px solid #f4f4f5; }
        .ky-trip-meta span { display: flex; align-items: center; gap: 4px; }
        .ky-trip-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }
        .ky-trip-avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #e8543f, #ffc24d); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #fff; }
        .ky-trip-stats { display: flex; gap: 12px; font-size: 12px; color: #a1a1aa; }

        /* Buttons */
        .ky-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 14px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all .2s; text-decoration: none; font-family: Cosmic, sans-serif; border: none; }
        .ky-btn-outline { background: #fff; color: #09090b; border: 1px solid #ececee; }
        
        .ky-btn-awesomic { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: transform .18s ease, box-shadow .2s ease; border: 0.5px solid rgba(255,255,255,0.2); background: #09090b; color: #fff; box-shadow: rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0; position: relative; overflow: hidden; z-index: 1; text-decoration: none; font-family: 'Cosmica', system-ui, sans-serif; }
        .ky-btn-awesomic:hover { transform: translateY(-1px); }
        .ky-btn-awesomic::after { content: ""; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.28) 50%, transparent 72%); transform: translateX(-120%); animation: kyAuthShine 4s ease-in-out infinite; z-index: -1; pointer-events: none; }
        .ky-btn-coral { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 14px; font-size: 14px; font-weight: 600; cursor: pointer; transition: transform .18s ease, box-shadow .2s ease; text-decoration: none; font-family: Cosmic, sans-serif; border: 0.5px solid rgba(255,255,255,0.2); background: #09090b; color: #fff; box-shadow: rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0; position: relative; overflow: hidden; z-index: 1; }
        .ky-btn-coral:hover { transform: translateY(-1px); }
        .ky-btn-coral::after { content: ""; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.28) 50%, transparent 72%); transform: translateX(-120%); animation: kyAuthShine 4s ease-in-out infinite; z-index: -1; pointer-events: none; }
        @keyframes kyAuthShine { 0% { transform: translateX(-120%); } 45%,100% { transform: translateX(120%); } }

        @media (max-width: 1200px) { .ky-trip-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .ky-trip-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="ky-trips-page">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside style={{
          width: sidebarCollapsed ? "72px" : "260px", minHeight: "100vh", background: "#fff",
          borderRight: "1px solid #ececee", padding: sidebarCollapsed ? "24px 8px" : "20px", display: "flex", flexDirection: "column",
          position: "fixed", left: 0, top: 0, bottom: 0, transition: "all 0.3s", zIndex: 100,
          boxShadow: "4px 0 20px rgba(0,0,0,0.03)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <img src="/kyvari-logo.png" alt="Kyvari Logo" style={{ width: "40px", height: "40px", borderRadius: "8px", objectFit: "contain" }} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>
          <Link href="/detail2" style={{ textDecoration: "none", marginBottom: "20px", display: "block" }}>
            <div className="hover-scale" style={{
              display: "flex", alignItems: "center", gap: "10px",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
              padding: sidebarCollapsed ? "12px" : "12px 16px",
              borderRadius: "12px", background: "#09090b", color: "#fff",
              fontWeight: 600, fontSize: "14px", cursor: "pointer",
              boxShadow: "rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0",
              transition: "transform 0.2s", position: "relative", overflow: "hidden"
            }}>
              <Plus size={16} style={{ position: "relative", zIndex: 2 }} />
              {!sidebarCollapsed && <span style={{ position: "relative", zIndex: 2 }}>New Itinerary</span>}
              <div style={{
                position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
                background: "linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.28) 50%, transparent 72%)",
                animation: "kyAuthShine 4s ease-in-out infinite"
              }} />
            </div>
          </Link>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
            position: "absolute", right: "-12px", top: "80px", width: "24px", height: "24px", borderRadius: "50%",
            background: "#fff", border: "1px solid #ececee", color: "#71717a", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 101, boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ marginBottom: "8px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(0,0,0,0.4)", marginBottom: "8px", paddingLeft: "16px" }}>MENU</div>}
              <NavItem icon={Home} label="Dashboard" href="/dashboard" collapsed={sidebarCollapsed} />
              <NavItem icon={FileText} label="Trips" href="/trips2" active collapsed={sidebarCollapsed} />
              <NavItem icon={Search} label="Library" href="/library2" collapsed={sidebarCollapsed} />
              <NavItem icon={BarChart3} label="Analytics" href="/analytics2" collapsed={sidebarCollapsed} />
            </div>
            
            <div style={{ flex: 1 }} />

            {/* Pro Plan Card */}
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: sidebarCollapsed ? "12px" : "18px",
              background: "linear-gradient(155deg,#22242b 0%,#2e3039 100%)",
              padding: sidebarCollapsed ? "12px 0" : "17px 17px 15px",
              color: "#fff",
              boxShadow: "0 14px 30px rgba(29,31,36,.25)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: sidebarCollapsed ? "center" : "stretch"
            }}>
              {sidebarCollapsed ? (
                <>
                  <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",borderRadius:"8px",background:"rgba(255,255,255,0.1)"}}>
                    <img src="/kyvari-logo.png" alt="" width={18} height={18} style={{borderRadius:"4px"}} />
                  </div>
                  <div style={{marginTop:"8px",fontSize:"9px",fontWeight:700,color:"#ffb08f",letterSpacing:"1px"}}>PRO</div>
                </>
              ) : (
                <>
                  <div style={{ position: "absolute", top: 0, left: "-100%", width: "50%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-20deg)", animation: "sweepShine 5s linear infinite 2s", zIndex: 10, pointerEvents: "none" }}></div>
                  <span style={{position:"absolute",top:"-46px",right:"-36px",width:"140px",height:"140px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,138,92,.4),transparent 68%)",animation:"haloBreathe 6s ease-in-out infinite"}}></span>
                  <span style={{position:"absolute",bottom:"-50px",left:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,194,77,.22),transparent 68%)",animation:"haloBreathe 8s ease-in-out 1.5s infinite"}}></span>
                  
                  <div style={{position:"relative",display:"flex",alignItems:"center",gap:"7px",fontSize:"9.5px",fontWeight:500,letterSpacing:".22em",color:"#ffb08f"}}>
                    <img src="/kyvari-logo.png" alt="Logo" width={14} height={14} style={{ filter: "drop-shadow(0 2px 4px rgba(255,176,143,0.4))", borderRadius: "3px" }} />
                    PRO PLAN
                  </div>
                  <div style={{position:"relative",fontFamily:"Cosmic, serif",fontWeight:600,fontSize:"15.5px",lineHeight:1.3,margin:"9px 0 4px", background: "linear-gradient(180deg, #fff, #d1d5db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Go Ultimate for more itineraries</div>
                  <div style={{position:"relative",fontSize:"11px",color:"#a5a7ad",lineHeight:1.55}}>500 itineraries / month & priority AI.</div>
                  <div style={{position:"relative",display:"flex",justifyContent:"space-between",fontSize:"10px",fontWeight:500,color:"#c6c8cd",margin:"12px 0 6px"}}><span>24 / 100 used</span><span style={{color:"#ffc24d"}}>76 left</span></div>
                  <div style={{position:"relative",height:"5px",borderRadius:"99px",background:"rgba(255,255,255,.12)",overflow:"hidden", border: "1px solid rgba(255,255,255,0.05)"}}>
                    <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg,#ffc24d,#ff8a5c)",position:"relative",overflow:"hidden", boxShadow: "0 0 10px rgba(255,194,77,0.5)"}}>
                      <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)",animation:"shine 2.8s linear infinite"}}></span>
                    </div>
                  </div>
                  <div className="hover-scale" style={{position:"relative",marginTop:"13px",background:"linear-gradient(180deg, #fff, #e5e7eb)",color:"#1d1f24",borderRadius:"10px",padding:"9px",textAlign:"center",fontWeight:600,fontSize:"12.5px",cursor:"pointer",transition:"all .2s", boxShadow: "0 4px 12px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,1)"}}>Upgrade</div>
                </>
              )}
            </div>

            {/* Settings Tab */}
            <div style={{ marginBottom: "8px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(0,0,0,0.4)", marginBottom: "8px", paddingLeft: "16px", marginTop: "16px" }}>ACCOUNT</div>}
              <NavItem icon={Settings} label="Settings" href="/settings2" collapsed={sidebarCollapsed} />
            </div>
          </nav>
          <div style={{ paddingTop: "20px", borderTop: "1px solid #ececee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#fff" }}>WL</div>
              {!sidebarCollapsed && (<div><div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div><div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div></div>)}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", padding: "32px", background: "#f8f8fa", minHeight: "100vh", minWidth: 0, overflowX: "hidden" }}>

          {/* Page Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", animation: "fadeUp 0.4s ease-out" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 800 }}>Your Itineraries</h1>
            <div style={{ display: "flex", gap: "12px" }}>
              <button className="ky-btn ky-btn-outline"><Filter size={16} /> Filters</button>
              <Link href="/detail2" className="ky-btn ky-btn-coral"><Plus size={16} /> New Trip</Link>
            </div>
          </div>

          {/* Filters */}
          <div className="ky-filters">
            {filters.map(f => {
              const IconComponent = tripIcons[f];
              return (
                <button
                  key={f}
                  className={`ky-filter ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {IconComponent && <IconComponent size={13} />}
                  {f}
                </button>
              );
            })}
          </div>

          {/* Trip Grid */}
          <div className="ky-trip-grid">
            {filteredTrips.map((trip, i) => (
              <Link href="/detail2" key={i} className="ky-trip-card" style={{ animation: `fadeUp 0.4s ease-out ${i * 0.08}s both` }}>
                <div className="ky-trip-img">
                  <img src={trip.image} alt={trip.short} />
                  <div className="ky-trip-overlay"></div>
                  <div className="ky-trip-top">
                    <span className="ky-trip-tag" style={{ background: tagColors[trip.tag]?.bg || '#71717a', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {React.createElement(tripIcons[trip.tag.charAt(0).toUpperCase() + trip.tag.slice(1)] || Compass, { size: 10 })}
                      {trip.tag}
                    </span>
                    <span className="ky-trip-rating">★ {trip.rating}</span>
                  </div>
                  <div className="ky-trip-price">${trip.price}<span>/pp</span></div>
                </div>
                <div className="ky-trip-body">
                  <div className="ky-trip-title">{trip.short}</div>
                  <div className="ky-trip-city"><MapPin size={12} /> {trip.city}</div>
                  <div className="ky-trip-meta">
                    <span><Calendar size={14} /> {trip.dates}</span>
                    <span><Users size={14} /> {trip.client}</span>
                  </div>
                  <div className="ky-trip-footer">
                    <div className="ky-trip-avatar">{trip.avatarSeed.charAt(0)}</div>
                    <div className="ky-trip-stats">
                      <span><Eye size={12} /> {trip.views}</span>
                      <span><Heart size={12} /> {trip.loves}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </main>
      </div>
    </>
  );
}

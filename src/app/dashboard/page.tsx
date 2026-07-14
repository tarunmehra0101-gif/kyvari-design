"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Home, FileText, Search, BarChart3, Settings, Bell, ChevronLeft, ChevronRight,
  Send, Eye, TrendingUp, Clock, Mail, CheckCircle, Plus, Users, Calendar,
  DollarSign, Sparkles, MapPin, Star, Plane, Hotel, Mountain, ArrowRight,
  Play, Heart, MessageSquare, ExternalLink, Compass, Activity
} from 'lucide-react';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format("woff2");font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format("woff2");font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}
`;

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGradDash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradDash)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Data ─── */
const stats = [
  { label: "Trips Sent", value: "38", change: "+15%", up: true, icon: Send, color: "#3b82f6" },
  { label: "Client Views", value: "2.4k", change: "+8%", up: true, icon: Eye, color: "#8b5cf6" },
  { label: "Booking Rate", value: "84%", change: "+4%", up: false, icon: TrendingUp, color: "#22c55e" },
  { label: "Avg Response", value: "2.1h", change: "-12%", up: true, icon: Clock, color: "#f59e0b" },
];

const recentTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=600&q=80",
    title: "Bhutanese Bliss",
    client: "Meera & Arjun",
    destination: "Paro, Bhutan",
    dates: "20-22 Jul",
    status: "Active",
    statusColor: "#22c55e",
    price: "$1,850",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #ff9a56, #ff6b6b)"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    title: "Bali Wellness Retreat",
    client: "The Kapoors",
    destination: "Ubud, Bali",
    dates: "15-22 Aug",
    status: "Sent",
    statusColor: "#f59e0b",
    price: "$2,400",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #14b8a6, #22d3ee)"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    title: "Maldives Escape",
    client: "Honeymoon",
    destination: "Male, Maldives",
    dates: "1-7 Sep",
    status: "Draft",
    statusColor: "#71717a",
    price: "$4,200",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)"
  },
];

const activities = [
  { icon: Mail, text: "Rohan & Ananya viewed Santorini proposal", time: "12m ago", color: "#3b82f6" },
  { icon: CheckCircle, text: "Kapoor family confirmed booking - $4,720", time: "3h ago", color: "#22c55e" },
  { icon: Eye, text: "Priya Nair opened Rajasthan itinerary", time: "5h ago", color: "#f59e0b" },
  { icon: MessageSquare, text: "Arjun Mehta requested revision on Alps trip", time: "Yesterday", color: "#8b5cf6" },
];

const quickActions = [
  { label: "New Trip", icon: Plus, color: "#e8543f", href: "/detail2" },
  { label: "Templates", icon: FileText, color: "#8b5cf6", href: "/trips2" },
  { label: "Analytics", icon: BarChart3, color: "#0ea5e9", href: "/analytics2" },
  { label: "Clients", icon: Users, color: "#22c55e", href: "/library2" },
];

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

/* ─── Trip Ideas ─── */
const tripIdeas = [
  { id: 1, tag: 'Family', title: 'Bali with little explorers', location: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', count: 7 },
  { id: 2, tag: 'Culture', title: 'Tokyo after dark', location: 'Tokyo', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80', count: 6 },
  { id: 3, tag: 'Romance', title: 'Paris anniversary', location: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', count: 12 },
  { id: 4, tag: 'Adventure', title: 'Bhutanese Bliss hike', location: 'Paro, Bhutan', image: 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=600&q=80', count: 4 },
  { id: 5, tag: 'Wellness', title: 'Iceland hot springs', location: 'Reykjavik', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80', count: 9 }
];

const ideaIcons: Record<string, any> = {
  All: Compass,
  Romance: Heart,
  Family: Users,
  Culture: MapPin,
  Adventure: Mountain,
  Wellness: Activity,
};

/* ─── Main Dashboard ─── */
export default function KyvariDashboard() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = FONT_CSS;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        
        .ky-dashboard { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-dashboard * { box-sizing: border-box; }
        
        /* ─── Responsive Grid Styles ─── */
        .ky-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .ky-content-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
        }
        
        /* ─── Premium Hover Effects ─── */
        .hover-scale {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .hover-scale:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06) !important;
        }
        
        /* ─── Sidebar Menu Item Styles ─── */
        .ky-nav-item {
          display: flex;
          align-items: center;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .ky-nav-item:hover {
          background: #fef2ef !important;
          color: #e8543f !important;
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(232,84,63,0.06);
        }
        .ky-nav-item--active {
          box-shadow: 0 4px 12px rgba(232,84,63,0.04);
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }

        @media (max-width: 1200px) {
          .ky-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 1024px) {
          .ky-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .ky-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div className="ky-dashboard">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside style={{
          width: sidebarCollapsed ? "72px" : "260px",
          minHeight: "100vh",
          background: "#fff",
          borderRight: "1px solid #ececee",
          padding: sidebarCollapsed ? "24px 8px" : "20px",
          display: "flex", flexDirection: "column",
          position: "fixed", left: 0, top: 0, bottom: 0,
          transition: "all 0.3s", zIndex: 100,
          boxShadow: "4px 0 20px rgba(0,0,0,0.03)"
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <img src="/kyvari-logo.png" alt="Kyvari Logo" style={{ width: "40px", height: "40px", borderRadius: "8px", objectFit: "contain" }} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>

          {/* New Itinerary CTA */}
          <Link href="/detail2" style={{ textDecoration: "none", marginBottom: "20px", display: "block" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
              gap: "10px",
              padding: sidebarCollapsed ? "12px" : "12px 16px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #ff8a5c, #e8543f)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(232,84,63,0.2)",
              transition: "transform 0.2s"
            }} className="hover-scale">
              <Plus size={16} />
              {!sidebarCollapsed && <span>New Itinerary</span>}
            </div>
          </Link>

          {/* Toggle */}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
            position: "absolute", right: "-12px", top: "80px",
            width: "24px", height: "24px", borderRadius: "50%",
            background: "#fff", border: "1px solid #ececee",
            color: "#71717a", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 101,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          {/* Navigation */}
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ marginBottom: "8px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(0,0,0,0.4)", marginBottom: "8px", paddingLeft: "16px" }}>MENU</div>}
              <NavItem icon={Home} label="Dashboard" href="/dashboard" active collapsed={sidebarCollapsed} />
              <NavItem icon={FileText} label="Trips" href="/trips2" collapsed={sidebarCollapsed} />
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

            <div style={{ marginTop: "4px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(0,0,0,0.4)", marginBottom: "8px", paddingLeft: "16px" }}>ACCOUNT</div>}
              <NavItem icon={Settings} label="Settings" href="/settings2" collapsed={sidebarCollapsed} />
            </div>
          </nav>

          {/* User */}
          <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>WL</div>
              {!sidebarCollapsed && (
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div>
                  <div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", padding: "32px", background: "#f8f8fa", minHeight: "100vh", minWidth: 0, overflowX: "hidden" }}>
          {/* Video Hero Banner */}
          <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "32px", overflow: "hidden", marginBottom: "32px", boxShadow: "0 12px 32px rgba(0,0,0,0.06)" }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/265655_medium.mp4" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(9,9,11,0.65) 0%, rgba(9,9,11,0.2) 100%)" }} />
            
            <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "32px" }}>
              {/* Date Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 18px", borderRadius: "100px", color: "#fff", fontSize: "12px", fontWeight: 700, width: "fit-content", textTransform: "uppercase", letterSpacing: ".1em" }}>
                <Calendar size={14} />
                <span>Monday • July 13</span>
              </div>
              
              {/* Title */}
              <h1 style={{ fontFamily: "Cosmic, sans-serif", fontSize: "44px", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-.02em", textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                Where to today, Tarun?
              </h1>
            </div>
          </div>

          {/* AI Prompt Box */}
          <div style={{
            background: "#fff",
            border: "1px solid #eeece5",
            borderRadius: "24px",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.02)",
            marginBottom: "40px",
            width: "100%"
          }}>
            {/* Glowing Blue AI Orb */}
            <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "50%", background: "#fff", border: "1px solid #eeece5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <span style={{ position: "absolute", width: "24px", height: "24px", borderRadius: "50%", background: "#3b82f6", opacity: 0.25, animation: "pulse 2s infinite" }} />
              <span style={{ position: "relative", width: "14px", height: "14px", background: "#3b82f6", borderRadius: "50%", boxShadow: "0 0 10px rgba(59,130,246,0.6)" }} />
            </div>
            
            {/* Plus attachment icon */}
            <button style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center" }}>
              <Plus size={20} />
            </button>
            
            {/* Input Box */}
            <input 
              type="text" 
              placeholder='Describe the travelers, dates, pace, budget, and what would make the trip memorable...'
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "15px",
                fontFamily: "Cosmic, sans-serif",
                color: "#09090b",
                background: "transparent"
              }}
            />
            
            {/* Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center", padding: "8px", borderRadius: "50%" }} className="hover:bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </button>
              <button 
                onClick={() => router.push('/detail2')}
                style={{ 
                  background: "linear-gradient(135deg, #ff8a5c, #e8543f)", 
                  border: "none", 
                  color: "#fff", 
                  cursor: "pointer", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "50%",
                  boxShadow: "0 4px 10px rgba(232,84,63,0.3)",
                  transition: "all 0.2s"
                }}
                className="hover-scale"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Inspiration Prompts Section */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#e8543f", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "8px" }}>TRIP IDEAS</div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#09090b", marginBottom: "20px" }}>Pick a trip idea and make it yours.</h2>
            
            {/* Filter Pills */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "none" }} className="hide-scrollbar">
              {['All', 'Romance', 'Family', 'Culture', 'Adventure', 'Wellness'].map((filterName) => {
                const IconComponent = ideaIcons[filterName];
                return (
                  <button
                    key={filterName}
                    onClick={() => setActiveFilter(filterName)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "100px",
                      border: activeFilter === filterName ? "none" : "1px solid #eeece5",
                      background: activeFilter === filterName ? "#09090b" : "#fff",
                      color: activeFilter === filterName ? "#fff" : "#52525b",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {filterName}
                  </button>
                );
              })}
            </div>

            {/* Inspiration Cards Carousel */}
            <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "12px", scrollbarWidth: "none" }} className="hide-scrollbar">
              {tripIdeas
                .filter(idea => activeFilter === 'All' || idea.tag === activeFilter)
                .map((idea) => (
                  <Link key={idea.id} href="/detail2" style={{ textDecoration: "none" }}>
                    <div style={{
                      flexShrink: 0,
                      width: "280px",
                      height: "380px",
                      borderRadius: "32px",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      padding: "24px",
                      cursor: "pointer",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
                    }} className="hover-scale">
                      <img 
                        src={idea.image} 
                        alt={idea.title} 
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} 
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)", zIndex: 1 }} />
                      
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 12px",
                          borderRadius: "100px",
                          background: "rgba(0,0,0,0.5)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase"
                        }}>
                          {React.createElement(ideaIcons[idea.tag] || Compass, { size: 12 })}
                          {idea.tag}
                        </span>
                      </div>

                      <div style={{ position: "relative", zIndex: 2, marginTop: "auto", color: "#fff" }}>
                        <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px", lineHeight: 1.2, fontFamily: "Cosmic, sans-serif" }}>{idea.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>
                          <MapPin size={13} />
                          <span>{idea.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Refined Analytics Stats Cards */}
          <div className="ky-stats-grid">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={i} 
                  className="hover-scale"
                  style={{
                    padding: "28px 24px", 
                    borderRadius: "32px",
                    background: "#fff",
                    border: "1px solid #eeece5",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                    animation: `fadeUp 0.4s ease-out ${i * 0.1}s both`,
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <span style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${stat.color}08, transparent 70%)`
                  }} />

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div style={{ 
                      width: "56px", 
                      height: "56px", 
                      borderRadius: "16px", 
                      background: `linear-gradient(135deg, ${stat.color}12, ${stat.color}25)`, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center" 
                    }}>
                      <Icon size={24} color={stat.color} />
                    </div>
                    <span style={{
                      padding: "6px 12px", 
                      borderRadius: "100px",
                      fontSize: "12px", 
                      fontWeight: 700,
                      background: stat.up ? "#dcfce7" : "#fef2f2",
                      color: stat.up ? "#16a34a" : "#dc2626",
                      border: stat.up ? "1px solid #bbf7d0" : "1px solid #fecaca"
                    }}>
                      {stat.up ? "↑" : "↓"} {stat.change}
                    </span>
                  </div>
                  
                  <div style={{ 
                    fontSize: "36px", 
                    fontWeight: 800, 
                    marginBottom: "4px", 
                    color: "#09090b",
                    fontFamily: "Cosmic, serif"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: ".05em" }}>{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Content Grid */}
          <div className="ky-content-grid">
            {/* Recent Trips */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#09090b" }}>Recent Itineraries</h2>
                <Link href="/trips2" style={{ color: "#e8543f", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {recentTrips.map((trip) => (
                  <Link href="/detail2" key={trip.id} style={{ textDecoration: "none" }}>
                    <div style={{
                      display: "flex", gap: "20px", padding: "20px",
                      background: "#fff",
                      border: "1px solid #ececee",
                      borderRadius: "24px", cursor: "pointer", transition: "all 0.3s",
                      position: "relative", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                    }} className="ky-trip-card">
                      {/* Background gradient */}
                      <div style={{
                        position: "absolute", top: 0, right: 0, width: "200px", height: "200px",
                        background: trip.gradient, opacity: 0.08,
                        borderRadius: "0 24px 0 200px"
                      }} />

                      <div style={{ width: "140px", height: "100px", borderRadius: "16px", overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1 }}>
                        <img src={trip.image} alt={trip.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>

                      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#09090b" }}>{trip.title}</h3>
                          <span style={{
                            padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600,
                            background: `${trip.statusColor}15`, color: trip.statusColor
                          }}>{trip.status}</span>
                        </div>
                        <div style={{ fontSize: "14px", color: "#71717a", marginBottom: "10px", display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Users size={14} style={{ color: '#e8543f' }} /> {trip.client}</span>
                          <span style={{ color: "#d4d4d8" }}>•</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><MapPin size={14} style={{ color: '#e8543f' }} /> {trip.destination}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "13px", color: "#a1a1aa" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} />{trip.dates}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#f59e0b" }}><Star size={13} fill="#f59e0b" color="#f59e0b" /> {trip.rating}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#16a34a", fontWeight: 600 }}><DollarSign size={13} /> {trip.price}</span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
                        <ArrowRight size={20} style={{ color: "#d4d4d8" }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div style={{
              background: "#fff",
              border: "1px solid #ececee",
              borderRadius: "24px", padding: "24px", height: "fit-content", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#09090b" }}>Live Activity</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {activities.map((activity, i) => {
                  const Icon = activity.icon;
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "14px",
                      padding: "14px", borderRadius: "14px",
                      background: "#fafafa",
                      transition: "all 0.2s"
                    }} className="ky-activity-item">
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "12px",
                        background: `${activity.color}15`, display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0
                      }}>
                        <Icon size={18} color={activity.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", marginBottom: "2px", color: "#09090b" }}>{activity.text}</div>
                        <div style={{ fontSize: "12px", color: "#a1a1aa" }}>{activity.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI Prompt Card */}
              <div style={{
                marginTop: "24px", padding: "24px",
                background: "linear-gradient(135deg, #fff5f3 0%, #fef7f5 100%)",
                border: "1px solid #fde8e3", borderRadius: "20px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <Sparkles size={20} color="#e8543f" />
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#09090b" }}>AI Assistant</span>
                </div>
                <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "16px", lineHeight: 1.6 }}>
                  Need help creating an itinerary? Describe your client's dream trip.
                </p>
                <Link href="/detail2" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "14px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #ff8a5c, #e8543f)",
                  color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 600, boxShadow: "0 4px 12px rgba(232,84,63,0.3)"
                }}>
                  <Sparkles size={16} /> Start Planning
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        .ky-action-card:hover {
          background: rgba(255,255,255,0.06) !important;
          transform: translateY(-2px);
        }
        .ky-trip-card:hover {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.15);
        }
        .ky-activity-item:hover {
          background: rgba(255,255,255,0.05) !important;
        }
        @media (max-width: 1024px) {
          main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

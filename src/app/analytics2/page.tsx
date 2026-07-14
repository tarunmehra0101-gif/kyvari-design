'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp, TrendingDown, Eye, Clock, Send, Mail, Users, BarChart3,
  Filter, Download, RefreshCw, Calendar, ChevronDown, Star, MapPin,
  Plane, Hotel, Utensils, Camera, Search, Bell, Home, FileText,
  Settings, ChevronLeft, ChevronRight, Plus, Compass, DollarSign, CheckCircle
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
        <linearGradient id="kyGradAnalytics" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradAnalytics)"/>
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
const kpis = [
  { label: 'Itineraries Sent', value: '38', change: '+15%', up: true, color: '#8b5cf6', icon: Send },
  { label: 'Client View Rate', value: '84%', change: '+4%', up: false, color: '#f97316', icon: Eye },
  { label: 'Avg. Dwell Time', value: '5m 42s', change: '+8%', up: true, color: '#0ea5e9', icon: Clock },
  { label: 'Booking Rate', value: '32%', change: '+6%', up: true, color: '#22c55e', icon: TrendingUp },
];

const weeklyData = [
  { day: 'Mon', views: 42, sessions: 25 },
  { day: 'Tue', views: 50, sessions: 30 },
  { day: 'Wed', views: 48, sessions: 32 },
  { day: 'Thu', views: 65, sessions: 40 },
  { day: 'Fri', views: 72, sessions: 52 },
  { day: 'Sat', views: 55, sessions: 38 },
  { day: 'Sun', views: 38, sessions: 22 },
];

const funnelData = [
  { label: 'Sent', value: 38, percent: 100, color: '#a4d673' },
  { label: 'Opened', value: 32, percent: 84, color: '#88c54c' },
  { label: 'Engaged 3+ min', value: 21, percent: 55, color: '#ffc24d' },
  { label: 'Booked', value: 12, percent: 32, color: '#22c55e' },
];

const destinations = [
  { name: 'Santorini', value: 26000, width: 92 },
  { name: 'Bali', value: 21000, width: 75 },
  { name: 'Rajasthan', value: 15000, width: 55 },
  { name: 'Swiss Alps', value: 13000, width: 48 },
  { name: 'Kyoto', value: 10000, width: 38 },
];

const topItineraries = [
  { title: "Santorini, Slowly", client: "R. & A. Sharma", views: 14, time: "6m 12s", status: "Viewed", statusColor: '#f59e0b' },
  { title: "Bali, Barefoot", client: "Fernandes family", views: 22, time: "8m 24s", status: "Booked", statusColor: '#22c55e' },
  { title: "Alps on Rails", client: "Arjun Mehta +2", views: 9, time: "5m 36s", status: "Viewed", statusColor: '#f59e0b' },
  { title: "Forts & Thali Trails", client: "Kapoor reunion", views: 6, time: "3m 06s", status: "Sent", statusColor: '#71717a' },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30 days');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = FONT_CSS;
    document.head.appendChild(s);
    setMounted(true);
    return () => { document.head.removeChild(s); };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ky-analytics-page { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-analytics-page * { box-sizing: border-box; }

        /* KPI Grid */
        .ky-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .ky-kpi-card {
          background: #fff;
          border: 1px solid #ececee;
          border-radius: 24px;
          padding: 24px;
          transition: all .2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .ky-kpi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }

        /* Cards */
        .ky-card {
          background: #fff;
          border: 1px solid #ececee;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .ky-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .ky-card-title {
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .ky-card-subtitle {
          font-size: 13px;
          color: #a1a1aa;
          margin-bottom: 20px;
        }
        .ky-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        /* Bar Chart */
        .ky-bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 200px;
          padding-top: 10px;
        }
        .ky-bar-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .ky-bar-stack { display: flex; flex-direction: column; gap: 2px; align-items: center; }
        .ky-bar { width: 32px; border-radius: 6px; transition: height .6s ease; }
        .ky-bar-label { font-size: 12px; color: #a1a1aa; }
        .ky-legend { display: flex; gap: 16px; margin-bottom: 16px; }
        .ky-legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #71717a; }
        .ky-legend-dot { width: 8px; height: 8px; border-radius: 50%; }

        /* Funnel */
        .ky-funnel-item { margin-bottom: 18px; }
        .ky-funnel-header { display: flex; justify-content: space-between; font-size: 14px; font-weight: 600; margin-bottom: 8px; }
        .ky-funnel-bar { height: 12px; background: #f4f4f5; border-radius: 6px; overflow: hidden; }
        .ky-funnel-fill { height: 100%; border-radius: 6px; transition: width .5s ease; }

        /* Destination Bars */
        .ky-dest-item { display: flex; align-items: center; margin-bottom: 16px; }
        .ky-dest-name { width: 100px; font-size: 13px; color: #71717a; text-align: right; padding-right: 16px; }
        .ky-dest-bar-wrap { flex: 1; position: relative; height: 12px; background: #f4f4f5; border-radius: 6px; overflow: hidden; margin: 0 16px; }
        .ky-dest-bar { height: 100%; background: linear-gradient(90deg, #22c55e, #16a34a); border-radius: 6px; transition: width .5s ease; }
        .ky-dest-value { width: 60px; font-size: 13px; font-weight: 600; }

        /* Table */
        .ky-table { width: 100%; border-collapse: collapse; }
        .ky-table th { text-align: left; padding: 12px 0; font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: .05em; border-bottom: 1px solid #ececee; }
        .ky-table td { padding: 16px 0; font-size: 14px; border-bottom: 1px solid #f4f4f5; }
        .ky-table tr:hover td { background: #fafafa; }
        .ky-table .ky-title-cell { font-weight: 600; }
        .ky-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; border: 1px solid #ececee; }

        /* Range Tabs */
        .ky-range-tabs { display: flex; background: #fff; border: 1px solid #ececee; border-radius: 100px; padding: 4px; gap: 4px; }
        .ky-range-tab { padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; color: #71717a; border: none; background: transparent; font-family: Cosmic, sans-serif; }
        .ky-range-tab.active { background: #09090b; color: #fff; }

        @media (max-width: 1024px) {
          .ky-kpi-grid { grid-template-columns: repeat(2, 1fr); }
          .ky-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="ky-analytics-page">

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
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <img src="/kyvari-logo.png" alt="Kyvari Logo" style={{ width: "40px", height: "40px", borderRadius: "8px", objectFit: "contain" }} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>
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

          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
            <NavItem icon={Home} label="Dashboard" href="/dashboard" collapsed={sidebarCollapsed} />
            <NavItem icon={FileText} label="Trips" href="/trips2" collapsed={sidebarCollapsed} />
            <NavItem icon={Search} label="Library" href="/library2" collapsed={sidebarCollapsed} />
            <NavItem icon={BarChart3} label="Analytics" href="/analytics2" active collapsed={sidebarCollapsed} />
            
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
            <NavItem icon={Settings} label="Settings" href="/settings2" collapsed={sidebarCollapsed} />
          </nav>

          {/* User */}
          <div style={{ paddingTop: "20px", borderTop: "1px solid #ececee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#fff" }}>WL</div>
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

          {/* Page Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "16px", animation: "fadeUp 0.4s ease-out" }}>
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "4px" }}>Analytics</h1>
              <p style={{ fontSize: "15px", color: "#71717a" }}>Track how clients engage with your itineraries.</p>
            </div>
            <div className="ky-range-tabs">
              {['7 days', '30 days', '90 days', 'This year'].map(range => (
                <button
                  key={range}
                  className={`ky-range-tab ${timeRange === range ? 'active' : ''}`}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="ky-kpi-grid">
            {kpis.map((kpi, i) => {
              const IconComponent = kpi.icon || Send;
              return (
                <div key={i} className="ky-kpi-card" style={{ animation: `fadeUp 0.4s ease-out ${i * 0.1}s both`, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: "13px", color: "#71717a", fontWeight: 600 }}>{kpi.label}</span>
                    <IconComponent size={18} color={kpi.color} style={{ opacity: 0.8 }} />
                  </div>
                  <div style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", color: kpi.color, fontFamily: 'Cosmic, sans-serif' }}>{kpi.value}</div>
                  <div style={{ marginTop: 'auto' }}>
                    <span style={{
                      padding: "4px 10px", borderRadius: "100px", fontSize: "12px", fontWeight: 600,
                      background: kpi.up ? "#dcfce7" : "#fef2f2",
                      color: kpi.up ? "#16a34a" : "#dc2626",
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '2px'
                    }}>
                      {kpi.up ? '↑' : '↓'} {kpi.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="ky-grid-2">
            {/* Engagement Chart */}
            <div className="ky-card">
              <h2 className="ky-card-title">
                <BarChart3 size={20} style={{ color: '#e8543f' }} />
                Weekly Engagement
              </h2>
              <p className="ky-card-subtitle">Views and peak sessions per day</p>
              <div className="ky-legend">
                <div className="ky-legend-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><span className="ky-legend-dot" style={{ background: '#ff8a5c' }}></span>Views</div>
                <div className="ky-legend-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><span className="ky-legend-dot" style={{ background: '#e8543f' }}></span>Peak Sessions</div>
              </div>
              <div className="ky-bar-chart" style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px', paddingTop: '10px' }}>
                {weeklyData.map((d, i) => (
                  <div key={i} className="ky-bar-group" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div className="ky-bar-stack" style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'flex-end', height: '140px' }}>
                      <div className="ky-bar" style={{ width: '10px', height: `${d.views * 1.8}px`, background: '#ff8a5c', borderRadius: '3px 3px 0 0' }}></div>
                      <div className="ky-bar" style={{ width: '10px', height: `${d.sessions * 1.8}px`, background: '#e8543f', borderRadius: '3px 3px 0 0' }}></div>
                    </div>
                    <div className="ky-bar-label">{d.day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="ky-card">
              <h2 className="ky-card-title">
                <TrendingUp size={20} style={{ color: '#e8543f' }} />
                Conversion Funnel
              </h2>
              <p className="ky-card-subtitle">Last 30 days, 38 sent</p>
              {funnelData.map((item, i) => {
                const FunnelIcon = [Send, Eye, Clock, CheckCircle][i] || Send;
                return (
                  <div key={i} className="ky-funnel-item">
                    <div className="ky-funnel-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FunnelIcon size={14} style={{ color: item.color }} />
                        {item.label}
                      </span>
                      <span style={{ color: '#71717a' }}>{item.value} · {item.percent}%</span>
                    </div>
                    <div className="ky-funnel-bar">
                      <div className="ky-funnel-fill" style={{ width: `${item.percent}%`, background: item.color }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="ky-grid-2">
            {/* Revenue by Destination */}
            <div className="ky-card">
              <h2 className="ky-card-title">
                <DollarSign size={20} style={{ color: '#e8543f' }} />
                Revenue by Destination
              </h2>
              <p className="ky-card-subtitle">Confirmed bookings this quarter</p>
              {destinations.map((d, i) => (
                <div key={i} className="ky-dest-item">
                  <span className="ky-dest-name" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    <MapPin size={13} style={{ color: '#22c55e' }} />
                    {d.name}
                  </span>
                  <div className="ky-dest-bar-wrap">
                    <div className="ky-dest-bar" style={{ width: `${d.width}%` }}></div>
                  </div>
                  <span className="ky-dest-value">${(d.value / 1000).toFixed(0)}k</span>
                </div>
              ))}
            </div>

            {/* Top Itineraries */}
            <div className="ky-card">
              <h2 className="ky-card-title">
                <FileText size={20} style={{ color: '#e8543f' }} />
                Top Itineraries
              </h2>
              <p className="ky-card-subtitle">Most viewed proposals this month</p>
              <table className="ky-table">
                <thead>
                  <tr>
                    <th>Itinerary</th>
                    <th>Views</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topItineraries.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <div className="ky-title-cell" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                          <Compass size={14} style={{ color: '#ff8a5c' }} />
                          {item.title}
                        </div>
                        <div style={{ color: '#71717a', fontSize: '12px', paddingLeft: '20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Users size={11} /> {item.client}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Eye size={12} style={{ color: '#71717a' }} />
                          {item.views}
                        </div>
                      </td>
                      <td>
                        <span className="ky-badge" style={{ color: item.statusColor, borderColor: `${item.statusColor}30`, background: `${item.statusColor}10` }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: item.statusColor }}></span>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}

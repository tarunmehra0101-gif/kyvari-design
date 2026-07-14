'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Home, FileText, Search, BarChart3, Settings, ChevronLeft, ChevronRight, Plus
} from 'lucide-react';

const Detail = dynamic(() => import('../../components/Detail2').then(m => m.Detail2), { ssr: false });
const PlaceDrawer = dynamic(() => import('../../components/PlaceDrawer').then(m => m.PlaceDrawer), { ssr: false });

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  // Using the attached logo image
  return (
    <img 
      src="/kyvari-logo.png" 
      alt="" 
      width={size} 
      height={size} 
      style={{ flexShrink: 0, borderRadius: '8px', objectFit: 'contain' }} 
      onError={(e) => {
        // Fallback to CSS logo if image not found yet
        e.currentTarget.style.display = 'none';
        if (e.currentTarget.nextElementSibling) {
          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
        }
      }}
    />
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

export default function Page() {
  const [place, setPlace] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', background: '#f8f8fa', minHeight: '100vh', fontFamily: 'Cosmic, system-ui, sans-serif' }}>
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
        <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
          position: "absolute", right: "-12px", top: "80px", width: "24px", height: "24px", borderRadius: "50%",
          background: "#fff", border: "1px solid #ececee", color: "#71717a", cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 101, boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}>
          {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
          <NavItem icon={Home} label="Dashboard" href="/dashboard" collapsed={sidebarCollapsed} />
          <NavItem icon={FileText} label="Trips" href="/trips2" collapsed={sidebarCollapsed} />
          <NavItem icon={Search} label="Library" href="/library2" collapsed={sidebarCollapsed} />
          <NavItem icon={BarChart3} label="Analytics" href="/analytics2" collapsed={sidebarCollapsed} />
          
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

        <div style={{ paddingTop: "20px", borderTop: "1px solid #ececee" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#fff", flexShrink: 0 }}>WL</div>
            {!sidebarCollapsed && (<div style={{ overflow: "hidden", whiteSpace: "nowrap" }}><div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div><div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div></div>)}
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", background: "#f8f8fa", minHeight: "100vh", minWidth: 0, overflowX: "hidden" }}>
        <Detail openPlace={setPlace} />
      </main>

      {place && <PlaceDrawer place={place} closeDrawer={() => setPlace(null)} />}
    </div>
  );
}

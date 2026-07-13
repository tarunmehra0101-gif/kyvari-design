'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (pathname === '/preview' || pathname === '/home' || pathname === '/home2') return null;

  const isHome = pathname === '/';
  const isTrips = pathname === '/trips' || pathname === '/detail';
  const isLibrary = pathname === '/library';
  const isAnalytics = pathname === '/analytics';
  const isSettings = pathname === '/settings';

  const SidebarContent = () => (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      {/* Brand Header */}
      <div style={{display:"flex",alignItems:"center",gap:"11px",padding: collapsed ? "2px 0 20px" : "2px 8px 20px", justifyContent: collapsed ? "center" : "flex-start"}}>
        <span style={{width:"38px",height:"38px",flex:"none",display:"block"}}>
          <svg width="38" height="38" viewBox="0 0 38 38">
            <defs>
              <linearGradient id="klg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff8a5c"/>
                <stop offset="1" stopColor="#e8543f"/>
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="36" height="36" rx="12" fill="url(#klg)"/>
            <path d="M10 26 L23 12 c1.3-1.4 3.2-1.4 4-.5 .8.8.8 2.7-.5 4L12.6 29z" fill="#fff"/>
            <circle cx="12.6" cy="27" r="2" fill="#ffe08a"/>
          </svg>
        </span>
        {!collapsed && (
          <div>
            <div style={{fontFamily:"var(--font-fraunces), serif",fontWeight:500,fontSize:"18px",letterSpacing:"-.02em"}}>Kyvari</div>
            <div style={{fontSize:"9.5px",fontWeight:400,color:"#a09d92",letterSpacing:".2em"}}>TRAVEL STUDIO</div>
          </div>
        )}
      </div>

      {/* Primary CTA */}
      <div style={{ width: collapsed ? "44px" : "auto", margin: collapsed ? "0 auto" : "0", display: "flex", justifyContent: "center" }}>
        <Link 
          href="/" 
          className="hover-scale" 
          style={{
            position:"relative",
            overflow:"hidden",
            cursor:"pointer",
            borderRadius:"13px",
            padding: collapsed ? "11px" : "12px 16px",
            background:"#1d1f24",
            color:"#fff",
            fontWeight:500,
            fontSize:"14px",
            display:"flex",
            alignItems:"center",
            gap:"10px",
            boxShadow:"0 8px 20px rgba(29,31,36,.22)",
            transition:"all .2s",
            textDecoration: "none",
            width: "100%",
            justifyContent: collapsed ? "center" : "flex-start"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" style={{flexShrink: 0}}><path d="M8 2.5v11M2.5 8h11" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          {!collapsed && <span>New itinerary</span>}
          <span style={{position:"absolute",top:0,bottom:0,width:"38px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",animation:"shine 4.2s ease-in-out infinite"}}></span>
        </Link>
      </div>

      <div style={{height:"14px"}}></div>



      {/* Navigation Links */}
      <Link 
        href="/" 
        className="group hover:bg-[#f1f5f9] active:scale-95"
        style={{
          position: "relative",
          display:"flex",
          alignItems:"center",
          gap:"11px",
          padding: collapsed ? "12px" : "10px 12px",
          borderRadius:"11px",
          cursor:"pointer",
          fontWeight: isHome ? 600 : 500,
          fontSize:"13.5px",
          color: isHome ? '#0f172a' : '#64748b',
          background: isHome ? '#ffffff' : 'transparent',
          boxShadow: isHome ? '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
          border: isHome ? '1px solid #e2e8f0' : '1px solid transparent',
          transition:"all .2s cubic-bezier(0.4, 0, 0.2, 1)",
          justifyContent: collapsed ? "center" : "flex-start",
          textDecoration: "none"
        }}
      >
        {isHome && !collapsed && (
          <span style={{ position: "absolute", left: "-1px", top: "50%", transform: "translateY(-50%)", width: "4px", height: "16px", background: "#e8543f", borderRadius: "4px", animation: "grow 0.3s ease-out" }} />
        )}
        <div style={{ display: "flex", transform: isHome ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isHome ? "#0ea5e9" : "none"} stroke={isHome ? "#0ea5e9" : "#64748b"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0, transition: "fill 0.2s, stroke 0.2s"}}>
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </div>
        {!collapsed && <span style={{ transform: isHome ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>Chats</span>}
      </Link>

      <Link 
        href="/trips" 
        className="group hover:bg-[#f1f5f9] active:scale-95"
        style={{
          position: "relative",
          display:"flex",
          alignItems:"center",
          gap:"11px",
          padding: collapsed ? "12px" : "10px 12px",
          borderRadius:"11px",
          cursor:"pointer",
          fontWeight: isTrips ? 600 : 500,
          fontSize:"13.5px",
          color: isTrips ? '#0f172a' : '#64748b',
          background: isTrips ? '#ffffff' : 'transparent',
          boxShadow: isTrips ? '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
          border: isTrips ? '1px solid #e2e8f0' : '1px solid transparent',
          transition:"all .2s cubic-bezier(0.4, 0, 0.2, 1)",
          justifyContent: collapsed ? "center" : "flex-start",
          textDecoration: "none"
        }}
      >
        {isTrips && !collapsed && (
          <span style={{ position: "absolute", left: "-1px", top: "50%", transform: "translateY(-50%)", width: "4px", height: "16px", background: "#e8543f", borderRadius: "4px", animation: "grow 0.3s ease-out" }} />
        )}
        <div style={{ display: "flex", transform: isTrips ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isTrips ? "#0ea5e9" : "none"} stroke={isTrips ? "#0ea5e9" : "#64748b"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0, transition: "fill 0.2s, stroke 0.2s"}}>
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" y1="3" x2="9" y2="18" />
            <line x1="15" y1="6" x2="15" y2="21" />
          </svg>
        </div>
        {!collapsed && <span style={{ transform: isTrips ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>Trip itineraries</span>}
      </Link>

      <Link 
        href="/library" 
        className="group hover:bg-[#f1f5f9] active:scale-95"
        style={{
          position: "relative",
          display:"flex",
          alignItems:"center",
          gap:"11px",
          padding: collapsed ? "12px" : "10px 12px",
          borderRadius:"11px",
          cursor:"pointer",
          fontWeight: isLibrary ? 600 : 500,
          fontSize:"13.5px",
          color: isLibrary ? '#0f172a' : '#64748b',
          background: isLibrary ? '#ffffff' : 'transparent',
          boxShadow: isLibrary ? '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
          border: isLibrary ? '1px solid #e2e8f0' : '1px solid transparent',
          transition:"all .2s cubic-bezier(0.4, 0, 0.2, 1)",
          justifyContent: collapsed ? "center" : "flex-start",
          textDecoration: "none"
        }}
      >
        {isLibrary && !collapsed && (
          <span style={{ position: "absolute", left: "-1px", top: "50%", transform: "translateY(-50%)", width: "4px", height: "16px", background: "#e8543f", borderRadius: "4px", animation: "grow 0.3s ease-out" }} />
        )}
        <div style={{ display: "flex", transform: isLibrary ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isLibrary ? "#0ea5e9" : "none"} stroke={isLibrary ? "#0ea5e9" : "#64748b"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0, transition: "fill 0.2s, stroke 0.2s"}}>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        {!collapsed && <span style={{ transform: isLibrary ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>Library</span>}
      </Link>

      <Link 
        href="/analytics" 
        className="group hover:bg-[#f1f5f9] active:scale-95"
        style={{
          position: "relative",
          display:"flex",
          alignItems:"center",
          gap:"11px",
          padding: collapsed ? "12px" : "10px 12px",
          borderRadius:"11px",
          cursor:"pointer",
          fontWeight: isAnalytics ? 600 : 500,
          fontSize:"13.5px",
          color: isAnalytics ? '#0f172a' : '#64748b',
          background: isAnalytics ? '#ffffff' : 'transparent',
          boxShadow: isAnalytics ? '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
          border: isAnalytics ? '1px solid #e2e8f0' : '1px solid transparent',
          transition:"all .2s cubic-bezier(0.4, 0, 0.2, 1)",
          justifyContent: collapsed ? "center" : "flex-start",
          textDecoration: "none"
        }}
      >
        {isAnalytics && !collapsed && (
          <span style={{ position: "absolute", left: "-1px", top: "50%", transform: "translateY(-50%)", width: "4px", height: "16px", background: "#e8543f", borderRadius: "4px", animation: "grow 0.3s ease-out" }} />
        )}
        <div style={{ display: "flex", transform: isAnalytics ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isAnalytics ? "#0ea5e9" : "none"} stroke={isAnalytics ? "#0ea5e9" : "#64748b"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0, transition: "fill 0.2s, stroke 0.2s"}}>
            <rect x="18" y="3" width="4" height="18" rx="1" />
            <rect x="10" y="8" width="4" height="13" rx="1" />
            <rect x="2" y="13" width="4" height="8" rx="1" />
          </svg>
        </div>
        {!collapsed && <span style={{ transform: isAnalytics ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>Analytics</span>}
      </Link>



      <div style={{flex:1}}></div>

      {/* Pro Plan Card: warm premium */}
      {!collapsed && (
        <div style={{position:"relative",overflow:"hidden",borderRadius:"18px",background:"linear-gradient(155deg,#22242b 0%,#2e3039 100%)",padding:"17px 17px 15px",color:"#fff",boxShadow:"0 14px 30px rgba(29,31,36,.25)", border: "1px solid rgba(255,255,255,0.1)"}}>
          {/* Sweeping Shine Animation */}
          <div style={{ position: "absolute", top: 0, left: "-100%", width: "50%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-20deg)", animation: "sweepShine 5s linear infinite 2s", zIndex: 10, pointerEvents: "none" }}></div>
          
          <span style={{position:"absolute",top:"-46px",right:"-36px",width:"140px",height:"140px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,138,92,.4),transparent 68%)",animation:"haloBreathe 6s ease-in-out infinite"}}></span>
          <span style={{position:"absolute",bottom:"-50px",left:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,194,77,.22),transparent 68%)",animation:"haloBreathe 8s ease-in-out 1.5s infinite"}}></span>
          
          {/* Metallic styled text */}
          <div style={{position:"relative",display:"flex",alignItems:"center",gap:"7px",fontSize:"9.5px",fontWeight:500,letterSpacing:".22em",color:"#ffb08f"}}>
            <svg width="12" height="12" viewBox="0 0 14 14" style={{ filter: "drop-shadow(0 2px 4px rgba(255,176,143,0.4))" }}><path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7z" fill="url(#metal-active)"/></svg>
            PRO PLAN
          </div>
          <div style={{position:"relative",fontFamily:"var(--font-fraunces), serif",fontWeight:500,fontSize:"15.5px",lineHeight:1.3,margin:"9px 0 4px", background: "linear-gradient(180deg, #fff, #d1d5db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Go Ultimate for more itineraries</div>
          <div style={{position:"relative",fontSize:"11px",color:"#a5a7ad",lineHeight:1.55}}>500 itineraries / month & priority AI.</div>
          <div style={{position:"relative",display:"flex",justifyContent:"space-between",fontSize:"10px",fontWeight:500,color:"#c6c8cd",margin:"12px 0 6px"}}><span>24 / 100 used</span><span style={{color:"#ffc24d"}}>76 left</span></div>
          <div style={{position:"relative",height:"5px",borderRadius:"99px",background:"rgba(255,255,255,.12)",overflow:"hidden", border: "1px solid rgba(255,255,255,0.05)"}}>
            <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg,#ffc24d,#ff8a5c)",position:"relative",overflow:"hidden", boxShadow: "0 0 10px rgba(255,194,77,0.5)"}}>
              <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)",animation:"shine 2.8s linear infinite"}}></span>
            </div>
          </div>
          <div className="hover-scale" style={{position:"relative",marginTop:"13px",background:"linear-gradient(180deg, #fff, #e5e7eb)",color:"#1d1f24",borderRadius:"10px",padding:"9px",textAlign:"center",fontWeight:600,fontSize:"12.5px",cursor:"pointer",transition:"all .2s", boxShadow: "0 4px 12px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,1)"}}>Upgrade</div>
        </div>
      )}

      {/* Settings Link Below Pro Card */}
      <Link 
        href="/settings" 
        className="group hover:bg-[#f1f5f9] active:scale-95"
        style={{
          position: "relative",
          display:"flex",
          alignItems:"center",
          gap:"11px",
          padding: collapsed ? "12px" : "10px 12px",
          borderRadius:"11px",
          cursor:"pointer",
          fontWeight: isSettings ? 600 : 500,
          fontSize:"13.5px",
          color: isSettings ? '#0f172a' : '#64748b',
          background: isSettings ? '#ffffff' : 'transparent',
          boxShadow: isSettings ? '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
          border: isSettings ? '1px solid #e2e8f0' : '1px solid transparent',
          transition:"all .2s cubic-bezier(0.4, 0, 0.2, 1)",
          justifyContent: collapsed ? "center" : "flex-start",
          textDecoration: "none",
          marginTop: collapsed ? "0" : "8px"
        }}
      >
        {isSettings && !collapsed && (
          <span style={{ position: "absolute", left: "-1px", top: "50%", transform: "translateY(-50%)", width: "4px", height: "16px", background: "#e8543f", borderRadius: "4px", animation: "grow 0.3s ease-out" }} />
        )}
        <div style={{ display: "flex", transform: isSettings ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isSettings ? "#0ea5e9" : "none"} stroke={isSettings ? "#0ea5e9" : "#64748b"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0, transition: "fill 0.2s, stroke 0.2s"}}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
        {!collapsed && <span style={{ transform: isSettings ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>Settings</span>}
      </Link>

      {/* User profile section */}
      <div style={{display:"flex",alignItems:"center",gap:"10px",padding: collapsed ? "12px 0 2px" : "13px 8px 2px", justifyContent: collapsed ? "center" : "flex-start"}}>
        <div style={{width:"38px",height:"38px",flex:"none",borderRadius:"50%",padding:"2px",background:"#fff",boxShadow:"0 2px 8px rgba(84,62,40,.08)"}}>
          <img src="https://api.dicebear.com/9.x/micah/svg?seed=Wanderlust&backgroundColor=b6e3f4" alt="Wanderlust" style={{width:"100%",height:"100%",borderRadius:"50%",background:"#f4f2ec",objectFit:"cover"}} />
        </div>
        {!collapsed && (
          <>
            <div style={{flex:1}}>
              <div style={{fontWeight:500,fontSize:"13px"}}>Wanderlust</div>
              <div style={{fontSize:"10.5px",color:"#a09d92"}}>Pro workspace</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 16 16" style={{cursor:"pointer",opacity:".45"}}><path d="M6 3l5 5-5 5" stroke="#6f6d64" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div data-screen-label="Sidebar" className="hidden lg:flex" style={{width: collapsed ? "80px" : "268px", transition: "width 0.3s ease", flex:"none",background:"#f8fafc",borderRight:"1px solid #f1f5f9",flexDirection:"column",padding: collapsed ? "22px 12px" : "22px 18px",gap:"6px", position: "relative", zIndex: 40}}>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f8fafc] border border-[#f1f5f9] rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-sm z-10 hover:shadow-md transition-shadow"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
        <SidebarContent />
      </div>

      {/* Mobile Floating Hamburger Button — only renders below 1024px */}
      <div className="block lg:hidden" style={{position:"fixed",bottom:"24px",right:"24px",zIndex:50}}>
        <button 
          onClick={() => setMobileOpen(true)}
          style={{width: "52px", height: "52px", borderRadius: "16px", background: "#0f172a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(15,23,42,0.35)", border: "none"}}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer Content */}
          <div 
            className="relative flex flex-col w-[280px] h-full bg-[#f8fafc] shadow-2xl"
            style={{padding: "22px 18px", gap: "6px"}}
          >
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full"
            >
              <X size={20} />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}


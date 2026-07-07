with open('src/components/Sidebar.tsx', 'w') as f:
    f.write("""import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Sidebar({ view, setView }: { view: string, setView: (v: string) => void }) {
  const [collapsed, setCollapsed] = useState(false);
  const isHome = view === 'home';
  const isTrips = view === 'trips' || view === 'detail';
  const isLibrary = view === 'library';
  const isAnalytics = view === 'analytics';
  const isSettings = view === 'settings';

  return (
    <div data-screen-label="Sidebar" style={{width: collapsed ? "80px" : "268px", transition: "width 0.3s ease", flex:"none",background:"rgba(248, 250, 252, 0.7)",backdropFilter:"blur(20px)",borderRight:"1px solid rgba(226, 232, 240, 0.8)",display:"flex",flexDirection:"column",padding: collapsed ? "22px 12px" : "22px 18px",gap:"6px", position: "relative"}}>
      
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 shadow-sm z-10"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "2px 0 18px" : "2px 6px 18px", justifyContent: collapsed ? "center" : "flex-start"}}>
        <span style={{width:"42px",height:"42px",flex:"none",display:"block",filter:"drop-shadow(0 8px 14px rgba(16,185,129,.35))",animation:"bobSm 5s ease-in-out infinite"}}>
          <svg width="42" height="42" viewBox="0 0 42 42"><defs><linearGradient id="klogo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#38bdf8"/><stop offset="1" stopColor="#4f46e5"/></linearGradient></defs><rect x="1" y="1" width="40" height="40" rx="13" fill="url(#klogo)"/><path d="M12 28 L26 13 c1.4-1.5 3.6-1.5 4.4-.6 .9.9.9 3-.6 4.4 L14.9 31z" fill="#fff" opacity=".95"/><circle cx="14" cy="29" r="2.4" fill="#ffd66b"/><ellipse cx="15" cy="9" rx="9" ry="4.5" fill="#fff" opacity=".14"/></svg>
        </span>
        {!collapsed && (
          <div>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"19px",letterSpacing:"-.02em"}}>Kyvari AI</div>
            <div style={{fontSize:"10px",fontWeight:500,color:"#8a90a6",letterSpacing:".18em"}}>TRAVEL STUDIO</div>
          </div>
        )}
      </div>

      {/* primary CTA */}
      <div style={{borderRadius:"15px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 12px 26px rgba(17,24,39,.15)", width: collapsed ? "44px" : "auto", margin: collapsed ? "0 auto" : "0", display: "flex", justifyContent: "center"}}>
        <div onClick={() => setView('home')} className="hover-scale" style={{width: "100%", position:"relative",overflow:"hidden",cursor:"pointer",borderRadius:"13px",padding: collapsed ? "11px" : "11px 16px",background:"#1f2937",color:"#fff",fontWeight:500,fontSize:"14.5px",display:"flex",alignItems:"center",gap:"11px", justifyContent: collapsed ? "center" : "flex-start"}}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{flexShrink: 0}}><rect x="8.6" y="3" width="2.8" height="14" rx="1.4" fill="#fff"/><rect x="3" y="8.6" width="14" height="2.8" rx="1.4" fill="#fff"/></svg>
          {!collapsed && <span>New Itinerary</span>}
          <span style={{position:"absolute",top:0,bottom:0,width:"42px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)",animation:"shine 3.6s ease-in-out infinite"}}></span>
        </div>
      </div>

      <div style={{height:"12px"}}></div>

      <div onClick={() => setView('home')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isHome ? '#14183a' : '#5a6474', background: isHome ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <svg width="26" height="26" viewBox="0 0 26 26" style={{flexShrink: 0}}><defs><linearGradient id="icChat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6b74f8"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs><path d="M4.5 8.5a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v4.6a5 5 0 0 1-5 5h-6l-4.4 3.6c-.7.6-1.6 0-1.6-.8z" fill="url(#icChat)"/><ellipse cx="10.5" cy="7" rx="5" ry="2.3" fill="#fff" opacity=".28"/><circle cx="9.6" cy="11" r="1.25" fill="#fff"/><circle cx="13" cy="11" r="1.25" fill="#fff"/><circle cx="16.4" cy="11" r="1.25" fill="#fff"/></svg>
        {!collapsed && <span>Chats</span>}
        {!collapsed && isHome && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('trips')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isTrips ? '#14183a' : '#5a6474', background: isTrips ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <svg width="26" height="26" viewBox="0 0 26 26" style={{flexShrink: 0}}><defs><radialGradient id="icGlobe" cx=".35" cy=".3" r="1"><stop offset="0" stopColor="#67e8f9"/><stop offset=".55" stopColor="#22b8dd"/><stop offset="1" stopColor="#0e7fb2"/></radialGradient></defs><circle cx="13" cy="13" r="9.5" fill="url(#icGlobe)"/><path d="M5 10c3-2.4 7-2 9.2.2 1.8 1.8 5 2 7.3.6" stroke="#0b6a94" strokeWidth="1.6" fill="none" opacity=".55"/><path d="M4.4 15.5c3.4-1.4 6.8-.4 8.6 1.4 1.5 1.5 4.6 2 8 .4" stroke="#0b6a94" strokeWidth="1.6" fill="none" opacity=".45"/><ellipse cx="10" cy="7.4" rx="5" ry="2.4" fill="#fff" opacity=".35"/><path d="M18.5 4.5l2.8 1.4-1.2 2.9" stroke="#ffd66b" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
        {!collapsed && <span>Trip Itineraries</span>}
        {!collapsed && isTrips && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('library')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isLibrary ? '#14183a' : '#5a6474', background: isLibrary ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <svg width="26" height="26" viewBox="0 0 26 26" style={{flexShrink: 0}}><defs><linearGradient id="icLib" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f59e0b"/><stop offset="1" stopColor="#d97706"/></linearGradient></defs><rect x="4" y="5" width="18" height="16" rx="3" fill="url(#icLib)"/><path d="M4 10h18" stroke="#b45309" strokeWidth="1.5" opacity=".5"/><path d="M10 5v16" stroke="#b45309" strokeWidth="1.5" opacity=".5"/><ellipse cx="9" cy="7.5" rx="3" ry="1.5" fill="#fff" opacity=".3"/></svg>
        {!collapsed && <span>Client Library</span>}
        {!collapsed && isLibrary && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('analytics')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isAnalytics ? '#14183a' : '#5a6474', background: isAnalytics ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <svg width="26" height="26" viewBox="0 0 26 26" style={{flexShrink: 0}}><defs><linearGradient id="icAna" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ec4899"/><stop offset="1" stopColor="#be185d"/></linearGradient></defs><rect x="4" y="14" width="4" height="8" rx="1.5" fill="url(#icAna)"/><rect x="11" y="8" width="4" height="14" rx="1.5" fill="url(#icAna)"/><rect x="18" y="4" width="4" height="18" rx="1.5" fill="url(#icAna)"/><circle cx="13" cy="6" r="2" fill="#fcd34d"/></svg>
        {!collapsed && <span>Analytics</span>}
        {!collapsed && isAnalytics && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div style={{flex:1}}></div>

      <div onClick={() => setView('settings')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isSettings ? '#14183a' : '#5a6474', background: isSettings ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <svg width="26" height="26" viewBox="0 0 26 26" style={{flexShrink: 0}}><defs><linearGradient id="icSet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9aa3b8"/><stop offset="1" stopColor="#68738c"/></linearGradient></defs><rect x="4" y="6.4" width="18" height="2.6" rx="1.3" fill="url(#icSet)" opacity=".55"/><circle cx="10" cy="7.7" r="3" fill="url(#icSet)"/><circle cx="9" cy="6.8" r="1" fill="#fff" opacity=".55"/><rect x="4" y="16.4" width="18" height="2.6" rx="1.3" fill="url(#icSet)" opacity=".55"/><circle cx="17" cy="17.7" r="3" fill="url(#icSet)"/><circle cx="16" cy="16.8" r="1" fill="#fff" opacity=".55"/></svg>
        {!collapsed && <span>Settings</span>}
        {!collapsed && isSettings && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>
      
      {/* Pro plan card */}
      {!collapsed && (
        <div style={{borderRadius:"20px",padding:"1px",background:"linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.1) 100%)",boxShadow:"0 14px 32px rgba(15, 23, 42, 0.25)",marginBottom:"4px"}}>
          <div style={{borderRadius:"19px",background:"#050505",padding:"17px 17px 15px",color:"#fff",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"conic-gradient(from 180deg at 50% 50%, #111 0deg, #333 90deg, #0a0a0a 180deg, #222 270deg, #111 360deg)",opacity:0.8}}></div>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05) 0%, transparent 50%)"}}></div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%)",animation:"borderShine 5s linear infinite"}}></div>
            <span style={{position:"absolute",top:0,left:"-100%",width:"200%",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent)",animation:"shine 4s ease-in-out infinite"}}></span>
            <div style={{position:"relative",display:"flex",alignItems:"center",gap:"8px",fontSize:"10px",fontWeight:500,letterSpacing:".2em",color:"#94a3b8"}}>
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7z" fill="#cbd5e1"/></svg>
              PRO PLAN
            </div>
            <div style={{position:"relative",fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"16px",lineHeight:1.3,margin:"9px 0 4px",color:"#f8fafc"}}>Go Ultimate for more itineraries</div>
            <div style={{position:"relative",fontSize:"11.5px",color:"#94a3b8",lineHeight:1.55,fontWeight:400}}>500 itineraries / month, 28-day trips & priority AI.</div>
            <div style={{position:"relative",display:"flex",justifyContent:"space-between",fontSize:"10.5px",fontWeight:500,color:"#cbd5e1",margin:"13px 0 6px"}}><span>24 / 100 used</span><span style={{color:"#e2e8f0"}}>76 left</span></div>
            <div style={{position:"relative",height:"5px",borderRadius:"99px",background:"rgba(255,255,255,.1)",overflow:"hidden"}}>
              <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg, #475569, #cbd5e1)",position:"relative",overflow:"hidden"}}>
                <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",animation:"shine 2.6s linear infinite"}}></span>
              </div>
            </div>
            <div className="hover-scale" style={{position:"relative",marginTop:"14px",background:"radial-gradient(circle at 15% 50%, #4a4a4a, transparent 45%), radial-gradient(circle at 85% 30%, #2a2a2a, transparent 45%), linear-gradient(135deg, #18181b, #27272a)",color:"#f8fafc",border:"1px solid #52525b",borderRadius:"11px",padding:"10px",textAlign:"center",fontWeight:500,fontSize:"12.5px",cursor:"pointer",overflow:"hidden",boxShadow:"0 6px 16px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15)", animation:"pulseDarkBorder 2.5s infinite"}}>
              Upgrade to Ultimate
              <span style={{position:"absolute",top:0,bottom:0,width:"40px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)",animation:"shine 3s ease-in-out infinite"}}></span>
            </div>
          </div>
        </div>
      )}

      {/* avatar */}
      <div style={{display:"flex",alignItems:"center",gap:"11px",padding: collapsed ? "12px 0 2px" : "13px 6px 2px", justifyContent: collapsed ? "center" : "flex-start"}}>
        <span style={{width:"38px",height:"38px",flex:"none",display:"block"}}>
          <svg width="38" height="38" viewBox="0 0 38 38" style={{flexShrink: 0}}><defs><linearGradient id="avBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffe3c2"/><stop offset="1" stopColor="#ffc7a1"/></linearGradient></defs><circle cx="19" cy="19" r="18" fill="url(#avBg)"/><circle cx="19" cy="19" r="18" fill="none" stroke="#e9ecf4" strokeWidth="1.5"/><path d="M8 17c0-7 5-11 11-11s11 4 11 11c0 1.6-.5 2.6-1 3.2-.6-3.8-2.6-5.4-4.6-5.9-3.4-.9-7.6-.3-10.8 1.4-1.5.8-2.6 2-3.2 4.4C9 19.5 8 18.8 8 17z" fill="#5b4332"/><circle cx="14.5" cy="19.5" r="1.5" fill="#33261d"/><circle cx="23.5" cy="19.5" r="1.5" fill="#33261d"/><path d="M15.5 25c2.2 1.8 4.8 1.8 7 0" stroke="#c96a4a" strokeWidth="1.7" fill="none" strokeLinecap="round"/><circle cx="12" cy="22.8" r="1.7" fill="#ff9d7e" opacity=".5"/><circle cx="26" cy="22.8" r="1.7" fill="#ff9d7e" opacity=".5"/></svg>
        </span>
        {!collapsed && (
          <>
            <div style={{flex:1}}>
              <div style={{fontWeight:500,fontSize:"13.5px"}}>Wanderlust</div>
              <div style={{fontSize:"11px",color:"#8a90a6"}}>Pro workspace</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{cursor:"pointer",opacity:".5"}}><path d="M6 3l5 5-5 5" stroke="#5a6474" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </>
        )}
      </div>
    </div>
  );
}
""")

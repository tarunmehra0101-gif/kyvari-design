with open('src/components/Sidebar.tsx', 'w') as f:
    f.write("""import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Globe, BookOpen, BarChart2, Settings } from 'lucide-react';

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
        <MessageSquare size={22} className={isHome ? "text-indigo-600" : "text-slate-400"} />
        {!collapsed && <span>Chats</span>}
        {!collapsed && isHome && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('trips')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isTrips ? '#14183a' : '#5a6474', background: isTrips ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <Globe size={22} className={isTrips ? "text-indigo-600" : "text-slate-400"} />
        {!collapsed && <span>Trip Itineraries</span>}
        {!collapsed && isTrips && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('library')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isLibrary ? '#14183a' : '#5a6474', background: isLibrary ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <BookOpen size={22} className={isLibrary ? "text-indigo-600" : "text-slate-400"} />
        {!collapsed && <span>Client Library</span>}
        {!collapsed && isLibrary && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div onClick={() => setView('analytics')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isAnalytics ? '#14183a' : '#5a6474', background: isAnalytics ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <BarChart2 size={22} className={isAnalytics ? "text-indigo-600" : "text-slate-400"} />
        {!collapsed && <span>Analytics</span>}
        {!collapsed && isAnalytics && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>

      <div style={{flex:1}}></div>

      <div onClick={() => setView('settings')} className="hover:bg-[#f2f4fb]" style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px" : "10px 12px",borderRadius:"12px",cursor:"pointer",fontWeight:500,fontSize:"14px",color: isSettings ? '#14183a' : '#5a6474', background: isSettings ? '#f2f4fb' : 'transparent', transition:"all .2s", justifyContent: collapsed ? "center" : "flex-start"}}>
        <Settings size={22} className={isSettings ? "text-indigo-600" : "text-slate-400"} />
        {!collapsed && <span>Settings</span>}
        {!collapsed && isSettings && <span style={{marginLeft:"auto",width:"6px",height:"6px",borderRadius:"50%",background:"#14183a"}}></span>}
      </div>
      
      {/* profile pic */}
      <div style={{display:"flex",alignItems:"center",gap:"12px",padding: collapsed ? "12px 0 0" : "12px 8px 0",borderTop:"1px solid rgba(226,232,240,0.8)",marginTop:"8px", justifyContent: collapsed ? "center" : "flex-start"}}>
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" style={{width:"36px",height:"36px",borderRadius:"10px",objectFit:"cover",flex:"none",boxShadow:"0 4px 10px rgba(0,0,0,0.08)"}} alt="User Profile" />
        {!collapsed && (
          <div>
            <div style={{fontWeight:600,fontSize:"13.5px",color:"#14183a"}}>Sarah Jenkins</div>
            <div style={{fontSize:"11px",color:"#8a90a6",marginTop:"2px"}}>PRO AGENT</div>
          </div>
        )}
      </div>
    </div>
  );
}
""")

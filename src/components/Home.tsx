import React from 'react';
import { trips } from '../data';

export function Home({ setView }: { setView: (v: string) => void }) {
  return (
    <div data-screen-label="Home" className="flex flex-col xl:flex-row gap-7 p-6 md:p-8 max-w-[1460px] mx-auto">
      <div className="flex-1 min-w-0 flex flex-col">

        {/* big animated travel scene */}
        <div style={{position:"relative",height:"280px",borderRadius:"26px",overflow:"hidden",background:"#020617",boxShadow:"0 20px 44px rgba(2,6,23,.25)"}}>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="https://storage.googleapis.com/aistudio-assets/video/mountain_landscape.mp4" type="video/mp4" />
          </video>
          
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(2,6,23,1.0) 0%, rgba(2,6,23,0.6) 50%, transparent 100%)"}}></div>
          
          <div style={{position:"absolute",left:"32px",bottom:"28px",color:"#fff"}}>
            <div style={{fontSize:"13px",fontWeight:500,letterSpacing:".22em",textShadow:"0 2px 8px rgba(2,6,23,.6)"}}>TUESDAY · JULY 7</div>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"42px",letterSpacing:"-.02em",textShadow:"0 3px 14px rgba(2,6,23,.6)",marginTop:"8px"}}>Where to today, Wanderlust?</div>
          </div>
        </div>

        <p style={{textAlign:"center",color:"#5a6474",maxWidth:"640px",margin:"28px auto 0",fontSize:"17px",lineHeight:1.7}}>Type a brief, paste a WhatsApp chat, or drop a PDF — Kyvari empowers travel agents to transform offline assets into beautiful, bookable itineraries in seconds.</p>
        
        {/* AI prompt box */}
        <div style={{width:"100%", maxWidth:"920px",margin:"32px auto 0",borderRadius:"28px",padding:"2px",background:"linear-gradient(120deg,#9ca3af,#10b981,#d1d5db,#34d399)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 20px 48px rgba(16,185,129,.15)"}}>
          <div style={{borderRadius:"26px",background:"#fff",display:"flex",alignItems:"center",gap:"16px",padding:"22px 28px"}}>
            <span className="hover:bg-[#d1fae5] hover:rotate-90 transition-all duration-200" style={{width:"44px",height:"44px",flex:"none",borderRadius:"14px",background:"#ecfdf5",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="6.4" y="1.5" width="2.2" height="12" rx="1.1" fill="#059669"/><rect x="1.5" y="6.4" width="12" height="2.2" rx="1.1" fill="#059669"/></svg>
            </span>
            <span style={{flex:1,color:"#8a90a6",fontSize:"18px"}}>Plan a 7-day honeymoon in Santorini for $5k...<span style={{display:"inline-block",width:"2px",height:"22px",background:"#059669",marginLeft:"3px",verticalAlign:"middle",animation:"caret 1.1s step-end infinite"}}></span></span>
            <span className="hover:border-[#10b981]" style={{width:"44px",height:"44px",flex:"none",borderRadius:"50%",border:"2px solid #ecfdf5",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"border-color 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="5.4" y="1" width="4.2" height="8" rx="2.1" fill="#5a6474"/><path d="M3 7.5a4.5 4.5 0 0 0 9 0M7.5 12v2.2" stroke="#5a6474" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </span>
            <span className="hover:scale-110" style={{width:"50px",height:"50px",flex:"none",borderRadius:"50%",background:"#1f2937",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 8px 24px rgba(31,41,55,.25)",transition:"transform 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><path d="M2 7.5h9M8 3.5l4 4-4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>

        {/* suggestion chips w/ custom icons */}
        <div style={{display:"flex",justifyContent:"center",gap:"11px",flexWrap:"wrap",marginTop:"18px"}}>
          <div className="hover:-translate-y-[3px] hover:shadow-[0_12px_22px_rgba(20,24,58,0.12)] transition-all duration-200" style={{display:"flex",alignItems:"center",gap:"9px",background:"#fff",border:"1px solid #e9ecf4",borderRadius:"99px",padding:"8px 15px 8px 9px",fontSize:"13px",fontWeight:400,color:"#3b4258",cursor:"pointer",boxShadow:"0 3px 10px rgba(20,24,58,.05)"}}>
            <svg width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="cPalm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7fe0c3"/><stop offset="1" stopColor="#2ba98c"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="#e8faf3"/><path d="M11 20c.4-4 .8-7 2.4-9.6" stroke="#8a6142" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M13.5 10.5C15 8 18 7.6 20 9c-2.6.2-4.4 1-5.8 2.2zM13.5 10.5C13 7.6 10.6 5.8 8 6.4c2 1.4 3.6 2.6 4.6 4.4zM13.2 10.8C10.8 9.6 7.8 10.4 6.6 12.8c2.4-1 4.6-1.4 6.6-1z" fill="url(#cPalm)"/><ellipse cx="12" cy="20.4" rx="5" ry="1.2" fill="#ffd9a8"/></svg>
            7-day Bali family
          </div>
          <div className="hover:-translate-y-[3px] hover:shadow-[0_12px_22px_rgba(20,24,58,0.12)] transition-all duration-200" style={{display:"flex",alignItems:"center",gap:"9px",background:"#fff",border:"1px solid #e9ecf4",borderRadius:"99px",padding:"8px 15px 8px 9px",fontSize:"13px",fontWeight:400,color:"#3b4258",cursor:"pointer",boxShadow:"0 3px 10px rgba(20,24,58,.05)"}}>
            <svg width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="cTori" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7a6b"/><stop offset="1" stopColor="#e04848"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="#fdeeed"/><path d="M4.5 8c5-1.6 10-1.6 15 0l-.5 2h-14z" fill="url(#cTori)"/><rect x="6.4" y="9.6" width="2" height="9" rx="1" fill="url(#cTori)"/><rect x="15.6" y="9.6" width="2" height="9" rx="1" fill="url(#cTori)"/><rect x="5.6" y="12.4" width="12.8" height="1.7" rx=".85" fill="url(#cTori)"/></svg>
            Tokyo foodie escape
          </div>
          <div className="hover:-translate-y-[3px] hover:shadow-[0_12px_22px_rgba(20,24,58,0.12)] transition-all duration-200" style={{display:"flex",alignItems:"center",gap:"9px",background:"#fff",border:"1px solid #e9ecf4",borderRadius:"99px",padding:"8px 15px 8px 9px",fontSize:"13px",fontWeight:400,color:"#3b4258",cursor:"pointer",boxShadow:"0 3px 10px rgba(20,24,58,.05)"}}>
            <svg width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="cEif" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a78bfa"/><stop offset="1" stopColor="#6d4fd8"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="#f1edfd"/><path d="M12 4c1.4 4.6 3.4 9.6 6.4 15h-2.6c-1-2.4-2.2-4-3.8-4s-2.8 1.6-3.8 4H5.6C8.6 13.6 10.6 8.6 12 4z" fill="url(#cEif)"/><path d="M8.8 13.4h6.4" stroke="#fff" strokeWidth="1.2" opacity=".7"/><circle cx="12" cy="4" r="1" fill="#ffd66b"/></svg>
            Paris romance
          </div>
          <div className="hover:-translate-y-[3px] hover:shadow-[0_12px_22px_rgba(20,24,58,0.12)] transition-all duration-200" style={{display:"flex",alignItems:"center",gap:"9px",background:"#fff",border:"1px solid #e9ecf4",borderRadius:"99px",padding:"8px 15px 8px 9px",fontSize:"13px",fontWeight:400,color:"#3b4258",cursor:"pointer",boxShadow:"0 3px 10px rgba(20,24,58,.05)"}}>
            <svg width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="cAlp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7c89f0"/><stop offset="1" stopColor="#4a55b8"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="#edf0fd"/><path d="M4 18L10 7l4 7 2-3 4 7z" fill="url(#cAlp)"/><path d="M10 7l2 3.6L10.6 12 9 10.4z" fill="#fff" opacity=".9"/><path d="M16 11l1.2 2-1 1-1-1.4z" fill="#fff" opacity=".85"/></svg>
            Swiss mountain retreat
          </div>
        </div>

        {/* Kyvari Spark: orb with vibrating rings */}
        <div style={{background:"#fff",border:"1px solid #eef0f7",borderRadius:"20px",padding:"17px",boxShadow:"0 5px 16px rgba(20,24,58,.05)",marginTop:"24px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{position:"relative",width:"40px",height:"40px",flex:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{position:"absolute",width:"40px",height:"40px",borderRadius:"50%",border:"1.5px solid rgba(14,165,233,.5)",animation:"ringVibe 2.4s ease-out infinite",display:"block"}}></span>
              <span style={{position:"absolute",width:"40px",height:"40px",borderRadius:"50%",border:"1.5px solid rgba(79,70,229,.45)",animation:"ringVibe 2.4s ease-out .8s infinite",display:"block"}}></span>
              <span style={{position:"absolute",width:"40px",height:"40px",borderRadius:"50%",border:"1.5px solid rgba(99,102,241,.4)",animation:"ringVibe 2.4s ease-out 1.6s infinite",display:"block"}}></span>
              <span style={{width:"22px",height:"22px",borderRadius:"50%",background:"radial-gradient(circle at 32% 30%,#e0f2fe,#0ea5c9 60%,#1e3a8a)",boxShadow:"0 4px 12px rgba(14,165,233,.5)",position:"relative",display:"block"}}></span>
            </span>
            <div style={{fontSize:"10.5px",fontWeight:500,letterSpacing:".18em",color:"#0ea5c9"}}>KYVARI SPARK</div>
          </div>
          <div style={{fontSize:"13px",lineHeight:1.6,color:"#3b4258",marginTop:"11px",fontWeight:500}}>Clients open itineraries <b>3× more</b> when the first day leads with a flight card. Try opening with arrivals.</div>
        </div>

        {/* Jump back in */}
        <div style={{marginTop:"32px"}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:"16px"}}>
            <h2 style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"22px",letterSpacing:"-.02em",margin:0}}>Jump back in</h2>
            <span onClick={() => setView('trips')} className="hover:text-[#14183a] transition-colors" style={{fontSize:"13px",fontWeight:500,color:"#4f5de4",cursor:"pointer"}}>See all →</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"}}>
            {trips.slice(0, 4).map((t, i) => (
              <div key={i} onClick={() => setView('detail')} className="hover:-translate-y-[5px] hover:shadow-[0_18px_34px_rgba(20,24,58,0.13)] transition-all duration-200" style={{background:"#fff",borderRadius:"18px",overflow:"hidden",cursor:"pointer",boxShadow:"0 5px 16px rgba(20,24,58,.06)",border:"1px solid #eef0f7"}}>
                <div style={{position:"relative",height:"120px",backgroundImage:`url(${t.image})`,backgroundSize:"cover",backgroundPosition:"center",overflow:"hidden"}}>
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)"}}></div>
                  <div style={{position:"absolute",bottom:"8px",left:"12px",right:"12px",fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"14px",lineHeight:1.2,color:"#fff",textShadow:"0 2px 6px rgba(0,0,0,0.5)"}}>{t.short}</div>
                </div>
                <div style={{padding:"10px 12px 12px"}}>
                  <div style={{fontSize:"11.5px",color:"#8a90a6",fontWeight:400}}>{t.city} · {t.dates}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right rail */}
      <div className="w-full xl:w-[300px] flex-none flex flex-col gap-4 xl:pt-1">
        <h3 style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"18px",margin:"0 0 2px"}}>Your week</h3>

        <div className="hover:translate-x-[4px] transition-transform duration-200" style={{background:"#fff",border:"1px solid #eef0f7",borderRadius:"18px",padding:"15px 17px",display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 5px 16px rgba(20,24,58,.05)"}}>
          <div style={{width:"44px",height:"44px",background:"#eef1ff",borderRadius:"14px",boxShadow:"inset 2px 4px 6px rgba(255,255,255,1), inset -2px -4px 6px rgba(107,116,248,0.2), 0 8px 12px rgba(107,116,248,0.15)",display:"flex",alignItems:"center",justifyContent:"center",animation:"clayMorph 8s ease-in-out infinite, floatClay 6s ease-in-out infinite"}}>
            <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "floatPlane 3s ease-in-out infinite", filter: "drop-shadow(0 4px 6px rgba(67,56,202,0.35))"}}>
              <defs>
                <radialGradient id="planeGrad1" cx="0.3" cy="0.2" r="0.8">
                  <stop offset="0" stopColor="#a5b4fc" />
                  <stop offset="1" stopColor="#4f46e5" />
                </radialGradient>
                <radialGradient id="planeGrad2" cx="0.5" cy="0.2" r="0.8">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#c7d2fe" />
                </radialGradient>
              </defs>
              <path d="M26.5 7.5 C 28.5 5.5, 29 4, 28 3 C 27 2, 25.5 2.5, 23.5 4.5 L 14 14 L 5 13 L 2 16 L 10 19 L 12 27 L 15 24 L 14 16 L 26.5 7.5 Z" fill="url(#planeGrad2)" />
              <path d="M 23 10 L 16 27 L 10 19 Z" fill="url(#planeGrad1)" />
              <path d="M 23.5 8 L 8 20 L 10 19 Z" fill="url(#planeGrad1)" opacity="0.6"/>
            </svg>
          </div>
          <div style={{flex:"none"}}>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"22px"}}>15</div>
            <div style={{fontSize:"10px",fontWeight:500,color:"#8a90a6",letterSpacing:".05em"}}>TRIPS CRAFTED</div>
          </div>
          <div style={{flex:1, position:"relative", height:"40px", marginLeft:"8px", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
            <svg width="80" height="40" viewBox="0 0 80 40" style={{position:"absolute", right:"10px", top:"0", zIndex:0}}>
               <defs>
                 <linearGradient id="spark1" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#1f7a5c" stopOpacity="0.25"/>
                   <stop offset="100%" stopColor="#1f7a5c" stopOpacity="0"/>
                 </linearGradient>
               </defs>
               <path d="M 0 28 C 10 28, 15 15, 25 15 C 35 15, 40 30, 50 30 C 60 30, 65 10, 80 5 L 80 40 L 0 40 Z" fill="url(#spark1)" />
               <path d="M 0 28 C 10 28, 15 15, 25 15 C 35 15, 40 30, 50 30 C 60 30, 65 10, 80 5" fill="none" stroke="#1f7a5c" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{position:"relative", zIndex:2, fontSize:"11.5px",fontWeight:500,color:"#1f7a5c",background:"#e7f6ef",borderRadius:"99px",padding:"4px 9px",boxShadow:"0 2px 8px rgba(31,122,92,0.15)"}}>+4</span>
          </div>
        </div>

        <div className="hover:translate-x-[4px] transition-transform duration-200" style={{background:"#fff",border:"1px solid #eef0f7",borderRadius:"18px",padding:"15px 17px",display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 5px 16px rgba(20,24,58,.05)"}}>
          <div style={{width:"44px",height:"44px",background:"#e6f9fd",borderRadius:"14px",boxShadow:"inset 2px 4px 6px rgba(255,255,255,1), inset -2px -4px 6px rgba(14,165,201,0.2), 0 8px 12px rgba(14,165,201,0.15)",display:"flex",alignItems:"center",justifyContent:"center",animation:"clayMorph 7s ease-in-out infinite 1s, floatClay 5s ease-in-out infinite 1s"}}>
            <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "blinkEye 4s ease-in-out infinite", filter: "drop-shadow(0 4px 6px rgba(14,165,201,0.35))"}}>
              <defs>
                <radialGradient id="eyeGrad1" cx="0.5" cy="0.3" r="0.7">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#67e8f9" />
                </radialGradient>
                <radialGradient id="eyeGrad2" cx="0.4" cy="0.4" r="0.5">
                  <stop offset="0" stopColor="#0891b2" />
                  <stop offset="1" stopColor="#164e63" />
                </radialGradient>
                <radialGradient id="eyeGrad3" cx="0.4" cy="0.4" r="0.5">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#cbd5e1" />
                </radialGradient>
              </defs>
              <path d="M 2 16 C 8 8, 24 8, 30 16 C 24 24, 8 24, 2 16 Z" fill="url(#eyeGrad3)" />
              <circle cx="16" cy="16" r="7" fill="url(#eyeGrad2)" />
              <circle cx="15" cy="14" r="2.5" fill="#ffffff" />
              <circle cx="17.5" cy="17" r="1" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
          <div style={{flex:"none"}}>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"22px"}}>128</div>
            <div style={{fontSize:"10px",fontWeight:500,color:"#8a90a6",letterSpacing:".05em"}}>CLIENT VIEWS</div>
          </div>
          <div style={{flex:1, position:"relative", height:"40px", marginLeft:"8px", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
            <svg width="80" height="40" viewBox="0 0 80 40" style={{position:"absolute", right:"10px", top:"0", zIndex:0}}>
               <defs>
                 <linearGradient id="spark2" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#1f7a5c" stopOpacity="0.25"/>
                   <stop offset="100%" stopColor="#1f7a5c" stopOpacity="0"/>
                 </linearGradient>
               </defs>
               <path d="M 0 32 C 10 32, 15 20, 25 20 C 35 20, 40 32, 50 32 C 60 32, 65 14, 80 8 L 80 40 L 0 40 Z" fill="url(#spark2)" />
               <path d="M 0 32 C 10 32, 15 20, 25 20 C 35 20, 40 32, 50 32 C 60 32, 65 14, 80 8" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{position:"relative", zIndex:2, fontSize:"11.5px",fontWeight:500,color:"#1f7a5c",background:"#e7f6ef",borderRadius:"99px",padding:"4px 9px",boxShadow:"0 2px 8px rgba(31,122,92,0.15)"}}>+31</span>
          </div>
        </div>

        <div className="hover:translate-x-[4px] transition-transform duration-200" style={{background:"#fff",border:"1px solid #eef0f7",borderRadius:"18px",padding:"15px 17px",display:"flex",alignItems:"center",gap:"14px",boxShadow:"0 5px 16px rgba(20,24,58,.05)"}}>
          <div style={{width:"44px",height:"44px",background:"#fdf1e4",borderRadius:"14px",boxShadow:"inset 2px 4px 6px rgba(255,255,255,1), inset -2px -4px 6px rgba(240,165,76,0.2), 0 8px 12px rgba(240,165,76,0.15)",display:"flex",alignItems:"center",justifyContent:"center",animation:"clayMorph 9s ease-in-out infinite 2s, floatClay 7s ease-in-out infinite 2s"}}>
            <svg width="24" height="24" viewBox="0 0 32 32" style={{animation: "spinHourglass 4s ease-in-out infinite", filter: "drop-shadow(0 4px 6px rgba(234,88,12,0.35))"}}>
              <defs>
                <linearGradient id="hgGlass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffedd5" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#fdba74" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="hgSand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f97316" />
                  <stop offset="1" stopColor="#c2410c" />
                </linearGradient>
                <linearGradient id="hgWood" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#9a3412" />
                  <stop offset="1" stopColor="#431407" />
                </linearGradient>
              </defs>
              <path d="M 8 6 L 24 6 L 19 16 L 24 26 L 8 26 L 13 16 Z" fill="url(#hgGlass)" />
              <path d="M 11 20 L 21 20 L 24 25 L 8 25 Z" fill="url(#hgSand)" />
              <path d="M 11 11 L 21 11 L 19 16 L 13 16 Z" fill="url(#hgSand)" />
              <rect x="6" y="2" width="20" height="4" rx="2" fill="url(#hgWood)" />
              <rect x="6" y="26" width="20" height="4" rx="2" fill="url(#hgWood)" />
            </svg>
          </div>
          <div style={{flex:"none"}}>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"22px"}}>4m 12s</div>
            <div style={{fontSize:"10px",fontWeight:500,color:"#8a90a6",letterSpacing:".05em"}}>AVG. DWELL TIME</div>
          </div>
          <div style={{flex:1, position:"relative", height:"40px", marginLeft:"8px", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
            <svg width="80" height="40" viewBox="0 0 80 40" style={{position:"absolute", right:"10px", top:"0", zIndex:0}}>
               <defs>
                 <linearGradient id="spark3" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#9a6216" stopOpacity="0.25"/>
                   <stop offset="100%" stopColor="#9a6216" stopOpacity="0"/>
                 </linearGradient>
               </defs>
               <path d="M 0 25 C 10 25, 15 35, 25 35 C 35 35, 40 15, 50 15 C 60 15, 65 5, 80 5 L 80 40 L 0 40 Z" fill="url(#spark3)" />
               <path d="M 0 25 C 10 25, 15 35, 25 35 C 35 35, 40 15, 50 15 C 60 15, 65 5, 80 5" fill="none" stroke="#9a6216" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{position:"relative", zIndex:2, fontSize:"11.5px",fontWeight:500,color:"#9a6216",background:"#fbf1df",borderRadius:"99px",padding:"4px 9px",boxShadow:"0 2px 8px rgba(154,98,22,0.15)"}}>+18%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

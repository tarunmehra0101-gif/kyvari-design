import React, { useState } from 'react';

export function PlaceDrawer({ place, closeDrawer }: { place: any, closeDrawer: () => void }) {
  const [tab, setTab] = useState('overview');

  const drawerTabs = ['overview', 'photos', 'reviews', 'location'].map(k => ({
    label: k.charAt(0).toUpperCase() + k.slice(1),
    select: () => setTab(k),
    bg: tab === k ? 'linear-gradient(140deg,#14183a,#3a2e7e)' : '#fff',
    color: tab === k ? '#fff' : '#5a6474',
    border: tab === k ? 'transparent' : '#eef0f7'
  }));

  const isSunny = true;
  const isRainy = false;

  const ratingBars = [
    { star: '5', pct: '72%' }, { star: '4', pct: '19%' }, { star: '3', pct: '6%' }, { star: '2', pct: '2%' }, { star: '1', pct: '1%' }
  ];

  return (
    <>
      <div onClick={closeDrawer} style={{position:"fixed",inset:0,background:"rgba(15,20,45,.4)",backdropFilter:"blur(5px)",zIndex:40}}></div>
      <div data-screen-label="Place Drawer" style={{position:"fixed",top:0,right:0,bottom:0,width:"530px",maxWidth:"92vw",background:"#f7f9fd",zIndex:50,boxShadow:"-24px 0 60px rgba(20,24,58,.25)",animation:"drawerIn .35s cubic-bezier(.2,.8,.25,1) both",display:"flex",flexDirection:"column"}}>
        
        <div style={{position:"relative",height:"190px",flex:"none",background:place.sky,overflow:"hidden"}}>
          <span style={{position:"absolute",top:"24px",left:"36px",width:"44px",height:"44px",borderRadius:"50%",boxShadow:`inset -11px 6px 0px 0px ${place.sun}, 0 0 35px rgba(255,255,255,0.3)`,animation:"sunPulse 4s ease-in-out infinite"}}></span>
          <span style={{position:"absolute",bottom:"-10px",left:"-24px",width:"60%",height:"110px",background:place.m1,clipPath:"polygon(50% 0,0 100%,100% 100%)"}}></span>
          <span style={{position:"absolute",bottom:"-10px",right:"-30px",width:"58%",height:"88px",background:place.m2,clipPath:"polygon(50% 0,0 100%,100% 100%)"}}></span>
          <span style={{position:"absolute",top:"36px",left:"42%",width:"56px",height:"14px",borderRadius:"99px",background:"rgba(255,255,255,.6)",filter:"blur(1px)",animation:"cloudDrift 8s ease-in-out infinite"}}></span>
          <span style={{position:"absolute",top:"14px",left:"16px",borderRadius:"99px",padding:"6px 14px",background:place.catGrad,color:"#fff",fontSize:"11px",fontWeight:500,letterSpacing:".08em",boxShadow:"0 6px 14px rgba(20,24,58,.2)"}}>{place.cat}</span>
          <span onClick={closeDrawer} className="hover:rotate-90 transition-transform duration-200" style={{position:"absolute",top:"12px",right:"14px",width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255,255,255,.92)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"14px",color:"#14183a"}}>✕</span>

          <div style={{position:"absolute",bottom:"14px",right:"14px",borderRadius:"16px",background:"rgba(255,255,255,.9)",backdropFilter:"blur(8px)",padding:"9px 14px",display:"flex",alignItems:"center",gap:"10px",boxShadow:"0 8px 20px rgba(20,24,58,.15)"}}>
            {isSunny && (
              <>
                <span style={{position:"relative",width:"26px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{position:"absolute",width:"24px",height:"24px",background:"#fde047",clipPath:"polygon(50% 0,63% 37%,100% 50%,63% 63%,50% 100%,37% 63%,0 50%,37% 37%)",animation:"spinSlow 8s linear infinite",display:"block"}}></span>
                  <span style={{width:"13px",height:"13px",borderRadius:"50%",background:"linear-gradient(#fbbf24,#f59e0b)",position:"relative",animation:"sunPulse 2.4s ease-in-out infinite",display:"block"}}></span>
                </span>
                <span><b style={{fontSize:"14px",color:"#14183a"}}>18°</b> <span style={{fontSize:"10.5px",fontWeight:500,color:"#8a90a6"}}>CLEAR · PARO</span></span>
              </>
            )}
            {isRainy && (
              <>
                <span style={{position:"relative",width:"28px",height:"26px",display:"block"}}>
                  <span style={{position:"absolute",top:"2px",left:"2px",width:"22px",height:"12px",borderRadius:"99px",background:"#94a3b8",display:"block"}}></span>
                  <span style={{position:"absolute",top:"-1px",left:"8px",width:"13px",height:"13px",borderRadius:"50%",background:"#94a3b8",display:"block"}}></span>
                  <span style={{position:"absolute",bottom:0,left:"6px",width:"2.5px",height:"7px",borderRadius:"2px",background:"#38bdf8",animation:"drop 1.2s linear infinite",display:"block"}}></span>
                  <span style={{position:"absolute",bottom:0,left:"13px",width:"2.5px",height:"7px",borderRadius:"2px",background:"#38bdf8",animation:"drop 1.2s linear .4s infinite",display:"block"}}></span>
                  <span style={{position:"absolute",bottom:0,left:"20px",width:"2.5px",height:"7px",borderRadius:"2px",background:"#38bdf8",animation:"drop 1.2s linear .8s infinite",display:"block"}}></span>
                </span>
                <span><b style={{fontSize:"14px",color:"#14183a"}}>14°</b> <span style={{fontSize:"10.5px",fontWeight:500,color:"#8a90a6"}}>MONSOON · PARO</span></span>
              </>
            )}
          </div>
        </div>

        <div style={{padding:"18px 24px 0",flex:"none"}}>
          <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"22px",lineHeight:1.25,letterSpacing:"-.02em",color:"#14183a"}}>{place.name}</div>
          <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"8px",flexWrap:"wrap"}}>
            <span style={{position:"relative",fontSize:"14px",letterSpacing:"2px",color:"#e2e8f0"}}>★★★★★<span style={{position:"absolute",left:0,top:0,overflow:"hidden",whiteSpace:"nowrap",color:"#f59e0b",width:place.ratingPct}}>★★★★★</span></span>
            <span style={{fontWeight:500,fontSize:"13.5px",color:"#14183a"}}>{place.rating}</span>
            <span style={{fontSize:"12px",fontWeight:400,color:"#8a90a6"}}>{place.reviews} reviews · Google</span>
          </div>
          <div style={{fontSize:"12.5px",color:"#5a6474",fontWeight:400,marginTop:"6px"}}>◉ {place.address}</div>

          <div style={{display:"flex",gap:"8px",marginTop:"14px"}}>
            {drawerTabs.map((tb, i) => (
              <span key={i} onClick={tb.select} className="hover:-translate-y-[2px] transition-all duration-200" style={{borderRadius:"99px",padding:"8px 16px",fontSize:"12.5px",fontWeight:500,cursor:"pointer",background:tb.bg,color:tb.color,border:`1.5px solid ${tb.border}`}}>{tb.label}</span>
            ))}
          </div>
        </div>

        <div style={{flex:1,overflowY:"auto",padding:"18px 24px 24px"}}>
          {tab === 'overview' && (
            <div style={{animation:"fadeUp .3s ease-out both"}}>
              <div style={{fontSize:"13.5px",lineHeight:1.7,color:"#5a6474"}}>{place.about}</div>

              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"17px",margin:"20px 0 14px",color:"#14183a"}}>Highlights</div>
              <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                {place.highlights.map((h: any, i: number) => {
                  return (
                  <div key={i} className="hover:-translate-y-[2px] transition-all duration-200" style={{display:"flex",gap:"16px",alignItems:"center",background:"#fff",borderRadius:"16px",padding:"14px 18px",boxShadow:"0 6px 16px rgba(20,24,58,.04)"}}>
                    <span style={{width:"36px",height:"36px",flex:"none",borderRadius:"12px",background:h.grad,boxShadow:`inset 3px 3px 6px rgba(255,255,255,0.35), inset -2px -3px 6px rgba(0,0,0,0.15), 0 8px 16px ${h.shadow}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px"}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    </span>
                    <span style={{fontSize:"13.5px",fontWeight:400,color:"#1e293b",lineHeight:1.5}}>{h.t}</span>
                  </div>
                  );
                })}
              </div>

              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"17px",margin:"24px 0 14px",color:"#14183a"}}>Good to know</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                {place.facts.map((f: any, i: number) => {
                  const grads = ['linear-gradient(90deg,#8b5cf6,#3b82f6)', 'linear-gradient(90deg,#14b8a6,#06b6d4)', 'linear-gradient(90deg,#f97316,#ef4444)', 'linear-gradient(90deg,#d946ef,#8b5cf6)'];
                  return (
                    <div key={i} className="hover:-translate-y-[2px] transition-all duration-200" style={{background:"#fff",borderRadius:"14px",padding:"16px 18px",boxShadow:"0 6px 16px rgba(20,24,58,.04)",position:"relative",overflow:"hidden",display:"flex",gap:"12px",alignItems:"center"}}>
                      <div style={{position:"absolute",top:0,left:0,right:0,height:"3px",background:grads[i % grads.length]}}></div>
                      <div style={{fontSize:"24px"}}>{f.glyph}</div>
                      <div>
                        <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".15em",color:"#8a90a6",textTransform:"uppercase"}}>{f.label}</div>
                        <div style={{fontSize:"13.5px",fontWeight:500,color:"#1e293b",marginTop:"4px",lineHeight:1.4}}>{f.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"17px",margin:"24px 0 14px",color:"#14183a"}}>Practical details</div>
              {isSunny && (
                <div style={{borderRadius:"16px",background:"#fff",boxShadow:"0 6px 16px rgba(20,24,58,.04)",overflow:"hidden",marginBottom:"12px"}}>
                  <div style={{height:"84px",background:"linear-gradient(170deg,#93c5fd 0%,#fde68a 100%)",position:"relative",overflow:"hidden"}}>
                    <div style={{position:"absolute",top:"18px",left:"22px",width:"26px",height:"26px",borderRadius:"50%",background:"radial-gradient(circle at 30% 30%,#fff4cc,#ffc24d 55%,#f59e0b)",boxShadow:"0 4px 12px rgba(245,158,11,0.3)",animation:"spinSlow 10s linear infinite"}}></div>
                    <div style={{position:"absolute",top:"30px",left:"100px",width:"46px",height:"11px",borderRadius:"99px",background:"rgba(255,255,255,0.9)",filter:"blur(0.5px)"}}></div>
                    <div style={{position:"absolute",bottom:0,right:"-20px",width:"0",height:"0",borderLeft:"80px solid transparent",borderRight:"80px solid transparent",borderBottom:"45px solid #a8b0c4"}}></div>
                    <div style={{position:"absolute",bottom:0,right:"50px",width:"0",height:"0",borderLeft:"100px solid transparent",borderRight:"100px solid transparent",borderBottom:"35px solid #8c96ac"}}></div>
                    <div style={{position:"absolute",top:"16px",right:"18px",color:"#fff",fontSize:"22px",fontWeight:500,textShadow:"0 2px 6px rgba(0,0,0,0.15)"}}>18°</div>
                  </div>
                  <div style={{padding:"16px 18px"}}>
                    <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".15em",color:"#64748b",textTransform:"uppercase"}}>WEATHER · {place.weatherWhen}</div>
                    <div style={{fontSize:"13.5px",fontWeight:400,color:"#1e293b",lineHeight:1.55,marginTop:"6px"}}>{place.weatherSunny}</div>
                  </div>
                </div>
              )}
              {isRainy && (
                <div style={{borderRadius:"16px",background:"#fff",boxShadow:"0 6px 16px rgba(20,24,58,.04)",overflow:"hidden",marginBottom:"12px"}}>
                  <div style={{height:"84px",background:"linear-gradient(170deg,#64748b 0%,#cbd5e1 100%)",position:"relative",overflow:"hidden"}}>
                    <span style={{position:"absolute",top:"20px",left:"20px",width:"44px",height:"22px",borderRadius:"99px",background:"#94a3b8",display:"block"}}></span>
                    <span style={{position:"absolute",top:"14px",left:"32px",width:"24px",height:"24px",borderRadius:"50%",background:"#94a3b8",display:"block"}}></span>
                    <span style={{position:"absolute",bottom:"16px",left:"28px",width:"3px",height:"12px",borderRadius:"2px",background:"#e0f2fe",animation:"drop 1.2s linear infinite",display:"block"}}></span>
                    <span style={{position:"absolute",bottom:"16px",left:"40px",width:"3px",height:"12px",borderRadius:"2px",background:"#e0f2fe",animation:"drop 1.2s linear .4s infinite",display:"block"}}></span>
                    <span style={{position:"absolute",bottom:"16px",left:"52px",width:"3px",height:"12px",borderRadius:"2px",background:"#e0f2fe",animation:"drop 1.2s linear .8s infinite",display:"block"}}></span>
                    <div style={{position:"absolute",top:"16px",right:"18px",color:"#fff",fontSize:"22px",fontWeight:500,textShadow:"0 2px 6px rgba(0,0,0,0.15)"}}>14°</div>
                  </div>
                  <div style={{padding:"16px 18px"}}>
                    <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".15em",color:"#64748b",textTransform:"uppercase"}}>WEATHER · {place.weatherWhen}</div>
                    <div style={{fontSize:"13.5px",fontWeight:400,color:"#1e293b",lineHeight:1.55,marginTop:"6px"}}>{place.weatherRainy}</div>
                  </div>
                </div>
              )}

              <div style={{borderRadius:"16px",background:"#fffbeb",padding:"0",display:"flex",flexDirection:"column",boxShadow:"0 6px 16px rgba(20,24,58,.04)",border:"1px solid #fef3c7",overflow:"hidden"}}>
                <div style={{height:"90px",background:"linear-gradient(170deg,#fcd34d 0%,#fbbf24 100%)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
                  {/* Animated Suitcase Base */}
                  <div style={{position:"relative",width:"50px",height:"34px",background:"#b45309",borderRadius:"6px",boxShadow:"0 8px 16px rgba(180,83,9,0.3)",animation:"suitcasePack 4s ease-in-out infinite",zIndex:2}}>
                    <div style={{position:"absolute",top:"-6px",left:"14px",width:"22px",height:"6px",border:"3px solid #78350f",borderBottom:"none",borderRadius:"4px 4px 0 0"}}></div>
                    <div style={{position:"absolute",top:"16px",left:"0",right:"0",height:"2px",background:"#78350f"}}></div>
                    <div style={{position:"absolute",top:"14px",left:"0",width:"12px",height:"6px",background:"#fcd34d",borderRadius:"2px",animation:"suitcaseZip 4s ease-in-out infinite"}}></div>
                  </div>
                  {/* Items dropping in */}
                  <div style={{position:"absolute",top:"15px",fontSize:"20px",animation:"itemDrop 4s ease-in-out infinite",animationDelay:"0.2s"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:"drop-shadow(0 4px 6px rgba(217,119,6,0.3))"}}><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div style={{position:"absolute",top:"15px",left:"40%",fontSize:"20px",animation:"itemDrop 4s ease-in-out infinite",animationDelay:"0.8s"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:"drop-shadow(0 4px 6px rgba(234,88,12,0.3))"}}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <div style={{position:"absolute",top:"15px",right:"40%",fontSize:"20px",animation:"itemDrop 4s ease-in-out infinite",animationDelay:"1.4s"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:"drop-shadow(0 4px 6px rgba(180,83,9,0.3))"}}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                  </div>
                </div>
                <div style={{padding:"16px 18px"}}>
                  <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".15em",color:"#b45309"}}>WHAT TO PACK</div>
                  <div style={{fontSize:"13.5px",fontWeight:400,color:"#78350f",lineHeight:1.55,marginTop:"6px"}}>{place.pack}</div>
                  <div style={{display:"flex",gap:"8px",marginTop:"12px",flexWrap:"wrap"}}>
                    {['Fleece', 'Warm socks', 'Book for the fire'].map((chip, i) => (
                      <span key={i} style={{padding:"5px 12px",borderRadius:"99px",border:"1px solid #fcd34d",fontSize:"11.5px",fontWeight:500,color:"#b45309"}}>{chip}</span>
                    ))}
                  </div>
                </div>
              </div>

              {place.local && (
                <div style={{borderRadius:"16px",background:"#dcfce7",padding:"14px 16px",display:"flex",gap:"14px",alignItems:"center",marginTop:"12px",boxShadow:"0 4px 16px rgba(34,197,94,0.15)",border:"1px solid #bbf7d0"}}>
                  <span style={{width:"44px",height:"44px",flex:"none",borderRadius:"50%",background:"#fed7aa",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",boxShadow:"inset 0 -4px 6px rgba(0,0,0,0.1)",fontSize:"24px"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{filter:"drop-shadow(0 4px 6px rgba(234,88,12,0.3))"}}><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17a4.5 4.5 0 0 0 7-3"/></svg>
                  </span>
                  <div>
                    <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".15em",color:"#166534",textTransform:"uppercase"}}>LOCAL TIP · FROM A PARO LOCAL</div>
                    <div style={{fontSize:"13.5px",fontWeight:400,color:"#14532d",lineHeight:1.55,marginTop:"4px"}}>{place.local}</div>
                  </div>
                </div>
              )}

              {place.insider && (
                <div style={{marginTop:"12px",position:"relative",overflow:"hidden",borderRadius:"18px",background:"linear-gradient(160deg,#1e1b4b 0%,#2e1065 60%,#3b0764 100%)",padding:"15px 16px",boxShadow:"0 10px 26px rgba(11,14,32,.3)"}}>
                  <span style={{position:"absolute",top:"10px",right:"20px",width:"4px",height:"4px",borderRadius:"50%",background:"#fff",animation:"twinkle 2s ease-in-out infinite"}}></span>
                  <span style={{position:"absolute",top:"26px",right:"56px",width:"3px",height:"3px",borderRadius:"50%",background:"#fff",animation:"twinkle 2.6s ease-in-out .6s infinite"}}></span>
                  <span style={{position:"absolute",bottom:"14px",right:"34px",width:"3px",height:"3px",borderRadius:"50%",background:"#fff",animation:"twinkle 2.2s ease-in-out 1.1s infinite"}}></span>
                  <span style={{position:"absolute",top:"12px",right:"24px",width:"26px",height:"26px",borderRadius:"50%",background:"radial-gradient(circle at 38% 34%,#fde047,#fef08a)",display:"block"}}></span>
                  <span style={{position:"absolute",top:"9px",right:"28px",width:"21px",height:"21px",borderRadius:"50%",background:"#1e1b4b",display:"block"}}></span>
                  <div style={{display:"flex",gap:"13px",alignItems:"center",position:"relative"}}>
                    <span style={{width:"34px",height:"34px",flex:"none",borderRadius:"50%",background:"rgba(253,224,71,.14)",border:"1px solid rgba(253,224,71,.3)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1l1.8 4.4L14 7l-4.2 1.6L8 13 6.2 8.6 2 7l4.2-1.6z" fill="#fde047"/></svg>
                    </span>
                    <div>
                      <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".16em",color:"#fde047"}}>INSIDER SECRET</div>
                      <div style={{fontSize:"13.5px",fontWeight:500,color:"#e2e8f0",lineHeight:1.6,marginTop:"5px"}}>{place.insider}</div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{marginTop:"18px",borderRadius:"20px",padding:"1.5px",background:"linear-gradient(120deg,#8b5cf6,#3b82f6,#8b5cf6)",backgroundSize:"200% 100%",animation:"gradShift 5s linear infinite",boxShadow:"0 16px 36px rgba(43,33,102,.3)"}}>
                <div style={{position:"relative",overflow:"hidden",borderRadius:"18.5px",background:"linear-gradient(155deg,#0f172a 0%,#1e1b4b 60%,#312e81 100%)",padding:"20px"}}>
                  <span style={{position:"absolute",top:"-44px",right:"-30px",width:"160px",height:"160px",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,.4),transparent 68%)",animation:"aurora 7s ease-in-out infinite"}}></span>
                  <span style={{position:"absolute",bottom:"-56px",left:"-24px",width:"140px",height:"140px",borderRadius:"50%",background:"radial-gradient(circle,rgba(59,130,246,.3),transparent 68%)",animation:"aurora 9s ease-in-out 1.4s infinite"}}></span>
                  <div style={{position:"relative",display:"flex",alignItems:"center",gap:"11px"}}>
                    <span style={{position:"relative",width:"36px",height:"36px",flex:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{position:"absolute",width:"36px",height:"36px",borderRadius:"50%",border:"1.5px solid rgba(199,191,255,.5)",animation:"ringVibe 2.4s ease-out infinite",display:"block"}}></span>
                      <span style={{position:"absolute",width:"36px",height:"36px",borderRadius:"50%",border:"1.5px solid rgba(143,227,255,.4)",animation:"ringVibe 2.4s ease-out 1.2s infinite",display:"block"}}></span>
                      <span style={{width:"19px",height:"19px",borderRadius:"50%",background:"radial-gradient(circle at 32% 30%,#e6e0ff,#8b5cf6 60%,#4c3a9e)",boxShadow:"0 0 16px rgba(139,92,246,.8)",position:"relative",display:"block"}}></span>
                    </span>
                    <span style={{fontSize:"11px",fontWeight:500,letterSpacing:".2em",color:"#e2e8f0"}}>WHY KYVARI PICKED THIS</span>
                  </div>
                  <div style={{position:"relative",fontSize:"14px",lineHeight:1.7,color:"#cbd5e1",marginTop:"14px",fontWeight:500}}>{place.why}</div>
                </div>
              </div>
            </div>
          )}

          {tab === 'photos' && (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",animation:"fadeUp .3s ease-out both"}}>
              {place.photos.map((p: any, i: number) => (
                <div key={i} className="hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(20,24,58,0.08)] transition-all duration-200" style={{height:"130px",borderRadius:"16px",background:"repeating-linear-gradient(45deg,#e9ecf9 0 12px,#f2f4fb 12px 24px)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                  <span style={{fontFamily:"ui-monospace,Menlo,monospace",fontSize:"11px",color:"#5a6474",background:"rgba(255,255,255,.85)",borderRadius:"8px",padding:"5px 10px"}}>{p.label}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'reviews' && (
            <div style={{animation:"fadeUp .3s ease-out both"}}>
              <div style={{borderRadius:"18px",background:"linear-gradient(120deg,#fefce8,#fff7ed)",padding:"18px",display:"flex",alignItems:"center",gap:"18px"}}>
                <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"42px",color:"#b45309"}}>{place.rating}</div>
                <div style={{flex:1}}>
                  <span style={{position:"relative",fontSize:"17px",letterSpacing:"2px",color:"#fde68a"}}>★★★★★<span style={{position:"absolute",left:0,top:0,overflow:"hidden",whiteSpace:"nowrap",color:"#f59e0b",width:place.ratingPct}}>★★★★★</span></span>
                  <div style={{fontSize:"12px",fontWeight:500,color:"#92400e",marginTop:"4px"}}>{place.reviews} reviews via Google</div>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"8px",margin:"16px 0 20px"}}>
                {ratingBars.map((b, i) => (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <span style={{width:"16px",fontSize:"11.5px",fontWeight:500,color:"#8a90a6"}}>{b.star}</span>
                    <div style={{flex:1,height:"7px",borderRadius:"99px",background:"#f2f4fb",overflow:"hidden"}}>
                      <div style={{height:"100%",borderRadius:"99px",background:"linear-gradient(90deg,#f59e0b,#ec4899)",width:b.pct,transformOrigin:"left",animation:"grow .9s ease-out both"}}></div>
                    </div>
                    <span style={{width:"34px",fontSize:"11px",fontWeight:500,color:"#8a90a6",textAlign:"right"}}>{b.pct}</span>
                  </div>
                ))}
              </div>
              {place.quotes.map((q: any, i: number) => (
                <div key={i} className="hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(20,24,58,0.06)] transition-all duration-200" style={{background:"#fff",borderRadius:"16px",padding:"15px 16px",marginBottom:"10px",boxShadow:"0 4px 12px rgba(20,24,58,.04)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <span style={{width:"32px",height:"32px",borderRadius:"50%",background:q.grad,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"13px"}}>{q.initial}</span>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:500,fontSize:"12.5px",color:"#14183a"}}>{q.name}</div>
                      <div style={{fontSize:"10.5px",color:"#8a90a6",fontWeight:400}}>{q.when}</div>
                    </div>
                    <span style={{color:"#f59e0b",fontSize:"12px",letterSpacing:"1px"}}>★★★★★</span>
                  </div>
                  <div style={{fontSize:"13px",lineHeight:1.6,color:"#5a6474",marginTop:"10px"}}>{q.text}</div>
                </div>
              ))}
            </div>
          )}

          {tab === 'location' && (
            <div style={{animation:"fadeUp .3s ease-out both"}}>
              <div style={{position:"relative",height:"220px",borderRadius:"18px",overflow:"hidden",background:"repeating-linear-gradient(0deg,#e9ecf9 0 26px,#f2f4fb 26px 27px),repeating-linear-gradient(90deg,#e9ecf9 0 26px,#f2f4fb 26px 27px)",backgroundBlendMode:"multiply"}}>
                <span style={{position:"absolute",top:"30%",left:"-5%",right:"-5%",height:"14px",background:"#c3cbe6",transform:"rotate(-7deg)",display:"block"}}></span>
                <span style={{position:"absolute",top:"60%",left:"-5%",right:"-5%",height:"9px",background:"#d7ddf0",transform:"rotate(4deg)",display:"block"}}></span>
                <span style={{position:"absolute",top:"46%",left:"50%",width:"16px",height:"16px",margin:"-8px",borderRadius:"50%",background:"linear-gradient(135deg,#ef4444,#ec4899)",boxShadow:"0 4px 10px rgba(239,68,68,.5)",display:"block"}}></span>
                <span style={{position:"absolute",top:"46%",left:"50%",width:"34px",height:"34px",margin:"-17px",borderRadius:"50%",border:"2.5px solid rgba(239,68,68,.55)",animation:"ping 1.8s ease-out infinite",display:"block"}}></span>
                <span className="hover:-translate-y-[2px] transition-transform" style={{position:"absolute",bottom:"12px",right:"12px",borderRadius:"99px",padding:"7px 14px",background:"#fff",fontSize:"11.5px",fontWeight:500,color:"#4f5de4",boxShadow:"0 6px 14px rgba(20,24,58,.12)",cursor:"pointer"}}>➤ Open in Maps</span>
                <span style={{position:"absolute",top:"12px",left:"12px",fontFamily:"ui-monospace,Menlo,monospace",fontSize:"10.5px",color:"#5a6474",background:"rgba(255,255,255,.85)",borderRadius:"8px",padding:"4px 9px"}}>map placeholder</span>
              </div>
              <div style={{fontSize:"13px",fontWeight:500,color:"#3b4258",margin:"14px 0"}}>◉ {place.address}</div>
              <div style={{display:"flex",gap:"10px"}}>
                <span className="hover:-translate-y-[2px] transition-transform duration-200" style={{flex:1,textAlign:"center",borderRadius:"13px",padding:"12px",background:"linear-gradient(140deg,#14183a,#3a2e7e)",color:"#fff",fontWeight:500,fontSize:"13px",cursor:"pointer",boxShadow:"0 8px 18px rgba(20,24,58,.2)"}}>➤ Directions</span>
                <span className="hover:bg-[#f2f4fb] transition-colors duration-200" style={{flex:1,textAlign:"center",borderRadius:"13px",padding:"12px",background:"#fff",border:"1.5px solid #eef0f7",fontWeight:500,fontSize:"13px",color:"#3b4258",cursor:"pointer"}}>◎ Website</span>
                <span className="hover:bg-[#f2f4fb] transition-colors duration-200" style={{flex:1,textAlign:"center",borderRadius:"13px",padding:"12px",background:"#fff",border:"1.5px solid #eef0f7",fontWeight:500,fontSize:"13px",color:"#3b4258",cursor:"pointer"}}>✆ Call</span>
              </div>
            </div>
          )}
        </div>

        <div style={{flex:"none",padding:"14px 24px",background:"#fff",borderTop:"1px solid #eef0f7",display:"flex",alignItems:"center",gap:"14px"}}>
          <div>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"19px",color:"#14183a"}}>{place.price}</div>
            <div style={{fontSize:"11px",color:"#8a90a6",fontWeight:400}}>prices confirmed at checkout</div>
          </div>
          <div style={{flex:1}}></div>
          <span className="hover:text-[#14183a] transition-colors" style={{fontSize:"12.5px",fontWeight:500,color:"#5a6474",cursor:"pointer"}}>✎ Edit details</span>
          <span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"14px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 10px 24px rgba(17,24,39,.16)",cursor:"pointer"}}><span style={{background:"#1f2937",color:"#fff",borderRadius:"12px",padding:"11px 24px",fontSize:"14px",fontWeight:500,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>▤ Reserve<span style={{position:"absolute",top:0,bottom:0,width:"36px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)",animation:"shine 3.6s ease-in-out infinite"}}></span></span></span>
        </div>
      </div>
    </>
  );
}

import React from 'react';

export function BoardingPass({
  fromCode = "DEL", fromCity = "Delhi", fromTime = "06:00",
  toCode = "PBH", toCity = "Paro", toTime = "08:30",
  date = "20 JUL 2026", gate = "B4", seats = "12A · 12B", boarding = "05:20",
  tip = "Sit on the left — sunrise over Everest, then one of aviation's great descents: a hand-flown curl between 5,000 m ridgelines into Paro Valley."
}) {
  return (
    <div style={{fontFamily:"'Figtree',sans-serif",color:"#0b1020",borderRadius:"22px",background:"#fff",border:"1px solid #eef0f7",boxShadow:"0 16px 40px rgba(20,24,58,.14)",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 20px",background:"linear-gradient(140deg,#1e3a8a,#312e81)",color:"#fff"}}>
        <svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="12" fill="rgba(255,255,255,.12)"/><path d="M5 16L18 7.5c1.2-.8 2.5-.4 2.9.2.4.7 0 2-1.1 2.8L8.2 17.8z" fill="#fff"/><path d="M5 16l3.2 1.6L7.2 20z" fill="#ffd66b"/></svg>
        <div>
          <div style={{fontSize:"9.5px",fontWeight:500,letterSpacing:".22em",color:"#9aa0c2"}}>BOARDING PASS · ECONOMY</div>
          <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"14.5px"}}>Drukair · KB205</div>
        </div>
        <span style={{flex:1}}></span>
        <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.18)",fontSize:"10.5px",fontWeight:500,letterSpacing:".1em"}}>NONSTOP · 2H 30M</span>
      </div>

      <div style={{position:"relative",height:"96px",background:"linear-gradient(175deg,#8ec9f5 0%,#c8e5fb 55%,#fbdcb8 100%)",overflow:"hidden"}}>
        <span style={{position:"absolute",top:"10px",right:"26px",width:"30px",height:"30px",borderRadius:"50%",background:"radial-gradient(circle at 36% 34%,#fffbe8,#ffe08a 48%,#ffb347 85%)",boxShadow:"0 0 34px 10px rgba(255,196,86,.55)",animation:"bpSun 4.5s ease-in-out infinite"}}></span>
        <span style={{position:"absolute",top:"20px",left:"-70px",width:"74px",height:"16px",borderRadius:"99px",background:"rgba(255,255,255,.85)",filter:"blur(1.5px)",animation:"bpCloud 18s linear infinite"}}></span>
        <span style={{position:"absolute",top:"46px",left:"-70px",width:"48px",height:"12px",borderRadius:"99px",background:"rgba(255,255,255,.6)",filter:"blur(1px)",animation:"bpCloud 24s linear 5s infinite"}}></span>
        <span style={{position:"absolute",bottom:"-8px",left:"-16px",width:"38%",height:"56px",background:"linear-gradient(180deg,#5d69a8,#454e85)",clipPath:"polygon(50% 0,0 100%,100% 100%)"}}></span>
        <span style={{position:"absolute",bottom:"-8px",left:"30%",width:"30%",height:"42px",background:"linear-gradient(180deg,#7681bd,#59619b)",clipPath:"polygon(50% 0,0 100%,100% 100%)"}}></span>
        <span style={{position:"absolute",bottom:"-8px",right:"-22px",width:"36%",height:"50px",background:"linear-gradient(180deg,#67719f,#4a5288)",clipPath:"polygon(50% 0,0 100%,100% 100%)"}}></span>
        {/* Intense, visually beautiful custom plane animation */}
        <span style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none"}}>
          {/* Contrail / Trail */}
          <span style={{position:"absolute", top:"48px", left:"-10%", width:"120%", height:"2px", background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)", filter:"blur(2px)", transform:"rotate(-8deg)", animation:"trailPulse 6s infinite", opacity: 0.6}}></span>
          <span style={{position:"absolute", top:"48px", left:"-10%", width:"120%", height:"1px", background:"linear-gradient(90deg, transparent, #fff, transparent)", transform:"rotate(-8deg)", animation:"trailPulse 6s infinite", opacity: 0.9}}></span>
          
          {/* Plane Container with banking animation */}
          <span style={{position:"absolute", top:"34px", animation:"majesticPlane 8s cubic-bezier(0.4, 0, 0.2, 1) infinite", display:"block", filter:"drop-shadow(0 12px 16px rgba(14,165,233,0.4))", zIndex: 10}}>
            <svg width="60" height="28" viewBox="0 0 52 24">
              <defs>
                <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e0e7ff" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c7d2fe" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <path d="M2 13c10-3 30-4 40-3 4 .4 8 1.6 8 3s-4 2.6-8 3c-10 1-30 0-40-3z" fill="url(#planeGrad)"/>
              <path d="M20 12l8-8 4 .8-6 8z" fill="url(#wingGrad)"/>
              <path d="M22 14l6 7 4-.4-5-7z" fill="url(#wingGrad)"/>
              <circle cx="40" cy="12.4" r="1.5" fill="#4f46e5"/>
              <circle cx="35" cy="12.2" r="1.5" fill="#4f46e5"/>
              <circle cx="30" cy="12" r="1.5" fill="#4f46e5"/>
              <circle cx="25" cy="12" r="1.5" fill="#4f46e5"/>
              {/* Engine glow */}
              <circle cx="24" cy="14" r="2" fill="#38bdf8" opacity="0.8" style={{animation: "engineGlow 0.5s alternate infinite"}} />
            </svg>
          </span>
        </span>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"16px",padding:"16px 22px 6px"}}>
        <div>
          <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"30px",letterSpacing:"-.01em"}}>{fromCode}</div>
          <div style={{fontSize:"11.5px",fontWeight:500,color:"#8a90a6"}}>{fromTime} · {fromCity}</div>
        </div>
        <div style={{flex:1,position:"relative",height:"26px"}}>
          <span style={{position:"absolute",left:0,right:0,top:"50%",height:"2px",marginTop:"-1px",background:"repeating-linear-gradient(90deg,#d4d9e8 0 10px,transparent 10px 18px)",backgroundSize:"24px 2px",animation:"bpDash 1.2s linear infinite",display:"block"}}></span>
          <span style={{position:"absolute",left:0,top:"50%",marginTop:"-4px",width:"8px",height:"8px",borderRadius:"50%",background:"#1e3a8a",display:"block"}}></span>
          <span style={{position:"absolute",left:"-3px",top:"50%",marginTop:"-7px",width:"14px",height:"14px",borderRadius:"50%",background:"rgba(20,24,58,.25)",animation:"bpPing 2s ease-out infinite",display:"block"}}></span>
          <span style={{position:"absolute",right:0,top:"50%",marginTop:"-4px",width:"8px",height:"8px",borderRadius:"50%",background:"#4f46e5",display:"block"}}></span>
          <span style={{position:"absolute",right:"-3px",top:"50%",marginTop:"-7px",width:"14px",height:"14px",borderRadius:"50%",background:"rgba(5,150,105,.3)",animation:"bpPing 2s ease-out 1s infinite",display:"block"}}></span>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"30px",letterSpacing:"-.01em"}}>{toCode}</div>
          <div style={{fontSize:"11.5px",fontWeight:500,color:"#8a90a6"}}>{toTime} · {toCity}</div>
        </div>
      </div>

      <div style={{position:"relative",height:"22px",margin:"4px 0 0"}}>
        <span style={{position:"absolute",left:"-11px",top:0,width:"22px",height:"22px",borderRadius:"50%",background:"#f4f5fa",border:"1px solid #eef0f7",display:"block"}}></span>
        <span style={{position:"absolute",right:"-11px",top:0,width:"22px",height:"22px",borderRadius:"50%",background:"#f4f5fa",border:"1px solid #eef0f7",display:"block"}}></span>
        <span style={{position:"absolute",left:"22px",right:"22px",top:"50%",borderTop:"2px dashed #e4e7f0",display:"block"}}></span>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"18px",padding:"10px 22px 18px"}}>
        <div><div style={{fontSize:"9px",fontWeight:500,letterSpacing:".18em",color:"#8a90a6"}}>DATE</div><div style={{fontWeight:500,fontSize:"13px",marginTop:"3px"}}>{date}</div></div>
        <div><div style={{fontSize:"9px",fontWeight:500,letterSpacing:".18em",color:"#8a90a6"}}>GATE</div><div style={{fontWeight:500,fontSize:"13px",marginTop:"3px"}}>{gate}</div></div>
        <div><div style={{fontSize:"9px",fontWeight:500,letterSpacing:".18em",color:"#8a90a6"}}>SEATS</div><div style={{fontWeight:500,fontSize:"13px",marginTop:"3px"}}>{seats}</div></div>
        <div><div style={{fontSize:"9px",fontWeight:500,letterSpacing:".18em",color:"#8a90a6"}}>BOARDING</div><div style={{fontWeight:500,fontSize:"13px",marginTop:"3px"}}>{boarding}</div></div>
        <span style={{flex:1}}></span>
        <span style={{width:"110px",height:"34px",display:"block",background:"repeating-linear-gradient(90deg,#1e3a8a 0 2px,transparent 2px 4px,#1e3a8a 4px 5px,transparent 5px 9px,#1e3a8a 9px 12px,transparent 12px 14px,#1e3a8a 14px 15px,transparent 15px 19px)",borderRadius:"3px",opacity:.9}}></span>
      </div>

      <div style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"0 22px 18px"}}>
        <span style={{width:"22px",height:"22px",flex:"none",borderRadius:"8px",background:"#f0f9ff",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1px"}}>
          <svg width="12" height="12" viewBox="0 0 16 16"><path d="M8 1l1.8 4.4L14 7l-4.2 1.6L8 13 6.2 8.6 2 7l4.2-1.6z" fill="#4f46e5"/></svg>
        </span>
        <span style={{fontSize:"12px",lineHeight:1.6,color:"#5a6474",fontWeight:400}}>{tip}</span>
      </div>
    </div>
  );
}

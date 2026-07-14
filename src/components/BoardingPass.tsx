'use client';
import React from 'react';

const BP_STYLE = `
@keyframes bpSun {
  0% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 12px rgba(255,196,86,0.5)); }
  50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 28px rgba(255,196,86,0.85)); }
  100% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 12px rgba(255,196,86,0.5)); }
}
@keyframes bpCloud1 {
  0% { transform: translateX(-150px); }
  100% { transform: translateX(600px); }
}
@keyframes bpCloud2 {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(600px); }
}
@keyframes bpDash {
  to {
    stroke-dashoffset: -24px;
  }
}
@keyframes bpPing {
  0% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(2.2); opacity: 0; }
}
`;

export function BoardingPass({
  fromCode = "DEL", fromCity = "Delhi", fromTime = "06:00",
  toCode = "PBH", toCity = "Paro", toTime = "08:30",
  date = "20 JUL 2026", gate = "B4", seats = "12A · 12B", boarding = "05:20",
  airline = "Singapore Airlines", flightNo = "SQ501", duration = "4H 10M",
  tip = "Sit on the right side for spectacular views of the Singapore skyline as you descend into Changi."
}) {
  return (
    <div style={{fontFamily:"'Figtree',sans-serif",color:"#111827",borderRadius:"28px",background:"#fff",border:"1px solid #eeece5",boxShadow:"0 12px 48px rgba(0,0,0,0.03)",overflow:"hidden",position:"relative"}}>
      <style>{BP_STYLE}</style>
      
      {/* Header with deep Singapore Airlines styling or matching theme */}
      <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"16px 24px",background:"linear-gradient(135deg,#0f172a,#1e293b)",color:"#fff"}}>
        <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/kyvari-logo.png" alt="" className="w-5 h-5 object-contain invert opacity-90" />
        </div>
        <div>
          <div style={{fontSize:"9px",fontWeight:700,letterSpacing:".25em",color:"#94a3b8"}}>BOARDING PASS · PREMIUM CLASS</div>
          <div style={{fontFamily:"Cosmic, sans-serif",fontWeight:700,fontSize:"14.5px",color:"#f8fafc"}}>{airline} · {flightNo}</div>
        </div>
        <span style={{flex:1}}></span>
        <span style={{borderRadius:"99px",padding:"6px 14px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",fontSize:"10.5px",fontWeight:600,letterSpacing:".05em",color:"#e2e8f0"}}>{duration} · NONSTOP</span>
      </div>

      {/* Interactive Sky / Flight Path Banner */}
      <div style={{position:"relative",height:"108px",background:"linear-gradient(175deg,#a5f3fc 0%,#e0f2fe 55%,#fef3c7 100%)",overflow:"hidden",borderBottom:"1px solid #e0f2fe"}}>
        {/* Pulsing Sun */}
        <span style={{position:"absolute",top:"12px",right:"36px",width:"32px",height:"32px",borderRadius:"50%",background:"radial-gradient(circle at 36% 34%,#fffbe8,#ffe08a 48%,#ffb347 85%)",animation:"bpSun 4.5s ease-in-out infinite"}}></span>
        
        {/* Animated Clouds */}
        <span style={{position:"absolute",top:"24px",left:"0",width:"80px",height:"18px",borderRadius:"99px",background:"rgba(255,255,255,.85)",filter:"blur(1.5px)",animation:"bpCloud1 24s linear infinite"}}></span>
        <span style={{position:"absolute",top:"52px",left:"0",width:"56px",height:"14px",borderRadius:"99px",background:"rgba(255,255,255,.7)",filter:"blur(1px)",animation:"bpCloud2 32s linear 6s infinite"}}></span>
        
        {/* Abstract mountains or skyline */}
        <span style={{position:"absolute",bottom:"-6px",left:"-12px",width:"38%",height:"62px",background:"linear-gradient(180deg,#64748b,#475569)",clipPath:"polygon(50% 0,0 100%,100% 100%)",opacity:0.4}}></span>
        <span style={{position:"absolute",bottom:"-6px",right:"-18px",width:"35%",height:"54px",background:"linear-gradient(180deg,#64748b,#475569)",clipPath:"polygon(50% 0,0 100%,100% 100%)",opacity:0.3}}></span>
        
        {/* Animated Flight contrail & Banking Airplane SVG */}
        <span style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none"}}>
          {/* Plane Contrail */}
          <span style={{position:"absolute", top:"54px", left:"-10%", width:"120%", height:"2px", background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)", filter:"blur(1.5px)", transform:"rotate(-6deg)", animation:"trailPulse 6s infinite", opacity: 0.7}}></span>
          
          {/* Banking Airplane */}
          <span style={{position:"absolute", top:"38px", animation:"majesticPlane 9s cubic-bezier(0.4, 0, 0.2, 1) infinite", display:"block", filter:"drop-shadow(0 10px 14px rgba(14,165,233,0.3))", zIndex: 10}}>
            <svg width="58" height="26" viewBox="0 0 52 24">
              <defs>
                <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
              <path d="M2 13c10-3 30-4 40-3 4 .4 8 1.6 8 3s-4 2.6-8 3c-10 1-30 0-40-3z" fill="url(#planeGrad)"/>
              <path d="M20 12l8-8 4 .8-6 8z" fill="url(#wingGrad)"/>
              <path d="M22 14l6 7 4-.4-5-7z" fill="url(#wingGrad)"/>
              <circle cx="40" cy="12.4" r="1.5" fill="#475569"/>
              <circle cx="35" cy="12.2" r="1.5" fill="#475569"/>
              <circle cx="30" cy="12" r="1.5" fill="#475569"/>
              <circle cx="25" cy="12" r="1.5" fill="#475569"/>
              <circle cx="24" cy="14" r="2" fill="#38bdf8" opacity="0.8" style={{animation: "engineGlow 0.5s alternate infinite"}} />
            </svg>
          </span>
        </span>
      </div>

      {/* Flight Departure / Destination Detail */}
      <div style={{display:"flex",alignItems:"center",gap:"16px",padding:"20px 24px 8px"}}>
        <div>
          <div style={{fontFamily:"Cosmic, sans-serif",fontWeight:700,fontSize:"32px",letterSpacing:"-0.03em",color:"#0f172a"}}>{fromCode}</div>
          <div style={{fontSize:"12.5px",fontWeight:600,color:"#64748b",marginTop:"2px"}}>{fromTime} · {fromCity}</div>
        </div>
        
        {/* Animated Flight Path Line */}
        <div style={{flex:1,position:"relative",height:"26px"}}>
          <svg style={{width:"100%",height:"100%"}}>
            <line x1="10" y1="13" x2="90%" y2="13" stroke="#e2e8f0" strokeWidth="2.5" strokeDasharray="6 6" style={{animation:"bpDash 1.5s linear infinite"}} />
          </svg>
          {/* Outbound Dot */}
          <span style={{position:"absolute",left:"4px",top:"50%",marginTop:"-5px",width:"10px",height:"10px",borderRadius:"50%",background:"#0f172a",display:"block"}}></span>
          <span style={{position:"absolute",left:"1px",top:"50%",marginTop:"-8px",width:"16px",height:"16px",borderRadius:"50%",background:"rgba(15,23,42,0.15)",animation:"bpPing 2.5s ease-out infinite",display:"block"}}></span>
          
          {/* Inbound Dot */}
          <span style={{position:"absolute",right:"10%",top:"50%",marginTop:"-5px",width:"10px",height:"10px",borderRadius:"50%",background:"#175cd3",display:"block"}}></span>
          <span style={{position:"absolute",right:"calc(10% - 3px)",top:"50%",marginTop:"-8px",width:"16px",height:"16px",borderRadius:"50%",background:"rgba(23,92,211,0.2)",animation:"bpPing 2.5s ease-out 1.2s infinite",display:"block"}}></span>
        </div>
        
        <div style={{textAlign:"right"}}>
          <div style={{fontFamily:"Cosmic, sans-serif",fontWeight:700,fontSize:"32px",letterSpacing:"-0.03em",color:"#175cd3"}}>{toCode}</div>
          <div style={{fontSize:"12.5px",fontWeight:600,color:"#64748b",marginTop:"2px"}}>{toTime} · {toCity}</div>
        </div>
      </div>

      {/* Perforated Divider Line */}
      <div style={{position:"relative",height:"24px",margin:"6px 0 2px"}}>
        <span style={{position:"absolute",left:"-12px",top:0,width:"24px",height:"24px",borderRadius:"50%",background:"#f8f8fa",borderRight:"1px solid #eeece5",display:"block"}}></span>
        <span style={{position:"absolute",right:"-12px",top:0,width:"24px",height:"24px",borderRadius:"50%",background:"#f8f8fa",borderLeft:"1px solid #eeece5",display:"block"}}></span>
        <span style={{position:"absolute",left:"24px",right:"24px",top:"50%",borderTop:"2.5px dashed #f1f0ea",display:"block"}}></span>
      </div>

      {/* Footer Info (Seats, Boarding time, Barcode) */}
      <div style={{display:"flex",alignItems:"center",gap:"20px",padding:"12px 24px 20px"}}>
        <div>
          <div style={{fontSize:"9px",fontWeight:700,letterSpacing:".2em",color:"#94a3b8"}}>DATE</div>
          <div style={{fontWeight:700,fontSize:"13.5px",color:"#1e293b",marginTop:"3px"}}>{date}</div>
        </div>
        <div>
          <div style={{fontSize:"9px",fontWeight:700,letterSpacing:".2em",color:"#94a3b8"}}>GATE</div>
          <div style={{fontWeight:700,fontSize:"13.5px",color:"#1e293b",marginTop:"3px"}}>{gate}</div>
        </div>
        <div>
          <div style={{fontSize:"9px",fontWeight:700,letterSpacing:".2em",color:"#94a3b8"}}>SEATS</div>
          <div style={{fontWeight:700,fontSize:"13.5px",color:"#1e293b",marginTop:"3px"}}>{seats}</div>
        </div>
        <div>
          <div style={{fontSize:"9px",fontWeight:700,letterSpacing:".2em",color:"#94a3b8"}}>BOARDING</div>
          <div style={{fontWeight:700,fontSize:"13.5px",color:"#175cd3",marginTop:"3px"}}>{boarding}</div>
        </div>
        <span style={{flex:1}}></span>
        {/* Visual Barcode */}
        <span style={{width:"110px",height:"36px",display:"block",background:"repeating-linear-gradient(90deg,#0f172a 0 2px,transparent 2px 4px,#0f172a 4px 5px,transparent 5px 9px,#0f172a 9px 12px,transparent 12px 14px,#0f172a 14px 15px,transparent 15px 19px)",borderRadius:"4px",opacity:0.85}}></span>
      </div>

      {/* Tip Badge */}
      <div style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"0 24px 20px"}}>
        <span style={{width:"24px",height:"24px",flex:"none",borderRadius:"8px",background:"#eff6ff",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1px"}}>
          <svg width="12" height="12" viewBox="0 0 16 16"><path d="M8 1l1.8 4.4L14 7l-4.2 1.6L8 13 6.2 8.6 2 7l4.2-1.6z" fill="#175cd3"/></svg>
        </span>
        <span style={{fontSize:"12.5px",lineHeight:1.6,color:"#475569",fontWeight:500}}>{tip}</span>
      </div>
    </div>
  );
}

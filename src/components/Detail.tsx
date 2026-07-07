import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { days } from '../data';
import { BoardingPass } from './BoardingPass';

export function Detail({ setView, openPlace }: { setView: (v: string) => void, openPlace: (p: any) => void }) {
  const [dayIdx, setDayIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');

  const dayTabs = days.map((d, i) => ({
    label: d.name + (i === 0 ? ' · Arrival' : i === 1 ? ' · The Climb' : ' · Farewell'),
    select: () => setDayIdx(i),
    bg: dayIdx === i ? 'linear-gradient(140deg,#14183a,#3a2e7e)' : '#fff',
    color: dayIdx === i ? '#fff' : '#5a6474',
    border: dayIdx === i ? 'transparent' : '#eef0f7',
    shadow: dayIdx === i ? '0 10px 22px rgba(20,24,58,.22)' : 'none'
  }));

  const day = days[dayIdx];

  const dotColors: any = { 
    SIGHTSEEING: ['#0ea5e9', 'rgba(14,165,233,.3)', '#e0f2fe', '#0369a1'], 
    HOTEL: ['#8b5cf6', 'rgba(139,92,246,.3)', '#ede9fe', '#6d28d9'], 
    FOOD: ['#f59e0b', 'rgba(245,158,11,.3)', '#fef3c7', '#b45309'], 
    ACTIVITY: ['#f43f5e', 'rgba(244,63,94,.3)', '#ffe4e6', '#be123c'] 
  };

  return (
    <div data-screen-label="Itinerary Detail" style={{padding:"28px 40px 48px",maxWidth:"1460px",margin:"0 auto",animation:"fadeUp .4s ease-out both"}}>
      <div style={{position:"relative",borderRadius:"28px",overflow:"hidden",padding:"32px 32px 32px 40px",background:"linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",color:"#fff",boxShadow:"0 16px 40px rgba(15,23,42,.2)",display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"}}>
        {/* Animated Vibrant Landscape Background */}
        <div style={{position:"absolute", top:0, left:0, right:0, bottom:0, zIndex: 0, overflow:"hidden", pointerEvents:"none", background:"linear-gradient(to bottom, #38bdf8 0%, #bae6fd 60%, #fdf4ff 100%)"}}>
          
          {/* Animated Sun Rays */}
          <div style={{position:"absolute", top: "-150px", right: "5%", width: "500px", height: "500px", animation: "rayspin 35s linear infinite", background: "conic-gradient(from 0deg, rgba(253,224,71,0) 0 15deg, rgba(253,224,71,0.3) 15deg 30deg, rgba(253,224,71,0) 30deg 45deg, rgba(253,224,71,0.3) 45deg 60deg, rgba(253,224,71,0) 60deg 75deg, rgba(253,224,71,0.3) 75deg 90deg, rgba(253,224,71,0) 90deg 105deg, rgba(253,224,71,0.3) 105deg 120deg, rgba(253,224,71,0) 120deg 135deg, rgba(253,224,71,0.3) 135deg 150deg, rgba(253,224,71,0) 150deg 165deg, rgba(253,224,71,0.3) 165deg 180deg, rgba(253,224,71,0) 180deg 195deg, rgba(253,224,71,0.3) 195deg 210deg, rgba(253,224,71,0) 210deg 225deg, rgba(253,224,71,0.3) 225deg 240deg, rgba(253,224,71,0) 240deg 255deg, rgba(253,224,71,0.3) 255deg 270deg, rgba(253,224,71,0) 270deg 285deg, rgba(253,224,71,0.3) 285deg 300deg, rgba(253,224,71,0) 300deg 315deg, rgba(253,224,71,0.3) 315deg 330deg, rgba(253,224,71,0) 330deg 345deg, rgba(253,224,71,0.3) 345deg 360deg)", borderRadius: "50%"}}></div>
          
          {/* Animated Sun */}
          <div style={{position:"absolute", top: "10px", right: "20%", width: "160px", height: "160px", background: "radial-gradient(circle, #fef08a 0%, #facc15 60%, #eab308 100%)", borderRadius: "50%", animation: "pulseSun 4s ease-in-out infinite alternate", boxShadow: "0 0 80px rgba(250,204,21,0.6)"}}></div>

          {/* Animated Clouds */}
          <div style={{position:"absolute", top: "40px", left: "15%", width: "180px", height: "45px", borderRadius: "99px", background: "rgba(255,255,255,0.9)", animation: "floatCloud 40s linear infinite", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-20px", left:"20px", width:"60px", height:"60px", borderRadius:"50%", background:"rgba(255,255,255,0.9)"}}></div>
             <div style={{position:"absolute", top:"-10px", right:"30px", width:"50px", height:"50px", borderRadius:"50%", background:"rgba(255,255,255,0.9)"}}></div>
          </div>
          <div style={{position:"absolute", top: "90px", right: "30%", width: "140px", height: "35px", borderRadius: "99px", background: "rgba(255,255,255,0.85)", animation: "floatCloud 55s linear infinite reverse", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-15px", left:"15px", width:"40px", height:"40px", borderRadius:"50%", background:"rgba(255,255,255,0.85)"}}></div>
             <div style={{position:"absolute", top:"-10px", right:"20px", width:"45px", height:"45px", borderRadius:"50%", background:"rgba(255,255,255,0.85)"}}></div>
          </div>
          <div style={{position:"absolute", top: "160px", left: "45%", width: "100px", height: "25px", borderRadius: "99px", background: "rgba(255,255,255,0.7)", animation: "floatCloud 30s linear infinite", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-10px", left:"10px", width:"30px", height:"30px", borderRadius:"50%", background:"rgba(255,255,255,0.7)"}}></div>
             <div style={{position:"absolute", top:"-5px", right:"15px", width:"25px", height:"25px", borderRadius:"50%", background:"rgba(255,255,255,0.7)"}}></div>
          </div>

          {/* Lush Green Mountains with multiple peaks */}
          <div style={{position:"absolute", bottom: "-20px", right: "-10%", width: "45%", height: "70%", background: "linear-gradient(135deg, #10b981, #047857)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.9}}></div>
          <div style={{position:"absolute", bottom: "-30px", right: "20%", width: "55%", height: "85%", background: "linear-gradient(135deg, #34d399, #059669)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.95}}></div>
          <div style={{position:"absolute", bottom: "-40px", left: "-5%", width: "40%", height: "65%", background: "linear-gradient(135deg, #059669, #064e3b)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div style={{position:"absolute", bottom: "-50px", left: "20%", width: "60%", height: "95%", background: "linear-gradient(135deg, #047857, #022c22)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", boxShadow: "-20px 0 40px rgba(0,0,0,0.2)"}}></div>

          {/* Overlay to ensure text readability */}
          <div style={{position:"absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 40%, rgba(15,23,42,0.1) 100%)"}}></div>
        </div>
        <span onClick={() => setView('trips')} className="hover:bg-white/20 transition-all duration-200 hover:-translate-x-[2px]" style={{position:"relative",zIndex:10,width:"42px",height:"42px",borderRadius:"14px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"16px",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>←</span>
        
        <div style={{flex:1,minWidth:"280px",position:"relative",zIndex:10}}>
          <h1 style={{fontFamily:"'Playfair Display', serif",fontWeight:600,fontSize:"30px",letterSpacing:"-.01em",margin:0,color:"#fff",textShadow:"0 2px 10px rgba(0,0,0,0.2)"}}>Bhutanese Bliss: A Himalayan Adventure for Two</h1>
          <div style={{display:"flex",gap:"10px",marginTop:"14px",flexWrap:"wrap"}}>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"linear-gradient(135deg,#ff7a59,#ff4d6d)",color:"#fff",fontSize:"11.5px",fontWeight:600,letterSpacing:".05em",boxShadow:"0 2px 8px rgba(255,77,109,.25)"}}>▲ ADVENTURE</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>◉ Paro, Bhutan</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>♥ 2 travellers</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>▤ 20–22 Jul 2026</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#e2e8f0",fontSize:"11.5px",fontWeight:500}}>◈ Client · Meera & Arjun</span>
          </div>
        </div>
        
        <div style={{display:"flex",gap:"12px",position:"relative",zIndex:10}}>
          <span className="hover:bg-white/20 transition-colors" style={{borderRadius:"12px",padding:"10px 16px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",fontSize:"13px",fontWeight:500,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>⧉ Copy link</span>
          <span className="hover:bg-white/20 transition-colors" style={{borderRadius:"12px",padding:"10px 16px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",fontSize:"13px",fontWeight:500,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>◎ Preview</span>
          <span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",cursor:"pointer"}}><span style={{background:"#1f2937",color:"#fff",borderRadius:"10px",padding:"8px 18px",fontSize:"13px",fontWeight:500,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>➤ Send</span></span>
        </div>
      </div>

      {/* Main Tabs */}
      <div style={{display:"flex",gap:"8px",margin:"28px 0 20px",borderBottom:"1px solid #eef0f7",paddingBottom:"12px"}}>
        <span 
          onClick={() => setActiveTab('itinerary')} 
          style={{padding:"8px 16px",fontSize:"14px",fontWeight:500,cursor:"pointer",color:activeTab === 'itinerary' ? '#14183a' : '#8a90a6',background:activeTab === 'itinerary' ? '#f2f4fb' : 'transparent',borderRadius:"10px",transition:"all 0.2s"}}
        >
          Itinerary Builder
        </span>
        <span 
          onClick={() => setActiveTab('analytics')} 
          style={{padding:"8px 16px",fontSize:"14px",fontWeight:500,cursor:"pointer",color:activeTab === 'analytics' ? '#14183a' : '#8a90a6',background:activeTab === 'analytics' ? '#f2f4fb' : 'transparent',borderRadius:"10px",transition:"all 0.2s"}}
        >
          Engagement Analytics
        </span>
      </div>

      {activeTab === 'itinerary' && (
        <>
          

          <div style={{display:"grid",gridTemplateColumns:"minmax(380px,1fr) minmax(430px,1.15fr)",gap:"26px",alignItems:"start"}}>
        <div style={{background:"#fff",borderRadius:"24px",padding:"26px 26px 20px",boxShadow:"0 8px 24px rgba(20,24,58,.05)"}}>
          {day.sections.map((sec, i) => {
            const isM = sec.part === 'morning';
            const isA = sec.part === 'afternoon';
            const isE = sec.part === 'evening';
            return (
              <div key={i} style={{marginBottom:"24px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"}}>
                  {isM && (
                    <span style={{width:"40px",height:"40px",borderRadius:"13px",background:"linear-gradient(170deg,#ffe9c8,#ffd4a8)",position:"relative",overflow:"hidden",display:"block",flex:"none"}}>
                      <span style={{position:"absolute",left:"50%",bottom:"8px",width:"22px",height:"22px",marginLeft:"-11px",borderRadius:"50%",background:"radial-gradient(circle at 36% 34%,#fff4cc,#ffc24d 55%,#ff8f2e)",animation:"riseSun 3.2s ease-in-out infinite",display:"block"}}></span>
                      <span style={{position:"absolute",left:"6px",right:"6px",bottom:"9px",height:"2.5px",borderRadius:"2px",background:"#f4a86a",display:"block"}}></span>
                    </span>
                  )}
                  {isA && (
                    <span style={{width:"40px",height:"40px",borderRadius:"13px",background:"linear-gradient(170deg,#cfe8ff,#a8d4fb)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flex:"none",overflow:"hidden"}}>
                      <span style={{position:"absolute",width:"34px",height:"34px",animation:"rayspin 12s linear infinite",display:"block",background:"conic-gradient(from 0deg,rgba(255,206,84,0) 0 18deg,rgba(255,206,84,.55) 18deg 22deg,rgba(255,206,84,0) 22deg 58deg,rgba(255,206,84,.55) 58deg 62deg,rgba(255,206,84,0) 62deg 98deg,rgba(255,206,84,.55) 98deg 102deg,rgba(255,206,84,0) 102deg 138deg,rgba(255,206,84,.55) 138deg 142deg,rgba(255,206,84,0) 142deg 178deg,rgba(255,206,84,.55) 178deg 182deg,rgba(255,206,84,0) 182deg 218deg,rgba(255,206,84,.55) 218deg 222deg,rgba(255,206,84,0) 222deg 258deg,rgba(255,206,84,.55) 258deg 262deg,rgba(255,206,84,0) 262deg 298deg,rgba(255,206,84,.55) 298deg 302deg,rgba(255,206,84,0) 302deg 338deg,rgba(255,206,84,.55) 338deg 342deg,rgba(255,206,84,0) 342deg)",borderRadius:"50%"}}></span>
                      <span style={{width:"16px",height:"16px",borderRadius:"50%",background:"radial-gradient(circle at 36% 34%,#fff4cc,#ffc24d 55%,#ff9e2e)",position:"relative",animation:"sunPulse 2.6s ease-in-out infinite",display:"block"}}></span>
                    </span>
                  )}
                  {isE && (
                    <span style={{width:"40px",height:"40px",borderRadius:"13px",background:"linear-gradient(170deg,#191c3f,#2c2a63)",position:"relative",overflow:"hidden",display:"block",flex:"none"}}>
                      <span style={{position:"absolute",top:"9px",left:"9px",width:"17px",height:"17px",borderRadius:"50%",background:"radial-gradient(circle at 38% 34%,#fff8e0,#f2dfa4)",display:"block"}}></span>
                      <span style={{position:"absolute",top:"7px",left:"13px",width:"14px",height:"14px",borderRadius:"50%",background:"#191c3f",display:"block"}}></span>
                      <span style={{position:"absolute",top:"10px",right:"8px",width:"4px",height:"4px",borderRadius:"50%",background:"#fff",animation:"twinkle 1.9s ease-in-out infinite",display:"block"}}></span>
                      <span style={{position:"absolute",bottom:"9px",right:"14px",width:"3px",height:"3px",borderRadius:"50%",background:"#fff",animation:"twinkle 2.4s ease-in-out .5s infinite",display:"block"}}></span>
                      <span style={{position:"absolute",bottom:"12px",left:"8px",width:"3px",height:"3px",borderRadius:"50%",background:"#fff",animation:"twinkle 2.1s ease-in-out 1s infinite",display:"block"}}></span>
                    </span>
                  )}
                  <div>
                    <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"15.5px",letterSpacing:".02em",color:"#14183a"}}>{sec.title}</div>
                    <div style={{fontSize:"11px",fontWeight:500,color:"#8a90a6",letterSpacing:".1em"}}>{sec.time}</div>
                  </div>
                </div>
                <div style={{borderLeft:"2px dashed #eef0f7",marginLeft:"19px",paddingLeft:"22px",display:"flex",flexDirection:"column",gap:"15px"}}>
                  {sec.entries.map((e, j) => {
                    const c = dotColors[e.place.cat] || dotColors.SIGHTSEEING;
                    return (
                      <div key={j} style={{position:"relative"}}>
                        <span style={{position:"absolute",left:"-28px",top:"6px",width:"10px",height:"10px",borderRadius:"50%",background:c[0],boxShadow:`0 0 0 3px #fff,0 0 0 4.5px ${c[1]}`,display:"block"}}></span>
                        <span onClick={() => openPlace(e.place)} className="hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(20,24,58,0.08)] transition-all duration-200" style={{display:"inline-flex",alignItems:"center",gap:"6px",borderRadius:"99px",padding:"5px 12px",background:c[2],color:c[3],fontSize:"12.5px",fontWeight:500,cursor:"pointer"}}>◉ {e.label}</span>
                        <div style={{fontSize:"13.5px",lineHeight:1.65,color:"#5a6474",marginTop:"7px"}}>{e.copy}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div style={{borderRadius:"16px",padding:"1.5px",background:"linear-gradient(120deg,rgba(14,165,233,0.8),rgba(49,46,129,0.6),rgba(99,102,241,0.7),rgba(14,165,233,0.8))",backgroundSize:"300% 100%",animation:"gradShift 5.5s linear infinite",marginTop:"6px"}}>
            <div style={{borderRadius:"14.5px",background:"#fff",display:"flex",alignItems:"center",gap:"12px",padding:"12px 14px"}}>
              <span style={{position:"relative",width:"30px",height:"30px",flex:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{position:"absolute",width:"30px",height:"30px",borderRadius:"50%",border:"1.5px solid rgba(79,70,229,.45)",animation:"ringVibe 2.4s ease-out infinite",display:"block"}}></span>
                <span style={{width:"16px",height:"16px",borderRadius:"50%",background:"radial-gradient(circle at 32% 30%,#e0f2fe,#4f46e5 60%,#312e81)",display:"block"}}></span>
              </span>
              <span style={{flex:1,color:"#8a90a6",fontSize:"13.5px"}}>Ask AI to refine {day.name} — "swap dinner for a farmhouse stay"…</span>
              <span className="hover:scale-110 transition-transform duration-200" style={{width:"34px",height:"34px",borderRadius:"50%",background:"linear-gradient(140deg,#1e3a8a,#312e81)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}><svg width="13" height="13" viewBox="0 0 15 15"><path d="M2 7.5h9M8 3.5l4 4-4 4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </div>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{position:"relative", height:"240px", borderRadius:"24px", overflow:"hidden", boxShadow:"0 10px 30px rgba(20,24,58,.1)"}}>
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200&h=600" alt="Paro, Bhutan" style={{width:"100%", height:"100%", objectFit:"cover"}} />
            <div style={{position:"absolute", inset:0, background:"linear-gradient(to top, rgba(20,24,58,0.8), transparent)"}}></div>
            <div style={{position:"absolute", bottom:"24px", left:"24px", color:"#fff"}}>
              <div style={{fontSize:"12px", fontWeight:600, letterSpacing:".15em", textTransform:"uppercase", marginBottom:"4px", display:"flex", alignItems:"center", gap:"6px"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                Paro, Bhutan
              </div>
              <div style={{fontFamily:"'Playfair Display', serif", fontSize:"32px", fontWeight:500, letterSpacing:"-0.02em"}}>Bhutanese Bliss</div>
            </div>
          </div>

          <div style={{display:"flex",gap:"10px", overflowX:"auto", paddingBottom:"4px", msOverflowStyle: "none", scrollbarWidth: "none"}} className="hide-scrollbar">
            {dayTabs.map((d, i) => (
              <span key={i} onClick={d.select} className="hover:-translate-y-[2px] transition-all duration-200 flex-shrink-0" style={{borderRadius:"99px",padding:"9px 20px",fontSize:"13px",fontWeight:500,cursor:"pointer",background:dayIdx === i ? 'linear-gradient(140deg,#1e3a8a,#312e81)' : '#fff',color:dayIdx === i ? '#fff' : '#5a6474',boxShadow:d.shadow,border:`1.5px solid ${d.border}`}}>{d.label}</span>
            ))}
          </div>

          <div style={{position:"relative",borderRadius:"24px",overflow:"hidden",background:day.sky,padding:"24px",color:"#fff",boxShadow:"0 14px 34px rgba(20,24,58,.14)"}}>
            <span style={{position:"absolute",top:"20px",right:"28px",width:"52px",height:"52px",borderRadius:"50%",background:day.sun,boxShadow:`0 0 46px ${day.sun}`,animation:"sunPulse 4s ease-in-out infinite"}}></span>
            <span style={{position:"absolute",bottom:"-10px",right:"-20px",width:"55%",height:"110px",background:day.m1,clipPath:"polygon(50% 0,0 100%,100% 100%)",opacity:.85}}></span>
            <span style={{position:"absolute",bottom:"-10px",right:"22%",width:"40%",height:"80px",background:day.m2,clipPath:"polygon(50% 0,0 100%,100% 100%)",opacity:.7}}></span>
            <span style={{position:"absolute",top:"26px",left:"44%",width:"52px",height:"13px",borderRadius:"99px",background:"rgba(255,255,255,.5)",filter:"blur(1px)",animation:"cloudDrift 8s ease-in-out infinite"}}></span>
            <div style={{position:"relative"}}>
              <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(255,255,255,.2)",backdropFilter:"blur(6px)",borderRadius:"99px",padding:"6px 14px",fontSize:"11.5px",fontWeight:500,letterSpacing:".1em"}}>{day.badge}</div>
              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"26px",marginTop:"12px",letterSpacing:"-.01em"}}>{day.headline}</div>
              <div style={{fontSize:"13.5px",lineHeight:1.6,opacity:.95,marginTop:"8px",maxWidth:"420px"}}>{day.blurb}</div>
              <div style={{display:"flex",gap:"9px",marginTop:"16px",flexWrap:"wrap"}}>
                {day.chips.map((c, i) => (
                  <span key={i} style={{borderRadius:"99px",padding:"6px 13px",background:"rgba(255,255,255,.92)",color:"#14183a",fontSize:"11.5px",fontWeight:500,boxShadow:"0 4px 10px rgba(20,24,58,.1)"}}>{c.t}</span>
                ))}
              </div>
            </div>
          </div>

          {day.hasFlight && (
            <div style={{marginTop: "8px", marginBottom: "8px"}}>
              <BoardingPass />
            </div>
          )}

          {day.stops.map((s, i) => (
            <div key={i}>
              {s.hasDrive && (
                <div style={{display:"flex",justifyContent:"center",margin:"2px 0 14px"}}>
                  <span style={{display:"inline-flex",alignItems:"center",gap:"9px",borderRadius:"99px",padding:"6px 15px",background:"#fff",border:"1px dashed #eef0f7",fontSize:"11.5px",fontWeight:500,color:"#5a6474"}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{animation:"bobSm 2.6s ease-in-out infinite"}}><path d="M2.5 9.5l1.2-3.2A2 2 0 0 1 5.6 5h4.8a2 2 0 0 1 1.9 1.3l1.2 3.2v3a1 1 0 0 1-1 1h-.6a1 1 0 0 1-1-1v-.5h-6v.5a1 1 0 0 1-1 1h-.4a1 1 0 0 1-1-1z" fill="#8a90a6"/><circle cx="5" cy="9.8" r="1" fill="#fff"/><circle cx="11" cy="9.8" r="1" fill="#fff"/></svg>
                    {s.drive}
                  </span>
                </div>
              )}
              <div onClick={() => openPlace(s.place)} className="hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(20,24,58,0.12)] transition-all duration-300" style={{background:"#fff",borderRadius:"24px",display:"flex",flexDirection:"column",cursor:"pointer",boxShadow:"0 6px 20px rgba(20,24,58,.06)",border:"1px solid #eef0f7",overflow:"hidden",marginBottom:"24px"}}>
                <div style={{position:"relative", height:"220px", width:"100%"}}>
                  <div style={{position:"absolute",inset:0,zIndex:0}}>
                    <img src={s.place.photoUrl || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800&h=400"} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover"}} />
                  </div>
                  <div style={{position:"absolute",top:"12px",right:"12px",display:"flex",gap:"8px",zIndex:2}}>
                    <span className="hover:scale-105 transition-transform" style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(77, 89, 45, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </span>
                    <span className="hover:scale-105 transition-transform" style={{width:"36px",height:"36px",borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                  </div>
                  <div style={{position:"absolute",bottom:"12px",left:0,right:0,display:"flex",justifyContent:"center",gap:"6px",zIndex:2}}>
                    <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#fff"}}></span>
                    <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,0.5)"}}></span>
                    <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,0.5)"}}></span>
                    <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,0.5)"}}></span>
                  </div>
                </div>

                <div style={{padding:"20px 24px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
                    <h3 style={{fontWeight:500,fontSize:"20px",color:"#14183a",margin:0,lineHeight:1.2}}>{s.title}</h3>
                    <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
                      <span style={{color:"#f59e0b",fontSize:"14px"}}>★</span>
                      <span style={{fontWeight:500,color:"#14183a",fontSize:"15px"}}>{s.place.rating}</span>
                      <span style={{color:"#8a90a6",fontSize:"14px",fontWeight:400}}>({s.place.reviews})</span>
                    </div>
                  </div>

                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px",color:"#5a6474",fontSize:"13.5px"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 
                    <span style={{fontWeight:500}}>{s.place.cat}</span>
                  </div>
                  <div style={{color:"#8a90a6",fontSize:"13.5px",marginBottom:"16px"}}>{s.place.address}</div>

                  <p style={{color:"#4b5563",fontSize:"14px",lineHeight:1.55,margin:0,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{s.place.about}</p>

                  <div style={{height:"1px",background:"#eef0f7",margin:"18px 0"}}></div>

                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                      <div style={{display:"flex"}}>
                        <span style={{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg,#6366f1,#0ea5e9)",border:"2px solid #fff",position:"relative",zIndex:2}}></span>
                        <span style={{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg,#14b8a6,#0ea5e9)",border:"2px solid #fff",marginLeft:"-8px",position:"relative",zIndex:1}}></span>
                      </div>
                      <span style={{fontSize:"13px",color:"#5a6474",fontWeight:500}}>Mentioned by {Math.floor(Math.random()*100 + 20)} people</span>
                    </div>
                    <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#f0f9ff",color:"#0284c7",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #bae6fd"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l9-4 9 4v12l-9 4-9-4z"/><path d="M12 2v20"/><path d="M3 6l9 4 9-4"/><path d="M12 10v12"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      )}

      {activeTab === 'analytics' && (
        <div style={{marginTop:"20px",animation:"fadeUp .3s ease-out"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))",gap:"24px",marginBottom:"32px"}}>
            {[
              { label: "Unique Opens", value: "14", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> },
              { label: "Total Time Spent", value: "8m 45s", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg> },
              { label: "Average Time per Open", value: "37s", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { label: "Link Shares", value: "3", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> }
            ].map((stat, i) => (
              <div key={i} style={{background:"#fff",borderRadius:"20px",padding:"24px",border:"1px solid #eef0f7",boxShadow:"0 5px 16px rgba(20,24,58,.04)",display:"flex",alignItems:"center",gap:"16px"}}>
                <div style={{width:"48px",height:"48px",borderRadius:"14px",background:"#f7f9fd",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>{stat.icon}</div>
                <div>
                  <div style={{fontSize:"12px",color:"#8a90a6",fontWeight:500}}>{stat.label}</div>
                  <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"26px",color:"#14183a",marginTop:"2px"}}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"28px"}}>
            <div style={{background:"#fff",borderRadius:"24px",padding:"28px",border:"1px solid #eef0f7",boxShadow:"0 5px 16px rgba(20,24,58,.04)"}}>
              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"20px",color:"#14183a",marginBottom:"24px"}}>Time Spent per Day Section</div>
              <div style={{height:"300px",width:"100%"}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Day 1', time: 120 },
                    { name: 'Day 2', time: 180 },
                    { name: 'Day 3', time: 145 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f7" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#8a90a6', fontSize:12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill:'#8a90a6', fontSize:12}} />
                    <Tooltip cursor={{fill:"#f7f9fd"}} contentStyle={{borderRadius:"12px",border:"none",boxShadow:"0 8px 24px rgba(20,24,58,.12)"}} />
                    <Bar dataKey="time" name="Seconds Spent" fill="#4f46e5" radius={[6,6,0,0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={{background:"#fff",borderRadius:"24px",padding:"28px",border:"1px solid #eef0f7",boxShadow:"0 5px 16px rgba(20,24,58,.04)"}}>
              <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"20px",color:"#14183a",marginBottom:"24px"}}>Client Events</div>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[
                  { time: '10:45 AM today', event: 'Client opened itinerary' },
                  { time: '10:47 AM today', event: 'Expanded "Paro Highlights"' },
                  { time: '10:50 AM today', event: 'Shared via WhatsApp' },
                  { time: '09:20 AM yesterday', event: 'Client opened itinerary' },
                ].map((ev, i) => (
                  <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                    <div style={{width:"8px",height:"8px",borderRadius:"50%",background:"#0ea5e9",marginTop:"6px"}}></div>
                    <div>
                      <div style={{fontSize:"13.5px",fontWeight:500,color:"#14183a"}}>{ev.event}</div>
                      <div style={{fontSize:"11.5px",color:"#8a90a6",marginTop:"2px"}}>{ev.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

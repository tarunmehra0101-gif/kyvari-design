'use client';
import React, { useState } from 'react';

export function PlaceDrawer({ place, closeDrawer }: { place: any, closeDrawer: () => void }) {
  const [tab, setTab] = useState('overview');
  const [isSunny, setIsSunny] = useState(true);

  const drawerTabs = ['overview', 'photos', 'reviews', 'location'].map(k => ({
    label: k.charAt(0).toUpperCase() + k.slice(1),
    select: () => setTab(k),
    bg: tab === k ? '#1d1f24' : '#fff',
    color: tab === k ? '#fff' : '#6f6d64',
    border: tab === k ? 'transparent' : '#eeece5'
  }));

  const ratingBars = [
    { star: '5', pct: '72%' }, { star: '4', pct: '19%' }, { star: '3', pct: '6%' }, { star: '2', pct: '2%' }, { star: '1', pct: '1%' }
  ];

  return (
    <>
      {/* Drawer Overlay */}
      <div 
        onClick={closeDrawer} 
        style={{ position: "fixed", inset: 0, background: "rgba(29,31,36,.45)", backdropFilter: "blur(6px)", zIndex: 40 }}
      ></div>

      {/* Drawer Content */}
      <div 
        data-screen-label="Place Drawer" 
        style={{ 
          position: "fixed", 
          top: 0, 
          right: 0, 
          bottom: 0, 
          width: "530px", 
          maxWidth: "92vw", 
          background: "#faf9f6", 
          borderLeft: "1px solid #eeece5",
          zIndex: 50, 
          boxShadow: "-24px 0 60px rgba(84,62,40,.16)", 
          animation: "drawerIn .35s cubic-bezier(.2,.8,.25,1) both", 
          display: "flex", 
          flexDirection: "column" 
        }}
      >
        
        {/* Scenery Card Header */}
        <div style={{ position: "relative", height: "190px", flex: "none", background: place.sky || 'linear-gradient(172deg,#ffe0b8 0%,#ffab90 75%)', overflow: "hidden" }}>
          <span style={{ position: "absolute", top: "24px", left: "36px", width: "44px", height: "44px", borderRadius: "50%", background: place.sun, boxShadow: `0 0 38px ${place.sun}`, animation: "sunPulse 4.5s ease-in-out infinite", display: "block" }}></span>
          <span style={{ position: "absolute", bottom: "-10px", left: "-24px", width: "60%", height: "110px", background: place.m1 || '#9080bd', clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
          <span style={{ position: "absolute", bottom: "-10px", right: "-30px", width: "58%", height: "88px", background: place.m2 || '#75659f', clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
          <span style={{ position: "absolute", top: "36px", left: "42%", width: "56px", height: "14px", borderRadius: "99px", background: "rgba(255,255,255,.6)", filter: "blur(1px)", animation: "cloudDrift 8s ease-in-out infinite", display: "block" }}></span>
          <span style={{ position: "absolute", top: "14px", left: "16px", borderRadius: "99px", padding: "6px 14px", background: place.catGrad || 'linear-gradient(135deg,#5a9fd4,#e8543f)', color: "#fff", fontSize: "11px", fontWeight: 500, letterSpacing: ".08em", boxShadow: "0 6px 14px rgba(84,62,40,.2)" }}>
            {place.cat || 'SIGHTSEEING'}
          </span>
          <span 
            onClick={closeDrawer} 
            className="hover:rotate-90 transition-transform duration-200" 
            style={{ position: "absolute", top: "12px", right: "14px", width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,.94)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px", color: "#1d1f24" }}
          >
            ✕
          </span>

          {/* Weather Widget Panel with Sunny/Rainy State Toggle click */}
          <div 
            onClick={() => setIsSunny(!isSunny)}
            title="Click to toggle weather"
            style={{ position: "absolute", bottom: "14px", right: "14px", borderRadius: "16px", background: "rgba(255,255,255,.94)", backdropFilter: "blur(8px)", padding: "9px 14px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 20px rgba(84,62,40,.12)", cursor: "pointer", userSelect: "none" }}
            className="hover:scale-[1.03] transition-transform"
          >
            {isSunny ? (
              <>
                <span style={{ position: "relative", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ position: "absolute", width: "24px", height: "24px", background: "#fde047", clipPath: "polygon(50% 0,63% 37%,100% 50%,63% 63%,50% 100%,37% 63%,0 50%,37% 37%)", animation: "spinSlow 8s linear infinite", display: "block" }}></span>
                  <span style={{ width: "13px", height: "13px", borderRadius: "50%", background: "linear-gradient(#fbbf24,#f59e0b)", position: "relative", animation: "sunPulse 2.4s ease-in-out infinite", display: "block" }}></span>
                </span>
                <span><b style={{ fontSize: "14px", color: "#1d1f24" }}>18°</b> <span style={{ fontSize: "10.5px", fontWeight: 500, color: "#a09d92" }}>CLEAR · PARO</span></span>
              </>
            ) : (
              <>
                <span style={{ position: "relative", width: "28px", height: "26px", display: "block" }}>
                  <span style={{ position: "absolute", top: "2px", left: "2px", width: "22px", height: "12px", borderRadius: "99px", background: "#94a3b8", display: "block" }}></span>
                  <span style={{ position: "absolute", top: "-1px", left: "8px", width: "13px", height: "13px", borderRadius: "50%", background: "#94a3b8", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: 0, left: "6px", width: "2.5px", height: "7px", borderRadius: "2px", background: "#38bdf8", animation: "drop 1.2s linear infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: 0, left: "13px", width: "2.5px", height: "7px", borderRadius: "2px", background: "#38bdf8", animation: "drop 1.2s linear .4s infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: 0, left: "20px", width: "2.5px", height: "7px", borderRadius: "2px", background: "#38bdf8", animation: "drop 1.2s linear .8s infinite", display: "block" }}></span>
                </span>
                <span><b style={{ fontSize: "14px", color: "#1d1f24" }}>14°</b> <span style={{ fontSize: "10.5px", fontWeight: 500, color: "#a09d92" }}>MONSOON · PARO</span></span>
              </>
            )}
          </div>
        </div>

        {/* Place Identification Metadata */}
        <div style={{ padding: "18px 24px 0", flex: "none" }}>
          <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", lineHeight: 1.25, letterSpacing: "-.02em", color: "#1d1f24" }}>
            {place.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", flexWrap: "wrap" }}>
            <span style={{ position: "relative", fontSize: "14px", letterSpacing: "2px", color: "#eeece5" }}>
              ★★★★★
              <span style={{ position: "absolute", left: 0, top: 0, overflow: "hidden", whiteSpace: "nowrap", color: "#ffc24d", width: place.ratingPct || '90%' }}>★★★★★</span>
            </span>
            <span style={{ fontWeight: 500, fontSize: "13.5px", color: "#1d1f24" }}>{place.rating}</span>
            <span style={{ fontSize: "12px", fontWeight: 400, color: "#a09d92" }}>{place.reviews} reviews · Google</span>
          </div>
          <div style={{ fontSize: "12.5px", color: "#6f6d64", fontWeight: 400, marginTop: "6px" }}>◉ {place.address}</div>

          {/* Drawer Tabs Swapper Toolbar */}
          <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
            {drawerTabs.map((tb, idx) => (
              <span 
                key={idx} 
                onClick={tb.select} 
                className="hover:-translate-y-[2px] active:scale-95 transition-all" 
                style={{ borderRadius: "99px", padding: "8px 16px", fontSize: "12.5px", fontWeight: 500, cursor: "pointer", background: tb.bg, color: tb.color, border: `1.5px solid ${tb.border}` }}
              >
                {tb.label}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Panels */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 24px 24px" }}>
          
          {tab === 'overview' && (
            <div style={{ animation: "fadeUp .3s ease-out both" }}>
              <div style={{ fontSize: "13.5px", lineHeight: 1.7, color: "#55534b" }}>{place.about}</div>

              {/* Highlights */}
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "17px", margin: "20px 0 14px", color: "#1d1f24" }}>Highlights</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {(place.highlights || []).map((h: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="hover:-translate-y-[2px] transition-all duration-300 group" 
                    style={{ display: "flex", gap: "18px", alignItems: "center", background: "#fff", border: "1px solid #eeece5", borderRadius: "20px", padding: "16px 20px", boxShadow: "0 8px 24px rgba(84,62,40,.04)" }}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300" style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {idx % 3 === 0 ? (
                        <div style={{position:"relative",width:"38px",height:"38px",filter:"drop-shadow(0 6px 10px rgba(139,92,246,0.3))"}}><svg viewBox="0 0 24 24" width="38" height="38"><path d="M12 2L2 9L12 22L22 9L12 2Z" fill="#a78bfa" /><path d="M12 2L2 9L12 12L12 2Z" fill="#c4b5fd" /><path d="M12 2L22 9L12 12L12 2Z" fill="#8b5cf6" /><path d="M2 9L12 22L12 12L2 9Z" fill="#7c3aed" /><path d="M22 9L12 22L12 12L22 9Z" fill="#5b21b6" /></svg></div>
                      ) : idx % 3 === 1 ? (
                        <div style={{position:"relative",width:"38px",height:"38px",filter:"drop-shadow(0 6px 10px rgba(245,158,11,0.3))"}}><svg viewBox="0 0 24 24" width="38" height="38"><path d="M12 2L14.5 9.5H22L16 14L18 21.5L12 17.5L6 21.5L8 14L2 9.5H9.5L12 2Z" fill="#fbbf24"/><path d="M12 2L14.5 9.5H22L16 14L12 17.5V2Z" fill="#fcd34d"/><path d="M12 17.5L18 21.5L16 14L12 17.5Z" fill="#f59e0b"/><path d="M12 17.5L6 21.5L8 14L12 17.5Z" fill="#d97706"/></svg></div>
                      ) : (
                        <div style={{position:"relative",width:"38px",height:"38px",filter:"drop-shadow(0 6px 10px rgba(16,185,129,0.3))"}}><svg viewBox="0 0 24 24" width="38" height="38"><path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" fill="#34d399" /><path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13V2z" fill="#6ee7b7" /><circle cx="12" cy="9" r="3" fill="#059669" /><circle cx="12" cy="9" r="1.5" fill="#fff" /></svg></div>
                      )}
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#1d1f24", lineHeight: 1.5 }}>{h.t}</span>
                  </div>
                ))}
              </div>

              {/* Good to know */}
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "17px", margin: "24px 0 14px", color: "#1d1f24" }}>Good to know</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {(place.facts || []).map((f: any, idx: number) => {
                  return (
                    <div 
                      key={idx} 
                      className="hover:-translate-y-[2px] transition-all duration-300 group" 
                      style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "20px", padding: "20px", boxShadow: "0 8px 24px rgba(84,62,40,.04)", position: "relative", overflow: "hidden", display: "flex", gap: "16px", alignItems: "center" }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300" style={{ flex: "none" }}>
                        {idx === 0 ? (
                          <div style={{position:"relative",width:"42px",height:"42px",filter:"drop-shadow(0 6px 10px rgba(59,130,246,0.25))"}}><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#bfdbfe" /><circle cx="18" cy="18" r="12" fill="#fff" /><path d="M18 10v8l5 3" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                        ) : idx === 1 ? (
                          <div style={{position:"relative",width:"42px",height:"42px",filter:"drop-shadow(0 6px 10px rgba(16,185,129,0.25))"}}><svg viewBox="0 0 36 36"><path d="M10 6h16v6l-6 6 6 6v6H10v-6l6-6-6-6V6z" fill="#a7f3d0" /><path d="M16 18l6 6v6H10v-6l6-6z" fill="#34d399" /><path d="M10 6h16v3H10z" fill="#059669" /><path d="M10 27h16v3H10z" fill="#059669" /></svg></div>
                        ) : idx === 2 ? (
                          <div style={{position:"relative",width:"42px",height:"42px",filter:"drop-shadow(0 6px 10px rgba(236,72,153,0.25))"}}><svg viewBox="0 0 36 36"><path d="M6 14l12-6 12 6-12 6-12-6z" fill="#fbcfe8" /><path d="M6 20l12 6 12-6-12-6-12 6z" fill="#f472b6" opacity="0.8" /><path d="M6 26l12 6 12-6-12-6-12 6z" fill="#db2777" opacity="0.8" /></svg></div>
                        ) : (
                          <div style={{position:"relative",width:"42px",height:"42px",filter:"drop-shadow(0 6px 10px rgba(234,179,8,0.25))"}}><svg viewBox="0 0 36 36"><rect x="4" y="10" width="28" height="16" rx="3" fill="#fde047" /><circle cx="4" cy="18" r="4" fill="#fff" /><circle cx="32" cy="18" r="4" fill="#fff" /><path d="M14 14h8M14 18h8M14 22h8" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" /></svg></div>
                        )}
                      </div>
                      <div>
                        <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: ".15em", color: "#a09d92", textTransform: "uppercase" }}>{f.label}</div>
                        <div style={{ fontSize: "14px", fontWeight: 500, color: "#1d1f24", marginTop: "4px", lineHeight: 1.4 }}>{f.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Weather Forecast widget */}
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "17px", margin: "24px 0 14px", color: "#1d1f24" }}>Practical details</div>
              {isSunny ? (
                <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #eeece5", boxShadow: "0 6px 16px rgba(84,62,40,.04)", overflow: "hidden", marginBottom: "12px" }}>
                  <div style={{ height: "84px", background: "linear-gradient(170deg,#ffeed8 0%,#ffd4a8 100%)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: "18px", left: "22px", width: "26px", height: "26px", borderRadius: "50%", background: "radial-gradient(circle at 30% 30%,#fff4cc,#ffc24d 55%,#ff8f2e)", boxShadow: "0 4px 12px rgba(255,143,46,0.3)", animation: "spinSlow 10s linear infinite", display: "block" }}></div>
                    <div style={{ position: "absolute", top: "30px", left: "100px", width: "46px", height: "11px", borderRadius: "99px", background: "rgba(255,255,255,0.9)", filter: "blur(0.5px)", display: "block" }}></div>
                    <div style={{ position: "absolute", bottom: 0, right: "-20px", width: "0", height: "0", borderLeft: "80px solid transparent", borderRight: "80px solid transparent", borderBottom: "45px solid #dcd9cc", display: "block" }}></div>
                    <div style={{ position: "absolute", bottom: 0, right: "50px", width: "0", height: "0", borderLeft: "100px solid transparent", borderRight: "100px solid transparent", borderBottom: "35px solid #cbd5e1", display: "block" }}></div>
                    <div style={{ position: "absolute", top: "16px", right: "18px", color: "#1d1f24", fontSize: "22px", fontWeight: 500, textShadow: "0 2px 6px rgba(255,255,255,0.3)" }}>18°</div>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".15em", color: "#6f6d64", textTransform: "uppercase" }}>WEATHER · {place.weatherWhen}</div>
                    <div style={{ fontSize: "13.5px", fontWeight: 400, color: "#55534b", lineHeight: 1.55, marginTop: "6px" }}>{place.weatherSunny}</div>
                  </div>
                </div>
              ) : (
                <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #eeece5", boxShadow: "0 6px 16px rgba(84,62,40,.04)", overflow: "hidden", marginBottom: "12px" }}>
                  <div style={{ height: "84px", background: "linear-gradient(170deg,#cbd5e1 0%,#94a3b8 100%)", position: "relative", overflow: "hidden" }}>
                    <span style={{ position: "absolute", top: "20px", left: "20px", width: "44px", height: "22px", borderRadius: "99px", background: "#cbd5e1", display: "block" }}></span>
                    <span style={{ position: "absolute", top: "14px", left: "32px", width: "24px", height: "24px", borderRadius: "50%", background: "#cbd5e1", display: "block" }}></span>
                    <span style={{ position: "absolute", bottom: "16px", left: "28px", width: "3px", height: "12px", borderRadius: "2px", background: "#e0f2fe", animation: "drop 1.2s linear infinite", display: "block" }}></span>
                    <span style={{ position: "absolute", bottom: "16px", left: "40px", width: "3px", height: "12px", borderRadius: "2px", background: "#e0f2fe", animation: "drop 1.2s linear .4s infinite", display: "block" }}></span>
                    <span style={{ position: "absolute", bottom: "16px", left: "52px", width: "3px", height: "12px", borderRadius: "2px", background: "#e0f2fe", animation: "drop 1.2s linear .8s infinite", display: "block" }}></span>
                    <div style={{ position: "absolute", top: "16px", right: "18px", color: "#fff", fontSize: "22px", fontWeight: 500, textShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>14°</div>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".15em", color: "#6f6d64", textTransform: "uppercase" }}>WEATHER · {place.weatherWhen}</div>
                    <div style={{ fontSize: "13.5px", fontWeight: 400, color: "#55534b", lineHeight: 1.55, marginTop: "6px" }}>{place.weatherRainy}</div>
                  </div>
                </div>
              )}

              {/* What to Pack Suitcase Widget */}
              {/* What to Pack Suitcase Widget */}
              <div style={{ borderRadius: "20px", background: "#fff", border: "1px solid #eeece5", display: "flex", alignItems: "center", gap: "20px", padding: "20px", boxShadow: "0 8px 24px rgba(84,62,40,.04)", position: "relative", overflow: "hidden", marginTop: "16px" }}>
                <div style={{ position: "relative", width: "70px", height: "70px", flex: "none", animation: "float 6s ease-in-out infinite" }}>
                   <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, #fde047, #f59e0b)", borderRadius: "16px", transform: "rotate(-8deg) skew(4deg)", boxShadow: "0 12px 24px rgba(245,158,11,0.35), inset 2px 2px 5px rgba(255,255,255,0.6)" }}></div>
                   <div style={{ position: "absolute", top: "-12px", left: "18px", width: "34px", height: "18px", border: "4.5px solid #b45309", borderBottom: "none", borderRadius: "10px 10px 0 0", transform: "rotate(-8deg) skew(4deg)" }}></div>
                   <div style={{ position: "absolute", bottom: "10px", right: "-8px", width: "26px", height: "34px", background: "linear-gradient(135deg, #38bdf8, #0284c7)", borderRadius: "8px", transform: "rotate(18deg)", boxShadow: "0 6px 12px rgba(2,132,199,0.3), inset 1px 1px 4px rgba(255,255,255,0.6)" }}></div>
                   <span style={{ position: "absolute", top: "-5px", right: "-5px", color: "#fbbf24", fontSize: "18px", animation: "twinkle 2s infinite" }}>✦</span>
                   <span style={{ position: "absolute", bottom: "5px", left: "-10px", color: "#38bdf8", fontSize: "14px", animation: "twinkle 2s infinite 1s" }}>✦</span>
                </div>
                <div>
                  <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: ".15em", color: "#b45309", textTransform: "uppercase" }}>WHAT TO PACK</div>
                  <div style={{ fontSize: "14px", fontWeight: 500, color: "#1d1f24", lineHeight: 1.5, marginTop: "6px" }}>{place.pack}</div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                    {['Fleece jacket', 'Warm socks', 'Kindle for fireside'].map((chip, idx) => (
                      <span key={idx} style={{ padding: "6px 14px", borderRadius: "99px", background: "#fef3c7", border: "1px solid #fde68a", fontSize: "11.5px", fontWeight: 600, color: "#92400e" }}>{chip}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local Tip Box */}
              {place.local && (
                <div style={{ borderRadius: "20px", background: "#fff", border: "1px solid #eeece5", padding: "20px", display: "flex", gap: "18px", alignItems: "center", marginTop: "16px", boxShadow: "0 8px 24px rgba(84,62,40,.04)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: "linear-gradient(180deg, #34d399, #059669)" }}></div>
                  <span style={{ width: "52px", height: "52px", flex: "none", borderRadius: "50%", background: "linear-gradient(135deg, #a7f3d0, #10b981)", padding: "2.5px", boxShadow: "0 8px 20px rgba(16,185,129,0.25)" }}>
                    <img src={`https://api.dicebear.com/9.x/micah/svg?seed=Local${place.name.length}&backgroundColor=transparent`} alt="Local" style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#f0fdf4", objectFit: "cover" }} />
                  </span>
                  <div>
                    <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: ".15em", color: "#059669", textTransform: "uppercase" }}>LOCAL TIP · FROM A PARO LOCAL</div>
                    <div style={{ fontSize: "14px", fontWeight: 500, color: "#1d1f24", lineHeight: 1.5, marginTop: "6px" }}>{place.local}</div>
                  </div>
                </div>
              )}

              {/* Insider secret */}
              {place.insider && (
                <div style={{ marginTop: "12px", position: "relative", overflow: "hidden", borderRadius: "18px", background: "linear-gradient(160deg,#1d1f24 0%,#2c2820 60%,#18191c 100%)", padding: "15px 16px", boxShadow: "0 10px 26px rgba(29,31,36,.22)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ position: "absolute", top: "10px", right: "20px", width: "4px", height: "4px", borderRadius: "50%", background: "#fff", animation: "twinkle 2s ease-in-out infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", top: "26px", right: "56px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.6s ease-in-out .6s infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: "14px", right: "34px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.2s ease-in-out 1.1s infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", top: "12px", right: "24px", width: "26px", height: "26px", borderRadius: "50%", background: "radial-gradient(circle at 38% 34%,#fff5d0,#ffd4a8)", display: "block" }}></span>
                  <span style={{ position: "absolute", top: "9px", right: "28px", width: "21px", height: "21px", borderRadius: "50%", background: "#1d1f24", display: "block" }}></span>
                  <div style={{ display: "flex", gap: "13px", alignItems: "center", position: "relative" }}>
                    <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "50%", background: "rgba(255,194,77,.12)", border: "1px solid rgba(255,194,77,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1l1.8 4.4L14 7l-4.2 1.6L8 13 6.2 8.6 2 7l4.2-1.6z" fill="#ffc24d"/></svg>
                    </span>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".16em", color: "#ffc24d" }}>INSIDER SECRET</div>
                      <div style={{ fontSize: "13.5px", fontWeight: 400, color: "#faf9f6", lineHeight: 1.6, marginTop: "5px" }}>{place.insider}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Why Kyvari Picked This Card */}
              <div style={{ marginTop: "18px", borderRadius: "20px", padding: "1.5px", background: "linear-gradient(120deg,#e8543f,#ffab90,#e8543f)", backgroundSize: "200% 100%", animation: "gradShift 5s linear infinite", boxShadow: "0 16px 36px rgba(232,84,63,.2)" }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "18.5px", background: "linear-gradient(155deg,#1d1f24 0%,#2c2820 60%,#18191c 100%)", padding: "20px" }}>
                  <span style={{ position: "absolute", top: "-44px", right: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(232,84,63,.4),transparent 68%)", animation: "aurora 7s ease-in-out infinite", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: "-56px", left: "-24px", width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,171,144,.3),transparent 68%)", animation: "aurora 9s ease-in-out 1.4s infinite", display: "block" }}></span>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "11px" }}>
                    <span style={{ position: "relative", width: "36px", height: "36px", flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ position: "absolute", width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid rgba(255,171,144,.5)", animation: "ringVibe 2.4s ease-out infinite", display: "block" }}></span>
                      <span style={{ position: "absolute", width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid rgba(232,84,63,.4)", animation: "ringVibe 2.4s ease-out 1.2s infinite", display: "block" }}></span>
                      <span style={{ width: "19px", height: "19px", borderRadius: "50%", background: "radial-gradient(circle at 32% 30%,#fff4cc,#e8543f 60%,#b23520)", boxShadow: "0 0 16px rgba(232,84,63,.8)", position: "relative", display: "block" }}></span>
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: ".2em", color: "#faf9f6" }}>WHY KYVARI PICKED THIS</span>
                  </div>
                  <div style={{ position: "relative", fontSize: "14px", lineHeight: 1.7, color: "#d9d6cb", marginTop: "14px", fontWeight: 500 }}>
                    {place.why}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'photos' && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", animation: "fadeUp .3s ease-out both" }}>
              {place.photos.map((p: any, idx: number) => (
                <div 
                  key={idx} 
                  className="hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(84,62,40,0.08)] transition-all duration-200" 
                  style={{ height: "130px", borderRadius: "16px", background: "repeating-linear-gradient(45deg,#eeece5 0 12px,#faf9f6 12px 24px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                >
                  <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", color: "#6f6d64", background: "rgba(255,255,255,.9)", borderRadius: "8px", padding: "5px 10px" }}>{p.label}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'reviews' && (
            <div style={{ animation: "fadeUp .3s ease-out both" }}>
              <div style={{ borderRadius: "18px", background: "linear-gradient(120deg,#fdf8e2,#fdeeea)", padding: "18px", display: "flex", alignItems: "center", gap: "18px" }}>
                <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "42px", color: "#b23520" }}>{place.rating}</div>
                <div style={{ flex: 1 }}>
                  <span style={{ position: "relative", fontSize: "17px", letterSpacing: "2px", color: "#eeece5" }}>
                    ★★★★★
                    <span style={{ position: "absolute", left: 0, top: 0, overflow: "hidden", whiteSpace: "nowrap", color: "#ffc24d", width: place.ratingPct || '90%' }}>★★★★★</span>
                  </span>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#8a6212", marginTop: "4px" }}>{place.reviews} reviews via Google</div>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "16px 0 20px" }}>
                {ratingBars.map((b, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "16px", fontSize: "11.5px", fontWeight: 500, color: "#a09d92" }}>{b.star}</span>
                    <div style={{ flex: 1, height: "7px", borderRadius: "99px", background: "#eeece5", overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: "99px", background: "linear-gradient(90deg,#ffc24d,#e8543f)", width: b.pct, transformOrigin: "left", animation: "grow .9s ease-out both" }}></div>
                    </div>
                    <span style={{ width: "34px", fontSize: "11px", fontWeight: 500, color: "#a09d92", textAlign: "right" }}>{b.pct}</span>
                  </div>
                ))}
              </div>

              {place.quotes.map((q: any, idx: number) => (
                <div 
                  key={idx} 
                  className="hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(84,62,40,0.06)] transition-all duration-200" 
                  style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "15px 16px", marginBottom: "10px", boxShadow: "0 4px 12px rgba(84,62,40,.04)" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: q.grad, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: "13px" }}>{q.initial}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: "12.5px", color: "#1d1f24" }}>{q.name}</div>
                      <div style={{ fontSize: "10.5px", color: "#a09d92", fontWeight: 400 }}>{q.when}</div>
                    </div>
                    <span style={{ color: "#ffc24d", fontSize: "12px", letterSpacing: "1px" }}>★★★★★</span>
                  </div>
                  <div style={{ fontSize: "13px", lineHeight: 1.6, color: "#55534b", marginTop: "10px" }}>{q.text}</div>
                </div>
              ))}
            </div>
          )}

          {tab === 'location' && (
            <div style={{ animation: "fadeUp .3s ease-out both" }}>
              <div style={{ position: "relative", height: "220px", borderRadius: "18px", overflow: "hidden", background: "repeating-linear-gradient(0deg,#eeece5 0 26px,#faf9f6 26px 27px),repeating-linear-gradient(90deg,#eeece5 0 26px,#faf9f6 26px 27px)", backgroundBlendMode: "multiply" }}>
                <span style={{ position: "absolute", top: "30%", left: "-5%", right: "-5%", height: "14px", background: "#d9d6cb", transform: "rotate(-7deg)", display: "block" }}></span>
                <span style={{ position: "absolute", top: "60%", left: "-5%", right: "-5%", height: "9px", background: "#eeece5", transform: "rotate(4deg)", display: "block" }}></span>
                <span style={{ position: "absolute", top: "46%", left: "50%", width: "16px", height: "16px", margin: "-8px", borderRadius: "50%", background: "linear-gradient(135deg,#e8543f,#ffab90)", boxShadow: "0 4px 10px rgba(232,84,63,.5)", display: "block" }}></span>
                <span style={{ position: "absolute", top: "46%", left: "50%", width: "34px", height: "34px", margin: "-17px", borderRadius: "50%", border: "2.5px solid rgba(232,84,63,.55)", animation: "ping 1.8s ease-out infinite", display: "block" }}></span>
                <span className="hover:-translate-y-[2px] transition-transform" style={{ position: "absolute", bottom: "12px", right: "12px", borderRadius: "99px", padding: "7px 14px", background: "#fff", border: "1px solid #eeece5", fontSize: "11.5px", fontWeight: 500, color: "#1d1f24", boxShadow: "0 6px 14px rgba(84,62,40,.12)", cursor: "pointer" }}>➤ Open in Maps</span>
                <span style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", color: "#6f6d64", background: "rgba(255,255,255,.9)", borderRadius: "8px", padding: "4px 9px" }}>map placeholder</span>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "#1d1f24", margin: "14px 0" }}>◉ {place.address}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span className="hover:-translate-y-[2px] transition-transform duration-200" style={{ flex: 1, textAlign: "center", borderRadius: "13px", padding: "12px", background: "#1d1f24", color: "#fff", fontWeight: 500, fontSize: "13px", cursor: "pointer", boxShadow: "0 8px 18px rgba(29,31,36,.2)" }}>➤ Directions</span>
                <span className="hover:bg-[#f1efe8] transition-colors duration-200" style={{ flex: 1, textAlign: "center", borderRadius: "13px", padding: "12px", background: "#fff", border: "1px solid #eeece5", fontWeight: 500, fontSize: "13px", color: "#1d1f24", cursor: "pointer" }}>◎ Website</span>
                <span className="hover:bg-[#f1efe8] transition-colors duration-200" style={{ flex: 1, textAlign: "center", borderRadius: "13px", padding: "12px", background: "#fff", border: "1px solid #eeece5", fontWeight: 500, fontSize: "13px", color: "#1d1f24", cursor: "pointer" }}>✆ Call</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Reserve Panel */}
        <div style={{ flex: "none", padding: "14px 24px", background: "#fff", borderTop: "1px solid #eeece5", display: "flex", alignItems: "center", gap: "14px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "19px", color: "#1d1f24" }}>{place.price}</div>
            <div style={{ fontSize: "11px", color: "#a09d92", fontWeight: 400 }}>prices confirmed at checkout</div>
          </div>
          <div style={{ flex: 1 }}></div>
          <span className="hover:text-[#1d1f24] transition-colors" style={{ fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", cursor: "pointer" }}>✎ Edit details</span>
          <span 
            className="hover:-translate-y-[1.5px] hover:bg-[#e8543f] active:scale-95 transition-all" 
            style={{ position: "relative", overflow: "hidden", borderRadius: "13px", padding: "12px 22px", background: "#1d1f24", color: "#fff", fontWeight: 500, fontSize: "13.5px", cursor: "pointer", boxShadow: "0 8px 20px rgba(29,31,36,.22)" }}
          >
            Reserve
            <span style={{ position: "absolute", top: 0, bottom: 0, width: "30px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)", animation: "shine 4s ease-in-out infinite" }}></span>
          </span>
        </div>
      </div>
    </>
  );
}

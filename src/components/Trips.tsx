'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { trips } from '../data';

export function Trips() {
  const router = useRouter();

  return (
    <div data-screen-label="Trip Itineraries" style={{ padding: "34px 40px", maxWidth: "1420px", margin: "0 auto", animation: "fadeUp .4s ease-out both" }}>
      
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "26px", flexWrap: "wrap" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "30px", letterSpacing: "-.03em", margin: 0 }}>Trip itineraries</h1>
          <div style={{ color: "#a09d92", fontSize: "13px", fontWeight: 500, marginTop: "5px" }}>15 journeys crafted · 6 sent this week</div>
        </div>
        <div style={{ flex: 1 }}></div>
        <div style={{ display: "flex", background: "#f1efe8", borderRadius: "99px", padding: "4px", gap: "2px" }}>
          <span style={{ padding: "7px 15px", borderRadius: "99px", background: "#fff", color: "#1d1f24", fontSize: "12.5px", fontWeight: 500, boxShadow: "0 2px 6px rgba(84,62,40,.1)" }}>Recent</span>
          <span className="hover:text-[#1d1f24] transition-colors" style={{ padding: "7px 15px", borderRadius: "99px", color: "#6f6d64", fontSize: "12.5px", fontWeight: 500, cursor: "pointer" }}>Destination</span>
          <span className="hover:text-[#1d1f24] transition-colors" style={{ padding: "7px 15px", borderRadius: "99px", color: "#6f6d64", fontSize: "12.5px", fontWeight: 500, cursor: "pointer" }}>Client</span>
        </div>
        <div 
          onClick={() => router.push('/')}
          className="hover:-translate-y-[1.5px] active:scale-95 transition-all"
          style={{ position: "relative", overflow: "hidden", borderRadius: "13px", padding: "11px 19px", background: "#1d1f24", color: "#fff", fontWeight: 500, fontSize: "13.5px", cursor: "pointer", boxShadow: "0 8px 20px rgba(29,31,36,.22)" }}
        >
          + New itinerary
          <span style={{ position: "absolute", top: 0, bottom: 0, width: "34px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)", animation: "shine 4s ease-in-out infinite" }}></span>
        </div>
      </div>

      {/* Grid of Trip Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
        {trips.map((t: any, i: number) => {
          const sc = t.sc || { sky: 'linear-gradient(172deg,#ffe0b8 0%,#ffab90 75%)', sun: '#fff5d0', m1: '#9080bd', m2: '#75659f', m3: '#5d4f86', dot: '#e8543f' };
          const dotColor = sc.dot || '#e8543f';
          const tagLabel = t.tag?.t || 'ADVENTURE';

          return (
            <div 
              key={i} 
              onClick={() => router.push('/detail')} 
              className="group hover:-translate-y-[6px] hover:shadow-[0_24px_48px_rgba(0,0,0,.25)] transition-all duration-400"
              style={{
                position: "relative",
                height: "400px", // slightly taller for the grid layout in Trips page
                borderRadius: "22px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 12px 24px rgba(0,0,0,.08)"
              }}
            >
              <img 
                src={t.image} 
                alt={t.title} 
                className="group-hover:scale-105 transition-transform duration-700 ease-out" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              
              {/* Elegant dark gradient overlay to deepen edges */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />
              
                  {/* Top Bar: Themes & Metrics */}
                  <div style={{ position: "absolute", top: "16px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 10 }}>
                    
                    {/* Unique Theme Labels: Flat minimalist pill */}
                    <div style={{ display: "flex", gap: "6px", flexDirection: "column", alignItems: "flex-start" }}>
                      {(t.themes || []).map((th: any, idx: number) => {
                        return (
                          <div key={idx} style={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            background: "rgba(20, 20, 22, 0.5)", 
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            padding: "5px 10px", 
                            borderRadius: "99px",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            gap: "6px"
                          }}>
                            {/* Flat Icon */}
                            <div style={{ color: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center" }}>
                              {(() => {
                                switch (th.t) {
                                  case 'ADVENTURE': return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>;
                                  case 'ROMANTIC': return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
                                  case 'URBAN': return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
                                  case 'LUXURY': return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
                                  default: return <span style={{ fontSize: "10px" }}>{th.i}</span>;
                                }
                              })()}
                            </div>
                            
                            {/* Divider Line */}
                            <div style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.3)" }}></div>
                            
                            {/* Text */}
                            <span style={{ 
                              fontSize: "9px", 
                              fontWeight: 700, 
                              color: "#ffffff", 
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              paddingTop: "1px"
                            }}>
                              {th.t}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Metrics: Just the Heart */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                      {/* Heart Button: Circular action button */}
                      <div className="group/love hover:scale-110 transition-all duration-300 cursor-pointer" style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff"
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/love:fill-[#FF385C] group-hover/love:stroke-[#FF385C] transition-colors"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </div>
                    </div>
              </div>

              {/* Bottom Glass Card */}
              <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", background: "rgba(20,22,26,0.45)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.15)", borderTopColor: "rgba(255,255,255,0.25)", padding: "16px", display: "flex", flexDirection: "column", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
                
                <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "19px", color: "#fff", lineHeight: 1.25, marginBottom: "10px", letterSpacing: "0.01em" }}>
                  {t.title}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 1, minWidth: 0, overflow: "hidden" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d6d3c7" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span style={{ fontSize: "9px", fontWeight: 600, color: "#d6d3c7", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.city}</span>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {t.createdDate}
                  </div>
                </div>

                <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))", marginBottom: "14px" }}></div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {/* Creator & Client */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fff", padding: "1.5px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                      <img src={`https://api.dicebear.com/9.x/micah/svg?seed=${t.agentSeed || 'Agent'}&backgroundColor=e8543f`} alt={t.agentSeed} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#f4f2ec", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.55)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1px" }}>Created For</span>
                      <span style={{ fontSize: "12px", color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}>{t.client}</span>
                    </div>
                  </div>

                  {/* Right side: Avatars + Views */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {/* Avatars */}
                    <div className="flex items-center -space-x-2">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" className="w-[26px] h-[26px] rounded-full border-2 border-[#1a1c20] object-cover" />
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" className="w-[26px] h-[26px] rounded-full border-2 border-[#1a1c20] object-cover" />
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" className="w-[26px] h-[26px] rounded-full border-2 border-[#1a1c20] object-cover" />
                      <div className="w-[26px] h-[26px] rounded-full border-2 border-[#1a1c20] bg-[#6366f1] flex items-center justify-center text-white text-[12px] font-medium">+</div>
                    </div>

                    {/* Views Highlighted */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "20px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>{t.views}</span>
                      </div>
                      <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>Views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

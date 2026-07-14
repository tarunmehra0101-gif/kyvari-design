'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, MapPin, Calendar, Clock, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { days } from '../../data';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format("woff2");font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format("woff2");font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes pulseGlow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4)); }
}
@keyframes scrollText {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export default function PreviewPage() {
  const [mounted, setMounted] = useState(false);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  const handleScroll = (e: any) => {
    const sections = Array.from(document.querySelectorAll('div[data-day-id]')) as HTMLElement[];
    if (sections.length === 0) return;
    
    let currentIdx = 0;
    let minDiff = Infinity;
    
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].getBoundingClientRect().top;
      const diff = Math.abs(top - 150);
      if (diff < minDiff) {
        minDiff = diff;
        currentIdx = i;
      }
    }
    setActiveDayIndex(currentIdx);
  };

  if (!mounted) return null;

  return (
    <>
      <style>{FONT_CSS}</style>
      <div 
        style={{ background: "#f8f8fa", minHeight: "100vh", color: "#09090b", fontFamily: "Cosmic, sans-serif" }}
        onScroll={handleScroll}
        className="h-screen overflow-y-auto overflow-x-hidden"
      >
        
        {/* ─── MASSIVE CINEMATIC HERO ─── */}
        <div style={{ position: "relative", width: "100%", height: "80vh", minHeight: "600px", overflow: "hidden", background: "#09090b" }}>
          
          <img 
            src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1600&q=80" 
            alt="Bhutan" 
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.6 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, #09090b 100%)" }}></div>
          
          <div style={{ position: "absolute", top: "40px", left: "0", width: "100%", display: "flex", justifyContent: "space-between", padding: "0 40px", zIndex: 10 }}>
            <Link href="/detail2" style={{ textDecoration: "none", color: "#fff", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px", background: "rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: "100px", backdropFilter: "blur(12px)" }}>
              &larr; Back to Editor
            </Link>
            <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: "100px", color: "#fff", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={14} /> Created with Kyvari AI
            </div>
          </div>

          <div style={{ position: "absolute", bottom: "80px", left: "0", width: "100%", padding: "0 80px", zIndex: 10, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "800px" }}>
              <div style={{ display: "inline-flex", background: "rgba(232,84,63,0.2)", backdropFilter: "blur(8px)", borderRadius: "100px", padding: "6px 16px", fontSize: "12px", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", color: "#ff8a5c", marginBottom: "24px" }}>
                Meera & Arjun's Honeymoon
              </div>
              <h1 style={{ fontFamily: "Cosmic, sans-serif", fontSize: "64px", fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 16px", lineHeight: 1.1, color: "#fff", textShadow: "0 12px 48px rgba(0,0,0,0.5)" }}>
                Bhutanese Bliss:<br/>A Himalayan Adventure
              </h1>
              <p style={{ fontSize: "18px", color: "#d4d4d8", lineHeight: 1.6, margin: 0, fontWeight: 400, maxWidth: "600px" }}>
                Embark on an immersive journey blending wellness, spiritual discovery, and breathtaking scenery across Paro and Thimphu.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "16px" }}>
              {/* Stat Pills Home2 style */}
              <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "20px 32px", color: "#fff", display: "flex", flexDirection: "column", gap: "8px", animation: "floatY 6s ease-in-out infinite" }}>
                <Calendar size={20} color="#ff8a5c" />
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em" }}>Dates</span>
                <span style={{ fontSize: "24px", fontWeight: 800 }}>20-22 Jul</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "20px 32px", color: "#fff", display: "flex", flexDirection: "column", gap: "8px", animation: "floatY 6s ease-in-out infinite", animationDelay: "1s" }}>
                <Users size={20} color="#ff8a5c" />
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em" }}>Travelers</span>
                <span style={{ fontSize: "24px", fontWeight: 800 }}>2 Adults</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MARQUEE ─── */}
        <div style={{ background: "#09090b", padding: "24px 0", overflow: "hidden", borderBottom: "1px solid #27272a" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "scrollText 40s linear infinite", width: "fit-content", color: "#fff" }}>
            {Array(6).fill("✨ EXCLUSIVE ITINERARY BY WANDERLUST EXPERTS 🏔️ HAND-CRAFTED FOR MEERA & ARJUN").map((text, i) => (
              <span key={i} style={{ fontSize: "14px", fontWeight: 700, letterSpacing: ".2em", marginRight: "40px", color: "#71717a" }}>{text}</span>
            ))}
          </div>
        </div>

        {/* ─── MAIN CONTENT ─── */}
        <div style={{ padding: "80px", maxWidth: "1600px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "60px" }}>
            
            {/* Timeline Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
              {days.map((day, idx) => (
                <div key={idx} data-day-id={idx} style={{ opacity: activeDayIndex === idx ? 1 : 0.4, transition: "opacity 0.4s" }}>
                  
                  {/* Day Header */}
                  <div style={{ display: "flex", gap: "24px", marginBottom: "40px" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "24px", background: "#09090b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, flexShrink: 0, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ display: "inline-flex", background: "rgba(232,84,63,0.1)", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase", color: "#e8543f", marginBottom: "8px" }}>
                        {day.badge}
                      </div>
                      <h2 style={{ fontSize: "36px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-.02em" }}>{day.headline}</h2>
                      <p style={{ fontSize: "16px", color: "#52525b", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{day.blurb}</p>
                    </div>
                  </div>

                  {/* Day Sections */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px", paddingLeft: "32px", borderLeft: "2px dashed #ececee", marginLeft: "32px" }}>
                    {day.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                          <span style={{ fontSize: "24px" }}>{sec.part === 'morning' ? '🌅' : sec.part === 'afternoon' ? '☀️' : '🌙'}</span>
                          <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-.01em" }}>{sec.title}</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "#a1a1aa", background: "#ececee", padding: "4px 10px", borderRadius: "100px" }}>{sec.time}</span>
                        </div>

                        {/* Rich Bento Activity Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                          {sec.entries.map((e, eIdx) => {
                            const p = e.place;
                            return (
                              <div key={eIdx}>
                                <p style={{ fontSize: "15px", color: "#52525b", lineHeight: 1.6, marginBottom: "20px" }}>{e.copy}</p>

                                {p && (
                                  <div style={{ background: "#fff", borderRadius: "24px", overflow: "hidden", display: "flex", border: "1px solid #ececee", boxShadow: "0 12px 32px rgba(0,0,0,0.03)", transition: "transform 0.3s", cursor: "pointer" }} className="hover:-translate-y-1">
                                    
                                    {/* Graphic (home2 service card style) */}
                                    <div style={{ width: "160px", background: p.sky || "#f4f3f0", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                                      {p.sun && <span style={{ position: "absolute", top: "16px", left: "16px", width: "40px", height: "40px", borderRadius: "50%", background: p.sun, animation: "sunPulse 4s infinite" }}></span>}
                                      {p.m1 && <span style={{ position: "absolute", bottom: "-10px", left: "-10px", width: "120%", height: "80px", background: p.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)" }}></span>}
                                      {p.m2 && <span style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "80%", height: "50px", background: p.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)" }}></span>}
                                    </div>
                                    
                                    {/* Info */}
                                    <div style={{ padding: "32px", flex: 1 }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: 800, background: "rgba(232,84,63,0.1)", color: "#e8543f", padding: "4px 10px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: ".1em" }}>{p.cat}</span>
                                          {p.rating && <span style={{ fontSize: "13px", fontWeight: 700, color: "#8a6a12", display: "flex", alignItems: "center", gap: "4px" }}><Star fill="#f59e0b" color="#f59e0b" size={14}/> {p.rating}</span>}
                                        </div>
                                      </div>
                                      <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 12px", color: "#09090b" }}>{e.label}</h3>
                                      <div style={{ display: "flex", gap: "16px", fontSize: "14px", color: "#71717a", fontWeight: 600 }}>
                                        {p.duration && <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={16} /> {p.duration}</span>}
                                        {p.best && <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Sparkles size={16} /> {p.best}</span>}
                                      </div>
                                    </div>
                                    
                                    {/* Action */}
                                    <div style={{ width: "80px", borderLeft: "1px solid #ececee", display: "flex", alignItems: "center", justifyItems: "center", background: "#fcfaf7", padding: "0 24px" }}>
                                      <ArrowRight color="#e8543f" size={24} />
                                    </div>

                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* Sticky Map Right */}
            <div style={{ position: "sticky", top: "40px", height: "calc(100vh - 180px)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "32px", background: "#1d1f24", position: "relative", overflow: "hidden", border: "1px solid #27272a", boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}>
                {/* SVG Route Map */}
                <svg viewBox="0 0 400 600" style={{ width: "100%", height: "100%", opacity: 0.6 }}>
                  <path d="M150 200 Q 250 150 250 280 T 380 320" stroke="#e8543f" strokeWidth="3" fill="none" strokeDasharray="8 8" strokeLinecap="round" style={{ animation: "dashFlow 30s linear infinite" }} />
                  <path d="M380 320 Q 300 450 150 450" stroke="#e8543f" strokeWidth="3" fill="none" strokeDasharray="8 8" strokeLinecap="round" style={{ animation: "dashFlow 30s linear infinite reverse" }} />
                </svg>

                {/* Day Markers */}
                {days.map((d, idx) => (
                  <div key={idx} style={{
                    position: "absolute",
                    top: idx === 0 ? "180px" : idx === 1 ? "300px" : "430px",
                    left: idx === 0 ? "130px" : idx === 1 ? "360px" : "130px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                    transform: activeDayIndex === idx ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  }}>
                    <div style={{
                      width: activeDayIndex === idx ? "48px" : "32px",
                      height: activeDayIndex === idx ? "48px" : "32px",
                      borderRadius: "50%",
                      background: activeDayIndex === idx ? "linear-gradient(135deg, #ff8a5c, #e8543f)" : "#27272a",
                      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: activeDayIndex === idx ? "0 12px 24px rgba(232,84,63,0.4)" : "none",
                      border: activeDayIndex === idx ? "none" : "2px solid #52525b",
                      fontSize: activeDayIndex === idx ? "20px" : "14px", fontWeight: 800,
                      transition: "all 0.4s"
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ background: "rgba(0,0,0,0.8)", padding: "4px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      {d.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── STICKY BOTTOM BAR ─── */}
        <div style={{ position: "fixed", bottom: "40px", left: "50%", transform: "translateX(-50%)", background: "rgba(9, 9, 11, 0.8)", backdropFilter: "blur(20px)", borderRadius: "100px", padding: "12px 12px 12px 32px", display: "flex", alignItems: "center", gap: "32px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 64px rgba(0,0,0,0.2)", zIndex: 50 }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: ".1em" }}>Your trip, all in</div>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}>
              $1,850 <span style={{ fontSize: "16px", fontWeight: 500, color: "#71717a" }}>per person</span>
            </div>
          </div>
          <button style={{ background: "linear-gradient(135deg, #ff8a5c, #e8543f)", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "100px", fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 8px 24px rgba(232,84,63,0.3)", fontFamily: "Cosmic, sans-serif" }}>
            Book Itinerary <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </>
  );
}

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { MapPin, Users, Calendar, Sparkles } from 'lucide-react';
import { days } from '../data';
import { BoardingPass } from './BoardingPass';

export function Detail({ openPlace }: { openPlace: (p: any) => void }) {
  const router = useRouter();
  const [dayIdx, setDayIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');

  const day = days[dayIdx];

  // Map tabs with current day selection
  const dayTabs = days.map((d, i) => ({
    label: d.name + (i === 0 ? ' · Arrival' : i === 1 ? ' · The Climb' : ' · Farewell'),
    select: () => setDayIdx(i),
    bg: dayIdx === i ? '#1d1f24' : '#fff',
    color: dayIdx === i ? '#fff' : '#6f6d64',
    border: dayIdx === i ? 'transparent' : '#eeece5',
    shadow: dayIdx === i ? '0 10px 22px rgba(29,31,36,.25)' : 'none'
  }));

  const entryColors: any = {
    SIGHTSEEING: ['#5a9fd4', 'rgba(90,159,212,.3)', '#eaf3fa', '#2d6da3'],
    HOTEL: ['#8b7cf6', 'rgba(139,124,246,.3)', '#f0edfc', '#5b48c2'],
    FOOD: ['#ffc24d', 'rgba(255,194,77,.4)', '#fdf4e3', '#8a6212'],
    ACTIVITY: ['#e8543f', 'rgba(232,84,63,.3)', '#fdeeea', '#b23520']
  };

  return (
    <div data-screen-label="Itinerary Detail" style={{ padding: "26px 40px 48px", maxWidth: "1420px", margin: "0 auto", animation: "fadeUp .4s ease-out both" }}>
      
      {/* Detail Header Hero */}
      <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-[#1d1f24] mb-4">
        {/* Award-Winning Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d1f24] via-[#2a2333] to-[#452735]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8543f] opacity-20 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5a9fd4] opacity-20 rounded-full blur-[100px] mix-blend-screen -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 px-10 py-12 md:py-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            {/* Back Button */}
            <span 
              onClick={() => router.push('/trips')} 
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white cursor-pointer transition-all mb-6 hover:-translate-x-1 backdrop-blur-md shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 14 14">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            
            <h1 className="text-white text-[34px] md:text-[42px] font-light leading-tight tracking-tight mb-5" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Bhutanese Bliss: A Himalayan Adventure for Two
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-white/90 text-[13px] font-medium mt-1">
              <span className="group cursor-pointer px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e8543f]/20 to-[#e8543f]/5 border border-[#e8543f]/30 text-[#ffb0a3] text-[10.5px] font-bold tracking-[0.15em] uppercase shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,84,63,0.3)] hover:bg-[#e8543f]/30 transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                Adventure
              </span>
              <span className="group cursor-pointer px-4 py-1.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] transition-all duration-300">
                <MapPin className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors duration-300" />
                Paro, Bhutan
              </span>
              <span className="group cursor-pointer px-4 py-1.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] transition-all duration-300">
                <Users className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors duration-300" />
                2 travellers
              </span>
              <span className="group cursor-pointer px-4 py-1.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/20 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] transition-all duration-300">
                <Calendar className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors duration-300" />
                20–22 Jul 2026
              </span>
              <span className="group cursor-pointer px-4 py-1.5 rounded-full bg-gradient-to-r from-[#5a9fd4]/20 to-[#5a9fd4]/5 border border-[#5a9fd4]/30 backdrop-blur-md shadow-sm flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(90,159,212,0.3)] transition-all duration-300 text-[#d8ecfb] hover:bg-[#5a9fd4]/30">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#5a9fd4] shadow-[0_0_8px_rgba(90,159,212,0.8)] group-hover:scale-[1.8] group-hover:shadow-[0_0_12px_rgba(90,159,212,1)] transition-all duration-300" /> 
                 Meera & Arjun
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-[13.5px] cursor-pointer transition-colors backdrop-blur-md shadow-sm">Copy link</span>
            <span onClick={() => router.push('/preview')} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-[13.5px] cursor-pointer transition-colors backdrop-blur-md shadow-sm">Preview</span>
            <span className="group px-6 py-2.5 rounded-full bg-white text-[#1d1f24] hover:bg-gray-50 font-bold text-[13.5px] cursor-pointer transition-transform hover:scale-105 shadow-lg flex items-center gap-2">
              Send
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div style={{ display: "flex", gap: "8px", margin: "28px 0 20px", borderBottom: "1px solid #eeece5", paddingBottom: "12px" }}>
        <span 
          onClick={() => setActiveTab('itinerary')} 
          style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500, cursor: "pointer", color: activeTab === 'itinerary' ? '#1d1f24' : '#6f6d64', background: activeTab === 'itinerary' ? '#f1efe8' : 'transparent', borderRadius: "10px", transition: "all 0.2s" }}
        >
          Itinerary Builder
        </span>
        <span 
          onClick={() => setActiveTab('analytics')} 
          style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500, cursor: "pointer", color: activeTab === 'analytics' ? '#1d1f24' : '#6f6d64', background: activeTab === 'analytics' ? '#f1efe8' : 'transparent', borderRadius: "10px", transition: "all 0.2s" }}
        >
          Engagement Analytics
        </span>
      </div>

      {/* Itinerary Tab */}
      {activeTab === 'itinerary' && (
        <>
          {/* Day Selector Tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "16px", borderBottom: "1px solid #eeece5", marginTop: "32px", overflowX: "auto" }}>
            {days.map((d, i) => (
              <div 
                key={i} 
                onClick={() => setDayIdx(i)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "99px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  background: dayIdx === i ? "#1d1f24" : "#ffffff",
                  color: dayIdx === i ? "#fff" : "#6f6d64",
                  border: dayIdx === i ? "1px solid #1d1f24" : "1px solid #eeece5",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: dayIdx === i ? "0 4px 12px rgba(29,31,36,.2)" : "0 2px 4px rgba(0,0,0,0.02)"
                }}
              >
                <span style={{ fontSize: "16px", color: dayIdx === i ? "#e8543f" : "#a09d92" }}>{d.badge.charAt(0)}</span>
                Day {i + 1}
              </div>
            ))}
          </div>

          {/* Two Columns Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(380px, 1fr) minmax(430px, 1.15fr)", gap: "26px", alignItems: "start" }} className="flex flex-col lg:grid">
            
            {/* LEFT COLUMN: Timeline */}
            <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "22px", padding: "26px 26px 20px" }}>
              {day.sections.map((sec: any, sIdx: number) => {
                const isM = sec.part === 'morning';
                const isA = sec.part === 'afternoon';
                const isE = sec.part === 'evening';

                return (
                  <div key={sIdx} style={{ marginBottom: "24px" }}>
                    
                    {/* Section Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      {isM && (
                        <span style={{ width: "40px", height: "40px", borderRadius: "13px", background: "linear-gradient(170deg,#ffedd2,#ffddb0)", position: "relative", overflow: "hidden", display: "block", flex: "none" }}>
                          <span style={{ position: "absolute", left: "50%", bottom: "8px", width: "22px", height: "22px", marginLeft: "-11px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ff9e3d)", animation: "riseSun 3.2s ease-in-out infinite", display: "block" }}></span>
                          <span style={{ position: "absolute", left: "6px", right: "6px", bottom: "9px", height: "2.5px", borderRadius: "2px", background: "#f0b27a", display: "block" }}></span>
                        </span>
                      )}
                      {isA && (
                        <span style={{ width: "40px", height: "40px", borderRadius: "13px", background: "linear-gradient(170deg,#d8ecfb,#bcdcf6)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", overflow: "hidden" }}>
                          <span style={{ position: "absolute", width: "34px", height: "34px", animation: "rayspin 14s linear infinite", display: "block", background: "conic-gradient(from 0deg,rgba(255,201,94,0) 0 18deg,rgba(255,201,94,.6) 18deg 22deg,rgba(255,201,94,0) 22deg 58deg,rgba(255,201,94,.6) 58deg 62deg,rgba(255,201,94,0) 62deg 98deg,rgba(255,201,94,.6) 98deg 102deg,rgba(255,201,94,0) 102deg 138deg,rgba(255,201,94,.6) 138deg 142deg,rgba(255,201,94,0) 142deg 178deg,rgba(255,201,94,.6) 178deg 182deg,rgba(255,201,94,0) 182deg 218deg,rgba(255,201,94,.6) 218deg 222deg,rgba(255,201,94,0) 222deg 258deg,rgba(255,201,94,.6) 258deg 262deg,rgba(255,201,94,0) 262deg 298deg,rgba(255,201,94,.6) 298deg 302deg,rgba(255,201,94,0) 302deg 338deg,rgba(255,201,94,.6) 338deg 342deg,rgba(255,201,94,0) 342deg)", borderRadius: "50%" }}></span>
                          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ffa53d)", position: "relative", animation: "sunPulse 2.8s ease-in-out infinite", display: "block" }}></span>
                        </span>
                      )}
                      {isE && (
                        <span style={{ width: "40px", height: "40px", borderRadius: "13px", background: "linear-gradient(170deg,#232544,#3a3763)", position: "relative", overflow: "hidden", display: "block", flex: "none" }}>
                          <span style={{ position: "absolute", top: "9px", left: "9px", width: "17px", height: "17px", borderRadius: "50%", background: "radial-gradient(circle at 38% 34%,#fff8e0,#f2dfa4)", display: "block" }}></span>
                          <span style={{ position: "absolute", top: "7px", left: "13px", width: "14px", height: "14px", borderRadius: "50%", background: "#232544", display: "block" }}></span>
                          <span style={{ position: "absolute", top: "10px", right: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "#fff", animation: "twinkle 1.9s ease-in-out infinite", display: "block" }}></span>
                          <span style={{ position: "absolute", bottom: "9px", right: "14px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.4s ease-in-out .5s infinite", display: "block" }}></span>
                          <span style={{ position: "absolute", bottom: "12px", left: "8px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.1s ease-in-out 1s infinite", display: "block" }}></span>
                        </span>
                      )}
                      <div>
                        <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: "14.5px", letterSpacing: ".04em" }}>{sec.title}</div>
                        <div style={{ fontSize: "10.5px", fontWeight: 500, color: "#a09d92", letterSpacing: ".12em" }}>{sec.time}</div>
                      </div>
                    </div>

                    {/* Section Entries */}
                    <div style={{ borderLeft: "2px dashed #eeece5", marginLeft: "19px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "15px" }}>
                      {sec.entries.map((e: any, eIdx: number) => {
                        const colors = entryColors[e.place.cat] || entryColors.SIGHTSEEING;
                        const p = e.place;
                        return (
                          <div key={eIdx} style={{ position: "relative" }}>
                            <span style={{ position: "absolute", left: "-28px", top: "24px", width: "10px", height: "10px", borderRadius: "50%", background: colors[0], boxShadow: `0 0 0 3px #fff,0 0 0 4.5px ${colors[1]}`, display: "block" }}></span>
                            
                            <div style={{ marginBottom: "10px", fontSize: "13.5px", lineHeight: 1.65, color: "#55534b", fontWeight: 500 }}>{e.copy}</div>

                            <div 
                              onClick={() => openPlace(p)}
                              className="group hover:-translate-y-[4px] hover:shadow-[0_16px_32px_rgba(84,62,40,.12)] active:scale-[0.98] transition-all cursor-pointer"
                              style={{ 
                                display: "flex", 
                                background: "#fff", 
                                border: "1px solid #eeece5", 
                                borderRadius: "18px", 
                                overflow: "hidden", 
                                alignItems: "stretch" 
                              }}
                            >
                              {/* Left Graphic */}
                              <div style={{ width: "80px", flex: "none", position: "relative", overflow: "hidden", background: p.sky || "#f4f3f0" }}>
                                {p.sun && <span style={{ position: "absolute", top: "10px", left: "10px", width: "18px", height: "18px", borderRadius: "50%", background: p.sun, animation: "sunPulse 4s ease-in-out infinite", display: "block" }}></span>}
                                {p.m1 && <span style={{ position: "absolute", bottom: "-4px", left: "-6px", width: "80%", height: "40px", background: p.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>}
                                {p.m2 && <span style={{ position: "absolute", bottom: "-4px", right: "-8px", width: "70%", height: "30px", background: p.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>}
                                
                                {/* Icon Badge overlay */}
                                <div style={{ position: "absolute", bottom: "8px", right: "8px", width: "24px", height: "24px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.12)" }}>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors[0]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    {p.cat === 'HOTEL' && <path d="M22 20v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8M2 18h20M7 14v4M17 14v4M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>}
                                    {p.cat === 'SIGHTSEEING' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
                                    {p.cat === 'FOOD' && <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>}
                                    {p.cat === 'ACTIVITY' && <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></>}
                                  </svg>
                                </div>
                              </div>
                              
                              {/* Right Content */}
                              <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
                                  <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: ".1em", color: colors[0], textTransform: "uppercase" }}>{p.cat}</span>
                                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#8a6a12", display: "flex", alignItems: "center", gap: "2px" }}>
                                    <svg width="10" height="10" viewBox="0 0 13 13"><path d="M6.5 0l1.9 4 4.4.5-3.3 3 .9 4.3-3.9-2.2-3.9 2.2.9-4.3-3.3-3L4.6 4z" fill="#ffc24d"/></svg>
                                    {p.rating}
                                  </span>
                                </div>
                                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1d1f24" }}>{e.label}</div>
                                <div style={{ fontSize: "11.5px", color: "#a09d92", fontWeight: 500, marginTop: "2px", display: "flex", justifyContent: "space-between" }}>
                                  <span>{p.best || p.duration}</span>
                                  <span style={{ color: colors[0], fontWeight: 600 }}>Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })}

              {/* Spark Prompt Entry */}
              <div style={{ position: "relative", borderRadius: "15px", background: "#faf9f6", border: "1px solid #eeece5", display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", marginTop: "6px" }}>
                <span style={{ position: "relative", width: "28px", height: "28px", flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ position: "absolute", width: "28px", height: "28px", borderRadius: "50%", border: "1.5px solid rgba(232,84,63,.4)", animation: "ringVibe 2.6s ease-out infinite", display: "block" }}></span>
                  <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "radial-gradient(circle at 32% 30%,#ffd3b0,#e8543f 65%,#b23520)", display: "block" }}></span>
                </span>
                <span style={{ flex: 1, color: "#a09d92", fontSize: "13px" }}>
                  Ask AI to refine {day.name} — "swap dinner for a farmhouse stay"…
                </span>
                <span className="hover:bg-[#e8543f] hover:scale-105 active:scale-95 transition-all" style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#1d1f24", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg width="13" height="13" viewBox="0 0 16 16">
                    <path d="M2.5 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="#fff" strokeWidth="1.9" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Scenery, BoardingPass, Stops */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              {/* Day Hero Scenery */}
              <div style={{ position: "relative", borderRadius: "22px", overflow: "hidden", background: day.sky, padding: "24px", color: "#fff", boxShadow: "0 18px 38px rgba(84,62,40,.18)" }}>
                <span style={{ position: "absolute", top: "20px", right: "28px", width: "48px", height: "48px", borderRadius: "50%", background: day.sun, boxShadow: `0 0 44px ${day.sun}`, animation: "sunPulse 4.5s ease-in-out infinite", display: "block" }}></span>
                <span style={{ position: "absolute", bottom: "-10px", right: "-20px", width: "55%", height: "106px", background: day.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", opacity: .85, display: "block" }}></span>
                <span style={{ position: "absolute", bottom: "-10px", right: "22%", width: "40%", height: "76px", background: day.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", opacity: .7, display: "block" }}></span>
                <span style={{ position: "absolute", top: "26px", left: "44%", width: "50px", height: "12px", borderRadius: "99px", background: "rgba(255,255,255,.5)", filter: "blur(1px)", animation: "cloudDrift 8s ease-in-out infinite", display: "block" }}></span>
                
                <div style={{ position: "relative" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(20,16,30,.26)", backdropFilter: "blur(6px)", borderRadius: "99px", padding: "6px 13px", fontSize: "10px", fontWeight: 500, letterSpacing: ".18em" }}>
                    {day.badge}
                  </div>
                  <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "25px", marginTop: "12px", letterSpacing: "-.01em" }}>
                    {day.headline}
                  </div>
                  <div style={{ fontSize: "13px", lineHeight: 1.6, opacity: .94, marginTop: "8px", maxWidth: "420px" }}>
                    {day.blurb}
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "15px", flexWrap: "wrap" }}>
                    {day.chips.map((c: any, cIdx: number) => (
                      <span key={cIdx} style={{ borderRadius: "99px", padding: "6px 12px", background: "rgba(255,255,255,.94)", color: "#3a3050", fontSize: "11px", fontWeight: 500, boxShadow: "0 4px 10px rgba(20,16,30,.18)" }}>
                        {c.t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Boarding Pass Ticket */}
              {day.hasFlight && (
                <BoardingPass />
              )}

              {/* Stops List */}
              {day.stops.map((s: any, sIdx: number) => {
                const stopsSc = s.place || { sky: 'linear-gradient(172deg,#ffe0b8 0%,#ffab90 75%)', sun: '#fff5d0', m1: '#9080bd', m2: '#75659f', dotColor: '#e8543f' };
                
                return (
                  <div key={sIdx}>
                    {/* Driving Time separator */}
                    {s.hasDrive && (
                      <div style={{ display: "flex", justifyContent: "center", margin: "2px 0 14px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", borderRadius: "99px", padding: "6px 15px", background: "#fff", border: "1px dashed #ddd9cc", fontSize: "11.5px", fontWeight: 500, color: "#6f6d64" }}>
                          <svg width="15" height="15" viewBox="0 0 16 16" style={{ animation: "bobSm 2.8s ease-in-out infinite" }}>
                            <path d="M2.5 9.5l1.2-3.2A2 2 0 0 1 5.6 5h4.8a2 2 0 0 1 1.9 1.3l1.2 3.2v3a1 1 0 0 1-1 1h-.6a1 1 0 0 1-1-1v-.5h-6v.5a1 1 0 0 1-1 1h-.4a1 1 0 0 1-1-1z" fill="none" stroke="#a09d92" strokeWidth="1.3"/>
                            <circle cx="5" cy="9.8" r=".9" fill="#a09d92"/>
                            <circle cx="11" cy="9.8" r=".9" fill="#a09d92"/>
                          </svg>
                          {s.drive}
                        </span>
                      </div>
                    )}

                    {/* Stop card */}
                    <div 
                      onClick={() => openPlace(s.place)} 
                      className="hover:-translate-y-[3px] hover:shadow-[0_18px_34px_rgba(84,62,40,.12)] active:scale-[0.985] transition-all"
                      style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "18px", padding: "15px 17px", display: "flex", gap: "14px", alignItems: "center", cursor: "pointer" }}
                    >
                      {/* Mini scenery thumbnail */}
                      <div style={{ width: "56px", height: "56px", flex: "none", borderRadius: "15px", background: stopsSc.sky, position: "relative", overflow: "hidden" }}>
                        <span style={{ position: "absolute", top: "7px", left: "9px", width: "13px", height: "13px", borderRadius: "50%", background: stopsSc.sun, animation: "sunPulse 4.5s ease-in-out infinite", display: "block" }}></span>
                        <span style={{ position: "absolute", bottom: "-3px", left: "-6px", width: "80%", height: "28px", background: stopsSc.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                        <span style={{ position: "absolute", bottom: "-3px", right: "-8px", width: "65%", height: "21px", background: stopsSc.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                      </div>

                      {/* Content details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "9.5px", fontWeight: 500, letterSpacing: ".16em", color: "#a09d92" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: s.dotColor }}></span>
                            {s.cat}
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: 500, color: "#8a6a12" }}>
                            <svg width="10" height="10" viewBox="0 0 13 13">
                              <path d="M6.5 0l1.9 4 4.4.5-3.3 3 .9 4.3-3.9-2.2-3.9 2.2.9-4.3-3.3-3L4.6 4z" fill="#ffc24d"/>
                            </svg>
                            {s.rating}
                          </span>
                        </div>
                        <div style={{ fontWeight: 500, fontSize: "14.5px", marginTop: "3px", lineHeight: 1.3 }}>
                          {s.title}
                        </div>
                        <div style={{ fontSize: "12px", color: "#a09d92", fontWeight: 500, marginTop: "3px" }}>
                          {s.meta}
                        </div>
                      </div>

                      {/* Pricing and details link */}
                      <div style={{ textAlign: "right", flex: "none" }}>
                        <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "15.5px" }}>
                          {s.price}
                        </div>
                        <div style={{ fontSize: "11px", fontWeight: 500, color: "#e8543f", marginTop: "4px" }}>
                          Details →
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </>
      )}

      {/* Engagement Analytics Tab */}
      {activeTab === 'analytics' && (
        <div style={{ marginTop: "20px", animation: "fadeUp .3s ease-out" }}>
          
          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            {[
              { label: "Unique Opens", value: "14", bg: "#eaf3fa", shadow: "rgba(90,159,212,0.12)", svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5a9fd4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "floatClay 5s ease-in-out infinite" }}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> },
              { label: "Total Time Spent", value: "8m 45s", bg: "#fdeeea", shadow: "rgba(232,84,63,0.12)", svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8543f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "floatClay 5s ease-in-out infinite 0.5s" }}><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg> },
              { label: "Avg Time per Open", value: "37s", bg: "#fdf4e3", shadow: "rgba(255,194,77,0.12)", svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc24d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "floatClay 5s ease-in-out infinite 1s" }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { label: "Link Shares", value: "3", bg: "#f1fbf4", shadow: "rgba(46,125,50,0.12)", svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "floatClay 5s ease-in-out infinite 1.5s" }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> }
            ].map((stat, i) => (
              <div key={i} className="group relative hover:-translate-y-[4px] hover:shadow-[0_24px_48px_rgba(84,62,40,.12)] transition-all duration-300" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "24px", padding: "24px", overflow: "hidden", zIndex: 1 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle at 100% 0%, ${stat.shadow}, transparent 70%)`, zIndex: -1 }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ position: "relative", width: "56px", height: "56px", borderRadius: "18px", background: stat.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <div className="absolute inset-0 rounded-[18px] opacity-40 animate-pulse" style={{ boxShadow: `0 0 20px ${stat.shadow}` }}></div>
                     {stat.svg}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#a09d92", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
                    <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontWeight: 600, fontSize: "28px", color: "#1d1f24", marginTop: "2px", letterSpacing: "-0.02em" }}>{stat.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "28px" }} className="flex flex-col lg:grid">
            {/* Chart Card */}
            <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "24px", padding: "28px", boxShadow: "0 5px 16px rgba(84,62,40,.04)" }}>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "20px", color: "#1d1f24", marginBottom: "24px" }}>Time Spent per Day Section</div>
              <div style={{ height: "300px", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Day 1', time: 120 },
                    { name: 'Day 2', time: 180 },
                    { name: 'Day 3', time: 145 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eeece5" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a09d92', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a09d92', fontSize: 12 }} />
                    <Tooltip cursor={{ fill: "#faf9f6" }} contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 8px 24px rgba(84,62,40,.12)" }} />
                    <Bar dataKey="time" name="Seconds Spent" fill="#e8543f" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Events Card */}
            <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "24px", padding: "28px", boxShadow: "0 5px 16px rgba(84,62,40,.04)" }}>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "20px", color: "#1d1f24", marginBottom: "24px" }}>Client Events</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { time: '10:45 AM today', event: 'Client opened itinerary' },
                  { time: '10:47 AM today', event: 'Expanded "Paro Highlights"' },
                  { time: '10:50 AM today', event: 'Shared via WhatsApp' },
                  { time: '09:20 AM yesterday', event: 'Client opened itinerary' },
                ].map((ev, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8543f", marginTop: "6px" }}></div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 500, color: "#1d1f24" }}>{ev.event}</div>
                      <div style={{ fontSize: "11.5px", color: "#a09d92", marginTop: "2px" }}>{ev.time}</div>
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

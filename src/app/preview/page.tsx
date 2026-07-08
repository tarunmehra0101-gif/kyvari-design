'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { days, trips } from '../../data';
import { PlaceDrawer } from '../../components/PlaceDrawer';
import { BoardingPass } from '../../components/BoardingPass';
import { Menu, X } from 'lucide-react';

export default function PreviewPage() {
  const router = useRouter();
  const trip = trips[0]; // Bhutanese Bliss
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePlace, setActivePlace] = useState<any>(null);
  
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCardClick = (place: any) => {
    setActivePlace(place);
    setDrawerOpen(true);
  };
  
  return (
    <div style={{ background: "#fcfaf7", minHeight: "100vh", color: "#1d1f24" }}>
      
      {/* Photo Hero (Screenshot 1) */}
      <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
        <img 
          src="https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=2000" 
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} 
          alt="Paro Valley"
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9) 100%)" }}></div>
        
        {/* Global Metallic Gradients for Preview */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="metal-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ca3af" />
              <stop offset="30%" stopColor="#f3f4f6" />
              <stop offset="70%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top Header inside Hero */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100, padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button 
            onClick={() => router.push('/detail')} 
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }}
            className="hover:bg-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button style={{ background: "#fff", color: "#1d1f24", padding: "8px 16px", borderRadius: "99px", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", transition: "transform 0.2s" }} className="hover:scale-105 active:scale-95">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Edit cover
          </button>
        </div>

        {/* Hero Content */}
        <div style={{ position: "absolute", bottom: "40px", left: "40px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "32px", background: "#3b82f6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(59,130,246,0.3)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
              Prepared by <br/><strong style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>Wanderlust</strong>
            </div>
          </div>
          
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, marginBottom: "16px", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
            <span style={{ marginRight: "6px" }}>🏔️</span> Adventure - Adrenaline & altitude
          </div>

          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "52px", fontWeight: 500, letterSpacing: "-.02em", margin: "0 0 16px", lineHeight: 1.1, maxWidth: "900px", textShadow: "0 12px 48px rgba(0,0,0,0.5)" }}>
            {trip.title}
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.95)", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
               {trip.city}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
               {trip.dates} 2026
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
               2 travelers
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               3 days
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[20px] lg:px-[40px] relative -mt-[28px] z-20">
        
        {/* Modern Stats Pill Bar */}
        <div style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", padding: "18px 32px", boxShadow: "0 16px 40px rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", overflow: "hidden" }}>
          
          {/* Shining highlight sweep animation */}
          <div style={{ position: "absolute", top: 0, left: "-100%", width: "50%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)", transform: "skewX(-20deg)", animation: "sweep 6s infinite", pointerEvents: "none" }}></div>

          <div style={{ textAlign: "center", flex: 1, borderRight: "1px solid rgba(0,0,0,0.06)" }}>
            <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "28px", fontWeight: 800, color: "#1d1f24", letterSpacing: "-0.03em" }}>3</div>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginTop: "2px" }}>DAYS</div>
          </div>
          <div style={{ textAlign: "center", flex: 1, borderRight: "1px solid rgba(0,0,0,0.06)", position: "relative" }}>
             <span style={{ position: "absolute", top: "2px", right: "calc(50% - 24px)", width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 0 rgba(16,185,129,0.7)", animation: "pulseGreen 2s infinite" }}></span>
            <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "28px", fontWeight: 800, color: "#1d1f24", letterSpacing: "-0.03em" }}>10</div>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginTop: "2px" }}>EXPERIENCES</div>
          </div>
          <div style={{ textAlign: "center", flex: 1, borderRight: "1px solid rgba(0,0,0,0.06)" }}>
            <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "28px", fontWeight: 800, color: "#1d1f24", letterSpacing: "-0.03em" }}>900m</div>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginTop: "2px" }}>HIGHEST CLIMB</div>
          </div>
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "28px", fontWeight: 800, color: "#1d1f24", letterSpacing: "-0.03em" }}>$1.9k</div>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginTop: "2px" }}>EST. PER PERSON</div>
          </div>
        </div>

        {/* Day Navigator Pills (Desktop) */}
        <div className="hidden lg:flex justify-center my-[32px]">
          <div style={{ display: "inline-flex", gap: "8px", background: "#fff", padding: "6px", borderRadius: "99px", border: "1px solid #eeece5", boxShadow: "0 8px 16px rgba(84,62,40,0.03)" }}>
            {days.map((d, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveDayIndex(idx)}
                style={{
                  padding: "8px 24px",
                  borderRadius: "99px",
                  fontSize: "14px",
                  fontWeight: 600,
                  background: activeDayIndex === idx ? "#1d1f24" : "#ffffff",
                  color: activeDayIndex === idx ? "#fff" : "#6f6d64",
                  border: activeDayIndex === idx ? "none" : "1px solid #eeece5",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: activeDayIndex === idx ? "0 8px 16px rgba(0,0,0,0.2)" : "none"
                }}
                className={activeDayIndex !== idx ? "hover:bg-slate-50 hover:text-[#1d1f24]" : ""}
              >
                <span style={{ fontSize: "16px", color: activeDayIndex === idx ? "#e8543f" : "#a09d92" }}>{d.badge.charAt(0)}</span>
                Day {idx + 1}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blurb block: Dark contrasting background with metallic icons */}
        <div className="mb-[32px] mt-[32px] lg:mt-0">
          <div style={{ background: "linear-gradient(135deg, #1d1f24 0%, #2e3039 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "24px 28px", boxShadow: "0 16px 40px rgba(0,0,0,0.15)", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" style={{ flexShrink: 0, filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.4))", marginTop: "2px" }}>
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="url(#metal-active)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#a5a7ad", textTransform: "uppercase", marginBottom: "8px" }}>Trip Summary</div>
              <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "16px", color: "#f3f4f6", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                Begin your Bhutanese adventure by soaring into the breathtaking Paro Valley, where ancient traditions meet stunning landscapes. Settle into a charming retreat before immersing yourselves in the spiritual grandeur of Rinpung Dzong.
              </p>
            </div>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row pb-[80px] gap-[40px]">
          
          {/* Left Column (Itinerary) */}
          <div className="flex-1 min-w-0 flex flex-col gap-[48px]">
            
            {/* Show Flight Card on Day 1 */}
            {activeDayIndex === 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
                <div style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginBottom: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
                  INBOUND FLIGHT
                  <span style={{ flex: 1, height: "1px", background: "#eeece5" }}></span>
                </div>
                <div style={{ boxShadow: "0 24px 60px rgba(84,62,40,0.06)", borderRadius: "24px" }}>
                  <BoardingPass />
                </div>
              </motion.div>
            )}

            {/* Active Day */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeDayIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                style={{ background: "#fff", borderRadius: "32px", overflow: "hidden", border: "1px solid #eeece5", boxShadow: "0 24px 60px rgba(84,62,40,0.06)" }}
              >
                {/* Day Header */}
                <div style={{ padding: "32px 48px", background: days[activeDayIndex].sky, position: "relative", overflow: "hidden", color: "#fff" }}>
                  <span style={{ position: "absolute", top: "16px", right: "24px", width: "40px", height: "40px", borderRadius: "50%", background: days[activeDayIndex].sun, display: "block", filter: "blur(2px)", animation: "sunPulse 6s infinite" }}></span>
                  <span style={{ position: "absolute", bottom: "-10px", right: "0", width: "60%", height: "100px", background: days[activeDayIndex].m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                  <span style={{ position: "absolute", bottom: "-10px", left: "20%", width: "40%", height: "80px", background: days[activeDayIndex].m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                  
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", color: "rgba(255,255,255,0.9)" }}>
                      DAY {activeDayIndex + 1} · {days[activeDayIndex].badge}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "36px", fontWeight: 500, margin: 0 }}>
                      {days[activeDayIndex].headline}
                    </h2>
                  </div>
                </div>

                {/* Sections */}
                <div style={{ padding: "16px 48px" }}>
                  {days[activeDayIndex].sections.map((sec: any, sIdx: number) => {
                    const isM = sec.part === 'morning';
                    const isA = sec.part === 'afternoon';
                    const isE = sec.part === 'evening';

                    return (
                      <div key={sIdx} style={{ display: "flex", borderBottom: sIdx === days[activeDayIndex].sections.length - 1 ? "none" : "1px solid #f4f2ec", padding: "40px 0" }}>
                        
                        {/* Left Side: Time label + Icon */}
                        <div style={{ width: "180px", flexShrink: 0, paddingRight: "32px" }}>
                          <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.2em", color: "#a09d92", marginBottom: "16px", textTransform: "uppercase" }}>
                            {sec.part}
                          </div>
                          
                          {/* Animated Icon (from Detail.tsx) */}
                          <div style={{ background: "#fcfaf7", width: "56px", height: "56px", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #eeece5", boxShadow: "0 4px 12px rgba(84,62,40,0.03)" }}>
                            {isM && (
                              <span style={{ width: "40px", height: "40px", borderRadius: "14px", background: "linear-gradient(170deg,#ffedd2,#ffddb0)", position: "relative", overflow: "hidden", display: "block" }}>
                                <span style={{ position: "absolute", left: "50%", bottom: "8px", width: "22px", height: "22px", marginLeft: "-11px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ff9e3d)", animation: "riseSun 3.2s ease-in-out infinite", display: "block" }}></span>
                                <span style={{ position: "absolute", left: "5px", right: "5px", bottom: "9px", height: "2px", borderRadius: "2px", background: "#f0b27a", display: "block" }}></span>
                              </span>
                            )}
                            {isA && (
                              <span style={{ width: "40px", height: "40px", borderRadius: "14px", background: "linear-gradient(170deg,#d8ecfb,#bcdcf6)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                <span style={{ position: "absolute", width: "36px", height: "36px", animation: "rayspin 14s linear infinite", display: "block", background: "conic-gradient(from 0deg,rgba(255,201,94,0) 0 18deg,rgba(255,201,94,.6) 18deg 22deg,rgba(255,201,94,0) 22deg 58deg,rgba(255,201,94,.6) 58deg 62deg,rgba(255,201,94,0) 62deg 98deg,rgba(255,201,94,.6) 98deg 102deg,rgba(255,201,94,0) 102deg 138deg,rgba(255,201,94,.6) 138deg 142deg,rgba(255,201,94,0) 142deg 178deg,rgba(255,201,94,.6) 178deg 182deg,rgba(255,201,94,0) 182deg 218deg,rgba(255,201,94,.6) 218deg 222deg,rgba(255,201,94,0) 222deg 258deg,rgba(255,201,94,.6) 258deg 262deg,rgba(255,201,94,0) 262deg 298deg,rgba(255,201,94,.6) 298deg 302deg,rgba(255,201,94,0) 302deg 338deg,rgba(255,201,94,.6) 338deg 342deg,rgba(255,201,94,0) 342deg)", borderRadius: "50%" }}></span>
                                <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ffa53d)", position: "relative", animation: "sunPulse 2.8s ease-in-out infinite", display: "block" }}></span>
                              </span>
                            )}
                            {isE && (
                              <span style={{ width: "40px", height: "40px", borderRadius: "14px", background: "linear-gradient(170deg,#232544,#3a3763)", position: "relative", overflow: "hidden", display: "block" }}>
                                <span style={{ position: "absolute", top: "9px", left: "9px", width: "16px", height: "16px", borderRadius: "50%", background: "radial-gradient(circle at 38% 34%,#fff8e0,#f2dfa4)", display: "block" }}></span>
                                <span style={{ position: "absolute", top: "6px", left: "13px", width: "14px", height: "14px", borderRadius: "50%", background: "#232544", display: "block" }}></span>
                                <span style={{ position: "absolute", top: "10px", right: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "#fff", animation: "twinkle 1.9s ease-in-out infinite", display: "block" }}></span>
                                <span style={{ position: "absolute", bottom: "9px", right: "13px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.4s ease-in-out .5s infinite", display: "block" }}></span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right Side: Entries */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
                          {sec.entries.map((e: any, eIdx: number) => {
                            const s = e.place;
                            
                            // Don't show flight in the stream since it's already shown above on Day 1
                            if (e.label.includes('DEL -> PBH')) return null;

                            return (
                              <div key={eIdx}>
                                {/* Narrative Summary / Title */}
                                <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 10px", color: "#1d1f24", display: "flex", alignItems: "center", gap: "10px" }}>
                                  {s?.cat === 'HOTEL' && <span style={{ display: "inline-flex", background: "#f3f4f6", padding: "6px", borderRadius: "8px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M22 20v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8"/><path d="M2 18h20"/><path d="M7 14v4"/><path d="M17 14v4"/><path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg></span>}
                                  {s?.cat === 'FOOD' && <span style={{ display: "inline-flex", background: "#f3f4f6", padding: "6px", borderRadius: "8px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M2 14h12"/><path d="M22 6h-6"/><path d="M11 22v-8"/><path d="M5 22v-8"/><path d="M17 22V6"/><path d="M14 6c0-3 3-4 6-4v4"/></svg></span>}
                                  {(!s || s?.cat === 'ACTIVITY') && <span style={{ display: "inline-flex", background: "#f3f4f6", padding: "6px", borderRadius: "8px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19 4h-2l-1-2H8L7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg></span>}
                                  {e.label}
                                </h3>
                                <p style={{ fontSize: "15px", color: "#6f6d64", lineHeight: 1.6, margin: "0 0 20px" }}>
                                  {e.copy}
                                </p>

                                {/* If rich data exists, render the beautifully styled compact card below the narrative text */}
                                {s && (
                                  <motion.div 
                                    onClick={() => handleCardClick(s)}
                                    whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(84,62,40,.08)" }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "20px", overflow: "hidden", display: "flex", alignItems: "stretch", cursor: "pointer", transition: "all 0.3s" }}
                                    className="hover:border-[#d4d1c4]"
                                  >
                                    {/* Left: Small Gradient Image */}
                                    <div style={{ width: "100px", background: s.sky || "#fcfaf7", position: "relative", overflow: "hidden", flexShrink: 0, padding: "16px", display: "flex", alignItems: "center", justifyItems: "center" }}>
                                      <span style={{ position: "absolute", bottom: 0, right: 0, width: "80px", height: "80px", background: s.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                                      <span style={{ position: "absolute", bottom: 0, left: "-10px", width: "100px", height: "60px", background: s.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>
                                    </div>

                                    {/* Right: Card Details */}
                                    <div style={{ padding: "20px 24px", flex: 1, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between" }}>
                                      
                                      <div style={{ flex: 1, paddingRight: "20px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                          <span style={{ display: "inline-flex", background: s.cat === 'HOTEL' ? "#ecfdf5" : s.cat === 'FOOD' ? "#fff7ed" : "#eff6ff", color: s.cat === 'HOTEL' ? "#10b981" : s.cat === 'FOOD' ? "#ea580c" : "#3b82f6", fontSize: "10px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "6px" }}>
                                            {s.cat || "ACTIVITY"}
                                          </span>
                                          {s.rating && (
                                            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 700, color: "#8a6212" }}>
                                              <span style={{ color: "#f59e0b" }}>★</span> {s.rating}
                                            </span>
                                          )}
                                        </div>
                                        <h4 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 6px", color: "#1d1f24", lineHeight: 1.3 }}>
                                          {s.name}
                                        </h4>
                                        <div style={{ fontSize: "14px", color: "#a09d92", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                          {s.cat === 'HOTEL' ? `Check-in 12:00 · 2 nights` : `${s.best?.split(" ")[0] || '09:30'} · ${s.duration || '60–90 min'}`}
                                        </div>
                                      </div>

                                      {/* Pricing & Details Link */}
                                      <div style={{ textAlign: "right" }}>
                                        <div style={{ fontSize: "18px", fontWeight: 700, color: "#1d1f24", marginBottom: "4px" }}>
                                          {s.cat === 'HOTEL' ? "$150/nt" : s.cat === 'FOOD' ? "~$12" : (s.price === 'Included' ? 'Incl.' : s.price)}
                                        </div>
                                        <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8543f", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                                          Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                        </div>
                                      </div>

                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Pricing Card */}
            <div style={{ background: "#1d1f24", borderRadius: "32px", padding: "48px 40px", textAlign: "center", color: "#fff", marginTop: "24px", boxShadow: "0 32px 64px rgba(29,31,36,0.2)" }}>
              <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: "12px" }}>
                Your trip, all in
              </div>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "56px", fontWeight: 500, marginBottom: "20px" }}>
                $1,940 <span style={{ fontSize: "18px", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>per person</span>
              </div>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", maxWidth: "440px", margin: "0 auto 40px", lineHeight: 1.6 }}>
                Flights, 3 nights and every listed experience included. Nothing is booked until you say the word.
              </p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: "#fff", color: "#1d1f24", padding: "18px 40px", borderRadius: "99px", fontSize: "16px", fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", border: "none", boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Confirm Booking
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "18px 40px", borderRadius: "99px", fontSize: "16px", fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px" }}
                >
                  Message agent
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right Column (Interactive Map Sticky) */}
          <div className="hidden lg:block w-[500px] flex-none">
            <div style={{ position: "sticky", top: "120px", height: "calc(100vh - 150px)", background: "#fff", borderRadius: "40px", border: "1px solid #eeece5", overflow: "hidden", boxShadow: "0 24px 60px rgba(84,62,40,0.06)" }}>
              
              {/* Map Placeholder Graphic */}
              <div style={{ width: "100%", height: "100%", background: "#f9f8f4", position: "relative" }}>
                
                {/* Fake Map Roads/Terrain */}
                <svg style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.6 }}>
                  <path d="M-50 100 Q 150 200 250 150 T 500 300" stroke="#ebdccf" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M0 250 Q 200 150 300 350 T 500 500" stroke="#ebdccf" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  <path d="M100 -50 Q 250 100 400 50 T 600 200" stroke="#f0e6dd" strokeWidth="20" fill="none" strokeLinecap="round"/>
                </svg>

                {/* Route Line */}
                <svg style={{ position: "absolute", width: "100%", height: "100%", zIndex: 10 }}>
                  <path d="M150 200 Q 250 150 250 280 T 380 320" stroke="#d97746" strokeWidth="3" fill="none" strokeDasharray="8 8" strokeLinecap="round" style={{ animation: "dashFlow 30s linear infinite" }} />
                </svg>

                {/* Map Points */}
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} style={{ position: "absolute", top: "185px", left: "135px", zIndex: 20 }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#3b82f6", border: "5px solid #fff", boxShadow: "0 8px 24px rgba(59,130,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <div style={{ width: "10px", height: "10px", background: "#fff", borderRadius: "50%" }}></div>
                  </div>
                </motion.div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} style={{ position: "absolute", top: "265px", left: "235px", zIndex: 20 }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#8b5cf6", border: "5px solid #fff", boxShadow: "0 8px 24px rgba(139,92,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <div style={{ width: "10px", height: "10px", background: "#fff", borderRadius: "50%" }}></div>
                  </div>
                </motion.div>
                
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} style={{ position: "absolute", top: "305px", left: "365px", zIndex: 20 }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#3b82f6", border: "5px solid #fff", boxShadow: "0 8px 24px rgba(59,130,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <div style={{ width: "10px", height: "10px", background: "#fff", borderRadius: "50%" }}></div>
                  </div>
                </motion.div>

                {/* Map UI Overlay */}
                <div style={{ position: "absolute", bottom: "32px", right: "32px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 30 }}>
                  <button style={{ width: "48px", height: "48px", borderRadius: "16px", background: "#fff", border: "1px solid #eeece5", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", cursor: "pointer" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1f24" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                  <button style={{ width: "48px", height: "48px", borderRadius: "16px", background: "#fff", border: "1px solid #eeece5", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", cursor: "pointer" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1f24" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Action Button (Mobile Day Selector) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ width: "56px", height: "56px", borderRadius: "28px", background: "#d97746", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 32px rgba(217,119,70,0.3)", border: "none", cursor: "pointer" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{ position: "fixed", bottom: "100px", right: "24px", background: "#fff", borderRadius: "24px", padding: "16px", boxShadow: "0 24px 48px rgba(0,0,0,0.2)", zIndex: 49, display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {days.map((d, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveDayIndex(idx);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                style={{
                  padding: "16px 32px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: 600,
                  background: activeDayIndex === idx ? "#d97746" : "#ffffff",
                  color: activeDayIndex === idx ? "#fff" : "#1d1f24",
                  border: activeDayIndex === idx ? "none" : "1px solid #eeece5",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer"
                }}
              >
                <span style={{ fontSize: "16px", color: activeDayIndex === idx ? "#fff" : "#d97746" }}>{d.badge.charAt(0)}</span>
                Day {idx + 1}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>     </div>

      {/* Drawer */}
      <AnimatePresence>
        {drawerOpen && activePlace && (
          <PlaceDrawer 
            place={activePlace} 
            closeDrawer={() => {
              setDrawerOpen(false);
              setActivePlace(null);
            }} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}

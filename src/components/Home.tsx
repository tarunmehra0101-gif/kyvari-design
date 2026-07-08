'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Palmtree, Utensils, Heart, Mountain } from 'lucide-react';
import { trips } from '../data';

export function Home() {
  const router = useRouter();

  // Color mappings for the small "Jump back in" trip cards
  const homeTrips = trips.slice(0, 4);

  return (
    <div data-screen-label="Home" className="flex flex-col xl:flex-row gap-[30px] p-[30px] md:p-[40px] w-full" style={{ animation: "fadeUp .4s ease-out both" }}>
      
      {/* Global Metallic Gradients for Home */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="metal-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
          <linearGradient id="metal-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="metal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <filter id="metal-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>
      </svg>

      <div className="flex-1 min-w-0">

        {/* Video Hero Scene */}
        <div style={{
          position: "relative",
          height: "280px",
          width: "100%",
          borderRadius: "26px",
          overflow: "hidden",
          boxShadow: "0 24px 50px rgba(84,62,40,.14)"
        }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/265655_medium.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)"
          }}></div>

          {/* Hero Content */}
          <div style={{ position: "absolute", left: "32px", bottom: "32px", zIndex: 10 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", padding: "7px 14px", borderRadius: "99px", fontSize: "10px", fontWeight: 700, letterSpacing: ".15em", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", marginBottom: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              WEDNESDAY · JULY 8
            </div>
            <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "36px", letterSpacing: "-.02em", color: "#fff", marginTop: "2px", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Where to today, Wanderlust?
            </div>
          </div>
        </div>

        {/* AI Prompt Box Wrapper for guaranteed centering */}
        <div className="w-full flex justify-center" style={{ marginTop: "36px", position: "relative", zIndex: 2 }}>
          {/* AI Prompt Box with Glowing Halo */}
          <div style={{ position: "relative", width: "100%", maxWidth: "760px" }}>
            <span style={{
              position: "absolute",
              inset: "-20px -28px",
              borderRadius: "40px",
              background: "radial-gradient(60% 100% at 50% 60%,rgba(255,138,92,.35),rgba(255,194,77,.25) 60%,transparent)",
              filter: "blur(14px)",
              animation: "haloBreathe 4s ease-in-out infinite",
              display: "block"
            }}></span>
            <div style={{
              position: "relative",
              borderRadius: "24px",
              background: "#fff",
              border: "1px solid #eeece5",
              boxShadow: "0 18px 44px rgba(84,62,40,.14)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: "100%"
            }}>
              <span style={{ position: "relative", width: "28px", height: "28px", flex: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ position: "absolute", width: "28px", height: "28px", borderRadius: "50%", border: "1.5px solid rgba(232,84,63,.4)", animation: "ringVibe 2.6s ease-out infinite", display: "block" }}></span>
                <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "radial-gradient(circle at 32% 30%,#ffd3b0,#e8543f 65%,#b23520)", display: "block" }}></span>
              </span>
              <span style={{ flex: 1, color: "#1d1f24", fontSize: "16px", lineHeight: 1.5 }}>
                Plan a 7-day honeymoon in Santorini for $5k.<br/>
                Focus on boutique hotels and private sunset cruises.
                <span style={{ display: "inline-block", width: "2px", height: "18px", background: "#e8543f", marginLeft: "4px", verticalAlign: "middle", animation: "caret 1.1s step-end infinite" }}></span>
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "none" }}>
                <span className="hover:bg-[#f5f3ec] transition-colors" style={{ width: "38px", height: "38px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15">
                    <rect x="5.4" y="1" width="4.2" height="8" rx="2.1" fill="none" stroke="#6f6d64" strokeWidth="1.5"/>
                    <path d="M3 7.5a4.5 4.5 0 0 0 9 0M7.5 12v2" stroke="#6f6d64" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="hover:scale-105 hover:bg-[#e8543f] active:scale-95 transition-all" style={{ width: "42px", height: "42px", borderRadius: "14px", background: "#1d1f24", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 8px 18px rgba(29,31,36,.3)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M2.5 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="#fff" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "28px" }}>
          <div className="hover:-translate-y-[2px] hover:border-[#1d1f24] hover:shadow-[0_8px_18px_rgba(84,62,40,.1)] transition-all" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #eeece5", borderRadius: "99px", padding: "10px 18px", fontSize: "13px", fontWeight: 600, color: "#1d1f24", cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f0fdfa", padding: "6px", borderRadius: "50%", color: "#0d9488" }}>
              <Palmtree size={14} strokeWidth={2.5} />
            </span>
            7-day Bali family
          </div>
          <div className="hover:-translate-y-[2px] hover:border-[#1d1f24] hover:shadow-[0_8px_18px_rgba(84,62,40,.1)] transition-all" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #eeece5", borderRadius: "99px", padding: "10px 18px", fontSize: "13px", fontWeight: 600, color: "#1d1f24", cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff1f2", padding: "6px", borderRadius: "50%", color: "#e11d48" }}>
              <Utensils size={14} strokeWidth={2.5} />
            </span>
            Tokyo foodie escape
          </div>
          <div className="hover:-translate-y-[2px] hover:border-[#1d1f24] hover:shadow-[0_8px_18px_rgba(84,62,40,.1)] transition-all" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #eeece5", borderRadius: "99px", padding: "10px 18px", fontSize: "13px", fontWeight: 600, color: "#1d1f24", cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f3ff", padding: "6px", borderRadius: "50%", color: "#7c3aed" }}>
              <Heart size={14} strokeWidth={2.5} />
            </span>
            Paris romance
          </div>
          <div className="hover:-translate-y-[2px] hover:border-[#1d1f24] hover:shadow-[0_8px_18px_rgba(84,62,40,.1)] transition-all" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #eeece5", borderRadius: "99px", padding: "10px 18px", fontSize: "13px", fontWeight: 600, color: "#1d1f24", cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#eff6ff", padding: "6px", borderRadius: "50%", color: "#2563eb" }}>
              <Mountain size={14} strokeWidth={2.5} />
            </span>
            Swiss mountain retreat
          </div>
        </div>

        {/* Jump Back In Section */}
        <div style={{ marginTop: "38px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "16px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "21px", letterSpacing: "-.02em", margin: 0 }}>Jump back in</h2>
            <span onClick={() => router.push('/trips')} className="hover:text-[#1d1f24] transition-all" style={{ fontSize: "13px", fontWeight: 500, color: "#e8543f", cursor: "pointer" }}>See all →</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {homeTrips.map((t: any, i: number) => {
              return (
                <div 
                  key={i} 
                  onClick={() => router.push('/detail')} 
                  className="group hover:-translate-y-[6px] hover:shadow-[0_24px_48px_rgba(0,0,0,.25)] transition-all duration-400"
                  style={{
                    position: "relative",
                    height: "380px",
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
                    
                    <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "18px", color: "#fff", lineHeight: 1.25, marginBottom: "10px", letterSpacing: "0.01em" }}>
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

      </div>

      {/* Right Rail / Your Week Column */}
      <div className="w-full xl:w-[290px] flex-none flex flex-col gap-[12px]">
        <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "17px", margin: "0 0 4px" }}>Your week</h3>

        {/* Trips Crafted */}
        <div className="hover:-translate-y-[2px] transition-all" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#6f6d64", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>TRIPS CRAFTED</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontWeight: 700, fontSize: "24px", color: "#1d1f24" }}>15</div>
              <div style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 6px", borderRadius: "4px" }}>
                ↑ 27%
              </div>
            </div>
            <div style={{ fontSize: "11px", color: "#a09d92", fontWeight: 500 }}>compared to last week</div>
          </div>
          <div style={{ width: "90px", height: "50px", alignSelf: "flex-end", position: "relative", bottom: "-6px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[{v:10},{v:12},{v:9},{v:14},{v:12},{v:15}]}>
                <defs>
                  <linearGradient id="fill-trips" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#8b5cf6" strokeWidth={2} fill="url(#fill-trips)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Client Views */}
        <div className="hover:-translate-y-[2px] transition-all" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#6f6d64", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>CLIENT VIEWS</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontWeight: 700, fontSize: "24px", color: "#1d1f24" }}>128</div>
              <div style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 700, color: "#ea580c", background: "#ffedd5", padding: "2px 6px", borderRadius: "4px" }}>
                ↓ 4%
              </div>
            </div>
            <div style={{ fontSize: "11px", color: "#a09d92", fontWeight: 500 }}>compared to last week</div>
          </div>
          <div style={{ width: "90px", height: "50px", alignSelf: "flex-end", position: "relative", bottom: "-6px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[{v:150},{v:145},{v:130},{v:135},{v:120},{v:128}]}>
                <defs>
                  <linearGradient id="fill-views" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#f97316" strokeWidth={2} fill="url(#fill-views)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Avg Dwell Time */}
        <div className="hover:-translate-y-[2px] transition-all" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#6f6d64", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>AVG. DWELL TIME</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontWeight: 700, fontSize: "24px", color: "#1d1f24" }}>4m 12s</div>
              <div style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 6px", borderRadius: "4px" }}>
                ↑ 18%
              </div>
            </div>
            <div style={{ fontSize: "11px", color: "#a09d92", fontWeight: 500 }}>compared to last week</div>
          </div>
          <div style={{ width: "90px", height: "50px", alignSelf: "flex-end", position: "relative", bottom: "-6px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[{v:3},{v:3.5},{v:3.2},{v:4},{v:3.8},{v:4.2}]}>
                <defs>
                  <linearGradient id="fill-dwell" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#10b981" strokeWidth={2} fill="url(#fill-dwell)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Kyvari Spark Card */}
        <div style={{
          background: "linear-gradient(160deg,#f0f9ff,#e0f2fe)",
          border: "1px solid #bae6fd",
          borderRadius: "18px",
          padding: "16px",
          marginTop: "6px",
          position: "relative",
          overflow: "hidden"
        }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "11px", position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{
                position: "absolute",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid rgba(59,130,246,.45)",
                animation: "ringVibe 2.5s ease-out infinite",
                display: "block"
              }}></span>
              <span style={{
                position: "absolute",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid rgba(147,197,253,.5)",
                animation: "ringVibe 2.5s ease-out 1.2s infinite",
                display: "block"
              }}></span>
              <span style={{
                position: "relative",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 30%,#bfdbfe,#3b82f6 65%,#1e40af)",
                boxShadow: "0 3px 10px rgba(59,130,246,.4)",
                display: "block"
              }}></span>
            </div>
            <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".2em", color: "#0369a1" }}>KYVARI SPARK</span>
          </div>
          <div style={{ fontSize: "12.5px", lineHeight: 1.6, color: "#0c4a6e", marginTop: "10px", fontWeight: 500, position: "relative", zIndex: 1 }}>
            Clients open itineraries <span style={{ fontWeight: 700 }}>3× more</span> when the first day leads with a flight card. Try opening with arrivals.
          </div>
        </div>

      </div>
    </div>
  );
}

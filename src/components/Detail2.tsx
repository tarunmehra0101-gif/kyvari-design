'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { MapPin, Users, Calendar, Sparkles, Compass, Palette, Building2, User, Wallet, Check, Map, TrendingUp } from 'lucide-react';
import { days } from '../data';
import { BoardingPass } from './BoardingPass';

const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
`;

export function Detail2({ openPlace }: { openPlace: (p: any) => void }) {
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
    <div style={{ background: "#f8f8fa", minHeight: "100vh", fontFamily: "Cosmic, sans-serif", color: "#09090b" }}>
      <style>{FONT_CSS}</style>
      <div data-screen-label="Itinerary Detail" style={{ padding: "26px 40px 48px", maxWidth: "1420px", margin: "0 auto", animation: "fadeUp .4s ease-out both" }}>
      
      {/* Detail Header Hero */}
      <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-[#1d1f24] mb-16">
        {/* Award-Winning Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d1f24] via-[#2a2333] to-[#452735]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8543f] opacity-20 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5a9fd4] opacity-20 rounded-full blur-[100px] mix-blend-screen -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
 
        <div className="relative z-10 px-40 py-48 flex flex-col md:flex-row md:items-start justify-between gap-32">
          <div className="flex-1">
            {/* Back Button */}
            <span 
              onClick={() => router.push('/trips')} 
              className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white cursor-pointer transition-all mb-24 hover:-translate-x-1 backdrop-blur-md shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 14 14">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            
            <h1 className="text-white text-[34px] md:text-[44px] leading-[1.15] tracking-tight mb-6" style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 700 }}>
              Bhutanese Bliss: A Himalayan Adventure for Two
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-white/95 text-[13.5px] font-medium">
              <span className="px-16 py-8 rounded-[10px] bg-white/10 border border-white/[0.08] backdrop-blur-md flex items-center gap-8 shadow-sm">
                <span style={{color: "#ffb0a3"}} className="flex items-center gap-8"><Compass className="w-16 h-16 text-[#ffb0a3]" />Adventure</span>
              </span>
              <span className="px-16 py-8 rounded-[10px] bg-white/10 border border-white/[0.08] backdrop-blur-md flex items-center gap-8 shadow-sm">
                <MapPin className="w-16 h-16 text-white/50" />
                Paro, Bhutan
              </span>
              <span className="px-16 py-8 rounded-[10px] bg-white/10 border border-white/[0.08] backdrop-blur-md flex items-center gap-8 shadow-sm">
                <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfa96b_faq_two-faces.avif" alt="" className="h-20 rounded-full" />
                2 travellers
              </span>
              <span className="px-16 py-8 rounded-[10px] bg-white/10 border border-white/[0.08] backdrop-blur-md flex items-center gap-8 shadow-sm">
                <Calendar className="w-16 h-16 text-white/50" />
                20–22 Jul 2026
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-12 shrink-0 mt-24 md:mt-0">
            <span className="px-20 py-12 rounded-[12px] bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-[14px] cursor-pointer transition-colors backdrop-blur-md shadow-sm">Copy link</span>
            <span onClick={() => router.push('/preview2')} className="px-20 py-12 rounded-[12px] bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-[14px] cursor-pointer transition-colors backdrop-blur-md shadow-sm">Preview</span>
            <span className="group px-24 py-12 rounded-[12px] text-white font-semibold text-[14px] cursor-pointer transition-transform hover:scale-[1.02] shadow-lg flex items-center gap-8" style={{ background: "linear-gradient(135deg, #ff8a5c, #e8543f)", boxShadow: "0 8px 24px rgba(232,84,63,0.3)" }}>
              Send Proposal
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Container Grid */}
      <div className="flex flex-col lg:grid lg:grid-cols-[minmax(420px,1.2fr)_minmax(460px,1fr)] gap-32 mt-32 items-start">
        
        {/* LEFT COLUMN: AI Chat Thread */}
        <div className="flex flex-col gap-24 w-full bg-white border border-[#eeece5] rounded-[32px] p-24 md:p-32 shadow-[0_12px_48px_rgba(0,0,0,0.02)]">
          
          {/* User prompt bubble with user icon wrapper */}
          <div className="flex gap-16 items-start self-end w-[90%] md:w-[85%] justify-end">
            <div className="bg-[#f2f4f7] rounded-[24px] rounded-br-[4px] p-5 text-[#2d313a] text-[15px] font-medium leading-relaxed shadow-sm">
              2 day trip from bangalore to singapore, for a couple, shoping, activities and things to do
            </div>
            <div className="w-40 h-40 rounded-full bg-[#111827] flex items-center justify-center shrink-0 shadow-sm border border-gray-800">
              <User className="w-20 h-20 text-white" />
            </div>
          </div>

          {/* Kyvari Timeline Wrapper */}
          <div className="flex flex-col mt-2">
            
            {/* Agent response node with Kyvari Logo Icon */}
            <div className="flex gap-16 mb-16 items-start">
              <div className="w-40 h-40 rounded-full bg-white border border-[#eeece5] flex items-center justify-center shrink-0 shadow-sm">
                <img src="/kyvari-logo.png" alt="" className="w-24 h-24 object-contain" />
              </div>
              <div className="text-[15.5px] text-[#2d313a] font-medium leading-relaxed pt-2">
                Love it — building your Singapore trip now. Watch it come alive on the right, day by day.
              </div>
            </div>

            {/* Checklist node with Kyvari Logo bullets */}
            <div className="flex flex-col gap-16 pl-[56px] mb-32">
              <div className="flex items-center gap-12">
                <img src="/kyvari-logo.png" alt="" className="w-16 h-16 object-contain shrink-0" />
                <span className="text-[#4b5563] text-[14.5px] font-medium">Locking in a urban focus for Singapore</span>
              </div>
              <div className="flex items-center gap-12">
                <img src="/kyvari-logo.png" alt="" className="w-16 h-16 object-contain shrink-0" />
                <span className="text-[#4b5563] text-[14.5px] font-medium">Planning for 2 travelers across 2 days / 1 night</span>
              </div>
              <div className="flex items-center gap-12">
                <img src="/kyvari-logo.png" alt="" className="w-16 h-16 object-contain shrink-0" />
                <span className="text-[#4b5563] text-[14.5px] font-medium">Sequencing each day so it flows morning → evening</span>
              </div>
            </div>

            {/* Trip picturing card with Kyvari Logo inside */}
            <div className="ml-[56px] mb-40 bg-[#fafafa] border border-[#eeece5] rounded-[28px] p-28 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.03)] transition-shadow">
              <div className="flex items-center gap-16 mb-24">
                <div className="w-[46px] h-[46px] bg-white border border-[#eeece5] rounded-[14px] flex items-center justify-center shadow-sm shrink-0">
                  <img src="/kyvari-logo.png" alt="" className="w-24 h-24 object-contain" />
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#111827] tracking-tight" style={{ fontFamily: 'Cosmic, sans-serif' }}>Here's the trip I'm picturing</div>
                  <div className="text-[13px] text-[#6b7280] mt-0.5">Tweak anything below, then I'll build it day by day.</div>
                </div>
              </div>
              
              {/* tags */}
              <div className="flex gap-12 mb-24">
                <span className="px-16 py-8 bg-[#fef2f2] text-[#ef4444] rounded-full text-[12.5px] font-semibold flex items-center gap-8"><Calendar className="w-16 h-16"/> 2-day trip</span>
                <span className="px-16 py-8 bg-[#f9fafb] text-[#4b5563] border border-[#e5e7eb] rounded-full text-[12.5px] font-medium flex items-center gap-8"><MapPin className="w-16 h-16"/> Singapore</span>
                <span className="px-16 py-8 bg-[#f9fafb] text-[#4b5563] border border-[#e5e7eb] rounded-full text-[12.5px] font-medium flex items-center gap-8"><Palette className="w-16 h-16"/> Urban</span>
              </div>

              {/* Grid of inputs */}
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><MapPin className="w-16 h-16"/> DESTINATION</div>
                  <div className="text-[14.5px] font-semibold text-[#111827]">Singapore</div>
                </div>
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><Palette className="w-16 h-16"/> FOCUS</div>
                  <div className="text-[14.5px] font-semibold text-[#111827] flex items-center gap-8"><Building2 className="w-16 h-16 text-[#6b7280]"/> Urban Explorer</div>
                </div>
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><Calendar className="w-16 h-16"/> START DATE</div>
                  <div className="text-[14.5px] font-semibold text-[#111827] flex items-center justify-between">13/07/2026 <Calendar className="w-16 h-16 text-[#9ca3af]"/></div>
                </div>
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><Calendar className="w-16 h-16"/> END DATE</div>
                  <div className="text-[14.5px] font-semibold text-[#111827] flex items-center justify-between">14/07/2026 <Calendar className="w-16 h-16 text-[#9ca3af]"/></div>
                </div>
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><Users className="w-16 h-16"/> TRAVELERS</div>
                  <div className="text-[14.5px] font-semibold text-[#111827]">2</div>
                </div>
                <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                  <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><User className="w-16 h-16"/> CLIENT</div>
                  <div className="text-[14.5px] font-semibold text-[#111827]">Client</div>
                </div>
              </div>
              <div className="border border-[#f3f4f6] rounded-[16px] p-16 bg-[#fcfcfd] hover:border-[#e5e7eb] transition-colors cursor-text">
                <div className="text-[10px] font-bold text-[#9ca3af] tracking-wider mb-8 flex items-center gap-8"><Wallet className="w-16 h-16"/> BUDGET (OPTIONAL)</div>
                <div className="text-[14.5px] text-[#9ca3af]">e.g. $3,000 total · mid-range</div>
              </div>
            </div>

            {/* Reasoning Node with pulsating orb */}
            <div className="flex gap-16 mb-20 items-center">
              <div className="w-40 h-40 rounded-full bg-white border border-[#eeece5] flex items-center justify-center shrink-0 shadow-sm relative">
                <span className="absolute w-24 h-24 rounded-full bg-[#175cd3] opacity-25 animate-ping" />
                <span className="w-16 h-16 bg-[#175cd3] rounded-full shadow-[0_0_12px_#175cd3]" />
              </div>
              <div className="text-[22px] text-[#111827] font-bold leading-relaxed tracking-tight pl-4" style={{ fontFamily: 'Cosmic, sans-serif' }}>
                Here's how I planned it
              </div>
            </div>

            {/* Reasoning points with Kyvari Logo bullets */}
            <div className="flex flex-col gap-24 pl-16 mb-40 border-l-[3px] border-[#f3f4f6] ml-[18px]">
              <div className="flex items-start gap-16 relative left-[-28px]">
                <div className="w-[44px] h-[44px] bg-white border border-[#eeece5] rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border-[4px] border-white">
                  <img src="/kyvari-logo.png" alt="" className="w-24 h-24 object-contain" />
                </div>
                <div className="text-[#4b5563] text-[14.5px] leading-relaxed pt-12">
                  <span className="text-[#111827] font-bold pr-4">Theme Match:</span> The itinerary focuses on Singapore's modern urban landscape, iconic architecture, and vibrant food scene, fitting the 'urban' theme.
                </div>
              </div>
              <div className="flex items-start gap-16 relative left-[-28px]">
                <div className="w-[44px] h-[44px] bg-white border border-[#eeece5] rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border-[4px] border-white">
                  <img src="/kyvari-logo.png" alt="" className="w-24 h-24 object-contain" />
                </div>
                <div className="text-[#4b5563] text-[14.5px] leading-relaxed pt-12">
                  <span className="text-[#111827] font-bold pr-4">Pacing:</span> The day is paced to allow for arrival, hotel check-in, a major attraction (Gardens by the Bay), a local dining experience, and an evening show, balancing activity with travel time.
                </div>
              </div>
              <div className="flex items-start gap-16 relative left-[-28px]">
                <div className="w-[44px] h-[44px] bg-white border border-[#eeece5] rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border-[4px] border-white">
                  <img src="/kyvari-logo.png" alt="" className="w-24 h-24 object-contain" />
                </div>
                <div className="text-[#4b5563] text-[14.5px] leading-relaxed pt-12">
                  <span className="text-[#111827] font-bold pr-4">Hotel Logic:</span> Marina Bay Sands was selected as it's an agent-implied high-end choice for a couple and provides a central base for exploring Day 1's activities.
                </div>
              </div>
            </div>

            {/* Day 1 Node with pulsating orb */}
            <div className="flex gap-16 pb-48 items-start">
              <div className="w-40 h-40 rounded-full bg-white border border-[#eeece5] flex items-center justify-center shrink-0 shadow-sm relative z-10">
                <span className="absolute w-24 h-24 rounded-full bg-[#175cd3] opacity-25 animate-ping" />
                <span className="w-16 h-16 bg-[#175cd3] rounded-full shadow-[0_0_12px_#175cd3]" />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[22px] text-[#111827] font-bold leading-relaxed pt-0.5 mb-1.5 tracking-tight" style={{ fontFamily: 'Cosmic, sans-serif' }}>
                  {day.name}
                </div>
                <div className="text-[#6b7280] text-[15px] italic leading-relaxed">
                  {day.blurb}
                </div>

                {/* Visual Timeline details inside AI chat */}
                <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "28px", padding: "28px 24px 20px", marginTop: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.02)" }}>
                  {day.sections.map((sec: any, sIdx: number) => {
                    const isM = sec.part === 'morning';
                    const isA = sec.part === 'afternoon';
                    const isE = sec.part === 'evening';

                    return (
                      <div key={sIdx} style={{ marginBottom: "20px" }}>
                        
                        {/* Section Header */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                          {isM && (
                            <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "linear-gradient(170deg,#ffedd2,#ffddb0)", position: "relative", overflow: "hidden", display: "block", flex: "none" }}>
                              <span style={{ position: "absolute", left: "50%", bottom: "7px", width: "20px", height: "20px", marginLeft: "-10px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ff9e3d)", animation: "riseSun 3.2s ease-in-out infinite", display: "block" }}></span>
                              <span style={{ position: "absolute", left: "5px", right: "5px", bottom: "8px", height: "2px", borderRadius: "2px", background: "#f0b27a", display: "block" }}></span>
                            </span>
                          )}
                          {isA && (
                            <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "linear-gradient(170deg,#d8ecfb,#bcdcf6)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", overflow: "hidden" }}>
                              <span style={{ position: "absolute", width: "30px", height: "30px", animation: "rayspin 14s linear infinite", display: "block", background: "conic-gradient(from 0deg,rgba(255,201,94,0) 0 18deg,rgba(255,201,94,.6) 18deg 22deg,rgba(255,201,94,0) 22deg 58deg,rgba(255,201,94,.6) 58deg 62deg,rgba(255,201,94,0) 62deg 98deg,rgba(255,201,94,.6) 98deg 102deg,rgba(255,201,94,0) 102deg 138deg,rgba(255,201,94,.6) 138deg 142deg,rgba(255,201,94,0) 142deg 178deg,rgba(255,201,94,.6) 178deg 182deg,rgba(255,201,94,0) 182deg 218deg,rgba(255,201,94,.6) 218deg 222deg,rgba(255,201,94,0) 222deg 258deg,rgba(255,201,94,.6) 258deg 262deg,rgba(255,201,94,0) 262deg 298deg,rgba(255,201,94,.6) 298deg 302deg,rgba(255,201,94,0) 302deg 338deg,rgba(255,201,94,.6) 338deg 342deg,rgba(255,201,94,0) 342deg)", borderRadius: "50%" }}></span>
                              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "radial-gradient(circle at 36% 34%,#fff8dd,#ffc95e 55%,#ffa53d)", position: "relative", animation: "sunPulse 2.8s ease-in-out infinite", display: "block" }}></span>
                            </span>
                          )}
                          {isE && (
                            <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "linear-gradient(170deg,#232544,#3a3763)", position: "relative", overflow: "hidden", display: "block", flex: "none" }}>
                              <span style={{ position: "absolute", top: "8px", left: "8px", width: "15px", height: "15px", borderRadius: "50%", background: "radial-gradient(circle at 38% 34%,#fff8e0,#f2dfa4)", display: "block" }}></span>
                              <span style={{ position: "absolute", top: "6px", left: "12px", width: "12px", height: "12px", borderRadius: "50%", background: "#232544", display: "block" }}></span>
                              <span style={{ position: "absolute", top: "9px", right: "7px", width: "3px", height: "3px", borderRadius: "50%", background: "#fff", animation: "twinkle 1.9s ease-in-out infinite", display: "block" }}></span>
                              <span style={{ position: "absolute", bottom: "8px", right: "12px", width: "2px", height: "2px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.4s ease-in-out .5s infinite", display: "block" }}></span>
                              <span style={{ position: "absolute", bottom: "10px", left: "7px", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "#fff", animation: "twinkle 2.1s ease-in-out 1s infinite", display: "block" }}></span>
                            </span>
                          )}
                          <div>
                            <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 700, fontSize: "14px", color: "#111827" }}>{sec.title}</div>
                            <div style={{ fontSize: "10px", fontWeight: 500, color: "#9ca3af", letterSpacing: ".05em" }}>{sec.time}</div>
                          </div>
                        </div>

                        {/* Section Entries */}
                        <div style={{ borderLeft: "2px dashed #e5e7eb", marginLeft: "17px", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                          {sec.entries.map((e: any, eIdx: number) => {
                            const colors = entryColors[e.place.cat] || entryColors.SIGHTSEEING;
                            const p = e.place;
                            return (
                              <div key={eIdx} style={{ position: "relative" }}>
                                <span style={{ position: "absolute", left: "-23px", top: "20px", width: "8px", height: "8px", borderRadius: "50%", background: colors[0], boxShadow: `0 0 0 3px #fff,0 0 0 4.5px ${colors[1]}`, display: "block" }}></span>
                                
                                <div style={{ marginBottom: "8px", fontSize: "13px", lineHeight: 1.6, color: "#4b5563", fontWeight: 500 }}>{e.copy}</div>

                                <div 
                                  onClick={() => openPlace(p)}
                                  className="group hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(0,0,0,.06)] active:scale-[0.99] transition-all cursor-pointer"
                                  style={{ 
                                    display: "flex", 
                                    background: "#fff", 
                                    border: "1px solid #f3f4f6", 
                                    borderRadius: "16px", 
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                                    overflow: "hidden", 
                                    alignItems: "stretch" 
                                  }}
                                >
                                  {/* Left Graphic */}
                                  <div style={{ width: "64px", flex: "none", position: "relative", overflow: "hidden", background: p.sky || "#f9fafb" }}>
                                    {p.sun && <span style={{ position: "absolute", top: "8px", left: "8px", width: "14px", height: "14px", borderRadius: "50%", background: p.sun, animation: "sunPulse 4s ease-in-out infinite", display: "block" }}></span>}
                                    {p.m1 && <span style={{ position: "absolute", bottom: "-3px", left: "-5px", width: "80%", height: "32px", background: p.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>}
                                    {p.m2 && <span style={{ position: "absolute", bottom: "-3px", right: "-6px", width: "70%", height: "24px", background: p.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", display: "block" }}></span>}
                                    
                                    {/* Icon Badge overlay */}
                                    <div style={{ position: "absolute", bottom: "6px", right: "6px", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={colors[0]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        {p.cat === 'HOTEL' && <path d="M22 20v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8M2 18h20M7 14v4M17 14v4M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>}
                                        {p.cat === 'SIGHTSEEING' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
                                        {p.cat === 'FOOD' && <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>}
                                        {p.cat === 'ACTIVITY' && <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></>}
                                      </svg>
                                    </div>
                                  </div>
                                  
                                  {/* Right Content */}
                                  <div style={{ padding: "10px 12px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "2px" }}>
                                      <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: ".08em", color: colors[0], textTransform: "uppercase" }}>{p.cat}</span>
                                      <span style={{ fontSize: "10px", fontWeight: 700, color: "#8a6a12", display: "flex", alignItems: "center", gap: "2px", marginLeft: "6px" }}>
                                        <svg width="8" height="8" viewBox="0 0 13 13"><path d="M6.5 0l1.9 4 4.4.5-3.3 3 .9 4.3-3.9-2.2-3.9 2.2.9-4.3-3.3-3L4.6 4z" fill="#ffc24d"/></svg>
                                        {p.rating}
                                      </span>
                                    </div>
                                    <div style={{ fontWeight: 600, fontSize: "13px", color: "#1f2937" }}>{e.label}</div>
                                    <div style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 500, marginTop: "2px", display: "flex", justifyContent: "space-between" }}>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Tabs, Day Chips, Visual Itinerary Panel */}
        <div className="flex flex-col w-full min-w-0 bg-white border border-[#eeece5] rounded-[32px] p-24 md:p-32 shadow-[0_12px_48px_rgba(0,0,0,0.02)]">
          
          {/* Main Tabs */}
          <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid #eeece5", paddingBottom: "16px", marginBottom: "20px" }}>
            <span 
              onClick={() => setActiveTab('itinerary')} 
              style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 600, cursor: "pointer", color: activeTab === 'itinerary' ? '#111827' : '#6b7280', background: activeTab === 'itinerary' ? '#f3f4f6' : 'transparent', borderRadius: "10px", transition: "all 0.2s" }}
              className="flex items-center gap-2"
            >
              <Map className="w-16 h-16" />
              Itinerary Builder
            </span>
            <span 
              onClick={() => setActiveTab('analytics')} 
              style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 600, cursor: "pointer", color: activeTab === 'analytics' ? '#111827' : '#6b7280', background: activeTab === 'analytics' ? '#f3f4f6' : 'transparent', borderRadius: "10px", transition: "all 0.2s" }}
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-16 h-16" />
              Engagement Analytics
            </span>
          </div>

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <>
              {/* Day Selector Tabs */}
              <div className="hide-scrollbar" style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "16px", marginBottom: "16px", overflowX: "auto" }}>
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
                      background: dayIdx === i ? "#111827" : "#ffffff",
                      color: dayIdx === i ? "#fff" : "#4b5563",
                      border: dayIdx === i ? "1px solid #111827" : "1px solid #e5e7eb",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: dayIdx === i ? "0 4px 12px rgba(17,24,39,0.15)" : "0 2px 4px rgba(0,0,0,0.02)"
                    }}
                  >
                    <span style={{ fontSize: "16px", color: dayIdx === i ? "#e8543f" : "#9ca3af" }}>{d.badge.charAt(0)}</span>
                    Day {i + 1}
                  </div>
                ))}
              </div>

              {/* Scenery, BoardingPass, Stops */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              {/* Day Hero Scenery */}
              <div style={{ position: "relative", borderRadius: "32px", overflow: "hidden", background: day.sky, padding: "32px", color: "#fff", boxShadow: "0 24px 64px rgba(0,0,0,.1)" }}>
                <span style={{ position: "absolute", top: "20px", right: "28px", width: "48px", height: "48px", borderRadius: "50%", background: day.sun, boxShadow: `0 0 44px ${day.sun}`, animation: "sunPulse 4.5s ease-in-out infinite", display: "block" }}></span>
                <span style={{ position: "absolute", bottom: "-10px", right: "-20px", width: "55%", height: "106px", background: day.m1, clipPath: "polygon(50% 0,0 100%,100% 100%)", opacity: .85, display: "block" }}></span>
                <span style={{ position: "absolute", bottom: "-10px", right: "22%", width: "40%", height: "76px", background: day.m2, clipPath: "polygon(50% 0,0 100%,100% 100%)", opacity: .7, display: "block" }}></span>
                <span style={{ position: "absolute", top: "26px", left: "44%", width: "50px", height: "12px", borderRadius: "99px", background: "rgba(255,255,255,.5)", filter: "blur(1px)", animation: "cloudDrift 8s ease-in-out infinite", display: "block" }}></span>
                
                <div style={{ position: "relative" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(20,16,30,.26)", backdropFilter: "blur(6px)", borderRadius: "99px", padding: "6px 13px", fontSize: "10px", fontWeight: 500, letterSpacing: ".18em" }}>
                    {day.badge}
                  </div>
                  <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 600, fontSize: "25px", marginTop: "12px" }}>
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

              {/* Arrival Flight */}
              {dayIdx === 0 && (
                <BoardingPass 
                  fromCode="BLR" fromCity="Bangalore" fromTime="04:30" 
                  toCode="SIN" toCity="Singapore" toTime="11:40" 
                  date="13 JUL 2026" gate="G12" seats="4A · 4B" boarding="03:45" 
                  tip="Sit on the right side for spectacular views of the Singapore skyline as you descend into Changi." 
                />
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
                      className="hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(29,31,36,0.06)] active:scale-[0.985] transition-all"
                      style={{ background: "#fcfbfa", border: "1px solid #eeece5", borderRadius: "24px", padding: "16px 20px", display: "flex", gap: "16px", alignItems: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.01)" }}
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
                        <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 700, fontSize: "15.5px" }}>
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

              {/* Departure Flight (End of Itinerary) */}
              {dayIdx === days.length - 1 && (
                <div style={{ marginTop: "8px" }}>
                  <BoardingPass 
                    fromCode="SIN" fromCity="Singapore" fromTime="18:30" 
                    toCode="BLR" toCity="Bangalore" toTime="20:45" 
                    date="14 JUL 2026" gate="T3-B2" seats="12C · 12D" boarding="17:50" 
                    tip="Don't forget to check out the Jewel Changi waterfall before you head to your departure gate!" 
                  />
                </div>
              )}

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
                    <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 700, fontSize: "28px", color: "#1d1f24", marginTop: "2px", letterSpacing: "-0.02em" }}>{stat.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "28px" }} className="flex flex-col lg:grid">
            {/* Chart Card */}
            <div style={{ background: "#fff", border: "1px solid #fff", borderRadius: "32px", padding: "32px", boxShadow: "0 12px 48px rgba(0,0,0,.03)" }}>
              <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 600, fontSize: "20px", color: "#1d1f24", marginBottom: "24px" }}>Time Spent per Day Section</div>
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
            <div style={{ background: "#fff", border: "1px solid #fff", borderRadius: "32px", padding: "32px", boxShadow: "0 12px 48px rgba(0,0,0,.03)" }}>
              <div style={{ fontFamily: "Cosmic, sans-serif", fontWeight: 600, fontSize: "20px", color: "#1d1f24", marginBottom: "24px" }}>Client Events</div>
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
      </div>
    </div>
  </div>
);
}

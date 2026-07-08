'use client';
import React from 'react';
import { X, ArrowLeft, Heart, CheckCircle, Share, Headphones, MoreHorizontal, MapPin, Plane, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export function DetailPanel() {
  return (
    <section className="w-1/2 bg-slate-50 dark:bg-background-dark overflow-y-auto hide-scrollbar relative">
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <X size={16} className="text-slate-700 dark:text-slate-300" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Heart size={16} className="text-slate-700 dark:text-slate-300" /> Save
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Share size={18} className="text-slate-700 dark:text-slate-300" />
          </button>
        </div>
      </div>

      <div className="pb-24">
        {/* Destination Image Header */}
        <div className="relative h-72 w-full">
          <img
            alt="Paris"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200&h=600"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">
              <MapPin size={16} /> Paris, France
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-white" style={{fontFamily:"var(--font-fraunces), serif"}}>Five Days in Paris</h1>
          </div>
        </div>

        <div className="px-8 mt-8">
          {/* Day Chips */}
          <div className="flex items-center gap-3 mb-8 overflow-x-auto hide-scrollbar pb-2">
            <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-md shadow-indigo-200 flex-shrink-0">
              Day 1
            </button>
            <button className="px-6 py-2.5 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-medium flex-shrink-0 transition-colors">
              Day 2
            </button>
            <button className="px-6 py-2.5 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-medium flex-shrink-0 transition-colors">
              Day 3
            </button>
            <button className="px-6 py-2.5 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-medium flex-shrink-0 transition-colors">
              Day 4
            </button>
            <button className="px-6 py-2.5 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-medium flex-shrink-0 transition-colors">
              Day 5
            </button>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Day 1 Arrival Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900">Day 1: Arrival & First Impressions</h3>
                    <p className="text-sm text-slate-500">Welcome to the City of Light</p>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Check into your hotel, freshen up, and head out for a relaxed introductory walk. The goal today is to soak in the atmosphere without rushing.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 text-sm font-medium text-slate-400 pt-1">2:00 PM</div>
                    <div className="flex-1 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden flex items-stretch shadow-sm transition-all cursor-pointer group">
                      <div className="w-[80px] bg-sky-50 relative overflow-hidden flex-shrink-0 p-3 flex items-center justify-center">
                         <span className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-indigo-500 clip-path-polygon-[50%_0,0_100%,100%_100%]"></span>
                         <span className="absolute bottom-0 left-[-10px] w-[80px] h-[40px] bg-indigo-600 clip-path-polygon-[50%_0,0_100%,100%_100%]"></span>
                         <div className="absolute bottom-2 right-2 w-[22px] h-[22px] rounded-full bg-white shadow-sm flex items-center justify-center p-1">
                           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 20v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8"/><path d="M2 18h20"/><path d="M7 14v4"/><path d="M17 14v4"/><path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg>
                         </div>
                      </div>
                      <div className="p-4 flex-1 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="inline-flex bg-emerald-50 text-emerald-500 text-[9px] font-extrabold tracking-widest uppercase px-2 py-1 rounded-full">HOTEL</span>
                            <span className="text-[11px] font-bold text-amber-600 flex items-center gap-1"><span className="text-amber-500">★</span> 4.8</span>
                          </div>
                          <h4 className="font-semibold text-slate-900 text-sm">Kimpton St Honoré</h4>
                          <p className="text-xs text-slate-500 font-medium mt-1">Check-in 14:00 · 4 nights</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">$320/nt</div>
                          <div className="text-[10px] font-bold text-rose-500 mt-1 flex items-center gap-1 justify-end">Details <span className="group-hover:translate-x-1 transition-transform">→</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 text-sm font-medium text-slate-400 pt-1">4:00 PM</div>
                    <div className="flex-1 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden flex items-stretch shadow-sm transition-all cursor-pointer group">
                      <div className="w-[80px] bg-rose-50 relative overflow-hidden flex-shrink-0 p-3 flex items-center justify-center">
                         <span className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-rose-400 clip-path-polygon-[50%_0,0_100%,100%_100%]"></span>
                         <span className="absolute bottom-0 left-[-10px] w-[80px] h-[40px] bg-rose-500 clip-path-polygon-[50%_0,0_100%,100%_100%]"></span>
                         <div className="absolute bottom-2 right-2 w-[22px] h-[22px] rounded-full bg-white shadow-sm flex items-center justify-center p-1">
                           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19 4h-2l-1-2H8L7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
                         </div>
                      </div>
                      <div className="p-4 flex-1 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="inline-flex bg-blue-50 text-blue-500 text-[9px] font-extrabold tracking-widest uppercase px-2 py-1 rounded-full">SIGHTSEEING</span>
                            <span className="text-[11px] font-bold text-amber-600 flex items-center gap-1"><span className="text-amber-500">★</span> 4.9</span>
                          </div>
                          <h4 className="font-semibold text-slate-900 text-sm">Seine River Stroll</h4>
                          <p className="text-xs text-slate-500 font-medium mt-1">16:00 · 60–90 min</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">Included</div>
                          <div className="text-[10px] font-bold text-rose-500 mt-1 flex items-center gap-1 justify-end">Details <span className="group-hover:translate-x-1 transition-transform">→</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(20,24,58,0.06)] border border-slate-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-lg font-medium text-slate-900 mb-8 flex items-center gap-2 relative z-10">
                <Plane className="text-sky-500" size={20} /> Inbound Flight
              </h3>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">JFK</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">New York</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">10:30 AM</div>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center px-6 relative h-24">
                  <div className="text-xs font-medium text-slate-400 mb-2 bg-white px-2 rounded-full shadow-sm border border-slate-100 absolute top-0 z-20">7h 15m</div>
                  
                  {/* Custom Animated Plane Track */}
                  <div className="w-full relative flex items-center justify-center h-full">
                    {/* Dashed trail */}
                    <div className="absolute w-full h-[2px] border-t-2 border-dashed border-slate-200"></div>
                    
                    {/* Clouds */}
                    <div className="absolute w-full h-full overflow-hidden">
                       <div className="w-8 h-3 bg-white/60 rounded-full blur-[1px] absolute top-2 left-4 animate-[cloudPass_8s_linear_infinite]"></div>
                       <div className="w-12 h-4 bg-white/60 rounded-full blur-[2px] absolute bottom-2 right-8 animate-[cloudPass_12s_linear_infinite_2s]"></div>
                    </div>
                    
                    {/* The Plane */}
                    <div className="absolute animate-[flyLoop_6s_ease-in-out_infinite]">
                      <div className="relative">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent to-sky-400 opacity-60"></div>
                        <Plane size={28} className="text-sky-500 fill-sky-100 rotate-45 transform" />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-sky-600 mt-2 bg-sky-50 px-3 py-1 rounded-full absolute bottom-0">Direct • AF 023</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">CDG</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Paris</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">11:45 PM</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

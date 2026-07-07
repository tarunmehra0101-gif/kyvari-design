with open('src/components/DetailPanel.tsx', 'w') as f:
    f.write("""import React from 'react';
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
            <h1 className="text-4xl md:text-5xl font-medium text-white" style={{fontFamily:"'Playfair Display', serif"}}>Five Days in Paris</h1>
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
                    <div className="flex-1 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-4">
                      <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=200&h=200" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-medium text-slate-900">Check-in: Kimpton St Honoré</h4>
                        <p className="text-sm text-slate-500 mt-1">Drop off luggage and rest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 text-sm font-medium text-slate-400 pt-1">4:00 PM</div>
                    <div className="flex-1 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Seine River Stroll</h4>
                        <p className="text-sm text-slate-500 mt-1">Walk along the Seine, taking in the classic Parisian views as the sun begins to set.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
                <Plane className="text-sky-500" size={20} /> Inbound Flight
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-semibold text-slate-900 mb-1">JFK</div>
                  <div className="text-sm text-slate-500">New York</div>
                  <div className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded mt-2">10:30 AM</div>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
                  <div className="text-xs text-slate-400 mb-2">7h 15m</div>
                  <div className="w-full flex items-center">
                    <div className="h-[2px] flex-1 bg-slate-200"></div>
                    <Plane size={16} className="text-sky-500 mx-2" />
                    <div className="h-[2px] flex-1 bg-slate-200"></div>
                  </div>
                  <div className="text-xs font-medium text-sky-600 mt-2">Direct • AF 023</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-3xl font-semibold text-slate-900 mb-1">CDG</div>
                  <div className="text-sm text-slate-500">Paris</div>
                  <div className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded mt-2">11:45 PM</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
""")

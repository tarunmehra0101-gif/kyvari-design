import React from 'react';
import { trips } from '../data';
import { Search, Calendar, Activity, SlidersHorizontal } from 'lucide-react';
import { TrailCard } from './ui/trail-card';

const getCountry = (city: string) => {
  const map: Record<string, string> = {
    'Paro': 'Bhutan',
    'Hanoi': 'Vietnam',
    'Bangkok': 'Thailand',
    'Lakshadweep': 'India',
    'Kuala Lumpur': 'Malaysia',
    'Dubai': 'United Arab Emirates'
  };
  return map[city] || 'Other';
};

export function Trips({ setView }: { setView: (v: string) => void }) {
  // Group by Country -> City
  const groupedTrips = trips.reduce((acc: any, trip) => {
    const country = getCountry(trip.city);
    if (!acc[country]) acc[country] = {};
    if (!acc[country][trip.city]) acc[country][trip.city] = [];
    acc[country][trip.city].push(trip);
    return acc;
  }, {});

  return (
    <div data-screen-label="Trip Itineraries" style={{padding:"32px 40px",maxWidth:"1460px",margin:"0 auto",animation:"fadeUp .4s ease-out both"}}>
      <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"26px"}}>
        <div>
          <h1 style={{fontFamily:"'Playfair Display', serif",fontWeight:600,fontSize:"34px",letterSpacing:"-.03em",margin:0,color:"#14183a"}}>Trip Itineraries</h1>
          <div style={{color:"#8a90a6",fontSize:"13.5px",fontWeight:500,marginTop:"4px"}}>15 journeys crafted · 6 sent this week</div>
        </div>
        <div style={{flex:1}}></div>
        <div style={{display:"flex",background:"#fff",border:"1px solid #eef0f7",borderRadius:"99px",padding:"4px",gap:"2px"}}>
          <span style={{padding:"7px 15px",borderRadius:"99px",background:"linear-gradient(140deg,#1e3a8a,#312e81)",color:"#fff",fontSize:"12.5px",fontWeight:500}}>Recent</span>
          <span className="hover:bg-[#f0f9ff] transition-colors" style={{padding:"7px 15px",borderRadius:"99px",color:"#5a6474",fontSize:"12.5px",fontWeight:500,cursor:"pointer"}}>Destination</span>
          <span className="hover:bg-[#f0f9ff] transition-colors" style={{padding:"7px 15px",borderRadius:"99px",color:"#5a6474",fontSize:"12.5px",fontWeight:500,cursor:"pointer"}}>Client</span>
        </div>
        
      </div>

      {/* NEW FEATURES TOOLBAR */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[280px] relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search destinations, clients, or tags..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl text-sm transition-all outline-none shadow-sm text-slate-700"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <Calendar className="w-4 h-4 text-slate-500" />
            Any Dates
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <Activity className="w-4 h-4 text-slate-500" />
            Status: All
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            More Filters
          </button>
        </div>
      </div>

      <div style={{display:"flex", flexDirection:"column", gap:"40px", paddingBottom:"40px"}}>
        {Object.keys(groupedTrips).map(country => (
          <div key={country}>
            <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px"}}>
              <h2 style={{fontFamily:"'Playfair Display', serif", fontSize:"26px", fontWeight:600, color:"#14183a", margin:0}}>{country}</h2>
              <div style={{flex:1, height:"1px", background:"#eef0f7", marginTop:"8px"}}></div>
            </div>
            
            <div style={{display:"flex", flexDirection:"column", gap:"32px"}}>
              {Object.keys(groupedTrips[country]).map(city => (
                <div key={city}>
                  <h3 style={{fontSize:"15px", fontWeight:600, color:"#5a6474", marginBottom:"16px", textTransform:"uppercase", letterSpacing:"0.05em"}}>{city}</h3>
                  <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:"24px"}}>
                    {groupedTrips[country][city].map((t: any, i: number) => {
                      const imageUrl = t.image || 'https://images.unsplash.com/photo-1542315582-7065961dbd15?w=600&h=400&fit=crop';
                      const difficulty = t.rating ? `★ ${t.rating} rating` : "Popular";
                      
                      return (
                        <TrailCard
                          key={i}
                          onClick={() => setView('detail')}
                          title={t.short || t.title}
                          location={t.city}
                          imageUrl={imageUrl}
                          difficulty={difficulty}
                          creators={t.client ? `Client: ${t.client}` : "Custom Trip"}
                          distance={t.dates || "Flexible"}
                          elevation={`${Math.floor(Math.random() * 20) + 2} stops`}
                          duration={t.dates ? "Multi-day" : "Flexible"}
                          onDirectionsClick={() => setView('detail')}
                          className="cursor-pointer hover:shadow-[0_20px_40px_rgba(20,24,58,0.1)] transition-all duration-300"
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

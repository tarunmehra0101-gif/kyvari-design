import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { TrailCard } from './ui/trail-card';

const countryImages: Record<string, string> = {
  "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=600&fit=crop",
  "Italy": "https://images.unsplash.com/photo-1516483638261-f40af5a528aa?w=1200&h=600&fit=crop"
};

const groupedLibrary = {
  "Japan": {
    "Kyoto": {
      "Hotels": [
        { title: "Aman Kyoto", difficulty: "Luxury", location: "Kyoto", creators: "Client: JD", distance: "Oct 12-16", elevation: "5 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=600&h=400&fit=crop" },
        { title: "Hoshinoya Kyoto", difficulty: "Boutique", location: "Arashiyama", creators: "Client: AL", distance: "Oct 16-18", elevation: "2 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" }
      ],
      "Activities": [
        { title: "Zen Garden Tour", difficulty: "Culture", location: "Kyoto", creators: "Guide: Hideo", distance: "Oct 13", elevation: "1 Stop", duration: "3 Hours", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
        { title: "Matcha Tea Ceremony", difficulty: "Culture", location: "Gion", creators: "Guide: Yui", distance: "Oct 14", elevation: "Private", duration: "2 Hours", image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=600&h=400&fit=crop" },
        { title: "Arashiyama Bamboo Grove", difficulty: "Nature", location: "Kyoto", creators: "Self-guided", distance: "Oct 15", elevation: "Morning", duration: "4 Hours", image: "https://images.unsplash.com/photo-1545569341-9eb8b46d4c1d?w=600&h=400&fit=crop" }
      ]
    },
    "Tokyo": {
      "Flights": [
        { title: "JAL First Class", difficulty: "Flight", location: "JFK to HND", creators: "Booking Ref: X8KL9", distance: "Nov 01", elevation: "Non-stop", duration: "14 Hours", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" },
        { title: "ANA Business", difficulty: "Flight", location: "HND to LAX", creators: "Booking Ref: B3M9Q", distance: "Nov 08", elevation: "Non-stop", duration: "10 Hours", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" }
      ],
      "Hotels": [
        { title: "Park Hyatt Tokyo", difficulty: "Luxury", location: "Shinjuku", creators: "Client: ST", distance: "Nov 01-07", elevation: "6 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop" }
      ],
      "Dining": [
        { title: "Sukiyabashi Jiro", difficulty: "Michelin", location: "Ginza", creators: "Client: ST", distance: "Nov 03", elevation: "Dinner", duration: "Omakase", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop" }
      ]
    }
  },
  "Italy": {
    "Amalfi Coast": {
      "Hotels": [
        { title: "Le Sirenuse", difficulty: "Boutique", location: "Positano", creators: "Client: MR", distance: "Sep 04-11", elevation: "7 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop" }
      ],
      "Experiences": [
        { title: "Private Boat to Capri", difficulty: "Leisure", location: "Positano", creators: "Captain: Marco", distance: "Sep 06", elevation: "Full Day", duration: "8 Hours", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=400&fit=crop" },
        { title: "Lemon Grove Tour", difficulty: "Culture", location: "Amalfi", creators: "Local Guide", distance: "Sep 08", elevation: "Afternoon", duration: "3 Hours", image: "https://images.unsplash.com/photo-1560088219-5d63f03b29c5?w=600&h=400&fit=crop" }
      ]
    },
    "Rome": {
      "Hotels": [
        { title: "Hotel Hassler", difficulty: "Luxury", location: "Rome", creators: "Client: MR", distance: "Sep 11-14", elevation: "3 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1551882547-ff40eb0d8d73?w=600&h=400&fit=crop" }
      ],
      "Activities": [
        { title: "Vatican Early Access", difficulty: "History", location: "Vatican", creators: "Guide: Sofia", distance: "Sep 12", elevation: "Morning", duration: "4 Hours", image: "https://images.unsplash.com/photo-1531572753322-ad011ceef8f2?w=600&h=400&fit=crop" }
      ]
    }
  }
};

export function Library({ setView }: { setView: (v: string) => void }) {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [expandedCity, setExpandedCity] = useState<string | null>(null);

  const handleCountryClick = (country: string) => {
    if (expandedCountry === country) {
      setExpandedCountry(null);
      setExpandedCity(null);
    } else {
      setExpandedCountry(country);
      setExpandedCity(null);
    }
  };

  return (
    <div style={{padding:"40px 60px",animation:"fadeUp .4s ease-out"}} className="max-w-[1400px] mx-auto">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"32px"}}>
        <div>
          <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"32px",color:"#14183a"}}>Library</div>
          <div style={{fontSize:"14px",color:"#5a6474",marginTop:"6px"}}>Your saved itineraries and past trips, organized by country.</div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8 pb-12">
        {Object.entries(groupedLibrary).map(([country, destinations]) => (
          <div key={country} className="flex flex-col gap-4">
            {/* Country Banner */}
            <div 
              onClick={() => handleCountryClick(country)}
              className="relative h-48 md:h-56 rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all group"
            >
              <img 
                src={countryImages[country] || "https://images.unsplash.com/photo-1488646953014-c8bf2c28646f?w=1200&h=600&fit=crop"} 
                alt={country}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-wide" style={{fontFamily:"'Playfair Display', serif", textShadow: "0 4px 16px rgba(0,0,0,0.4)"}}>
                  {country}
                </h2>
              </div>
              <div className="absolute bottom-6 left-8 flex items-center gap-2 text-white/90">
                 <MapPin className="w-5 h-5" />
                 <span className="font-medium text-sm tracking-wide uppercase">{Object.keys(destinations).length} Destinations</span>
              </div>
              <div className="absolute bottom-6 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedCountry === country ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Expanded Destinations */}
            {expandedCountry === country && (
              <div className="mt-2 flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
                {Object.entries(destinations).map(([city, categories]) => (
                  <div key={city} className="border border-slate-200 rounded-[20px] overflow-hidden bg-white shadow-sm">
                    <button 
                      className="w-full flex items-center justify-between p-5 md:px-8 bg-slate-50 hover:bg-slate-100/70 transition-colors"
                      onClick={() => setExpandedCity(expandedCity === city ? null : city)}
                    >
                      <h3 className="text-xl font-medium text-slate-800 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        {city}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">{Object.keys(categories).length} Categories</span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedCity === city ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    
                    {expandedCity === city && (
                      <div className="p-6 md:p-8 bg-white border-t border-slate-100">
                        <div className="flex flex-col gap-10">
                          {Object.entries(categories).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-5 flex items-center gap-3">
                                {category}
                                <span className="h-[1px] flex-1 bg-slate-100"></span>
                              </h4>
                              <div className="flex overflow-x-auto gap-5 pb-6 hide-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
                                {items.map((item: any, i: number) => (
                                  <div key={i} style={{ minWidth: "260px", maxWidth: "280px", flex: "0 0 auto", scrollSnapAlign: "start" }}>
                                    <TrailCard
                                      title={item.title}
                                      location={item.location}
                                      difficulty={item.difficulty}
                                      creators={item.creators}
                                      distance={item.distance}
                                      elevation={item.elevation}
                                      duration={item.duration}
                                      imageUrl={item.image}
                                      onClick={() => setView('detail')}
                                      className="cursor-pointer hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all h-full"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

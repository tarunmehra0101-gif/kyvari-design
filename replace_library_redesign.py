import re

with open('src/components/Library.tsx', 'r') as f:
    content = f.read()

# Add lucide icons import
if 'lucide-react' not in content:
    content = content.replace("import React", "import React, { useState } from 'react';\nimport { ChevronDown, ChevronUp, MapPin } from 'lucide-react';")
else:
    content = content.replace("import React from 'react';", "import React, { useState } from 'react';")
    if 'ChevronDown' not in content:
        content = content.replace("import {", "import { ChevronDown, MapPin, ")

# Add countryImages before groupedLibrary
country_images = """
const countryImages: Record<string, string> = {
  "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=600&fit=crop",
  "Italy": "https://images.unsplash.com/photo-1516483638261-f40af5a528aa?w=1200&h=600&fit=crop"
};
"""
content = content.replace("const groupedLibrary = {", country_images + "\nconst groupedLibrary = {")

# Redesign the Library component body
lib_body_old = r'export function Library\(\{ setView \}: \{ setView: \(v: string\) => void \}\) \{.*'
lib_body_new = """export function Library({ setView }: { setView: (v: string) => void }) {
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
"""

content = re.sub(lib_body_old, lib_body_new, content, flags=re.DOTALL)

with open('src/components/Library.tsx', 'w') as f:
    f.write(content)


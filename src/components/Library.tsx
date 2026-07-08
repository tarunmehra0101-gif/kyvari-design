import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LibraryCard } from "./ui/library-card";
import { Search, Plus, ChevronRight, MapPin, Building, Plane, Camera } from "lucide-react";

// --- Data ---
const libraryItems = [
  { id: 1, region: "Japan", title: "Aman Kyoto", type: "Luxury", location: "Kyoto", client: "JD", dates: "Oct 12-16", duration: "5 Nights", status: "Booked", image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=600&h=400&fit=crop" },
  { id: 2, region: "Japan", title: "Hoshinoya Kyoto", type: "Boutique", location: "Kyoto", client: "AL", dates: "Oct 16-18", duration: "2 Nights", status: "Sent", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
  { id: 3, region: "Japan", title: "Zen Garden Tour", type: "Culture", location: "Kyoto", client: "Hideo", dates: "Oct 13", duration: "3 Hours", status: "Booked", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
  { id: 4, region: "Japan", title: "Matcha Tea Ceremony", type: "Culture", location: "Kyoto", client: "Yui", dates: "Oct 14", duration: "2 Hours", status: "Draft", image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=600&h=400&fit=crop" },
  { id: 6, region: "Japan", title: "JAL First Class", type: "Flight", location: "Tokyo", client: "X8KL9", dates: "Nov 01", duration: "14 Hours", status: "Booked", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" },
  { id: 7, region: "Japan", title: "ANA Business", type: "Flight", location: "Tokyo", client: "B3M9Q", dates: "Nov 08", duration: "10 Hours", status: "Booked", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" },
  { id: 8, region: "Japan", title: "Park Hyatt Tokyo", type: "Luxury", location: "Tokyo", client: "ST", dates: "Nov 01-07", duration: "6 Nights", status: "Reviewing", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop" },
  { id: 9, region: "Japan", title: "Sukiyabashi Jiro", type: "Michelin", location: "Tokyo", client: "ST", dates: "Nov 03", duration: "Omakase", status: "Booked", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop" },
  { id: 10, region: "Italy", title: "Le Sirenuse", type: "Boutique", location: "Positano", client: "MR", dates: "Sep 04-11", duration: "7 Nights", status: "Booked", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop" },
  { id: 11, region: "Italy", title: "Private Boat to Capri", type: "Leisure", location: "Positano", client: "Marco", dates: "Sep 06", duration: "8 Hours", status: "Draft", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=400&fit=crop" },
  { id: 12, region: "Italy", title: "Lemon Grove Tour", type: "Culture", location: "Amalfi", client: "Guide", dates: "Sep 08", duration: "3 Hours", status: "Booked", image: "https://images.unsplash.com/photo-1560088219-5d63f03b29c5?w=600&h=400&fit=crop" },
  { id: 13, region: "Italy", title: "Hotel Hassler", type: "Luxury", location: "Rome", client: "MR", dates: "Sep 11-14", duration: "3 Nights", status: "Sent", image: "https://images.unsplash.com/photo-1551882547-ff40eb0d8d73?w=600&h=400&fit=crop" },
  { id: 14, region: "Italy", title: "Vatican Early Access", type: "History", location: "Rome", client: "Sofia", dates: "Sep 12", duration: "4 Hours", status: "Booked", image: "https://images.unsplash.com/photo-1531572753322-ad011ceef8f2?w=600&h=400&fit=crop" },
];

const mockCountries = [
  {
    id: "jp", name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=1600&fit=crop",
    stats: { destinations: 7, hotels: 44, flights: 13, activities: 89 },
    destinations: [
      { id: "jp-kyo", name: "Kyoto", image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=800&h=1000&fit=crop", stats: { hotels: 18, activities: 42 } },
      { id: "jp-tyo", name: "Tokyo", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=1000&fit=crop", stats: { hotels: 26, activities: 47 } },
      { id: "jp-osa", name: "Osaka", image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=1000&fit=crop", stats: { hotels: 12, activities: 24 } }
    ]
  },
  {
    id: "it", name: "Italy", image: "https://images.unsplash.com/photo-1516483638261-f40889c83695?w=1200&h=1600&fit=crop",
    stats: { destinations: 5, hotels: 32, flights: 8, activities: 64 },
    destinations: [
      { id: "it-pos", name: "Positano", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&h=1000&fit=crop", stats: { hotels: 14, activities: 28 } },
      { id: "it-rom", name: "Rome", image: "https://images.unsplash.com/photo-1551882547-ff40eb0d8d73?w=800&h=1000&fit=crop", stats: { hotels: 18, activities: 36 } }
    ]
  },
  {
    id: "fr", name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e90760b2984?w=1200&h=1600&fit=crop",
    stats: { destinations: 4, hotels: 28, flights: 10, activities: 55 },
    destinations: [
      { id: "fr-par", name: "Paris", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=1000&fit=crop", stats: { hotels: 20, activities: 40 } },
      { id: "fr-nic", name: "Nice", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=1000&fit=crop", stats: { hotels: 8, activities: 15 } }
    ]
  }
];

// --- Components ---

const StatBadge = ({ icon: Icon, value, label }: { icon: any, value: number, label: string }) => (
  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
    <Icon className="w-3 h-3 text-white/40" />
    <span className="text-white/90 text-[10px] font-bold tracking-[0.1em] uppercase whitespace-nowrap"><span className="text-white/50 mr-1.5">{value}</span>{label}</span>
  </div>
);

export function Library() {
  const router = useRouter();
  
  // State: 'countries' | 'destinations' | 'assets'
  const [viewLevel, setViewLevel] = useState<'countries' | 'destinations' | 'assets'>('countries');
  const [activeCountry, setActiveCountry] = useState<any>(null);
  const [activeDestination, setActiveDestination] = useState<any>(null);
  const [activeType, setActiveType] = useState("All Types");

  const handleCountryClick = (country: any) => {
    setActiveCountry(country);
    setViewLevel('destinations');
  };

  const handleDestinationClick = (dest: any) => {
    setActiveDestination(dest);
    setViewLevel('assets');
    setActiveType("All Types"); // reset filter
  };

  const handleBreadcrumbClick = (level: 'countries' | 'destinations') => {
    setViewLevel(level);
    if (level === 'countries') {
      setActiveCountry(null);
      setActiveDestination(null);
    } else if (level === 'destinations') {
      setActiveDestination(null);
    }
  };

  // Filter assets for the selected destination
  const filteredAssets = libraryItems.filter(item => {
    if (!activeCountry || !activeDestination) return false;
    
    const regionMatch = item.region === activeCountry.name;
    const destMatch = item.location === activeDestination.name;
    
    let typeMatch = true;
    if (activeType === "Hotels") {
      typeMatch = item.type === "Luxury" || item.type === "Boutique";
    } else if (activeType === "Flights") {
      typeMatch = item.type === "Flight";
    } else if (activeType === "Activities") {
      typeMatch = item.type === "Culture" || item.type === "Nature" || item.type === "Leisure" || item.type === "History" || item.type === "Michelin";
    }
    
    return regionMatch && destMatch && typeMatch;
  });

  return (
    <div style={{ padding: "34px 40px", animation: "fadeUp .4s ease-out both" }} className="w-full min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-5">
        <div>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "30px", letterSpacing: "-.03em", margin: 0 }}>Asset Library</h1>
          <div style={{ color: "#a09d92", fontSize: "13px", fontWeight: 500, marginTop: "5px" }}>Your personal vault of properties, routes, and experiences.</div>
        </div>
        
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a09d92]" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              style={{
                background: "#fff", border: "1px solid #eeece5", borderRadius: "99px",
                padding: "8px 16px 8px 36px", fontSize: "13px", width: "220px", outline: "none",
                boxShadow: "0 2px 8px rgba(84,62,40,.03)"
              }}
              className="focus:border-[#e8543f] focus:ring-1 focus:ring-[#e8543f]/20 transition-all"
            />
          </div>
          <button className="hover:-translate-y-[2px] active:scale-95 transition-all" style={{ background: "#1d1f24", color: "#fff", borderRadius: "99px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 500, boxShadow: "0 6px 14px rgba(29,31,36,.25)" }}>
            <Plus size={16} /> New Asset
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8 bg-[#f8f7f4] px-4 py-2.5 rounded-2xl w-fit border border-[#eeece5]">
        <div 
          onClick={() => handleBreadcrumbClick('countries')}
          className={`cursor-pointer text-[13px] font-semibold tracking-wide flex items-center gap-2 transition-colors ${viewLevel === 'countries' ? 'text-[#1d1f24]' : 'text-[#a09d92] hover:text-[#1d1f24]'}`}
        >
          <Building className="w-4 h-4" /> Global Library
        </div>
        
        <AnimatePresence>
          {activeCountry && (
            <motion.div key="bc-country" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[#d6d3c7]" />
              <div 
                onClick={() => handleBreadcrumbClick('destinations')}
                className={`cursor-pointer text-[13px] font-semibold tracking-wide flex items-center gap-2 transition-colors ${viewLevel === 'destinations' ? 'text-[#1d1f24]' : 'text-[#a09d92] hover:text-[#1d1f24]'}`}
              >
                <MapPin className="w-4 h-4" /> {activeCountry.name}
              </div>
            </motion.div>
          )}
          {activeDestination && (
            <motion.div key="bc-dest" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[#d6d3c7]" />
              <div className="text-[13px] font-semibold tracking-wide flex items-center gap-2 text-[#1d1f24]">
                <Camera className="w-4 h-4" /> {activeDestination.name}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Views */}
      <AnimatePresence mode="wait">
        
        {/* LEVEL 1: COUNTRIES */}
        {viewLevel === 'countries' && (
          <motion.div 
            key="countries"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {mockCountries.map(country => (
              <motion.div 
                key={country.id} 
                onClick={() => handleCountryClick(country)}
                whileHover={{ y: -8, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative h-[460px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] bg-[#0a0a0a] border border-white/10"
              >
                {/* Immersive Image Background */}
                <div className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000 z-0">
                  <img src={country.image} alt={country.name} className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 group-hover:via-black/10 transition-colors duration-1000" />
                </div>
                
                {/* Geometric Monolithic Content */}
                <div className="absolute inset-0 p-10 flex flex-col items-center justify-between z-10">
                   <h3 style={{ fontFamily: "var(--font-fraunces), serif" }} className="text-white text-[64px] font-light tracking-wide mt-8 leading-none drop-shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-700">{country.name}</h3>
                   
                   {/* Architectural Grid of Stats - Floats forward on hover */}
                   <div className="grid grid-cols-2 gap-px bg-white/20 p-px rounded-[20px] backdrop-blur-xl opacity-80 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out shadow-2xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                     <div className="bg-[#111]/80 backdrop-blur-2xl rounded-tl-[19px] p-5 flex flex-col items-center w-[130px] hover:bg-[#222]/90 transition-colors">
                       <MapPin className="w-5 h-5 text-white/50 mb-2.5" strokeWidth={1.5} />
                       <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-1">Destinations</span>
                       <span className="text-white font-light text-3xl">{country.stats.destinations}</span>
                     </div>
                     <div className="bg-[#111]/80 backdrop-blur-2xl rounded-tr-[19px] p-5 flex flex-col items-center w-[130px] hover:bg-[#222]/90 transition-colors">
                       <Building className="w-5 h-5 text-white/50 mb-2.5" strokeWidth={1.5} />
                       <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-1">Hotels</span>
                       <span className="text-white font-light text-3xl">{country.stats.hotels}</span>
                     </div>
                     <div className="bg-[#111]/80 backdrop-blur-2xl rounded-bl-[19px] p-5 flex flex-col items-center w-[130px] hover:bg-[#222]/90 transition-colors">
                       <Plane className="w-5 h-5 text-white/50 mb-2.5" strokeWidth={1.5} />
                       <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-1">Flights</span>
                       <span className="text-white font-light text-3xl">{country.stats.flights}</span>
                     </div>
                     <div className="bg-[#111]/80 backdrop-blur-2xl rounded-br-[19px] p-5 flex flex-col items-center w-[130px] hover:bg-[#222]/90 transition-colors">
                       <Camera className="w-5 h-5 text-white/50 mb-2.5" strokeWidth={1.5} />
                       <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-1">Activities</span>
                       <span className="text-white font-light text-3xl">{country.stats.activities}</span>
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* LEVEL 2: DESTINATIONS */}
        {viewLevel === 'destinations' && activeCountry && (
          <motion.div 
            key="destinations"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeCountry.destinations.map((dest: any) => (
              <motion.div 
                key={dest.id}
                onClick={() => handleDestinationClick(dest)}
                whileHover={{ y: -6, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative h-[360px] rounded-[28px] overflow-hidden cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.25)] bg-[#0a0a0a]"
              >
                {/* Immersive Image Masked */}
                <div className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-1000 z-0">
                  <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 group-hover:from-black/60 transition-colors duration-1000" />
                </div>
                
                {/* Floating Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-center z-10">
                   <div className="w-full flex justify-center gap-6 items-start pt-2 transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      {/* Glass Panels */}
                      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 w-[90px] h-[90px] rounded-[24px] flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors">
                        <Building className="w-5 h-5 text-white/60 mb-1.5" strokeWidth={1.5} />
                        <span className="text-white font-bold text-[24px] leading-none mb-1">{dest.stats.hotels}</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-widest font-bold">Hotels</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 w-[90px] h-[90px] rounded-[24px] flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors">
                        <Camera className="w-5 h-5 text-white/60 mb-1.5" strokeWidth={1.5} />
                        <span className="text-white font-bold text-[24px] leading-none mb-1">{dest.stats.activities}</span>
                        <span className="text-white/50 text-[9px] uppercase tracking-widest font-bold">Activities</span>
                      </div>
                   </div>
                   <h3 style={{ fontFamily: "var(--font-fraunces), serif" }} className="text-white text-[42px] font-light leading-none drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">{dest.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* LEVEL 3: ASSETS */}
        {viewLevel === 'assets' && activeDestination && (
          <motion.div 
            key="assets"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.3 }}
          >
            {/* Type Filter */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              {["All Types", "Hotels", "Flights", "Activities"].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  style={{
                    padding: "6px 16px", borderRadius: "99px",
                    border: activeType === type ? "1px solid #1d1f24" : "1px solid #eeece5",
                    background: activeType === type ? "#1d1f24" : "#fff",
                    color: activeType === type ? "#fff" : "#6f6d64",
                    fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
                  }}
                  className={activeType !== type ? "hover:border-[#1d1f24] hover:text-[#1d1f24]" : ""}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 pb-20">
              <AnimatePresence mode="popLayout">
                {filteredAssets.length > 0 ? filteredAssets.map(item => (
                  <motion.div 
                    key={item.id} layout initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  >
                    <LibraryCard
                      title={item.title} location={item.location} type={item.type} client={item.client}
                      dates={item.dates} duration={item.duration} imageUrl={item.image} status={item.status as any}
                      onClick={() => router.push('/detail')}
                    />
                  </motion.div>
                )) : (
                  <div className="col-span-full py-12 text-center text-[#a09d92] text-sm">
                    No {activeType.toLowerCase()} found for {activeDestination.name}.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
      
    </div>
  );
}

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plane, Building2, Coffee, Camera, MapPin, Clock, Star,
  ChevronRight, Send, X, Calendar, Users, Wine, MessageSquare,
  Copy, ExternalLink, Thermometer, Wind, CheckCircle,
  Phone, Globe, Sparkles, Home, FileText, Search, BarChart3,
  Settings, ChevronLeft, Droplets, Mountain, Castle, Landmark
} from 'lucide-react';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format("woff2");font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format("woff2");font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}
`;

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGrad)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Trip Data Enriched ─── */
const tripData = {
  id: "BTN-2026-001",
  title: "Bhutanese Bliss",
  subtitle: "A Himalayan Adventure for Two",
  destination: "Paro & Thimphu, Bhutan",
  duration: "3 Days / 2 Nights",
  travelers: "2 Adults",
  budget: "$1,850 per couple",
  tags: ["Adventure", "Culture", "Wellness", "Photography"],
  agent: "Wanderlust Travel Co.",
  rating: 4.9,
  reviews: 47,
  heroImage: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1600&q=90",
};

const days = [
  {
    id: "day1",
    name: "Day 1",
    theme: "Arrival & Exploration",
    gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #ee5a5a 100%)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    weather: { temp: "24°C", condition: "Sunny", humidity: "45%", wind: "8 km/h" },
    stops: [
      {
        id: "d1f1",
        type: "flight",
        icon: Plane,
        title: "Druk Air KB205",
        subtitle: "Delhi (DEL) → Paro (PBH)",
        time: "06:00 AM",
        duration: "1h 45m",
        status: "Confirmed",
        color: "#3b82f6",
        price: "$180/person",
        details: {
          flightNumber: "KB205",
          airline: "Druk Air",
          departure: { city: "Delhi", airport: "DEL", terminal: "T3", time: "06:00 AM" },
          arrival: { city: "Paro", airport: "PBH", time: "09:45 AM" },
          amenities: ["Bhutanese tea", "Mountain views", "Meal included"],
          tips: "Request seats 3A or 3F for Himalayan views on descent."
        }
      },
      {
        id: "d1h1",
        type: "hotel",
        icon: Building2,
        title: "Hotel Olathang",
        subtitle: "Traditional Bhutanese Hospitality",
        time: "12:00 PM",
        duration: "2 Nights",
        status: "Booked",
        color: "#f59e0b",
        price: "$300/night",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        details: {
          address: "Main Street, Paro, Bhutan",
          phone: "+975 8 271555",
          roomType: "Deluxe Valley View Room",
          amenities: ["Valley view balcony", "Hot stone bath", "Free WiFi"],
          highlights: ["Built in 1972", "5-min walk to Dzong"]
        }
      },
      {
        id: "d1a1",
        type: "activity",
        icon: Castle,
        title: "Rinpung Dzong",
        subtitle: "Golden hour at the Fortress",
        time: "4:00 PM",
        duration: "2 hours",
        status: "Guided Tour",
        color: "#8b5cf6",
        price: "$10/person",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
        details: {
          about: "Rinpung Dzong (The Fortress of Heap of Jewels) is one of Bhutan's most iconic dzongs.",
          highlights: ["Guided tour", "Archery grounds", "Sunset views"],
          tips: "Visit during golden hour (5-6 PM) for magical lighting"
        }
      }
    ]
  },
  {
    id: "day2",
    name: "Day 2",
    theme: "Tiger's Nest & Wellness",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    weather: { temp: "18°C", condition: "Partly Cloudy", humidity: "60%", wind: "12 km/h" },
    stops: [
      {
        id: "d2a1",
        type: "activity",
        icon: Mountain,
        title: "Tiger's Nest Monastery",
        subtitle: "The iconic cliff-side pilgrimage",
        time: "7:00 AM",
        duration: "5-6 hours",
        status: "Guided Hike",
        color: "#10b981",
        price: "$32 for two",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
        details: {
          about: "Taktshang Monastery clings to a cliff 900m above the Paro Valley.",
          highlights: ["Cafe with views", "Monastery exploration", "Photography guide"],
          tips: "Start early to avoid crowds. Bring 2L water."
        }
      },
      {
        id: "d2f1",
        type: "food",
        icon: Coffee,
        title: "Farmhouse Lunch",
        subtitle: "Rustic Bhutanese experience",
        time: "1:00 PM",
        duration: "90 minutes",
        status: "Included",
        color: "#f97316",
        price: "$20 for two",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        details: {
          cuisine: "Organic farm-to-table",
          tips: "Learn about traditional Bhutanese farming"
        }
      }
    ]
  }
];

/* ─── Nav Item ─── */
function NavItem({ icon: Icon, label, href, active }: { icon: any; label: string; href: string; active?: boolean }) {
  return (
    <Link href={href} style={{
      display: "flex", alignItems: "center", gap: "12px",
      padding: "12px 16px", borderRadius: "12px", textDecoration: "none",
      color: active ? "#e8543f" : "#52525b",
      background: active ? "#fef2ef" : "transparent",
      fontWeight: active ? 600 : 400, fontSize: "14px",
      transition: "all 0.2s"
    }}>
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}

/* ─── Rich Stop Card Components ─── */

function FlightCard({ stop, onClick }: { stop: any; onClick: () => void }) {
  return (
    <div onClick={onClick} className="ky-rich-card ky-flight-card" style={{ animation: "fadeUp 0.4s ease-out" }}>
      <div className="flight-header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="icon-box flight-icon"><Plane size={20} color="#1e40af" /></div>
          <div>
            <div className="card-title">{stop.title}</div>
            <div className="card-subtitle">{stop.details.airline}</div>
          </div>
        </div>
        <div className="status-badge" style={{ background: "#dbeafe", color: "#1e40af" }}>{stop.status}</div>
      </div>
      <div className="flight-route">
        <div className="route-point">
          <div className="route-time">{stop.details.departure.time}</div>
          <div className="route-code">{stop.details.departure.airport}</div>
        </div>
        <div className="route-line">
          <div className="line-dashed"></div>
          <Plane size={16} className="route-plane" />
        </div>
        <div className="route-point right">
          <div className="route-time">{stop.details.arrival.time}</div>
          <div className="route-code">{stop.details.arrival.airport}</div>
        </div>
      </div>
      <div className="flight-footer">
        <div className="flight-duration"><Clock size={14} /> {stop.duration}</div>
        <div className="flight-price">{stop.price}</div>
      </div>
    </div>
  );
}

function HotelCard({ stop, onClick }: { stop: any; onClick: () => void }) {
  return (
    <div onClick={onClick} className="ky-rich-card ky-image-card" style={{ backgroundImage: `url(${stop.image})`, animation: "fadeUp 0.4s ease-out 0.1s both" }}>
      <div className="image-overlay"></div>
      <div className="card-content">
        <div className="card-top">
          <div className="status-badge glass">{stop.status}</div>
          {stop.rating && <div className="rating-pill"><Star size={12} fill="#fbbf24" color="#fbbf24" /> {stop.rating}</div>}
        </div>
        <div className="card-bottom">
          <div className="card-title text-white">{stop.title}</div>
          <div className="card-subtitle text-light"><MapPin size={12} /> {stop.details.address}</div>
          <div className="amenities-row">
            {stop.details.amenities.slice(0, 2).map((a: string, i: number) => (
              <span key={i} className="amenity-tag">{a}</span>
            ))}
            <span className="price-tag">{stop.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ stop, onClick }: { stop: any; onClick: () => void }) {
  return (
    <div onClick={onClick} className="ky-rich-card ky-activity-card" style={{ animation: "fadeUp 0.4s ease-out 0.2s both" }}>
      <div className="activity-img" style={{ backgroundImage: `url(${stop.image})` }}></div>
      <div className="activity-details">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <div>
            <div className="card-title">{stop.title}</div>
            <div className="card-subtitle">{stop.subtitle}</div>
          </div>
          <div className="status-badge" style={{ background: `${stop.color}15`, color: stop.color }}>{stop.status}</div>
        </div>
        <div className="activity-meta">
          <span><Clock size={12} /> {stop.time} ({stop.duration})</span>
          <span style={{ fontWeight: 600, color: "#09090b" }}>{stop.price}</span>
        </div>
        {stop.details.tips && (
          <div className="activity-tip">
            <Sparkles size={12} style={{ color: stop.color }} />
            <span>{stop.details.tips}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Detail Panel ─── */
function DetailPanel({ stop, onClose }: { stop: any; onClose: () => void }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 299, backdropFilter: "blur(4px)" }} />
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "520px", maxWidth: "95vw", background: "#fff", zIndex: 300, overflow: "auto", animation: "slideIn 0.3s ease-out" }}>
        <div style={{ position: "relative", height: "300px" }}>
          <img src={stop.image || stop.details?.image || tripData.heroImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
          <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={20} color="#09090b" />
          </button>
          <div style={{ position: "absolute", bottom: "24px", left: "24px", color: "#fff" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "4px" }}>{stop.title}</h2>
            <div style={{ fontSize: "15px", opacity: 0.9 }}>{stop.subtitle}</div>
          </div>
        </div>
        <div style={{ padding: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "24px" }}>
            <div style={{ background: "#f4f4f5", padding: "16px", borderRadius: "16px", textAlign: "center" }}>
              <Clock size={20} style={{ margin: "0 auto 8px", color: "#71717a" }} />
              <div style={{ fontSize: "14px", fontWeight: 700 }}>{stop.duration}</div>
              <div style={{ fontSize: "12px", color: "#71717a" }}>Duration</div>
            </div>
            <div style={{ background: "#f4f4f5", padding: "16px", borderRadius: "16px", textAlign: "center" }}>
              <Star size={20} style={{ margin: "0 auto 8px", color: "#fbbf24" }} />
              <div style={{ fontSize: "14px", fontWeight: 700 }}>{stop.rating || "N/A"}</div>
              <div style={{ fontSize: "12px", color: "#71717a" }}>Rating</div>
            </div>
            <div style={{ background: "#fef2ef", padding: "16px", borderRadius: "16px", textAlign: "center", color: "#e8543f" }}>
              <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "4px" }}>$</div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>{stop.price}</div>
            </div>
          </div>
          {stop.details?.about && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>About</h3>
              <p style={{ fontSize: "15px", color: "#52525b", lineHeight: 1.6 }}>{stop.details.about}</p>
            </div>
          )}
          {stop.details?.highlights && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>Highlights</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {stop.details.highlights.map((h: string, i: number) => (
                  <span key={i} style={{ padding: "8px 16px", background: "#f4f4f5", borderRadius: "100px", fontSize: "13px", fontWeight: 500 }}>{h}</span>
                ))}
              </div>
            </div>
          )}
          {stop.details?.tips && (
            <div style={{ padding: "16px", background: "#fef3c7", borderRadius: "16px", color: "#92400e" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, marginBottom: "8px" }}>
                <Sparkles size={16} /> Advisor Tip
              </div>
              <p style={{ fontSize: "14px", margin: 0 }}>{stop.details.tips}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ─── Main Component ─── */
export default function DetailPage() {
  const [activeDay, setActiveDay] = useState(0);
  const [selectedStop, setSelectedStop] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const day = days[activeDay];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        
        .ky-rich-card { background: #fff; border-radius: 20px; border: 1px solid #ececee; overflow: hidden; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
        .ky-rich-card:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: #d4d4d8; }
        
        /* Flight */
        .ky-flight-card { padding: 20px; }
        .flight-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .flight-icon { background: #eff6ff; }
        .card-title { font-size: 16px; font-weight: 700; color: #09090b; margin-bottom: 4px; }
        .card-subtitle { font-size: 13px; color: #71717a; }
        .status-badge { padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; }
        .flight-route { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; background: #fafafa; padding: 16px; border-radius: 12px; }
        .route-point { text-align: left; }
        .route-point.right { text-align: right; }
        .route-time { font-size: 20px; font-weight: 800; color: #09090b; }
        .route-code { font-size: 14px; color: #a1a1aa; font-weight: 600; }
        .route-line { flex: 1; margin: 0 24px; position: relative; height: 2px; }
        .line-dashed { position: absolute; inset: 0; border-top: 2px dashed #d4d4d8; top: 0; }
        .route-plane { position: absolute; top: -7px; left: 50%; transform: translateX(-50%); color: #3b82f6; background: #fafafa; padding: 0 4px; }
        .flight-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px dashed #ececee; }
        .flight-duration { font-size: 13px; color: #71717a; display: flex; align-items: center; gap: 6px; }
        .flight-price { font-size: 15px; font-weight: 700; color: #09090b; }

        /* Hotel/Image Bg */
        .ky-image-card { height: 240px; background-size: cover; background-position: center; position: relative; }
        .ky-image-card .image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%); transition: opacity 0.3s; }
        .ky-image-card:hover .image-overlay { opacity: 0.9; }
        .ky-image-card .card-content { position: absolute; inset: 0; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; zIndex: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .status-badge.glass { background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
        .rating-pill { background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); padding: 4px 10px; border-radius: 100px; color: #fff; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .text-white { color: #fff; font-size: 20px; }
        .text-light { color: rgba(255,255,255,0.8); margin-bottom: 12px; display: flex; align-items: center; gap: 4px; }
        .amenities-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .amenity-tag { padding: 4px 10px; border-radius: 8px; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); color: #fff; font-size: 11px; font-weight: 500; }
        .price-tag { margin-left: auto; color: #fff; font-weight: 700; font-size: 15px; }

        /* Activity */
        .ky-activity-card { display: flex; height: 160px; }
        .activity-img { width: 140px; background-size: cover; background-position: center; flex-shrink: 0; }
        .activity-details { padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .activity-meta { display: flex; justify-content: space-between; font-size: 13px; color: #71717a; margin-top: auto; padding-top: 12px; border-top: 1px solid #f4f4f5; }
        .activity-tip { margin-top: 12px; padding: 8px 12px; background: #fafafa; border-radius: 8px; font-size: 12px; color: #52525b; display: flex; align-items: center; gap: 8px; }

      `}</style>
      <div style={{ fontFamily: "Cosmic, system-ui, sans-serif", background: "#f8f8fa", minHeight: "100vh", color: "#09090b", display: "flex" }}>
        
        {/* Left Sidebar */}
        <aside style={{ width: sidebarOpen ? "260px" : "72px", minHeight: "100vh", background: "#fff", borderRight: "1px solid #ececee", padding: "20px", display: "flex", flexDirection: "column", position: "fixed", left: 0, top: 0, bottom: 0, transition: "width 0.3s", zIndex: 100, boxShadow: "4px 0 20px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", padding: sidebarOpen ? "0" : "8px" }}>
            <KyvariLogo size={40} />
            {sidebarOpen && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ position: "absolute", right: "-12px", top: "70px", width: "24px", height: "24px", borderRadius: "50%", background: "#fff", border: "1px solid #ececee", color: "#71717a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            {sidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
          <nav style={{ flex: 1 }}>
            <NavItem icon={Home} label="Dashboard" href="/dashboard" />
            <NavItem icon={FileText} label="Trips" href="/trips2" active />
            <NavItem icon={Search} label="Library" href="/library2" />
            <NavItem icon={BarChart3} label="Analytics" href="/analytics2" />
            <div style={{ marginTop: "24px" }}><NavItem icon={Settings} label="Settings" href="/settings2" /></div>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, marginLeft: sidebarOpen ? "260px" : "72px", transition: "margin 0.3s" }}>
          
          {/* Hero Section */}
          <div style={{ position: "relative", height: "340px", overflow: "hidden", borderBottomLeftRadius: "32px", borderBottomRightRadius: "32px" }}>
            <img src={tripData.heroImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)" }} />
            
            <div style={{ position: "absolute", inset: 0, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                {tripData.tags.map((tag, i) => (
                  <span key={i} style={{ padding: "6px 14px", borderRadius: "100px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", fontSize: "12px", fontWeight: 600, color: "#fff" }}>{tag}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "8px", color: "#fff", letterSpacing: "-0.02em" }}>{tripData.title}</h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>{tripData.subtitle} • {tripData.destination}</p>
              <div style={{ display: "flex", gap: "24px", fontSize: "15px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Calendar size={16} />{tripData.duration}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Users size={16} />{tripData.travelers}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fbbf24" }}><Star size={16} fill="#fbbf24" />{tripData.rating}</span>
              </div>
            </div>

            <div style={{ position: "absolute", top: "24px", right: "24px", display: "flex", gap: "12px" }}>
              <Link href="/preview2" style={{ padding: "12px 24px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(232,84,63,0.3)" }}>
                <ExternalLink size={16} /> Client Preview
              </Link>
            </div>
          </div>

          <div style={{ padding: "32px 48px", maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Day Nav Tabs */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "32px", overflowX: "auto", paddingBottom: "12px" }}>
              {days.map((d, i) => (
                <button key={i} onClick={() => setActiveDay(i)} style={{
                  padding: "16px 24px", borderRadius: "16px", minWidth: "160px",
                  background: activeDay === i ? "#fff" : "transparent",
                  border: activeDay === i ? "2px solid #09090b" : "2px solid transparent",
                  color: activeDay === i ? "#09090b" : "#71717a",
                  cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                  boxShadow: activeDay === i ? "0 4px 12px rgba(0,0,0,0.05)" : "none"
                }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, marginBottom: "4px", color: activeDay === i ? "#e8543f" : "#a1a1aa" }}>{d.name}</div>
                  <div style={{ fontSize: "15px", fontWeight: 600 }}>{d.theme}</div>
                </button>
              ))}
            </div>

            {/* Day Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <div>
                <h2 style={{ fontSize: "28px", fontWeight: 800 }}>{day.theme}</h2>
                <div style={{ color: "#71717a", marginTop: "4px" }}>{day.name} Itinerary</div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{ padding: "10px 16px", background: "#fff", border: "1px solid #ececee", borderRadius: "12px", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600 }}>
                  <Thermometer size={16} color="#e8543f" /> {day.weather.temp} • {day.weather.condition}
                </div>
              </div>
            </div>

            {/* Stops Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
              {day.stops.map((stop) => {
                if (stop.type === "flight") return <FlightCard key={stop.id} stop={stop} onClick={() => setSelectedStop(stop)} />;
                if (stop.type === "hotel") return <HotelCard key={stop.id} stop={stop} onClick={() => setSelectedStop(stop)} />;
                return <ActivityCard key={stop.id} stop={stop} onClick={() => setSelectedStop(stop)} />;
              })}
            </div>

          </div>
        </main>

        {/* Modal */}
        {selectedStop && <DetailPanel stop={selectedStop} onClose={() => setSelectedStop(null)} />}
      </div>
    </>
  );
}

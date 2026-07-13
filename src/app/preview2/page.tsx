'use client';
import React, { useState } from 'react';
import {
  Plane, Hotel, Coffee, Camera, MapPin, Sun, Moon, Star,
  Calendar, Users, Heart, Share2, Download, ChevronRight, Phone,
  Mail, Globe, Clock, Thermometer, Wind, Droplets, CheckCircle,
  Mountain, Castle, Wine, UtensilsCrossed, Music, PalmtreeIcon,
  Waves, Trees, ArrowRight, Send, Menu, X, ChevronDown, Play,
  Sparkles, Building2, Landmark
} from 'lucide-react';

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGradPrev" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradPrev)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Trip Data ─── */
const trip = {
  id: "BTN-2026-001",
  title: "Bhutanese Bliss",
  subtitle: "A Himalayan Adventure for Two",
  destination: "Paro & Thimphu, Bhutan",
  duration: "3 Days / 2 Nights",
  dates: "20 - 22 July 2026",
  travelers: "2 Adults",
  budget: "$1,850",
  perPerson: "$925/person",
  rating: 4.9,
  reviews: 47,
  heroImage: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1920&q=90",
  agent: {
    name: "Wanderlust Travel Co.",
    email: "hello@wanderlust.co",
    phone: "+91 98765 43210",
    website: "www.wanderlust.co",
    logo: null
  },
  summary: { stops: 14, days: 3, hours: 28, distance: "156 km" },
  tags: ["Adventure", "Culture", "Wellness", "Photography", "Nature"],
  overview: "Experience the magic of Bhutan, the last Himalayan kingdom, with this carefully curated 3-day journey. From the iconic Tiger's Nest monastery to ancient dzongs, immerse yourself in a land where happiness is measured by Gross National Happiness.",
  inclusions: [
    "All accommodations (2 nights)",
    "Daily breakfast & dinner",
    "Airport transfers",
    "Private guided tours",
    "All entrance fees",
    "Traditional hot stone bath",
    "Cooking class experience"
  ],
  notIncluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Tips & gratuities",
    "Bhutan Sustainable Development Fee ($100/day)"
  ]
};

const days = [
  {
    id: "day1",
    name: "Day 1",
    theme: "Arrival & Exploration",
    date: "20 July 2026",
    gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    weather: { temp: "24°C", condition: "Sunny", humidity: "45%", wind: "8 km/h" },
    summary: "Arrive in Paro, check into your heritage hotel, and explore the magnificent Rinpung Dzong at golden hour.",
    stops: [
      {
        id: "d1f1",
        type: "flight",
        title: "Druk Air KB205",
        subtitle: "Delhi (DEL) → Paro (PBH)",
        time: "06:00 AM",
        duration: "1h 45m",
        status: "Confirmed",
        price: "$180/person",
        icon: Plane,
        color: "#3b82f6",
        details: {
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
        title: "Hotel Olathang",
        subtitle: "Traditional Bhutanese Hospitality",
        time: "12:00 PM",
        duration: "2 Nights",
        status: "Booked",
        price: "$600 (2 nights)",
        rating: 4.5,
        icon: Building2,
        color: "#f59e0b",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        details: {
          address: "Main Street, Paro, Bhutan",
          roomType: "Deluxe Valley View Room",
          checkIn: "12:00 PM",
          checkOut: "11:00 AM",
          amenities: ["Valley view balcony", "Hot stone bath", "Free WiFi"],
          highlights: ["Built in 1972", "5-min walk to Dzong"]
        }
      },
      {
        id: "d1a1",
        type: "activity",
        title: "Rinpung Dzong",
        subtitle: "Golden Hour at the Fortress",
        time: "4:00 PM",
        duration: "2 hours",
        status: "Guided Tour",
        price: "$10/person",
        rating: 4.7,
        icon: Castle,
        color: "#8b5cf6",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
        details: {
          about: "Built in 1646, Rinpung Dzong is one of Bhutan's most iconic dzongs with massive walls overlooking the Paro Valley.",
          highlights: ["Guided tour with historian", "Traditional archery grounds", "Beautiful frescoes", "Sunset photography"],
          tips: "Best time: 5-6 PM for magical golden hour lighting"
        }
      }
    ]
  },
  {
    id: "day2",
    name: "Day 2",
    theme: "Tiger's Nest & Wellness",
    date: "21 July 2026",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    weather: { temp: "18°C", condition: "Partly Cloudy", humidity: "60%", wind: "12 km/h" },
    summary: "The highlight of your journey - hike to the iconic Tiger's Nest Monastery, followed by a traditional hot stone bath.",
    stops: [
      {
        id: "d2a1",
        type: "activity",
        title: "Tiger's Nest Monastery",
        subtitle: "The Iconic Cliff-Side Pilgrimage",
        time: "7:00 AM",
        duration: "5-6 hours",
        status: "Guided Hike",
        price: "$32 for two",
        rating: 4.9,
        icon: Mountain,
        color: "#10b981",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
        details: {
          about: "Taktshang Monastery clings to a cliff 900m above the Paro Valley. The most sacred site in Bhutan.",
          difficulty: "Moderate to Challenging",
          distance: "5.2 km round trip",
          elevation: "450m gain",
          highlights: ["Cafe with valley views at midpoint", "Monastery exploration", "Sacred meditation caves"],
          tips: "Start by 7:30 AM to avoid crowds and afternoon clouds"
        }
      },
      {
        id: "d2f1",
        type: "food",
        title: "Farmhouse Lunch",
        subtitle: "Rustic Bhutanese experience",
        time: "1:00 PM",
        duration: "90 minutes",
        status: "Included",
        price: "$20 for two",
        icon: Coffee,
        color: "#f97316",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        details: {
          cuisine: "Organic farm-to-table",
          tips: "Learn about traditional Bhutanese farming"
        }
      },
      {
        id: "d2w1",
        type: "activity",
        title: "Traditional Hot Stone Bath",
        subtitle: "Ultimate Himalayan Wellness",
        time: "3:00 PM",
        duration: "2 hours",
        status: "Booked",
        price: "$50 for two",
        rating: 4.8,
        icon: Waves,
        color: "#06b6d4",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
        details: {
          about: "Traditional Bhutanese Dotshu - natural mineral water heated by river stones. Known for healing properties.",
          benefits: ["Muscle relaxation", "Improved circulation", "Stress relief", "Better sleep"],
          includes: ["Private outdoor bath", "Herbal tea", "Changing facilities"]
        }
      }
    ]
  }
];

const gallery = [
  { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600", alt: "Tiger's Nest" },
  { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600", alt: "Paro Valley" },
  { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600", alt: "Rinpung Dzong" },
  { url: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600", alt: "Buddha Dordenma" },
  { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600", alt: "Hot Stone Bath" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", alt: "Hotel" },
];

/* ─── Rich Stop Card Components (from detail2) ─── */

function FlightCard({ stop }: { stop: any }) {
  return (
    <div className="ky-rich-card ky-flight-card dark-mode">
      <div className="flight-header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="icon-box flight-icon" style={{ background: "rgba(59,130,246,0.15)" }}><Plane size={20} color="#60a5fa" /></div>
          <div>
            <div className="card-title text-white">{stop.title}</div>
            <div className="card-subtitle text-zinc-400">{stop.details.airline}</div>
          </div>
        </div>
        <div className="status-badge" style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}>{stop.status}</div>
      </div>
      <div className="flight-route" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="route-point">
          <div className="route-time text-white">{stop.details.departure.time}</div>
          <div className="route-code">{stop.details.departure.airport}</div>
        </div>
        <div className="route-line">
          <div className="line-dashed dark"></div>
          <Plane size={16} className="route-plane dark" />
        </div>
        <div className="route-point right">
          <div className="route-time text-white">{stop.details.arrival.time}</div>
          <div className="route-code">{stop.details.arrival.airport}</div>
        </div>
      </div>
      <div className="flight-footer border-dark">
        <div className="flight-duration text-zinc-400"><Clock size={14} /> {stop.duration}</div>
        <div className="flight-price text-white">{stop.price}</div>
      </div>
    </div>
  );
}

function HotelCard({ stop }: { stop: any }) {
  return (
    <div className="ky-rich-card ky-image-card">
      <div className="image-bg" style={{ backgroundImage: `url(${stop.image})` }}></div>
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
            <span className="price-tag text-white">{stop.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ stop }: { stop: any }) {
  return (
    <div className="ky-rich-card ky-activity-card dark-mode">
      <div className="activity-img" style={{ backgroundImage: `url(${stop.image})` }}></div>
      <div className="activity-details">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <div>
            <div className="card-title text-white">{stop.title}</div>
            <div className="card-subtitle text-zinc-400">{stop.subtitle}</div>
          </div>
          <div className="status-badge" style={{ background: `${stop.color}25`, color: stop.color }}>{stop.status}</div>
        </div>
        <div className="activity-meta border-dark text-zinc-400">
          <span><Clock size={12} /> {stop.time} ({stop.duration})</span>
          <span style={{ fontWeight: 600, color: "#fff" }}>{stop.price}</span>
        </div>
        {stop.details.tips && (
          <div className="activity-tip dark">
            <Sparkles size={12} style={{ color: stop.color }} />
            <span>{stop.details.tips}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function PreviewPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; color: #fff; font-family: "system-ui", sans-serif; }
        
        .hero-banner { position: relative; height: 80vh; min-height: 600px; display: flex; flex-direction: column; }
        .hero-bg { position: absolute; inset: 0; z-index: -1; }
        .hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(9,9,11,1) 100%); }
        
        .header { display: flex; justify-content: space-between; align-items: center; padding: 24px 48px; position: relative; z-index: 10; }
        .btn-contact { padding: 10px 20px; border-radius: 100px; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 14px; transition: background 0.2s; text-decoration: none; }
        .btn-contact:hover { background: rgba(255,255,255,0.2); }
        .btn-primary { padding: 10px 24px; border-radius: 100px; background: linear-gradient(135deg, #ff8a5c, #e8543f); border: none; color: #fff; font-weight: 600; font-size: 14px; cursor: pointer; box-shadow: 0 4px 14px rgba(232,84,63,0.3); transition: transform 0.2s, box-shadow 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(232,84,63,0.4); }

        .hero-content { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 48px; max-width: 1200px; margin: 0 auto; width: 100%; position: relative; z-index: 10; }
        
        .nav-tabs { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 16px; margin-top: 48px; }
        .nav-tab { padding: 16px 24px; border-radius: 16px; min-width: 160px; background: rgba(255,255,255,0.05); border: 2px solid transparent; color: #a1a1aa; cursor: pointer; text-align: left; transition: all 0.2s; }
        .nav-tab.active { background: #fff; color: #09090b; }

        .ky-rich-card { border-radius: 20px; overflow: hidden; margin-bottom: 20px; }
        .ky-rich-card.dark-mode { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); }
        
        .ky-flight-card { padding: 24px; }
        .flight-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
        .icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .card-title { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .card-subtitle { font-size: 13px; }
        .status-badge { padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; }
        
        .flight-route { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; padding: 20px; border-radius: 16px; }
        .route-point { text-align: left; }
        .route-point.right { text-align: right; }
        .route-time { font-size: 24px; font-weight: 800; margin-bottom: 4px; }
        .route-code { font-size: 14px; color: #a1a1aa; font-weight: 600; }
        .route-line { flex: 1; margin: 0 32px; position: relative; height: 2px; }
        .line-dashed.dark { position: absolute; inset: 0; border-top: 2px dashed rgba(255,255,255,0.2); top: 0; }
        .route-plane.dark { position: absolute; top: -7px; left: 50%; transform: translateX(-50%); color: #60a5fa; background: #18181b; padding: 0 4px; }
        .flight-footer.border-dark { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px dashed rgba(255,255,255,0.1); }
        .flight-duration { font-size: 14px; display: flex; align-items: center; gap: 6px; }
        .flight-price { font-size: 16px; font-weight: 700; }

        .ky-image-card { height: 280px; position: relative; }
        .image-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.5s ease; }
        .ky-image-card:hover .image-bg { transform: scale(1.03); }
        .image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%); }
        .card-content { position: absolute; inset: 0; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; z-index: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .status-badge.glass { background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
        .rating-pill { background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); padding: 6px 12px; border-radius: 100px; color: #fff; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; }
        .amenities-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 12px; }
        .amenity-tag { padding: 6px 12px; border-radius: 8px; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); color: #fff; font-size: 12px; font-weight: 500; }

        .ky-activity-card { display: flex; height: 180px; }
        .activity-img { width: 160px; background-size: cover; background-position: center; flex-shrink: 0; }
        .activity-details { padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .activity-meta.border-dark { display: flex; justify-content: space-between; font-size: 14px; margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }
        .activity-tip.dark { margin-top: 16px; padding: 10px 14px; background: rgba(255,255,255,0.05); border-radius: 10px; font-size: 13px; color: #d4d4d8; display: flex; align-items: center; gap: 8px; }

        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
        .gallery-img { width: 100%; height: 240px; object-fit: cover; border-radius: 16px; transition: transform 0.3s; }
        .gallery-img:hover { transform: translateY(-4px); }

        .bottom-bar { position: fixed; bottom: 0; left: 0; right: 0; background: #18181b; padding: 24px 48px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; z-index: 100; }
        
        .text-white { color: #fff; }
        .text-zinc-400 { color: #a1a1aa; }
        .text-light { color: rgba(255,255,255,0.8); margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
      `}</style>

      {/* ═══ 1. HERO BANNER ═══ */}
      <div className="hero-banner">
        <div className="hero-bg">
          <img src={trip.heroImage} alt="Bhutan" />
          <div className="hero-overlay"></div>
        </div>

        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <KyvariLogo size={40} />
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800 }}>Wanderlust Travel Co.</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Your Travel Partner</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="mailto:hello@wanderlust.co" className="btn-contact">
              <Mail size={16} /> Contact
            </a>
          </div>
        </header>

        <div className="hero-content">
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            {trip.tags.map((tag, i) => (
              <span key={i} style={{ padding: "6px 16px", borderRadius: "100px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", fontSize: "13px", fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "64px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>{trip.title}</h1>
          <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "800px" }}>{trip.subtitle} • {trip.destination}</p>
          
          <div style={{ display: "flex", gap: "32px", fontSize: "16px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><Calendar size={18} />{trip.duration}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><Users size={18} />{trip.travelers}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fbbf24" }}><Star size={18} fill="#fbbf24" />{trip.rating} ({trip.reviews} reviews)</span>
          </div>

          <div className="nav-tabs">
            {days.map((d, i) => (
              <button key={i} onClick={() => setActiveDay(i)} className={`nav-tab ${activeDay === i ? 'active' : ''}`}>
                <div style={{ fontSize: "12px", fontWeight: 700, marginBottom: "4px", color: activeDay === i ? '#e8543f' : 'inherit' }}>{d.name}</div>
                <div style={{ fontSize: "15px", fontWeight: 600 }}>{d.theme}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 2. ITINERARY CONTENT ═══ */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px", paddingBottom: "140px" }}>
        
        {/* Overview Row */}
        <div style={{ display: "flex", gap: "48px", marginBottom: "48px" }}>
          <div style={{ flex: 2 }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>Trip Overview</h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{trip.overview}</p>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#fbbf24" }}>Included</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {trip.inclusions.slice(0, 4).map((inc, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "14px", marginBottom: "12px", color: "rgba(255,255,255,0.8)" }}>
                  <CheckCircle size={16} color="#22c55e" /> {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Day Details */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <div>
              <h2 style={{ fontSize: "32px", fontWeight: 800 }}>{days[activeDay].theme}</h2>
              <div style={{ color: "rgba(255,255,255,0.5)", marginTop: "8px", fontSize: "16px" }}>{days[activeDay].name} Itinerary</div>
            </div>
            <div style={{ padding: "12px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: 600 }}>
              <Thermometer size={18} color="#e8543f" /> {days[activeDay].weather.temp} • {days[activeDay].weather.condition}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
            {days[activeDay].stops.map((stop) => {
              if (stop.type === "flight") return <FlightCard key={stop.id} stop={stop} />;
              if (stop.type === "hotel") return <HotelCard key={stop.id} stop={stop} />;
              return <ActivityCard key={stop.id} stop={stop} />;
            })}
          </div>
        </div>

        {/* ═══ 3. GALLERY ═══ */}
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px" }}>Trip Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((img, i) => (
              <img key={i} src={img.url} alt={img.alt} className="gallery-img" />
            ))}
          </div>
        </div>

      </div>

      {/* ═══ 4. STICKY BOTTOM BAR ═══ */}
      <div className="bottom-bar">
        <div>
          <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>Total Price</div>
          <div style={{ fontSize: "28px", fontWeight: 800 }}>{trip.budget} <span style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>total for 2 adults</span></div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button style={{ padding: "16px 24px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontWeight: 600, fontSize: "16px", cursor: "pointer" }}>
            Download PDF
          </button>
          <button style={{ padding: "16px 40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", border: "none", color: "#fff", fontWeight: 700, fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 20px rgba(232,84,63,0.3)" }}>
            Approve & Book
          </button>
        </div>
      </div>

    </>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search, Plus, Filter, MapPin, Star, Grid, List,
  Hotel, Utensils, Camera, Plane, Clock, ChevronRight,
  Bookmark, Download, Share2, Home, FileText, BarChart3,
  Settings, ChevronLeft, ChevronRight as ChevRight
} from 'lucide-react';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
`;

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGradLib" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradLib)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Nav Item ─── */
function NavItem({ icon: Icon, label, href, active, collapsed }: { icon: any; label: string; href: string; active?: boolean; collapsed?: boolean }) {
  return (
    <Link href={href} style={{
      display: "flex", alignItems: "center", gap: collapsed ? "0" : "12px",
      padding: collapsed ? "12px" : "12px 16px",
      borderRadius: "12px", textDecoration: "none",
      color: active ? "#e8543f" : "#52525b",
      background: active ? "#fef2ef" : "transparent",
      fontWeight: active ? 600 : 400, fontSize: "14px",
      transition: "all 0.2s", justifyContent: collapsed ? "center" : "flex-start"
    }}>
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

/* ─── Data ─── */
const categories = ['All', 'Hotels', 'Restaurants', 'Activities', 'Transports', 'Flights'];

const libraryItems = [
  { id: 1, type: 'Hotel', name: 'Hotel Olathang', location: 'Paro, Bhutan', rating: 4.5, price: '$150/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', tags: ['Luxury', 'Valley View'], color: '#8b5cf6' },
  { id: 2, type: 'Restaurant', name: 'Sonam Trophel Restaurant', location: 'Paro, Bhutan', rating: 4.4, price: '~$12/pp', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop', tags: ['Local', 'Bhutanese'], color: '#ffc24d' },
  { id: 3, type: 'Activity', name: "Tiger's Nest Monastery", location: 'Paro, Bhutan', rating: 4.9, price: '$16/pp', image: 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=400&h=300&fit=crop', tags: ['Cultural', 'Hiking'], color: '#e8543f' },
  { id: 4, type: 'Hotel', name: 'Six Senses Bhutan', location: 'Paro Valley', rating: 4.8, price: '$450/night', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop', tags: ['Luxury', 'Spa'], color: '#8b5cf6' },
  { id: 5, type: 'Activity', name: 'Rinpung Dzong', location: 'Paro, Bhutan', rating: 4.6, price: '$10/pp', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', tags: ['Heritage', 'Architecture'], color: '#e8543f' },
  { id: 6, type: 'Restaurant', name: 'Bamboo House', location: 'Thimphu, Bhutan', rating: 4.3, price: '~$15/pp', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop', tags: ['Fusion', 'Modern'], color: '#ffc24d' },
  { id: 7, type: 'Hotel', name: 'Uma by COMO', location: 'Paro, Bhutan', rating: 4.7, price: '$280/night', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop', tags: ['Boutique', 'Wellness'], color: '#8b5cf6' },
  { id: 8, type: 'Transport', name: 'Private SUV Transfer', location: 'PBH Airport', rating: 4.8, price: '$45/trip', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop', tags: ['Comfort', 'Scenic'], color: '#0ea5e9' },
  { id: 9, type: 'Flight', name: 'Druk Air KB205', location: 'DEL → PBH', rating: 4.5, price: '$180/pp', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop', tags: ['Scenic', 'Direct'], color: '#22c55e' },
];

const typeIcons: Record<string, any> = { Hotel, Restaurant: Utensils, Activity: Camera, Transport: Plane, Flight: Plane };

export default function LibraryPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = FONT_CSS;
    document.head.appendChild(s);
    setMounted(true);
    return () => { document.head.removeChild(s); };
  }, []);

  if (!mounted) return null;

  const filteredItems = libraryItems.filter(item => {
    const matchesCategory = filter === 'All' || item.type + 's' === filter || item.type === filter.slice(0, -1);
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.location.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ky-library-page { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-library-page * { box-sizing: border-box; }

        /* Search */
        .ky-search-bar { display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid #ececee; border-radius: 16px; padding: 12px 20px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .ky-search-input { flex: 1; border: none; outline: none; font-size: 14px; font-family: Cosmic, sans-serif; background: transparent; }

        /* Filters */
        .ky-filters { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
        .ky-filter { padding: 10px 20px; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; color: #71717a; border: 1px solid #ececee; background: #fff; font-family: Cosmic, sans-serif; }
        .ky-filter.active { background: #09090b; color: #fff; border-color: #09090b; }
        .ky-filter:hover:not(.active) { background: #f4f4f5; }

        /* Library Grid */
        .ky-lib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ky-lib-card { background: #fff; border: 1px solid #ececee; border-radius: 24px; overflow: hidden; transition: all .3s; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .ky-lib-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,.08); }
        .ky-lib-img { height: 180px; position: relative; overflow: hidden; }
        .ky-lib-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
        .ky-lib-card:hover .ky-lib-img img { transform: scale(1.05); }
        .ky-lib-type { position: absolute; top: 12px; left: 12px; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; color: #fff; backdrop-filter: blur(8px); }
        .ky-lib-rating { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,.9); backdrop-filter: blur(8px); padding: 4px 10px; border-radius: 100px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .ky-lib-body { padding: 20px; }
        .ky-lib-name { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
        .ky-lib-loc { font-size: 13px; color: #71717a; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; }
        .ky-lib-tags { display: flex; gap: 6px; margin-bottom: 14px; }
        .ky-lib-tag { padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 600; background: #f4f4f5; color: #52525b; }
        .ky-lib-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #f4f4f5; }
        .ky-lib-price { font-size: 15px; font-weight: 700; color: #e8543f; }
        .ky-lib-actions { display: flex; gap: 8px; }
        .ky-lib-action { width: 32px; height: 32px; border-radius: 10px; border: 1px solid #ececee; background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .2s; }
        .ky-lib-action:hover { background: #f4f4f5; }

        /* Buttons */
        .ky-btn-coral { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 14px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all .2s; text-decoration: none; font-family: Cosmic, sans-serif; border: none; background: linear-gradient(135deg, #ff8a5c, #e8543f); color: #fff; box-shadow: 0 4px 12px rgba(232,84,63,0.3); }
        .ky-btn-coral:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(232,84,63,0.4); }

        @media (max-width: 1200px) { .ky-lib-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .ky-lib-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="ky-library-page">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside style={{
          width: sidebarCollapsed ? "72px" : "260px", minHeight: "100vh", background: "#fff",
          borderRight: "1px solid #ececee", padding: "20px", display: "flex", flexDirection: "column",
          position: "fixed", left: 0, top: 0, bottom: 0, transition: "width 0.3s", zIndex: 100,
          boxShadow: "4px 0 20px rgba(0,0,0,0.03)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <KyvariLogo size={40} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
            position: "absolute", right: "-12px", top: "80px", width: "24px", height: "24px", borderRadius: "50%",
            background: "#fff", border: "1px solid #ececee", color: "#71717a", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 101, boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            {sidebarCollapsed ? <ChevRight size={14} /> : <ChevronLeft size={14} />}
          </button>
          <nav style={{ flex: 1 }}>
            <NavItem icon={Home} label="Dashboard" href="/dashboard" collapsed={sidebarCollapsed} />
            <NavItem icon={FileText} label="Trips" href="/trips2" collapsed={sidebarCollapsed} />
            <NavItem icon={Search} label="Library" href="/library2" active collapsed={sidebarCollapsed} />
            <NavItem icon={BarChart3} label="Analytics" href="/analytics2" collapsed={sidebarCollapsed} />
            <div style={{ marginTop: "24px" }}>
              <NavItem icon={Settings} label="Settings" href="/settings2" collapsed={sidebarCollapsed} />
            </div>
          </nav>
          <div style={{ paddingTop: "20px", borderTop: "1px solid #ececee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#fff" }}>WL</div>
              {!sidebarCollapsed && (<div><div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div><div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div></div>)}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", padding: "32px", background: "#f8f8fa", minHeight: "100vh" }}>

          {/* Page Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", animation: "fadeUp 0.4s ease-out" }}>
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "4px" }}>Content Library</h1>
              <p style={{ fontSize: "15px", color: "#71717a" }}>Hotels, restaurants, activities, and more — ready to drop into any itinerary.</p>
            </div>
            <button className="ky-btn-coral"><Plus size={16} /> Add Item</button>
          </div>

          {/* Search */}
          <div className="ky-search-bar">
            <Search size={18} color="#a1a1aa" />
            <input className="ky-search-input" placeholder="Search hotels, restaurants, activities..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          {/* Filters */}
          <div className="ky-filters">
            {categories.map(f => (
              <button key={f} className={`ky-filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          {/* Library Grid */}
          <div className="ky-lib-grid">
            {filteredItems.map((item, i) => {
              const TypeIcon = typeIcons[item.type] || Camera;
              return (
                <div key={item.id} className="ky-lib-card" style={{ animation: `fadeUp 0.4s ease-out ${i * 0.06}s both` }}>
                  <div className="ky-lib-img">
                    <img src={item.image} alt={item.name} />
                    <span className="ky-lib-type" style={{ background: item.color }}>{item.type}</span>
                    <span className="ky-lib-rating"><Star size={12} fill="#f59e0b" color="#f59e0b" /> {item.rating}</span>
                  </div>
                  <div className="ky-lib-body">
                    <div className="ky-lib-name">{item.name}</div>
                    <div className="ky-lib-loc"><MapPin size={12} /> {item.location}</div>
                    <div className="ky-lib-tags">
                      {item.tags.map((tag, j) => <span key={j} className="ky-lib-tag">{tag}</span>)}
                    </div>
                    <div className="ky-lib-footer">
                      <span className="ky-lib-price">{item.price}</span>
                      <div className="ky-lib-actions">
                        <button className="ky-lib-action"><Bookmark size={14} color="#71717a" /></button>
                        <button className="ky-lib-action"><Share2 size={14} color="#71717a" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </>
  );
}

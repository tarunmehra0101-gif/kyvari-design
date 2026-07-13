"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home, FileText, Search, BarChart3, Settings, Bell, ChevronLeft, ChevronRight,
  Send, Eye, TrendingUp, Clock, Mail, CheckCircle, Plus, Users, Calendar,
  DollarSign, Sparkles, MapPin, Star, Plane, Hotel, Mountain, ArrowRight,
  Play, Heart, MessageSquare, ExternalLink
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
        <linearGradient id="kyGradDash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradDash)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Data ─── */
const stats = [
  { label: "Trips Sent", value: "38", change: "+15%", up: true, icon: Send, color: "#3b82f6" },
  { label: "Client Views", value: "2.4k", change: "+8%", up: true, icon: Eye, color: "#8b5cf6" },
  { label: "Booking Rate", value: "84%", change: "+4%", up: false, icon: TrendingUp, color: "#22c55e" },
  { label: "Avg Response", value: "2.1h", change: "-12%", up: true, icon: Clock, color: "#f59e0b" },
];

const recentTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=600&q=80",
    title: "Bhutanese Bliss",
    client: "Meera & Arjun",
    destination: "Paro, Bhutan",
    dates: "20-22 Jul",
    status: "Active",
    statusColor: "#22c55e",
    price: "$1,850",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #ff9a56, #ff6b6b)"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    title: "Bali Wellness Retreat",
    client: "The Kapoors",
    destination: "Ubud, Bali",
    dates: "15-22 Aug",
    status: "Sent",
    statusColor: "#f59e0b",
    price: "$2,400",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #14b8a6, #22d3ee)"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    title: "Maldives Escape",
    client: "Honeymoon",
    destination: "Male, Maldives",
    dates: "1-7 Sep",
    status: "Draft",
    statusColor: "#71717a",
    price: "$4,200",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)"
  },
];

const activities = [
  { icon: Mail, text: "Rohan & Ananya viewed Santorini proposal", time: "12m ago", color: "#3b82f6" },
  { icon: CheckCircle, text: "Kapoor family confirmed booking - $4,720", time: "3h ago", color: "#22c55e" },
  { icon: Eye, text: "Priya Nair opened Rajasthan itinerary", time: "5h ago", color: "#f59e0b" },
  { icon: MessageSquare, text: "Arjun Mehta requested revision on Alps trip", time: "Yesterday", color: "#8b5cf6" },
];

const quickActions = [
  { label: "New Trip", icon: Plus, color: "#e8543f", href: "/detail2" },
  { label: "Templates", icon: FileText, color: "#8b5cf6", href: "/trips2" },
  { label: "Analytics", icon: BarChart3, color: "#0ea5e9", href: "/analytics2" },
  { label: "Clients", icon: Users, color: "#22c55e", href: "/library2" },
];

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

/* ─── Main Dashboard ─── */
export default function KyvariDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = FONT_CSS;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .ky-dashboard { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-dashboard * { box-sizing: border-box; }
      `}</style>
      <div className="ky-dashboard">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside style={{
          width: sidebarCollapsed ? "72px" : "260px",
          minHeight: "100vh",
          background: "#fff",
          borderRight: "1px solid #ececee",
          padding: "20px",
          display: "flex", flexDirection: "column",
          position: "fixed", left: 0, top: 0, bottom: 0,
          transition: "width 0.3s", zIndex: 100,
          boxShadow: "4px 0 20px rgba(0,0,0,0.03)"
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <KyvariLogo size={40} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>

          {/* Toggle */}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
            position: "absolute", right: "-12px", top: "80px",
            width: "24px", height: "24px", borderRadius: "50%",
            background: "#fff", border: "1px solid #ececee",
            color: "#71717a", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 101,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          {/* Navigation */}
          <nav style={{ flex: 1 }}>
            <div style={{ marginBottom: "8px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "8px", paddingLeft: "16px" }}>MENU</div>}
              <NavItem icon={Home} label="Dashboard" href="/dashboard" active />
              <NavItem icon={FileText} label="Trips" href="/trips2" />
              <NavItem icon={Search} label="Library" href="/library2" />
              <NavItem icon={BarChart3} label="Analytics" href="/analytics2" />
            </div>
            <div style={{ marginTop: "24px" }}>
              {!sidebarCollapsed && <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "8px", paddingLeft: "16px" }}>ACCOUNT</div>}
              <NavItem icon={Settings} label="Settings" href="/settings2" />
            </div>
          </nav>

          {/* User */}
          <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>WL</div>
              {!sidebarCollapsed && (
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div>
                  <div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", padding: "32px", background: "#f8f8fa", minHeight: "100vh" }}>

          {/* Welcome & Quick Actions */}
          <div style={{ marginBottom: "32px", animation: "fadeUp 0.4s ease-out" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", color: "#09090b" }}>Good morning, Wanderlust <span style={{ fontSize: "28px" }}>👋</span></h1>
            <p style={{ color: "#71717a", fontSize: "15px" }}>You have 3 itineraries pending and 2 new client responses.</p>
          </div>

          {/* Quick Actions */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }}>
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <Link key={i} href={action.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    padding: "20px", borderRadius: "20px",
                    background: "#fff",
                    border: "1px solid #ececee",
                    display: "flex", alignItems: "center", gap: "14px",
                    cursor: "pointer", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                  }} className="ky-action-card">
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${action.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color={action.color} />
                    </div>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#09090b" }}>{action.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} style={{
                  padding: "24px", borderRadius: "24px",
                  background: "#fff",
                  border: "1px solid #ececee",
                  animation: `fadeUp 0.4s ease-out ${i * 0.1}s both`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: `${stat.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} color={stat.color} />
                    </div>
                    <span style={{
                      padding: "6px 12px", borderRadius: "100px",
                      fontSize: "12px", fontWeight: 600,
                      background: stat.up ? "#dcfce7" : "#fef2f2",
                      color: stat.up ? "#16a34a" : "#dc2626"
                    }}>
                      {stat.up ? "↑" : "↓"} {stat.change}
                    </span>
                  </div>
                  <div style={{ fontSize: "36px", fontWeight: 800, marginBottom: "4px", color: "#09090b" }}>{stat.value}</div>
                  <div style={{ fontSize: "14px", color: "#71717a" }}>{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Content Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "24px" }}>
            {/* Recent Trips */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#09090b" }}>Recent Itineraries</h2>
                <Link href="/trips2" style={{ color: "#e8543f", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {recentTrips.map((trip) => (
                  <Link href="/detail2" key={trip.id} style={{ textDecoration: "none" }}>
                    <div style={{
                      display: "flex", gap: "20px", padding: "20px",
                      background: "#fff",
                      border: "1px solid #ececee",
                      borderRadius: "24px", cursor: "pointer", transition: "all 0.3s",
                      position: "relative", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                    }} className="ky-trip-card">
                      {/* Background gradient */}
                      <div style={{
                        position: "absolute", top: 0, right: 0, width: "200px", height: "200px",
                        background: trip.gradient, opacity: 0.08,
                        borderRadius: "0 24px 0 200px"
                      }} />

                      <div style={{ width: "140px", height: "100px", borderRadius: "16px", overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1 }}>
                        <img src={trip.image} alt={trip.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>

                      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#09090b" }}>{trip.title}</h3>
                          <span style={{
                            padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600,
                            background: `${trip.statusColor}15`, color: trip.statusColor
                          }}>{trip.status}</span>
                        </div>
                        <div style={{ fontSize: "14px", color: "#71717a", marginBottom: "10px" }}>
                          {trip.client} • {trip.destination}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "13px", color: "#a1a1aa" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} />{trip.dates}</span>
                          <span style={{ color: "#f59e0b" }}>★ {trip.rating}</span>
                          <span style={{ color: "#16a34a", fontWeight: 600 }}>{trip.price}</span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
                        <ArrowRight size={20} style={{ color: "#d4d4d8" }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div style={{
              background: "#fff",
              border: "1px solid #ececee",
              borderRadius: "24px", padding: "24px", height: "fit-content", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#09090b" }}>Live Activity</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {activities.map((activity, i) => {
                  const Icon = activity.icon;
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "14px",
                      padding: "14px", borderRadius: "14px",
                      background: "#fafafa",
                      transition: "all 0.2s"
                    }} className="ky-activity-item">
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "12px",
                        background: `${activity.color}15`, display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0
                      }}>
                        <Icon size={18} color={activity.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", marginBottom: "2px", color: "#09090b" }}>{activity.text}</div>
                        <div style={{ fontSize: "12px", color: "#a1a1aa" }}>{activity.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI Prompt Card */}
              <div style={{
                marginTop: "24px", padding: "24px",
                background: "linear-gradient(135deg, #fff5f3 0%, #fef7f5 100%)",
                border: "1px solid #fde8e3", borderRadius: "20px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <Sparkles size={20} color="#e8543f" />
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#09090b" }}>AI Assistant</span>
                </div>
                <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "16px", lineHeight: 1.6 }}>
                  Need help creating an itinerary? Describe your client's dream trip.
                </p>
                <Link href="/detail2" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "14px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #ff8a5c, #e8543f)",
                  color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 600, boxShadow: "0 4px 12px rgba(232,84,63,0.3)"
                }}>
                  <Sparkles size={16} /> Start Planning
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        .ky-action-card:hover {
          background: rgba(255,255,255,0.06) !important;
          transform: translateY(-2px);
        }
        .ky-trip-card:hover {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.15);
        }
        .ky-activity-item:hover {
          background: rgba(255,255,255,0.05) !important;
        }
        @media (max-width: 1024px) {
          main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

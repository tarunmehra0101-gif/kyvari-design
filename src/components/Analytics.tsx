import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Analytics() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState('30 days');

  const engagementData = [
    { name: '27 May', views: 42, sessions: 25 },
    { name: '3 Jun', views: 50, sessions: 30 },
    { name: '10 Jun', views: 48, sessions: 32 },
    { name: '17 Jun', views: 65, sessions: 40 },
    { name: '24 Jun', views: 72, sessions: 52 },
    { name: '1 Jul', views: 90, sessions: 62 },
  ];

  const funnelData = [
    { label: 'Sent', value: 38, percent: '100%', color: '#a4d673' },
    { label: 'Opened', value: 32, percent: '84%', color: '#a4d673' },
    { label: 'Engaged 3+ min', value: 21, percent: '55%', color: '#a4d673' },
    { label: 'Booked', value: 12, percent: '32%', color: '#608c35' },
  ];

  const destinationData = [
    { name: 'Santorini', value: 26000, width: '92%' },
    { name: 'Bali', value: 21000, width: '75%' },
    { name: 'Rajasthan', value: 15000, width: '55%' },
    { name: 'Swiss Alps', value: 13000, width: '48%' },
    { name: 'Kyoto', value: 10000, width: '38%' },
  ];

  const clientActivity = [
    { initials: 'RA', name: 'Rohan & Ananya Sharma', action: 'viewed Santorini, Slowly for 9 min', time: '12 MIN AGO' },
    { initials: 'AM', name: 'Arjun Mehta', action: 'shared Alps on Rails with 2 people', time: '1 H AGO' },
    { initials: 'TF', name: 'The Fernandes family', action: 'confirmed booking · $4,720 total', time: '3 H AGO' },
    { initials: 'KF', name: 'Kapoor family reunion', action: 'opened Forts & Thali Trails', time: 'YESTERDAY' },
    { initials: 'PN', name: 'Priya Nair', action: 'requested dates in late November', time: 'YESTERDAY' },
  ];

  const topItineraries = [
    { title: "Santorini, Slowly", client: "R. & A. Sharma", views: 14, time: "6m 12s", status: "Viewed", statusColor: "#f59e0b" },
    { title: "Bali, Barefoot", client: "Fernandes family", views: 22, time: "8m 24s", status: "Booked", statusColor: "#10b981" },
    { title: "Alps on Rails", client: "Arjun Mehta +2", views: 9, time: "5m 36s", status: "Viewed", statusColor: "#f59e0b" },
    { title: "Forts & Thali Trails", client: "Kapoor reunion", views: 6, time: "3m 06s", status: "Sent", statusColor: "#6b7280" },
  ];

  const kpis = [
    { label: "Itineraries sent", value: "38", subValue: "15%", subText: "compared to last week", isUp: true, sparkline: [10, 15, 12, 22, 18, 38], color: "#8b5cf6" },
    { label: "Client view rate", value: "84%", subValue: "4%", subText: "compared to last week", isUp: false, sparkline: [90, 85, 88, 80, 82, 84], color: "#f97316" },
    { label: "Avg. dwell time", value: "5m 42s", subValue: "8%", subText: "compared to last week", isUp: true, sparkline: [3, 4, 3.5, 5, 4.5, 5.7], color: "#8b5cf6" },
  ];

  return (
    <div style={{ padding: "34px 40px", maxWidth: "1420px", margin: "0 auto", animation: "fadeUp .4s ease-out both" }}>
      
      {/* SVG Defs for Metallic Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="metal-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="metal-green-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <linearGradient id="metal-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="spark-purple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="spark-orange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      {/* Analytics Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "26px", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "42px", letterSpacing: "-.02em", margin: 0, color: "#1d1f24" }}>Analytics</h1>
          <div style={{ color: "#6f6d64", fontSize: "15px", fontWeight: 500, marginTop: "8px" }}>How clients are engaging with your itineraries.</div>
        </div>
        <div style={{ display: "flex", background: "#fff", border: "1px solid #eeece5", borderRadius: "99px", padding: "4px", gap: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          {['7 days', '30 days', '90 days', 'This year'].map(range => (
            <span
              key={range}
              onClick={() => setTimeRange(range)}
              style={{ 
                padding: "8px 16px", 
                borderRadius: "99px", 
                background: timeRange === range ? "#1d1f24" : "transparent", 
                color: timeRange === range ? "#fff" : "#6f6d64", 
                fontSize: "13px", 
                fontWeight: 600, 
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {range}
            </span>
          ))}
        </div>
      </div>

      {/* KPI Cards Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0", marginBottom: "32px", background: "#fff", border: "1px solid #eeece5", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
        {kpis.map((kpi, idx) => (
          <div key={idx} style={{ padding: "24px", borderRight: idx !== kpis.length - 1 ? "1px solid #eeece5" : "none", display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", color: "#1d1f24", fontWeight: 600, marginBottom: "16px" }}>{kpi.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontWeight: 700, fontSize: "24px", color: "#1d1f24" }}>{kpi.value}</div>
                <div style={{ display: "inline-flex", alignItems: "center", fontSize: "12px", fontWeight: 700, color: kpi.isUp ? "#16a34a" : "#ea580c", background: kpi.isUp ? "#dcfce7" : "#ffedd5", padding: "2px 6px", borderRadius: "4px" }}>
                  {kpi.isUp ? "↑" : "↓"} {kpi.subValue}
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#a09d92", fontWeight: 500 }}>{kpi.subText}</div>
            </div>
            
            {/* Sparkline Chart */}
            <div style={{ width: "100px", height: "60px", alignSelf: "flex-end" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={kpi.sparkline.map((v, i) => ({ value: v, index: i }))}>
                  <defs>
                    <linearGradient id={`fill-${idx}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={kpi.color} stopOpacity={0.2}/>
                      <stop offset="100%" stopColor={kpi.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke={kpi.color} strokeWidth={2} fill={`url(#fill-${idx})`} isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "24px" }} className="lg:grid-cols-3">
        
        {/* Engagement Rounded Bar Chart */}
        <div className="lg:col-span-2" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", color: "#1d1f24", margin: "0 0 16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
            Statistic
          </h2>
          <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#6f6d64" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a4d673" }}></span> Views
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#6f6d64" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#608c35" }}></span> Peak sessions
            </div>
          </div>
          
          <div style={{ height: "260px", width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={4} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f2ec" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#8b8b8b', fontSize: 13, fontWeight: 500 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8b8b8b', fontSize: 13, fontWeight: 500 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: "12px", border: "1px solid #eeece5", boxShadow: "0 8px 24px rgba(0,0,0,.08)", padding: "12px" }}
                  itemStyle={{ fontSize: "13px", fontWeight: 600 }}
                  cursor={{ fill: '#f8f7f4' }}
                />
                <Bar dataKey="views" radius={[20, 20, 20, 20]}>
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#608c35' : '#a4d673'} />
                  ))}
                </Bar>
                <Bar dataKey="sessions" radius={[20, 20, 20, 20]}>
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#4a6d29' : '#88c54c'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", color: "#1d1f24", margin: "0 0 8px" }}>Conversion funnel</h2>
          <div style={{ fontSize: "13px", color: "#a09d92", fontWeight: 500, marginBottom: "32px" }}>Last 30 days, 38 sent</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {funnelData.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", fontWeight: 600, color: "#1d1f24" }}>
                  <span>{item.label}</span>
                  <span>{item.value} <span style={{ color: "#a09d92", fontWeight: 500, marginLeft: "4px" }}>· {item.percent}</span></span>
                </div>
                <div style={{ height: "12px", background: "#f4f2ec", borderRadius: "99px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: item.percent, background: item.color, borderRadius: "99px" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "24px" }} className="lg:grid-cols-3">
        
        {/* Revenue by destination */}
        <div className="lg:col-span-2" style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", color: "#1d1f24", margin: "0 0 8px" }}>Revenue by destination</h2>
          <div style={{ fontSize: "13px", color: "#a09d92", fontWeight: 500, marginBottom: "32px" }}>Confirmed bookings this quarter</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
            {destinationData.map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "100px", fontSize: "13px", fontWeight: 500, color: "#6f6d64", textAlign: "right", paddingRight: "16px" }}>{item.name}</div>
                <div style={{ flex: 1, position: "relative", height: "16px", borderLeft: "1px solid #eeece5", paddingLeft: "16px" }}>
                   <div style={{ width: item.width, height: "100%", background: "url(#metal-green)", borderRadius: "2px" }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ display: "flex", borderTop: "1px solid #eeece5", paddingTop: "12px", paddingLeft: "116px", color: "#a09d92", fontSize: "12px", fontWeight: 500 }}>
            <div style={{ flex: 1 }}>$0k</div>
            <div style={{ flex: 1, textAlign: "center" }}>$7k</div>
            <div style={{ flex: 1, textAlign: "center" }}>$14k</div>
            <div style={{ flex: 1, textAlign: "center" }}>$21k</div>
            <div style={{ flex: 1, textAlign: "right" }}>$28k</div>
          </div>
          
          <div style={{ marginTop: "16px", fontSize: "13px", fontWeight: 600, color: "#a09d92", cursor: "pointer", display: "inline-flex", alignItems: "center" }} className="hover:text-[#1d1f24]">
            ▶ View as table
          </div>
        </div>

        {/* Client Activity */}
        <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", color: "#1d1f24", margin: "0 0 24px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ display: "inline-flex", color: "#d97746" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c-3.968-3-4.98-6-3-9-2.5 2-4 5-3 9s1.5 5 3.5 2.5z"/><path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z"/></svg>
            </span>
            Client activity
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {clientActivity.map((activity, idx) => (
              <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#f4f2ec", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#6f6d64", flexShrink: 0 }}>
                  {activity.initials}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1d1f24", marginBottom: "2px" }}>{activity.name}</div>
                  <div style={{ fontSize: "13px", color: "#6f6d64", marginBottom: "6px" }}>{activity.action}</div>
                  <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.05em", color: "#d97746", textTransform: "uppercase" }}>{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Itineraries Table */}
      <div style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 12px rgba(84,62,40,.03)" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "22px", color: "#1d1f24", margin: "0 0 24px" }}>
          Top itineraries
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "750px", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eeece5" }}>
                <th style={{ paddingBottom: "12px", fontSize: "11px", fontWeight: 700, color: "#a09d92", textTransform: "uppercase", letterSpacing: ".05em" }}>Itinerary</th>
                <th style={{ paddingBottom: "12px", fontSize: "11px", fontWeight: 700, color: "#a09d92", textTransform: "uppercase", letterSpacing: ".05em" }}>Client</th>
                <th style={{ paddingBottom: "12px", fontSize: "11px", fontWeight: 700, color: "#a09d92", textTransform: "uppercase", letterSpacing: ".05em" }}>Views</th>
                <th style={{ paddingBottom: "12px", fontSize: "11px", fontWeight: 700, color: "#a09d92", textTransform: "uppercase", letterSpacing: ".05em" }}>Avg. Dwell</th>
                <th style={{ paddingBottom: "12px", fontSize: "11px", fontWeight: 700, color: "#a09d92", textTransform: "uppercase", letterSpacing: ".05em" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {topItineraries.map((item, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-[#faf9f6] transition-colors cursor-pointer"
                  style={{ borderBottom: "1px solid #f4f2ec" }}
                >
                  <td style={{ padding: "16px 0", fontSize: "14px", fontWeight: 700, color: "#1d1f24" }}>{item.title}</td>
                  <td style={{ padding: "16px 0", fontSize: "14px", color: "#6f6d64" }}>{item.client}</td>
                  <td style={{ padding: "16px 0", fontSize: "14px", fontWeight: 600, color: "#1d1f24" }}>{item.views}</td>
                  <td style={{ padding: "16px 0", fontSize: "14px", color: "#6f6d64" }}>{item.time}</td>
                  <td style={{ padding: "16px 0" }}>
                    <span style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "6px", 
                      padding: "4px 12px", 
                      borderRadius: "99px", 
                      fontSize: "12px", 
                      fontWeight: 600,
                      border: "1px solid #eeece5",
                      color: "#6f6d64"
                    }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.statusColor }}></span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

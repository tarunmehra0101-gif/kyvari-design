import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, PieChart, Pie, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity, Users, Clock, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export function Analytics({ setView }: { setView: (v: string) => void }) {
  const [timeRange, setTimeRange] = useState('30D');

  const engagementData = [
    { name: 'Mon', views: 400, interactions: 240, shares: 120 },
    { name: 'Tue', views: 300, interactions: 139, shares: 80 },
    { name: 'Wed', views: 550, interactions: 380, shares: 190 },
    { name: 'Thu', views: 420, interactions: 290, shares: 140 },
    { name: 'Fri', views: 700, interactions: 480, shares: 250 },
    { name: 'Sat', views: 600, interactions: 390, shares: 210 },
    { name: 'Sun', views: 800, interactions: 520, shares: 280 },
  ];

  const destinationData = [
    { name: 'Japan', clients: 85, color: '#ec4899' },
    { name: 'Italy', clients: 60, color: '#0ea5e9' },
    { name: 'Thailand', clients: 45, color: '#f59e0b' },
    { name: 'Maldives', clients: 25, color: '#8b5cf6' },
  ];

  const itineraryStats = [
    { title: "Bhutanese Bliss: A Himalayan Adventure", client: "Meera & Arjun", sent: "Jul 12", opens: 14, time: "8m 45s", status: "Booked", revenue: "$8,400" },
    { title: "Hanoi's Romantic Charms", client: "The Kapoors", sent: "Jul 14", opens: 8, time: "5m 20s", status: "Reviewing", revenue: "-" },
    { title: "Bangkok Bazaar: A Luxury Shopping Spree", client: "Ritu S.", sent: "Jul 15", opens: 22, time: "12m 10s", status: "Booked", revenue: "$4,250" },
    { title: "Azure Escapes: Lakshadweep Retreat", client: "Honeymoon", sent: "Jul 18", opens: 3, time: "1m 40s", status: "Sent", revenue: "-" },
    { title: "Kuala Lumpur Skyline & Street Food", client: "Solo · Dev", sent: "Jul 20", opens: 6, time: "4m 15s", status: "Booked", revenue: "$1,800" },
  ];

  
  const kpis = [
    { label: "Total Views", value: "2,543", change: "+12.5%", isUp: true, color: "text-pink-500", bg: "#fdf2f8", shadow: "rgba(236,72,153,0.15)", svg: (
      <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "floatClay 5s ease-in-out infinite 0s", filter: "drop-shadow(0 4px 6px rgba(236,72,153,0.35))"}}>
        <defs>
          <radialGradient id="eyePink" cx="0.4" cy="0.4" r="0.5">
            <stop offset="0" stopColor="#f472b6" />
            <stop offset="1" stopColor="#be185d" />
          </radialGradient>
          <radialGradient id="eyeWhite" cx="0.4" cy="0.4" r="0.5">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#fbcfe8" />
          </radialGradient>
        </defs>
        <path d="M 2 16 C 8 8, 24 8, 30 16 C 24 24, 8 24, 2 16 Z" fill="url(#eyeWhite)" />
        <circle cx="16" cy="16" r="7" fill="url(#eyePink)" />
        <circle cx="15" cy="14" r="2.5" fill="#ffffff" />
        <circle cx="17.5" cy="17" r="1" fill="#ffffff" opacity="0.8" />
      </svg>
    )},
    { label: "Client Bookings", value: "32", change: "+4.1%", isUp: true, color: "text-blue-500", bg: "#eff6ff", shadow: "rgba(59,130,246,0.15)", svg: (
      <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "floatClay 5s ease-in-out infinite 0.5s", filter: "drop-shadow(0 4px 6px rgba(59,130,246,0.35))"}}>
        <defs>
          <linearGradient id="userBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="userHead" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#bfdbfe" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="10" r="7" fill="url(#userHead)" />
        <path d="M 4 30 C 4 20, 10 18, 16 18 C 22 18, 28 20, 28 30 Z" fill="url(#userBlue)" />
      </svg>
    )},
    { label: "Avg. Dwell Time", value: "4m 12s", change: "-2.4%", isUp: false, color: "text-amber-500", bg: "#fffbeb", shadow: "rgba(245,158,11,0.15)", svg: (
      <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "floatClay 5s ease-in-out infinite 1s", filter: "drop-shadow(0 4px 6px rgba(245,158,11,0.35))"}}>
        <defs>
          <linearGradient id="hgGlassA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fef3c7" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fcd34d" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hgSandA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="hgWoodA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#78350f" />
            <stop offset="1" stopColor="#451a03" />
          </linearGradient>
        </defs>
        <path d="M 8 6 L 24 6 L 19 16 L 24 26 L 8 26 L 13 16 Z" fill="url(#hgGlassA)" />
        <path d="M 11 20 L 21 20 L 24 25 L 8 25 Z" fill="url(#hgSandA)" />
        <path d="M 11 11 L 21 11 L 19 16 L 13 16 Z" fill="url(#hgSandA)" />
        <rect x="6" y="2" width="20" height="4" rx="2" fill="url(#hgWoodA)" />
        <rect x="6" y="26" width="20" height="4" rx="2" fill="url(#hgWoodA)" />
      </svg>
    )},
    { label: "Revenue Generated", value: "$42,500", change: "+24.8%", isUp: true, color: "text-emerald-500", bg: "#ecfdf5", shadow: "rgba(16,185,129,0.15)", svg: (
      <svg width="26" height="26" viewBox="0 0 32 32" style={{animation: "floatClay 5s ease-in-out infinite 1.5s", filter: "drop-shadow(0 4px 6px rgba(16,185,129,0.35))"}}>
        <defs>
          <linearGradient id="coinGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6ee7b7" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="coinInner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a7f3d0" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="14" fill="url(#coinGold)" />
        <circle cx="16" cy="16" r="10" fill="url(#coinInner)" />
        <path d="M16 9 L16 23 M13 12 L18 12 M13 19 L18 19 M13 12 Q 18 12 18 15.5 T 13 19" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  ];


  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto w-full animate-[fadeUp_0.4s_ease-out]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-medium text-slate-900 mb-2" style={{fontFamily:"'Playfair Display', serif"}}>Analytics Overview</h1>
          <p className="text-sm text-slate-500">Track client engagement and booking conversions over time.</p>
        </div>
        <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          {['7D', '30D', '90D', '1Y'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
                timeRange === range 
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{background: kpi.bg, boxShadow: `inset 2px 4px 6px rgba(255,255,255,0.8), inset -2px -4px 6px ${kpi.shadow}, 0 8px 12px ${kpi.shadow}`}}>
                {kpi.svg}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{kpi.value}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${kpi.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {kpi.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {kpi.change}
              </div>
              <span className="text-xs text-slate-400">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-medium text-slate-900 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-pink-200 animate-ping opacity-20"></div>
                <Activity className="w-5 h-5 text-pink-500 animate-[bounce_3s_infinite]" />
              </div>
              Engagement & Interactions
            </h2>
            <button className="text-sm font-medium text-slate-500 flex items-center gap-2 hover:text-slate-900 transition-colors">
              <Calendar className="w-4 h-4" />
              Detailed Report
            </button>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12, fontWeight:500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12, fontWeight:500}} />
                <Tooltip 
                  contentStyle={{borderRadius:"16px",border:"1px solid #f1f5f9",boxShadow:"0 10px 30px rgba(0,0,0,0.08)",padding:"16px",background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"}}
                  itemStyle={{fontSize:"14px",fontWeight:600,padding:"4px 0"}}
                  labelStyle={{fontSize:"13px",color:"#64748b",marginBottom:"8px",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em"}}
                />
                <Legend iconType="circle" wrapperStyle={{fontSize:"13px", fontWeight:500, color:"#475569", paddingTop:"12px"}} />
                <Area type="monotone" dataKey="views" name="Total Views" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" activeDot={{r: 6, strokeWidth: 0, fill: '#ec4899'}} />
                <Area type="monotone" dataKey="interactions" name="Link Clicks" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorInts)" activeDot={{r: 6, strokeWidth: 0, fill: '#0ea5e9'}} />
                <Area type="monotone" dataKey="shares" name="Shares" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorShares)" activeDot={{r: 6, strokeWidth: 0, fill: '#8b5cf6'}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl font-medium text-slate-900 mb-8 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
             <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{background: "#fdf2f8", boxShadow: "inset 2px 4px 6px rgba(255,255,255,0.8), inset -2px -4px 6px rgba(236,72,153,0.15), 0 4px 10px rgba(236,72,153,0.15)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" style={{animation: "floatClay 4.5s ease-in-out infinite 0.5s"}}>
                  <defs>
                    <linearGradient id="destGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f472b6" />
                      <stop offset="1" stopColor="#be185d" />
                    </linearGradient>
                  </defs>
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="url(#destGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="3" stroke="url(#destGrad)" strokeWidth="2.5" fill="none"/>
                </svg>
              </div>
            Top Destinations
          </h2>
          <div className="h-48 w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={destinationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={6}
                  dataKey="clients"
                  stroke="none"
                  cornerRadius={4}
                >
                  {destinationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{borderRadius:"12px",border:"none",boxShadow:"0 8px 24px rgba(20,24,58,.12)"}}
                  itemStyle={{fontSize:"13px",fontWeight:500}}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-4">
            {destinationData.map((d,i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full shadow-sm" style={{background: d.color}}></span>
                  <span className="text-sm text-slate-600 font-medium">{d.name}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{d.clients} <span className="text-slate-400 font-normal">bookings</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10 overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-medium text-slate-900 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{background: "#fffbeb", boxShadow: "inset 2px 4px 6px rgba(255,255,255,0.8), inset -2px -4px 6px rgba(245,158,11,0.15), 0 4px 10px rgba(245,158,11,0.15)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" style={{animation: "floatClay 5s ease-in-out infinite 1s"}}>
                  <defs>
                    <linearGradient id="recGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fbbf24" />
                      <stop offset="1" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M16 17H8" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M10 9H8" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            Recent Itineraries Performance
          </h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg">
            <TrendingUp className="w-4 h-4" />
            View All Reports
          </button>
        </div>
        
        <div className="overflow-x-auto -mx-8 px-8">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Itinerary</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Client</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Sent On</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Opens</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Time Spent</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider">Revenue</th>
                <th className="pb-4 font-semibold text-xs text-slate-500 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {itineraryStats.map((itinerary, i) => (
                <tr key={i} onClick={() => setView('detail')} className="group border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-pointer last:border-0">
                  <td className="py-5 font-medium text-slate-900 text-sm max-w-[250px] truncate pr-4 group-hover:text-indigo-600 transition-colors">
                    {itinerary.title}
                  </td>
                  <td className="py-5 text-slate-500 text-sm">{itinerary.client}</td>
                  <td className="py-5 text-slate-500 text-sm">{itinerary.sent}</td>
                  <td className="py-5 text-slate-900 text-sm font-semibold">{itinerary.opens}</td>
                  <td className="py-5 text-slate-500 text-sm">{itinerary.time}</td>
                  <td className="py-5 text-emerald-600 text-sm font-semibold">{itinerary.revenue}</td>
                  <td className="py-5 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      itinerary.status === 'Booked' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 
                      itinerary.status === 'Reviewing' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 
                      'bg-indigo-50 text-indigo-700 border border-indigo-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${itinerary.status === 'Booked' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : itinerary.status === 'Reviewing' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse' : 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-pulse'}`}></span>
                      {itinerary.status}
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

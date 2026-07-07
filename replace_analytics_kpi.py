import re

with open('src/components/Analytics.tsx', 'r') as f:
    content = f.read()

# Replace the kpis array to include svg strings
kpi_replacement = """
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
"""

content = re.sub(r'const kpis = \[.*?\];', kpi_replacement, content, flags=re.DOTALL)

# Now update how they are rendered
render_old = r'<div className={`w-12 h-12 rounded-xl flex items-center justify-center \$\{kpi\.bg\}`}>\s*<kpi\.icon className={`w-6 h-6 \$\{kpi\.color\}`} \/>\s*<\/div>'
render_new = """<div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{background: kpi.bg, boxShadow: `inset 2px 4px 6px rgba(255,255,255,0.8), inset -2px -4px 6px ${kpi.shadow}, 0 8px 12px ${kpi.shadow}`}}>
                {kpi.svg}
              </div>"""

content = re.sub(render_old, render_new, content, flags=re.DOTALL)

with open('src/components/Analytics.tsx', 'w') as f:
    f.write(content)

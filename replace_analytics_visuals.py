import re

with open('src/components/Analytics.tsx', 'r') as f:
    content = f.read()

# Replace Engagement Header
engagement_old = r'<h2 className="text-xl font-medium text-slate-900" style={{fontFamily:"\'Playfair Display\', serif"}}>Engagement & Interactions</h2>'
engagement_new = """<h2 className="text-xl font-medium text-slate-900 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-pink-200 animate-ping opacity-20"></div>
                <Activity className="w-5 h-5 text-pink-500 animate-[bounce_3s_infinite]" />
              </div>
              Engagement & Interactions
            </h2>"""
content = re.sub(engagement_old, engagement_new, content)

# Replace Top Destinations Header
destinations_old = r'<h2 className="text-xl font-medium text-slate-900" style={{fontFamily:"\'Playfair Display\', serif"}}>\s*Top Destinations\s*</h2>'
destinations_new = """<h2 className="text-xl font-medium text-slate-900 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
            <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-sky-500 animate-[spin_12s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            Top Destinations
          </h2>"""
content = re.sub(destinations_old, destinations_new, content)


# Replace Recent Itineraries Performance Header
recent_old = r'<h2 className="text-xl font-medium text-slate-900" style={{fontFamily:"\'Playfair Display\', serif"}}>\s*Recent Itineraries Performance\s*</h2>'
recent_new = """<h2 className="text-xl font-medium text-slate-900 flex items-center gap-3" style={{fontFamily:"'Playfair Display', serif"}}>
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-full h-[2px] bg-emerald-400/40 animate-[slideRight_2s_ease-in-out_infinite]" style={{top: '40%'}}></div>
              <div className="absolute w-full h-[2px] bg-emerald-400/40 animate-[slideRight_2s_ease-in-out_infinite_0.5s]" style={{top: '60%'}}></div>
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-emerald-500 z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            Recent Itineraries Performance
          </h2>"""
content = re.sub(recent_old, recent_new, content)

with open('src/components/Analytics.tsx', 'w') as f:
    f.write(content)

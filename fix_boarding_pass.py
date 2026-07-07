import re

with open('src/components/BoardingPass.tsx', 'r') as f:
    content = f.read()

# Replace the plane section with a custom animation
plane_old_regex = r'<span style={{position:"absolute",top:"34px",left:"6%",animation:"bpPlane 7s ease-in-out infinite",display:"block",filter:"drop-shadow\(0 5px 7px rgba\(20,24,58,\.35\)\)"}}>.*?</svg>\s*</span>'

new_plane = r"""{/* Intense, visually beautiful custom plane animation */}
        <span style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none"}}>
          {/* Contrail / Trail */}
          <span style={{position:"absolute", top:"48px", left:"-10%", width:"120%", height:"2px", background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)", filter:"blur(2px)", transform:"rotate(-8deg)", animation:"trailPulse 6s infinite", opacity: 0.6}}></span>
          <span style={{position:"absolute", top:"48px", left:"-10%", width:"120%", height:"1px", background:"linear-gradient(90deg, transparent, #fff, transparent)", transform:"rotate(-8deg)", animation:"trailPulse 6s infinite", opacity: 0.9}}></span>
          
          {/* Plane Container with banking animation */}
          <span style={{position:"absolute", top:"34px", animation:"majesticPlane 8s cubic-bezier(0.4, 0, 0.2, 1) infinite", display:"block", filter:"drop-shadow(0 12px 16px rgba(14,165,233,0.4))", zIndex: 10}}>
            <svg width="60" height="28" viewBox="0 0 52 24">
              <defs>
                <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e0e7ff" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c7d2fe" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <path d="M2 13c10-3 30-4 40-3 4 .4 8 1.6 8 3s-4 2.6-8 3c-10 1-30 0-40-3z" fill="url(#planeGrad)"/>
              <path d="M20 12l8-8 4 .8-6 8z" fill="url(#wingGrad)"/>
              <path d="M22 14l6 7 4-.4-5-7z" fill="url(#wingGrad)"/>
              <circle cx="40" cy="12.4" r="1.5" fill="#4f46e5"/>
              <circle cx="35" cy="12.2" r="1.5" fill="#4f46e5"/>
              <circle cx="30" cy="12" r="1.5" fill="#4f46e5"/>
              <circle cx="25" cy="12" r="1.5" fill="#4f46e5"/>
              {/* Engine glow */}
              <circle cx="24" cy="14" r="2" fill="#38bdf8" opacity="0.8" style={{animation: "engineGlow 0.5s alternate infinite"}} />
            </svg>
          </span>
        </span>"""

content = re.sub(plane_old_regex, new_plane, content, flags=re.DOTALL)

with open('src/components/BoardingPass.tsx', 'w') as f:
    f.write(content)

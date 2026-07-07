import re

with open('src/components/Trips.tsx', 'r') as f:
    content = f.read()

bad_trips_cta = r'<div className="hover:-translate-y-\[2px\] hover:shadow-\[0_14px_28px_rgba\(219,39,119,0\.22\)\] transition-all duration-200" style={{position:"relative",overflow:"hidden",borderRadius:"14px",padding:"12px 20px",background:"linear-gradient\(120deg,#c026d3,#db2777,#9333ea,#c026d3\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",color:"#fff",fontWeight:600,fontSize:"14px",cursor:"pointer",boxShadow:"0 10px 22px rgba\(219,39,119,\.16\)"}}>\s*\+ New Itinerary\s*</div>'

content = re.sub(bad_trips_cta, '', content, flags=re.DOTALL)

with open('src/components/Trips.tsx', 'w') as f:
    f.write(content)

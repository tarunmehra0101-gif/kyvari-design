import re

with open('src/components/PlaceDrawer.tsx', 'r') as f:
    content = f.read()

reserve_regex = r'<span className="hover:-translate-y-\[2px\] hover:shadow-\[0_14px_28px_rgba\(219,39,119,0\.22\)\] transition-all duration-200" style={{position:"relative",overflow:"hidden",borderRadius:"14px",padding:"13px 26px",background:"linear-gradient\(120deg,#c026d3,#db2777,#9333ea,#c026d3\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",color:"#fff",fontWeight:500,fontSize:"14px",cursor:"pointer",boxShadow:"0 10px 24px rgba\(219,39,119,\.16\)"}}>\s*▤ Reserve\s*<span style={{position:"absolute",top:0,bottom:0,width:"36px",background:"linear-gradient\(90deg,transparent,rgba\(255,255,255,\.5\),transparent\)",animation:"shine 3s ease-in-out infinite"}}></span>\s*</span>'

new_reserve = r"""<span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"14px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 10px 24px rgba(17,24,39,.16)",cursor:"pointer"}}><span style={{background:"#1f2937",color:"#fff",borderRadius:"12px",padding:"11px 24px",fontSize:"14px",fontWeight:500,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>▤ Reserve<span style={{position:"absolute",top:0,bottom:0,width:"36px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)",animation:"shine 3.6s ease-in-out infinite"}}></span></span></span>"""

content = re.sub(reserve_regex, new_reserve, content, flags=re.DOTALL)

with open('src/components/PlaceDrawer.tsx', 'w') as f:
    f.write(content)


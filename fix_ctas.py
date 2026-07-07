import re

with open('src/components/Detail.tsx', 'r') as f:
    content = f.read()

# Replace Send button
send_btn_regex = r'<span className="hover:-translate-y-\[2px\] hover:shadow-\[0_12px_24px_rgba\(49,46,129,0\.25\)\] transition-all duration-200" style={{position:"relative",overflow:"hidden",borderRadius:"12px",padding:"10px 18px",background:"linear-gradient\(120deg,rgba\(14,165,233,1\),rgba\(49,46,129,1\),rgba\(99,102,241,1\),rgba\(14,165,233,1\)\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",color:"#fff",fontSize:"12\.5px",fontWeight:500,cursor:"pointer",boxShadow:"0 8px 18px rgba\(49,46,129,\.18\)"}}>➤ Send</span>'

new_send_btn = r"""<span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 8px 18px rgba(17,24,39,.18)",cursor:"pointer"}}><span style={{background:"#1f2937",color:"#fff",borderRadius:"10px",padding:"8px 16px",fontSize:"12.5px",fontWeight:500,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>➤ Send</span></span>"""

content = re.sub(send_btn_regex, new_send_btn, content, flags=re.DOTALL)

with open('src/components/Detail.tsx', 'w') as f:
    f.write(content)


with open('src/components/PlaceDrawer.tsx', 'r') as f:
    content = f.read()

# Replace Reserve button
reserve_btn_regex = r'<span className="hover:-translate-y-\[2px\] hover:shadow-\[0_14px_28px_rgba\(219,39,119,0\.22\)\] transition-all duration-200" style={{position:"relative",overflow:"hidden",borderRadius:"14px",padding:"13px 26px",background:"linear-gradient\(120deg,#c026d3,#db2777,#9333ea,#c026d3\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",color:"#fff",fontWeight:500,fontSize:"14px",cursor:"pointer",boxShadow:"0 10px 24px rgba\(219,39,119,\.16\)"}}>\s*➤ Reserve Spot\s*<span style={{position:"absolute",top:0,bottom:0,width:"36px",background:"linear-gradient\(90deg,transparent,rgba\(255,255,255,\.5\),transparent\)",animation:"shine 3s ease-in-out infinite"}}></span>\s*</span>'

new_reserve_btn = r"""<span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",overflow:"hidden",borderRadius:"14px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",cursor:"pointer",boxShadow:"0 10px 24px rgba(17,24,39,.16)",display:"inline-block"}}><span style={{display:"block",background:"#1f2937",color:"#fff",borderRadius:"12px",padding:"11px 24px",fontSize:"14px",fontWeight:500,position:"relative",overflow:"hidden"}}>➤ Reserve Spot<span style={{position:"absolute",top:0,bottom:0,width:"36px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)",animation:"shine 3.6s ease-in-out infinite"}}></span></span></span>"""

content = re.sub(reserve_btn_regex, new_reserve_btn, content, flags=re.DOTALL)

with open('src/components/PlaceDrawer.tsx', 'w') as f:
    f.write(content)


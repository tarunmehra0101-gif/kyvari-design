import re

with open('src/components/Home.tsx', 'r') as f:
    content = f.read()

# 1. Increase height of the big animated travel scene
scene_old = r'<div style=\{\{position:"relative",height:"190px",borderRadius:"26px"'
scene_new = r'<div style={{position:"relative",height:"280px",borderRadius:"26px"'
content = re.sub(scene_old, scene_new, content)

# 2. Increase text size in the travel scene
text_old = r'<div style=\{\{fontFamily:"\'Playfair Display\', serif",fontWeight:500,fontSize:"30px",letterSpacing:"-\.02em",textShadow:"0 3px 14px rgba\(2,6,23,\.6\)",marginTop:"4px"\}\}>Where to today, Wanderlust\?<\/div>'
text_new = r'<div style={{fontFamily:"\'Playfair Display\', serif",fontWeight:500,fontSize:"42px",letterSpacing:"-.02em",textShadow:"0 3px 14px rgba(2,6,23,.6)",marginTop:"8px"}}>Where to today, Wanderlust?</div>'
content = re.sub(text_old, text_new, content)

date_old = r'<div style=\{\{fontSize:"10\.5px",fontWeight:500,letterSpacing:"\.22em",textShadow:"0 2px 8px rgba\(2,6,23,\.6\)"\}\}>TUESDAY · JULY 7<\/div>'
date_new = r'<div style={{fontSize:"13px",fontWeight:500,letterSpacing:".22em",textShadow:"0 2px 8px rgba(2,6,23,.6)"}}>TUESDAY · JULY 7</div>'
content = re.sub(date_old, date_new, content)

text_box_pos_old = r'<div style=\{\{position:"absolute",left:"24px",bottom:"20px",color:"#fff"\}\}>'
text_box_pos_new = r'<div style={{position:"absolute",left:"32px",bottom:"28px",color:"#fff"}}>'
content = re.sub(text_box_pos_old, text_box_pos_new, content)

# 3. Make AI prompt box bigger
prompt_box_old = r'<div style=\{\{maxWidth:"720px",margin:"22px auto 0",borderRadius:"22px",padding:"1\.5px",background:"linear-gradient\(120deg,rgba\(14,165,233,\.8\),rgba\(49,46,129,\.6\),rgba\(99,102,241,\.7\),rgba\(14,165,233,\.8\)\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 18px 40px rgba\(49,46,129,\.14\)"\}\}>.*?<\/div>\s*<\/div>'
prompt_box_new = """<div style={{maxWidth:"840px",margin:"28px auto 0",borderRadius:"28px",padding:"2px",background:"linear-gradient(120deg,rgba(14,165,233,.8),rgba(49,46,129,.6),rgba(99,102,241,.7),rgba(14,165,233,.8))",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 20px 48px rgba(49,46,129,.18)"}}>
          <div style={{borderRadius:"26px",background:"#fff",display:"flex",alignItems:"center",gap:"16px",padding:"20px 24px"}}>
            <span className="hover:bg-[#e0f2fe] hover:rotate-90 transition-all duration-200" style={{width:"44px",height:"44px",flex:"none",borderRadius:"14px",background:"#f0f9ff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="6.4" y="1.5" width="2.2" height="12" rx="1.1" fill="#0284c7"/><rect x="1.5" y="6.4" width="12" height="2.2" rx="1.1" fill="#0284c7"/></svg>
            </span>
            <span style={{flex:1,color:"#8a90a6",fontSize:"17px"}}>Plan a 7-day honeymoon in Santorini for $5k<span style={{display:"inline-block",width:"2px",height:"22px",background:"#0ea5c9",marginLeft:"3px",verticalAlign:"middle",animation:"caret 1.1s step-end infinite"}}></span></span>
            <span className="hover:border-[#0ea5c9]" style={{width:"44px",height:"44px",flex:"none",borderRadius:"50%",border:"2px solid #f0f9ff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"border-color 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="5.4" y="1" width="4.2" height="8" rx="2.1" fill="#5a6474"/><path d="M3 7.5a4.5 4.5 0 0 0 9 0M7.5 12v2.2" stroke="#5a6474" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </span>
            <span className="hover:scale-110" style={{width:"50px",height:"50px",flex:"none",borderRadius:"50%",background:"linear-gradient(140deg,#1e3a8a,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 8px 24px rgba(30,58,138,.4)",transition:"transform 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><path d="M2 7.5h9M8 3.5l4 4-4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>"""
content = re.sub(prompt_box_old, prompt_box_new, content, flags=re.DOTALL)

with open('src/components/Home.tsx', 'w') as f:
    f.write(content)


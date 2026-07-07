import re

with open('src/components/Home.tsx', 'r') as f:
    content = f.read()

# Update text and prompt box
old_text_and_prompt = r'<p style={{textAlign:"center",color:"#5a6474",maxWidth:"540px",margin:"24px auto 0",fontSize:"15px",lineHeight:1.6}}>Type a brief, paste a WhatsApp chat, or drop a PDF — Kyvari crafts a beautiful, bookable itinerary while you watch.</p>\s*\{\/\* AI prompt box \*\/\}\s*<div style={{maxWidth:"840px",margin:"28px auto 0",borderRadius:"28px",padding:"2px",background:"linear-gradient\(120deg,rgba\(14,165,233,\.8\),rgba\(49,46,129,\.6\),rgba\(99,102,241,\.7\),rgba\(14,165,233,\.8\)\)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 20px 48px rgba\(49,46,129,\.18\)"}}>\s*<div style={{borderRadius:"26px",background:"#fff",display:"flex",alignItems:"center",gap:"16px",padding:"20px 24px"}}>\s*<span className="hover:bg-\[#e0f2fe\] hover:rotate-90 transition-all duration-200" style={{width:"44px",height:"44px",flex:"none",borderRadius:"14px",background:"#f0f9ff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>\s*<svg width="20" height="20" viewBox="0 0 15 15"><rect x="6.4" y="1.5" width="2.2" height="12" rx="1.1" fill="#0284c7"/><rect x="1.5" y="6.4" width="12" height="2.2" rx="1.1" fill="#0284c7"/></svg>\s*</span>\s*<span style={{flex:1,color:"#8a90a6",fontSize:"17px"}}>Plan a 7-day honeymoon in Santorini for \$5k<span style={{display:"inline-block",width:"2px",height:"22px",background:"#0ea5c9",marginLeft:"3px",verticalAlign:"middle",animation:"caret 1.1s step-end infinite"}}></span></span>\s*<span className="hover:border-\[#0ea5c9\]" style={{width:"44px",height:"44px",flex:"none",borderRadius:"50%",border:"2px solid #f0f9ff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"border-color 0.2s"}}>\s*<svg width="20" height="20" viewBox="0 0 15 15"><rect x="5.4" y="1" width="4.2" height="8" rx="2.1" fill="#5a6474"/><path d="M3 7.5a4.5 4.5 0 0 0 9 0M7.5 12v2.2" stroke="#5a6474" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>\s*</span>\s*<span className="hover:scale-110" style={{width:"50px",height:"50px",flex:"none",borderRadius:"50%",background:"linear-gradient\(140deg,#1e3a8a,#4f46e5\)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 8px 24px rgba\(30,58,138,\.4\)",transition:"transform 0.2s"}}>\s*<svg width="20" height="20" viewBox="0 0 15 15"><path d="M2 7.5h9M8 3.5l4 4-4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>\s*</span>\s*</div>\s*</div>'

new_text_and_prompt = r"""<p style={{textAlign:"center",color:"#5a6474",maxWidth:"640px",margin:"28px auto 0",fontSize:"17px",lineHeight:1.7}}>Type a brief, paste a WhatsApp chat, or drop a PDF — Kyvari empowers travel agents to transform offline assets into beautiful, bookable itineraries in seconds.</p>
        
        {/* AI prompt box */}
        <div style={{width:"100%", maxWidth:"920px",margin:"32px auto 0",borderRadius:"28px",padding:"2px",background:"linear-gradient(120deg,#9ca3af,#10b981,#d1d5db,#34d399)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 20px 48px rgba(16,185,129,.15)"}}>
          <div style={{borderRadius:"26px",background:"#fff",display:"flex",alignItems:"center",gap:"16px",padding:"22px 28px"}}>
            <span className="hover:bg-[#d1fae5] hover:rotate-90 transition-all duration-200" style={{width:"44px",height:"44px",flex:"none",borderRadius:"14px",background:"#ecfdf5",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="6.4" y="1.5" width="2.2" height="12" rx="1.1" fill="#059669"/><rect x="1.5" y="6.4" width="12" height="2.2" rx="1.1" fill="#059669"/></svg>
            </span>
            <span style={{flex:1,color:"#8a90a6",fontSize:"18px"}}>Plan a 7-day honeymoon in Santorini for $5k...<span style={{display:"inline-block",width:"2px",height:"22px",background:"#059669",marginLeft:"3px",verticalAlign:"middle",animation:"caret 1.1s step-end infinite"}}></span></span>
            <span className="hover:border-[#10b981]" style={{width:"44px",height:"44px",flex:"none",borderRadius:"50%",border:"2px solid #ecfdf5",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"border-color 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><rect x="5.4" y="1" width="4.2" height="8" rx="2.1" fill="#5a6474"/><path d="M3 7.5a4.5 4.5 0 0 0 9 0M7.5 12v2.2" stroke="#5a6474" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </span>
            <span className="hover:scale-110" style={{width:"50px",height:"50px",flex:"none",borderRadius:"50%",background:"#1f2937",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 8px 24px rgba(31,41,55,.25)",transition:"transform 0.2s"}}>
              <svg width="20" height="20" viewBox="0 0 15 15"><path d="M2 7.5h9M8 3.5l4 4-4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>"""

content = re.sub(old_text_and_prompt, new_text_and_prompt, content, flags=re.DOTALL)

with open('src/components/Home.tsx', 'w') as f:
    f.write(content)

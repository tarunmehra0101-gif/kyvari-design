import re

with open('src/components/Settings.tsx', 'r') as f:
    content = f.read()

banner_old = r'<div style=\{\{borderRadius:"24px",padding:"32px",background:"linear-gradient\(135deg, #1e1b4b 0%, #312e81 100%\)",boxShadow:"0 20px 40px rgba\(30, 27, 75, 0\.2\)", position:"relative", overflow:"hidden", border: "1px solid rgba\(255,255,255,0\.1\)"\}\}>.*?<div className="hover-scale" style=\{\{position:"relative", background:"#ffffff",color:"#312e81",borderRadius:"14px",padding:"16px 32px",textAlign:"center",fontWeight:600,fontSize:"15px",cursor:"pointer",boxShadow:"0 10px 25px rgba\(0,0,0,0\.2\)", flexShrink: 0, transition: "all 0\.2s"\}\}>\s*Upgrade Now\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>'

banner_new = """<div style={{borderRadius:"20px",padding:"20px",background:"linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",boxShadow:"0 10px 20px rgba(30, 27, 75, 0.15)", position:"relative", overflow:"hidden", border: "1px solid rgba(255,255,255,0.1)"}}>
              <div style={{position:"absolute", top:"-50%", right:"-10%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)", borderRadius:"50%", animation:"pulseDarkBorder 8s infinite"}}></div>
              <div style={{position:"absolute", bottom:"-20%", left:"-10%", width:"200px", height:"200px", background:"radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)", borderRadius:"50%"}}></div>
              
              <div style={{position:"relative", zIndex:2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px"}}>
                <div style={{flex: 1}}>
                  <div style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 10px",borderRadius:"99px",background:"rgba(255,255,255,0.1)",fontSize:"10px",fontWeight:600,letterSpacing:".1em",color:"#c7d2fe", marginBottom:"12px", border: "1px solid rgba(255,255,255,0.1)"}}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1L8.8 5.2L13 7L8.8 8.8L7 13L5.2 8.8L1 7L5.2 5.2L7 1Z" fill="#a5b4fc"/></svg>
                    ULTIMATE TIER
                  </div>
                  
                  <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"20px",lineHeight:1.2,marginBottom:"8px",color:"#ffffff"}}>Unlock limitless travel creation</div>
                  <div style={{fontSize:"13px",color:"#a5b4fc",lineHeight:1.5,fontWeight:400, marginBottom:"16px"}}>500 itineraries per month, extended 28-day trips, and priority access to our next-gen AI generation engine.</div>
                  
                  <div style={{display:"flex", alignItems:"center", gap: "12px", maxWidth: "400px"}}>
                    <div style={{flex: 1}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",fontWeight:500,color:"#c7d2fe",marginBottom:"6px"}}><span>24 / 100 credits used</span><span style={{color:"#ffffff"}}>76 remaining</span></div>
                      <div style={{height:"4px",borderRadius:"99px",background:"rgba(255,255,255,0.1)",overflow:"hidden", width:"100%"}}>
                        <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg, #818cf8, #c084fc)",position:"relative",overflow:"hidden"}}>
                          <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",animation:"shine 2.6s linear infinite"}}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hover-scale" style={{position:"relative", background:"#ffffff",color:"#312e81",borderRadius:"10px",padding:"10px 20px",textAlign:"center",fontWeight:600,fontSize:"14px",cursor:"pointer",boxShadow:"0 8px 16px rgba(0,0,0,0.15)", flexShrink: 0, transition: "all 0.2s"}}>
                  Upgrade Now
                </div>
              </div>
            </div>
          </div>
        </section>"""

content = re.sub(banner_old, banner_new, content, flags=re.DOTALL)

with open('src/components/Settings.tsx', 'w') as f:
    f.write(content)


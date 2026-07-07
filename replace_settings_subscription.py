import re

with open('src/components/Settings.tsx', 'r') as f:
    content = f.read()

# The subscription div is inside the Business Profile section
subscription_pattern = re.compile(r'<div style=\{\{borderTop:"1px solid #eef0f7", paddingTop:"24px", display:"flex", alignItems:"center", justifyContent:"space-between"\}\}>.*?<\/div>\s*<\/section>', re.DOTALL)

new_subscription = """<div style={{borderTop:"1px solid #eef0f7", paddingTop:"24px"}}>
            <label style={{display:"block", fontSize:"13px", fontWeight:500, color:"#5a6474", marginBottom:"12px"}}>Subscription</label>
            
            <div style={{borderRadius:"20px",padding:"1px",background:"linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.1) 100%)",boxShadow:"0 14px 32px rgba(15, 23, 42, 0.25)"}}>
              <div style={{borderRadius:"19px",background:"#050505",padding:"20px",color:"#fff",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",inset:0,background:"conic-gradient(from 180deg at 50% 50%, #111 0deg, #333 90deg, #0a0a0a 180deg, #222 270deg, #111 360deg)",opacity:0.8}}></div>
                <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05) 0%, transparent 50%)"}}></div>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%)",animation:"borderShine 5s linear infinite"}}></div>
                <span style={{position:"absolute",top:0,left:"-100%",width:"200%",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent)",animation:"shine 4s ease-in-out infinite"}}></span>
                
                <div style={{position:"relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"11px",fontWeight:500,letterSpacing:".2em",color:"#94a3b8"}}>
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7z" fill="#cbd5e1"/></svg>
                      PRO PLAN
                    </div>
                    
                    <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"20px",lineHeight:1.3,margin:"12px 0 4px",color:"#f8fafc"}}>Go Ultimate for more itineraries</div>
                    <div style={{fontSize:"13px",color:"#94a3b8",lineHeight:1.55,fontWeight:400}}>500 itineraries / month, 28-day trips & priority AI generation.</div>
                    
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",fontWeight:500,color:"#cbd5e1",margin:"20px 0 8px"}}><span>24 / 100 used</span><span style={{color:"#e2e8f0"}}>76 left</span></div>
                    
                    <div style={{height:"6px",borderRadius:"99px",background:"rgba(255,255,255,.1)",overflow:"hidden", width:"100%"}}>
                      <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg, #475569, #cbd5e1)",position:"relative",overflow:"hidden"}}>
                        <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",animation:"shine 2.6s linear infinite"}}></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hover-scale" style={{position:"relative", background:"radial-gradient(circle at 15% 50%, #4a4a4a, transparent 45%), radial-gradient(circle at 85% 30%, #2a2a2a, transparent 45%), linear-gradient(135deg, #18181b, #27272a)",color:"#f8fafc",border:"1px solid #52525b",borderRadius:"11px",padding:"12px 24px",textAlign:"center",fontWeight:500,fontSize:"14px",cursor:"pointer",overflow:"hidden",boxShadow:"0 6px 16px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15)", animation:"pulseDarkBorder 2.5s infinite", flexShrink: 0}}>
                    Upgrade to Ultimate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>"""

content = subscription_pattern.sub(new_subscription, content)

with open('src/components/Settings.tsx', 'w') as f:
    f.write(content)

import re

with open('src/components/Settings.tsx', 'r') as f:
    content = f.read()

# 1. Update Subscription Banner
subscription_old = r'<div style=\{\{borderTop:"1px solid #eef0f7", paddingTop:"24px"\}\}>.*?<\/div>\s*<\/section>'
subscription_new = """<div style={{borderTop:"1px solid #eef0f7", paddingTop:"24px"}}>
            <label style={{display:"block", fontSize:"13px", fontWeight:500, color:"#5a6474", marginBottom:"12px"}}>Subscription</label>
            
            <div style={{borderRadius:"24px",padding:"32px",background:"linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",boxShadow:"0 20px 40px rgba(30, 27, 75, 0.2)", position:"relative", overflow:"hidden", border: "1px solid rgba(255,255,255,0.1)"}}>
              <div style={{position:"absolute", top:"-50%", right:"-10%", width:"400px", height:"400px", background:"radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)", borderRadius:"50%", animation:"pulseDarkBorder 8s infinite"}}></div>
              <div style={{position:"absolute", bottom:"-20%", left:"-10%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)", borderRadius:"50%"}}></div>
              
              <div style={{position:"relative", zIndex:2, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{maxWidth: "500px"}}>
                  <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"99px",background:"rgba(255,255,255,0.1)",fontSize:"11px",fontWeight:600,letterSpacing:".1em",color:"#c7d2fe", marginBottom:"16px", border: "1px solid rgba(255,255,255,0.1)"}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L8.8 5.2L13 7L8.8 8.8L7 13L5.2 8.8L1 7L5.2 5.2L7 1Z" fill="#a5b4fc"/></svg>
                    ULTIMATE TIER
                  </div>
                  
                  <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"28px",lineHeight:1.2,marginBottom:"12px",color:"#ffffff"}}>Unlock limitless travel creation</div>
                  <div style={{fontSize:"14px",color:"#a5b4fc",lineHeight:1.6,fontWeight:400, marginBottom:"24px"}}>500 itineraries per month, extended 28-day trips, and priority access to our next-gen AI generation engine.</div>
                  
                  <div style={{display:"flex", alignItems:"center", gap: "16px"}}>
                    <div style={{flex: 1}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",fontWeight:500,color:"#c7d2fe",marginBottom:"8px"}}><span>24 / 100 credits used</span><span style={{color:"#ffffff"}}>76 remaining</span></div>
                      <div style={{height:"6px",borderRadius:"99px",background:"rgba(255,255,255,0.1)",overflow:"hidden", width:"100%"}}>
                        <div style={{width:"24%",height:"100%",borderRadius:"99px",background:"linear-gradient(90deg, #818cf8, #c084fc)",position:"relative",overflow:"hidden"}}>
                          <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",animation:"shine 2.6s linear infinite"}}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hover-scale" style={{position:"relative", background:"#ffffff",color:"#312e81",borderRadius:"14px",padding:"16px 32px",textAlign:"center",fontWeight:600,fontSize:"15px",cursor:"pointer",boxShadow:"0 10px 25px rgba(0,0,0,0.2)", flexShrink: 0, transition: "all 0.2s"}}>
                  Upgrade Now
                </div>
              </div>
            </div>
          </div>
        </section>"""
content = re.sub(subscription_old, subscription_new, content, flags=re.DOTALL)

# 2. Update Brand Identity
brand_identity_old = r'\{\/\* Brand Identity \*\/.*?<\/section>'
brand_identity_new = """{/* Brand Identity */}
        <section style={{background:"linear-gradient(145deg, #f8f9fc, #f1f5f9)", borderRadius:"24px", padding:"32px", boxShadow:"0 4px 24px rgba(0,0,0,0.04)", border:"1px solid #e2e8f0", position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", top:0, left:0, width:"100%", height:"6px", background:"linear-gradient(90deg, #3e2b1e, #868bb1)"}}></div>
          <div style={{marginBottom:"28px"}}>
            <h3 style={{fontSize:"20px", fontWeight:600, color:"#1e293b"}}>Brand Identity</h3>
            <p style={{fontSize:"14px", color:"#64748b", marginTop:"6px"}}>Customize how your itineraries look when shared with clients.</p>
          </div>
          <div style={{display:"flex", gap:"32px", marginBottom:"32px", flexWrap:"wrap"}}>
            <div style={{flex:1, minWidth:"250px"}}>
              <label style={{display:"block", fontSize:"13px", fontWeight:500, color:"#475569", marginBottom:"12px"}}>Company Logo</label>
              <div style={{display:"flex", alignItems:"center", gap:"16px", background:"#ffffff", padding:"16px", borderRadius:"16px", border:"1px solid #e2e8f0"}}>
                <div style={{width:"56px", height:"56px", borderRadius:"12px", background:"#f8fafc", display:"flex", alignItems:"center", justifyContent:"center", border:"1px dashed #cbd5e1"}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div>
                  <button style={{padding:"8px 16px", borderRadius:"8px", background:"#ffffff", color:"#0f172a", fontSize:"13px", fontWeight:500, cursor:"pointer", border:"1px solid #cbd5e1", marginBottom:"4px", transition:"all 0.2s"}} onMouseOver={(e) => e.currentTarget.style.background="#f8fafc"} onMouseOut={(e) => e.currentTarget.style.background="#ffffff"}>Change logo</button>
                  <div style={{fontSize:"12px", color:"#64748b"}}>PNG, SVG, or JPG. Max 2MB.</div>
                </div>
              </div>
            </div>
            <div style={{flex:1, minWidth:"250px", display:"flex", gap:"24px"}}>
              <div style={{flex:1}}>
                <label style={{display:"block", fontSize:"13px", fontWeight:500, color:"#475569", marginBottom:"12px"}}>Primary Color</label>
                <div style={{display:"flex", alignItems:"center", gap:"12px", border:"1px solid #e2e8f0", padding:"8px 16px", borderRadius:"12px", background:"#ffffff"}}>
                  <div style={{width:"24px", height:"24px", borderRadius:"6px", background:"#3e2b1e", boxShadow:"inset 0 2px 4px rgba(0,0,0,0.1)"}}></div>
                  <span style={{fontSize:"14px", color:"#334155", fontFamily:"monospace", fontWeight:500}}>#3e2b1e</span>
                </div>
              </div>
              <div style={{flex:1}}>
                <label style={{display:"block", fontSize:"13px", fontWeight:500, color:"#475569", marginBottom:"12px"}}>Secondary Color</label>
                <div style={{display:"flex", alignItems:"center", gap:"12px", border:"1px solid #e2e8f0", padding:"8px 16px", borderRadius:"12px", background:"#ffffff"}}>
                  <div style={{width:"24px", height:"24px", borderRadius:"6px", background:"#868bb1", boxShadow:"inset 0 2px 4px rgba(0,0,0,0.1)"}}></div>
                  <span style={{fontSize:"14px", color:"#334155", fontFamily:"monospace", fontWeight:500}}>#868bb1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{background:"linear-gradient(135deg, rgba(62,43,30,0.05), rgba(134,139,177,0.1))", padding:"24px", borderRadius:"16px", border:"1px solid rgba(62,43,30,0.1)"}}>
            <label style={{display:"block", fontSize:"12px", fontWeight:600, color:"#475569", marginBottom:"16px", textTransform:"uppercase", letterSpacing:"0.5px"}}>Component Preview</label>
            <button style={{background:"linear-gradient(135deg, #3e2b1e, #868bb1)", color:"#fff", padding:"12px 28px", borderRadius:"10px", border:"none", fontSize:"14px", fontWeight:600, cursor:"pointer", boxShadow:"0 4px 12px rgba(62,43,30,0.2)"}}>
              Sample Button
            </button>
          </div>
        </section>"""
content = re.sub(brand_identity_old, brand_identity_new, content, flags=re.DOTALL)

# 3. Update Custom Domain
custom_domain_old = r'\{\/\* Custom Domain \*\/.*?<\/section>'
custom_domain_new = """{/* Custom Domain */}
        <section style={{background:"linear-gradient(135deg, #ffffff, #f0fdf4)", borderRadius:"24px", padding:"32px", boxShadow:"0 4px 24px rgba(0,0,0,0.04)", border:"1px solid #dcfce7", position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", top:"-50%", right:"-20%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)", borderRadius:"50%"}}></div>
          <div style={{position:"absolute", top:"16px", right:"16px", background:"#dcfce7", padding:"6px 14px", borderRadius:"99px", fontSize:"12px", fontWeight:600, color:"#166534"}}>
            Coming soon
          </div>
          <div style={{position:"relative", zIndex:2}}>
            <h3 style={{fontSize:"20px", fontWeight:600, color:"#14532d", marginBottom:"12px"}}>Custom Domain</h3>
            <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px", opacity:0.8}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span style={{fontSize:"15px", color:"#14532d", fontFamily:"monospace", fontWeight:600}}>trips.youragency.com</span>
            </div>
            <p style={{fontSize:"14px", color:"#166534", opacity:0.8}}>White-label custom domains are on the roadmap. Soon you'll be able to host itineraries on your own URL.</p>
          </div>
        </section>"""
content = re.sub(custom_domain_old, custom_domain_new, content, flags=re.DOTALL)

with open('src/components/Settings.tsx', 'w') as f:
    f.write(content)

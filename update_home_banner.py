import re

with open('src/components/Home.tsx', 'r') as f:
    content = f.read()

# Replace the animated CSS scene with a video
scene_old_regex = r'\{\/\* big animated travel scene \*\/\}.*?\{\/\* AI prompt box \*\/\}'

new_scene = """{/* big animated travel scene */}
        <div style={{position:"relative",height:"280px",borderRadius:"26px",overflow:"hidden",background:"#020617",boxShadow:"0 20px 44px rgba(2,6,23,.25)"}}>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="https://storage.googleapis.com/aistudio-assets/video/mountain_landscape.mp4" type="video/mp4" />
          </video>
          
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.4) 40%, transparent 100%)"}}></div>
          
          <div style={{position:"absolute",left:"32px",bottom:"28px",color:"#fff"}}>
            <div style={{fontSize:"13px",fontWeight:500,letterSpacing:".22em",textShadow:"0 2px 8px rgba(2,6,23,.6)"}}>TUESDAY · JULY 7</div>
            <div style={{fontFamily:"'Playfair Display', serif",fontWeight:500,fontSize:"42px",letterSpacing:"-.02em",textShadow:"0 3px 14px rgba(2,6,23,.6)",marginTop:"8px"}}>Where to today, Wanderlust?</div>
          </div>
        </div>

        <p style={{textAlign:"center",color:"#5a6474",maxWidth:"540px",margin:"24px auto 0",fontSize:"15px",lineHeight:1.6}}>Type a brief, paste a WhatsApp chat, or drop a PDF — Kyvari crafts a beautiful, bookable itinerary while you watch.</p>
        
        {/* AI prompt box */}"""

content = re.sub(scene_old_regex, new_scene, content, flags=re.DOTALL)

with open('src/components/Home.tsx', 'w') as f:
    f.write(content)

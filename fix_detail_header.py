import re

with open('src/components/Detail.tsx', 'r') as f:
    content = f.read()

header_regex = r'<div style={{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>\s*<span onClick=\{\(\) => setView\(\'trips\'\)\} className="hover:bg-\[#f0f9ff\] hover:-translate-x-\[2px\] transition-all duration-200" style={{width:"38px",height:"38px",borderRadius:"12px",background:"#fff",border:"1px solid #eef0f7",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"15px",color:"#3b4258",boxShadow:"0 3px 8px rgba\(20,24,58,\.04\)"}}>←</span>.*?➤ Send</span></span>\s*</div>\s*</div>'

new_header = r"""<div style={{position:"relative",borderRadius:"28px",overflow:"hidden",padding:"32px 32px 32px 40px",background:"linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",color:"#fff",boxShadow:"0 16px 40px rgba(15,23,42,.2)",display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"}}>
        {/* Unique Background Details */}
        <div style={{position:"absolute",top:0,right:0,width:"60%",height:"100%",background:"radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.25) 0%, transparent 65%)"}}></div>
        <div style={{position:"absolute",bottom:"-30px",left:"15%",width:"350px",height:"350px",background:"radial-gradient(circle, rgba(192,38,211,0.15) 0%, transparent 70%)",filter:"blur(40px)"}}></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position:"absolute",bottom:0,right:0,width:"55%",height:"60%",opacity:0.04,fill:"#fff",pointerEvents:"none"}}>
            <polygon points="100,100 0,100 35,40 55,70 85,15" />
        </svg>

        <span onClick={() => setView('trips')} className="hover:bg-white/20 transition-all duration-200 hover:-translate-x-[2px]" style={{position:"relative",zIndex:10,width:"42px",height:"42px",borderRadius:"14px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"16px",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>←</span>
        
        <div style={{flex:1,minWidth:"280px",position:"relative",zIndex:10}}>
          <h1 style={{fontFamily:"'Playfair Display', serif",fontWeight:600,fontSize:"30px",letterSpacing:"-.01em",margin:0,color:"#fff",textShadow:"0 2px 10px rgba(0,0,0,0.2)"}}>Bhutanese Bliss: A Himalayan Adventure for Two</h1>
          <div style={{display:"flex",gap:"10px",marginTop:"14px",flexWrap:"wrap"}}>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"linear-gradient(135deg,#ff7a59,#ff4d6d)",color:"#fff",fontSize:"11.5px",fontWeight:600,letterSpacing:".05em",boxShadow:"0 2px 8px rgba(255,77,109,.25)"}}>▲ ADVENTURE</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>◉ Paro, Bhutan</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>♥ 2 travellers</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",fontSize:"11.5px",fontWeight:500}}>▤ 20–22 Jul 2026</span>
            <span style={{borderRadius:"99px",padding:"5px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.15)",color:"#e2e8f0",fontSize:"11.5px",fontWeight:500}}>◈ Client · Meera & Arjun</span>
          </div>
        </div>
        
        <div style={{display:"flex",gap:"12px",position:"relative",zIndex:10}}>
          <span className="hover:bg-white/20 transition-colors" style={{borderRadius:"12px",padding:"10px 16px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",fontSize:"13px",fontWeight:500,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>⧉ Copy link</span>
          <span className="hover:bg-white/20 transition-colors" style={{borderRadius:"12px",padding:"10px 16px",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",fontSize:"13px",fontWeight:500,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>◎ Preview</span>
          <span className="hover:-translate-y-[2px] transition-all duration-200" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",padding:"2px",background:"linear-gradient(120deg,#38bdf8,#818cf8,#c026d3,#38bdf8)",backgroundSize:"300% 100%",animation:"gradShift 6s linear infinite",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",cursor:"pointer"}}><span style={{background:"#1f2937",color:"#fff",borderRadius:"10px",padding:"8px 18px",fontSize:"13px",fontWeight:500,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>➤ Send</span></span>
        </div>
      </div>"""

content = re.sub(header_regex, new_header, content, flags=re.DOTALL)

with open('src/components/Detail.tsx', 'w') as f:
    f.write(content)

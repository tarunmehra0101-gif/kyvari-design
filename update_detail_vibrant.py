import re

with open('src/components/Detail.tsx', 'r') as f:
    content = f.read()

# Replace the inner details of the banner wrapper.
# Find the start of the banner wrapper div.
start_str = '<div style={{position:"relative",borderRadius:"28px",overflow:"hidden",padding:"32px 32px 32px 40px",background:"linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",color:"#fff",boxShadow:"0 16px 40px rgba(15,23,42,.2)",display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"}}>'
end_str = '<span onClick={() => setView(\'trips\')}'

idx_start = content.find(start_str)
if idx_start != -1:
    idx_end = content.find(end_str, idx_start)
    if idx_end != -1:
        new_background_html = """
        {/* Animated Vibrant Landscape Background */}
        <div style={{position:"absolute", top:0, left:0, right:0, bottom:0, zIndex: 0, overflow:"hidden", pointerEvents:"none", background:"linear-gradient(to bottom, #38bdf8 0%, #bae6fd 60%, #fdf4ff 100%)"}}>
          
          {/* Animated Sun Rays */}
          <div style={{position:"absolute", top: "-150px", right: "5%", width: "500px", height: "500px", animation: "rayspin 35s linear infinite", background: "conic-gradient(from 0deg, rgba(253,224,71,0) 0 15deg, rgba(253,224,71,0.3) 15deg 30deg, rgba(253,224,71,0) 30deg 45deg, rgba(253,224,71,0.3) 45deg 60deg, rgba(253,224,71,0) 60deg 75deg, rgba(253,224,71,0.3) 75deg 90deg, rgba(253,224,71,0) 90deg 105deg, rgba(253,224,71,0.3) 105deg 120deg, rgba(253,224,71,0) 120deg 135deg, rgba(253,224,71,0.3) 135deg 150deg, rgba(253,224,71,0) 150deg 165deg, rgba(253,224,71,0.3) 165deg 180deg, rgba(253,224,71,0) 180deg 195deg, rgba(253,224,71,0.3) 195deg 210deg, rgba(253,224,71,0) 210deg 225deg, rgba(253,224,71,0.3) 225deg 240deg, rgba(253,224,71,0) 240deg 255deg, rgba(253,224,71,0.3) 255deg 270deg, rgba(253,224,71,0) 270deg 285deg, rgba(253,224,71,0.3) 285deg 300deg, rgba(253,224,71,0) 300deg 315deg, rgba(253,224,71,0.3) 315deg 330deg, rgba(253,224,71,0) 330deg 345deg, rgba(253,224,71,0.3) 345deg 360deg)", borderRadius: "50%"}}></div>
          
          {/* Animated Sun */}
          <div style={{position:"absolute", top: "10px", right: "20%", width: "160px", height: "160px", background: "radial-gradient(circle, #fef08a 0%, #facc15 60%, #eab308 100%)", borderRadius: "50%", animation: "pulseSun 4s ease-in-out infinite alternate", boxShadow: "0 0 80px rgba(250,204,21,0.6)"}}></div>

          {/* Animated Clouds */}
          <div style={{position:"absolute", top: "40px", left: "15%", width: "180px", height: "45px", borderRadius: "99px", background: "rgba(255,255,255,0.9)", animation: "floatCloud 40s linear infinite", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-20px", left:"20px", width:"60px", height:"60px", borderRadius:"50%", background:"rgba(255,255,255,0.9)"}}></div>
             <div style={{position:"absolute", top:"-10px", right:"30px", width:"50px", height:"50px", borderRadius:"50%", background:"rgba(255,255,255,0.9)"}}></div>
          </div>
          <div style={{position:"absolute", top: "90px", right: "30%", width: "140px", height: "35px", borderRadius: "99px", background: "rgba(255,255,255,0.85)", animation: "floatCloud 55s linear infinite reverse", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-15px", left:"15px", width:"40px", height:"40px", borderRadius:"50%", background:"rgba(255,255,255,0.85)"}}></div>
             <div style={{position:"absolute", top:"-10px", right:"20px", width:"45px", height:"45px", borderRadius:"50%", background:"rgba(255,255,255,0.85)"}}></div>
          </div>
          <div style={{position:"absolute", top: "160px", left: "45%", width: "100px", height: "25px", borderRadius: "99px", background: "rgba(255,255,255,0.7)", animation: "floatCloud 30s linear infinite", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"}}>
             <div style={{position:"absolute", top:"-10px", left:"10px", width:"30px", height:"30px", borderRadius:"50%", background:"rgba(255,255,255,0.7)"}}></div>
             <div style={{position:"absolute", top:"-5px", right:"15px", width:"25px", height:"25px", borderRadius:"50%", background:"rgba(255,255,255,0.7)"}}></div>
          </div>

          {/* Lush Green Mountains with multiple peaks */}
          <div style={{position:"absolute", bottom: "-20px", right: "-10%", width: "45%", height: "70%", background: "linear-gradient(135deg, #10b981, #047857)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.9}}></div>
          <div style={{position:"absolute", bottom: "-30px", right: "20%", width: "55%", height: "85%", background: "linear-gradient(135deg, #34d399, #059669)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.95}}></div>
          <div style={{position:"absolute", bottom: "-40px", left: "-5%", width: "40%", height: "65%", background: "linear-gradient(135deg, #059669, #064e3b)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div style={{position:"absolute", bottom: "-50px", left: "20%", width: "60%", height: "95%", background: "linear-gradient(135deg, #047857, #022c22)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", boxShadow: "-20px 0 40px rgba(0,0,0,0.2)"}}></div>

          {/* Overlay to ensure text readability */}
          <div style={{position:"absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 40%, rgba(15,23,42,0.1) 100%)"}}></div>
        </div>
        """
        
        new_content = content[:idx_start + len(start_str)] + new_background_html + content[idx_end:]
        with open('src/components/Detail.tsx', 'w') as out_f:
            out_f.write(new_content)


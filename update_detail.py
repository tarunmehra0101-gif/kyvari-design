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
        {/* Animated Himalayan Background */}
        <div style={{position:"absolute", top:0, left:0, right:0, bottom:0, zIndex: 0, overflow:"hidden", pointerEvents:"none", background:"linear-gradient(to bottom, #0f172a 0%, #1e1b4b 50%, #4338ca 100%)"}}>
          {/* Animated Sky/Stars */}
          <div style={{position:"absolute", top: "10%", left: "20%", width: "3px", height: "3px", background: "#fff", borderRadius: "50%", animation: "twinkleStar 2s infinite alternate", opacity: 0.8}}></div>
          <div style={{position:"absolute", top: "25%", left: "40%", width: "2px", height: "2px", background: "#fff", borderRadius: "50%", animation: "twinkleStar 3s infinite alternate 1s", opacity: 0.6}}></div>
          <div style={{position:"absolute", top: "15%", right: "30%", width: "3px", height: "3px", background: "#fff", borderRadius: "50%", animation: "twinkleStar 2.5s infinite alternate 0.5s", opacity: 0.9}}></div>
          <div style={{position:"absolute", top: "35%", right: "15%", width: "2px", height: "2px", background: "#fff", borderRadius: "50%", animation: "twinkleStar 1.5s infinite alternate 0.2s", opacity: 0.5}}></div>
          <div style={{position:"absolute", top: "8%", left: "70%", width: "4px", height: "4px", background: "#fff", borderRadius: "50%", animation: "twinkleStar 2.2s infinite alternate 0.8s", opacity: 0.7}}></div>
          
          {/* Animated Sun / Moon */}
          <div style={{position:"absolute", top: "10px", right: "20%", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(253,186,116,0.8) 0%, rgba(245,158,11,0.2) 40%, rgba(245,158,11,0) 70%)", animation: "pulseSun 6s infinite alternate"}}></div>

          {/* Majestic Mountains */}
          <div style={{position:"absolute", bottom: "-30px", right: "0%", width: "60%", height: "80%", background: "linear-gradient(135deg, #4f46e5, #312e81)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.4}}></div>
          <div style={{position:"absolute", bottom: "-10px", right: "15%", width: "70%", height: "70%", background: "linear-gradient(135deg, #6366f1, #3730a3)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.5}}></div>
          <div style={{position:"absolute", bottom: "-40px", left: "-10%", width: "55%", height: "75%", background: "linear-gradient(135deg, #818cf8, #4338ca)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.3}}></div>
          
          {/* Animated Clouds */}
          <div style={{position:"absolute", top: "20%", right: "-10%", width: "200px", height: "40px", borderRadius: "99px", background: "rgba(255,255,255,0.06)", filter: "blur(6px)", animation: "floatCloud 30s linear infinite"}}></div>
          <div style={{position:"absolute", top: "40%", left: "-10%", width: "250px", height: "50px", borderRadius: "99px", background: "rgba(255,255,255,0.04)", filter: "blur(8px)", animation: "floatCloud 40s linear infinite reverse"}}></div>
          <div style={{position:"absolute", top: "15%", left: "-15%", width: "150px", height: "30px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", filter: "blur(4px)", animation: "floatCloud 25s linear infinite 5s"}}></div>
        </div>

        """
        
        new_content = content[:idx_start + len(start_str)] + new_background_html + content[idx_end:]
        with open('src/components/Detail.tsx', 'w') as out_f:
            out_f.write(new_content)


import re

with open('src/components/Detail.tsx', 'r') as f:
    content = f.read()

# Remove the dayTabs from the old location
old_tabs_block = r'<div style={{display:"flex",gap:"10px",marginBottom:"20px"}}>.*?</div>'
content = re.sub(old_tabs_block, '', content, flags=re.DOTALL)

# Insert the Image Header and the dayTabs at the start of the right column
right_column_start = r'(<div style={{display:"flex",flexDirection:"column",gap:"16px"}}>)'
new_content = r"""\1
          <div style={{position:"relative", height:"240px", borderRadius:"24px", overflow:"hidden", boxShadow:"0 10px 30px rgba(20,24,58,.1)"}}>
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200&h=600" alt="Paro, Bhutan" style={{width:"100%", height:"100%", objectFit:"cover"}} />
            <div style={{position:"absolute", inset:0, background:"linear-gradient(to top, rgba(20,24,58,0.8), transparent)"}}></div>
            <div style={{position:"absolute", bottom:"24px", left:"24px", color:"#fff"}}>
              <div style={{fontSize:"12px", fontWeight:600, letterSpacing:".15em", textTransform:"uppercase", marginBottom:"4px", display:"flex", alignItems:"center", gap:"6px"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                Paro, Bhutan
              </div>
              <div style={{fontFamily:"'Playfair Display', serif", fontSize:"32px", fontWeight:500, letterSpacing:"-0.02em"}}>Bhutanese Bliss</div>
            </div>
          </div>

          <div style={{display:"flex",gap:"10px", overflowX:"auto", paddingBottom:"4px", msOverflowStyle: "none", scrollbarWidth: "none"}} className="hide-scrollbar">
            {dayTabs.map((d, i) => (
              <span key={i} onClick={d.select} className="hover:-translate-y-[2px] transition-all duration-200 flex-shrink-0" style={{borderRadius:"99px",padding:"9px 20px",fontSize:"13px",fontWeight:500,cursor:"pointer",background:dayIdx === i ? 'linear-gradient(140deg,#1e3a8a,#312e81)' : '#fff',color:dayIdx === i ? '#fff' : '#5a6474',boxShadow:d.shadow,border:`1.5px solid ${d.border}`}}>{d.label}</span>
            ))}
          </div>
"""

content = re.sub(right_column_start, new_content, content, count=1)

with open('src/components/Detail.tsx', 'w') as f:
    f.write(content)


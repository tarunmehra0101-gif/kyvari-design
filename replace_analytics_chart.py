import re

with open('src/components/Analytics.tsx', 'r') as f:
    content = f.read()

# Replace AreaChart
chart_old = r'<div className="h-72 w-full">.*?<\/div>\s*<\/div>\s*<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">'
chart_new = """<div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12, fontWeight:500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12, fontWeight:500}} />
                <Tooltip 
                  contentStyle={{borderRadius:"16px",border:"1px solid #f1f5f9",boxShadow:"0 10px 30px rgba(0,0,0,0.08)",padding:"16px",background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"}}
                  itemStyle={{fontSize:"14px",fontWeight:600,padding:"4px 0"}}
                  labelStyle={{fontSize:"13px",color:"#64748b",marginBottom:"8px",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em"}}
                />
                <Legend iconType="circle" wrapperStyle={{fontSize:"13px", fontWeight:500, color:"#475569", paddingTop:"12px"}} />
                <Area type="monotone" dataKey="views" name="Total Views" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" activeDot={{r: 6, strokeWidth: 0, fill: '#ec4899'}} />
                <Area type="monotone" dataKey="interactions" name="Link Clicks" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorInts)" activeDot={{r: 6, strokeWidth: 0, fill: '#0ea5e9'}} />
                <Area type="monotone" dataKey="shares" name="Shares" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorShares)" activeDot={{r: 6, strokeWidth: 0, fill: '#8b5cf6'}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">"""

content = re.sub(chart_old, chart_new, content, flags=re.DOTALL)

with open('src/components/Analytics.tsx', 'w') as f:
    f.write(content)

import re

with open('src/components/DetailPanel.tsx', 'r') as f:
    content = f.read()

# Enhance the flight card in DetailPanel
flight_old = r'<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">.*?<div className="text-3xl font-semibold text-slate-900 mb-1">CDG</div>'
flight_new = """<div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(20,24,58,0.06)] border border-slate-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-lg font-medium text-slate-900 mb-8 flex items-center gap-2 relative z-10">
                <Plane className="text-sky-500" size={20} /> Inbound Flight
              </h3>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">JFK</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">New York</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">10:30 AM</div>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center px-6 relative h-24">
                  <div className="text-xs font-medium text-slate-400 mb-2 bg-white px-2 rounded-full shadow-sm border border-slate-100 absolute top-0 z-20">7h 15m</div>
                  
                  {/* Custom Animated Plane Track */}
                  <div className="w-full relative flex items-center justify-center h-full">
                    {/* Dashed trail */}
                    <div className="absolute w-full h-[2px] border-t-2 border-dashed border-slate-200"></div>
                    
                    {/* Clouds */}
                    <div className="absolute w-full h-full overflow-hidden">
                       <div className="w-8 h-3 bg-white/60 rounded-full blur-[1px] absolute top-2 left-4 animate-[cloudPass_8s_linear_infinite]"></div>
                       <div className="w-12 h-4 bg-white/60 rounded-full blur-[2px] absolute bottom-2 right-8 animate-[cloudPass_12s_linear_infinite_2s]"></div>
                    </div>
                    
                    {/* The Plane */}
                    <div className="absolute animate-[flyLoop_6s_ease-in-out_infinite]">
                      <div className="relative">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent to-sky-400 opacity-60"></div>
                        <Plane size={28} className="text-sky-500 fill-sky-100 rotate-45 transform" />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-sky-600 mt-2 bg-sky-50 px-3 py-1 rounded-full absolute bottom-0">Direct • AF 023</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">CDG</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Paris</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">11:45 PM</div>"""

content = re.sub(flight_old, flight_new, content, flags=re.DOTALL)

with open('src/components/DetailPanel.tsx', 'w') as f:
    f.write(content)


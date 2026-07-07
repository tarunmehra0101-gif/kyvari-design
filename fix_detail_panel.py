import re

with open('src/components/DetailPanel.tsx', 'r') as f:
    content = f.read()

bad_markup = """<div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">CDG</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Paris</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">11:45 PM</div>
                  <div className="text-sm text-slate-500">Paris</div>
                  <div className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded mt-2">11:45 PM</div>"""

good_markup = """<div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">CDG</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Paris</div>
                  <div className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full mt-3">11:45 PM</div>"""

content = content.replace(bad_markup, good_markup)

with open('src/components/DetailPanel.tsx', 'w') as f:
    f.write(content)


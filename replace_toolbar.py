import re

with open('src/components/Trips.tsx', 'r') as f:
    content = f.read()

# Add imports
if 'lucide-react' not in content:
    content = content.replace("import { trips } from '../data';", "import { trips } from '../data';\nimport { Search, Calendar, Activity, SlidersHorizontal } from 'lucide-react';")

# Replace toolbar
toolbar_pattern = re.compile(r'\{\/\* NEW FEATURES TOOLBAR \*\/\}.*?<\/div>\s*<\/div>', re.DOTALL)

new_toolbar = """{/* NEW FEATURES TOOLBAR */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[280px] relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search destinations, clients, or tags..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl text-sm transition-all outline-none shadow-sm text-slate-700"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <Calendar className="w-4 h-4 text-slate-500" />
            Any Dates
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <Activity className="w-4 h-4 text-slate-500" />
            Status: All
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-600 transition-all shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            More Filters
          </button>
        </div>
      </div>"""

content = toolbar_pattern.sub(new_toolbar, content)

with open('src/components/Trips.tsx', 'w') as f:
    f.write(content)

import re

with open('src/components/ChatPanel.tsx', 'r') as f:
    content = f.read()

chat_input_old = r'<div className="pointer-events-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 flex items-center gap-4 shadow-md">.*?<\/div>\s*<\/div>\s*<p'
chat_input_new = """<div className="pointer-events-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-5 flex items-center gap-4 shadow-lg">
          <button className="p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors bg-white shadow-sm border border-slate-200">
            <Plus size={26} className="text-slate-600" />
          </button>
          <input
            className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-lg placeholder-slate-400 text-slate-900 dark:text-slate-100 px-2"
            placeholder="Ask anything..."
            type="text"
          />
          <div className="flex items-center gap-3">
            <button className="p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors bg-white shadow-sm border border-slate-200">
              <Mic size={26} className="text-slate-600" />
            </button>
            <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-700 transition-colors shadow-md">
              <ArrowUp size={24} className="text-white" />
            </button>
          </div>
        </div>
        <p"""

content = re.sub(chat_input_old, chat_input_new, content, flags=re.DOTALL)

with open('src/components/ChatPanel.tsx', 'w') as f:
    f.write(content)


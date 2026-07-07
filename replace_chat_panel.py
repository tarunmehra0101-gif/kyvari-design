import re

with open('src/components/ChatPanel.tsx', 'r') as f:
    content = f.read()

chat_input_old = r'<div className="pointer-events-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex items-center gap-3 shadow-sm">.*?<\/div>\s*<\/div>\s*<p'
chat_input_new = """<div className="pointer-events-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 flex items-center gap-4 shadow-md">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Plus size={24} className="text-slate-500" />
          </button>
          <input
            className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-base placeholder-slate-400 text-slate-900 dark:text-slate-100"
            placeholder="Ask anything..."
            type="text"
          />
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Mic size={24} className="text-slate-500" />
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              <ArrowUp size={20} className="text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
        <p"""
content = re.sub(chat_input_old, chat_input_new, content, flags=re.DOTALL)

with open('src/components/ChatPanel.tsx', 'w') as f:
    f.write(content)


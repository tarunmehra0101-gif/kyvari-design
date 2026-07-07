import React from 'react';
import { ChevronLeft, ChevronDown, User, Sparkles, CheckCircle2, Plus, Mic, ArrowUp } from 'lucide-react';

export function ChatPanel() {
  return (
    <section className="w-1/2 flex flex-col border-r border-slate-200 dark:border-slate-800 relative bg-background-light dark:bg-background-dark">
      <header className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChevronLeft size={24} className="text-slate-400 cursor-pointer" />
          <div className="flex items-center gap-2">
            <img
              alt="Paris"
              className="w-8 h-8 rounded-md object-cover"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=200&h=200"
            />
            <div>
              <div className="flex items-center gap-1 font-semibold text-sm">
                Five Days in Paris <ChevronDown size={14} />
              </div>
              <div className="text-[10px] text-slate-400">Trip to Paris</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
            Paris
          </span>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
            6 days
          </span>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
            Who
          </span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 hide-scrollbar pb-32">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
            <User size={16} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="pt-1">
            <h2 className="text-lg font-medium">Plan a 5 day trip to Paris</h2>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
            <Sparkles size={16} className="text-white" />
          </div>
          <div className="space-y-8 flex-1">
            <div>
              <h3 className="text-2xl font-medium flex items-center gap-2 mb-2">
                Day 1 –  First Paris Stroll: Opéra → Tuileries → Seine
              </h3>
              <p className="text-slate-500 italic mb-6">
                Easy arrival day with classic "first views" and a low-stress evening
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-relaxed"></span>
                  <div className="leading-relaxed">
                    <span className="font-medium">Morning:</span> Arrive in{' '}
                    <span className="inline-flex items-center font-medium text-accent-blue cursor-pointer hover:underline">
                      Paris <CheckCircle2 size={12} className="ml-0.5" />
                    </span>
                    {' '}→ coffee/pastry stop at  <span className="font-medium">Les Bariolés de Maud Paris 9</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" />
                    {' '}→ wander around  <span className="font-medium">Palais Garnier (Opéra Garnier)</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" />
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-relaxed"></span>
                  <div className="leading-relaxed">
                    <span className="font-medium">Afternoon:</span> Check-in at 🏨{' '}
                    <span className="inline-flex items-center font-medium text-accent-blue cursor-pointer hover:underline">
                      Kimpton St Honoré Paris <CheckCircle2 size={12} className="ml-0.5" />
                    </span>
                    {' '}→ walk the  <span className="font-medium">Jardin des Tuileries</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" />
                    {' '}→ sunset stroll along the ≋ <span className="font-medium">Seine River</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" />
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-relaxed"></span>
                  <div className="leading-relaxed">
                    <span className="font-medium">Evening:</span> Sweet treat near  <span className="font-medium">Notre-Dame Cathedral</span> at {' '}
                    <span className="inline-flex items-center font-medium text-accent-blue cursor-pointer hover:underline">
                      Odette <CheckCircle2 size={12} className="ml-0.5" />
                    </span>
                    {' '}→ early night to reset for a big Day 2
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-medium flex items-center gap-2 mb-2">
                Day 2 –  Louvre + Historic Core + Marais Treats
              </h3>
              <p className="text-slate-500 italic mb-6">
                Art icons, elegant streets, and a tasty neighborhood finish
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-relaxed"></span>
                  <div className="leading-relaxed">
                    <span className="font-medium">Morning:</span>  <span className="font-medium">Musée du Louvre</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" /> highlights → walk through  <span className="font-medium">Cour Carrée / Louvre courtyards</span>
                    <CheckCircle2 size={12} className="inline text-accent-blue ml-0.5" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-8 bg-gradient-to-t from-background-light dark:from-background-dark pt-10 to-transparent pointer-events-none">
        <div className="pointer-events-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-5 flex items-center gap-4 shadow-lg">
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
        <p className="text-[10px] text-center text-slate-400 mt-2 pointer-events-auto">
          Mindtrip can make mistakes. Check important info.
        </p>
      </div>
    </section>
  );
}

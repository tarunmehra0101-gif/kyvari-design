import React from 'react';
import { Send, MapPin, Calendar, Compass, User, MoreHorizontal } from 'lucide-react';

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-mindtrip-bg)] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[var(--color-mindtrip-card)] border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[var(--radius-pill)] bg-gradient-awesomic flex items-center justify-center text-white font-bold">
            M
          </div>
          <div>
            <h2 className="text-lg font-bold font-display text-[var(--color-mindtrip-text)]">Trip to Tokyo</h2>
            <p className="text-xs text-gray-500">AI Assistant • Planning Phase</p>
          </div>
        </div>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </header>

      {/* Chat History Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        
        {/* User Message */}
        <div className="flex flex-col items-end gap-1">
          <div className="bg-[var(--color-awesomic-blue)] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm text-sm sm:text-base leading-relaxed">
            I'm planning a 5-day trip to Tokyo in October. I love anime, street food, and want to stay somewhere central but not too crazy.
          </div>
          <span className="text-xs text-gray-400 mr-1">10:42 AM</span>
        </div>

        {/* AI Response */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex gap-2 max-w-[90%]">
            <div className="w-8 h-8 rounded-full bg-gradient-awesomic flex-shrink-0 flex items-center justify-center text-white mt-1">
              <Compass size={16} />
            </div>
            <div className="bg-[var(--color-mindtrip-card)] text-[var(--color-mindtrip-text)] px-5 py-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm text-sm sm:text-base leading-relaxed">
              <p className="mb-3">Tokyo in October is fantastic! The weather is mild, perfect for exploring.</p>
              <p className="mb-4">Based on your interests in anime and street food, here is a suggested starting point for your stay and a couple of must-do activities:</p>
              
              {/* Embedded Interactive Element (Card) */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-3 p-3 rounded-[var(--radius-xl)] bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-sm">Akihabara District</h4>
                    <p className="text-xs text-gray-500">The epicenter of anime & gaming culture</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-[var(--radius-xl)] bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-sm">Ameyoko Street Market</h4>
                    <p className="text-xs text-gray-500">Bustling street food and market stalls</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-4">Would you like me to build out a day-by-day itinerary incorporating these, or should we look at hotel options in Ueno (central, near these spots, but quieter than Shinjuku)?</p>
            </div>
          </div>
          <span className="text-xs text-gray-400 ml-10 mt-1">10:43 AM</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[var(--color-mindtrip-card)] border-t border-gray-200">
        <div className="max-w-4xl mx-auto relative flex items-center">
          <input 
            type="text" 
            placeholder="Ask for suggestions, places, or itineraries..." 
            className="w-full bg-gray-100 border-none rounded-[var(--radius-pill)] pl-6 pr-14 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-awesomic-blue)] transition-shadow shadow-inner"
          />
          <button className="absolute right-2 p-2.5 bg-[var(--color-awesomic-blue)] hover:bg-blue-600 text-white rounded-full transition-colors">
            <Send size={18} />
          </button>
        </div>
        <div className="max-w-4xl mx-auto flex gap-2 mt-3 overflow-x-auto hide-scrollbar pb-1">
          <button className="flex-shrink-0 text-xs px-3 py-1.5 rounded-[var(--radius-pill)] border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors">
            Suggest hotels in Ueno
          </button>
          <button className="flex-shrink-0 text-xs px-3 py-1.5 rounded-[var(--radius-pill)] border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors">
            Build day-by-day itinerary
          </button>
          <button className="flex-shrink-0 text-xs px-3 py-1.5 rounded-[var(--radius-pill)] border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors">
            What else is nearby?
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Star, MapPin, ExternalLink, Heart } from 'lucide-react';

export default function InteractiveItineraryCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-[var(--color-mindtrip-card)] rounded-[var(--radius-2xl)] shadow-md border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-sans">
      
      {/* Image Header area */}
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
        {/* Placeholder image */}
        <img 
          src="https://images.unsplash.com/photo-1542051842920-87b451f7149d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Shinjuku Tokyo"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges & Actions */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 text-xs font-bold text-white bg-black/40 backdrop-blur-md rounded-[var(--radius-pill)]">
            Hotel
          </span>
          <span className="px-2.5 py-1 text-xs font-bold text-gray-900 bg-white/90 backdrop-blur-md rounded-[var(--radius-pill)] flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            4.8
          </span>
        </div>
        
        <button className="absolute top-3 right-3 p-2 bg-white/40 backdrop-blur-md hover:bg-white/70 text-gray-900 rounded-full transition-colors">
          <Heart size={18} />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold font-display text-[var(--color-mindtrip-text)] leading-tight">Keio Plaza Hotel Tokyo</h3>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
              <MapPin size={14} />
              Shinjuku, Tokyo
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          A luxury high-rise hotel offering sweeping city views, multiple dining options, and incredibly convenient access to Shinjuku station.
        </p>

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Price Avg</span>
            <span className="text-base font-bold text-gray-900">$245 <span className="text-sm font-normal text-gray-500">/ night</span></span>
          </div>
          
          <button className="flex items-center justify-center gap-1 text-sm font-semibold text-[var(--color-awesomic-blue)] hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-[var(--radius-pill)]">
            Details
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

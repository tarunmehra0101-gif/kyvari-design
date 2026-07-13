import React from 'react';
import DynamicHero from '../../components/cloned/DynamicHero';
import ChatInterface from '../../components/cloned/ChatInterface';
import B2BFeatureGrid from '../../components/cloned/B2BFeatureGrid';
import InteractiveItineraryCard from '../../components/cloned/InteractiveItineraryCard';

export default function ClonedShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-gray-900 text-white p-4 text-center font-bold">
        Kyvari Design Override Showcase (Awesomic + Mindtrip)
      </div>
      
      {/* Dynamic Hero Section */}
      <div className="mb-20">
        <div className="bg-white p-4 border-b border-gray-200 shadow-sm font-semibold text-gray-500 uppercase tracking-widest text-xs text-center">
          Component: Dynamic Hero (Hybrid)
        </div>
        <DynamicHero />
      </div>

      {/* Feature Grid Section */}
      <div className="mb-20">
        <div className="bg-white p-4 border-b border-gray-200 shadow-sm font-semibold text-gray-500 uppercase tracking-widest text-xs text-center">
          Component: B2B Feature Grid (Mindtrip)
        </div>
        <B2BFeatureGrid />
      </div>

      {/* Chat & Itinerary Card Demo Area */}
      <div className="max-w-7xl mx-auto w-full px-6 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col h-[700px] border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white p-4 border-b border-gray-200 font-semibold text-gray-500 uppercase tracking-widest text-xs text-center z-10">
            Component: Chat Interface (Mindtrip)
          </div>
          <ChatInterface />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-3xl p-10 border border-gray-200">
          <div className="bg-white p-4 border-b border-gray-200 font-semibold text-gray-500 uppercase tracking-widest text-xs text-center rounded-xl shadow-sm mb-10 w-full max-w-sm">
            Component: Interactive Itinerary Card (Mindtrip)
          </div>
          <InteractiveItineraryCard />
        </div>
      </div>
    </div>
  );
}

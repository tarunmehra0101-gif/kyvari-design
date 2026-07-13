import React from 'react';

export default function DynamicHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-mindtrip-bg)] py-24 sm:py-32 flex flex-col items-center justify-center text-center">
      {/* Dynamic Background Elements (Awesomic Vibe) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-awesomic blur-3xl animate-pulseSun" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Animated Badge */}
        <div className="mb-8 flex justify-center">
          <span className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-900/10 bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-awesomic-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-awesomic-blue)]"></span>
            </span>
            New AI features available
          </span>
        </div>

        {/* Main Headline (Awesomic Typography + Mindtrip Clarity) */}
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-[var(--color-mindtrip-text)] sm:text-7xl mb-6">
          <span className="block">Design your next adventure</span>
          <span className="cta-gradient-1 block mt-2">in seconds.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto font-sans">
          Experience the world your way. Create completely custom, AI-powered itineraries, find the perfect stays, and share it all with your crew instantly.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-[var(--radius-pill)] bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105"
          >
            Start Planning
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[var(--color-awesomic-blue)] transition-colors flex items-center gap-2">
            View Inspirations <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

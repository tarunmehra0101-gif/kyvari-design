import React from 'react';

export default function Hero() {
  return (
    <section className="bg-paper flex flex-col lg:flex-row items-start justify-between max-w-[1200px] mx-auto px-6 lg:px-8 py-20 gap-16">
      {/* Left Column: Massive Headline */}
      <div className="flex-1 max-w-2xl">
        <h1 className="font-cosmica font-semibold text-[56px] lg:text-display leading-[1.12] text-obsidian tracking-tight">
          Supercharge your design and <br />
          <span className="text-graphite line-through opacity-40">development</span>
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-ember text-white px-3 py-1 rounded-badges font-cosmica font-medium text-[12px] uppercase tracking-wide">
            Y Combinator
          </span>
          <span className="bg-cloud text-graphite px-3 py-1 rounded-badges font-cosmica text-[13px] border border-cloud">
            Top 1% Talent
          </span>
        </div>
      </div>

      {/* Right Column: CTA and Info */}
      <div className="flex-1 max-w-md w-full flex flex-col justify-end pt-4 lg:pt-12">
        <p className="font-cosmica font-regular text-[15px] text-steel leading-[1.45] mb-6">
          Awesomic matches you with top design, marketing, dev, and product talent in as few as 24 hours through a subscription plan. Take a deep breath... and Awesomic.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Work email address" 
            className="flex-1 bg-white border border-transparent focus:border-cloud rounded-inputs px-4 py-3 text-obsidian placeholder-ash font-cosmica text-[14px] outline-none shadow-subtle-3"
          />
          <button 
            type="button" 
            className="bg-obsidian text-white px-6 py-3 rounded-buttons shadow-md font-cosmica font-regular text-[14px] border-[1.5px] border-solid border-[#2c2e34] whitespace-nowrap"
          >
            Get started
          </button>
        </form>
      </div>
    </section>
  );
}

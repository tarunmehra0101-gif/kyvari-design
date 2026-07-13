import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Features() {
  const painPoints = [
    "Hiring takes 1-3 months and distracts from core work",
    "Agencies are too expensive and move too slow",
    "Freelancers are unreliable and require constant management",
    "Quality is inconsistent and unpredictable"
  ];

  return (
    <section className="bg-paper py-20 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Light Context Block */}
        <div className="flex flex-col justify-center">
          <h2 className="font-cosmica font-semibold text-heading sm:text-heading-lg leading-heading-lg text-obsidian tracking-tight mb-6">
            The old way of hiring is broken.
          </h2>
          <p className="font-cosmica font-regular text-body-lg text-steel leading-body-lg mb-8">
            Startups need to move fast. But finding, vetting, and managing top-tier talent usually takes months and costs a fortune. We built Awesomic to fix this.
          </p>
          <div>
            <button className="bg-white text-iron px-6 py-4 rounded-buttons shadow-subtle font-cosmica font-regular text-[14px] border border-cloud hover:bg-gray-50 transition-colors">
              Read how we do it
            </button>
          </div>
        </div>

        {/* Right: Dark Feature Card */}
        <div className="bg-deep-dark rounded-3xl-3 p-[28px] shadow-md flex flex-col justify-center">
          <h3 className="font-cosmica font-bold text-heading-sm text-white mb-8">
            Why traditional hiring fails
          </h3>
          <ul className="space-y-6">
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 rounded-full p-1 shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <span className="font-cosmica font-medium text-subheading text-white">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}

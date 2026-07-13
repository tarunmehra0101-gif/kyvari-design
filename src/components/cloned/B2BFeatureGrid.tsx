import React from 'react';
import { Building2, LineChart, Globe, Zap, ArrowRight } from 'lucide-react';

export default function B2BFeatureGrid() {
  const features = [
    {
      icon: <Globe className="text-[var(--color-awesomic-blue)]" size={32} />,
      title: "Global Destinations",
      description: "Access a curated database of verified locations worldwide, perfect for corporate retreats or client offsites."
    },
    {
      icon: <Building2 className="text-[var(--color-awesomic-purple)]" size={32} />,
      title: "Premium Hotels",
      description: "Exclusive B2B rates and seamless booking integration with top-tier hospitality partners globally."
    },
    {
      icon: <LineChart className="text-[var(--color-awesomic-orange)]" size={32} />,
      title: "Expense Tracking",
      description: "Automatically upload and organize travel receipts, integrated directly into your ERP systems."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Instant AI Itineraries",
      description: "Generate highly personalized, actionable travel plans for your team in seconds using advanced AI."
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[var(--color-awesomic-blue)] uppercase tracking-wide">For Business</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-display text-[var(--color-mindtrip-text)] sm:text-4xl">
            Empower your team to travel smarter
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline corporate travel planning with AI-powered itineraries, exclusive B2B rates, and comprehensive expense management.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="relative p-8 bg-[var(--color-mindtrip-bg)] rounded-[var(--radius-2xl)] border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6">
                <a href="#" className="inline-flex items-center text-sm font-semibold text-[var(--color-awesomic-blue)] group-hover:text-blue-700 transition-colors">
                  Learn more
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-2 pl-6 pr-2 bg-gray-900 rounded-[var(--radius-pill)]">
            <span className="text-sm font-medium text-white">Ready to upgrade your corporate travel?</span>
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors">
              Book a Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

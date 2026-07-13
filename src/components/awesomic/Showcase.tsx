import React from 'react';

export default function Showcase() {
  const categories = [
    {
      title: "Web & product",
      image: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/698b4d1e064d84b3b0931f2d_web-and-prod-card.avif",
      tags: ["Web", "UX/UI design", "Mobile app"]
    },
    {
      title: "Graphic design",
      image: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/698b4e0e0361d2746acc91ba_Graphic%20design%20card.avif",
      tags: ["Social media creative", "Banners", "Pitch decks"]
    },
    {
      title: "Brand identity",
      image: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/699ee05f16453d7ac44ef111_brand-hero01.avif",
      tags: ["Logo design", "Brand guidelines"]
    },
    {
      title: "No-code development",
      image: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/698b5725e5db271f48eb9d34_No-code%20development%20card.avif",
      tags: ["Webflow", "Framer", "And more"]
    }
  ];

  return (
    <section className="bg-paper py-20 px-4 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8 px-4 sm:px-8 max-w-[1400px] mx-auto snap-x">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[340px] md:w-[400px] bg-white rounded-cards border border-cloud shadow-none overflow-hidden flex flex-col snap-center"
          >
            {/* Image Top Half */}
            <div className="h-[240px] w-full bg-mist relative">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Bottom Half */}
            <div className="p-card flex flex-col justify-between flex-1">
              <h3 className="font-cosmica font-semibold text-subheading text-obsidian mb-4">
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="border border-cloud bg-transparent text-graphite rounded-badges px-2 py-1 font-cosmica font-regular text-[13px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

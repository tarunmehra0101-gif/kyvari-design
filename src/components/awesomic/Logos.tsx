import React from 'react';

export default function Logos() {
  const logos = [
    { name: "YC", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb072_yc-new-png.png" },
    { name: "Coca-Cola", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb06e_coca-cola-new-png.png" },
    { name: "Disney", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb070_disney-new-png.png" },
    { name: "Genesis", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa42_genesis.avif" },
    { name: "Udemy", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb06d_udemy-new-png.png" },
    { name: "EY", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb06f_ey-new-png.png" },
    { name: "PandaDoc", url: "https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb071_panda-doc-new-png.png" }
  ];

  return (
    <section className="bg-paper py-12 border-y border-cloud overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <p className="text-center font-cosmica text-[12px] text-fog uppercase tracking-widest mb-8">
          Trusted by 3,000+ companies globally
        </p>
        <div className="flex items-center justify-between flex-wrap gap-8">
          {logos.map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.url} 
              alt={logo.name} 
              className="h-6 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

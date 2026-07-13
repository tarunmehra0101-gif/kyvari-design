import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-subtle-2 h-16 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <div className="font-cosmica font-bold text-xl text-obsidian tracking-tight">Awesomic</div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-body font-cosmica text-graphite font-regular">
        <a href="#" className="hover:text-obsidian transition-colors">How it works</a>
        <a href="#" className="hover:text-obsidian transition-colors">Pricing</a>
        <a href="#" className="hover:text-obsidian transition-colors">Our work</a>
        <a href="#" className="hover:text-obsidian transition-colors">Log in</a>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-obsidian text-white px-4 py-2 rounded-buttons shadow-md font-cosmica font-regular text-[14px] border-[1.5px] border-solid border-[#2c2e34]">
          Book a Demo
        </button>
      </div>
    </nav>
  );
}

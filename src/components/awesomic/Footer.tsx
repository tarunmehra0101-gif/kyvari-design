import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-obsidian pt-24 pb-12 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="font-cosmica font-bold text-[32px] text-white mb-6 tracking-tight">
              awesomic
            </h2>
            <p className="font-cosmica font-regular text-[15px] text-fog leading-[1.45] max-w-sm">
              The talent marketplace that matches you with top design and development professionals in 24 hours.
            </p>
          </div>
          
          <div>
            <h4 className="font-cosmica font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 font-cosmica font-regular text-[14px] text-ash">
              <li><a href="#" className="hover:text-white transition-colors">Web & Product</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">No-code</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cosmica font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 font-cosmica font-regular text-[14px] text-ash">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wall of Love</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cosmica font-semibold text-white mb-4">Follow us</h4>
            <ul className="space-y-3 font-cosmica font-regular text-[14px] text-ash">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-cosmica font-regular text-[13px] text-fog">
          <div>© 2026 Awesomic Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

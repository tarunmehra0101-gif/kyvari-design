import React from 'react';

export default function ImageDivider({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="w-full bg-paper py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto h-[400px] md:h-[600px] w-full rounded-full-3 overflow-hidden shadow-subtle-4">
        <img 
          src={imageUrl} 
          alt="Breakthrough Divider" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

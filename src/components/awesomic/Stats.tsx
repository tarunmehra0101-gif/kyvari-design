import React from 'react';

export default function Stats() {
  const stats = [
    { value: "20 000+", label: "completed projects" },
    { value: "4 000+", label: "customers worldwide" },
    { value: "24h", label: "avg turnaround time" }
  ];

  return (
    <section className="bg-paper py-20 px-6 lg:px-8 border-t border-cloud">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-baseline gap-3">
            <span className="font-cosmica font-semibold text-[56px] text-obsidian tracking-tight">
              {stat.value}
            </span>
            <span className="font-cosmica font-regular text-[14px] text-steel max-w-[100px] leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Social proof strip — fictional agencies set in the display face. */
const agencies = [
  "Saffron Trails",
  "Meridian Voyages",
  "Atlas & Anchor",
  "Golden Hour Travel",
  "Nomad North",
  "Cinnamon Route",
  "Bluewater Journeys",
  "Terra Firma Tours",
];

export function LogoMarquee() {
  const row = [...agencies, ...agencies]; // duplicated for a seamless loop
  return (
    <section
      aria-label="Trusted by travel agencies"
      className="border-y border-line bg-surface/60 py-8"
    >
      <p className="text-eyebrow mb-6 text-center text-ink-mute">
        Trusted by 2,400+ agencies planning 60,000 trips a year
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14">
          {row.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= agencies.length}
              className="whitespace-nowrap font-display text-xl font-medium text-ink-mute/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

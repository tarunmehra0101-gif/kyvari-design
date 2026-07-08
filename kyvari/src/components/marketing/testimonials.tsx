import { Reveal } from "@/components/motion/reveal";
import { Avatar } from "@/components/ui/avatar";

const quotes = [
  {
    quote:
      "I sent a Maldives proposal from the back of an Uber. The client booked before I got home. That has never happened in eleven years of doing this.",
    name: "Meera Kapoor",
    role: "Founder, Saffron Trails · Mumbai",
  },
  {
    quote:
      "The share pages look like we hired a design studio. Clients forward them to friends — two of my last five bookings came from those forwards.",
    name: "Daniel Obi",
    role: "Director, Atlas & Anchor · London",
  },
  {
    quote:
      "Dwell-time alerts changed how we follow up. We call when they're literally reading the itinerary. Close rate is up a third this quarter.",
    name: "Sofia Marchetti",
    role: "Senior consultant, Meridian Voyages · Milan",
  },
];

export function Testimonials() {
  return (
    <Reveal as="section" className="px-4 py-24 sm:px-6" stagger={0.12}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p data-reveal className="text-eyebrow text-lagoon-600">
            Loved by closers
          </p>
          <h2 data-reveal className="text-display-lg mt-3 text-ink">
            Agents don&apos;t want another tool. They want their evenings back.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map(({ quote, name, role }) => (
            <figure key={name} data-reveal className="card flex flex-col p-7">
              <blockquote className="flex-1 font-display text-[1.15rem] leading-relaxed text-ink">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Avatar name={name} />
                <div>
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-ink-mute">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

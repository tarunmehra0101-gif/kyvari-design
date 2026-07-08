import { Reveal } from "@/components/motion/reveal";
import { Avatar } from "@/components/ui/avatar";

/** One voice, given room — a single editorial pull-quote. */
export function Testimonials() {
  return (
    <Reveal as="section" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <figure data-reveal className="mx-auto max-w-3xl text-center">
        <blockquote className="text-display-md text-ink [text-wrap:balance]">
          “I sent a Maldives proposal from the back of an Uber. The client
          booked before I got home. That has never happened in eleven years of
          doing this.”
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-3">
          <Avatar name="Meera Kapoor" />
          <span className="text-left text-sm">
            <span className="block font-medium text-ink">Meera Kapoor</span>
            <span className="text-ink-mute">Founder, Saffron Trails · Mumbai</span>
          </span>
        </figcaption>
      </figure>

      <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-8 border-t border-line pt-10 text-sm leading-relaxed text-ink-soft sm:grid-cols-2">
        <p data-reveal>
          “The share pages look like we hired a design studio. Two of my last
          five bookings came from clients forwarding them to friends.”
          <span className="mt-2 block text-ink-mute">Daniel Obi — Atlas &amp; Anchor, London</span>
        </p>
        <p data-reveal>
          “Dwell-time alerts changed how we follow up. We call while they&apos;re
          literally reading the itinerary. Close rate is up a third.”
          <span className="mt-2 block text-ink-mute">Sofia Marchetti — Meridian Voyages, Milan</span>
        </p>
      </div>
    </Reveal>
  );
}

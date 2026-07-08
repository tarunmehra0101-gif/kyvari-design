"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/button";
import { ProductFrame } from "./product-frame";

gsap.registerPlugin(ScrollTrigger);

/**
 * Landing hero — centered editorial headline over a large product frame.
 * GSAP: staggered line entrance, then a gentle perspective settle on the
 * frame as you scroll. Quiet on purpose; the serif does the talking.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        el.querySelectorAll("[data-hero-line]"),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.09 }
      ).fromTo(
        el.querySelector("[data-hero-frame]"),
        { opacity: 0, y: 64, scale: 0.975 },
        { opacity: 1, y: 0, scale: 1, duration: 1.3 },
        "-=0.75"
      );

      // subtle parallax: the frame drifts up slightly slower than the page
      gsap.to(el.querySelector("[data-hero-frame]"), {
        y: -28,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="px-5 pb-14 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p data-hero-line className="text-eyebrow text-ink-mute">
            The AI copilot for travel agents
          </p>
          <h1 className="text-display-xl mt-5 text-ink">
            <span data-hero-line className="block">
              The itinerary your
            </span>
            <span data-hero-line className="block">
              client says <em>yes</em> to.
            </span>
          </h1>
          <p
            data-hero-line
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Kyvari reads the brief, gathers flights, stays and experiences from
            every source you use, and drafts a beautiful, bookable trip — while
            you stay the expert your client trusts.
          </p>
          <div
            data-hero-line
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink href="/app" size="lg">
              Start planning free
            </ButtonLink>
            <ButtonLink href="#product" variant="secondary" size="lg">
              See how it works
            </ButtonLink>
          </div>
          <p data-hero-line className="mt-5 text-sm text-ink-mute">
            14-day Pro trial · no card required
          </p>
        </div>

        <div data-hero-frame className="mt-16 sm:mt-20">
          <ProductFrame />
        </div>

        {/* quiet trust line */}
        <p
          data-hero-line
          className="mt-10 text-center text-sm text-ink-mute"
        >
          Trusted by 2,400+ independent agents and agencies —{" "}
          <span className="text-ink-soft">
            Saffron Trails, Atlas &amp; Anchor, Meridian Voyages, Nomad North
          </span>{" "}
          and more
        </p>
      </div>
    </section>
  );
}

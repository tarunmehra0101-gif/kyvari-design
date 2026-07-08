"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Sparkles, Star, TrendingUp } from "lucide-react";
import { GlobeLoader } from "./globe-loader";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

/**
 * Landing hero. GSAP entrance timeline + a gentle scroll parallax on the
 * floating product cards; the 3D globe is lazy-loaded beside the copy.
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
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 }
      ).fromTo(
        el.querySelectorAll("[data-hero-card]"),
        { opacity: 0, y: 32, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.14 },
        "-=0.7"
      );

      // Parallax drift as the hero scrolls away
      el.querySelectorAll<HTMLElement>("[data-hero-card]").forEach((card, i) => {
        gsap.to(card, {
          y: (i + 1) * -34,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden px-4 pt-36 pb-20 sm:px-6 lg:pt-44 lg:pb-28"
    >
      {/* ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_75%_12%,#d7eee5_0%,transparent_60%),radial-gradient(45%_40%_at_8%_85%,#fdeee8_0%,transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---- Copy ---- */}
        <div>
          <div data-hero-line>
            <Badge tone="lagoon" className="mb-6 py-1.5 pl-2 pr-3">
              <Sparkles className="h-3.5 w-3.5" />
              The AI copilot for travel agents
            </Badge>
          </div>

          <h1 className="text-display-xl text-ink">
            <span data-hero-line className="block">
              From client brief
            </span>
            <span data-hero-line className="block">
              to <em className="not-italic text-lagoon-600">booked</em>,
            </span>
            <span data-hero-line className="block">
              beautifully.
            </span>
          </h1>

          <p
            data-hero-line
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            Kyvari reads the brief, pulls flights, stays and experiences from
            every source you use, and assembles a polished itinerary under your
            brand — then tells you the moment your client falls in love with it.
          </p>

          <div data-hero-line className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/app" size="lg">
              Start free
            </ButtonLink>
            <ButtonLink href="#product" variant="secondary" size="lg">
              See the product
            </ButtonLink>
          </div>

          <p data-hero-line className="mt-5 text-sm text-ink-mute">
            14-day Pro trial · No card required · Built for agencies of one to
            one hundred
          </p>
        </div>

        {/* ---- Visual: globe + floating product cards ---- */}
        <div className="relative mx-auto aspect-square w-full max-w-[540px]">
          <GlobeLoader />

          {/* Itinerary stop card */}
          <div
            data-hero-card
            className="card absolute -left-2 top-[14%] w-60 p-4 shadow-lift sm:-left-6"
          >
            <p className="text-eyebrow text-lagoon-600">Day 3 · Santorini</p>
            <p className="mt-1.5 font-display text-[1.05rem] font-semibold leading-snug text-ink">
              Caldera catamaran cruise
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm text-ink-soft">
              <Star className="h-3.5 w-3.5 fill-dune-500 text-dune-500" />
              4.9 · $180 pp · 6 hrs
            </p>
          </div>

          {/* Live engagement toast */}
          <div
            data-hero-card
            className="card absolute -right-1 top-[52%] flex w-64 items-start gap-3 p-4 shadow-lift sm:-right-8"
          >
            <span className="animate-live mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon-500" />
            <div>
              <p className="text-sm font-semibold text-ink">
                Rohan is reading it now
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-mute">
                <Eye className="h-3.5 w-3.5" /> 6m 12s on “Santorini, Slowly”
              </p>
            </div>
          </div>

          {/* Conversion stat chip */}
          <div
            data-hero-card
            className="card absolute bottom-[6%] left-[12%] flex items-center gap-3 p-4 shadow-lift"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lagoon-50 text-lagoon-600">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xl font-bold tracking-tight text-ink">31%</p>
              <p className="text-xs text-ink-mute">sent → booked this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

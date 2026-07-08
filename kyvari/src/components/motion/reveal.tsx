"use client";

import { createElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ElementType, ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll reveal container.
 *
 * Any descendant carrying `data-reveal` fades/rises in (staggered) when this
 * wrapper enters the viewport. CSS pre-hides those elements only when JS is
 * running AND the user allows motion, so there is no flash and no content is
 * ever lost — reduced-motion users simply see everything in place.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  stagger = 0.09,
  y = 28,
  start = "top 78%",
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!targets.length) return;
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger,
          overwrite: "auto",
          scrollTrigger: { trigger: root, start, once: true },
        }
      );
    });
    return () => mm.revert();
  }, [stagger, y, start]);

  return createElement(Tag, { ref, className }, children);
}

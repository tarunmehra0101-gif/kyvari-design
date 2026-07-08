"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Lazy gate for the three.js globe.
 * - Code-splits the whole three/r3f bundle out of the initial page load.
 * - Skips WebGL entirely for prefers-reduced-motion users, who get a calm
 *   static composition instead.
 */
const Globe = dynamic(() => import("./globe"), { ssr: false, loading: () => null });

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="relative h-full w-full rounded-full border border-line-strong bg-parchment/40"
    >
      <div className="absolute inset-6 rounded-full border border-line" />
      <div className="absolute inset-16 rounded-full border border-line" />
    </div>
  );
}

export function GlobeLoader() {
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced === null) return null; // avoid hydration mismatch flash
  return reduced ? <StaticFallback /> : <Globe />;
}

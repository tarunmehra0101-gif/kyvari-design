"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Check, CircleDashed, Loader2 } from "lucide-react";
import { KyvariMark } from "@/components/ui/logo";
import { buildSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * The conversation with Kyvari: client brief, live build steps, refine
 * composer. Deliberately monochrome — the itinerary is the colorful thing.
 */
export function BuildFeed({ brief }: { brief: string }) {
  const reduce = useReducedMotion();
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 12 },
    show: (i: number) =>
      reduce
        ? {}
        : {
            opacity: 1,
            y: 0,
            transition: { delay: 0.07 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
          },
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        {/* Client brief bubble */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          custom={0}
          className="ml-8 rounded-2xl rounded-br-md bg-parchment px-4 py-3 text-sm leading-relaxed text-ink"
        >
          {brief}
        </motion.div>

        {/* AI response */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          custom={1}
          className="flex items-start gap-3"
        >
          <KyvariMark className="mt-0.5 h-6 w-6 shrink-0" />
          <p className="text-sm leading-relaxed text-ink">
            On it — drafting the trip now. Watch it come together on the
            right, and nudge me anytime.
          </p>
        </motion.div>

        {/* Build steps */}
        <motion.ol
          variants={item}
          initial="hidden"
          animate="show"
          custom={2}
          className="ml-9 space-y-1 border-l border-line pl-4"
          aria-label="AI build progress"
        >
          {buildSteps.map((step) => (
            <li key={step.id} className="flex items-start gap-2.5 py-1.5">
              {step.state === "done" && (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" />
              )}
              {step.state === "active" && (
                <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-ink motion-reduce:animate-none" />
              )}
              {step.state === "todo" && (
                <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute/60" />
              )}
              <div>
                <p
                  className={cn(
                    "text-sm leading-snug",
                    step.state === "todo" ? "text-ink-mute" : "text-ink",
                    step.state === "active" && "font-medium"
                  )}
                >
                  {step.label}
                </p>
                {step.detail && (
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-mute">
                    {step.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </motion.ol>
      </div>

      {/* Refine composer */}
      <div className="border-t border-line p-4">
        <form
          className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-4 pr-1.5 transition-colors focus-within:border-ink/30"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="refine" className="sr-only">
            Ask Kyvari to refine the itinerary
          </label>
          <input
            id="refine"
            placeholder="Make day 2 slower, swap lunch for vegetarian…"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-mute"
          />
          <button
            type="submit"
            aria-label="Send refinement"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-black"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

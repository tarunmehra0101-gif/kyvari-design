"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Check, CircleDashed, Loader2, Sparkles } from "lucide-react";
import { KyvariMark } from "@/components/ui/logo";
import { buildSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Left rail of the builder: the conversation with Kyvari.
 * Shows the client brief, the AI's live build steps, and a refine composer.
 */
export function BuildFeed({ brief }: { brief: string }) {
  const reduce = useReducedMotion();
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 14 },
    show: (i: number) =>
      reduce
        ? {}
        : {
            opacity: 1,
            y: 0,
            transition: { delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
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
          className="ml-8 rounded-3xl rounded-br-lg bg-lagoon-500 px-4 py-3 text-sm leading-relaxed text-white shadow-soft"
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
          <KyvariMark className="mt-0.5 h-7 w-7 shrink-0" />
          <p className="text-sm leading-relaxed text-ink">
            On it — building the itinerary now. Watch it come together on the
            right, and nudge me anytime.
          </p>
        </motion.div>

        {/* Build steps */}
        <motion.ol
          variants={item}
          initial="hidden"
          animate="show"
          custom={2}
          className="ml-10 space-y-1 rounded-2xl border border-line bg-surface p-2"
          aria-label="AI build progress"
        >
          {buildSteps.map((step) => (
            <li
              key={step.id}
              className={cn(
                "flex items-start gap-2.5 rounded-xl px-3 py-2",
                step.state === "active" && "bg-lagoon-50"
              )}
            >
              {step.state === "done" && (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-600" />
              )}
              {step.state === "active" && (
                <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-lagoon-600 motion-reduce:animate-none" />
              )}
              {step.state === "todo" && (
                <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute" />
              )}
              <div>
                <p
                  className={cn(
                    "text-sm font-medium leading-snug",
                    step.state === "todo" ? "text-ink-mute" : "text-ink"
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
          className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-4 pr-1.5 shadow-soft transition-colors focus-within:border-lagoon-300"
          onSubmit={(e) => e.preventDefault()}
        >
          <Sparkles className="h-4 w-4 shrink-0 text-lagoon-500" aria-hidden />
          <label htmlFor="refine" className="sr-only">
            Ask Kyvari to refine the itinerary
          </label>
          <input
            id="refine"
            placeholder="Swap Day 2 lunch for something vegetarian…"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-mute"
          />
          <button
            type="submit"
            aria-label="Send refinement"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lagoon-500 text-white transition-colors hover:bg-lagoon-600"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

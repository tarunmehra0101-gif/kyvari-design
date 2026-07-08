"use client";

import { useState } from "react";
import { ArrowUp, Mic, Paperclip, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const suggestions = [
  "7-day Bali family escape",
  "Santorini honeymoon under $6k",
  "Kyoto in autumn, tea & temples",
  "Swiss Alps by scenic rail",
];

/**
 * The "start anything here" composer on the app home.
 * Purely presentational in this prototype — wire `onSubmit` to your API.
 */
export function BriefComposer() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section aria-label="New itinerary brief">
      <div
        className={cn(
          "card p-3 transition-all duration-300",
          focused && "border-lagoon-300 shadow-lift"
        )}
      >
        <label htmlFor="brief" className="sr-only">
          Describe the trip
        </label>
        <textarea
          id="brief"
          rows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Describe the trip, paste a WhatsApp chat, or drop a PDF — "Plan a 7-day honeymoon in Santorini for $5k"…'
          className="w-full resize-none rounded-xl bg-transparent px-3 pt-2 text-[0.95rem] leading-relaxed text-ink outline-none placeholder:text-ink-mute"
        />
        <div className="flex items-center justify-between px-1 pt-1">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Attach a brief or brochure"
              className="rounded-full p-2.5 text-ink-mute transition-colors hover:bg-parchment hover:text-ink"
            >
              <Paperclip className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              aria-label="Dictate the brief"
              className="rounded-full p-2.5 text-ink-mute transition-colors hover:bg-parchment hover:text-ink"
            >
              <Mic className="h-4.5 w-4.5" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Generate itinerary"
            disabled={!value.trim()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lagoon-500 text-white shadow-soft transition-all hover:bg-lagoon-600 disabled:cursor-not-allowed disabled:bg-parchment disabled:text-ink-mute"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Example briefs">
        {suggestions.map((s) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => setValue(s)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink-soft transition-all hover:border-lagoon-300 hover:text-lagoon-700"
            >
              <Sparkles className="h-3.5 w-3.5 text-lagoon-500" />
              {s}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { Check, Loader2 } from "lucide-react";
import { sources } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * The aggregation strip — where "multi-source" becomes visible.
 * Quiet chips: a check or spinner plus a count, nothing louder.
 */
export function SourceStrip() {
  return (
    <div
      role="status"
      aria-label="Connected sources"
      className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {sources.map((s) => (
        <span
          key={s.id}
          className={cn(
            "inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium",
            s.status === "parsing" ? "text-ink" : "text-ink-soft"
          )}
        >
          {s.status === "parsing" ? (
            <Loader2 className="h-3 w-3 animate-spin motion-reduce:animate-none" />
          ) : (
            <Check className="h-3 w-3 text-moss-500" />
          )}
          {s.name}
          <span className="tabular-nums text-ink-mute">{s.itemsFound}</span>
        </span>
      ))}
    </div>
  );
}

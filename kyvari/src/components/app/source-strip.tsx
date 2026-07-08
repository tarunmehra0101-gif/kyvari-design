import { Check, Loader2 } from "lucide-react";
import { sources } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * The aggregation strip — where "multi-source" becomes visible.
 * Each chip is a connected source with its live contribution count.
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
            "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold",
            s.status === "parsing"
              ? "border-dune-100 bg-dune-50 text-dune-600"
              : "border-line bg-surface text-ink-soft"
          )}
        >
          {s.status === "parsing" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin motion-reduce:animate-none" />
          ) : (
            <Check className="h-3.5 w-3.5 text-lagoon-600" />
          )}
          {s.name}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[0.65rem]",
              s.status === "parsing"
                ? "bg-dune-100 text-dune-600"
                : "bg-lagoon-50 text-lagoon-700"
            )}
          >
            {s.itemsFound}
          </span>
        </span>
      ))}
    </div>
  );
}

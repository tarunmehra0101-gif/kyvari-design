import { funnel } from "@/lib/data";

/**
 * Conversion funnel as an ordered, direct-labeled bar list.
 * Single teal hue stepped light→dark (validated ordinal ramp) — every value
 * is visible in text, so no tooltip layer is needed.
 */
const RAMP = ["#66bfa6", "#31a487", "#0b8a6e", "#0a6b57"];

export function ConversionFunnel() {
  const max = funnel[0].count;
  return (
    <ol className="space-y-5">
      {funnel.map((stage, i) => {
        const pct = Math.round((stage.count / max) * 100);
        return (
          <li key={stage.stage}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-ink">{stage.stage}</span>
              <span className="tabular-nums text-ink-soft">
                <span className="font-semibold text-ink">{stage.count}</span>
                <span className="text-ink-mute"> · {pct}%</span>
              </span>
            </div>
            <div
              className="mt-1.5 h-4 rounded-[4px] bg-parchment"
              role="img"
              aria-label={`${stage.stage}: ${stage.count} itineraries, ${pct}% of sent`}
            >
              <div
                className="h-full rounded-[4px]"
                style={{ width: `${pct}%`, background: RAMP[i] }}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

import { Minus, Plus } from "lucide-react";

/**
 * Stylised route map — coastline, terrain contours, dotted route and
 * numbered ink pins, all tokens. Swap for Mapbox/Google in production;
 * the panel's footprint and header stay identical.
 */
export function MapPanel({
  stops,
  place,
}: {
  stops: string[];
  place: string;
}) {
  // pins spaced along a fixed bezier — deterministic, no map SDK needed
  const path = [
    { x: 84, y: 300 },
    { x: 128, y: 232 },
    { x: 170, y: 176 },
    { x: 216, y: 120 },
    { x: 252, y: 76 },
  ];
  const pins = stops.slice(0, 5).map((label, i) => ({
    ...path[Math.round((i * (path.length - 1)) / Math.max(1, stops.length - 1))],
    n: i + 1,
    label,
  }));

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium text-ink">Route</p>
        <p className="text-xs text-ink-mute">{place}</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 320 360" className="block w-full" role="img" aria-label={`Map of the day's route through ${place}`}>
          <rect width="320" height="360" fill="#f2f0e9" />
          {/* water */}
          <path d="M0 360 C40 300 20 240 70 200 C110 168 100 110 150 76 C185 52 240 60 320 24 L320 360 Z" fill="#e9e6dd" />
          <path d="M0 360 C40 300 20 240 70 200 C110 168 100 110 150 76 C185 52 240 60 320 24" fill="none" stroke="#d8d4c8" strokeWidth="1.5" />
          {/* contours */}
          <path d="M-10 120 C60 100 90 140 160 122 C230 104 260 140 330 120" fill="none" stroke="#e4e1d6" strokeWidth="1" />
          <path d="M-10 180 C60 160 90 200 160 182 C230 164 260 200 330 180" fill="none" stroke="#e4e1d6" strokeWidth="1" />
          {/* route */}
          <path
            d="M84 300 C104 262 116 250 128 232 C146 206 156 196 170 176 C188 150 200 140 216 120 C230 102 240 92 252 76"
            fill="none"
            stroke="#1b1b18"
            strokeWidth="1.6"
            strokeDasharray="1 6"
            strokeLinecap="round"
          />
          {pins.map((p) => (
            <g key={p.n}>
              <circle cx={p.x} cy={p.y} r="11" fill="#1b1b18" />
              <text
                x={p.x}
                y={p.y + 3.5}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="600"
                fill="#faf9f6"
              >
                {p.n}
              </text>
            </g>
          ))}
        </svg>

        {/* zoom chrome (presentational) */}
        <div className="absolute right-3 top-3 flex flex-col overflow-hidden rounded-lg border border-line bg-white/90 backdrop-blur-sm">
          <button type="button" aria-label="Zoom in" className="p-1.5 text-ink-soft hover:text-ink">
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button type="button" aria-label="Zoom out" className="border-t border-line p-1.5 text-ink-soft hover:text-ink">
            <Minus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* legend rows */}
      <ol className="divide-y divide-line text-sm">
        {pins.map((p) => (
          <li key={p.n} className="flex items-center gap-3 px-4 py-2.5">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[0.6rem] font-semibold text-paper">
              {p.n}
            </span>
            <span className="truncate text-ink-soft">{p.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

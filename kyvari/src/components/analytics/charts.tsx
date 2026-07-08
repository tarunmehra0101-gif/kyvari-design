"use client";

/**
 * Dashboard charts (Recharts), styled to the Kyvari chart tokens:
 * thin marks, hairline grid, recessive axes, categorical colors in the
 * CVD-validated order (chart-1 lagoon, chart-2 sky), text in ink tokens.
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { engagementByWeek, revenueByDestination } from "@/lib/data";
import { formatMoney } from "@/lib/utils";

const GRID = "var(--color-chart-grid)";
const AXIS = "var(--color-chart-axis)";
const SERIES_1 = "var(--color-chart-1)";
const SERIES_2 = "var(--color-chart-2)";

const axisTick = { fill: AXIS, fontSize: 12 } as const;

/* ---------------- shared tooltip ---------------- */

interface TipPayload {
  name?: string;
  value?: number | string;
  color?: string;
}

function ChartTip({
  active,
  label,
  payload,
  format = (v) => String(v),
}: {
  active?: boolean;
  label?: string;
  payload?: TipPayload[];
  format?: (v: number | string) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-line bg-surface px-3.5 py-2.5 shadow-lift">
      <p className="text-xs font-semibold text-ink">{label}</p>
      <ul className="mt-1.5 space-y-1">
        {payload.map((p) => (
          <li key={p.name} className="flex items-center gap-2 text-xs text-ink-soft">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: p.color }}
              aria-hidden
            />
            {p.name}:{" "}
            <span className="font-semibold tabular-nums text-ink">
              {format(p.value ?? "")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- legend ---------------- */

function Legend({ items }: { items: Array<{ label: string; color: string }> }) {
  return (
    <ul className="flex flex-wrap gap-4">
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: i.color }} aria-hidden />
          {i.label}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- accessible data table fallback ---------------- */

function DataTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: Array<Array<string | number>>;
}) {
  return (
    <details className="mt-3">
      <summary className="cursor-pointer text-xs font-medium text-ink-mute hover:text-ink">
        View as table
      </summary>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line text-ink-mute">
              {head.map((h) => (
                <th key={h} scope="col" className="py-1.5 pr-4 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-line/60 text-ink-soft">
                {r.map((c, j) => (
                  <td key={j} className="py-1.5 pr-4 tabular-nums">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

/* ---------------- engagement (2-series line) ---------------- */

export function EngagementChart() {
  return (
    <div>
      <Legend
        items={[
          { label: "Itinerary views", color: SERIES_1 },
          { label: "Client sessions", color: SERIES_2 },
        ]}
      />
      <div className="mt-4 h-64" role="img" aria-label="Itinerary views and client sessions per week, both rising over the last six weeks">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={engagementByWeek} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="week" tick={axisTick} axisLine={false} tickLine={false} dy={6} />
            <YAxis tick={axisTick} axisLine={false} tickLine={false} width={46} />
            <Tooltip content={<ChartTip />} cursor={{ stroke: GRID, strokeWidth: 1 }} />
            <Line
              name="Itinerary views"
              dataKey="views"
              stroke={SERIES_1}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 2, stroke: "var(--color-surface)" }}
            />
            <Line
              name="Client sessions"
              dataKey="sessions"
              stroke={SERIES_2}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 2, stroke: "var(--color-surface)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <DataTable
        caption="Weekly engagement"
        head={["Week", "Itinerary views", "Client sessions"]}
        rows={engagementByWeek.map((w) => [w.week, w.views, w.sessions])}
      />
    </div>
  );
}

/* ---------------- revenue by destination (single-hue bars) ---------------- */

export function RevenueChart() {
  return (
    <div>
      <div className="h-64" role="img" aria-label="Revenue by destination this quarter; Santorini leads at $26,400">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueByDestination}
            layout="vertical"
            margin={{ top: 0, right: 12, left: 8, bottom: 0 }}
            barCategoryGap="32%"
          >
            <CartesianGrid stroke={GRID} horizontal={false} />
            <XAxis
              type="number"
              tick={axisTick}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${Math.round(v / 1000)}k`}
            />
            <YAxis
              type="category"
              dataKey="destination"
              tick={{ ...axisTick, fill: "var(--color-ink-soft)" }}
              axisLine={false}
              tickLine={false}
              width={82}
            />
            <Tooltip
              content={<ChartTip format={(v) => formatMoney(Number(v))} />}
              cursor={{ fill: "var(--color-parchment)", opacity: 0.5 }}
            />
            <Bar
              name="Revenue"
              dataKey="revenue"
              fill={SERIES_1}
              radius={[0, 4, 4, 0]}
              maxBarSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <DataTable
        caption="Revenue by destination"
        head={["Destination", "Revenue"]}
        rows={revenueByDestination.map((r) => [r.destination, formatMoney(r.revenue)])}
      />
    </div>
  );
}

import { ArrowUpRight, Flame } from "lucide-react";
import { EngagementChart, RevenueChart } from "@/components/analytics/charts";
import { ConversionFunnel } from "@/components/analytics/funnel";
import { Avatar } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/ui/badge";
import { clientActivity, kpis, topItineraries } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = { title: "Analytics" };

const ranges = ["7 days", "30 days", "90 days", "This year"];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
      {/* Header + range filter */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-display-lg text-ink">Analytics</h1>
          <p className="mt-2 text-ink-soft">
            How clients are engaging with your itineraries.
          </p>
        </div>
        <div role="group" aria-label="Date range" className="flex rounded-full border border-line bg-surface p-1">
          {ranges.map((r, i) => (
            <button
              key={r}
              type="button"
              aria-pressed={i === 1}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                i === 1
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      {/* KPI tiles */}
      <dl className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="card p-5 sm:p-6">
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
              {kpi.label}
            </dt>
            <dd className="mt-2 flex items-baseline gap-2.5">
              <span className="font-display text-4xl font-semibold tracking-tight text-ink">
                {kpi.value}
              </span>
              <span className="flex items-center gap-0.5 text-sm font-semibold text-status-good-deep">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                {kpi.delta}
              </span>
            </dd>
            <p className="mt-1 text-xs text-ink-mute">{kpi.caption}</p>
          </div>
        ))}
      </dl>

      {/* Engagement + funnel */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section aria-labelledby="engagement" className="card p-6 lg:col-span-2">
          <h2 id="engagement" className="text-display-sm text-ink">
            Engagement, last 6 weeks
          </h2>
          <div className="mt-5">
            <EngagementChart />
          </div>
        </section>

        <section aria-labelledby="funnel" className="card p-6">
          <h2 id="funnel" className="text-display-sm text-ink">
            Conversion funnel
          </h2>
          <p className="mt-1 text-xs text-ink-mute">Last 30 days, 38 sent</p>
          <div className="mt-6">
            <ConversionFunnel />
          </div>
        </section>
      </div>

      {/* Revenue + activity */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section aria-labelledby="revenue" className="card p-6 lg:col-span-2">
          <h2 id="revenue" className="text-display-sm text-ink">
            Revenue by destination
          </h2>
          <p className="mt-1 text-xs text-ink-mute">Confirmed bookings this quarter</p>
          <div className="mt-5">
            <RevenueChart />
          </div>
        </section>

        <section aria-labelledby="activity" className="card p-6">
          <h2 id="activity" className="text-display-sm flex items-center gap-2 text-ink">
            <Flame className="h-4.5 w-4.5 text-clay-500" aria-hidden />
            Client activity
          </h2>
          <ul className="mt-5 space-y-5">
            {clientActivity.map((a) => (
              <li key={a.id} className="flex items-start gap-3">
                <Avatar name={a.client} size="sm" className="mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-ink">{a.client}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{a.action}</p>
                  <p
                    className={cn(
                      "mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                      a.signal === "hot" && "text-clay-500",
                      a.signal === "booked" && "text-status-good-deep",
                      a.signal === "normal" && "text-ink-mute"
                    )}
                  >
                    {a.when}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Top itineraries table */}
      <section aria-labelledby="top" className="card mt-6 overflow-hidden">
        <h2 id="top" className="text-display-sm border-b border-line px-6 py-5 text-ink">
          Top itineraries
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-semibold uppercase tracking-wide text-ink-mute">
                <th scope="col" className="px-6 py-3">Itinerary</th>
                <th scope="col" className="px-6 py-3">Client</th>
                <th scope="col" className="px-6 py-3 text-right">Views</th>
                <th scope="col" className="px-6 py-3 text-right">Avg. dwell</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {topItineraries.map((row) => (
                <tr
                  key={row.title}
                  className="border-b border-line/60 transition-colors last:border-0 hover:bg-paper"
                >
                  <td className="px-6 py-3.5 font-medium text-ink">{row.title}</td>
                  <td className="px-6 py-3.5 text-ink-soft">{row.client}</td>
                  <td className="px-6 py-3.5 text-right tabular-nums text-ink">{row.views}</td>
                  <td className="px-6 py-3.5 text-right tabular-nums text-ink">{row.dwell}</td>
                  <td className="px-6 py-3.5">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

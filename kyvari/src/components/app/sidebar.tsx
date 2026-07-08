"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Compass,
  Home,
  Plus,
  Settings,
} from "lucide-react";
import { KyvariLogo } from "@/components/ui/logo";
import { Avatar } from "@/components/ui/avatar";
import { agency } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/app", label: "Home", Icon: Home, exact: true },
  { href: "/app/itineraries", label: "Itineraries", Icon: Compass, exact: false },
  { href: "/app/analytics", label: "Analytics", Icon: BarChart3, exact: false },
];

/**
 * App navigation. Fixed rail on desktop; slim top bar + bottom tab bar on
 * mobile so the builder keeps its full width on small screens.
 */
export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const usagePct = Math.round(
    (agency.generationsUsed / agency.generationsQuota) * 100
  );

  return (
    <>
      {/* ---------- Desktop rail ---------- */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-line bg-surface px-4 py-5 lg:flex">
        <Link href="/" className="rounded-lg px-2" aria-label="Kyvari home">
          <KyvariLogo />
        </Link>

        <Link
          href="/app/itineraries/santorini-honeymoon"
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-lagoon-500 px-5 text-[0.95rem] font-medium text-white shadow-soft transition-all hover:-translate-y-px hover:bg-lagoon-600 hover:shadow-lift"
        >
          <Plus className="h-4.5 w-4.5" />
          New itinerary
        </Link>

        <nav aria-label="App" className="mt-7 flex flex-col gap-1">
          {nav.map(({ href, label, Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[0.95rem] font-medium transition-colors",
                  active
                    ? "bg-lagoon-50 text-lagoon-700"
                    : "text-ink-soft hover:bg-parchment hover:text-ink"
                )}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4">
          {/* Usage meter */}
          <div className="rounded-2xl border border-line bg-paper p-4">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-ink">{agency.plan} plan</span>
              <span className="text-ink-mute">
                {agency.generationsUsed}/{agency.generationsQuota}
              </span>
            </div>
            <div
              role="meter"
              aria-label="AI generations used this month"
              aria-valuenow={usagePct}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-parchment"
            >
              <div
                className="h-full rounded-full bg-lagoon-500"
                style={{ width: `${usagePct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-ink-mute">
              {agency.generationsQuota - agency.generationsUsed} AI itineraries
              left this month
            </p>
          </div>

          {/* Account */}
          <div className="flex items-center gap-3 rounded-2xl px-2 py-1">
            <Avatar name={agency.agent} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">
                {agency.agent}
              </p>
              <p className="truncate text-xs text-ink-mute">{agency.name}</p>
            </div>
            <button
              type="button"
              aria-label="Settings"
              className="rounded-full p-2 text-ink-mute transition-colors hover:bg-parchment hover:text-ink"
            >
              <Settings className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* ---------- Mobile top bar ---------- */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-surface/90 px-4 backdrop-blur lg:hidden">
        <Link href="/" aria-label="Kyvari home" className="rounded-lg">
          <KyvariLogo className="[&_span:last-child]:text-lg [&_svg]:h-7 [&_svg]:w-7" />
        </Link>
        <Avatar name={agency.agent} size="sm" />
      </header>

      {/* ---------- Mobile bottom tabs ---------- */}
      <nav
        aria-label="App"
        className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      >
        {nav.map(({ href, label, Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2.5 text-[0.65rem] font-semibold",
                active ? "text-lagoon-600" : "text-ink-mute"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

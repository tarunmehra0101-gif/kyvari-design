import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    blurb: "Try Kyvari on your next three clients.",
    cta: "Start free",
    featured: false,
    features: [
      "10 AI itineraries a month",
      "2 aggregation sources",
      "Kyvari-branded share pages",
      "Basic open tracking",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per agent, monthly",
    blurb: "For working agents who close on speed and polish.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "100 AI itineraries a month",
      "All sources — GDS, OTA, chat, PDF",
      "Your logo, colors and domain",
      "Full engagement analytics",
      "Dwell-time and re-visit alerts",
    ],
  },
  {
    name: "Agency",
    price: "$199",
    period: "per team, monthly",
    blurb: "For teams that live in itineraries all day.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Unlimited itineraries",
      "5 seats included",
      "Team analytics and funnels",
      "Shared asset library",
      "API and webhooks",
    ],
  },
];

export function Pricing() {
  return (
    <Reveal
      as="section"
      className="border-t border-line px-5 py-24 sm:px-8 sm:py-32"
      stagger={0.1}
    >
      <div className="mx-auto max-w-6xl" id="pricing">
        <h2 data-reveal className="text-display-lg max-w-xl text-ink">
          Pays for itself with one saved afternoon.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-reveal
              className={cn(
                "flex flex-col rounded-3xl border p-8",
                tier.featured
                  ? "border-ink bg-surface shadow-pop"
                  : "border-line bg-surface"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full bg-ink px-2.5 py-1 text-[0.65rem] font-semibold text-paper">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-5">
                <span className="font-display text-5xl text-ink">{tier.price}</span>
                <span className="ml-2 text-sm text-ink-mute">{tier.period}</span>
              </p>
              <p className="mt-3 text-[0.95rem] text-ink-soft">{tier.blurb}</p>

              <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                    {f}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/app"
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

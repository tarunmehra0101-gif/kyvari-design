import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    blurb: "For trying Kyvari on your next three clients.",
    cta: "Start free",
    featured: false,
    features: [
      "10 AI itineraries / month",
      "2 aggregation sources",
      "Kyvari-branded share pages",
      "Basic open tracking",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per agent / month",
    blurb: "For working agents who close on speed and polish.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "100 AI itineraries / month",
      "All sources · GDS, OTA, chat, PDF",
      "Your logo, colors & domain",
      "Full engagement analytics",
      "Dwell-time & re-visit alerts",
      "Priority AI generation",
    ],
  },
  {
    name: "Agency",
    price: "$199",
    period: "per team / month",
    blurb: "For teams that live in itineraries all day.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Unlimited itineraries",
      "5 seats included",
      "Team analytics & funnels",
      "Shared asset library",
      "API & webhook access",
    ],
  },
];

export function Pricing() {
  return (
    <Reveal
      as="section"
      className="border-y border-line bg-surface/60 px-4 py-24 sm:px-6"
      stagger={0.12}
    >
      <div className="mx-auto max-w-6xl" id="pricing">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="text-eyebrow text-lagoon-600">
            Pricing
          </p>
          <h2 data-reveal className="text-display-lg mt-3 text-ink">
            Pays for itself with one saved afternoon.
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-reveal
              className={cn(
                "card relative flex flex-col p-8",
                tier.featured &&
                  "border-lagoon-300 shadow-pop lg:-my-4 lg:py-12"
              )}
            >
              {tier.featured && (
                <Badge tone="lagoon" className="absolute -top-3 left-8">
                  Most popular
                </Badge>
              )}
              <h3 className="text-display-sm text-ink">{tier.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl font-semibold tracking-tight text-ink">
                  {tier.price}
                </span>
                <span className="ml-2 text-sm text-ink-mute">{tier.period}</span>
              </p>
              <p className="mt-3 text-[0.95rem] text-ink-soft">{tier.blurb}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-500" />
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

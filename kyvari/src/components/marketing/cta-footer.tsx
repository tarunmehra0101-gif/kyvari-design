import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { KyvariLogo } from "@/components/ui/logo";
import { GlobeLoader } from "./globe-loader";

/** Closing CTA — serif headline beside the quiet ink globe. */
export function ClosingCta() {
  return (
    <Reveal as="section" className="overflow-hidden border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-24 sm:px-8 sm:py-28 md:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal>
          <h2 className="text-display-lg max-w-lg text-ink">
            Your next client is dreaming. Send them somewhere.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Paste your last brief into Kyvari and watch a sellable itinerary
            take shape before your coffee goes cold.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/app" size="lg">
              Build your first itinerary
            </ButtonLink>
            <ButtonLink href="#pricing" variant="secondary" size="lg">
              Compare plans
            </ButtonLink>
          </div>
        </div>
        <div
          data-reveal
          className="relative mx-auto aspect-square w-full max-w-90 md:max-w-105"
          aria-hidden
        >
          <GlobeLoader />
        </div>
      </div>
    </Reveal>
  );
}

const footerCols = [
  {
    title: "Product",
    links: ["Itinerary builder", "Client share pages", "Analytics", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "API docs", "Status", "Changelog"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" aria-label="Kyvari home" className="inline-block rounded-lg">
            <KyvariLogo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-mute">
            The AI copilot for travel agents. Brief in, booked out.
          </p>
        </div>
        {footerCols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-eyebrow text-ink-mute">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-mute">
        <p>© 2026 Kyvari Labs. All rights reserved.</p>
        <p className="flex gap-5">
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
          <a href="#" className="hover:text-ink">Security</a>
        </p>
      </div>
    </footer>
  );
}

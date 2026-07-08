import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { KyvariLogo } from "@/components/ui/logo";

/** Closing CTA — the one dark, dramatic moment on the page. */
export function ClosingCta() {
  return (
    <Reveal as="section" className="px-4 py-24 sm:px-6">
      <div
        data-reveal
        className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[var(--radius-panel)] bg-lagoon-900 px-6 py-20 text-center sm:px-12"
      >
        {/* aurora wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgb(11_138_110/0.55)_0%,transparent_60%),radial-gradient(50%_70%_at_85%_100%,rgb(228_87_46/0.28)_0%,transparent_60%)]"
        />
        <div className="relative">
          <h2 className="text-display-lg mx-auto max-w-2xl text-white">
            Your next client is dreaming. Send them somewhere.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-lagoon-100/85">
            Paste your last client brief into Kyvari and watch a sellable
            itinerary take shape before your chai goes cold.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/app" variant="onDark" size="lg">
              Build your first itinerary
            </ButtonLink>
            <ButtonLink
              href="#pricing"
              size="lg"
              className="border border-white/25 bg-white/10 text-white shadow-none hover:bg-white/15"
            >
              Compare plans
            </ButtonLink>
          </div>
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
    <footer className="border-t border-line bg-surface/60 px-4 py-14 sm:px-6">
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
                    className="text-sm text-ink-soft transition-colors hover:text-lagoon-600"
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

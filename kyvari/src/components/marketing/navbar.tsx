"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { KyvariLogo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300",
          scrolled ? "glass shadow-lift" : "bg-transparent border border-transparent"
        )}
      >
        <Link href="/" className="rounded-full" aria-label="Kyvari home">
          <KyvariLogo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-parchment hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/app" variant="ghost" size="sm">
            Sign in
          </ButtonLink>
          <ButtonLink href="/app" size="sm">
            Start free
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 shadow-lift md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-ink hover:bg-parchment"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex gap-2 border-t border-line pt-3">
            <ButtonLink href="/app" variant="secondary" size="sm" className="flex-1">
              Sign in
            </ButtonLink>
            <ButtonLink href="/app" size="sm" className="flex-1">
              Start free
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}

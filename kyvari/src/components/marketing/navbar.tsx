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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-line" : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="rounded-lg" aria-label="Kyvari home">
          <KyvariLogo />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 md:flex">
          <ButtonLink href="/app" variant="ghost" size="sm">
            Sign in
          </ButtonLink>
          <ButtonLink href="/app" size="sm">
            Get started
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

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-3 text-[0.95rem] font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex gap-2 border-t border-line pt-4">
            <ButtonLink href="/app" variant="secondary" size="sm" className="flex-1">
              Sign in
            </ButtonLink>
            <ButtonLink href="/app" size="sm" className="flex-1">
              Get started
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}

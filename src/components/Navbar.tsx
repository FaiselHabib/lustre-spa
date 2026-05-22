"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildWhatsappLink } from "@/lib/constants";
import { LustreLogo } from "@/components/ui/LustreLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Props = { locale: Locale; dict: Dictionary };

export const Navbar = ({ locale, dict }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#why", label: dict.nav.why },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#hours", label: dict.nav.hours },
    { href: "#location", label: dict.nav.location },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        // On mobile: solid bg (no backdrop-filter compositor hit)
        // On desktop: glass blur effect
        scrolled
          ? "bg-ivory-50/98 shadow-[0_1px_0_0_rgba(31,59,51,0.06)] md:bg-ivory-50/85 md:backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-forest-deep transition-opacity hover:opacity-80"
          aria-label="Lustre Spa — Home"
        >
          <LustreLogo className="text-[20px] md:text-[22px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-luxe-sm text-forest/75 transition-colors hover:text-forest-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <div className="hidden md:block">
            <Button
              as="a"
              href={buildWhatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="primary"
            >
              {dict.nav.book}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — simple show/hide, no blur */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="border-t border-forest/10 bg-ivory-50 lg:hidden"
          >
            <nav className="mx-auto flex max-w-8xl flex-col gap-1 px-5 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm tracking-wide text-forest-deep transition-colors active:bg-ivory-100"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3 px-4">
                <LanguageSwitcher locale={locale} />
                <Button
                  as="a"
                  href={buildWhatsappLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="primary"
                >
                  {dict.nav.book}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

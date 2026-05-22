"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildWhatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { heroEnter } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

export const Hero = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      id="top"
      aria-label="Lustre Spa — Hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ivory-50 px-6 pb-28 pt-32 md:px-10 md:pt-32 md:pb-24"
    >
      {/* Background layers
          Ambient blur divs (glow-only) are hidden on mobile via the .glow-only utility.
          This removes the GPU compositing layers that freeze phones. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-ivory-50 to-sand-50/70" />
        {/* Heavy blur effects — desktop only */}
        <div className="glow-only absolute -left-32 top-1/4 h-[60vh] w-[60vh] rounded-full bg-champagne/20 blur-[100px]" />
        <div className="glow-only absolute right-0 top-0 h-[50vh] w-[50vh] rounded-full bg-rose-nude/25 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory-50 to-transparent" />
      </div>

      {/* Grain — desktop only, removed on mobile via CSS .glow-only */}
      <div
        aria-hidden
        className="glow-only pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.07]"
      />

      {/* Decorative arches — static SVG on mobile (no JS animation overhead) */}
      <svg
        viewBox="0 0 800 600"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-5xl opacity-[0.35] md:opacity-50"
      >
        <defs>
          <linearGradient id="archG" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C9A875" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A875" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M100 600 V300 a300 300 0 0 1 600 0 V600" fill="none" stroke="url(#archG)" strokeWidth="1" />
        <path d="M180 600 V340 a220 220 0 0 1 440 0 V600" fill="none" stroke="url(#archG)" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.span
          {...heroEnter(0)}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe text-forest/70"
        >
          <span className="h-px w-8 bg-forest/30" />
          {dict.hero.eyebrow}
          <span className="h-px w-8 bg-forest/30" />
        </motion.span>

        <motion.h1
          {...heroEnter(0.12)}
          className="mt-8 font-display text-[clamp(3.25rem,9.5vw,7rem)] leading-[1] tracking-tight text-forest-deep"
        >
          {dict.hero.title}
          <br />
          <span className="italic text-forest/80">{dict.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          {...heroEnter(0.24)}
          className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-forest/70 md:text-lg"
        >
          {dict.hero.sub}
        </motion.p>

        <motion.div
          {...heroEnter(0.36)}
          className="mt-12 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center"
        >
          <Button
            as="a"
            href={buildWhatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="primary"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            {dict.cta.bookWhatsapp}
          </Button>
          <Button as="a" href="#services" size="lg" variant="outline">
            {dict.cta.explore}
            <ArrowRight
              className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
              strokeWidth={1.6}
            />
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue — hidden on small phones to keep generous bottom whitespace
          and avoid visual collision with the floating WhatsApp button. */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-luxe text-forest/55 transition-colors hover:text-forest sm:block"
      >
        <span className="block">{dict.hero.scroll}</span>
        <span className="mx-auto mt-3 block h-8 w-px bg-forest/30 md:animate-soft-float" />
      </a>
    </section>
  );
};

export default Hero;

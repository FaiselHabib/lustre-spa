"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildWhatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

type Props = { locale: Locale; dict: Dictionary };

export const Hero = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      id="top"
      aria-label="Lustre Spa — Hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ivory-50 px-5 pb-24 pt-36 md:px-10 md:pt-32"
    >
      {/* Layered luxury background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-ivory-50 to-sand-50/70" />
        {/* warm radial glow */}
        <div className="absolute -left-32 top-1/4 h-[60vh] w-[60vh] rounded-full bg-champagne/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[50vh] w-[50vh] rounded-full bg-rose-nude/30 blur-[140px]" />
        {/* soft veil bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory-50 to-transparent" />
      </div>
      <GrainOverlay />

      {/* Decorative arches (echoing the brand's menu graphics) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        viewBox="0 0 800 600"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-5xl"
      >
        <defs>
          <linearGradient id="archG" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C9A875" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A875" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M100 600 V300 a300 300 0 0 1 600 0 V600"
          fill="none"
          stroke="url(#archG)"
          strokeWidth="1"
        />
        <path
          d="M180 600 V340 a220 220 0 0 1 440 0 V600"
          fill="none"
          stroke="url(#archG)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe text-forest/70"
        >
          <span className="h-px w-8 bg-forest/30" />
          {dict.hero.eyebrow}
          <span className="h-px w-8 bg-forest/30" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-7 font-display text-[clamp(3rem,9vw,7rem)] leading-[1] tracking-tight text-forest-deep"
        >
          {dict.hero.title}
          <br />
          <span className="italic text-forest/80">{dict.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-forest/70 md:text-lg"
        >
          {dict.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
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
              className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                isAr ? "rotate-180" : ""
              }`}
              strokeWidth={1.6}
            />
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.1, ease: "easeOut" }}
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-luxe text-forest/55 transition-colors hover:text-forest"
      >
        <span className="block">{dict.hero.scroll}</span>
        <span className="mx-auto mt-3 block h-8 w-px animate-soft-float bg-forest/30" />
      </motion.a>
    </section>
  );
};

export default Hero;

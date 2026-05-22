"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildWhatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

export const FinalCTA = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-forest py-32 text-ivory-50 md:py-44"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest to-forest-deep" />
        {/* Ambient glow — desktop only */}
        <div className="glow-only absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-[140px]" />
      </div>

      {/* Grain — desktop only */}
      <div
        aria-hidden
        className="glow-only pointer-events-none absolute inset-0 bg-noise opacity-[0.08]"
      />

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe text-ivory-100/70"
        >
          <span className="h-px w-8 bg-ivory-100/30" />
          {dict.finalCta.eyebrow}
          <span className="h-px w-8 bg-ivory-100/30" />
        </motion.span>

        <motion.h2
          id="cta-title"
          variants={fadeUp}
          className="mt-7 font-display text-[2.75rem] leading-[1.05] text-ivory-50 md:mt-6 md:text-7xl"
        >
          {dict.finalCta.title}
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-ivory-100/75">
          {dict.finalCta.sub}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Button
            as="a"
            href={buildWhatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-ivory-50 text-forest-deep hover:bg-ivory-100"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            {dict.cta.bookWhatsapp}
            <ArrowRight
              className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
              strokeWidth={1.6}
            />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;

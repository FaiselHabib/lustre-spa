"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildWhatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

type Props = { locale: Locale; dict: Dictionary };

export const FinalCTA = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-forest text-ivory-50 py-32 md:py-44"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest to-forest-deep" />
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-[160px]" />
      </div>
      <GrainOverlay className="opacity-10" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe text-ivory-100/70"
        >
          <span className="h-px w-8 bg-ivory-100/30" />
          {dict.finalCta.eyebrow}
          <span className="h-px w-8 bg-ivory-100/30" />
        </motion.span>

        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-display text-5xl leading-[1.05] text-ivory-50 md:text-7xl"
        >
          {dict.finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-ivory-100/75"
        >
          {dict.finalCta.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10"
        >
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
              className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                isAr ? "rotate-180" : ""
              }`}
              strokeWidth={1.6}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { serviceCategories } from "@/data/services";
import { ServiceCategoryBlock } from "@/components/services/ServiceCategoryBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { buildWhatsappLink } from "@/lib/constants";
import { VIEWPORT, fadeUp } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

export const Services = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-ivory-100 py-28 md:py-36"
    >
      {/* Single gentle glow — desktop only, no blur on mobile */}
      <div
        aria-hidden
        className="glow-only pointer-events-none absolute left-1/2 top-32 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-champagne/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          sub={dict.services.sub}
        />

        {/* Category quick-jump nav */}
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          aria-label="Service categories"
        >
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border border-forest/15 bg-ivory-50/70 px-5 py-2 text-[11px] uppercase tracking-luxe-sm text-forest transition-colors duration-200 hover:border-forest/40 hover:bg-forest hover:text-ivory-50"
            >
              {isAr ? cat.titleAr : cat.titleEn}
            </a>
          ))}
        </motion.nav>

        {/* Categories — each lazy-rendered when in view */}
        <div className="mt-20 flex flex-col gap-24 md:mt-24 md:gap-28">
          {serviceCategories.map((cat) => (
            <ServiceCategoryBlock
              key={cat.id}
              locale={locale}
              category={cat}
              currency={dict.services.currency}
            />
          ))}
        </div>

        {/* End-of-menu CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-20 flex flex-col items-center justify-center gap-5 rounded-3xl border border-forest/10 bg-ivory-50 px-7 py-14 text-center md:mt-24 md:flex-row md:gap-4 md:px-12 md:py-14"
        >
          <p className="font-display text-2xl text-forest-deep md:text-3xl">
            {dict.finalCta.title}
          </p>
          <Button
            as="a"
            href={buildWhatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="primary"
            className="md:ms-6"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            {dict.cta.bookWhatsapp}
            <ArrowRight
              className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
              strokeWidth={1.6}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

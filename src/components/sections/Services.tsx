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

type Props = { locale: Locale; dict: Dictionary };

export const Services = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-ivory-100 py-28 md:py-36"
    >
      {/* Decorative ambient lights */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-champagne/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          sub={dict.services.sub}
        />

        {/* Quick category nav — built dynamically from serviceCategories */}
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          aria-label="Service categories"
        >
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border border-forest/15 bg-ivory-50/70 px-5 py-2 text-[11px] uppercase tracking-luxe-sm text-forest transition-all duration-300 hover:border-forest/40 hover:bg-forest hover:text-ivory-50"
            >
              {isAr ? cat.titleAr : cat.titleEn}
            </a>
          ))}
        </motion.nav>

        {/* Category stack — auto-scales as you add more categories */}
        <div className="mt-24 flex flex-col gap-28">
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-24 flex flex-col items-center justify-center gap-4 rounded-3xl border border-forest/10 bg-ivory-50 px-6 py-12 text-center md:flex-row md:px-12 md:py-14"
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

export default Services;

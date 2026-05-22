"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Flower2, Droplet, Leaf, Scissors, Gem, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { ServiceCategory } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Palette,
  Flower2,
  Droplet,
  Leaf,
  Scissors,
  Gem,
};

type Props = {
  locale: Locale;
  category: ServiceCategory;
  currency: string;
};

export const ServiceCategoryBlock = ({ locale, category, currency }: Props) => {
  const isAr = locale === "ar";
  const title = isAr ? category.titleAr : category.titleEn;
  const caption = isAr ? category.captionAr : category.captionEn;
  const Icon = category.icon ? ICONS[category.icon] : undefined;

  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-28">
      {/* Category header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mb-10 flex flex-col items-center gap-3 text-center"
      >
        {Icon && (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 bg-ivory-50 text-forest">
            <Icon className="h-5 w-5" strokeWidth={1.4} />
          </span>
        )}
        <h3 id={`${category.id}-title`} className="font-display text-3xl text-forest-deep md:text-4xl">
          {title}
        </h3>
        {caption && (
          <p className="max-w-md text-[13px] uppercase tracking-luxe-sm text-forest/55">{caption}</p>
        )}
      </motion.header>

      {/* Cards grid */}
      <motion.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {category.items.map((item) => (
          <ServiceCard key={item.id} locale={locale} item={item} currency={currency} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceCategoryBlock;

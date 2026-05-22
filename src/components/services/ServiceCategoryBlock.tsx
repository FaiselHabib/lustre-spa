"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Flower2, Droplet, Leaf, Scissors, Gem, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { ServiceCategory } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

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

/**
 * One full category block — title, caption, and a responsive grid of cards.
 * Stays consistent no matter how many items the category contains.
 */
export const ServiceCategoryBlock = ({ locale, category, currency }: Props) => {
  const isAr = locale === "ar";
  const title = isAr ? category.titleAr : category.titleEn;
  const caption = isAr ? category.captionAr : category.captionEn;
  const Icon = category.icon ? ICONS[category.icon] : undefined;

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="scroll-mt-28"
    >
      {/* Category header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.6, 0.35, 1] }}
        className="mb-10 flex flex-col items-center gap-3 text-center"
      >
        {Icon && (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 bg-ivory-50 text-forest">
            <Icon className="h-5 w-5" strokeWidth={1.4} />
          </span>
        )}
        <h3
          id={`${category.id}-title`}
          className="font-display text-3xl text-forest-deep md:text-4xl"
        >
          {title}
        </h3>
        {caption && (
          <p className="max-w-md text-[13px] uppercase tracking-luxe-sm text-forest/55">
            {caption}
          </p>
        )}
      </motion.header>

      {/* Cards grid — responsive, auto-fits any number of items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <ServiceCard
            key={item.id}
            locale={locale}
            item={item}
            currency={currency}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategoryBlock;

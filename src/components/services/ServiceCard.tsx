"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { ServiceItem } from "@/data/services";
import { PriceLine } from "./PriceLine";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";

type Props = {
  locale: Locale;
  item: ServiceItem;
  currency: string;
};

export const ServiceCard = ({ locale, item, currency }: Props) => {
  const isAr = locale === "ar";
  const name = isAr ? item.nameAr : item.nameEn;
  const desc = isAr ? item.descAr : item.descEn;
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col gap-4 rounded-3xl border border-forest/10 bg-ivory-50 px-6 py-7",
        // Hover: CSS only — no JS transform, no compositor layer on mobile
        "transition-shadow duration-300 md:hover:shadow-luxe md:hover:border-champagne/40",
        item.signature && "ring-1 ring-champagne/30"
      )}
    >
      <header className="flex flex-col gap-1.5">
        <h3 className="font-display text-2xl leading-tight text-forest-deep">
          {name}
          {item.signature && (
            <span className="ms-2 align-middle text-[10px] uppercase tracking-luxe-sm text-champagne-dark">★</span>
          )}
        </h3>
        {desc && (
          <p className="text-[13.5px] leading-relaxed text-forest/60">{desc}</p>
        )}
      </header>

      <div className="mt-1">
        {hasVariants ? (
          <div className="divide-y divide-forest/10">
            {item.variants!.map((v) => (
              <PriceLine
                key={`${item.id}-${v.labelEn}`}
                locale={locale}
                labelEn={v.labelEn}
                labelAr={v.labelAr}
                price={v.price}
                currency={currency}
                signature={item.signature}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-baseline justify-between gap-3 pt-1">
            <span className="font-display text-3xl tabular-nums text-forest-deep">
              {currency}{" "}
              {typeof item.price === "number"
                ? item.price
                : `${item.priceFrom} — ${item.priceTo}`}
            </span>
            {(item.noteEn || item.noteAr) && (
              <span className="text-[10px] uppercase tracking-luxe-sm text-forest/55">
                {isAr ? item.noteAr : item.noteEn}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Signature corner accent */}
      {item.signature && (
        <span
          aria-hidden
          className="absolute right-5 top-5 h-1.5 w-1.5 rotate-45 bg-champagne"
        />
      )}
    </motion.article>
  );
};

export default ServiceCard;

"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  labelEn: string;
  labelAr: string;
  /** Either a single price or a range to display. */
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  noteEn?: string;
  noteAr?: string;
  currency: string;
  signature?: boolean;
};

/**
 * One line in a service card. Used for a single price OR a length variant.
 * Visual: delicate dotted leader between label and price (menu/editorial style).
 */
export const PriceLine = ({
  locale,
  labelEn,
  labelAr,
  price,
  priceFrom,
  priceTo,
  noteEn,
  noteAr,
  currency,
  signature,
}: Props) => {
  const isAr = locale === "ar";
  const label = isAr ? labelAr : labelEn;
  const note = isAr ? noteAr : noteEn;

  const displayPrice =
    typeof price === "number"
      ? `${currency} ${price}`
      : priceFrom !== undefined && priceTo !== undefined
      ? `${currency} ${priceFrom} — ${priceTo}`
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group/line flex items-baseline gap-3 py-2.5"
    >
      <span className="flex items-baseline gap-2 text-[15px] text-forest-deep">
        <span className="font-sans">{label}</span>
        {signature && (
          <span className="text-[9px] uppercase tracking-luxe-sm text-champagne-dark">
            ★ Signature
          </span>
        )}
      </span>

      <span
        aria-hidden
        className="mx-1 flex-1 translate-y-[-3px] border-b border-dotted border-forest/25"
      />

      <span className="whitespace-nowrap font-display text-[15px] tabular-nums text-forest-deep">
        {displayPrice}
      </span>

      {note && (
        <span className="text-[10px] uppercase tracking-luxe-sm text-forest/50">
          · {note}
        </span>
      )}
    </motion.div>
  );
};

export default PriceLine;

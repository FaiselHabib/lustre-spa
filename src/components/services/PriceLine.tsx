import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  labelEn: string;
  labelAr: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  noteEn?: string;
  noteAr?: string;
  currency: string;
  signature?: boolean;
};

/**
 * Static price line — no Framer Motion.
 * The parent ServiceCard handles the reveal animation;
 * animating every individual price line would create
 * hundreds of observers on the Services page.
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
    <div className="flex items-baseline gap-3 py-2.5">
      <span className="flex items-baseline gap-2 text-[15px] text-forest-deep">
        <span className="font-sans">{label}</span>
        {signature && (
          <span className="text-[9px] uppercase tracking-luxe-sm text-champagne-dark">★</span>
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
    </div>
  );
};

export default PriceLine;

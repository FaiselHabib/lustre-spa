/**
 * SERVICES DATA — single source of truth for the menu.
 *
 * To add a new category later, just append a new object to `serviceCategories`.
 * To add a new item to a category, append to its `items` array.
 * The UI (ServicesSection / ServiceCategory / PricingCard) reads from here
 * and renders responsively, so the layout never needs to be touched.
 *
 * Supported item shapes:
 *   - Single price        → use `price`
 *   - Range               → use `priceFrom` + `priceTo`
 *   - Length variants     → use `variants` (e.g. short, medium, long, very long)
 *   - Optional notes      → `noteEn` / `noteAr` (e.g. "Per nail")
 */

export type PriceVariant = {
  labelEn: string;
  labelAr: string;
  price: number; // SAR
};

export type ServiceItem = {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn?: string;
  descAr?: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  variants?: PriceVariant[];
  noteEn?: string;
  noteAr?: string;
  /** A signature "house" item gets a delicate highlight */
  signature?: boolean;
};

export type ServiceCategory = {
  id: string;
  titleEn: string;
  titleAr: string;
  /** Optional short caption shown under the category title */
  captionEn?: string;
  captionAr?: string;
  /** Icon name from lucide-react */
  icon?: string;
  items: ServiceItem[];
};

/** Length variant labels reused across hair services */
const HAIR_LENGTHS: Pick<PriceVariant, "labelEn" | "labelAr">[] = [
  { labelEn: "Short", labelAr: "قصير" },
  { labelEn: "Medium", labelAr: "متوسط الطول" },
  { labelEn: "Long", labelAr: "طويل" },
  { labelEn: "Extra Long", labelAr: "طويل جداً" },
];

const lengthVariants = (prices: [number, number, number, number]): PriceVariant[] =>
  HAIR_LENGTHS.map((l, i) => ({ ...l, price: prices[i] }));

export const serviceCategories: ServiceCategory[] = [
  // ─────────────────────────────────────────
  // NAILS — POLISH
  // ─────────────────────────────────────────
  {
    id: "nail-polish",
    titleEn: "Nail Polish",
    titleAr: "خدمات الطلاء",
    captionEn: "Hand-finished color, gloss & shine",
    captionAr: "ألوانٌ مُتقنة، لمعانٌ راقٍ",
    icon: "Sparkles",
    items: [
      { id: "polish-classic", nameEn: "Classic Polish", nameAr: "طلاء عادي", price: 30 },
      { id: "polish-french", nameEn: "French Polish", nameAr: "طلاء فرنش", price: 60 },
      { id: "polish-ombre", nameEn: "Ombré Polish", nameAr: "طلاء أومبري", price: 80 },
      { id: "polish-gel", nameEn: "Gel Polish", nameAr: "طلاء جل", price: 115 },
      { id: "polish-gel-french", nameEn: "Gel French / Ombré", nameAr: "طلاء جل فرنش / أومبري", price: 150 },
      { id: "polish-cateye-chrome", nameEn: "Gel Cat-Eye / Chrome", nameAr: "طلاء جل كات-أي / كروم", price: 130 },
      { id: "polish-gel-removal", nameEn: "Gel Removal", nameAr: "إزالة طلاء الجل", price: 75 },
    ],
  },

  // ─────────────────────────────────────────
  // NAILS — ART
  // ─────────────────────────────────────────
  {
    id: "nail-art",
    titleEn: "Nail Art",
    titleAr: "الرسم",
    captionEn: "Bespoke design • priced per nail",
    captionAr: "السعر الموضح للظفر الواحد",
    icon: "Palette",
    items: [
      {
        id: "art-regular",
        nameEn: "Art on Regular Polish",
        nameAr: "رسم بطلاء عادي",
        price: 12,
        noteEn: "Per nail",
        noteAr: "سعر الظفر الواحد",
      },
      {
        id: "art-gel",
        nameEn: "Art on Gel Polish",
        nameAr: "رسم بطلاء الجل",
        price: 20,
        noteEn: "Per nail",
        noteAr: "سعر الظفر الواحد",
      },
    ],
  },

  // ─────────────────────────────────────────
  // MASSAGE
  // ─────────────────────────────────────────
  {
    id: "massage",
    titleEn: "Massage",
    titleAr: "المساج",
    captionEn: "Restorative rituals for hands & feet",
    captionAr: "طقوسٌ تجديدية لليدين والقدمين",
    icon: "Flower2",
    items: [
      { id: "massage-hands", nameEn: "Hand Massage", nameAr: "مساج اليدين", price: 50 },
      { id: "massage-feet", nameEn: "Foot Massage", nameAr: "مساج القدمين", price: 50 },
    ],
  },

  // ─────────────────────────────────────────
  // HAIR — COLOR
  // ─────────────────────────────────────────
  {
    id: "hair-color",
    titleEn: "Hair Color",
    titleAr: "صبغة الشعر",
    captionEn: "Full color, highlights & root refresh",
    captionAr: "صبغة كاملة، هايلايت، وتجديد الجذور",
    icon: "Droplet",
    items: [
      {
        id: "color-full",
        nameEn: "Full Color",
        nameAr: "صبغة لون كامل",
        variants: lengthVariants([400, 550, 750, 900]),
      },
      {
        id: "highlights",
        nameEn: "Highlights — Balayage",
        nameAr: "هايلايت - بالياج",
        variants: lengthVariants([700, 930, 1300, 1600]),
        signature: true,
      },
      {
        id: "highlights-color",
        nameEn: "Highlights with Full Color",
        nameAr: "هايلايت - بالياج مع صبغة",
        variants: lengthVariants([1035, 1495, 1800, 2300]),
      },
      {
        id: "root-color",
        nameEn: "Root Color",
        nameAr: "صبغة الجذور",
        priceFrom: 150,
        priceTo: 250,
      },
      {
        id: "toner",
        nameEn: "Toner",
        nameAr: "الرنساج",
        priceFrom: 170,
        priceTo: 350,
      },
    ],
  },

  // ─────────────────────────────────────────
  // HAIR — TREATMENTS
  // ─────────────────────────────────────────
  {
    id: "hair-treatments",
    titleEn: "Hair Treatments",
    titleAr: "علاجات الشعر",
    captionEn: "Repair, restore & deeply nourish",
    captionAr: "إصلاح، تجديد، وتغذية عميقة",
    icon: "Leaf",
    items: [
      {
        id: "tx-dr-in",
        nameEn: "Dr. I-N Treatment",
        nameAr: "معالج دكتور أي-إن",
        variants: lengthVariants([700, 950, 1200, 1450]),
        signature: true,
      },
      {
        id: "tx-bptch",
        nameEn: "BP Tech Treatment",
        nameAr: "معالج بي بي تتش",
        variants: lengthVariants([600, 750, 900, 1100]),
      },
      {
        id: "tx-dry-hair",
        nameEn: "Dry Hair Hydration Mask",
        nameAr: "ترطيب الشعر الجاف",
        descEn: "Intense hydration mask that revives dry, brittle strands and restores damaged bonds.",
        descAr: "ماسك علاجي للشعر الجاف والمتقصف، يمنح ترطيباً مكثفاً ويرمم روابط الشعر المتضررة.",
        variants: lengthVariants([160, 200, 250, 300]),
      },
      {
        id: "tx-filler",
        nameEn: "Hair Filler Treatment",
        nameAr: "فيلر معالج الشعر",
        variants: [
          { labelEn: "Short — Medium", labelAr: "قصير - متوسط", price: 185 },
          { labelEn: "Long — Extra Long", labelAr: "طويل - طويل جداً", price: 230 },
        ],
      },
      {
        id: "tx-scalp-growth",
        nameEn: "Scalp Sterilization & Hair Growth",
        nameAr: "جلسة تعقيم وتعزيز لنمو الشعر",
        descEn: "Scalp purification with anti-shedding ampoules that nourish and strengthen follicles.",
        descAr: "تطهير لفروة الرأس بأمبولات مكافحة للتساقط، تساعد على تغذية وتقوية بصيلات الشعر.",
        price: 210,
      },
      {
        id: "tx-scalp-exfoliate",
        nameEn: "Scalp Exfoliation Treatment",
        nameAr: "معالج مقشر لفروة الرأس",
        descEn: "A purifying treatment that stimulates circulation, removes dandruff and soothes the scalp.",
        descAr: "جلسة معالجة ومقشرة لفروة الرأس، تحفز الدورة الدموية وتُخلّص من القشرة والترسبات.",
        price: 190,
      },
      {
        id: "tx-k18",
        nameEn: "K18 Treatment",
        nameAr: "معالج K18",
        descEn: "Repairs damaged hair in 4 minutes — restoring strength, softness and protein nutrition.",
        descAr: "يعالج الشعر التالف والجاف خلال ٤ دقائق، ويُعيد القوة والنعومة، ويغذّي بالبروتين.",
        price: 180,
        signature: true,
      },
    ],
  },

  // ─────────────────────────────────────────
  // HAIR — STYLING (BLOW DRY, CUT, UPDOS)
  // ─────────────────────────────────────────
  {
    id: "hair-styling",
    titleEn: "Hair Styling",
    titleAr: "تصفيف الشعر",
    captionEn: "Blow dry, cut & updo",
    captionAr: "سشوار، قص وتساريح",
    icon: "Scissors",
    items: [
      {
        id: "blowdry-regular",
        nameEn: "Regular Blow Dry",
        nameAr: "سشوار عادي",
        variants: lengthVariants([60, 100, 140, 180]),
      },
      {
        id: "blowdry-wavy",
        nameEn: "Wavy Blow Dry",
        nameAr: "سشوار ويفي",
        variants: lengthVariants([90, 130, 170, 210]),
      },
      {
        id: "blowdry-flat",
        nameEn: "Blow Dry with Flat Iron / Ceramic",
        nameAr: "سشوار مع فير / أو سيراميك",
        variants: lengthVariants([150, 200, 250, 300]),
      },
      {
        id: "cut-trim",
        nameEn: "Trim (Ends Only)",
        nameAr: "قص أطراف",
        price: 59,
      },
      {
        id: "cut-bang",
        nameEn: "Fringe / Bang Trim",
        nameAr: "قص غره",
        price: 46,
      },
      {
        id: "cut-style",
        nameEn: "Style Cut",
        nameAr: "قص ستايل",
        price: 160,
      },
      {
        id: "updo",
        nameEn: "Hair Updo / Styling",
        nameAr: "تساريح الشعر",
        variants: [
          { labelEn: "Short", labelAr: "قصير", price: 250 },
          { labelEn: "Medium", labelAr: "متوسط الطول", price: 340 },
          { labelEn: "Long", labelAr: "طويل", price: 420 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // GEL EXTENSIONS & OVERLAYS
  // ─────────────────────────────────────────
  {
    id: "gel-extensions",
    titleEn: "Gel Extensions & Overlays",
    titleAr: "جل — اكستنشن وأوفرلاي",
    captionEn: "Length, strength & soft gel systems",
    captionAr: "أنظمة الجل الكاملة والأوفرلاي",
    icon: "Gem",
    items: [
      {
        id: "gel-ext",
        nameEn: "Gel Extensions",
        nameAr: "جل اكستنشن",
        price: 460,
      },
      {
        id: "gel-ext-polish",
        nameEn: "Gel Extensions + Gel Polish",
        nameAr: "جل اكستنشن مع طلاء جل",
        price: 550,
        signature: true,
      },
      {
        id: "gel-ext-removal",
        nameEn: "Gel Extension Removal",
        nameAr: "إزالة جل اكستنشن",
        price: 115,
      },
      {
        id: "gel-ext-refill",
        nameEn: "Gel Extension Refill",
        nameAr: "إعادة تعبئة جل اكستنشن",
        price: 295,
      },
      {
        id: "biab-full",
        nameEn: "BIAB — Full Hands or Feet",
        nameAr: "بياب كامل اليدين أو القدمين",
        price: 270,
      },
      {
        id: "biab-removal",
        nameEn: "BIAB Removal",
        nameAr: "إزالة بياب",
        price: 86,
      },
      {
        id: "biab-refill",
        nameEn: "BIAB Refill",
        nameAr: "إعادة تعبئة بياب",
        price: 195,
      },
      {
        id: "overlay-full",
        nameEn: "Gel Overlay — Full Hands or Feet",
        nameAr: "أوفرلاي كامل اليدين أو القدمين",
        price: 330,
      },
      {
        id: "overlay-removal",
        nameEn: "Gel Overlay Removal",
        nameAr: "إزالة أوفرلاي",
        price: 86,
      },
      {
        id: "overlay-refill",
        nameEn: "Gel Overlay Refill",
        nameAr: "إعادة تعبئة أوفرلاي",
        price: 205,
      },
      {
        id: "soft-gel-polish",
        nameEn: "Soft Gel + Regular Polish",
        nameAr: "سوفت جل مع طلاء",
        price: 165,
      },
      {
        id: "soft-gel-gel-polish",
        nameEn: "Soft Gel + Gel Polish",
        nameAr: "سوفت جل مع طلاء جل",
        price: 220,
      },
      {
        id: "soft-gel-removal",
        nameEn: "Soft Gel Removal",
        nameAr: "إزالة سوفت جل",
        price: 86,
      },
      {
        id: "nail-tips-regular",
        nameEn: "Nail Tips + Regular Polish",
        nameAr: "تركيب عادي مع طلاء",
        price: 97,
      },
      {
        id: "nail-tips-gel",
        nameEn: "Nail Tips + Gel Polish",
        nameAr: "تركيب مع طلاء جل",
        price: 187,
      },
    ],
  },

  // ─────────────────────────────────────────
  // MANICURE & PEDICURE
  // ─────────────────────────────────────────
  {
    id: "manicure-pedicure",
    titleEn: "Manicure & Pedicure",
    titleAr: "مانيكير وباديكير",
    captionEn: "Classic, Premium & Quick Fix rituals",
    captionAr: "كلاسيك، بريميوم وإصلاح سريع",
    icon: "Sparkles",
    items: [
      // ── Classic ──
      {
        id: "classic-manicure",
        nameEn: "Classic Manicure",
        nameAr: "مانيكير كلاسيك",
        descEn:
          "Trimming, cuticle care and filing for hands — finished with a moisturising butter and nail polish.",
        descAr:
          "تقليم وتنظيف لأظافر اليدين من الجلد الزائد وبردها، يتبع بتقشير ويختم بزبدة الترطيب وطلاء الأظافر.",
        price: 129,
      },
      {
        id: "classic-pedicure",
        nameEn: "Classic Pedicure",
        nameAr: "باديكير كلاسيك",
        descEn:
          "Trimming, cuticle care and filing for feet — finished with a moisturising butter and nail polish.",
        descAr:
          "تقليم وتنظيف لأظافر القدمين من الجلد الزائد وبردها، يتبع بتقشير ويختم بزبدة الترطيب وطلاء الأظافر.",
        price: 145,
      },
      {
        id: "classic-mani-pedi",
        nameEn: "Classic Manicure & Pedicure",
        nameAr: "مانيكير وباديكير كلاسيك",
        price: 260,
      },
      // ── Premium ──
      {
        id: "premium-manicure",
        nameEn: "Premium Manicure",
        nameAr: "مانيكير بريميوم",
        descEn:
          "Cuticle care, exfoliation, radiance mask and moisturising butter — sealed with nail polish and a relaxing hand massage.",
        descAr:
          "تقليم وتنظيف لأظافر اليدين من الجلد الزائد وبردها، يتبع بتقشير وقناع النضارة ثم زبدة الترطيب، وطلاء الأظافر، ويختم بمساج استرخائي.",
        price: 159,
        signature: true,
      },
      {
        id: "premium-pedicure",
        nameEn: "Premium Pedicure",
        nameAr: "باديكير بريميوم",
        descEn:
          "Cuticle care, exfoliation, radiance mask and moisturising butter — sealed with nail polish and a relaxing foot massage.",
        descAr:
          "تقليم وتنظيف لأظافر القدمين من الجلد الزائد وبردها، يتبع بتقشير وقناع النضارة ثم زبدة الترطيب، وطلاء الأظافر، ويختم بمساج استرخائي.",
        price: 185,
        signature: true,
      },
      {
        id: "premium-mani-pedi",
        nameEn: "Premium Manicure & Pedicure",
        nameAr: "مانيكير وباديكير بريميوم",
        price: 340,
        signature: true,
      },
      // ── Quick Fix ──
      {
        id: "quickfix-manicure",
        nameEn: "Quick Fix Manicure",
        nameAr: "مانيكير إصلاح سريع",
        descEn:
          "Trim, file and buff — followed by moisturising butter and nail polish.",
        descAr:
          "قص وبرد وتلميع لأظافر اليدين، يتبع بزبدة الترطيب وطلاء الأظافر.",
        price: 75,
      },
      {
        id: "quickfix-pedicure",
        nameEn: "Quick Fix Pedicure",
        nameAr: "باديكير إصلاح سريع",
        descEn:
          "Trim, file and buff — followed by moisturising butter and nail polish.",
        descAr:
          "قص وبرد وتلميع لأظافر القدمين، يتبع بزبدة الترطيب وطلاء الأظافر.",
        price: 75,
      },
      {
        id: "quickfix-mani-pedi",
        nameEn: "Quick Fix Manicure & Pedicure",
        nameAr: "مانيكير وباديكير إصلاح سريع",
        price: 150,
      },
    ],
  },
];

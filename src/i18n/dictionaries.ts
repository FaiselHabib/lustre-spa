import type { Locale } from "./config";

/**
 * All site copy. Bilingual.
 * Keep keys identical across `en` and `ar` shapes.
 */
const en = {
  nav: {
    about: "About",
    services: "Services",
    why: "Why Lustre",
    gallery: "Gallery",
    hours: "Hours",
    location: "Visit",
    book: "Book Now",
  },
  cta: {
    bookWhatsapp: "Book on WhatsApp",
    explore: "Explore Services",
    reserve: "Reserve Your Moment",
    getDirections: "Get Directions",
  },
  hero: {
    eyebrow: "Luxury Beauty • Jeddah",
    title: "A quiet kind",
    titleAccent: "of luxury.",
    sub: "An intimate sanctuary in Al Naeem, dedicated to the rituals of beauty, restoration, and quiet indulgence.",
    scroll: "Discover the experience",
  },
  about: {
    eyebrow: "The House of Lustre",
    title: "Beauty, written in silence.",
    body:
      "Lustre Spa was created as a softer counterpoint to the city — a refined retreat where time slows down and beauty is treated as a personal ritual. From signature hair artistry to elevated nail care, every detail is composed with intention, warmth, and an unmistakable touch of luxury.",
    pillars: [
      { title: "Artistry", body: "Specialists trained in the most contemporary techniques in hair, color, and nail design." },
      { title: "Materials", body: "Hand-selected products and premium brands chosen for their integrity and results." },
      { title: "Atmosphere", body: "Warm light, soft textures, and quiet service — a true sanctuary in the heart of Jeddah." },
    ],
  },
  services: {
    eyebrow: "The Menu",
    title: "Services & Rituals",
    sub: "A curated selection of beauty rituals — designed to nurture, elevate, and celebrate you.",
    fromLabel: "From",
    currency: "SAR",
    perNail: "Per nail",
    viewAll: "View full menu",
  },
  why: {
    eyebrow: "Why Lustre",
    title: "Composed with care.",
    sub: "Every detail — every product, every gesture — is part of the Lustre standard.",
    items: [
      { title: "Premium Products", body: "Internationally trusted brands and professional-grade treatments." },
      { title: "Expert Specialists", body: "A handpicked team of beauty artists with years of dedicated training." },
      { title: "Hygiene First", body: "Sterilized tools, single-use accessories, and meticulous studio standards." },
      { title: "Quiet Sanctuary", body: "An elegant, calm space designed for true restoration." },
      { title: "Personalized Care", body: "Every visit is shaped around your hair, your skin, your moment." },
      { title: "Effortless Booking", body: "Reserve your appointment with a single message on WhatsApp." },
    ],
  },
  gallery: {
    eyebrow: "Atmosphere",
    title: "An interior, in textures.",
    sub: "Soft beige, warm light, polished surfaces — a quiet stage for beauty.",
  },
  hours: {
    eyebrow: "Visiting Hours",
    title: "Open daily, by appointment.",
    sub: "We recommend booking ahead to secure your preferred specialist and time.",
    appointmentNote: "Walk-ins welcome subject to availability.",
  },
  location: {
    eyebrow: "Our Sanctuary",
    title: "Find us in Jeddah.",
    address: "Al Naeem District, Jasmin Garden Hotel, Jeddah, Saudi Arabia",
    sub: "Set within the elegant grounds of Jasmin Garden Hotel — discreet, accessible, and entirely yours.",
  },
  finalCta: {
    eyebrow: "Your Invitation",
    title: "Reserve your moment of beauty.",
    sub: "Send us a message on WhatsApp and our team will craft the experience around you.",
  },
  footer: {
    rights: "All rights reserved.",
    crafted: "Crafted with quiet care in Jeddah.",
    quickLinks: "Explore",
    contact: "Contact",
    follow: "Follow",
  },
  langSwitch: { label: "Language", switchTo: "العربية" },
} as const;

const ar = {
  nav: {
    about: "عنّا",
    services: "الخدمات",
    why: "لماذا لاستر",
    gallery: "المعرض",
    hours: "المواعيد",
    location: "الموقع",
    book: "احجزي الآن",
  },
  cta: {
    bookWhatsapp: "احجزي عبر واتساب",
    explore: "استكشفي الخدمات",
    reserve: "احجزي لحظتك",
    getDirections: "خرائط الموقع",
  },
  hero: {
    eyebrow: "جمال فاخر • جدة",
    title: "فخامةٌ",
    titleAccent: "هادئة.",
    sub: "ملاذٌ نسائي راقٍ في حيّ النعيم، مُكرَّس لطقوس الجمال والاسترخاء والعناية الفاخرة.",
    scroll: "اكتشفي التجربة",
  },
  about: {
    eyebrow: "بيت لاستر",
    title: "جمالٌ يُكتبُ بصمت.",
    body:
      "وُلد لاستر سبا كملاذٍ ناعم بعيداً عن صخب المدينة — مساحةٌ راقية يبطؤ فيها الوقت وتُعامل فيها العناية بالجمال كطقسٍ شخصي. من فنّ تصفيف الشعر إلى عناية الأظافر الفاخرة، كلّ تفصيلة مصممة بدفء، ذوق، وفخامة لا تُنسى.",
    pillars: [
      { title: "فنّ", body: "أخصائيات مدربات على أحدث تقنيات الشعر والصبغ والأظافر." },
      { title: "مكوّنات", body: "منتجات وعلامات تجارية مختارة بعناية لجودتها ونتائجها." },
      { title: "أجواء", body: "إضاءة دافئة، ملمسٌ ناعم، وخدمة هادئة — ملاذٌ حقيقي في قلب جدة." },
    ],
  },
  services: {
    eyebrow: "القائمة",
    title: "خدماتنا وطقوسنا",
    sub: "تشكيلةٌ مختارة من طقوس الجمال — لتُدلّلكِ وتُبرز أناقتكِ.",
    fromLabel: "يبدأ من",
    currency: "ر.س",
    perNail: "سعر الظفر الواحد",
    viewAll: "عرض القائمة الكاملة",
  },
  why: {
    eyebrow: "لماذا لاستر",
    title: "بعنايةٍ في كلّ تفصيلة.",
    sub: "كل منتج، كل لمسة، كل تفصيلة — جزءٌ من معيار لاستر.",
    items: [
      { title: "منتجاتٌ فاخرة", body: "علامات عالمية موثوقة وعلاجات بمستوى احترافي." },
      { title: "أخصائيات خبيرات", body: "فريقٌ مختار من فنانات الجمال بسنوات من التدريب." },
      { title: "نظافةٌ أولاً", body: "أدواتٌ معقّمة، إكسسوارات للاستخدام مرة واحدة، ومعايير دقيقة." },
      { title: "ملاذٌ هادئ", body: "مساحةٌ راقية وهادئة مصممة للاسترخاء الحقيقي." },
      { title: "عنايةٌ شخصية", body: "كلّ زيارة تُصمَّم خصيصاً لشعركِ، بشرتكِ، ولحظتكِ." },
      { title: "حجزٌ سهل", body: "احجزي موعدكِ برسالة واحدة عبر واتساب." },
    ],
  },
  gallery: {
    eyebrow: "الأجواء",
    title: "تفاصيلٌ بملمسٍ ناعم.",
    sub: "بيج ناعم، إضاءة دافئة، أسطح راقية — مسرحٌ هادئ للجمال.",
  },
  hours: {
    eyebrow: "ساعات الزيارة",
    title: "مفتوحون يومياً بالحجز المسبق.",
    sub: "نوصي بالحجز مسبقاً لضمان موعدكِ مع أخصائيتكِ المفضلة.",
    appointmentNote: "نرحّب بالزيارات بدون موعد حسب التوفر.",
  },
  location: {
    eyebrow: "ملاذنا",
    title: "نلتقي في جدة.",
    address: "حيّ النعيم، فندق حديقة الياسمين، جدة، المملكة العربية السعودية",
    sub: "نقع داخل حرم فندق حديقة الياسمين — خاصٌ، هادئ، وسهل الوصول.",
  },
  finalCta: {
    eyebrow: "دعوتكِ",
    title: "احجزي لحظة جمالكِ.",
    sub: "أرسلي رسالة عبر واتساب وسيُصمّم فريقنا تجربتكِ بعناية.",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    crafted: "صُمم بعناية هادئة في جدة.",
    quickLinks: "استكشفي",
    contact: "تواصل",
    follow: "تابعينا",
  },
  langSwitch: { label: "اللغة", switchTo: "English" },
} as const;

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar: ar as unknown as Dictionary,
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

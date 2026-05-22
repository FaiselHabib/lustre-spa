/**
 * Brand & business constants for Lustre Spa.
 * Edit values here to update them across the entire site.
 */

export const BRAND = {
  name: "Lustre Spa",
  nameAr: "لاستر سبا",
  tagline: "The Art of Quiet Luxury",
  taglineAr: "فنّ الفخامة الهادئة",
  domain: "https://lustrespa.com",
  cityEn: "Jeddah",
  cityAr: "جدة",
  districtEn: "Al Naeem",
  districtAr: "حي النعيم",
  venueEn: "Jasmin Garden Hotel",
  venueAr: "فندق حديقة الياسمين",
  // Update with the real phone number when available
  whatsappNumber: "966500000000", // E.164 without +
  whatsappDisplay: "+966 50 000 0000",
  instagram: "https://instagram.com/lustrespa",
  instagramHandle: "@lustrespa",
  mapsUrl: "https://maps.app.goo.gl/",
  // Hours of operation
  hours: {
    weekdays: { en: "Saturday — Thursday", ar: "السبت — الخميس", time: "11:00 AM — 11:00 PM" },
    friday: { en: "Friday", ar: "الجمعة", time: "2:00 PM — 11:00 PM" },
  },
} as const;

export const WHATSAPP_MESSAGES = {
  default: {
    en: "Hello Lustre Spa, I'd like to book an appointment.",
    ar: "مرحباً لاستر سبا، أرغب بحجز موعد.",
  },
} as const;

export const buildWhatsappLink = (locale: "en" | "ar" = "en", message?: string) => {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGES.default[locale]);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
};

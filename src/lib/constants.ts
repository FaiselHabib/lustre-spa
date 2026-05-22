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
  whatsappNumber: "966509010480", // E.164 without +
  whatsappDisplay: "050 901 0480",
  instagram: "https://instagram.com/lustre.spa",
  instagramHandle: "@lustre.spa",
  // Universal Google Maps directions URL — opens native Google Maps on
  // Android, falls back to Apple Maps / web on iOS via universal links.
  // Replace `query` with the exact Google Business Profile short link
  // once the listing is verified for the most accurate pin.
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Jasmin+Garden+Hotel+Al+Naeem+Jeddah&destination_place_id=",
  mapsEmbedQuery: "Jasmin Garden Hotel, Al Naeem, Jeddah, Saudi Arabia",
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

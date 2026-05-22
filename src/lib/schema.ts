import { BRAND } from "./constants";
import type { Locale } from "@/i18n/config";
import { serviceCategories } from "@/data/services";

/**
 * Structured data for rich search results.
 * Includes BeautySalon (LocalBusiness subtype) + Service catalog + WebSite + BreadcrumbList.
 */
export const buildLocalBusinessSchema = (locale: Locale) => {
  const isAr = locale === "ar";
  const baseUrl = BRAND.domain;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ─── Business ───
      {
        "@type": ["BeautySalon", "DaySpa", "HairSalon", "NailSalon", "LocalBusiness"],
        "@id": `${baseUrl}#business`,
        name: BRAND.name,
        alternateName: BRAND.nameAr,
        description: isAr
          ? "لاستر سبا — صالون تجميل نسائي فاخر في جدة يقدّم خدمات الشعر والأظافر والعناية بالشعر."
          : "Lustre Spa — a luxury beauty sanctuary in Jeddah specialising in hair styling, color, treatments, manicure, pedicure and nail art.",
        url: baseUrl,
        telephone: `+${BRAND.whatsappNumber}`,
        image: `${baseUrl}/og.svg`,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: BRAND.venueEn,
          addressLocality: BRAND.cityEn,
          addressRegion: "Makkah Province",
          addressCountry: "SA",
        },
        areaServed: [
          { "@type": "City", name: "Jeddah" },
          { "@type": "City", name: "جدة" },
        ],
        geo: {
          "@type": "GeoCoordinates",
          // Approximate — refine when exact GPS is known
          latitude: 21.6168,
          longitude: 39.1469,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "11:00",
            closes: "23:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "14:00",
            closes: "23:00",
          },
        ],
        sameAs: [BRAND.instagram],
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Credit Card, Mada, Apple Pay",
        makesOffer: serviceCategories.flatMap((cat) =>
          cat.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isAr ? item.nameAr : item.nameEn,
              category: isAr ? cat.titleAr : cat.titleEn,
            },
            priceCurrency: "SAR",
            ...(item.price !== undefined ? { price: item.price } : {}),
          }))
        ),
      },

      // ─── Website ───
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        url: baseUrl,
        name: BRAND.name,
        inLanguage: [locale === "ar" ? "ar-SA" : "en-SA"],
        publisher: { "@id": `${baseUrl}#business` },
      },
    ],
  };
};

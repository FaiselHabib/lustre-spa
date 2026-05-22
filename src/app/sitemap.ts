import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.map((locale) => ({
    url: `${BRAND.domain}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${BRAND.domain}/en`,
        ar: `${BRAND.domain}/ar`,
      },
    },
  }));
}

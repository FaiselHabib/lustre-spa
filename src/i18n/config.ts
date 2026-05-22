export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const localeName: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

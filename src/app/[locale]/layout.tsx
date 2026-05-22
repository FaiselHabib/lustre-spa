import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter, Cairo } from "next/font/google";
import { BRAND } from "@/lib/constants";
import { isLocale, locales, localeDir, type Locale } from "@/i18n/config";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const arabic = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1F3B33",
  width: "device-width",
  initialScale: 1,
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const isAr = locale === "ar";

  const title = isAr
    ? `${BRAND.nameAr} — سبا فاخر في جدة | ${BRAND.taglineAr}`
    : `${BRAND.name} — Luxury Beauty Spa in Jeddah | ${BRAND.tagline}`;

  const description = isAr
    ? "لاستر سبا — ملاذٌ نسائي فاخر في حيّ النعيم بجدة. خدمات شعر متكاملة، صبغة، علاجات، عناية بالأظافر ومناكير راقية. احجزي عبر واتساب."
    : "Lustre Spa — an intimate luxury beauty sanctuary in Al Naeem, Jeddah. Premium hair styling & color, restorative treatments, manicure, pedicure and nail art. Book on WhatsApp.";

  return {
    metadataBase: new URL(BRAND.domain),
    title: { default: title, template: `%s · ${BRAND.name}` },
    description,
    applicationName: BRAND.name,
    formatDetection: { telephone: true, email: true, address: true },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: BRAND.name,
      locale: isAr ? "ar_SA" : "en_SA",
      title,
      description,
      url: `${BRAND.domain}/${locale}`,
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — ${isAr ? "سبا فاخر في جدة" : "Luxury Beauty Spa in Jeddah"}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    keywords: isAr
      ? [
          "سبا جدة",
          "افضل سبا في جدة",
          "سبا نسائي جدة",
          "سبا فاخر جدة",
          "صالون تجميل جدة",
          "صبغة شعر جدة",
          "هايلايت جدة",
          "مناكير وبديكير جدة",
          "علاج شعر جدة",
          "حي النعيم سبا",
          "فندق حديقة الياسمين",
        ]
      : [
          "spa Jeddah",
          "best spa in Jeddah",
          "luxury spa Jeddah",
          "nail spa Jeddah",
          "hair spa Jeddah",
          "beauty salon Jeddah",
          "Jeddah women spa",
          "hair color Jeddah",
          "balayage Jeddah",
          "manicure pedicure Jeddah",
          "Al Naeem spa",
          "Jasmin Garden Hotel spa",
        ],
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <html
      lang={locale === "ar" ? "ar-SA" : "en-SA"}
      dir={localeDir[locale]}
      className={`${display.variable} ${sans.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

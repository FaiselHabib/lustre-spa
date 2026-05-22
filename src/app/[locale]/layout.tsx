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

  // Title kept under ~60 chars to render fully in Google SERPs.
  const title = isAr
    ? `${BRAND.nameAr} | سبا نسائي فاخر في جدة — حيّ النعيم`
    : `${BRAND.name} | Luxury Women's Spa in Jeddah — Al Naeem`;

  // Description ~155 chars: brand → location → offering → CTA.
  const description = isAr
    ? "لاستر سبا — ملاذٌ نسائي راقٍ في حيّ النعيم بجدة، داخل فندق حديقة الياسمين. صبغة وعلاجات شعر، مناكير وبديكير، نيل آرت وفنّ أظافر. احجزي عبر واتساب."
    : "Lustre Spa — an intimate women's sanctuary in Al Naeem, Jeddah, inside Jasmin Garden Hotel. Hair color, restorative treatments, manicure, pedicure and nail art. Book on WhatsApp.";

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
      alternateLocale: isAr ? ["en_SA"] : ["ar_SA"],
      title,
      description,
      url: `${BRAND.domain}/${locale}`,
      images: [
        // JPG first for maximum social-platform compatibility (LinkedIn,
        // WhatsApp link previews, iMessage). SVG kept as a vector fallback.
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: `${BRAND.name} — ${isAr ? "سبا نسائي فاخر في جدة" : "Luxury Women's Spa in Jeddah"}`,
        },
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          type: "image/svg+xml",
          alt: `${BRAND.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
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
          "صالون نسائي جدة",
          "صالون تجميل جدة",
          "صبغة شعر جدة",
          "هايلايت جدة",
          "بلياج جدة",
          "علاج شعر جدة",
          "كيراتين جدة",
          "بروتين شعر جدة",
          "مناكير جدة",
          "بديكير جدة",
          "نيل آرت جدة",
          "تركيب أظافر جدة",
          "جل أظافر جدة",
          "حي النعيم سبا",
          "صالون حي النعيم",
          "فندق حديقة الياسمين",
          "لاستر سبا",
        ]
      : [
          "spa Jeddah",
          "best spa in Jeddah",
          "luxury spa Jeddah",
          "women's spa Jeddah",
          "ladies salon Jeddah",
          "beauty salon Jeddah",
          "nail salon Jeddah",
          "hair salon Jeddah",
          "hair color Jeddah",
          "balayage Jeddah",
          "highlights Jeddah",
          "keratin treatment Jeddah",
          "hair treatment Jeddah",
          "manicure Jeddah",
          "pedicure Jeddah",
          "nail art Jeddah",
          "gel nails Jeddah",
          "nail extensions Jeddah",
          "Al Naeem spa",
          "Al Naeem salon",
          "Jasmin Garden Hotel spa",
          "Lustre Spa",
        ],
    category: "Beauty & Wellness",
    authors: [{ name: BRAND.name, url: BRAND.domain }],
    creator: BRAND.name,
    publisher: BRAND.name,
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

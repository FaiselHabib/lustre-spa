import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildLocalBusinessSchema } from "@/lib/schema";

import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyLustre } from "@/components/sections/WhyLustre";
import { Gallery } from "@/components/sections/Gallery";
import { Hours } from "@/components/sections/Hours";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const schema = buildLocalBusinessSchema(locale);

  return (
    <>
      {/* JSON-LD structured data for rich Google results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar locale={locale} dict={dict} />
      <WhatsAppFloat locale={locale} />

      <main className="relative">
        <Hero locale={locale} dict={dict} />
        <About locale={locale} dict={dict} />
        <Services locale={locale} dict={dict} />
        <WhyLustre locale={locale} dict={dict} />
        <Gallery locale={locale} dict={dict} />
        <Hours locale={locale} dict={dict} />
        <Location locale={locale} dict={dict} />
        <FinalCTA locale={locale} dict={dict} />
        <Footer locale={locale} dict={dict} />
      </main>
    </>
  );
}

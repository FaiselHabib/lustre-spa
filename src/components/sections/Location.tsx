"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BRAND } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

type Props = { locale: Locale; dict: Dictionary };

export const Location = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";

  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="relative overflow-hidden bg-ivory-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow={dict.location.eyebrow}
          title={dict.location.title}
          sub={dict.location.sub}
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 rounded-3xl border border-forest/10 bg-ivory-100 px-8 py-10 lg:col-span-2"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 text-forest">
              <MapPin className="h-5 w-5" strokeWidth={1.4} />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-luxe text-forest/55">
                {isAr ? BRAND.cityAr : BRAND.cityEn}
              </p>
              <h3 className="mt-2 font-display text-3xl text-forest-deep">
                {isAr ? BRAND.venueAr : BRAND.venueEn}
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-forest/65">
                {isAr ? BRAND.districtAr : BRAND.districtEn}
              </p>
              <p className="mt-5 text-[14.5px] leading-relaxed text-forest/70">
                {dict.location.address}
              </p>
            </div>

            <div className="mt-4">
              <Button
                as="a"
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.6} />
                {dict.cta.getDirections}
              </Button>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-forest/10 shadow-luxe-sm lg:col-span-3"
          >
            <iframe
              title={isAr ? "خريطة لاستر سبا" : "Lustre Spa map"}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Jasmin Garden Hotel, Al Naeem, Jeddah"
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full grayscale-[35%] contrast-[0.95] saturate-[0.85]"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

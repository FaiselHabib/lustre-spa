"use client";

import { motion } from "framer-motion";
import { Clock4 } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BRAND } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = { locale: Locale; dict: Dictionary };

export const Hours = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";
  const rows = [
    {
      day: isAr ? BRAND.hours.weekdays.ar : BRAND.hours.weekdays.en,
      time: BRAND.hours.weekdays.time,
    },
    {
      day: isAr ? BRAND.hours.friday.ar : BRAND.hours.friday.en,
      time: BRAND.hours.friday.time,
    },
  ];

  return (
    <section
      id="hours"
      aria-labelledby="hours-title"
      className="relative overflow-hidden bg-ivory-100 py-28 md:py-36"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <SectionHeader
          eyebrow={dict.hours.eyebrow}
          title={dict.hours.title}
          sub={dict.hours.sub}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rows.map((r, idx) => (
            <motion.div
              key={r.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex items-center gap-6 rounded-3xl border border-forest/10 bg-ivory-50 px-7 py-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest">
                <Clock4 className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-[10px] uppercase tracking-luxe text-forest/55">
                  {r.day}
                </span>
                <span className="mt-1 font-display text-2xl text-forest-deep">
                  {r.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] uppercase tracking-luxe-sm text-forest/55">
          {dict.hours.appointmentNote}
        </p>
      </div>
    </section>
  );
};

export default Hours;

"use client";

import { motion } from "framer-motion";
import { Clock4 } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BRAND } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VIEWPORT, stagger, fadeUp } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

export const Hours = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";
  const rows = [
    { day: isAr ? BRAND.hours.weekdays.ar : BRAND.hours.weekdays.en, time: BRAND.hours.weekdays.time },
    { day: isAr ? BRAND.hours.friday.ar : BRAND.hours.friday.en, time: BRAND.hours.friday.time },
  ];

  return (
    <section
      id="hours"
      aria-labelledby="hours-title"
      className="relative overflow-hidden bg-ivory-100 py-28 md:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          eyebrow={dict.hours.eyebrow}
          title={dict.hours.title}
          sub={dict.hours.sub}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5"
        >
          {rows.map((r) => (
            <motion.div
              key={r.day}
              variants={fadeUp}
              className="flex items-center gap-5 rounded-3xl border border-forest/10 bg-ivory-50 px-6 py-7 md:gap-6 md:px-7 md:py-8"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest">
                <Clock4 className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-[10px] uppercase tracking-luxe text-forest/55">{r.day}</span>
                <span className="mt-1 font-display text-2xl text-forest-deep">{r.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-[12px] uppercase tracking-luxe-sm text-forest/55">
          {dict.hours.appointmentNote}
        </p>
      </div>
    </section>
  );
};

export default Hours;

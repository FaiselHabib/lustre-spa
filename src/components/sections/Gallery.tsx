"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VIEWPORT, stagger, fadeUp } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

const TILES: { className: string; aspect: string; tint: string; label: string }[] = [
  { className: "md:col-span-4 md:row-span-2", aspect: "aspect-[3/4]", tint: "from-sand-100 via-rose-nude to-sand-200", label: "Atelier" },
  { className: "md:col-span-4", aspect: "aspect-[4/3]", tint: "from-ivory-100 via-ivory-200 to-sand-100", label: "Manicure" },
  { className: "md:col-span-4", aspect: "aspect-[4/3]", tint: "from-rose-nude via-sand-50 to-ivory-100", label: "Color Lab" },
  { className: "md:col-span-4", aspect: "aspect-[4/3]", tint: "from-forest-mid via-forest to-forest-deep", label: "Quiet Room" },
  { className: "md:col-span-4", aspect: "aspect-[4/3]", tint: "from-sand-100 via-sand-50 to-ivory-100", label: "Ritual" },
];

export const Gallery = ({ dict }: Props) => {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative overflow-hidden bg-ivory-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          sub={dict.gallery.sub}
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6"
        >
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl ${t.className} ${t.aspect}`}
            >
              {/* Pure CSS gradient tile — zero image requests, zero GPU compositing */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.tint}`} />
              {/* Noise texture — desktop only (hardware-composited separately) */}
              <div className="glow-only absolute inset-0 bg-noise opacity-[0.07]" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <span
                  className={`font-display text-base tracking-wide opacity-80 ${
                    t.tint.includes("forest") ? "text-ivory-50" : "text-forest-deep"
                  }`}
                >
                  — {t.label}
                </span>
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rotate-45 ${
                    t.tint.includes("forest") ? "bg-champagne-light" : "bg-champagne"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Divider } from "@/components/ui/Divider";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

type Props = { locale: Locale; dict: Dictionary };

export const About = ({ dict }: Props) => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-ivory-50 py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* Side label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="md:col-span-4"
        >
          <p className="text-[10px] uppercase tracking-luxe text-forest/60">
            — {dict.about.eyebrow}
          </p>
          <div className="mt-10 hidden md:block">
            <Divider className="mx-0 max-w-[180px]" />
          </div>
        </motion.div>

        {/* Body */}
        <div className="md:col-span-8">
          <motion.h2
            id="about-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="font-display text-4xl leading-[1.05] text-forest-deep md:text-6xl"
          >
            {dict.about.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-forest/70"
          >
            {dict.about.body}
          </motion.p>

          {/* Pillars */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {dict.about.pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="border-t border-forest/15 pt-6"
              >
                <h3 className="font-display text-xl text-forest-deep">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-forest/65">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

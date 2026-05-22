"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Feather,
  HeartHandshake,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

const ICONS: LucideIcon[] = [Sparkles, GraduationCap, ShieldCheck, Feather, HeartHandshake, MessageCircle];

type Props = { locale: Locale; dict: Dictionary };

export const WhyLustre = ({ dict }: Props) => {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-forest py-28 text-ivory-100 md:py-36"
    >
      {/* Base gradient — no blur layers on mobile, one simple gradient */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest to-forest-deep" />
        {/* Ambient glow — desktop only */}
        <div className="glow-only absolute -left-32 top-1/3 h-[50vh] w-[50vh] rounded-full bg-champagne/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow={dict.why.eyebrow}
          title={dict.why.title}
          sub={dict.why.sub}
          tone="dark"
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ivory-100/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {dict.why.items.map((item, idx) => {
            const Icon = ICONS[idx] ?? Sparkles;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-4 bg-forest p-7 md:p-10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ivory-100/20 text-champagne-light">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <h3 className="font-display text-2xl text-ivory-50">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ivory-100/70">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLustre;

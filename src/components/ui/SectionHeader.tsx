"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  align?: "center" | "start";
  tone?: Tone;
  className?: string;
};

const tones: Record<Tone, { eyebrow: string; rule: string; title: string; titleItalic: string; sub: string }> = {
  light: {
    eyebrow: "text-forest/70",
    rule: "bg-forest/30",
    title: "text-forest-deep",
    titleItalic: "text-forest/80",
    sub: "text-forest/65",
  },
  dark: {
    eyebrow: "text-ivory-100/70",
    rule: "bg-ivory-100/30",
    title: "text-ivory-50",
    titleItalic: "text-ivory-100/80",
    sub: "text-ivory-100/70",
  },
};

export const SectionHeader = ({
  eyebrow,
  title,
  accent,
  sub,
  align = "center",
  tone = "light",
  className,
}: Props) => {
  const t = tones[tone];

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.6, 0.35, 1] }}
        className={cn("inline-flex items-center gap-3 text-[10px] uppercase tracking-luxe", t.eyebrow)}
      >
        <span className={cn("h-px w-8", t.rule)} />
        {eyebrow}
        <span className={cn("h-px w-8", t.rule)} />
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.6, 0.35, 1] }}
        className={cn("font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl", t.title)}
      >
        {title}
        {accent && (
          <>
            <br className="hidden md:block" />
            <span className={cn("italic", t.titleItalic)}> {accent}</span>
          </>
        )}
      </motion.h2>

      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.6, 0.35, 1] }}
          className={cn("max-w-2xl text-base leading-relaxed md:text-lg", t.sub)}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;

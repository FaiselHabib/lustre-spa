/**
 * Shared Framer Motion variants & transition presets.
 *
 * Using consistent, lower-duration variants keeps the site
 * snappy on mobile while remaining elegant on desktop.
 * All scroll-triggered animations use `once: true` so they
 * never re-run (no repaints on scroll-back).
 */

export const VIEWPORT = { once: true, margin: "-60px" } as const;

/** Standard fade-up for most content elements */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.6, 0.35, 1] as const },
  },
} as const;

/** Staggered container — children animate in sequence */
export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

/** Fast fade for elements that need a quick reveal */
export const fadeFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const;

/** Hero entrance — slightly slower, runs on load not scroll */
export const heroEnter = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.21, 0.6, 0.35, 1] as const,
  },
});

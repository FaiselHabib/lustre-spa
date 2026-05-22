import { cn } from "@/lib/cn";

/**
 * Subtle film-grain overlay — hidden on mobile via .glow-only.
 * The SVG filter texture creates a compositor layer; removing it
 * on mobile eliminates a significant GPU memory allocation.
 */
export const GrainOverlay = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "glow-only pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.07]",
      className
    )}
  />
);

export default GrainOverlay;

import { cn } from "@/lib/cn";

/** Subtle film-grain overlay to add an editorial feel to large sections. */
export const GrainOverlay = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.07] mix-blend-multiply",
      className
    )}
  />
);

export default GrainOverlay;

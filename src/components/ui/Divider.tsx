import { cn } from "@/lib/cn";

/**
 * Delicate horizontal divider with a small diamond accent — used between sections.
 */
export const Divider = ({ className }: { className?: string }) => (
  <div className={cn("mx-auto flex w-full max-w-xs items-center gap-4 opacity-70", className)}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-forest/40 to-transparent" />
    <span className="block h-1.5 w-1.5 rotate-45 bg-champagne" aria-hidden />
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-forest/40 to-transparent" />
  </div>
);

export default Divider;

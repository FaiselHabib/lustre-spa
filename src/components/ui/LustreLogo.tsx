import { cn } from "@/lib/cn";

/**
 * Wordmark-style Lustre logo (inline SVG) — matches the brand mark:
 * elegant uppercase "LUSTRE" with a small "SPA" caption underneath.
 * Pure SVG so it stays crisp at any size and colors with `currentColor`.
 */
export const LustreLogo = ({
  className,
  withCaption = true,
}: {
  className?: string;
  withCaption?: boolean;
}) => {
  return (
    <span
      className={cn("inline-flex flex-col items-center leading-none", className)}
      aria-label="Lustre Spa"
    >
      <span
        className="font-display tracking-luxe text-current"
        style={{ fontFeatureSettings: '"liga" 1, "dlig" 1' }}
      >
        LUSTRE
      </span>
      {withCaption && (
        <span className="mt-1 text-[0.55em] tracking-luxe text-current/80">SPA</span>
      )}
    </span>
  );
};

export default LustreLogo;

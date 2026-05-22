import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-sans transition-all duration-500 ease-out " +
  "overflow-hidden select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px] tracking-luxe-sm uppercase",
  md: "px-7 py-3.5 text-[12px] tracking-luxe-sm uppercase",
  lg: "px-9 py-4 text-[13px] tracking-luxe uppercase",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-ivory-50 hover:bg-forest-deep shadow-luxe-sm hover:shadow-luxe",
  ghost:
    "bg-transparent text-forest hover:text-forest-deep",
  outline:
    "border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-ivory-50",
  whatsapp:
    "bg-[#1F3B33] text-ivory-50 hover:bg-[#2A4D43] shadow-luxe-sm",
};

type Common = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type LinkProps = Common & {
  as: "link";
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

export type LuxeButtonProps = AnchorProps | LinkProps | ButtonProps;

export const Button = forwardRef<HTMLElement, LuxeButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref
) {
  const classes = cn(base, sizes[size], variants[variant], className);

  // External anchor (e.g. WhatsApp / tel)
  if ((rest as AnchorProps).as === "a") {
    const { as: _as, ...anchorProps } = rest as AnchorProps;
    void _as;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorProps}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  // Internal Next.js Link
  if ((rest as LinkProps).as === "link") {
    const { as: _as, href, target, rel } = rest as LinkProps;
    void _as;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonProps;
  void _as;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
});

export default Button;

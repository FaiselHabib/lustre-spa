"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

export const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname() ?? "/";

  const other: Locale = locale === "en" ? "ar" : "en";

  // Swap the leading locale segment.
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && (locales as readonly string[]).includes(segments[0])) {
    segments[0] = other;
  } else {
    segments.unshift(other);
  }
  const href = "/" + segments.join("/");

  return (
    <Link
      href={href}
      aria-label="Switch language"
      className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-4 py-2 text-[10px] uppercase tracking-luxe text-forest transition-all duration-300 hover:border-forest/40 hover:bg-forest hover:text-ivory-50"
    >
      {other === "ar" ? "عربي" : "EN"}
    </Link>
  );
};

export default LanguageSwitcher;

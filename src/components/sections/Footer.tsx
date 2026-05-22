"use client";

import Link from "next/link";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BRAND, buildWhatsappLink } from "@/lib/constants";
import { LustreLogo } from "@/components/ui/LustreLogo";
import { Divider } from "@/components/ui/Divider";

type Props = { locale: Locale; dict: Dictionary };

export const Footer = ({ locale, dict }: Props) => {
  const isAr = locale === "ar";
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#why", label: dict.nav.why },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#hours", label: dict.nav.hours },
    { href: "#location", label: dict.nav.location },
  ];

  return (
    <footer className="relative overflow-hidden bg-ivory-100 pb-10 pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={`/${locale}`} className="inline-block text-forest-deep">
              <LustreLogo className="text-[28px]" />
            </Link>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-forest/65">
              {isAr ? BRAND.taglineAr : BRAND.tagline}
              {" — "}
              {isAr
                ? "ملاذٌ نسائي فاخر في جدة لطقوس الشعر والأظافر والعناية."
                : "A luxury beauty sanctuary in Jeddah for hair, nails, and considered care."}
            </p>
            <p className="mt-4 text-[12.5px] uppercase tracking-luxe-sm text-forest/55">
              {dict.footer.crafted}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-luxe text-forest/55">
              {dict.footer.quickLinks}
            </p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-forest-deep transition-colors hover:text-champagne-dark"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-luxe text-forest/55">
              {dict.footer.contact}
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-[14px] text-forest-deep">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest/60" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  {isAr ? BRAND.venueAr : BRAND.venueEn}
                  <br />
                  {isAr ? BRAND.districtAr : BRAND.districtEn},{" "}
                  {isAr ? BRAND.cityAr : BRAND.cityEn}
                </span>
              </li>
              <li>
                <a
                  href={buildWhatsappLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[14px] text-forest-deep transition-colors hover:text-champagne-dark"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-forest/60" strokeWidth={1.5} />
                  {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${BRAND.whatsappNumber}`}
                  className="inline-flex items-center gap-3 text-[14px] text-forest-deep transition-colors hover:text-champagne-dark"
                >
                  <Phone className="h-4 w-4 shrink-0 text-forest/60" strokeWidth={1.5} />
                  {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[14px] text-forest-deep transition-colors hover:text-champagne-dark"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-forest/60" strokeWidth={1.5} />
                  {BRAND.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <Divider />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-[11px] uppercase tracking-luxe-sm text-forest/50 md:flex-row md:gap-2 md:text-start">
          <span>
            © {year} {isAr ? BRAND.nameAr : BRAND.name}. {dict.footer.rights}
          </span>
          <span>
            {isAr ? BRAND.cityAr : BRAND.cityEn} ·{" "}
            {isAr ? "المملكة العربية السعودية" : "Saudi Arabia"}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { buildWhatsappLink } from "@/lib/constants";

export const WhatsAppFloat = ({ locale }: { locale: Locale }) => {
  const isAr = locale === "ar";

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
      href={buildWhatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isAr ? "احجزي عبر واتساب" : "Book on WhatsApp"}
      className="group fixed bottom-6 z-40 flex items-center gap-3 rounded-full bg-forest px-5 py-4 text-ivory-50 shadow-luxe transition-colors duration-300 hover:bg-forest-deep ltr:right-6 rtl:left-6"
    >
      {/* No blur/float animation — those are expensive GPU operations on mobile */}
      <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
      <span className="hidden text-[11px] uppercase tracking-luxe-sm md:inline">
        {isAr ? "احجزي الآن" : "Book Now"}
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;

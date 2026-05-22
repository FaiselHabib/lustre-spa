"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { buildWhatsappLink } from "@/lib/constants";

export const WhatsAppFloat = ({ locale }: { locale: Locale }) => {
  const isAr = locale === "ar";
  return (
    <motion.a
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
      href={buildWhatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isAr ? "احجزي عبر واتساب" : "Book on WhatsApp"}
      className="group fixed bottom-6 z-40 flex items-center gap-3 rounded-full bg-forest px-5 py-4 text-ivory-50 shadow-luxe transition-all duration-500 hover:bg-forest-deep hover:shadow-[0_30px_60px_-20px_rgba(31,59,51,0.4)] ltr:right-6 rtl:left-6"
    >
      <span className="absolute inset-0 -z-10 animate-soft-float rounded-full bg-forest/30 blur-2xl" />
      <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
      <span className="hidden text-[11px] uppercase tracking-luxe-sm md:inline">
        {isAr ? "احجزي الآن" : "Book Now"}
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;

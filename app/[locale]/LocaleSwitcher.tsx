"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "motion/react";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

/** Mirrors the hamburger button's whileTap + bg-white/10 pattern from header.tsx */
export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname(); // locale-stripped path from next-intl

  const nextLocale: Locale = locale === "id" ? "en" : "id";

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      onClick={handleSwitch}
      /**
       * Desktop: sits in the right slot of the navbar row.
       * Mobile: rendered inside the right-side group next to the hamburger.
       *
       * Size & shape mirrors the hamburger button (w-9 h-9 rounded-lg).
       * Active locale uses the same red accent from the mobile nav links:
       *   bg-red-500/20 border-red-500/40 text-red-400
       * Inactive locale mirrors the hamburger idle state:
       *   bg-white/10 text-zinc-300
       */
      className="
        w-9 h-9 flex items-center justify-center rounded-lg
        border font-semibold text-xs tracking-widest uppercase
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30
        bg-red-500/20 border-red-500/40 text-red-400
        hover:bg-red-500/30 hover:border-red-500/60
        shrink-0
      "
      aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {locale.toUpperCase()}
    </motion.button>
  );
}

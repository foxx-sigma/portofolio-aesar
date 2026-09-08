import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  /** Default locale (id) has no URL prefix; secondary locale (en) gets /en/ */
  localePrefix: "as-needed",
  /** Auto-detect locale from Accept-Language browser header */
  localeDetection: true,
});

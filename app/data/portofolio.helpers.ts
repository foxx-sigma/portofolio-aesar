import type { PortofolioItem } from "./portofolio.id";
import { arrayPortoID } from "./portofolio.id";
import { arrayPortoEN } from "./portofolio.en";

export type { PortofolioItem };

/**
 * Returns the locale-appropriate portfolio data array.
 * Falls back to Indonesian for any unrecognized locale.
 */
export function getPortofolioData(locale: string): PortofolioItem[] {
  return locale === "en" ? arrayPortoEN : arrayPortoID;
}

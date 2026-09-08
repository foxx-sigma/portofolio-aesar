import type { PengalamanItem } from "./pengalaman.id";
import { arrayPengalamanID } from "./pengalaman.id";
import { arrayPengalamanEN } from "./pengalaman.en";

export type { PengalamanItem };

/**
 * Returns the locale-appropriate experience data array.
 * Falls back to Indonesian for any unrecognized locale.
 */
export function getPengalamanData(locale: string): PengalamanItem[] {
  return locale === "en" ? arrayPengalamanEN : arrayPengalamanID;
}

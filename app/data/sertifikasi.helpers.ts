import type { CertificateItem } from "./sertifikasi.id";
import { arraySertifikasiID } from "./sertifikasi.id";
import { arraySertifikasiEN } from "./sertifikasi.en";

export type { CertificateItem };

/**
 * Returns the locale-appropriate certification data array.
 * Falls back to Indonesian for any unrecognized locale.
 */
export function getSertifikasiData(locale: string): CertificateItem[] {
  return locale === "en" ? arraySertifikasiEN : arraySertifikasiID;
}

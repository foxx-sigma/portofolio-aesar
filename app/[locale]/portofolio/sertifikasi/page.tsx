import { getSertifikasiData } from "@/app/data/sertifikasi.helpers";
import SertifikasiClient from "./SertifikasiClient";

export default async function SertifikasiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SertifikasiClient certificates={getSertifikasiData(locale)} />;
}

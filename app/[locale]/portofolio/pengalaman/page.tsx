import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPengalamanData } from "@/app/data/pengalaman.helpers";
import PengalamanClient from "./PengalamanClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("experienceTitle"),
    description: t("experienceDesc"),
  };
}

export default async function PengalamanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PengalamanClient items={getPengalamanData(locale)} />;
}

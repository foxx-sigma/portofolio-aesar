import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPengalamanData } from "@/app/data/pengalaman.helpers";
import { notFound } from "next/navigation";
import PengalamanDetailClient from "./PengalamanDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const item = getPengalamanData(locale).find((p) => p.id === parseInt(id));
  if (!item) {
    const t = await getTranslations("metadata");
    return { title: t("notFound") };
  }
  return {
    title: `${item.nama} — Aesar`,
    description: item.deskripsiSingkat,
  };
}

export default async function PengalamanDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const item = getPengalamanData(locale).find((p) => p.id === parseInt(id));

  if (!item) {
    notFound();
  }

  return <PengalamanDetailClient item={item} />;
}

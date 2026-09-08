import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutClient from "./AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("aboutTitle"),
    description: t("aboutDesc"),
  };
}

export default function AboutPage() {
  return <AboutClient />;
}

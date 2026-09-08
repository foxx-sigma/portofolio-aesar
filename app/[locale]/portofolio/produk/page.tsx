import { getPortofolioData } from "@/app/data/portofolio.helpers";
import PortfolioClient from "./PortofolioClient";

export default async function PortfolioProdukPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PortfolioClient projects={getPortofolioData(locale)} />;
}

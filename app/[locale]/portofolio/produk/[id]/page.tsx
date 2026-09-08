import { getPortofolioData } from "@/app/data/portofolio.helpers";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const project = getPortofolioData(locale).find(
    (p) => p.id === parseInt(id)
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

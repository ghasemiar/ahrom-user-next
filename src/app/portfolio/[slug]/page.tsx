import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/PortfolioDetailsContent";
import { projects } from "../../../../data/projects";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const project = projects.find((obj) => obj.slug == slug);

  return {
    title: project?.title,
    description: project?.description,
  };
}

//work on build but not work on local
export const dynamicParams = false;

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((obj) => obj.slug == slug);

  return (
    <>
      {project && (
        <>
          <PageBanner pageTitle={project.title} BGImage={project.bannerImage} />
          <PortfolioDetailsContent project={project} />
        </>
      )}
    </>
  );
}

export function generateStaticParams() {
  const test = projects.map((project) => ({
    slug: project.slug,
  }));
  console.log(test);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

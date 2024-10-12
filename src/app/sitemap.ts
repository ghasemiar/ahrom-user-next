import { projects } from "../../data/projects";
import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/api";

const URL: string = "https://ahromtech.ir";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();
  const projectList = projects.map((proj) => ({
    url: `${URL + "/portfolio/" + proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const postList = posts.map((post) => ({
    url: `${URL + "/blog/" + post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.99,
    },
    {
      url: `${URL + "/portfolio"}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL + "/blog"}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL + "/about"}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    //@ts-ignore
    ...projectList,

    //@ts-ignore
    ...postList,
  ];
}

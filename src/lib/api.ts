import { Post } from "@/types";
import axios from "axios";
import { cache } from "react";

const API_BASE_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api` || "https://api.example.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllBlogPosts = cache(async (): Promise<Post[]> => {
  try {
    const { data } = await api.get("/post");

    return data.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
});

export const getBlogPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    const response = await api.get(`/post/slug/${slug}`);

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null; // Post not found
    }
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    throw new Error(`Failed to fetch blog post with slug ${slug}`);
  }
});

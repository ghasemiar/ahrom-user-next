export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
  author: { username: string };
  published_at: string;
  image: string;
  categories?: category[];
  excerpt?: string;
  description?: string;
  keywords?: string;
  tags?: tag[];
  related_post: Post[];
};
export type tag = {
  id: number;
  name: string;
};
export type category = {
  id: number;
  name: string;
};

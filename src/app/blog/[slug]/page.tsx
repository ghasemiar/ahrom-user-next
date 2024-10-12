import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost } from "@/lib/api";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import ErrorContent from "@/components/Error/ErrorContent";
import { convertData, getImageUrl } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The blog post you are looking for was not found.",
    };
  }

  return {
    title: post.title, // Dynamic title
    description: post.description, // Dynamic description
    keywords: post.keywords || "", // Dynamic keywords
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: getImageUrl(post.image),
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return <ErrorContent />;
  }

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.keywords} />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details tw-border-2 tw-rounded-lg">
                <div className="article-img">
                  <Image
                    className="tw-rounded-lg"
                    src={getImageUrl(post.image)}
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link className="!tw-text-white" href="/blog">
                        {post.author.username}
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>{" "}
                      {convertData(post.published_at)}
                    </li>
                  </ul>
                  <div className="tw-aling-center">
                    <article
                      className="tw-prose !tw-max-w-none lg:tw-prose-xl tw-m-auto"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="tags tw-text-gray-300">
                      برچسب ها :
                      <div className="tw-my-2">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded bg-gray-700 tw-text-green-400 tw-border tw-border-green-400"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20 tw-text-white">
                <BlogSidebar posts={post.related_post && post.related_post} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

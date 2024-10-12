import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/api";
import { convertData, getImageUrl } from "@/lib/utils";

const BlogGrid: React.FC = async () => {
  const posts = await getAllBlogPosts();

  return (
    <>
      <div className="blog-area ptb-100">
        <div className="section-title">
          <h2 className="!tw-text-white">پست ها</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {posts &&
              posts?.map((post, i) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="400"
                  data-aos-delay="100"
                >
                  <div className="single-blog-item tw-border-solid tw-border-2 tw-border-[#a4a4a4]">
                    <div className="blog-image tw-w-full tw-h-[300px]">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={getImageUrl(post.image)}
                          alt="image"
                          layout={"fill"}
                        />
                      </Link>

                      <div className="post-tag tw-inline-block">
                        <Link
                          className="!tw-bg-[#573a3a]"
                          href={`/blog/${post.slug}`}
                        >
                          {post.categories &&
                            post.categories.length > 0 &&
                            post.categories
                              .map((category) => category.name)
                              .join(", ")}
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content tw-bg-[#262e40]">
                      <span className="date">
                        {convertData(post.published_at)}
                      </span>
                      <h3>
                        <Link
                          className="!tw-text-white"
                          href={`/blog/${post.slug}`}
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="!tw-text-white">{post.excerpt}</p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="read-more-btn !tw-text-white"
                      >
                        بیشتر بخوانید
                        <i className="fa-solid fa-angles-left"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogGrid;

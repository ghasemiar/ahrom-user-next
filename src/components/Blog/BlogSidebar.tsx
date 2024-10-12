"use client";

import React from "react";
import { Post } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl, truncateText } from "@/lib/utils";

function BlogSidebar({ posts }: { posts?: Post[] }) {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/*<div className="widget widget_search">*/}
        {/*  <form className="search-form" onSubmit={(e) => e.preventDefault()}>*/}
        {/*    <label>*/}
        {/*      <input*/}
        {/*        type="search"*/}
        {/*        className="search-field"*/}
        {/*        placeholder="Search..."*/}
        {/*      />*/}
        {/*    </label>*/}
        {/*    <button type="submit" className="search-submit !tw-bg-[#573a3a]">*/}
        {/*      <i className="fa-solid fa-magnifying-glass"></i>*/}
        {/*    </button>*/}
        {/*  </form>*/}
        {/*</div>*/}

        <div className="widget widget_posts_thumb">
          <h3 className="widget-title tw-text-white">آگهی های مرتبط</h3>
          {posts && posts.length > 0
            ? posts.map((post, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="tw-w-full tw-rounded-lg tw-border tw-p-4 tw-flex tw-gap-4"
                >
                  <Image
                    width={100}
                    height={100}
                    src={getImageUrl(post.image)}
                    alt="image"
                  />
                  <div>
                    <h5 className="tw-text-xl">{post.title}</h5>
                    <div className="tw-text-gray-200">
                      {post.description && truncateText(post.description, 70)}
                    </div>
                  </div>
                </Link>
              ))
            : "چیزی پیدا نشد"}
        </div>
      </div>
    </>
  );
}

export default BlogSidebar;

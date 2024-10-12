"use client";

import React from "react";
import Post1 from "@/components/Blog/posts/Post1";

export default function Page() {
  return (
    <>
      <title>{"اهرم تک - رمز و راز های چند فروشندگی"}</title>
      <meta
        name="description"
        content={
          "چند فروشندگی چیست و مزایای آن برای فروشندگان و مشتریان چه میباشد؟"
        }
      />
      <Post1 />
    </>
  );
}

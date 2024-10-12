import React from "react";
import { Metadata } from "next";
import BlogGridThree from "@/components/Blog/BlogGridThree";

export const metadata: Metadata = {
  title:
    "بلاگ شرکت فناوری اهرم - اهرم تک - شرکت برنامه نویسی کرمان - تولید نرم افزار کرمان",
  description: "پست های نوشته شده برای افزایش اطلاعات فردی و دنیای تکنولوژی",
};
export default function Page() {
  return (
    <>
      <BlogGridThree />
    </>
  );
}

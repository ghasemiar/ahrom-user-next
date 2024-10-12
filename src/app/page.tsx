import React from "react";
import Header from "@/components/Home/Header";
import OurServices from "@/components/Home/OurServices";
import FeaturedServices from "@/components/Home/FeaturedServices";
import Screenshots from "@/components/Home/Screenshots";
import MainActivityArea from "@/components/Home/MainActivityArea";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اهرم تک - تیم توسعه اپلیکیشن های موبایل و تحت وب",
  description:
    "اهرم تک اهرم تبدیل رویا به واقعیت شرکت فناوری اهرم به عنوان یکی از برترین شرکتهای فناوری در حوزه توسعه نرم افزار، مهندسی نرم افزار، و راهکارهای دیجیتالی معرفی میشود.",
};
export default function Home() {
  return (
    <>
      <Header />
      <OurServices />
      <FeaturedServices />
      <Screenshots />
      <MainActivityArea />
      {/*<TeamStyleFour />*/}
    </>
  );
}

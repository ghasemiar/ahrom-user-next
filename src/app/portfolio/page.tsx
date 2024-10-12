import React from "react";
import OurWorks from "../../components/HomePages/PortfolioAgency/OurWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اهرم تک - پروژه های ما",
  description: "پروژه های ساخته شده و توسعه داده شده توسط تیم ما",
};
export default function Page() {
  return (
    <>
      <OurWorks />
    </>
  );
}

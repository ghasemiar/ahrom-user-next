import React from "react";
import AboutContent from "../../components/About/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اهرم تک - درباره تیم تولید نرم افزار فناوری اهرم - فناوری اهرم کرمان",
  description:
    "شرکت ما با بیش از پنج سال تجربه در زمینه تولید نرم‌افزارهای خدماتی، چند فروشگاهی و رزرو آنلاین در کرمان، در راستای توسعه فناوری‌های نوین، ارائه خدماتی با کیفیت و ایجاد راحتی برای مشتریان خود فعالیت می‌نماید.",
};
export default function Page() {
  return (
    <>
      <AboutContent />
      {/*<TeamStyleFour />*/}
    </>
  );
}

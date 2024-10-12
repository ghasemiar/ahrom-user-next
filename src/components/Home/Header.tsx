"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo/Logo.png";

const Header: React.FC = () => {
  return (
    <section className="md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile sm:tw-mt-12 tw-mt-6">
      <div className="tw-flex tw-items-center tw-bg-[#573a3a] tw-text-white tw-rounded-xl tw-border-solid tw-border-2 tw-border-[#a4a4a4] md:tw-p-lvl-2-desktop tw-p-lvl-2-mobile">
        <Image
          src={logo}
          alt="logo"
          className="lg:tw-block tw-hidden tw-h-[150px] tw-w-auto"
        />
        <div className="lg:tw-mr-lvl-3-desktop">
          <Image
            src={logo}
            alt="logo"
            width={23}
            height={23}
            className="xl:tw-hidden 2xl:tw-hidden lg:tw-hidden tw-inline-block tw-ml-1"
          />
          <h1 className="tw-inline-block tw-font-bold tw-text-white md:tw-text-3xl tw-text-[23px]">
            اهرم رویا به واقعیت
          </h1>
          <br />
          <p className="tw-text-justify tw-text-white md:tw-text-lg tw-mt-lvl-1-mobile">
            با افتخار، شرکت فناوری اهرم به عنوان یکی از برترین شرکتهای فناوری در
            حوزه توسعه نرم افزار، مهندسی نرم افزار، و راهکارهای دیجیتالی معرفی
            میشود. ما در اهرم به طراحی و ارائه راهکارهایی مبتنی بر فناوری برای
            سازمانها، شرکتها و مشتریان مختلف متعهد هستیم با تمرکز بر جوانب
            نوآورانه و کیفیت ما به ارائه بهترین خدمات و محصولات در دنیای
            دیجیتالی می پردازیم
          </p>
        </div>
      </div>
    </section>
  );
};
export default Header;

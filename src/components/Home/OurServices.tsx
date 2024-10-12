"use client";

import React from "react";
import Image from "next/image";
import AppAndWebDesing from "@/../public/ServicesLogo/AppAndWebDesing.png";
import ProvidingSoftwareSystems from "@/../public/ServicesLogo/ProvidingSoftwareSystems.png";
import DataAnalysis from "@/../public/ServicesLogo/DataAnalysis.png";

const Header: React.FC = () => {
  return (
    <section className="md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile tw-mt-12">
      <h1 className="tw-text-white md:tw-text-3xl tw-text-2xl">خدمات ما</h1>
      <div className="tw-grid tw-grid-cols-1 lg:tw-justify-items-center lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4 tw-mt-5 md:tw-p-lvl-2-desktop tw-p-lvl-2-mobile">
        <div className="tw-flex tw-text-white">
          <Image
            src={AppAndWebDesing}
            alt="طراحی وبسایت و اپلیکیشن"
            className="tw-hidden tw-w-auto tw-h-[110px] sm:tw-block"
          />
          <div className="tw-p-3">
            <h2 className="tw-text-white tw-font-bold tw-text-lg">
              <Image
                src={AppAndWebDesing}
                alt="طراحی وبسایت و اپلیکیشن"
                className="sm:tw-hidden tw-inline-block tw-w-auto tw-h-[40px] tw-ml-2"
              />
              طراحی وبسایت و اپلیکیشن
            </h2>
            <div className=" tw-text-justify">
              طراحی و ساخت انواع وبسایت ها و اپلیکیشن های تخصصی
            </div>
          </div>
        </div>
        <div className="tw-flex tw-text-white">
          <Image
            src={ProvidingSoftwareSystems}
            alt="ارائه سیستم های نرم افزاری
"
            className="tw-hidden sm:tw-block tw-w-auto tw-h-[110px]"
          />
          <div className="tw-p-3">
            <h2 className="tw-text-white tw-font-bold tw-text-lg">
              <Image
                src={ProvidingSoftwareSystems}
                alt="ارائه سیستم های نرم افزاری
"
                className="sm:tw-hidden tw-inline-block tw-w-auto tw-h-[40px] tw-ml-2"
              />
              ارائه سیستم های نرم افزاری
            </h2>
            <div className="tw-tracking-wider tw-text-justify">
              ارائه و تولید سریع انواع سیستم های نرم افزاری با سرعت بسیار بالا
              با استفاده از تکنولوژی سیستم ساز
            </div>
          </div>
        </div>
        <div className="tw-flex tw-text-white lg:tw-col-span-2 xl:tw-col-span-1">
          <Image
            src={DataAnalysis}
            alt="داده کاوی
"
            className="tw-hidden sm:tw-block tw-w-auto tw-h-[110px]"
          />
          <div className="tw-p-3">
            <h2 className="tw-text-white tw-font-bold tw-text-lg">
              <Image
                src={DataAnalysis}
                alt="داده کاوی"
                className="sm:tw-hidden tw-inline-block tw-ml-2 tw-w-auto tw-h-[40px]"
              />
              داده کاوی
            </h2>
            <div className="tw-tracking-wider tw-text-justify">
              مشاوره و ارائه راهکار های مدرن توسط داده کاوی برای پیش بینی روند
              رشد و نقاط ضعف و قوت
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;

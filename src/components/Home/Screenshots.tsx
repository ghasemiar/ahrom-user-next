"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";

import karbam from "@/../public/images/projects/karbam/karbam-banner.jpg";
import hse from "@/../public/images/projects/hse/hse-banner.jpg";
import taak from "@/../public/images/projects/taak/taak-banner.jpg";
import rooz from "@/../public/images/projects/rooz/banner.png";
import tablo from "@/../public/images/projects/tablo/banner.jpg";
import tennis from "@/../public/images/projects/tennis/11.png";
import digimall from "@/../public/images/projects/digimall/main-banner.png";
import eepa from "@/../public/images/projects/eepa/eepa-main-banner.jpg";

const data = [
  {
    title: "چند فروشندگی",
    link: "/portfolio/karbam-multi-vendor",
    image: karbam,
  },
  {
    title: "سامانه ایمنی",
    link: "/portfolio/ahrom-hse",
    image: hse,
  },
  {
    title: "ثبت آگهی و مناقصه",
    link: "/portfolio/rooz-registration-of-advertisements-and-tenders",
    image: rooz,
  },
  {
    title: "سامانه تخفیف و حراجی",
    link: "/portfolio/multi-vendor-and-multi-store",
    image: taak,
  },
  {
    title: "معرفی مراکز",
    link: "/portfolio/tablo-introduction-of-centers",
    image: tablo,
  },
  { title: "رزرو تنیس", link: "/portfolio/tennis-reserve", image: tennis },
  {
    title: "فروشگاه دیجی مال",
    link: "/portfolio/digi-mall-store",
    image: digimall,
  },
  {
    title: "حضور غیاب و آزمون آنلاین",
    link: "/portfolio/absence-attendance-and-online-test",
    image: eepa,
  },
];
const Screenshots: React.FC = () => {
  return (
    <section className="tw-mt-12 md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile">
      <div className="screenshots-area tw-bg-[#3f3e3e] tw-rounded-3xl">
        <div className="md:tw-p-lvl-2-desktop tw-p-lvl-2-mobile">
          <Tabs>
            <div className="tw-grid lg:tw-grid-cols-4 tw-grid-cols-1 tw-gap-8 tw-content-center">
              <TabList className="tw-grid-cols-1">
                <div className="tw-bg-[#393e4c] tw-p-4 tw-rounded-lg tw-border-solid tw-border-2 tw-border-[#a4a4a4]">
                  <div className="tw-flex tw-items-center tw-justify-center tw-text-white tw-text-xl tw-mb-4 tw-border-b-2">
                    <h1 className="tw-mb-4 tw-text-white">نمونه کارها</h1>
                  </div>
                  {data.map((item, index) => (
                    <Tab
                      key={index}
                      className="tw-cursor-pointer tw-w-full tw-my-2 tw-text-white tw-bg-[#303238] hover:tw-bg-[#583c46] tw-h-14 tw-flex tw-items-center tw-justify-center tw-p-5 tw-rounded-lg tw-border-solid tw-border-2 tw-border-[#a4a4a4]"
                    >
                      {item.title}
                    </Tab>
                  ))}
                </div>
              </TabList>

              <div className="lg:tw-col-span-3 tw-my-auto">
                {data.map((item, index) => (
                  <TabPanel key={index}>
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        className="tw-rounded-lg tw-h-full tw-w-full"
                      />
                    </Link>
                  </TabPanel>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

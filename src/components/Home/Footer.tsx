"use client";

import React from "react";
import Link from "next/link";
import NextLogo from "@/../public/logo/nextlogo.svg";
import Image from "next/image";

export const projects = [
  {
    title: "چند فروشندگی",
    link: "/portfolio/karbam-multi-vendor",
  },
  {
    title: "سامانه مدیریت ایمنی",
    link: "/portfolio/ahrom-hse",
  },
  {
    title: "ثبت آگهی و مناقصه",
    link: "/portfolio/rooz-registration-of-advertisements-and-tenders",
  },
  {
    title: "معرفی مراکز",
    link: "/portfolio/tablo-introduction-of-centers",
  },
  {
    title: "رزرو تنیس",
    link: "/portfolio/tennis-reserve",
  },
  {
    title: "فروشگاه دیجی مال",
    link: "/portfolio/digi-mall-store",
  },
  {
    title: "حضور غیاب و آزمون آنلاین",
    link: "/portfolio/absence-attendance-and-online-test",
  },
];

export const recentPosts = [
  {
    title: "رمز و راز بازار چند فروشندگی، نعمتی برای خریداران و فروشندگان",
    link: "/blog/the-secret-of-multi-vendor",
  },
];
const Footer: React.FC = () => {
  return (
    <section className="tw-bg-[#573a3a] tw-text-white tw-rounded-t-xl md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile tw-border-solid tw-border-2 tw-border-[#a4a4a4]">
      <div className="tw-grid lg:tw-grid-cols-4 sm:tw-grid-cols-2 tw-gap-4 tw-p-lvl-2-desktop">
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="500"
        >
          <h3 className="tw-text-white">صفحات</h3>
          <ul className="list">
            <li className="tw-mx-3">
              <Link className="tw-text-white" href="/">
                خانه
              </Link>
            </li>
            <li className="tw-mx-3">
              <Link className="tw-text-white" href="/about">
                درباره ما
              </Link>
            </li>
            <li className="tw-mx-3">
              <Link className="tw-text-white" href="/blog">
                پست ها
              </Link>
            </li>
            <li className="tw-mx-3">
              <Link className="tw-text-white" href="/portfolio">
                پروژه ها
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <h3 className="tw-text-white">پروژه های اخیر</h3>
          <ul className="list">
            {projects.map((project, index) => (
              <li key={index} className="tw-mx-3">
                <Link className="tw-text-white" href={project.link}>
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <h3 className="tw-text-white">پست های اخیر</h3>
          <ul className="list">
            {recentPosts.map((post, index) => (
              <li key={index} className="tw-mx-3">
                <Link className="tw-text-white" href={post.link}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <h3 className="tw-text-white">راه های ارتباطی</h3>
          <ul className="list">
            <li className="tw-mx-3">
              <Link href="tel:09130909729">
                <i className="fa-solid fa-headset tw-pl-2"></i>
                09130909729
              </Link>
            </li>
            <li className="tw-mx-3">
              <Link href="tel:09371417732">
                <i className="fa-solid fa-headset tw-pl-2"></i>
                09371417732
              </Link>
            </li>
            <li className="tw-mx-3">
              <Link href="mailto:info@ahromtech.com">
                <i className="fa-solid fa-envelope tw-pl-2"></i>
                info@ahromtech.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="tw-mx-lvl-2-desktop tw-my-lvl-2-desktop" />
      <div className="lg:tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-lvl-2-desktop md:tw-text-justify text-center ">
        <div className="md:tw-text-lg sm:tw-text-md tw-text-sm tw-text-[#cbd5e1] lg:tw-text-justify tw-text-center">
          تمامی حقوق مادی و معنوی متعلق به شرکت فناوری اهرم ارتباطات آکام می
          باشد
        </div>
        <div className="tw-mb-lvl-2-desktop tw-bg-[#a4a4a4] tw-p-lvl-3-desktop tw-rounded-lg tw-bg-opacity-30 tw-inline-block">
          قدرت گرفته از{" "}
          <Link href={"https://nextjs.org/"}>
            <Image
              className="tw-inline-block"
              src={NextLogo}
              height={18}
              width={18}
              alt="next js logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Footer;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../../public/logo/nextlogo.svg";
import { projects, recentPosts } from "./Footer";

const MobileFooter: React.FC = () => {
  const [show, setShow] = useState(0);

  return (
    <footer className="tw-bg-[#573a3a] tw-text-white tw-rounded-t-xl md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile tw-border-solid tw-border-2 tw-border-[#a4a4a4]">
      <section className="tw-grid tw-gap-4 tw-p-lvl-2-desktop">
        <div className="single-footer-widget !tw-m-0">
          <h3
            onClick={() => (show == 1 ? setShow(0) : setShow(1))}
            className="tw-text-white tw-flex tw-justify-between"
          >
            <span>صفحات</span>
            <span
              className={`tw-transition-all tw-duration-300 ${
                show == 1 ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              <i style={{ fontSize: "28px" }} className="pe-7s-angle-up"></i>
            </span>
          </h3>

          <ul
            className={`list tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
              show == 1 ? "tw-max-h-[1000px]" : "tw-max-h-[0px]"
            }`}
          >
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
        <div className="single-footer-widget !tw-m-0">
          <h3
            onClick={() => (show == 2 ? setShow(0) : setShow(2))}
            className="tw-text-white tw-flex tw-justify-between"
          >
            <span>پروژه های اخیر</span>
            <span
              className={`tw-transition-all tw-duration-300 ${
                show == 2 ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              <i style={{ fontSize: "28px" }} className="pe-7s-angle-up"></i>
            </span>
          </h3>

          <ul
            className={`list tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
              show == 2 ? "tw-max-h-[1000px]" : "tw-max-h-[0px]"
            }`}
          >
            {projects.map((item, index) => (
              <li key={index} className="tw-mx-3">
                <Link className="tw-text-white" href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="single-footer-widget !tw-m-0">
          <h3
            onClick={() => (show == 3 ? setShow(0) : setShow(3))}
            className="tw-text-white tw-flex tw-justify-between"
          >
            <span>پست های اخیر</span>
            <span
              className={`tw-transition-all tw-duration-300 ${
                show == 3 ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              <i style={{ fontSize: "28px" }} className="pe-7s-angle-up"></i>
            </span>
          </h3>

          <ul
            className={`list tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
              show == 3 ? "tw-max-h-[1000px]" : "tw-max-h-[0px]"
            }`}
          >
            {recentPosts.map((post, index) => (
              <li key={index} className="tw-mx-3">
                <Link className="tw-text-white" href={post.link}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="single-footer-widget !tw-m-0">
          <h3
            onClick={() => (show == 4 ? setShow(0) : setShow(4))}
            className="tw-text-white tw-flex tw-justify-between"
          >
            <span>راه های ارتباطی</span>
            <span
              className={`tw-transition-all tw-duration-300 ${
                show == 4 ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              <i style={{ fontSize: "28px" }} className="pe-7s-angle-up"></i>
            </span>
          </h3>

          <ul
            className={`list tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
              show == 4 ? "tw-max-h-[1000px]" : "tw-max-h-[0px]"
            }`}
          >
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
      </section>
      <hr className="tw-mx-lvl-2-desktop tw-my-lvl-2-desktop" />
      <div className="lg:tw-flex tw-mb-lvl-3-mobile tw-flex-row tw-justify-between tw-items-center tw-px-lvl-2-desktop md:tw-text-justify text-center ">
        <div className="tw-text-sm tw-text-[#cbd5e1] lg:tw-text-justify tw-text-center">
          تمامی حقوق مادی و معنوی متعلق به شرکت فناوری اهرم ارتباطات آکام می
          باشد
        </div>
        <div className="tw-bg-[#a4a4a4] tw-p-lvl-3-desktop tw-rounded-lg tw-bg-opacity-30 tw-inline-block">
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
    </footer>
  );
};
export default MobileFooter;

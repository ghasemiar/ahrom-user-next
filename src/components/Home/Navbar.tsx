"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo/Logo.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathName = usePathname();

  return (
    <nav className="md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile tw-py-4">
      <div className="tw-flex tw-items-center tw-justify-between">
        <Link
          href="/"
          className={`tw-flex tw-min-h-[45px] tw-items-center tw-text-[#a8a7a7] hover:tw-text-white md:tw-p-lvl-3-desktop tw-p-lvl-2-mobile tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
            pathName == "/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
          }`}
        >
          <Image src={logo} alt="لگوی سایت" width={30} height={30} />
          <div className="tw-mr-lvl-3-desktop">
            <b>فناوری اهرم</b> <br />
            <span className="tw-hidden sm:tw-inline-block">
              شرکت تولید و توسعه نرم افزار
            </span>
          </div>
        </Link>

        <div className="tw-flex tw-gap-2">
          <Link
            href="/portfolio"
            className={`tw-flex tw-min-h-[45px] tw-items-center md:tw-p-lvl-3-desktop tw-p-lvl-2-mobile hover:tw-text-white tw-text-[#a8a7a7]  tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName == "/portfolio/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            }`}
          >
            <div className="text-center">
              پروژه ها
              <br />
              <i className="fa-solid fa-layer-group"></i>
            </div>
          </Link>
          <Link
            href="/blog"
            className={`tw-flex tw-min-h-[45px] tw-items-center md:tw-p-lvl-3-desktop tw-p-lvl-2-mobile hover:tw-text-white tw-text-[#a8a7a7]  tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName == "/blog/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            }`}
          >
            <div className="text-center">
              مقالات
              <br />
              <i className="fa-solid fa-note-sticky"></i>
            </div>
          </Link>
          <Link
            href="/about"
            className={`tw-flex tw-min-h-[45px] tw-items-center md:tw-p-lvl-3-desktop tw-p-lvl-2-mobile hover:tw-text-white tw-text-[#a8a7a7]  tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName == "/about/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            }`}
          >
            <div className="text-center">
              درباره ما
              <br />
              <i className="fa-solid fa-circle-info"></i>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

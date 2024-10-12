"use client";
import React from "react";
import logo from "../../../public/logo/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar: React.FC = () => {
  const [show, useShow] = React.useState(false);
  const pathName = usePathname();

  return (
    <>
      <nav className="tw-fixed tw-top-0 tw-z-10 tw-p-3 tw-w-full tw-bg-[#343434]">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Link href="/">
            <Image src={logo} alt="لگوی سایت" width={30} height={30} />
          </Link>
          <button
            /* eslint-disable-next-line react-hooks/rules-of-hooks */
            onClick={() => useShow(!show)}
            className="tw-navbar-burger tw-flex tw-items-center tw-p-3 tw-text-white"
          >
            {show ? (
              <i className="fas fa-times tw-text-3xl"></i>
            ) : (
              <i className="fas fa-bars tw-text-3xl"></i>
            )}
          </button>
        </div>
        <ul
          className={`tw-grid tw-gap-2 tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-linear tw-mt-2 ${
            show ? "tw-max-h-[1000px]" : "tw-max-h-[0px]"
          }`}
        >
          <li
            className={`tw-mx-lvl-2-mobile tw-p-4 tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName === "/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            } ${show ? "tw-block" : "tw-hidden"}`}
          >
            <Link
              className="tw-text-white tw-flex tw-items-center tw-justify-between"
              href="/"
            >
              <span>خانه</span>
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li
            className={`tw-mx-lvl-2-mobile tw-p-4 tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] 
              ${pathName === "/about/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"}
              ${show ? "tw-block" : "tw-hidden"}`}
          >
            <Link
              className="tw-text-white tw-flex tw-items-center tw-justify-between"
              href="/portfolio"
            >
              <span>پروژه ها</span>
              <i className="fa-solid fa-layer-group"></i>
            </Link>
          </li>
          <li
            className={`tw-mx-lvl-2-mobile tw-p-4 tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName === "/about/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            } ${show ? "tw-block" : "tw-hidden"}`}
          >
            <Link
              className="tw-text-white tw-flex tw-items-center tw-justify-between"
              href="/about"
            >
              <span>درباره ما</span>
              <i className="fa-solid fa-circle-info"></i>
            </Link>
          </li>
          <li
            className={`tw-mx-lvl-2-mobile tw-p-4 tw-rounded-md tw-border-solid tw-border-2 tw-border-[#a4a4a4] ${
              pathName === "/blog/" ? "tw-bg-[#333a4b]" : "tw-bg-[#524e4e]"
            } ${show ? "tw-block" : "tw-hidden"}`}
          >
            <Link
              className="tw-text-white tw-flex tw-items-center tw-justify-between"
              href="/blog"
            >
              <span>مقالات</span>
              <i className="fa-solid fa-note-sticky"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;

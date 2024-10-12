"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import logo from "../../../public/logo/ahrom.png";

const NavbarThree: React.FC<{ isHeaderDark?: boolean }> = ({
  isHeaderDark = false,
}) => {
  // const pathname = usePathname()
  const [menu, setMenu] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
        setIsScrolled(true);
      } else {
        elementId?.classList.remove("is-sticky");
        setIsScrolled(false);
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-3">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand tw-flex">
              <Image
                src={logo}
                alt="logo"
                width={36}
                height={36}
                className="tw-h-10 tw-w-auto"
              />
              <p className="tw-pt-2">فناوری اهرم</p>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {/*<MegaMenu/>*/}
                {menus.map((menuItem) => (
                  <MenuItem
                    key={menuItem.label}
                    {...menuItem}
                    isHeaderDark={isHeaderDark}
                    isScrolled={isScrolled}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarThree;

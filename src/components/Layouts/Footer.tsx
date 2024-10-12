"use client";

import React from "react";

const Footer: React.FC = () => {
  // const currentYear = new Date().getFullYear().toLocaleString("fa-IR");

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-6 col-sm-6 justify-content-center">
                            <div
                                className="single-footer-widget ml-4 pl-5"
                                data-aos="fade-in"
                                data-aos-duration="400"
                                data-aos-delay="200"
                            >
                                <h3>کاوش کنید</h3>

                                <ul className="list tw-flex ">
                                    <li className="tw-mx-3">
                                        <Link href="/">
                                            خانه
                                        </Link>
                                    </li>
                                    <li className="tw-mx-3">
                                        <Link href="/about/">
                                            درباره ما
                                        </Link>
                                    </li>
                                    <li className="tw-mx-3">
                                        <Link href="/portfolio/">
                                            سرویس ها
                                        </Link>
                                    </li>
                                    <li className="tw-mx-3">
                                        <Link href="/blog/">
                                            پست ها
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

            <div className="col-lg-9 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="200"
                data-aos-delay="100"
              >
                <h3>راه های ارتباطی</h3>

                <ul className="get-in-touch tw-flex 2xl:tw-flex-row xl:tw-flex-row lg:tw-flex-row md:tw-flex-col sm:tw-flex-col tw-flex-col">
                  <li className="mx-2">
                    <i className="fa-solid fa-envelope"></i>
                    <a className="tw-mt-1.5" href="mailto:info@ahromtech.com">
                      info@ahromtech.com
                    </a>
                  </li>
                  <li className="mx-2">
                    <i className="fa-solid fa-headset"></i>
                    <a className="tw-mt-2" href="tel:09371417732">
                      09371417732
                    </a>
                  </li>
                  <li className="mx-2">
                    <i className="fa-solid fa-headset"></i>
                    <a className="tw-mt-2" href="tel:09130909729">
                      09130909729
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              تمامی حقوق مادی و معنوی متعلق به شرکت فناوری اهرم ارتباطات آکام می
              باشد.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

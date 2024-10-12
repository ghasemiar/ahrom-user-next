"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import bannerImg from "../../../../public/images/banner-img2.png";

const MainBanner: React.FC = () => {
  const [toggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner startup-agency startup-agency2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="md:tw-hidden col-lg-4">
                  <div
                    className="banner-image"
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="600"
                  >
                    <Image
                      src={bannerImg}
                      alt="image"
                      width={360}
                      height={160}
                    />
                  </div>
                </div>
                <div className="col-lg-8 tw-py-8 md:tw-py-0">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="200"
                    >
                      با ما همراه باشید ،تا کسب و کار خود را به اوج موفقیت
                      برسانید.
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="300"
                    >
                      با افتخار، شرکت فناوری اهرم به عنوان یکی از برترین
                      شرکت‌های فناوری در حوزهٔ توسعه نرم‌افزار، مهندسی
                      نرم‌افزار، و راهکارهای دیجیتالی معرفی می‌شود. ما در اهرم
                      به طراحی و ارائهٔ راهکارهایی مبتنی بر فناوری برای
                      سازمان‌ها، شرکت‌ها و مشتریان مختلف متعهد هستیم. با تمرکز
                      بر جوانب نوآورانه و کیفیت، ما به ارائهٔ بهترین خدمات و
                      محصولات در دنیای دیجیتالی می‌پردازیم.
                    </p>

                    {/* <Link
                                            href="/contact-us/"
                                            className="btn btn-primary"
                                            data-aos="fade-up"
                                            data-aos-duration="400"
                                            data-aos-delay="400"
                                        >
                                            شروع کنید
                                        </Link> */}
                  </div>
                </div>

                <div className="tw-hidden md:tw-block col-lg-4">
                  <div
                    className="banner-image"
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="600"
                  >
                    <Image
                      src={bannerImg}
                      alt="image"
                      width={360}
                      height={160}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

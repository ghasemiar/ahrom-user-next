"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";

import screenImg1 from "../../../../public/images/projects/taak/taak-banner.jpg";
import screenImg3 from "../../../../public/images/projects/rooz/banner.png";
import screenImg4 from "../../../../public/images/projects/tablo/banner.jpg";
import screenImg5 from "../../../../public/images/projects/digimall/main-banner.png";
import screenImg6 from "../../../../public/images/projects/eepa/eepa-main-banner.jpg";
import screenImg7 from "../../../../public/images/projects/tennis/11.png";

const Screenshots: React.FC = () => {
  return (
    <>
      <div className="screenshots-area bg-gradient ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <h2>برخی از نمونه کار های ما</h2>
          </div>

          <div className="screenshots-tabs">
            <Tabs>
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <TabList>
                    <Tab>
                      <i className="bx bx-data"></i>
                      چند فروشندگی
                    </Tab>
                    <Tab>
                      <i className="bx bx-bookmark-plus"></i>
                      رزرو تنیس
                    </Tab>
                    <Tab>
                      <i className="bx bx-file"></i>
                      فروشگاه دیجی مال
                    </Tab>
                    <Tab>
                      <i className="bx bx-file"></i>
                      ثبت آگهی و مناقصه
                    </Tab>
                    <Tab>
                      <i className="bx bx-bookmark-plus"></i>
                      معرفی مراکز
                    </Tab>
                    <Tab>
                      <i className="bx bx-bookmark-plus"></i>
                      حضور غیاب و آزمون آنلاین
                    </Tab>
                  </TabList>
                </div>

                <div className="col-lg-9 col-sm-8">
                  <TabPanel>
                    <Link href="/portfolio/1" className="">
                      <Image
                        src={screenImg1}
                        alt="screenshots 1"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>

                  <TabPanel>
                    <Link href="/portfolio/7" className="">
                      <Image
                        src={screenImg7}
                        alt="screenshots 4"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>

                  <TabPanel>
                    <Link href="/portfolio/3" className="">
                      <Image
                        src={screenImg5}
                        alt="screenshots 2"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>

                  <TabPanel>
                    <Link href="/portfolio/6" className="">
                      <Image
                        src={screenImg3}
                        alt="screenshots 3"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>

                  <TabPanel>
                    <Link href="/portfolio/4" className="">
                      <Image
                        src={screenImg4}
                        alt="screenshots 4"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>

                  <TabPanel>
                    <Link href="/portfolio/5" className="">
                      <Image
                        src={screenImg6}
                        alt="screenshots 4"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        width={1170}
                        height={748}
                        className="tw-rounded-lg"
                      />
                    </Link>
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screenshots;

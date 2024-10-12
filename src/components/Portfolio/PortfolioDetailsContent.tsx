"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Link from "next/link";
import { Iproject } from "../../../data/projects";
import Image from "next/image";

const PortfolioDetailsContent: React.FC<{ project?: Iproject }> = ({
  project,
}) => {
  return (
    <section className="tw-mb-14">
      {project && (
        <div className="portfolio-details">
          <div>
            <div className="pd-preview-img tw-bg-[#573a3a] tw-py-2 md:tw-py-8 tw-px-4">
              <Swiper
                slidesPerView={1}
                mousewheel={true}
                modules={[Mousewheel]}
                className="tw-h-48 md:tw-h-96 mySwiper"
              >
                {project.webSlider &&
                  project.webSlider.map((slide, index) => (
                    <SwiperSlide className="tw-p-2" key={index}>
                      <Image
                        src={slide.img}
                        alt={project.title}
                        height={0}
                        width={0}
                        className="tw-rounded-lg"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="container">
              <div className="tw-mt-[50px] tw-content-center tw-bg-primary-50 tw-flex  tw-flex-col tw-rounded-lg  md:tw-flex-row tw-justify-around tw-divide-y md:tw-divide-y-0 ">
                {project.buttons &&
                  project.buttons.map((buttonInfo, index) => (
                    <Link
                      key={buttonInfo.label}
                      className={`tw-w-full tw-m-1 tw-text-white tw-h-[64px] tw-text-center tw-align-bottom tw-grid tw-content-center ${
                        index == 0 ? "" : "md:tw-border-r-2"
                      }`}
                      href={buttonInfo.link}
                    >
                      {buttonInfo.label}
                    </Link>
                  ))}
              </div>

              <div className="portfolio-desc style-2 ">
                <h3 className="tw-text-white">{project.title}</h3>

                <p className="tw-text-white">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioDetailsContent;

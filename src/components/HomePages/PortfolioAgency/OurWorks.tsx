"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../../data/projects";

const OurWorks: React.FC = () => {
  return (
    <>
      <section className="case-studies-area lg-portfolio ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2 className="tw-text-white">پروژه های ما</h2>
            {/* <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                            شصت و سه درصد گذشته،
                        </p> */}
          </div>

          <div className="row justify-content-center">
            {projects &&
              projects.map((value, i) => (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6" key={i}>
                  <div
                    className="work-card tw-rounded-lg tw-border-2"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={0}
                      height={700}
                    />

                    <div className="content text-center">
                      <h3 className="tw-text-white">{value.title}</h3>

                      <Link
                        href={`/portfolio/${value.slug}`}
                        className="custom-btn"
                      >
                        جزئیات بیشتر
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;

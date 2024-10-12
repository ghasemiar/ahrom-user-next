"use client";

import React from "react";
import Link from "next/link";

const CtaAreaTwo: React.FC = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="400"
              data-aos-delay="100"
            >
              خب بعدش چی
            </span>
            <h3 data-aos="fade-in" data-aos-duration="400" data-aos-delay="200">
              آماده ای؟ بیا باهم رویا را به واقعیت تبدیل کنیم{" "}
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="400"
            data-aos-delay="300"
          >
            <Link href="/contact-us/" className="custom-btn">
              ارتباط با ما
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;

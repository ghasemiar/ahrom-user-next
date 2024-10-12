"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "../../../public/images/404.png";

const ErrorContent: React.FC = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Error" width={810} height={448} />
            <h1 className="tw-mt-12 tw-text-2xl">صفحه مورد نظر یافت نشد</h1>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;

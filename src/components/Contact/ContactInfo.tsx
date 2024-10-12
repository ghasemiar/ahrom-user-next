"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className=" pt-100 pb-70">
        <div className="container">
          <div className="">
            <div className="">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>ایمیل ما</h3>
                <p>
                  <a href="mailto:info@ahromtech.com">info@ahromtech.com</a>
                </p>
              </div>
            </div>

            <div className="">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>شماره تماس ما</h3>
                <p>
                  <a href="tel:09371417732">09371417732</a>
                </p>
                <p>
                  <a href="tel:09130909729">09130909729</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

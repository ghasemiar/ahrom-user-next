"use client";

import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/emad.jpg",
    name: "عماد میرزایی",
    designation: "مدیر عامل",
    email: "contactJosButtler@gmail.com",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/amin.jpg",
    name: "امین افضلی",
    designation: "مدیر محصول",
    email: "contactJohn@gmail.com",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/milad1.jpg",
    name: "میلاد خالقی",
    designation: "مدیر فنی",
    email: "contactNick@gmail.com",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/amirreza.jpg",
    name: "امیررضا قاسمی",
    designation: "برنامه نویس وب",
    email: "contactMiller@gmail.com",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
];

const TeamStyleFour: React.FC = () => {
  return (
    <>
      <div className="team-area tw-mt-12 md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile">
        <h1 className="md:tw-text-4xl tw-text-2xl tw-text-white tw-mb-8">
          اعضای کلیدی تیم ما
        </h1>
        <div className="md:tw-p-lvl-2-desktop tw-p-lvl-2-mobile">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-16 tw-justify-items-center ">
            {teamMemberData &&
              teamMemberData.slice(0, 4).map((value, i) => (
                <div key={i}>
                  <div
                    className="single-team"
                    data-aos="fade-in"
                    data-aos-duration="400"
                    data-aos-delay={value.aosDelay}
                  >
                    <div>
                      <Image
                        src={value.image}
                        alt={value.name + " " + value.designation}
                        width={263}
                        height={290}
                        className="tw-w-full tw-h-auto tw-rounded-t-xl tw-border-x-2 tw-border-t-2"
                      />
                    </div>

                    <div className="tw-bg-[#262e40] tw-rounded-b-xl tw-w-full tw-p-3 tw-border-x-2 tw-border-b-2">
                      <h3 className="tw-text-white md:tw-text-2xl tw-text-xl">
                        {value.name}
                      </h3>
                      <span className="tw-text-white tw-text-md">
                        {value.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleFour;

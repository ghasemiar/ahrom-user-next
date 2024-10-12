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
    designation: "مدیر بازاریابی",
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
      <div className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>تیم ما</h2>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6 tw-rounded-sm" key={i}>
                  <div
                    className="single-team"
                    data-aos="fade-in"
                    data-aos-duration="400"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="tw-rounded-t-md">
                      <Image
                        className="tw-rounded-t-lg"
                        src={value.image}
                        alt="Team Image"
                        width={0}
                        height={0}
                        style={{ width: "100%", height: "100%" }}
                      />

                      {/* <div className="overlay">
                                                <p>
                                                    Email: <span>{value.email}</span>
                                                </p>

                                                <ul>
                                                    {value.socialLinks.map((value, i) => (
                                                        <li key={i}>
                                                            <a href={value.url} target="_blank">
                                                                <i className={value.iconName}></i>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div> */}
                    </div>

                    <div className="team-content tw-rounded-b-lg">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
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

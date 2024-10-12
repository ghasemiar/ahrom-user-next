"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const featuredServicesData = [
  {
    iconName: "pe-7s-filter",
    title: "وب سایت چند فروشندگی",
    bgText: "A S",
    shortText:
      "به مشتریان خود یک تجربهٔ خرید چند فروشگاهی منحصر به فرد ارائه دهید، که از محصولات متنوع و جذاب فروشگاه‌های مختلف بهره‌مند شوند و خرید آن‌ها را با راحتی و اطمینان بیشتری انجام دهند.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-display1",
    title: "نرم افزار خدماتی",
    bgText: "Ba",
    shortText:
      "به مشتریان خود راهکارهایی هوشمند و کارآمد ارائه دهید که باعث بهبود فرآیندهای آن‌ها شده و تجربه خدمات شما را بهبود بخشد.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-plugin",
    title: "سامانه نوبت دهی",
    bgText: "Id",
    shortText:
      "به مشتریان خود این امکان را بدهید که به راحتی و بدون دردسر نوبت خود را دریافت کنند و صف‌های طولانی را از بین ببرند.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-arc",
    title: "ُسامانه معرفی مراکز",
    bgText: "Ia",
    shortText:
      "با سامانه معرفی مراکز ما، می‌توانید به سادگی مراکز مورد نیاز خود را پیدا کرده و از خدمات آن‌ها بهره‌مند شوید. این سامانه به شما اطلاعات دقیق و کاملی از مراکز مختلف را ارائه می‌دهد.",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-diamond",
    title: "سامانه رزرو ورزشی",
    bgText: "Vd",
    shortText:
      "این سامانه به شما کمک می‌کند تا به بهترین شکل ممکن ارتباط با مشتریانتان را برقرار کرده و تجربه ورزشی آن‌ها را بهبود بخشید",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-helm",
    title: "صرافی ارز دیجیتال",
    bgText: "Cs",
    shortText:
      "با ارائهٔ خدمات امن و قابل اعتماد، به شما امکان می‌دهد تا به راحتی ارزهای دیجیتال خود را مدیریت کنید و معاملات امن را انجام دهید",
    viewDetails: "/services/service-details/",
  },
];

const FeaturedServices: React.FC = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="section-title">
            <h2>سرویس های قابل ارائه</h2>
          </div>
          <div className="row tw-m-2 md:tw-m-1">
            <Swiper
              autoHeight={true}
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="col-lg-12">
                      <div className="featured-services-box tw-rounded-lg">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>

                        <h3>{value.title}</h3>

                        <p>{value.shortText}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;

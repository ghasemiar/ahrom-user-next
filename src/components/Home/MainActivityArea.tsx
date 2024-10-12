import React from "react";
import Image from "next/image";
import logo from "../../../public/ServicesLogo/MainActivityArea.png";

const MainActivityArea: React.FC = () => {
  return (
    <section className="md:tw-mx-lvl-1-desktop tw-mx-lvl-1-mobile tw-mt-12">
      <div className="tw-flex tw-text-white md:tw-p-lvl-2-desktop tw-p-lvl-2-mobile">
        <Image
          src={logo}
          alt="حوزه فعالیت اصلی"
          className="2xl:tw-block xl:tw-block lg:tw-block md:tw-block tw-hidden tw-h-[170px] tw-w-auto"
        />
        <div className="tw-mr-lvl-3-desktop">
          <h1 className=" tw-font-bold tw-text-white md:tw-text-4xl tw-text-3xl">
            <Image
              src={logo}
              alt="حوزه فعالیت اصلی"
              width={30}
              height={30}
              className="xl:tw-hidden 2xl:tw-hidden lg:tw-hidden md:tw-hidden tw-inline-block tw-ml-2"
            />
            حوزه فعالیت اصلی
          </h1>
          <br />
          <div className="tw-mt-10 tw-leading-loose tw-text-justify md:tw-text-xl tw-text-lg">
            ما با تیمی متخصص و با استفاده از آخرین دانشهای تکنولوژیک نرم
            افزارهایی با عملکرد بالا و رابط کاربری دوستانه تولید میکنیم که به
            کاربران امکان پذیرش ،آسان، مدیریت اسناد و فعالیتهای مختلف را فراهم
            میکند برنامه های ما برای ارائه راهکارهای هوشمند و یکپارچه با تمرکز
            بر افزایش بهره وری و کاهش هزینه ها در مسیری است که به کسب و کارها در
            بهبود عملکرد و رشد پایدار کمک میکند
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainActivityArea;

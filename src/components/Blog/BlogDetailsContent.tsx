"use client";

import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

import blogDetailsImg from "../../../public/images/blog/blog-details.jpg";

const BlogRightSidebar: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details tw-border-2 tw-rounded-lg">
                <div className="article-img">
                  <Image
                    className="tw-rounded-lg"
                    src={blogDetailsImg}
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link className="!tw-text-white" href="/blog">
                        ادمین
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i> March 08,
                      2022
                    </li>
                  </ul>

                  <p className="!tw-text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>

                  <blockquote className="wp-block-quote tw-bg-[#573a3a] tw-rounded-xl tw-border-solid tw-border-2 tw-border-[#a4a4a4] tw-text-white">
                    <p className="tw-text-white">
                      این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح
                      بندی آن، با محتوای قابل خواندن یک صفحه، حواسش پرت می شود.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p className="tw-text-white">
                    اما برای اینکه ببینید این همه اشتباه زاییده کسانی که لذت را
                    متهم می کنند و درد را می ستایند از کجا آمده است، من تمام
                    موضوع را باز می کنم و همان چیزهایی را که توسط آن کاشف حقیقت
                    و به قول معمار یک زندگی شاد زیرا هیچ‌کس لذت را تحقیر
                    نمی‌کند، متنفر نمی‌کند یا از آن فرار نمی‌کند، بلکه به خاطر
                    آن است که دردهای بزرگ برای کسانی است که نمی‌دانند چگونه لذت
                    را با عقل دنبال کنند.
                  </p>

                  <p className="tw-text-white">
                    علاوه بر این، کسی نیست که چون درد را دوست دارد، به دنبال آن
                    باشد و بخواهد آن را به دست آورد، بلکه به این دلیل که چنین
                    مواقعی هرگز پیش نمی آید که از طریق کار و درد به دنبال لذتی
                    بزرگ باشد. برای رسیدن به کوچکترین جزئیات، کدام یک از ما
                    تمرینات بدنی پر زحمتی را انجام می دهد، مگر اینکه از آن بهره
                    ای ببریم؟ اما چه کسی می‌تواند به درستی از کسی که می‌خواهد در
                    آن لذتی باشد که هیچ مشکلی ندارد، انتقاد کند، یا کسی که از
                    درد دوری می‌کند.
                  </p>

                  <p className="tw-text-white">
                    اما به راستی که ما هم متهم می کنیم و هم با نفرت عادلانه،
                    کسانی را که سزاوار آن هستند، می آوریم که در اثر تملق لذت های
                    کنونی نرم و تباه می شوند، و از شهوت رنج ها و مشکلاتی که در
                    شرف تجربه هستند کور شده اند، و آنها را تأمین نمی کنند. و به
                    راستی که تفکیک این چیزها آسان و مصلحت است. زیرا در اوقات
                    فراغت، زمانی که اختیار انتخاب داریم و هیچ چیز ما را از انجام
                    کاری که ما را خشنودتر می‌کند باز نمی‌دارد، باید تمام لذت را
                    فرض کرد و همه دردها را رد کرد. ولى در مواقعى، چه به خاطر
                    وظايف و چه از جهت اقتضائات، غالباً اتفاق مى‌افتد كه هم
                    لذت‌ها را نپذيرند و هم از گرفتارى‌ها امتناع كنند. و بنابراین
                    انتخاب این چیزها در اینجا بر عهده خردمندان است تا یا با رد
                    لذت های بیشتر چیزهای دیگری حاصل شود یا با تحمل دردها.
                  </p>

                  {/* Category */}
                  <ul className="category">
                    <li>
                      <span className="tw-text-white">Tags:</span>
                    </li>
                    <li>
                      <Link href="/blog">Business</Link>
                    </li>
                    <li>
                      <Link href="/blog">IT</Link>
                    </li>
                    <li>
                      <Link href="/blog">Tips</Link>
                    </li>
                    <li>
                      <Link href="/blog">Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;

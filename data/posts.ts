export interface Ipost {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

export const posts: Array<Ipost> = [
  {
    id: "1",
    title: "رمز و راز بازار چند فروشندگی، نعمتی برای خریداران و فروشندگان",
    slug: "the-secret-of-multi-vendor",
    description:
      "با افتخار به شما پروژه‌ای جذاب و کاربردی در حوزهٔ ایجاد وب‌سایت چند فروشگاهی معرفی می‌کنیم. این پروژه، فرصتی مناسب برای افرادی است که می‌خواهند فروشگاه آنلاین خود را راه‌اندازی کنند و محصولات و خدمات خود را به صورت آنلاین برای کاربران ارائه دهند.",
    image: "/images/projects/taak/taak-banner.jpg",
  },
];

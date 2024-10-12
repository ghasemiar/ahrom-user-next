export interface Islider {
  title?: string;
  img: string;
}

export interface Ibutton {
  label: string;
  link: string;
}

export interface Iproject {
  id: string;
  title: string;
  description: string;
  header_title: string;
  slug: string;
  image: string;
  webSlider?: Array<Islider>;
  appSlider?: Array<Islider>;
  buttons: Array<Ibutton>;
  categories: Array<"website" | "ui-ux" | "mobile-app">;
  aosDelay: number;
  bannerImage: string;
}

export const projects: Array<Iproject> = [
  {
    id: "1",
    title: "چند فروشندگی صنعت ساختمان | کاربام",
    slug: "karbam-multi-vendor",
    bannerImage: "/images/projects/karbam/karbam-banner.jpg",
    description:
      "اپلیکیشن کاربام ارائه نوعی نوین از چند فروشندگی در صنعت ساختمان است که به کاربر اجازه میدهد تا جمعی از فروشگاهها و نیروهای خدماتی مربوط به ساخت و ساز را در محیطی کاربردی مشاهده کرده و بهترین خرید را انجام دهد.",
    header_title: "چند فروشندگی صنعت ساختمان | کاربام",
    image: "/images/projects/karbam/karbam-banner.jpg",
    categories: ["mobile-app"],
    webSlider: [
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/1.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/2.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/3.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/4.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/5.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/6.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/7.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/karbam/8.jpg",
      },
    ],
    buttons: [
      {
        label: "دانلود اپلیکیشن اندروید",
        link: "https://files.ahromtech.ir/karbam.apk",
      },
      {
        label: "داشبورد مدیریت",
        link: "https://admin.karbam.com",
      },
    ],
    aosDelay: 100,
  },
  {
    id: "2",
    title: "سامانه مدیریت ایمنی اهرم",
    slug: "ahrom-hse",
    bannerImage: "/images/projects/hse/hse-banner.jpg",
    description:
      "سامانه ایمنی (HSE) اهرم، راهکاری مطمئن برای شرکتها و تولیدیهای صنعتی میباشد که دغدغه امنیت نیروهای خود را دارند. سامانه جامع مدیریت بهداشت، ایمنی و محیط زیست اهرم اپلیکیشن موبایلی در اختیار افسران ایمنی قرار میدهد و مدیران شرکت میتوانند در پنل های مدیریتی خود گزارشات و عملکرد ایمنی سازمان خود را مشاهده کنند.",
    header_title: "HSE | سامانه مدیریت ایمنی اهرم",
    image: "/images/projects/hse/hse-banner.jpg",
    categories: ["mobile-app"],
    webSlider: [
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/1.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/2.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/3.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/4.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/5.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/6.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/7.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/8.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/9.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/hse/10.jpg",
      },
    ],
    buttons: [],
    aosDelay: 100,
  },
  {
    id: "3",
    title: "چند فروشندگی، تخفیف و حراجی | تاک",
    slug: "multi-vendor-and-multi-store",
    bannerImage: "/images/projects/taak/taak-banner.jpg",
    description:
      "با افتخار به شما پروژه‌ای جذاب و کاربردی در حوزهٔ ایجاد وب‌سایت چند فروشگاهی معرفی می‌کنیم. این پروژه، فرصتی مناسب برای افرادی است که می‌خواهند فروشگاه آنلاین خود را راه‌اندازی کنند و محصولات و خدمات خود را به صورت آنلاین برای کاربران ارائه دهند.",
    header_title: "چند فروشندگی، تخفیف و حراجی | تاک",
    image: "/images/projects/taak/taak-banner.jpg",
    categories: ["mobile-app"],
    webSlider: [
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/1.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/2.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/3.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/4.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/5.jpg",
      },
      {
        title: "صفحه اصلی",
        img: "/images/projects/taak/taak-banner.jpg",
      },
    ],
    buttons: [
      {
        label: "دانلود اپلیکیشن اندروید",
        link: "https://files.ahromtech.ir/taak.apk",
      },
      {
        label: "داشبورد مدیریت",
        link: "https://taak.admin.ahromtech.ir",
      },
    ],
    aosDelay: 100,
  },
  {
    id: "4",
    title: "صرافی ارز دیجیتال",
    description: "",
    slug: "digital-currency-exchange",
    header_title: "صرافی ارز دیجیتال",
    image: "/images/projects/galaxy/mainScreen.png",
    bannerImage: "/images/projects/galaxy/mainScreen.png",
    categories: ["website", "ui-ux"],
    webSlider: [
      {
        img: "/images/projects/galaxy/1.png",
      },
      {
        img: "/images/projects/galaxy/15.png",
      },
      {
        img: "/images/projects/galaxy/14.png",
      },
      {
        img: "/images/projects/galaxy/13.png",
      },
      {
        img: "/images/projects/galaxy/12.png",
      },
      {
        img: "/images/projects/galaxy/11.png",
      },
      {
        img: "/images/projects/galaxy/10.png",
      },
      {
        img: "/images/projects/galaxy/9.png",
      },
      {
        img: "/images/projects/galaxy/8.png",
      },
      {
        img: "/images/projects/galaxy/7.png",
      },
      {
        img: "/images/projects/galaxy/6.png",
      },
      {
        img: "/images/projects/galaxy/5.png",
      },
      {
        img: "/images/projects/galaxy/4.png",
      },
    ],
    buttons: [],
    aosDelay: 200,
  },
  {
    id: "5",
    title: "فروشگاه دیجی مال",
    slug: "digi-mall-store",
    description:
      "دیجی مال، مقصدی ایده‌آل برای علاقمندان به تکنولوژی و دنیای موبایل است. با تنوع گسترده‌ای از محصولات موبایل از برندهای معتبر و محبوب، دیجی مال به شما امکان می‌دهد تا به سادگی آخرین و بهترین مدل‌های گوشی‌های هوشمند، تبلت‌ها، لوازم جانبی و لوازم جانبی موبایل را انتخاب کنید. با تضمین اصالت کالا و خدمات پس از فروش قابل اعتماد، دیجی مال همیشه به دنبال رضایت شماست.",
    header_title: "محصول شماره سه",
    bannerImage: "/images/projects/digimall/main-banner.png",
    image: "/images/projects/digimall/main-banner.png",
    categories: ["mobile-app"],
    webSlider: [
      {
        img: "/images/projects/digimall/main-banner.png",
      },
      {
        img: "/images/projects/digimall/product-banner.png",
      },
    ],
    buttons: [],
    aosDelay: 300,
  },
  {
    id: "6",
    title: "معرفی مراکز | تابلو",
    slug: "tablo-introduction-of-centers",
    description:
      "تابلو، نرم افزاری هوشمند و کارآمد برای معرفی مراکز مختلف است. با استفاده از تابلو، به راحتی می‌توانید مراکز مورد نیاز خود را پیدا کرده و اطلاعات دقیق و کاملی از آن‌ها را دریافت کنید. این نرم افزار امکاناتی از قبیل جستجوی مکان، امکانات مراکز، نظرات کاربران و امکان ارسال نقد و بررسی فراهم می‌کند. با تابلو، همیشه مطمئن هستید که بهترین مرکز برای نیازهای خود را پیدا خواهید کرد.",
    header_title: "محصول شماره سه",
    bannerImage: "/images/projects/tablo/banner.jpg",
    image: "/images/projects/tablo/banner.jpg",
    categories: ["mobile-app"],
    webSlider: [
      {
        img: "/images/projects/tablo/5.jpg",
      },
      {
        img: "/images/projects/tablo/4.jpg",
      },
      {
        img: "/images/projects/tablo/1.png",
      },
      {
        img: "/images/projects/tablo/9.jpg",
      },
      {
        img: "/images/projects/tablo/10.jpg",
      },
      {
        img: "/images/projects/tablo/8.jpg",
      },
      {
        img: "/images/projects/tablo/6.jpg",
      },
    ],
    buttons: [
      {
        label: "دانلود اپلیکیشن اندروید",
        link: "https://files.ahromtech.ir/tablo.apk",
      },
    ],
    aosDelay: 300,
  },
  {
    id: "7",
    title: "حضور غیاب و آزمون آنلاین",
    slug: "absence-attendance-and-online-test",
    description:
      "ایپا، نرم افزاری هوشمند برای مدیریت حضور و غیاب و برگزاری آزمون‌های آنلاین است. با استفاده از ایپا، می‌توانید به راحتی حضور و غیاب کارمندان و دانش‌آموزان را مدیریت کنید و آزمون‌های آنلاین را برگزار کنید. این نرم افزار امکاناتی از قبیل ثبت حضور و غیاب، ارسال یادآوری‌ها، اطلاعات تکمیلی درباره حاضری و غیاب، و برگزاری آزمون‌های آنلاین را فراهم می‌کند. با ایپا، مدیریت حضور و غیاب و برگزاری آزمون‌های آنلاین به یک تجربهٔ ساده و کارآمد تبدیل می‌شود..",
    header_title: "محصول شماره سه",
    bannerImage: "/images/projects/eepa/bannerwhite.jpg",
    image: "/images/projects/eepa/bannerwhite.jpg",
    categories: ["mobile-app"],
    webSlider: [
      {
        img: "/images/projects/eepa/1.jpg",
      },
      {
        img: "/images/projects/eepa/1Splash.jpg",
      },
      {
        img: "/images/projects/eepa/2.jpg",
      },
      {
        img: "/images/projects/eepa/3.jpg",
      },
      {
        img: "/images/projects/eepa/4.jpg",
      },
      {
        img: "/images/projects/eepa/5Home.jpg",
      },
      {
        img: "/images/projects/eepa/7.jpg",
      },
      {
        img: "/images/projects/eepa/8.jpg",
      },
      {
        img: "/images/projects/eepa/9.jpg",
      },
      {
        img: "/images/projects/eepa/10.jpg",
      },
      {
        img: "/images/projects/eepa/11.jpg",
      },
    ],
    buttons: [],
    aosDelay: 300,
  },
  {
    id: "8",
    title: "ثبت آگهی و مناقصه | روز",
    slug: "rooz-registration-of-advertisements-and-tenders",
    description:
      "روز، سامانه‌ای جامع و هوشمند برای ثبت آگهی درخواست و مناقصه است که به شما امکان می‌دهد از طریق اپلیکیشن اندروید یا وب‌اپ، به راحتی و سریع درخواست‌ها و مناقصات مورد نیاز خود را ثبت کنید. با روز، می‌توانید به صورت آنلاین و در هر زمان و مکانی، فرصت‌های جدید کسب و کار خود را پیدا کرده و از آن‌ها بهره‌مند شوید. این سامانه با امکاناتی از قبیل ثبت آگهی، مدیریت پروفایل، جستجوی مناقصات و آگهی‌ها، و ارسال یادآوری‌ها، به شما کمک می‌کند تا به بهترین شکل ممکن از فرصت‌های موجود بهره‌مند شوید..",
    header_title: "محصول شماره سه",
    bannerImage: "/images/projects/rooz/banner.png",
    image: "/images/projects/rooz/banner.png",
    categories: ["mobile-app"],
    webSlider: [
      {
        img: "/images/projects/rooz/1.png",
      },
      {
        img: "/images/projects/rooz/2.png",
      },
      {
        img: "/images/projects/rooz/3.png",
      },
      {
        img: "/images/projects/rooz/4.png",
      },
      {
        img: "/images/projects/rooz/5.png",
      },
      {
        img: "/images/projects/rooz/6.png",
      },
      {
        img: "/images/projects/rooz/7.png",
      },
      {
        img: "/images/projects/rooz/8.png",
      },
      {
        img: "/images/projects/rooz/9.png",
      },
      {
        img: "/images/projects/rooz/10.png",
      },
      {
        img: "/images/projects/rooz/11.png",
      },
      {
        img: "/images/projects/rooz/12.png",
      },
      {
        img: "/images/projects/rooz/13.png",
      },
      {
        img: "/images/projects/rooz/14.png",
      },
      {
        img: "/images/projects/rooz/15.png",
      },
      {
        img: "/images/projects/rooz/16.png",
      },
      {
        img: "/images/projects/rooz/17.png",
      },
    ],
    buttons: [
      {
        label: "دانلود اپلیکیشن اندروید",
        link: "https://files.ahromtech.ir/rooz.apk",
      },
      {
        label: "ورود به سامانه",
        link: "https://rooz.ahromtech.ir",
      },
      {
        label: "ورود به داشبورد مدیریت",
        link: "https://rooz.admin.ahromtech.ir",
      },
    ],
    aosDelay: 300,
  },
  {
    id: "9",
    title: "رزرو تنیس",
    slug: "tennis-reserve",
    description:
      "سامانه رزرو زمین های تنیس و ورزشی، ابزاری هوشمند و کارآمد برای رزرو وقت ورزشی خود است. با استفاده از این سامانه، شما می‌توانید به راحتی و به صورت آنلاین زمین‌های تنیس و ورزشی مورد نیاز خود را رزرو کنید و وقت خود را مدیریت کنید. با امکاناتی از قبیل جستجوی زمین‌ها، انتخاب زمان مطلوب، پرداخت آنلاین و دریافت اطلاعات دقیق و کامل دربارهٔ زمین‌ها و مراکز، سامانه رزرو زمین های تنیس و ورزشی به شما کمک می‌کند تا به بهترین شکل ممکن از وقت خود بهره‌مند شوید و به ورزش و سلامتی خود توجه کنید.",
    header_title: "محصول شماره سه",
    bannerImage: "/images/projects/tennis/11.png",
    image: "/images/projects/tennis/11.png",
    categories: ["mobile-app"],
    webSlider: [
      {
        img: "/images/projects/tennis/1.png",
      },
      {
        img: "/images/projects/tennis/11.png",
      },
      {
        img: "/images/projects/tennis/2.png",
      },
      {
        img: "/images/projects/tennis/3.png",
      },
      {
        img: "/images/projects/tennis/4.png",
      },
      {
        img: "/images/projects/tennis/5.png",
      },
      {
        img: "/images/projects/tennis/6.png",
      },
      {
        img: "/images/projects/tennis/7.png",
      },
      {
        img: "/images/projects/tennis/8.png",
      },
      {
        img: "/images/projects/tennis/9.png",
      },
      {
        img: "/images/projects/tennis/10.png",
      },
      {
        img: "/images/projects/tennis/12.png",
      },
      {
        img: "/images/projects/tennis/13.png",
      },
      {
        img: "/images/projects/tennis/14.png",
      },
      {
        img: "/images/projects/tennis/15.png",
      },
      {
        img: "/images/projects/tennis/16.png",
      },
      {
        img: "/images/projects/tennis/17.png",
      },
      {
        img: "/images/projects/tennis/18.png",
      },
      {
        img: "/images/projects/tennis/19.png",
      },
      {
        img: "/images/projects/tennis/20.png",
      },
      {
        img: "/images/projects/tennis/21.png",
      },
      {
        img: "/images/projects/tennis/22.png",
      },
    ],
    buttons: [
      {
        label: "ورود به سامانه",
        link: "https://tennis.ahromtech.ir",
      },
    ],
    aosDelay: 300,
  },
];

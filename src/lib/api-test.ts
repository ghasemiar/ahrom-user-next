import { Post } from "@/types";
import { cache } from "react";

export const mockPosts: Post[] = [
  // {
  //   id: 1,
  //   slug: "introduction-to-next-js",
  //   title: "Introduction to Next.js",
  //   content:
  //     "<h2>What is Next.js?</h2><p>Next.js is a React framework that enables you to build superfast and extremely user-friendly static websites, as well as web applications using React.</p><h2>Key Features</h2><ul><li>Server-side rendering</li><li>Static site generation</li><li>API routes</li><li>Built-in CSS support</li></ul><p>In this blog post, we'll explore these features and more!</p>",
  //   excerpt:
  //     "Learn about Next.js, a popular React framework for building fast and SEO-friendly web applications.",
  //   description: "desc1",
  //   publishedAt: "12/1/1",
  //   author: "admin",
  //   imageUrl: "/images/blog/blog2.jpg",
  // },
  // {
  //   id: 2,
  //   slug: "mastering-react-hooks",
  //   title: "Mastering React Hooks",
  //   content:
  //     "<h2>Understanding React Hooks</h2><p>React Hooks are functions that let you 'hook into' React state and lifecycle features from function components.</p><h2>Common Hooks</h2><ul><li>useState</li><li>useEffect</li><li>useContext</li><li>useReducer</li></ul><p>Let's dive deep into each of these hooks and see how they can simplify your React code!</p>",
  //   excerpt:
  //     "Explore the power of React Hooks and how they can simplify your functional components.",
  //   description: "desc2",
  //   publishedAt: "12/1/1",
  //   author: "admin",
  //   imageUrl: "/images/blog/blog2.jpg",
  // },
  // {
  //   id: 3,
  //   slug: "css-grid-layout",
  //   title: "CSS Grid Layout: A Complete Guide",
  //   content:
  //     "<h2>What is CSS Grid?</h2><p>CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.</p><h2>Key Concepts</h2><ul><li>Grid Container</li><li>Grid Items</li><li>Grid Lines</li><li>Grid Tracks</li></ul><p>In this comprehensive guide, we'll cover all these concepts and show you how to create complex layouts with ease!</p>",
  //   excerpt:
  //     "Master CSS Grid Layout and learn how to create complex, responsive layouts with ease.",
  //   description: "desc3",
  //   publishedAt: "12/1/1",
  //   author: "admin",
  //   imageUrl: "/images/blog/blog2.jpg",
  // },
  // {
  //   id: 4,
  //   slug: "the-secret-of-multi-vendor-2",
  //   imageUrl: "/images/blog/blog2.jpg",
  //   title: "رمز و راز های چند فروشندگی",
  //   content: `<p className="!tw-text-white"><strong>فصل ۱: رمز و راز بازار چند فروشندگی، نعمتی برای خریداران و فروشندگان.</strong></p><p className="!tw-text-white"> آیا تا به حال در میان محصولات متعدد دیجی کالا یا آمازون گشته اید؟ از نتیجه های متعدد و منحصر به فرد در فروشندگان متعجب شده یا از یک پیشنهاد ویژه در قیمت بهره‌مند شده‌اید؟ اگر بله، با جهان بازارهای چند فروشنده آشنا شده‌اید. اما دقیقاً چی هستند و چگونه کار می‌کنند؟</p><p className="!tw-text-white"> به طور اساسی، یک بازار چند فروشنده یک فضای دیجیتالی است که چندین فروشنده مستقل می‌توانند محصولات (یا خدمات) خود را در یک وبسایت یا پلتفرم فروش لیست و به فروش برسانند. تصور کنید یک مرکز خرید آنلاین گسترده، به جای فروشگاه‌های سنگین و مرمری، دارای فروشگاه‌های مجازی است که توسط فروشندگان فردی اداره می‌شوند. این رویکرد یک اکوسیستم خرید پویا ایجاد می‌کند که به خریداران و فروشندگان به چندین نحو کمک می‌کند.</p><p className="!tw-text-white"><strong>مزایای بی‌نظیر برای خریداران:</strong></p><div>  <p className="!tw-text-white"> تنوع بی‌نظیر: پلتفرم‌های چند فروشنده محصولاتی از تعداد زیادی فروشنده را در کنار هم جمع می‌آورند. برای یافتن یک برند خاص یا یک مورد دست‌ساز منحصر به فرد، احتمالاً آن را در بازار پیدا خواهید کرد.  </p><p className="!tw-text-white"> &nbsp;قیمت‌های رقابتی: با توجه به اینکه فروشندگان برای جلب توجه شما رقابت می‌کنند، بازارهای چند فروشنده اغلب از قیمت‌های رقابتی برخوردارند. شما می‌توانید به راحتی قیمت‌ها را با فروشندگان مختلف مقایسه کنید تا اطمینان حاصل کنید که بهترین معامله را دریافت می‌کنید.  </p><p className="!tw-text-white"> همه چیز یکجا: نیازی به پرش از وب‌سایت به وب‌سایت نیست. بازارهای چند فروشنده به شما اجازه می‌دهند که با چند کلیک، به چندین فروشنده مراجعه کنید، مقایسه کنید و خرید کنید، که زمان و تلاش شما را صرفه‌جویی می‌کند.  </p><p className="!tw-text-white"> امنیت خاطر: بازارهای معتبر اقدامات امنیتی قوی را برای حفاظت از اطلاعات مالی و معاملات شما اجرا می‌کنند. علاوه بر این، بسیاری از پلتفرم‌ها، برنامه‌های حفاظت خریدار را اجرا می‌کنند که در صورت وجود مشکلات، خریدهای شما را حفاظت می‌کنند.  </p></div><p className="!tw-text-white">  <strong>معجونی از موفقیت برای فروشندگان:</strong></p><div>  <p className="!tw-text-white"> دسترسی به جمعیت بزرگتر: بازارهای چند فروشنده مانعی برای ساخت شناخت برند از پایه را از بین می‌برند. با استفاده از تعداد مشتریانی که پلتفرم فراهم می‌کند، فروشندگان می‌توانند به سرعت به یک استخر گسترده از خریداران بالقوه دسترسی پیدا کنند.  </p><p className="!tw-text-white"> کاهش هزینه‌های اضافی: اداره یک فروشگاه فیزیکی با هزینه‌های قابل توجهی همچون اجاره، ابزارهای کاربردی و کارکنان همراه است. بازارهای چند فروشنده اغلب روشی کم هزینه‌تر برای فروش فراهم می‌کنند، زیرا فروشندگان به طور معمول بر روی فروش تمرکز می‌کنند به جای موارد مختلف هزینه‌های دیگر.  </p><p className="!tw-text-white"> &nbsp;انعطاف‌پذیری و قابلیت بزرگ شدن: بسیاری از پلتفرم‌ها به فروشندگان در مدیریت فروشگاه‌های مجازی خود انعطاف زیادی می‌دهند که امکان مدیریت موجودی، قیمت‌گذاری و تبلیغات را به صورت مستقل فراهم می‌کند. این انعطاف به فروشندگان امکان می‌دهد استراتژی‌های خود را با رشد کسب و کار خود تطبیق دهند.  </p></div><p className="!tw-text-white">  <strong>جمع‌بندی:</strong></p><p className="!tw-text-white"> بازارهای چند فروشنده نیروی قابل توجهی که در تجارت الکترونیک وجود دارد را نشان می‌دهند، با ارائه فراوانی از مزایا برای هم خریداران و هم فروشندگان. برای خریداران، این یک فروشگاه یکپارچه برای انتخاب بی‌نظیر و قیمت‌های پایین‌تر است. برای فروشندگان، این یک دامنه برای دسترسی به جمعیت بزرگتر و ساده‌تر کردن عملیات کسب و کارشان است. پس، در توسعه بعدی کسب کار خود، دنیای پرآوازه‌ی بازارهای چند فروشنده را در نظر بگیرید.</p><p className="!tw-text-white">  <strong>فصل 2: انواع بازارهای چند فروشندگی</strong>.</p><div>  <p className="!tw-text-white"> همه بازارهای چند فروشنده، یکسان ساخته نشده‌اند. آن‌ها می‌توانند براساس محصولات یا خدمات ارائه شده، سطح انتخاب و هدف مخاطبان دسته‌بندی شوند. در اینجا به برخی از انواع معمولی آنها نگاهی می‌اندازیم:  </p><p className="!tw-text-white"> بازارهای عمومی: غول‌هایی مانند دیجی کالا، آمازون و ای‌بی‌آی شامل گستره وسیعی از محصولات در دسته‌بندی‌های مختلف هستند و مخاطبان گسترده ای را جلب می‌کنند.  </p><p className="!tw-text-white"> &nbsp;بازارهای نیچ: این پلتفرم‌ها به سلایق یا سرگرمی‌های خاص، مانند پلتفرمی برای کارهای هنری یا خرید و فروش مصالح ساختماتی می‌پردازند.  </p><p className="!tw-text-white"> بازارهای عمده‌فروشی: این پلتفرم‌ها کسب‌وکارها را با عمده‌فروشان ارتباط برقرار می‌کنند و خریدهای عمده را با قیمت‌های تخفیف‌دار فراهم می‌کنند.  </p><p className="!tw-text-white"> بازارهای خدمات: پلتفرم‌هایی مانند یک وبسایت نوبت دهی پزشکان که به دنبال ارائه خدمات پزشکی و نوبت دهی میباشند.  </p></div><p className="!tw-text-white">  <strong>فصل 3: عملکرد درونی یک بازار چند فروشنده</strong>.</p><div>  <p className="!tw-text-white"> پذیرش فروشندگان: فرایندی است که فروشندگان برای پیوستن به بازار درخواست می‌دهند و فروشگاه‌های مجازی خود را ایجاد می‌کنند. این اغلب شامل ارائه اطلاعات محصول، رعایت رهنمودهای پلتفرم و پرداخت هزینه ثبت‌نام ممکن است.  </p><p className="!tw-text-white"> لیست و مدیریت محصولات: فروشندگان توضیحات محصولات را آپلود می‌کنند، تصاویر را تنظیم می‌کنند، قیمت‌ها را تعیین می‌کنند و سطوح موجودی را از طریق یک داشبورد فروشنده اختصاصی مدیریت می‌کنند.  </p><p className="!tw-text-white"> پردازش پرداخت: بازار به عنوان واسطه عمل می‌کند و پرداخت‌های مشتریان را به صورت امن پردازش کرده و بعد از کم کردن هرگونه هزینه کمیسیون، سهم فروشنده را توزیع می‌کند.  </p><p className="!tw-text-white"> انجام سفارش: بسته به پلتفرم، فروشندگان ممکن است انجام سفارش را خودشان انجام دهند یا از خدمات لجستیک ارائه شده توسط بازار استفاده کنند.  </p><p className="!tw-text-white"> خدمات مشتری: در حالی که بازارها به طور کلی مسائل مربوط به پلتفرم را رسیدگی می‌کنند، برخی از آن‌ها به فروشندگان اجازه می‌دهند که پرسش‌های مشتریان مرتبط با محصولات خود را مدیریت کنند.  </p></div><p className="!tw-text-white">  <strong>فصل 4: انتخاب بازار چند فروشنده مناسب</strong>.</p><div>  <p className="!tw-text-white"> آیا شما یک خریدار به دنبال محصولات کامل هستید یا یک فروشنده به دنبال راه‌اندازی برند خود؟ انتخاب بازار چند فروشنده مناسب بسیار مهم است. در اینجا برخی از عواملی را که باید در نظر گرفته شوند می‌آوریم:  </p><p className="!tw-text-white"> دسته بندی محصول: انتخاب خود را با پلتفرمی که بهترین خدمات برای نوع محصولاتی که به خرید یا فروش آنها علاقه‌مند هستید، ارائه می‌دهد، هماهنگ کنید.  </p><p className="!tw-text-white"> مخاطب هدف: جمعیت مشتریان پلتفرم را بررسی کنید تا اطمینان حاصل شود که بازار برای بازار هدف شما (برای فروشندگان) یا ترجیحات خرید (برای خریداران) هماهنگ است.  </p><p className="!tw-text-white"> هزینه‌ها و کمیسیون‌ها: ساختارهای کمیسیون و هرگونه هزینه اضافی را که توسط بازارهای مختلف اعمال می‌شود، مقایسه کنید.  </p><p className="!tw-text-white"> شهرت و نظرات: شهرت پلتفرم را برای خدمات مشتریان، امنیت و تجربه کاربری کلی بررسی کنید.  </p></div><p className="!tw-text-white"> با درک جنبه‌های مختلف بازارهای چند فروشنده، شما می‌توانید از آنها بهره‌مند شوید، آیا یک خریدار باهوش هستید یا یک کارآفرین پیشرو.</p>`,
  //   author: "admin",
  //   publishedAt: "April 17, 2024",
  //   categories: ["Technology"],
  //   excerpt:
  //     "چند فروشندگی چیست و مزایای آن برای فروشندگان و مشتریان چه میباشد؟",
  //   description: "desc4",
  // },
  {
    id: 1,
    slug: "test",
    title: "مقاله تستی شماره یک",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "undefined",
    excerpt:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    content: `<h1>مقاله تستی شماره یک</h1>\r\n<p><span style=\"color: #236fa1;\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و ب<em><strong>رای شرایط فعلی تکنولوژی مورد نیاز، و کا</strong></em>ربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در <span style=\"color: #e03e2d; background-color: #2dc26b;\">شصت و سه درصد گذشته حال و آینده</span>، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>\r\n<p><img src=\"http://localhost:3000/images/1727007041891.jpg\" alt=\"عکس کودک\" width=\"189\" height=\"189\"></p>\r\n<p>&nbsp;چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\r\n<ol>\r\n<li>سلام</li>\r\n<li>خدافط</li>\r\n</ol>\r\n<p>&nbsp;</p>`,
    keywords: "مقاله, تست, کودک",
    publishedAt: "2024-09-22T12:34:04.000Z",
    author: "superadmin",
    tags: [
      {
        id: 1,
        name: "sdfasfdsafa",
      },
      {
        id: 2,
        name: "test",
      },
    ],
    categories: [
      {
        id: 1,
        name: "test",
      },
      {
        id: 2,
        name: "test",
      },
    ],
  },
];

export const getAllBlogPosts = cache(async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockPosts;
});

export const getBlogPost = cache(async (slug: string): Promise<Post | null> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const post = mockPosts.find((p) => p.slug === slug);

  return post || null;
});

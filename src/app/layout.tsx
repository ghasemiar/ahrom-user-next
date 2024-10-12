import React from "react";
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/all.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../../public/styles/software-home-page.scss";

// App Showcase Home Style
import "../../public/styles/app-home-page.scss";

// Global Style
import "../../public/styles/style.scss";
import "../../public/styles/responsive.scss";

// Global RTL Style
import "../../public/styles/rtl.scss";
import "./globals.css";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

//fa fonts
import { vazirmatnFontFD } from "../../public/faFonts/fonts";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MobileFooter from "@/components/Home/MobileFooter";
import MobileNavbar from "@/components/Home/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazirmatnFontFD.className} tw-bg-[#343434]`}>
        <header className="md:tw-block tw-hidden">
          <Navbar />
        </header>
        <header className="md:tw-hidden tw-blcok">
          <MobileNavbar />
        </header>
        <main className="sm:tw-mt-0 tw-mt-[100px]">{children}</main>

        <footer className="md:tw-block tw-hidden">
          <Footer />
        </footer>
        <footer className="md:tw-hidden tw-blcok">
          <MobileFooter />
        </footer>
        <AosAnimation />
        <GoTop />
      </body>
    </html>
  );
}

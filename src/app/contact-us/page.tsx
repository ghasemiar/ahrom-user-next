import React from "react";
import ContactInfo from "../../components/Contact/ContactInfo";
import NavbarThree from "@/components/Layouts/NavbarThree";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ارتباط با ما",
  description: "ارتباط با ما برای اغاز یک همکاری",
};

export default function Page() {
  return (
    <>
      <NavbarThree />

      {/* <PageBanner pageTitle="ارتباط با ما" BGImage="/images/page-banner1.jpg"/> */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-py-32">
        <ContactInfo />

        {/* <ContactForm/> */}
      </div>

      {/* <Footer /> */}
    </>
  );
}

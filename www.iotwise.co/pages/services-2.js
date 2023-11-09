import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/Services/WhatWeOffer";
import Footer from "../components/Layouts/Footer";

export default function Services2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Two"
      />

      <ServicesStyleTwo />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFive/MainBanner";
import PartnerSlider from "../components/Common/PartnerSlider";
import About from "../components/HomeFive/About";
import WhyChooseUs from "../components/HomeFive/WhyChooseUs";
import Services from "../components/HomeFive/Services";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeFive/WhatWeOffer";
import CaseStudies from "../components/HomeFive/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/HomeFive/Faq";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";

export default function Index5() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <PartnerSlider />

      <About />

      <WhyChooseUs />

      <Services />

      <MakeYourBusiness />

      <WhatWeOffer />

      <CaseStudies />

      <Testimonials />

      <Faq />

      <News />

      <Footer />
    </>
  );
}

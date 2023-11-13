import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutSection from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";
import PageHead from "../components/Common/PageHead";

export default function About() {
  return (
    <>
      <PageHead
        title = "IoT Wise | Nosotros"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner
        pageTitle="About Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Style Two"
      />

      <AboutSection />

      <WhyChooseUs />

      <MakeYourBusiness />

      <Testimonials />

      <PartnerSlider />

      <Footer />
    </>
  )
}
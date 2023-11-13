import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PageHead from "../components/Common/PageHead";
import Technologies from "../components/HomeOne/Technologies";
import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
import AboutComponent from "../components/HomeOne/About";

export default function About() {
  return (
    <>
      <PageHead
        title = "IoT Wise | Nosotros"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="Nosotros" />

      <div className="pt-5">
        <AboutComponent />
      </div>

      <Technologies />

      <WhatWeOffer />

      <Footer />
    </>
  )
}
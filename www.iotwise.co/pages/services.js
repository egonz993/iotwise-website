import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";
import Footer from "../components/Layouts/Footer";
import PageHead from "../components/Common/PageHead";

export default function Services() {
  return (
    <>
      <PageHead
        title = "IoT Wise | Servicios"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
      />

      <ServicesStyleThree />

      <Footer />
    </>
  );
}

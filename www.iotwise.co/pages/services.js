import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PageHead from "../components/Common/PageHead";
import Features from "../components/HomeOne/Features";
import Store from "../components/HomeOne/Store";
import Cloouder from "../components/HomeOne/Cloouder";
import IoTSenpai from "../components/HomeOne/IoTSenpai";

export default function Services() {
  return (
    <>
      <PageHead
        title = "IoT Wise | Servicios"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="NUESTROS SERVICIOS" />

      <Store />

      <Cloouder />

      <IoTSenpai />

      <Footer />
    </>
  );
}

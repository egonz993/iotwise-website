import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PageHead from "../../components/Common/PageHead";
import ArticleLorawan from "./___/ArticleLorawan";

export default function BlogTemplate() {
  return (
    <>
      <PageHead
        title = "IoT Wise | LoRaWAN"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="Acerca de LoRaWAN" />

      <ArticleLorawan /> 

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PageHead from "../../components/Common/PageHead";
import ArticleZigbee from "./___/ArticleZigbee";

export default function BlogTemplate() {
  return (
    <>
      <PageHead
        title = "IoT Wise | ZigBee"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="Acerca de ZigBee" />

      <ArticleZigbee />

      <Footer />
    </>
  );
}
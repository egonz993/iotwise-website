import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PageHead from "../../components/Common/PageHead";
import Article3gpp from "./___/Article3gpp";

export default function BlogTemplate() {
  return (
    <>
      <PageHead
        title = "IoT Wise | 3° Generation Partnership Project "
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="3° Generation Partnership Project- 3GPP" />

      <Article3gpp /> 

      <Footer />
    </>
  );
}

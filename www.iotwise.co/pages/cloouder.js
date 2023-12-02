import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Cloouder from "../components/HomeOne/Cloouder";

export default function CloouderPage() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="EXPERTOS EN EL INTERNET DE LAS COSAS"
        pageSubtitle="Cloouder® - LoRaWAN NetWork Server"
      />

      <Cloouder />

      <Footer />
    </>
  );
}

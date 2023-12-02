import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import IoTSenpai from "../components/HomeOne/IoTSenpai";

export default function SenpaiPage() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="EXPERTOS EN EL INTERNET DE LAS COSAS"
        pageSubtitle="IoT Senpai® - Herramientas Online"
      />

      <IoTSenpai />

      <Footer />
    </>
  );
}

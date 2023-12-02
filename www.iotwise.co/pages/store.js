import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Store from "../components/HomeOne/Store";
import Technologies from "../components/HomeOne/Technologies";

export default function CloouderPage() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="EXPERTOS EN EL INTERNET DE LAS COSAS"
        pageSubtitle="Tienda Online"
      />

      <Store />

      <Technologies />

      <Footer />
    </>
  );
}

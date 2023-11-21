import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PageHead from "../components/Common/PageHead";
import Features from "../components/HomeOne/Features";
import Store from "../components/HomeOne/Store";
import SaaS from "../components/HomeOne/IoTPlanner";
import Consulting from "../components/HomeOne/Consulting";
import ContactForm from "../components/Contact/ContactForm";
import Cloouder from "../components/HomeOne/Cloouder";

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

      <Features />

      <Store />

      <SaaS />

      <Cloouder />

      <Consulting />

      <ContactForm />

      <Footer />
    </>
  );
}

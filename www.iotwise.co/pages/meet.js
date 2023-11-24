import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MeetForm from "../components/Contact/MeetForm";
import Footer from "../components/Layouts/Footer";
import Consulting from "../components/HomeOne/Consulting";
import PageHead from "../components/Common/PageHead";

export default function Meet() {
  return (
    <>
      <PageHead
        title="IoT Wise | Asesoría Gratuita"
        description="Expertos en el Internet de las Cosas"
        image="https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="AGENDAR UNA SESIÓN GRATIS" />

      <div className="pt-5">
        <Consulting />
      </div>

      <Footer />
    </>
  );
}

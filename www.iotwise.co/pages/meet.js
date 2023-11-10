import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

export default function Meet() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Agenda una cita gratis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Meet"
      />

      <ContactForm />

      <Footer />
    </>
  );
}

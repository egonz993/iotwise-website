import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import MeetForm from "../components/Contact/MeetForm";

export default function Contact1() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contáctanos" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}

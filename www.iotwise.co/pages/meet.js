import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MeetForm from "../components/Contact/MeetForm";
import Footer from "../components/Layouts/Footer";

export default function Meet() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Agenda una cita gratis" />

      <div className="pt-5">
        <MeetForm />
      </div>

      <Footer />
    </>
  );
}

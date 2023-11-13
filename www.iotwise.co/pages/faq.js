import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import AskQuestionForm from "../components/Faq/AskQuestionForm";
import Footer from "../components/Layouts/Footer";

export default function Faq() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Preguntas y Respuestas Frecuentes" />


      <FaqContent />

      <Footer />
    </>
  );
}

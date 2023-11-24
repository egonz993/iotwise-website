import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { UserOverview } from "../components/User/UserOverview";

export default function User() {

  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="PERFIL DE USUARIO" 
        pageSubtitle="Un sola cuenta para todas nuestras aplicaciones"
      />

      <UserOverview />

      <Footer />
    </>
  );
}

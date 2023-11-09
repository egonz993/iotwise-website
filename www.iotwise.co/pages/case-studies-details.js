import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../components/Common/CTA";
import Footer from "../components/Layouts/Footer";

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies Details"
      />

      <CaseStudiesDetailsContent />

      <CTA />

      <Footer />
    </>
  );
}

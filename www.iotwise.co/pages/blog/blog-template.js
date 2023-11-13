import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsDetailsContent from "../../components/News/NewsDetailsContent";
import Footer from "../../components/Layouts/Footer";
import PageHead from "../../components/Common/PageHead";

export default function BlogTemplate() {
  return (
    <>
      <PageHead
        title = "IoT Wise | Blog Article"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner
        pageTitle="Blog Template"
        homePageUrl="/blog"
        homePageText="Blog"
        activePageText="Blog Template"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
}

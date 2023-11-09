import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsDetailsContent from "../../components/News/NewsDetailsContent";
import Footer from "../../components/Layouts/Footer";

export default function BlogTemplate() {
  return (
    <>
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

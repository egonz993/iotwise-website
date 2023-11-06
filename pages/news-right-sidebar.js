import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NewsGridTwo from "../components/News/NewsGridTwo";
import Footer from "../components/Layouts/Footer";

export default function NewsRightSidebar() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Right Sidebar"
      />

      <NewsGridTwo />

      <Footer />
    </>
  );
}

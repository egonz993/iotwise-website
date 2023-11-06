import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NewsGridCard from "../components/News/NewsGridCard";
import Footer from "../components/Layouts/Footer";

export default function NewsGrid() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Grid"
      />

      <NewsGridCard />

      <Footer />
    </>
  );
}

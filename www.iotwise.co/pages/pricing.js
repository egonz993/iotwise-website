import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Footer from "../components/Layouts/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <PricingStyleOne />

      <div className="bg-fafafa">
        <MakeYourBusiness />
      </div>

      <Footer />
    </>
  );
}

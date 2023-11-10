import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import About from "../components/HomeOne/About";
import Technologies from "../components/HomeOne/Technologies";
import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
import Footer from "../components/Layouts/Footer";
import Store from "../components/HomeOne/Store";
import SaaS from "../components/HomeOne/SaaS";
import Consulting from "../components/HomeOne/Consulting";

export default function Index1() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <About />

      <Technologies />

      <WhatWeOffer />

      <Store />

      <SaaS />

      <Consulting />

      <Footer />
    </>
  );
}

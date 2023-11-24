import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Technologies from "../components/HomeOne/Technologies";
import Footer from "../components/Layouts/Footer";
import Store from "../components/HomeOne/Store";
import Consulting from "../components/HomeOne/Consulting";
import ContactForm from "../components/Contact/ContactForm";
import Cloouder from "../components/HomeOne/Cloouder";
import IoTSenpai from "../components/HomeOne/IoTSenpai";
import AboutComponent from "../components/HomeOne/About";

export default function Index() {

  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <AboutComponent />

      <Technologies />

      <Store />

      <IoTSenpai />

      <Cloouder />

      <Consulting />

      <ContactForm />

      <Footer />
    </>
  );
}

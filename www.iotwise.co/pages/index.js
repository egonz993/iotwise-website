import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Technologies from "../components/HomeOne/Technologies";
import Footer from "../components/Layouts/Footer";
import Store from "../components/HomeOne/Store";
import SaaS from "../components/HomeOne/SaaS";
import Consulting from "../components/HomeOne/Consulting";
import ContactForm from "../components/Contact/ContactForm";

export default function Index() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <Technologies />

      <Store />

      <SaaS />

      <Consulting />

      <ContactForm />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import BlogGridCard from "../components/Blog/BlogGridCard";
import PageHead from "../components/Common/PageHead";

export default function Blog() {

  const articles = [
    // {
    //   id: "3",
    //   date: "2023 Nov 30",
    //   author: "E'Gonzalez",
    //   title: "Cómo el IoT está Transformando la Agricultura: Del Campo a la Nube",
    //   resume: "En este artículo, exploraremos cómo la Internet de las Cosas se está utilizando para revolucionar la agricultura, desde la monitorización de cultivos y ganado hasta la optimización de recursos y la toma de decisiones basada en datos.",
    //   url: "/blog/blog-template",
    // },
    // {
    //   id: "2",
    //   date: "2023 Nov 15",
    //   author: "E'Gonzalez",
    //   title: "IoT en la Salud: Innovaciones que Salvan Vidas",
    //   resume: "Descubre cómo el IoT está mejorando la atención médica y salvando vidas a través de dispositivos médicos conectados, seguimiento de pacientes a distancia y la recopilación de datos en tiempo real que permite a los profesionales de la salud tomar decisiones informadas.",
    //   url: "/blog/blog-template",
    // },
    // {
    //   id: "1",
    //   date: "2023 Nov 01",
    //   author: "E'Gonzalez",
    //   title: "Seguridad en el IoT: Desafíos y Soluciones para Proteger tu Vida Conectada",
    //   resume: "En este artículo, abordaremos los desafíos de seguridad en el mundo de el IoT y proporcionaremos consejos y soluciones para proteger tus dispositivos y datos en un entorno cada vez más conectado.",
    //   url: "/blog/blog-template",
    // }
  ]

  return (
    <>
      <PageHead
        title = "IoT Wise | Blog"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="BLOG" />

      <BlogGridCard articles={articles} />

      <Footer />
    </>
  );
}

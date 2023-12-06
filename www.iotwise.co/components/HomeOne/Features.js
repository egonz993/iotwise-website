import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-store",
    title: "Tienda Online",
    shortText: "Encuentra una amplia variedad de opciones para tus sensores IoT con tecnologías inalámbricas como LoRaWAN, SigFox, NB-IoT, LTE-m, WiSun, y muchos más.",
    viewDetails: "/store",
    aosDelay: "100",
  },
  {
    iconName: "bx bx-laptop",
    title: "IoT Senpai®",
    shortText: "Herramientas online que puedes utilizar para evaluar y configurar tus dispositivos IoT, desde pruebas de funcionamiento hasta configuraciones automatizadas.",
    viewDetails: "/senpai",
    aosDelay: "200",
  },
  {
    iconName: "bx bx-cloud",
    title: "Cloouder® LNS",
    shortText: "Con la suscripción a nuestro LoRaWAN Network Server (LNS), estarás equipado con todas las herramientas necesarias para optimizar el rendimiento de tus dispositivos.",
    viewDetails: "/cloouder",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-engineer",
    title: "Asesoría y Capacitación",
    shortText: "Haz realidad tus proyectos e ideas con el acompañamiento de nuestro equipo de expertos. Puedes agenda una sesión virtual gratuita de 30 minutos con nuestros asesores.",
    viewDetails: "/contact",
    aosDelay: "300",
  },
];

const Features = () => {

  //Smooth Scroll
  React.useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const links = document.querySelectorAll('a[href^="#"]');

      for (const link of links) {
        link.addEventListener("click", clickHandler);
      }

      function clickHandler(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }, [])

  
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6 p-0 h-100"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <Link href={value.viewDetails} target={value.target}  className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <div className="read-more-icon smooth" title="Click para más información">
                      <span className="flaticon-right-arrow"></span>
                    </div>

                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

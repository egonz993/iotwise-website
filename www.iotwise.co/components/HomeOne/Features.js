import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-store",
    title: "Tienda Online",
    shortText: "Encuentra una amplia variedad de opciones para tus sensores IoT con tecnologías inalámbricas como LoRaWAN, SigFox, NB-IoT, LTE-m, WiSun, y muchos más",
    viewDetails: "#store",
    aosDelay: "100",
  },
  {
    iconName: "bx bx-laptop",
    title: "IoT Senpai®",
    shortText: "Herramientas online que puedes utilizar para evaluar y configurar tus dispositivos IoT, desde pruebas de funcionamiento hasta configuraciones automatizadas.",
    viewDetails: "#iot-senpai",
    aosDelay: "200",
  },
  {
    iconName: "bx bx-cloud",
    title: "Cloouder®",
    shortText: "Transforma tus datos en decisiones con nuestro Dashboard Personalizable para tus proyectos IoT. Visualiza y controla tus dispositivos conectados de manera intuitiva.",
    viewDetails: "#cloouder",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-engineer",
    title: "Asesoría y Capacitación",
    shortText: "Haz realidad tus proyectos e ideas con el acompañamiento de nuestros mentores «IoT Senpai». Agenda gratis una reunion virtual con nuestros especialistas (30 min)",
    viewDetails: "#consulting",
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
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <a href={value.viewDetails} target={value.target} className="read-more-icon smooth">
                      <span className="flaticon-right-arrow"></span>
                    </a>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

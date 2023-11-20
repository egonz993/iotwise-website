import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-store",
    title: "Tienda Online",
    shortText: "Encuentra una amplia variedad de opciones para tus sensores IoT con tecnologías LoRaWAN, SigFox, NB-IoT, LTE-m, WiSun, y muchos más",
    viewDetails: "https://store.iotwise.co",
    target: '_blank',
    aosDelay: "100",
  },
  {
    iconName: "bx bx-laptop",
    title: "IoT Planner®",
    shortText: "Herramientas online que puedes utilizar para evaluar y configurar tus dispositivos IoT, desde pruebas de cobertura hasta configuraciones automatizadas.",
    viewDetails: "https://saas.iotwise.co",
    target: '_blank',
    aosDelay: "200",
  },
  {
    iconName: "flaticon-engineer",
    title: "Asesoría y Capacitación",
    shortText:
      "Tenemos más de 18 años de experiencia ejecutando proyectos del Internet de Las Cosas. Agenda gratis una reunion virtual de 30 minutos con nuestros expertos.",
    viewDetails: "/meet",
    aosDelay: "300",
  },
];

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0 "
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} target={value.target} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>

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

import React from "react";
import Link from "next/link";

const technologiesData = [
  {
    image: "/images/iot/logo-lorawan.png",
    title: "LoRaWAN",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-sigfox.png",
    title: "SigFox",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-nbiot.png",
    title: "NB-IoT",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-ltem.png",
    title: "LTE-m",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-zigbee.png",
    title: "Zigbee",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-bluetooth.png",
    title: "Bluetooth",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-wifi.png",
    title: "WiFI",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-gsm.png",
    title: "gsm",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-3gpp.png",
    title: "3GPP",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-lte.png",
    title: "LTE",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-wisun.png",
    title: "WiSun",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  },
  {
    image: "/images/iot/logo-nfc.png",
    title: "NFC",
    viewDetails: "/service-details",
    href: "https://www.google.com/"
  }
];

const Technologies = () => {
  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Tecnologías</span>
          <h2>Comunicaciones Inalámbricas</h2>
          <p>
            Ofrecemos las principales tecnologías para comunicación inalámbrica en proyectos IoT
          </p>
        </div>

        <div className="row justify-content-center"
          data-aos="fade-in"
          data-aos-delay={100}>

          {technologiesData &&
            technologiesData.map((value, i) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-xl-2"
                key={i}
              >
                <div className="single-offer border-0 bg-transparent">
                  {/* <i className={value.iconName}></i> */}
                  <Link href={value.href} target="_blank" ><img src={value.image} alt={value.title} /></Link>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center">
          <Link href="https://store.iotwise.co/" target="_blank" className='default-btn col-6'>
            <i className='bx bx-cart' /> IR A LA TIENDA
          </Link>
        </div>
      </div>

      {/* Shape Images */}
      <div className="offer-shape">
        <img src="/images/shape/services-shape/1.png" alt="Image" />
        <img src="/images/shape/services-shape/2.png" alt="Image" />
        <img src="/images/shape/services-shape/3.png" alt="Image" />
        <img src="/images/shape/services-shape/4.png" alt="Image" />
        <img src="/images/shape/services-shape/5.png" alt="Image" />
        <img src="/images/shape/services-shape/6.png" alt="Image" />
      </div>
    </section>
  );
};

export default Technologies;

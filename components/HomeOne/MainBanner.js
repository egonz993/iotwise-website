import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <section className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Somos Expertos en el Internet de las Cosas (IoT)
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Ofrecemos soluciones innovadoras y personalizadas para optimizar tus operaciones y mejorar la eficiencia. Descubre el potencial de la conectividad inteligente con IoTWise.
                </p>

                <div 
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <a href="https://store.iotwise.co" target="_blank" className="default-btn px-5">
                    TIENDA
                  </a>

                  <a href="https://saas.iotwise.co" target="_blank" className="default-btn px-5">
                    CONSOLA
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img animate__animated animate__fadeInUp">
                <img src="/images/iot/iot-04.png" alt="Image" />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <img
                  className="animate__animated animate__fadeInUp animate__fast"
                  src="/images/home-one/shape1.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInUp animate__fast"
                  src="/images/home-one/shape2.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/images/home-one/shape3.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/images/iot-logo-white.svg"
                  alt="Image"
                  width={250}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-one/bottom-shape.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default MainBanner;

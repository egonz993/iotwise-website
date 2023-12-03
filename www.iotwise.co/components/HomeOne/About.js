import React from "react";
import Link from "next/link";

const AboutComponent = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div 
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/iot/iot-03.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>Nosotros</span>
                <h2>
                  Somos Expertos en IoT
                </h2>
                <p>Con más de 18 años de experiencia, somos líderes en el campo del Internet de las cosas (IoT). Nuestra trayectoria refleja un profundo conocimiento y experiencia en el diseño, implementación y optimización de soluciones IoT, posicionándonos como expertos de confianza en este emocionante y dinámico sector tecnológico.</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        LoRaWAN
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        SigFox
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        NB-IoT
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        LTE-m
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        WiSun
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Y muchos más
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
                  Conócenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;

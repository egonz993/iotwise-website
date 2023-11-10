import React from 'react'

export default function SaaS() {

  return (
    <>
      <section className="saas-area pb-100">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span><a href='https://saas.iotwise.co'>saas.iotwise.co</a></span>
                <h2>
                Nuestro Software
                </h2>
                <p>Herramientas online que puedes utilizar para evaluar y configurar tus dispositivos IoT, desde pruebas de covertura hasta configuraciones automatiadas.</p>

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

              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/iot/iot-06.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

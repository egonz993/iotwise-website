import Link from 'next/link';
import React from 'react'

export default function IoTPlanner() {

  return (
    <>
      <section className="saas-area pb-100 pt-5 bg-light">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2>IoT Planner®</h2>
                <p>Descubre una solución integral para la gestión eficiente de tus dispositivos IoT con nuestro Software en la Nube. Nuestra plataforma te ofrece un conjunto de herramientas en línea diseñadas para simplificar, potenciar y automatizar la evaluación y configuración de tus dispositivos IoT de manera efectiva y sin complicaciones.</p>

                  <Link href="https://planner.app.iotwise.co/" target="_blank" className='default-btn'>
                      PRUEBALO GRATIS
                  </Link>

              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/iot/iot-14.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

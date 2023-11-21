import Link from 'next/link';
import React from 'react'

export default function Cloouder() {

    return (
      <>
        <section className="store-area pb-100 pt-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/iot/iot-16.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2>Cloouder®</h2>
                <p>Con nuestro Dashboard, tendrás acceso a una interfaz fácil de usar que te permite monitorear en tiempo real el rendimiento y el estado de tus dispositivos IoT. Podrás personalizar la visualización de datos según tus necesidades específicas, creando paneles que reflejen la información más relevante para tu proyecto. Ya sea que estés gestionando un sistema de automatización en el hogar, una red de sensores industriales o cualquier otro tipo de proyecto IoT, nuestro Dashboard se adapta a ti.</p>

                <Link href="https://cloouder.app.iotwise.co/" target="_blank" className='default-btn'>
                    PRUEBALO GRATIS
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

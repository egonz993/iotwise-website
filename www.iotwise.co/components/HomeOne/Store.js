import Link from 'next/link';
import React from 'react'

export default function Store() {

    return (
      <>
        <section className="store-area pb-100">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/iot/iot-13.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2>Tienda Online</h2>
                <span><a title="link to store" href='https://store.iotwise.co'>store.iotwise.co</a></span>
                <p>Los sensores IoT desempeñan un papel crucial en la creación de entornos inteligentes y eficientes, en IoT Wise comprendemos la importancia de contar con la conectividad adecuada para garantizar el mejor rendimiento. Explora nuestra extensa gama de soluciones para sensores y módulos IoT, donde podrás descubrir una amplia variedad de opciones que abarcan diversas tecnologías de conectividad, entre las que se incluyen LoRaWAN, SigFox, NB-IoT, LTE-m, WiSun, y muchas más.</p>

                <Link href="https://store.iotwise.co/" target="_blank" className='default-btn'>
                    <i className='bx bx-cart' /> Ir a la Tienda
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

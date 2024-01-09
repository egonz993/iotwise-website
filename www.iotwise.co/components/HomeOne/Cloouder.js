import Link from 'next/link';
import React from 'react'
import { useAuth } from '../../hooks/useAuth';

export default function Cloouder() {

  const { isAuth } = useAuth()

  return (
    <>
      <section className="store-area pb-100 pt-5" id='cloouder'>
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
                <h2>Cloouder® LNS</h2>
                <h4>[En Desarrollo]</h4>
                <p>Con la suscripción a nuestro LoRaWAN Network Server (LNS), estarás equipado con todas las herramientas necesarias para optimizar la administración de tus dispositivos, garantizando una conectividad eficiente y segura en todo momento. Este servidor actúa como el intermediario inteligente que organiza la transmisión y recepción de datos, asegurando la eficiencia y confiabilidad de la red. Además, ofrece funciones avanzadas como almacenamiento de datos, accecibilidad desde una API REST, redireccionamientos HTTP/MQTT y manejo usuarios con diferentes roles. ¡Únete a nuestra comunidad IoT Wise y descubre cómo facilitamos la gestión de tus proyectos IoT con Cloouder® LNS!.</p>

                <Link href="https://calendar.app.google/LR1yvioih5HdyWFdA" target='_blank' className='default-btn'>
                  Solicitar un Demo
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

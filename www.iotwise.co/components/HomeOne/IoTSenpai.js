import Link from 'next/link';
import React from 'react'
import { useAuth } from '../../hooks/useAuth';

export default function IoTSenpai() {

  const { isAuth } = useAuth()

  return (
    <>
      <section className="saas-area pb-100 pt-5 bg-light" id='iot-senpai'>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2>IoT Senpai®</h2>
                <h4>[En Desarrollo]</h4>
                <p>Explora una solución integral diseñada para convertirse en tu aliado principal en la gestión de dispositivos inteligentes. IoT Senpai® proporciona herramientas en línea diseñadas para simplificar y automatizar de manera eficiente la configuración de tus módulos IoT, brindando una experiencia de usuario avanzada y personalizada, apóyate con nuestro chatbot de IA Generativa entrenado con los datos de los proyectos y soluciones más destacadas en el campo del IoT, convertiéndose en tu aliado ideal.</p>
                <Link href="https://calendar.app.google/LR1yvioih5HdyWFdA" target='_blank' className='default-btn'>
                  Solicitar un Demo
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

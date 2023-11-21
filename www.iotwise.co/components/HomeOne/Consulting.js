import Link from 'next/link';
import React from 'react'

export default function Consulting() {

  return (
    <>
      <section className="consulting-area pt-5">
        <div className="container">
          <div className="section-title">
            <h2>Asesoría y Capacitación</h2>
            <p>Con más de 10 años de dedicación y experiencia en la ejecución exitosa de proyectos en el ámbito del Internet de las Cosas (IoT), nos enorgullece ofrecer nuestro conocimiento y compromiso para llevar tu visión a la realidad. Estamos listos para colaborar contigo y apoyarte en la implementación de soluciones innovadoras de IoT.</p>

            <div className='row px-4'
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100">

              <Link href="/meet" className='btn btn-light'>
                <p className='mt-3'>AGENDA GRATIS UNA SESIÓN VIRTUAL</p>
                <img src="/images/iot/iot-15.png" alt="Image" width={500} />
              </Link>

              <Link href="/meet" className='default-btn mt-1'>AGENDA GRATIS UNA SESIÓN VIRTUAL</Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

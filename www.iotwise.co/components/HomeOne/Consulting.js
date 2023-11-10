import React from 'react'

export default function Consulting() {

  return (
    <>
      <section className="consulting-area pb-100">
        <div className="container">
          <div className="section-title pt-5">
            <h2>Asesoría y Capacitación</h2>
            <p>Tenemos más de 18 años de experiencia ejecutando proyectos del Internet de Las Cosas. Agenda gratis una reunion virtual.</p>
          </div>


          <div>
            <div
              className="about-img"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <img src="/images/iot/iot-06.png" alt="Image" width={500}/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

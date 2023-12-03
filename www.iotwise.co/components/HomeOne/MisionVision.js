import React from 'react'

export const MisionVision = () => {

  return (
    <>
      <section className="store-area pb-100 pt-5" id='store'>
        <div className="container">
          <div className="row align-items-center text-center">
            <div className='mb-5'
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h2>
                MISIÓN, VISIÓN Y VALORES
              </h2>
            </div>

            <div className="col-lg-6 p-3">
              <div
                className="about-content card p-4 border-0 bg-transparent"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h4>MISIÓN</h4>
                <p>Facilitar el uso de las tecnologías del Internet de las cosas (IoT) ofreciendo soluciones innovadoras impulsadas por inteligencia artificial y computación en la nube. En IoT Wise, nos dedicamos a crear software y hardware eficientes que ayuden a hacer realidad los proyectos IoT. Buscamos inspirar a las personas a desarrollar soluciones IoT inteligentes y creativas para mejorar la calidad de vida de todas las personas.</p>
              </div>
            </div>

            <div className="col-lg-6 p-3">
              <div
                className="about-content card p-4 border-0 bg-transparent"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h4>VISIÓN</h4>
                <p>Ser líderes en la revolución tecnológica al ser reconocidos como la opción preferida de aquellos que desarrollan soluciones en IoT. En IoT Wise, aspiramos a construir un ecosistema que facilite el desarrollo de soluciones para ciudades, industrias y hogares más inteligentes, en el que la tecnología IoT, la computaión en la nube y la inteligencia artificial estén al alcance de todos, haciendo posible un futuro más conectado, eficiente y sostenible.</p>
              </div>
            </div>

            <div className="col-12 p-3">
              <div className="about-content card p-4 border-0 bg-transparent" 
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                <h4>VALORES PRINCIPALES</h4>
                <div className='row mt-4'>

                  <div className='col-lg-4 py-3'
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <p><strong>Innovación Accesible</strong></p>
                    <p>Impulsamos la innovación para que sea accesible a todos, eliminando barreras y haciendo que la tecnología IoT sea fácilmente comprensible y utilizable.</p>
                  </div>

                  <div className='col-lg-4 py-3'
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <p><strong>Empoderamiento Tecnológico</strong></p>
                    <p>Buscamos empoderar a las personas y empresas brindándoles las herramientas necesarias para aprovechar al máximo las tecnologías IoT y la inteligencia artificial.</p>
                  </div>

                  <div className='col-lg-4 py-3'
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <p><strong>Colaboración</strong></p>
                    <p>Creemos en la fuerza de la colaboración y la co-creación, trabajando en estrecha colaboración con nuestros clientes y socios para alcanzar soluciones que superen las expectativas.</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

import React from "react";


const MeetForm = () => {
  

  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <p>Agenda gratis una reunion virtual de 30 minutos con nuestros expertos</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre y Apellido"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="correo@example.com"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="date"
                          name="date"
                          placeholder="Fecha"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="time"
                          name="time"
                          placeholder="Hora"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="Escribe aquí tu mensaje..."
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn btn-two">
                        Agendar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-none d-lg-block">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetForm;

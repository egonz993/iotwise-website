import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="ÚNETE A NOSOTROS" />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">¡Crea una cuenta gratis!</h3>
                </div>
                <div className="text-center">
                  <h6 className="form-title">¿Ya tines una cuenta? <Link title="link to signup" href="/login" >Inicia sesión aquí</Link></h6>
                  <div className="text-center pb-3">
                    <img src="/images/iotwise-logo-black.svg" width={120} />
                  </div>
                </div>


                <form autoComplete="off">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Nombre"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Apellido"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="tu_correo@dominio.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Registrarme gratis
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

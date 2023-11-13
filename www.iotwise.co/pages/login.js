import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Iniciar Sesión" />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h4 className="form-title">Inicia Sesión</h4>
                </div>
                <div className="text-center">
                  <h6 className="form-title">¿No tines una cuenta? <Link title="link to signup" href="/sign-up" >Crea una aquí</Link></h6>
                  <div className="text-center pb-3">
                    <img src="/images/iotwise-logo-black.svg" width={120} />
                  </div>
                </div>


                <form>
                  <div className="row">

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="tu_correo@dominio.com"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>


                    <div className="col-12 pb-4">
                      <Link href="/recover-password" className="forget">
                        ¿Olvidaste tu clave?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Iniciar Sesión
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

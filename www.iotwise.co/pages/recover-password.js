import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function RecoverPassword() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Recuperar contraseña" />

      <section className="user-area-all-style recover-password-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Recuperar contraseña</h3>

                  <p className="reset-desc">Ingrese el correo electrónico de su cuenta para restablecer la contraseña. Luego recibirá un enlace al correo electrónico para restablecerla. Si tiene algún problema para restablecer la contraseña {" "}
                    <Link href="/contact">Contáctenos</Link>
                  </p>
                </div>

                <form method="post">
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

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <Link href="/login" className="now-log-in font-q">
                        Iniciar Sesión
                      </Link>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <p className="now-register">
                        ¿No tienes cuenta? &nbsp;
                        <Link href="/sign-up" className="font-q">
                          Registrate
                        </Link>
                      </p>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Solicitar enlace de recuperación
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

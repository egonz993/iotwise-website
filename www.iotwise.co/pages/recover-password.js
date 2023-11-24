import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import { Auth } from "../services/firebase/auth.service"
import { formattedSeconds } from "../helpers/formatSeconds";

export default function RecoverPassword() {
  
  
  const [txtEmail, setTxtEmail] = React.useState("")
  const email = React.useRef()
  
  const [txtBtn, setTxtBtn] = React.useState("Solicitar Recuperación de la Contraseña")
  const [timer, setTimer] = React.useState(0)

  const handleRecoverPasswordForm = async () => {
    const auth = Auth.getInstance()
    await auth.sendPasswordResetEmail(txtEmail)
    setTimer(300)
  }
  
  React.useEffect(() => {
    if(timer > 0){
      setTxtBtn(`Revisa tu correo y sigue las instrucciones. Puedes solicitar un nuevo código en ${formattedSeconds(timer)} minutos. Si tienes dificultades comunícate con nosotros`)
      setTimeout(() => {
        setTimer(timer-1)
      }, 1000)
    }
    else{
      setTxtBtn("Solicitar Recuperación de la Contraseña")
    }
  }, [timer])

  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="RECUPERAR CONTRASEÑA" 
        pageSubtitle="Un sola cuenta para todas nuestras aplicaciones"
      />

      <section className="user-area-all-style recover-password-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Recuperar contraseña</h3>

                  <p className="reset-desc">Ingrese el correo electrónico de su cuenta para restablecer la contraseña. Luego recibirá un enlace al correo electrónico para restablecerla. Si tienes dificultades {" "}
                    <Link href="/contact">Contáctenos</Link>
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          ref={email}
                          value={txtEmail}
                          onChange={(e) => setTxtEmail(e.target.value)}
                          autoComplete="on"
                          className="form-control"
                          type="email"
                          name="email"
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
                      <button className={`default-btn btn-two ${timer > 0 ? 'd-none' : ''}`} onClick={handleRecoverPasswordForm}>
                        {txtBtn}
                      </button>
                      <p className={`text-center ${timer > 0 ? '' : 'd-none'}`}>
                        <strong>Revisa tu correo y sigue las instrucciones</strong>
                        <br />Puedes solicitar un nuevo código en <span className="text-danger">{formattedSeconds(timer)} minutos.</span>
                      </p>
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

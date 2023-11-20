import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Auth } from "../services/firebase/auth.service"

export default function Login() {

  const router = useRouter()

  const [txtEmail, setTxtEmail] = React.useState("")
  const [txtPassword, setTxtPassword] = React.useState("")

  const email = React.useRef()
  const password = React.useRef()

  const handleLoginForm = async () => {

    const auth = Auth.getInstance()
    const result = await auth.signInWithEmailAndPassword(txtEmail, txtPassword)

    if(result.hasOwnProperty("uid")){
      router.push("/user")
    }
    else{
      alert(result)
    }
  }

  return (
    <>
      <Navbar />

      <PageBanner pageTitle="INICIAR SESIÓN" />

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
                          type="text"
                          name="email"
                          placeholder="tu_correo@dominio.com"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          ref={password}
                          value={txtPassword}
                          onChange={(e) => setTxtPassword(e.target.value)}
                          autoComplete="on"
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
                      <button className="default-btn btn-two" onClick={handleLoginForm}>
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

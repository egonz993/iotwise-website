import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Auth } from "../services/firebase/auth.service"
import { Database } from "../services/firebase/database.service";

export default function SignUp() {

  const router = useRouter()

  const [txtName, setTxtName] = React.useState("")
  const [txtLastName, setTxtLastName] = React.useState("")
  const [txtEmail, setTxtEmail] = React.useState("")
  const [txtPassword, setTxtPassword] = React.useState("")

  const name = React.useRef()
  const lastname = React.useRef()
  const email = React.useRef()
  const password = React.useRef()

  const handleSignupForm = async () => {

    const auth = Auth.getInstance()
    const result = await auth.createUserWithEmailAndPassword(txtEmail, txtPassword)

    if(result.hasOwnProperty("uid")){
      await Database.set(`users/${result.uid}`, {
        uid: result.uid,
        name: txtName,
        lastname: txtLastName,
        email: txtEmail,
        location: "",
        rol: "user",
      })
      
      router.push("/user")
    }
    else{
      alert(result)
    }
  }


  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="ÚNETE A LA COMUNIDAD IOT WISE" 
        pageSubtitle="Un sola cuenta para todas nuestras aplicaciones"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">¡Crea una cuenta gratis!</h3>
                </div>
                <div className="text-center">
                  <h6 className="form-title">¿Ya tienes una cuenta? <Link title="link to signup" href="/login" >Inicia sesión aquí</Link></h6>
                  <div className="text-center pb-3">
                    <img src="/images/iotwise-logo-black.svg" width={120} />
                  </div>
                </div>


                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          ref={name}
                          value={txtName}
                          onChange={(e) => setTxtName(e.target.value)}
                          autoComplete="off"
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
                          ref={lastname}
                          value={txtLastName}
                          onChange={(e) => setTxtLastName(e.target.value)}
                          autoComplete="off"
                          className="form-control"
                          type="text"
                          name="lastname"
                          placeholder="Apellido"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          ref={email}
                          value={txtEmail}
                          onChange={(e) => setTxtEmail(e.target.value)}
                          autoComplete="off"
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
                          ref={password}
                          value={txtPassword}
                          onChange={(e) => setTxtPassword(e.target.value)}
                          autoComplete="off"
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" onClick={handleSignupForm}>
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

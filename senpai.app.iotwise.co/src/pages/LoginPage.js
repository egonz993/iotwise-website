import React, { useRef, useState } from 'react'
import { LayoutComponent } from '../layout/LayoutComponent'
import { useNavigate } from 'react-router-dom'
import { Auth } from "../services/firebase/auth.service"
import './LoginPage.css'

const loginBackground = {
  backgroundImage: 'url("/images/login-background.png")'
}

const auth = Auth.getInstance()

export const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false)
  
  const user_email = useRef()
  const user_password = useRef()
  
  const navigate = useNavigate()
  
  const handleLogin = async () => {

    const result = await auth.signInWithEmailAndPassword(user_email.current.value, user_password.current.value)
    
    if(result.hasOwnProperty("uid")){
      navigate('/app', { replace: true })
      console.log(result)
    }
  }

  return (
    <LayoutComponent>
      <div className="login-page" style={loginBackground} >
        <div className="login-box">
          <div className="card login-card py-3">
            <div className="login-logo">
              <h1 className='link-light'>IoT Senpai<sup>®</sup></h1>
              <img src="/images/logo.svg" alt="logo iot wise" className="brand-image" width={100} />
              <h6 className="link-light mt-3">¿No tines una cuenta? <a className='link-primary' title="link to signup" href="https://iotwise.co/sign-up" target='_blank' rel="noreferrer">Crea una aquí</a></h6>
            </div>

            <div className="card-body login-card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group mb-3">
                  <input id="user_email" type="email" className="form-control" placeholder="User Email" ref={user_email} />
                  <div className="input-group-append">
                    <div className="input-group-text border-0 p-3">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input id="user_password" type={`${showPassword ? 'text' : 'password'}`} className="form-control" placeholder="Contraseña" ref={user_password} />
                  <div className="input-group-append">
                    <div className="input-group-text border-0 p-3">
                      <span className={`fas fa-${showPassword ? 'unlock' : 'lock'} pointer`} onClick={() => setShowPassword(!showPassword)} />
                    </div>
                  </div>
                </div>
                <div className="row px-2">
                  <div className="default-btn text-center mt-3" onClick={handleLogin} ><strong>INICIAR SESIÓN</strong></div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a href="https://iotwise.co/recover-password/" target='_blank' rel="noreferrer" className="text-light text-center btn btn-sm btn-outline-dark w-100 border-0 mt-3">Recuperar Contraseña</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}
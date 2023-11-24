import React from 'react'
import { Link } from 'react-router-dom';
import { LayoutComponent } from '../layout/LayoutComponent';
import { Auth } from '../services/firebase/auth.service';
import '../App.css';

const auth = Auth.getInstance()

export const HomePage = () => {
  return (
    <LayoutComponent>
      <div className="App">
        <header className="App-header">
          <h2>IoT Senpai®</h2>
          <a
            className="App-link"
            href="https://iotwise.co"
            rel="noopener noreferrer"
          >
            <img src="/images/logo.svg" className="App-logo" alt="logo" />
            <h2>Página en Construcción</h2>
            <p>www.iotwise.co</p>
          </a>
          <div className='btn-group'>
            <Link className='btn btn-success' to='/terminal'>Probar Terminal</Link>
            <button className='btn btn-danger' onClick={() => auth.signOut()}>Cerrar Sesión</button>
          </div>
        </header>
      </div>
    </LayoutComponent>
  )
}

import React from 'react'
import { LayoutComponent } from '../layout/LayoutComponent';
import { Auth } from '../services/firebase/auth.service';
import '../App.css';

const auth = Auth.getInstance()

export const HomePage = () => {
  return (
    <LayoutComponent>
      <div className="App">
        <header className="App-header">
          <h2>Cloouder®</h2>
          <a
            className="App-link"
            href="https://www.iotwise.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/logo.svg" className="App-logo" alt="logo" />
            <h2>Página en Construcción</h2>
            <p>www.iotwise.co</p>
          </a>
          <button className='btn btn-danger btn-block' onClick={() => auth.signOut()}>Logout</button>
        </header>
      </div>
    </LayoutComponent>
  )
}

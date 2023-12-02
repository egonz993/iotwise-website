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
          
          <div>
            <img src="/images/logo.svg" className="App-logo" alt="logo" />
          </div>

          <div className='btn-group'>
            <Link className='btn btn-success' to='/serialport' >SerialPort Online</Link>
            {/* <Link className='btn btn-primary' to='/bluetooth' >Bluetooth Online</Link> */}
            <button className='btn btn-danger' onClick={() => auth.signOut()}>Cerrar Sesión</button>
          </div>
        </header>
      </div>
    </LayoutComponent>
  )
}

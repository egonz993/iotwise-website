import React from 'react'
import './SplashScreen.css'

export const SplashScreen = () => {
  return (
    <div className='loading-page'>
      <img src='/images/loading.gif' width={400} alt='' />
      <img className='loading-img' src='/images/logo-white.svg' width={150} alt='' />
      <h1 className='loading-text'>Iniciando</h1>
    </div>
  )
}

import React from 'react'
import './LoadingPage.css'

export const SplashScreen = () => {
  return (
    <div className='loading-page'>
      <img src='/images/loading3.gif' width={500} alt='' />
      <img className='loading-img' src='/images/logo-white.svg' width={150} alt='' />
      <h1 className='loading-text d-none d-md-block'>INICIANDO</h1>
    </div>
  )
}

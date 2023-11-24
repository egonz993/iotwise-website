import React from 'react'
import './LoadingPage.css'

export const SplashScreen = () => {
  return (
    <div className='loading-page'>
      <img src='/images/loading.gif' width={400} alt='Loading' />
      <p className='loading-text'>Iniciando</p>
    </div>
  )
}

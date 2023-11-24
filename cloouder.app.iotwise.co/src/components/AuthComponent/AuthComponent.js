import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { SplashScreen } from '../../pages/SplashScreen'


export const AuthComponent = () => {

  const { isAuth } = useAuth()
  const [splashScreenCompleted, setSplashScreenCompleted] = useState(false)

  React.useEffect(() => {
    console.log('splashScreenCompleted', false)
    setTimeout(() => {
      setSplashScreenCompleted(true)
      console.log('splashScreenCompleted', true)
    }, 1500)
  }, [])


  return (
    (isAuth === null || !splashScreenCompleted) ? <SplashScreen /> :
    <>
      {isAuth && <Outlet />}
      {!isAuth && <Navigate redirect to="login" />}
    </>
  )
}

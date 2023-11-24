import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { SplashScreen } from '../../pages/SplashScreen'


export const AuthComponent = () => {

  const { isAuth } = useAuth()
  const [splashScreenCompleted, setSplashScreenCompleted] = useState(false)

  // Show Splash Screen
  React.useEffect(() => {
    setTimeout(() => {
      setSplashScreenCompleted(true)
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

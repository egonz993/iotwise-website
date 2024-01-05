import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'


export const AuthComponent = () => {

  const { isAuth } = useAuth()

  return (
    isAuth !== null && <>
      {isAuth && <Outlet />}
      {!isAuth && <Navigate redirect to="login" />}
    </>
  )
}

import React from 'react'
import { LayoutComponent } from '../layout/LayoutComponent';
import { Outlet } from 'react-router-dom';
import '../App.css';

export const HomePage = () => {
  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  )
}

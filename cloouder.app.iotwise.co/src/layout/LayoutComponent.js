import React from 'react'
import { Navbar } from './Navbar'
import './layout.css'

export const LayoutComponent = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

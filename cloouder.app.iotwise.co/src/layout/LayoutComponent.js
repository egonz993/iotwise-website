import React from 'react'
import { Navbar } from './Navbar'
import './layout.css'

export const LayoutComponent = ({children}) => {
  return (
    <div className='bgindex' style={{backgroundImage: "url('/images/app-background.png')"}}>
      <Navbar />
      <div className='layout-content p-4'>
        {children}
      </div>
    </div>
  )
}

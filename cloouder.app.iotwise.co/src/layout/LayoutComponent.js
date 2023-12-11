import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './layout.css'

export const LayoutComponent = ({children}) => {
  return (
    <div>
      <div className='bgindex' style={{backgroundImage: "url('/images/app-background2.png')"}} >
        <Navbar />
        <div className='layout-content p-4'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

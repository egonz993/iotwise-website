'use client'
import React from 'react'
import { Content } from './layout/Content'
import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'

import './style.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

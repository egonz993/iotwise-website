import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Content } from '../layout/Content'
import { Footer } from '../layout/Footer'

export const index = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default index
import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Content } from '../layout/Content'
import { Footer } from '../layout/Footer'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { ProductCardContainer } from '@/components/ProductCard/ProductCardContainer'

export const index = () => {
  return (
   <div className='text-center'>
    <img src='https://fecoljudo.org.co/wp-content/uploads/2020/07/construccion5.png' width="50%" alt='Página en Construcción' />
   </div>
  )
}

export default index
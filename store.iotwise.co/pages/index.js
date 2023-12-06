import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Content } from '../layout/Content'
import { Footer } from '../layout/Footer'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { ProductCardContainer } from '@/components/ProductCard/ProductCardContainer'

export const index = () => {
  return (
    <>
      <Navbar />
      <Content>

        <ProductCardContainer title="Product Category 1">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardContainer>

        <ProductCardContainer title="Product Category 2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardContainer>

      </Content>
      <Footer />
    </>
  )
}

export default index
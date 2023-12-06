import Link from 'next/link'
import React from 'react'
  
export const ProductCard = () => {
  return (
    <div className='product-card p-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
      <Link href='' className='product-container card text-center'>
        
        <div className='image-container'>
          <img src="https://store.rakwireless.com/cdn/shop/products/RAK8213_RAKStore_Thumbnail_01_873fea6f-f067-41ad-8c50-65034119b27f_360x.png" alt="" loading='lazy' />
        </div>
        
        <div className='product-tag my-3 px-3'>
          <img src='/images/logo-wifi.png' alt='' />
          <img src='/images/logo-lorawan.png' alt='' />
        </div>
        
        <div className='product-description px-3'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda, provident beatae ipsum ess.</p>
        </div>
        
        <div className='product-price px-3'>
          <p><span className='text-secondary'>Precio: </span>$ 10.99</p>
        </div>

      </Link>
      <div className='product-label'>
        <img src='/images/tag-new.svg' />
      </div>
    </div>
  )
}

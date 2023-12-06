import Link from 'next/link'
import React from 'react'

export const ProductCard = () => {
  return (
    <div className='product-card p-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2'>
      <div className='product-container card text-center'>

        <Link href='' className='product-sku px-3'>
          <p><span>u-WISE® </span>1307</p>
        </Link>

        <Link href='' className='image-container'>
          <img src="https://store.rakwireless.com/cdn/shop/products/RAK8213_RAKStore_Thumbnail_01_873fea6f-f067-41ad-8c50-65034119b27f_360x.png" alt="" loading='lazy' title='Click para más información' />
        </Link>

        <div className='product-logo my-3 px-3 d-flex'>
          <img src='/images/logo-lorawan.png' alt='' />
          <img src='/images/logo-wifi.png' alt='' />
          <img src='/images/logo-ucifi.png' alt='' />
        </div>

        <div className='product-description px-3'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda, provident beatae ipsum.</p>
        </div>

        <div className='product-price px-3'>
          <p><span className='text-secondary'>Precio: </span>$ 12,<sub>85</sub></p>
        </div>

      </div>

      <div className='product-label'>
        <img src='/images/tag-new.svg' />
        {/* <img src='/images/tag-hot.svg' /> */}
      </div>

      <div className='product-action-button' onClick={() => alert('Add to the Cart')} >
        <img src='https://cdn0.iconfinder.com/data/icons/shopping-extras-set-1/512/1-512.png' alt='' style={{width: '30px'}} title='Agregar al carrito' />
      </div>
    </div>
  )
}

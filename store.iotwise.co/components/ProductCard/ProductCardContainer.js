import React from 'react'

export const ProductCardContainer = ({children, title}) => {
  return (
    <div className='mb-4 pb-4'>
      <div className='row col-12'>
        <h3>{title}</h3>
        <hr></hr>
      </div>
      <div className='col-12 '>
        <div className='row mx-1'>
          {children}
        </div>
      </div>
    </div>
  )
}

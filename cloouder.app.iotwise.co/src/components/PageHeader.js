import React from 'react'

export const PageHeader = ({title, icon, buttons}) => {
  return (
    <div className='w-100'>
      <div className='mb-4 d-flex justify-content-between'>

        {/* Page Title */}
        <h3><i className={icon} /> {title}</h3>

        {/* Action Buttons */}
        {buttons}
      </div>

      <hr style={{ border: '2px solid black', borderRadius: '15px' }} />
    </div>
  )
}

import React from 'react'
import { GatewayOverviewComponents } from '../components/GatewayOverviewComponents'

export const GatewaysView = () => {
  return (
    <div>
      <div className='mb-4'>
        <h3><i className='fa fa-wifi' /> Gateways</h3>
      </div>

      <div className='row'>
        <div className='col-12 col-sm-6'>
          
        </div>
        <div className='col-12 col-sm-6'>
          <GatewayOverviewComponents />
        </div>
      </div>
    </div>
  )
}

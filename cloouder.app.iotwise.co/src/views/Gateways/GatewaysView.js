import React from 'react'
import { GatewaysOverview } from './GatewaysOverview'
import { GatewaysBtnGroup } from './GatewaysBtnGroup'
import { PageTitle } from '../../components/PageTitle'
import { GatewaysMap } from './GatewaysMap'
import { GatewaysDatatable } from './GatewaysDatatable'
import { useScrolltop } from '../../hooks/useScrolltop'

export const GatewaysView = () => {

  useScrolltop()

  return (
    <div className='pb-4 mb-4'>
      <div className='mb-4 d-flex justify-content-between'>

        {/* Page Title */}
        <PageTitle title="Gateways" icon="fa fa-wifi" />

        {/* Action Buttons */}
        <GatewaysBtnGroup />
      </div>

      {/* Cards Overview */}
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <GatewaysMap />
        </div>

        <div className='col-12 col-lg-6'>
          <GatewaysOverview />
        </div>
      </div>

      {/* Datatable */}
      <GatewaysDatatable />

    </div>
  )
}


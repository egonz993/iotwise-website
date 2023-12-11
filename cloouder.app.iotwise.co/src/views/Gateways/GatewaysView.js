import React from 'react'
import { GatewaysOverview } from './GatewaysOverview'
import { GatewaysBtnGroup } from './GatewaysBtnGroup'
import { GatewaysMap } from './GatewaysMap'
import { GatewaysDatatable } from './GatewaysDatatable'
import { PageWrapper } from '../../components/AuthComponent/PageWrapper'

export const GatewaysView = () => {

  return (
    <PageWrapper
      title="Gateways"
      icon="fa fa-wifi"
      buttons={<GatewaysBtnGroup />}
    >

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

    </PageWrapper>
  )
}


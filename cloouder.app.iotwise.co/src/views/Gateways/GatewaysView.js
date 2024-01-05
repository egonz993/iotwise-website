import React from 'react'
import { GatewaysOverview } from './GatewaysOverview'
import { GatewaysBtnGroup } from './GatewaysBtnGroup'
import { GatewaysMap } from './GatewaysMap'
import { GatewaysDatatable } from './GatewaysDatatable'
import { PageWrapper } from '../../components/AuthComponent/PageWrapper'

export const GatewaysView = ({gateways}) => {

  return (
    <PageWrapper
      title="Gateways"
      icon="fa fa-wifi"
      buttons={<GatewaysBtnGroup />}
    >

      {/* Cards Overview */}
      <div className='row'>

        <div className='col-12 col-lg-6'>
          <GatewaysMap gateways={gateways} />
        </div>

        <div className='col-12 col-lg-6'>
          <GatewaysOverview gateways={gateways} />
        </div>
      </div>

      {/* Datatable */}
      <GatewaysDatatable gateways={gateways} />

    </PageWrapper>
  )
}


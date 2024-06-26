import React from 'react'
import { HomeBtnGroup } from './HomeBtnGroup'
import { HomeMap } from './HomeMap'
import { HomeOverviewDevices } from './HomeOverviewDevices'
import { HomeOverviewGateways } from './HomeOverviewGateways'
import { HomeChart } from './HomeChart'
import { PageWrapper } from '../../components/AuthComponent/PageWrapper'

export const HomeView = ({devices, gateways}) => {

  return (
    <PageWrapper
      title="Inicio"
      icon="fa fa-home"
      buttons={<HomeBtnGroup />} 
    >

      <div className='row'>
        <div className='d-none d-lg-block col-lg-3 py-3'>
          <HomeOverviewDevices devices={devices} />
        </div>

        <div className='col-12 col-lg-6 py-3'>
          <HomeMap gateways={gateways} />
        </div>

        <div className='d-block d-lg-none col-12 py-3'>
          <HomeOverviewDevices devices={devices} />
        </div>

        <div className='col-12 col-lg-3 py-3'>
          <HomeOverviewGateways gateways={gateways} />
        </div>
      </div>

      {/* Charts */}
      <div className='row'>
        <HomeChart />
      </div>

    </PageWrapper>
  )
}
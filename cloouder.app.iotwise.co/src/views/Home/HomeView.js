import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { HomeBtnGroup } from './HomeBtnGroup'
import { HomeMap } from './HomeMap'
import { HomeOverviewDevices } from './HomeOverviewDevices'
import { HomeOverviewGateways } from './HomeOverviewGateways'
import { HomeChart } from './HomeChart'

export const HomeView = () => {

  return (
    <div>
      <div className='mb-4 d-flex justify-content-between'>

        {/* Page Title */}
        <PageTitle title="Inicio" icon="fa fa-home" />

        {/* Action Buttons */}
        <HomeBtnGroup />
      </div>

      {/* Cards Overview */}
      <div className='row'>
        <div className='d-none d-lg-block col-lg-3 py-3'>
          <HomeOverviewDevices />
        </div>

        <div className='col-12 col-lg-6 py-3'>
          <HomeMap />
        </div>

        <div className='d-block d-lg-none col-12 py-3'>
          <HomeOverviewDevices />
        </div>

        <div className='col-12 col-lg-3 py-3'>
          <HomeOverviewGateways />
        </div>
      </div>

      {/* Charts */}
      <div className='row'>
        <HomeChart />
      </div>

    </div>
  )
}
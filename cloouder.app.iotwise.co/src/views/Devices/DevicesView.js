import React from 'react'
import { DeviceDatatable } from './DeviceDatatable'
import { DeviceOverview } from './DeviceOverview'
import { DeviceBtnGroup } from './DeviceBtnGroup'
import { PageTitle } from '../../components/PageTitle'

export const DevicesView = () => {

  return (
    <div className='pb-4 mb-4'>
      <div className='mb-4 d-flex justify-content-between'>

        {/* Page Title */}
        <PageTitle title="Dispositivos" icon="fa fa-laptop" />

        {/* Action Buttons */}
        <DeviceBtnGroup />
      </div>

      {/* Cards Overview */}
      <DeviceOverview />

      {/* Datatable */}
      <DeviceDatatable />

    </div>
  )
}

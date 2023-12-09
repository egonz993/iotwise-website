import React from 'react'
import { DeviceOverviewComponent } from '../components/DeviceOverviewComponent'
import { Datatable } from '../widgets/datatables/Datatable'

export const DevicesView = () => {
  return (
    <div className='pb-4 mb-4'>
      <div className='mb-4'>
        <h3><i className='fa fa-laptop' /> Dispositivos</h3>
      </div>
      <DeviceOverviewComponent />
      <Datatable />
    </div>
  )
}

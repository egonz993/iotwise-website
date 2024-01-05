import React from 'react'
import { DeviceDatatable } from './DeviceDatatable'
import { DeviceOverview } from './DeviceOverview'
import { DeviceBtnGroup } from './DeviceBtnGroup'
import { PageWrapper } from '../../components/AuthComponent/PageWrapper'

export const DevicesView = ({devices}) => {

  return (
    <PageWrapper
      title="Dispositivos"
      icon="fa fa-laptop"
      buttons={<DeviceBtnGroup />}
    >

      {/* Cards Overview */}
      <DeviceOverview devices={devices}/>

      {/* Datatable */}
      <DeviceDatatable devices={devices}/>

    </PageWrapper>
  )
}

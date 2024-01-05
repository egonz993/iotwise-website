import React from 'react'
import { databaseSync } from '../../helpers/databeseSync'

export const DeviceBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Agregar Dispositivo")} >
        <i className='fa fa-plus-circle' /> <span className='d-none d-md-inline txt-action-btn'>Agregar Dispositivo</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Exportar Dispositivos")} >
        <i className='fa fa-download' /> <span className='d-none d-md-inline txt-action-btn'>Exportar</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => databaseSync()} >
        <i className='fa fa-refresh' /> <span className='d-none d-md-inline txt-action-btn'>Actualizar</span>
      </button>
    </div>
  )
}

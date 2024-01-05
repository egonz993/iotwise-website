import React from 'react'
import { databaseSync } from '../../helpers/databeseSync'

export const GatewaysBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Agregar Gateway")} >
        <i className='fa fa-plus-circle' /> <span className='d-none d-md-inline txt-action-btn'>Agregar Gateway</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Exportar Gateways")} >
        <i className='fa fa-download' /> <span className='d-none d-md-inline txt-action-btn'>Exportar</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => databaseSync()} >
        <i className='fa fa-refresh' /> <span className='d-none d-md-inline txt-action-btn'>Actualizar</span>
      </button>
    </div>
  )
}

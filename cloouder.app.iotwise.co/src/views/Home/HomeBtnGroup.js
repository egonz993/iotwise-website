import React from 'react'
import { databaseSync } from '../../helpers/databeseSync'

export const HomeBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Generar Reporte")} >
        <i className='fa fa-file-download' /> <span className='d-none d-md-inline txt-action-btn'>Generar Reporte</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => alert("Confiiguraciones")} >
        <i className='fa fa-cog' /> <span className='d-none d-md-inline txt-action-btn'>Configuración</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => databaseSync()} >
        <i className='fa fa-refresh' /> <span className='d-none d-md-inline txt-action-btn'>Actualizar</span>
      </button>
    </div>
  )
}

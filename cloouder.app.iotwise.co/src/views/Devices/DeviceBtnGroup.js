import React from 'react'

export const DeviceBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Agregar Dispositivo")} >
        <i className='fa fa-plus-circle' /> <span className='d-none d-md-inline txt-action-btn'>Agregar Dispositivo</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => alert("Confiiguraciones")} >
        <i className='fa fa-cog' /> <span className='d-none d-md-inline txt-action-btn'>Configuración</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Documentación")} >
        <i className='fa fa-info-circle' /> <span className='d-none d-md-inline txt-action-btn'>Documentación</span>
      </button>
    </div>
  )
}

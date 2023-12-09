import React from 'react'

export const DeviceBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Agregar Dispositivo")} >
        <i className='fa fa-plus-circle' /> <span className='d-none d-lg-inline'>Agregar Dispositivo</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Descargar Reporte")} >
        <i className='fa fa-file-download' /> <span className='d-none d-lg-inline'>Descargar Reporte</span>
      </button>
      
      <button className='btn btn-transparent' onClick={() => alert("Documentación")} >
        <i className='fa fa-info-circle' /> <span className='d-none d-lg-inline'>Documentación</span>
      </button>
    </div>
  )
}

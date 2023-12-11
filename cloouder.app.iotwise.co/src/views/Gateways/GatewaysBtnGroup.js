import React from 'react'

export const GatewaysBtnGroup = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-transparent' onClick={() => alert("Agregar Gateway")} >
        <i className='fa fa-plus-circle' /> <span className='d-none d-md-inline txt-action-btn'>Agregar Gateway</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Exportar Gateways")} >
        <i className='fa fa-download' /> <span className='d-none d-md-inline txt-action-btn'>Exportar Gateways</span>
      </button>

      <button className='btn btn-transparent' onClick={() => alert("Documentación")} >
        <i className='fa fa-info-circle' /> <span className='d-none d-md-inline txt-action-btn'>Documentación</span>
      </button>
    </div>
  )
}

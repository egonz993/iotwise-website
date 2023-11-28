import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';

export const DrawerOptions = ({portOptions, setValue, children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [contentIdx, setContentIdx] = useState(1);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const DrawerContentSerialConfig = () => {
    
    return(
      <div className='children'>
        <div className='title'>
          <h6 >Configuraciones del Puerto Serial</h6>
        </div>

        <div className='content'>

            <div className='btn-group my-2 col-12'>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.baudRate()}>
                <i className='fa fa-edit'/> Baud Rate
                <p className='text-info'>{portOptions.baudRate}</p>
              </button>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.dataBits()}>
                <i className='fa fa-edit'/> Data Bits
                <p className='text-info'>{portOptions.dataBits}</p>
              </button>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.parity()}>
                <i className='fa fa-edit'/> Parity
                <p className='text-info'>{portOptions.parity}</p>
              </button>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.stopBits()}>
                <i className='fa fa-edit'/> Stop Bits
                <p className='text-info'>{portOptions.stopBits}</p>
              </button>
            </div>

            <div className='btn-group my-2 col-12'>
              <button className={`pt-4 btn btn-dark ${portOptions.uppercase ? 'active' : ''}`} onClick={() => setValue.uppercase()}>
                <i className='fa fa-edit'/> Mayusculas
                <p className='text-info'>{`${portOptions.uppercase ? 'TRUE' : 'FALSE'}`}</p>
              </button>
              <button className={`pt-4 btn btn-dark ${portOptions.lowercase ? 'active' : ''}`} onClick={() => setValue.lowercase()}>
                <i className='fa fa-edit'/> Minusculas
                <p className='text-info'>{`${portOptions.lowercase ? 'TRUE' : 'FALSE'}`}</p>
              </button>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.prepend()}>
                <i className='fa fa-edit'/> Prefijo
                <p className='text-info'>{JSON.stringify(portOptions.prepend)}</p>
              </button>
              <button className='pt-4 btn btn-dark' onClick={() => setValue.append()}>
                <i className='fa fa-edit'/> Sufijo
                <p className='text-info'>{JSON.stringify(portOptions.append)}</p>
              </button>
            </div>

          </div>

      </div>
    )
  }

  const DrawerContentRecords = () => {
    return(
      <div className='children'>
        <div className='title'>
          <h6>Historial de la Terminal</h6>
        </div>

        <div className='content'>

        </div>
      </div>
    )
  }

  const DrawerContentFunctions = () => {
    return(
      <div className='children'>
        <div className='title'>
          <h6>Funciones Personalizadas</h6>
        </div>

        <div className='content'>

        </div>
      </div>
    )
  }

  const DrawerContent = ({children}) => {
    return(
      <div className='drawer-options'>
        <div className='drawer-options-header'>
          <h4>Opciones de Configuracion</h4>
        </div>

        <div className='d-flex'>
          <div className='drawer-options-menu'>
            <ul>

              <li>
                <button title='Configurar Puerto Serial' onClick={() => setContentIdx(1)} className={`${contentIdx === 1 ? 'active': ''}` }>
                  <i className='fa-brands fa-usb fa-lg' />
                </button>
              </li>

              <li>
                <button title='Historial' onClick={() => setContentIdx(2)} className={`${contentIdx === 2 ? 'active': ''}` }>
                  <i className='fa fa-history fa-lg' />
                </button>
              </li>

              <li>
                <button title='Funciones' onClick={() => setContentIdx(3)} className={`${contentIdx === 3 ? 'active': ''}` }>
                  <i className='fa fa-code fa-lg' />
                </button>
              </li>

              <li>
                <button title='Salir de la Terminal'>
                  <i className='fa fa-right-from-bracket fa-lg text-danger' />
                </button>
              </li>

            </ul>
          </div>
          
          <div className='drawer-options-content'>
            {children}
          </div>
        </div>

      </div>
    )
  }

  return (
    <React.Fragment>
      <div onClick={toggleDrawer(true)} className='p-0 m-0 d-inline'>
        {children}
      </div>
      <React.Fragment>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={toggleDrawer(false)}
          >
            <DrawerContent>
              {(contentIdx === 1) && <DrawerContentSerialConfig />}
              {(contentIdx === 2) && <DrawerContentRecords />}
              {(contentIdx === 3) && <DrawerContentFunctions />}
            </DrawerContent>
          </Drawer>
        </React.Fragment>
    </React.Fragment>
  );
}

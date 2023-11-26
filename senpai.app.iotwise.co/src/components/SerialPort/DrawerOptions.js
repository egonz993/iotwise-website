import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';


export const DrawerOptions = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [contentIdx, setContentIdx] = useState(1);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const DrawerContentSerialConfig = () => {

    const [baudRate, setBaudRate] = useState(115200)
    const [dataBits, setDataBits] = useState(8)
    const [parity, setParity] = useState('N')
    const [stopBits, setStopBits] = useState(1)
    
    const handleBaudRate = () => {
      const value = prompt("Escriba el valor")
      setBaudRate(value)
    }
    const handleDataBits = () => {
      const value = prompt("Escriba el valor")
      setDataBits(value)
    }
    const handleParity = () => {
      const value = prompt("Escriba el valor")
      setParity(value)
    }
    const handleStopBits = () => {
      const value = prompt("Escriba el valor")
      setStopBits(value)
    }

    return(
      <div className='children'>
        <div className='title'>
          <h6 >Configuraciones del Puerto Serial</h6>
        </div>

        <div className='content'>

          {/* { baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 } */}

          <div className='btn-group pt-2 w-100'>
            <button className='btn btn-dark' onClick={handleBaudRate}>
              Baud Rate
            </button>
            <button className='btn btn-dark' onClick={handleDataBits}>
              Data Bits
            </button>
            <button className='btn btn-dark' onClick={handleParity}>
              Parity
            </button>
            <button className='btn btn-dark' onClick={handleStopBits}>
              Stop Bits
            </button>
          </div>

          <div className='text-center p-5'>
            <p className='display-5'>{`${baudRate} ${dataBits}${parity}${stopBits}`}</p>
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

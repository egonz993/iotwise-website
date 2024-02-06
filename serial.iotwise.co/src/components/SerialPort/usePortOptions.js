import { useState } from 'react'

export const usePortOptions = () => {
  
  const [portOptions, setPortOptions ] = useState({
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    prepend: ``,
    append: `\r\n`,
    device_info: {
      vid: "",
      pid: "",
    }
  })

  const setValue = {}

  setValue.device_info = (vid, pid) => {
      setPortOptions({...portOptions, device_info: {vid, pid} })
  }

  setValue.baudRate = () => {
    const value = prompt("Escriba el valor de [Baud Rate]")
    if(value > 0){
      setPortOptions({...portOptions, baudRate: parseInt(value.replace(/\D/g, ''))})
    } else{
      alert('Valor no permitido')
    }
  }

  setValue.dataBits = () => {
    portOptions.dataBits === 8 ? 
      setPortOptions({...portOptions, dataBits: 9}) :
      setPortOptions({...portOptions, dataBits: 8})
  }

  setValue.parity = () => {
    if(portOptions.parity === 'none')
      setPortOptions({...portOptions, parity: 'even'})
    else if(portOptions.parity === 'even')
      setPortOptions({...portOptions, parity: 'odd'})
      else if(portOptions.parity === 'odd')
        setPortOptions({...portOptions, parity: 'none'})
  }

  setValue.stopBits = () => {
    portOptions.stopBits === 1 ? 
      setPortOptions({...portOptions, stopBits: 2}) :
      setPortOptions({...portOptions, stopBits: 1})
  }


  setValue.prepend = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, prepend: JSON.parse(`"${value}"`)})
    }
    else{
      setPortOptions({...portOptions, prepend: JSON.parse(`""`)})
    }
  }

  setValue.append = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, append: JSON.parse(`"${value}"`)})
    }
    else{
      setPortOptions({...portOptions, append: JSON.parse(`""`)})
    }
  }

  
  return { portOptions, setValue }
}

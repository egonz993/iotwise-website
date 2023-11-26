import { useState } from 'react'

export const usePortOptions = () => {
  
  const [portOptions, setPortOptions ] = useState({
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
  })

  const setValue = {}

  setValue.baudRate = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, baudRate: parseInt(value)})
    }
  }
  setValue.dataBits = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, dataBits: parseInt(value)})
    }
  }
  setValue.parity = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, parity: value.toUpperCase()})
    }
  }
  setValue.stopBits = () => {
    const value = prompt("Escriba el valor")
    if(value){
      setPortOptions({...portOptions, stopBits: parseInt(value)})
    }
  }
  
  return { portOptions, setValue }
}

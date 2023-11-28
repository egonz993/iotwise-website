import { useState } from 'react'

export const usePortOptions = () => {
  
  const [portOptions, setPortOptions ] = useState({
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    prepend: ``,
    append: `\r\n`,
    uppercase: false,
    lowercase: false,
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

  setValue.lowercase = () => {
    setPortOptions({...portOptions, lowercase: !portOptions.lowercase, uppercase: false})
  }

  setValue.uppercase = () => {
    setPortOptions({...portOptions, uppercase: !portOptions.uppercase, lowercase: false})
  }
  
  return { portOptions, setValue }
}

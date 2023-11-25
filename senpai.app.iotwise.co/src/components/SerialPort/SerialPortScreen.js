import React, { useState, useRef, useEffect } from 'react'
import { useSerialPortRecord } from './useSerialPortRecords'
import { useAuth } from '../../hooks/useAuth'
import { cmd_execute } from './command-pallete'
import './SerialPortScreen.css'

import { SerpaiPort } from './webSerialApi'

const serial = new SerpaiPort({ baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 })

export const SerialPortScreen = () => {


  const { user } = useAuth()
  
  const inputRef = useRef()
  const outputRef = useRef()
  
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const [isConnected, setIsConnected] = useState(false)

  const { records, resetRecordIdx, pushRecord, clearRecords } = useSerialPortRecord({ inputRef, setInput })

  // Add item to console
  const pushOutput = ({type, user, text}) => {
    setOutput([...output, { type, time: new Date().getTime(), user, text }])
  }

  // Add item to console
  const clearOutput = () => {
    setOutput([])
  }

  // Print sent message on console
  const handleInputSubmit = async (event) => {
    event.preventDefault()

    if (input.trim() !== '') {

      await serial.writePort(input)

      // Add new item to screen
      pushOutput({ type: "user-input", user: user.email, text: input })

      // Add new item to record
      pushRecord(input)

      // Clear input
      setInput('')
      resetRecordIdx()
    }
  }

  // Handler for Close Button
  const handleCloseWindow = (event) => {
    const result = window.confirm("¿Cerrar Aplicación?")
    if(result){
      window.close()
    }
  }

  // Handler for Connect Button
  const handleDeviceConnection = async (event) => {
    
    const onConnect = () => {
      pushOutput({ type: "message-info", user: 'serialport·IoTWise', text: `Device Connected | usbProductId: ${serial.port.getInfo().usbProductId}, usbVendorId: ${serial.port.getInfo().usbVendorId}` })
      console.log()
      setIsConnected(true)
      inputRef.current.focus()
  
      //This timeout is to wait for isConnected state change, either input is disabled and it can't be focused
      setTimeout(() => inputRef.current.focus(), 200)

      serial.readPort((value) => {
        console.log(value)
        pushOutput({ type: 'message-output', user: 'serialport·Device', text: value })
      })
    }
    
    const onDisconnect = () => {
      setOutput([{type: "message-error", time: new Date().getTime(), user: 'serialport·IoTWise', text: 'Ha ocurrido un error: el dispositivo se ha desconectado inesperadamente'}])
      setIsConnected(false)
    }

    if(isConnected){
      if(window.confirm("¿Desconectar Dispositivo?")) {
        await serial.deviceDisconnect()
        pushOutput({ type: "message-error", user: 'serialport·IoTWise', text: 'Device Disconnected' })
        setIsConnected(false)
      }
    }
    else{
      await serial.deviceConnect(onConnect, onDisconnect)
    }
  }

  // Handler for Open/Close Otion Panel
  const handleOptions = (event) => {
    if (event.type === 'click' || (event.key.toLowerCase() === 'o' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      alert('handleOptions')
    }
  }

  // Handler for Command Pallete
  const handleCommandPallete = (event) => {

    const options = {
      input, setInput, inputRef,
      output, setOutput, outputRef, pushOutput, clearOutput,
      records, pushRecord, resetRecordIdx, clearRecords,
      handleCloseWindow,
    }

    if (event.type === 'click' || (event.key.toLowerCase() === 'p' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      const cmd = prompt("Paleta de comandos")

      if(cmd) cmd_execute(cmd, options)
    }
  }

  // Set Page Title
  useEffect(() => {
    document.title = "IoT Senpai® | Serial Port"
  })

  // Scroll screen to bottom on new text append
  useEffect(() => { outputRef.current.scrollTop += outputRef.current.scrollHeight + 100 }, [output, outputRef])

  // Shortcuts
  useEffect(() => {
    document.addEventListener('keydown', handleCommandPallete)
    document.addEventListener('keydown', handleOptions)

    return () => {
      document.removeEventListener('keydown', handleCommandPallete)
      document.removeEventListener('keydown', handleOptions)
    }
  })

  return (
    <div className="serial-port" style={{ backgroundImage: "url('/images/logo2.svg')" }}>
      <div className='water-mark'>
        <div className="output _no-select" ref={outputRef} >
          {output.map((item, index) => (
            <div key={index} className={item.type}>
              <span className='output-time no-select'>{item.time} </span>
              <span className='output-user no-select'> {item.user} </span>
              <span className='output-user d-none d-sm-inline no-select'> $ ~ </span>
              <br className='d-block d-sm-none no-select' />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className='input-box no-select'>
          <form onSubmit={handleInputSubmit}>
            <div className='input-group'>
              
              <button className="btn-option px-2" type="button" id="button-addon" onClick={handleDeviceConnection} title={`${isConnected ? 'Dispositivo Conectado' : 'Conectar dispositivo'}`}>
                <i className={`fa-brands fa-usb ${isConnected ? 'text-primary' : 'text-danger blink'}`} />
              </button>
              
              <input
                type="text"
                value={input}
                ref={inputRef}
                className={`form-control ${isConnected ? '' : 'placeholder-light'}`}
                placeholder={`${isConnected ? '~ $ Enviar por serial' : '~ $ Conecte un dispositivo serial para empezar'}`}
                disabled={!isConnected}
                onChange={(event) => { setInput(event.target.value); resetRecordIdx() }}
              />

              <div className="input-group-append button-group">
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleOptions} title="Abrir opciones de configuración (Ctrl + O)">
                  <i className='fa fa-cog' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleCommandPallete} title="Abrir paleta de comandos (Ctrl + P)">
                  <i className='fa fa-code' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={() => setOutput([])} title="Limpiar consola">
                  <i className='fa fa-trash' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleCloseWindow} title="Cerrar">
                  <i className='fa fa-right-from-bracket text-danger' />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
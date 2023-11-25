import React, { useState, useRef, useEffect } from 'react'
import { useSerialPortRecord } from './useSerialPortRecords'
import { useAuth } from '../../hooks/useAuth'
import { cmd_execute } from './command-pallete'
import './SerialPortScreen.css'

// import { deviceConnect, deviceDisconnect/*, writePort, readPort */} from "./webSerialApi"
import { deviceConnect, deviceDisconnect/*, writePort, readPort */} from "./webBluetoothApi"

export const SerialPortScreen = () => {

  const { user } = useAuth()
  
  const inputRef = useRef()
  const outputRef = useRef()
  
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const [isConnected, setIsConnected] = useState(false)

  const { records, resetRecordIdx, pushRecord, clearRecords } = useSerialPortRecord({ inputRef, setInput })

  useEffect(() => {
    document.title = "IoT Senpai® | Serial Port"
  })

  // Add item to console
  const pushOutput = ({type, email, text}) => {
    setOutput([...output, { type, time: new Date().getTime(), email, text }])
  }

  // Add item to console
  const clearOutput = () => {
    setOutput([])
  }

  // Print sent message on console
  const handleInputSubmit = (event) => {
    event.preventDefault()

    if (input.trim() !== '') {

      // Add new item to screen
      pushOutput({ type: "user-input", email: user.email, text: input })

      // Add new item to record
      pushRecord(input)

      // Clear input
      setInput('')
      resetRecordIdx()
    }
  }

  const handleCloseWindow = (event) => {
    const result = window.confirm("¿Cerrar Aplicación?")
    if(result){
      deviceDisconnect()
      setIsConnected(false)
      window.close()
    }
  }

  const handleDeviceConnection = async (event) => {
    if(isConnected){
      const result = window.confirm("¿Desconectar Dispositivo?")
      if(result){
        deviceDisconnect()
        setIsConnected(false)
      }
    }
    else{
      const result = await deviceConnect({ baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 })
      setIsConnected(result)
      inputRef.current.focus()

      //This timeout is to wait for isConnected state change, either input is disabled and it can't be focused
      setTimeout(() => inputRef.current.focus(), 500)
      
    }
  }

  // Option Panel
  const handleOptions = (event) => {
    if (event.type === 'click' || (event.key.toLowerCase() === 'o' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      alert('handleOptions')
    }
  }

  // Command Pallete
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
              <span className='output-user no-select'> {item.email} </span>
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
                <i className={`fa fa-link ${isConnected ? 'text-success' : 'text-primary blink'}`} />
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
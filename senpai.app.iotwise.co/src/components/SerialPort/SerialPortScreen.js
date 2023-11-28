import React, { useState, useRef, useEffect } from 'react'
import { useSerialPortRecord } from './useSerialPortRecords'
import { cmd_execute } from './command-pallete'
import { SerpaiPort } from './webSerialApi'
import { DrawerOptions } from './DrawerOptions'
import { usePortOptions } from './usePortOptions'
import { Database } from '../../services/firebase/database.service'
import './SerialPortScreen.css'


const serial = new SerpaiPort()
const start_time = new Date().getTime()
let buffer = ""
let buffer_db = ""

export const SerialPortScreen = () => {

  const { portOptions, setValue } = usePortOptions()

  const inputRef = useRef()
  const outputRef = useRef()
  const btnOptionsRef = useRef()
  const btnConnectRef = useRef()

  const [txt, setTxt] = useState([])
  const [txData, setTxData] = useState('')

  const [isConnected, setIsConnected] = useState(false)

  const { resetRecordIdx, pushRecord } = useSerialPortRecord({ inputRef, setTxData })

  // Print data to screen
  const print = (input) => {
    buffer += input
    setTxt(buffer)

    buffer_db += input
    Database.set(`test/${start_time}/output`, JSON.stringify(buffer_db))
  }


  

  // Add item to console
  const clearOutput = () => {
    setTxt("")
  }

  // Print sent message on console
  const handleSendTx = async (event) => {
    if (event) event.preventDefault()

    if (event.type === 'submit') {

      if (txData.length > 0) {

        // Write in serial port
        await serial.writePort(`${portOptions.prepend}${txData}${portOptions.append}`)

        // Add new item to record
        pushRecord(txData)

        print(`\n[${JSON.stringify(`${portOptions.prepend}${txData}${portOptions.append}`)}]\n`)

        // Clear input
        setTxData('')
        resetRecordIdx()
      }
    }
  }

  const onInputChange = (event) => {
    
    resetRecordIdx() 

    let text = event.target.value
    if(portOptions.lowercase)   text = text.toLowerCase()
    if(portOptions.uppercase)   text = text.toUpperCase()

    setTxData(text);
  }

  // Handler for Close Button
  const handleCloseTerminal = (event) => {
    const result = window.confirm("¿Cerrar Aplicación?")
    if (result) {
      window.location.href = window.location.href.split("/").slice(0,3).join("/")
    }
  }

  // Handler for Connect Button
  const handleDeviceConnection = async (event) => {

    const onConnect = async () => {

      const device_info = {
        usbVendorId: serial.port.getInfo().usbVendorId,
        usbProductId: serial.port.getInfo().usbProductId
      }

      setValue.device_info(device_info.usbVendorId, device_info.usbProductId)

      await Database.set(`test/${start_time}`, {
        start_time,
        device_info,
        portOptions
      })

      setIsConnected(true)
      print(`****************************\n`)
      print(`IoT Wise | Web Serialport\n\n`)
      print(`DEVICE INFORMATION\n\n`)
      print(`- Product ID \t${device_info.usbProductId}\n`)
      print(`- Vendor ID \t${device_info.usbVendorId}\n`)
      print(`- Baud Rate \t${portOptions.baudRate}\n`)
      print(`- Data Bits \t${portOptions.dataBits}\n`)
      print(`- Stop Bits \t${portOptions.stopBits}\n`)
      print(`- Parity \t${portOptions.parity}\n`)
      print(`****************************\n`)
      inputRef.current.focus()

      //This timeout is to wait for isConnected state change, either input is disabled and it can't be focused
      setTimeout(() => inputRef.current.focus(), 200)


      serial.readPort((value) => {
        print(value)
      })
    }

    const onDisconnect = () => {
      setIsConnected(false)
    }

    if (isConnected) {
      if (window.confirm("¿Desconectar Dispositivo?")) {
        await serial.deviceDisconnect()
        setIsConnected(false)
      }
    }
    else {
      await serial.deviceConnect(portOptions, onConnect, onDisconnect)
    }
  }

  // Handler for Open/Close Otion Panel
  const openConfigPanel = (event) => {
    if (event.type === 'click' || (event.key.toLowerCase() === 'o' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      btnOptionsRef.current.click()
    }
  }

  // Handler for Command Pallete
  const openCommandPalette = (event) => {

    if (event.type === 'click' || (event.key.toLowerCase() === 'p' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      const cmd = prompt("Paleta de comandos")

      if (cmd) cmd_execute(cmd)
    }
  }

  // Page Title and Shortcuts
  useEffect(() => {
    document.title = "IoT Senpai® | Web Serialport"

    document.addEventListener('keydown', openCommandPalette)
    document.addEventListener('keydown', openConfigPanel)

    return () => {
      document.removeEventListener('keydown', openCommandPalette)
      document.removeEventListener('keydown', openConfigPanel)
    }
  })

  // Scroll screen to bottom on new text append
  useEffect(() => { 
    outputRef.current.scrollTop += outputRef.current.scrollHeight + 100
  }, [txt, outputRef])


  return (
    <div className="serial-port" style={{ backgroundImage: "url('/images/logo2.svg')" }}>
      <div className='water-mark'>
        <div className="output _no-select" >
          <textarea defaultValue={txt} disabled={true} ref={outputRef}  />
        </div>
        <div className='input-box no-select'>
          <form onSubmit={handleSendTx}>
            <div className='input-group'>

              <button className="btn-option px-2" type="button" id="button-addon" ref={btnConnectRef} onClick={handleDeviceConnection} title={`${isConnected ? 'Dispositivo Conectado' : 'Conectar dispositivo'}`}>
                <i className={`fa-brands fa-usb ${isConnected ? 'text-primary' : 'text-danger blink'}`} />
              </button>

              <input
                onClick={() => {
                  if(!isConnected){
                    btnConnectRef.current.click()
                  }
                }}
                type="text"
                value={txData}
                ref={inputRef}
                className={`form-control ${isConnected ? '' : 'placeholder-light'}`}
                placeholder={`${isConnected ? '~ $ Enviar por serial' : '~ $ Conecte un dispositivo serial para empezar'}`}
                // disabled={!isConnected}
                onChange={onInputChange}
              />

              <div className="input-group-append button-group">
                <DrawerOptions portOptions={portOptions} setValue={setValue} >
                  <button className="btn-option px-2" type="button" id="button-addon" ref={btnOptionsRef} title="Abrir opciones de configuración (Ctrl + O)">
                    <i className='fa fa-cog' />
                  </button>
                </DrawerOptions>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={clearOutput} title="Limpiar consola">
                  <i className='fa fa-trash' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleCloseTerminal} title="Cerrar">
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
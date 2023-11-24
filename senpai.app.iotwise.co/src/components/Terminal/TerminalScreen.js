import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTerminalRecord } from './useTerminalRecords'
import { useAuth } from '../../hooks/useAuth'
import { cmd_execute } from './command-pallete'
import './TerminalScreen.css'

export const TerminalScreen = () => {

  const { user } = useAuth()
  const navigate = useNavigate()
  
  const inputRef = useRef()
  const outputRef = useRef()
  
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])
  
  const { records, resetRecordIdx, pushRecord, clearRecords } = useTerminalRecord({ inputRef, setInput })

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

  // Command Pallete
  const handleCommandPallete = (event) => {

    const options = {
      input, setInput, inputRef,
      output, setOutput, outputRef, pushOutput, clearOutput,
      records, pushRecord, resetRecordIdx, clearRecords
    }

    if (event.type === 'click' || (event.key.toLowerCase() === 'p' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      const cmd = prompt("Paleta de comandos")

      if(cmd) cmd_execute(cmd, options)
    }
  }

  // Option Panel
  const handleOptions = (event) => {
    if (event.type === 'click' || (event.key.toLowerCase() === 'o' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      alert('handleOptions')
    }
  }

  // Focus input on init component
  useEffect(() => inputRef.current.focus(), [])

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
    <div className="terminal" style={{ backgroundImage: "url('/images/logo2.svg')" }}>
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
              <input
                type="text"
                value={input}
                ref={inputRef}
                className='form-control'
                placeholder='~ $ Enviar por serial'
                onChange={(event) => { setInput(event.target.value); resetRecordIdx() }}
              />
              <div className="input-group-append button-group">
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleOptions} title="Abrir opciones de configuración (Ctrl + O)">
                  <i className='fa fa-cog' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={handleCommandPallete} title="Abrir paleta de comandos (Ctrl + P)">
                  <i className='fa fa-code' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={(event) => setOutput([])} title="Limpiar consola">
                  <i className='fa fa-trash' />
                </button>
                <button className="btn-option px-2" type="button" id="button-addon" onClick={(event) => navigate('/')} title="Salir de la terminal">
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
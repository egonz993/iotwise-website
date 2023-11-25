// https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API

let device
let port = navigator.serial

port.onconnect = event => {
  console.log(event)
}

port.ondisconnect = event => {
  console.log(event)
  device.close()
}

const deviceConnect = ({ baudRate, dataBits, parity, stopBits }) => {
  return new Promise(async (resolve) => {
    try {
      const ports = await port.requestPort()
      console.log(ports)

      const device = (await port.getPorts())[0]
      console.log(device)

      const open = await device.open({ baudRate, dataBits, parity, stopBits })
      console.log(open)
      
      readPort()
      resolve(true)
    }
    catch (error) {
      console.log(error)
      resolve(false)
    }
  })
}

const deviceDisconnect = async () => {
  try {
    await device.readable.releaseLock()
    await device.close()
  } catch (error) {
    console.log(error)    
  }
}

const writePort = async (payload) => {
  const encoder = new TextEncoder()
  const writer = device.writable.getWriter()
  await writer.write(encoder.encode(payload))
  writer.releaseLock()
}

const readPort = async () => {
  const textDecoder = new TextDecoderStream()
  const reader = textDecoder.readable.getReader()
  // const readableStreamClosed = device.readable.pipeTo(textDecoder.writable)

  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) { console.log(value); break }
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    reader.releaseLock()
  }
}

export { deviceConnect, deviceDisconnect, writePort, readPort }
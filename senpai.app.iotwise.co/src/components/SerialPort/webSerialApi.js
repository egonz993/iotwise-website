// https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API


export class SerpaiPort {

  constructor({ baudRate, dataBits, parity, stopBits }) {
    this.baudRate = baudRate
    this.dataBits = dataBits
    this.parity = parity
    this.stopBits = stopBits

    this.port = null
  }

  getDevice() {
    console.log(this.port)
  }

  async deviceConnect(onConnect, onDisconnect) {
    try {
      this.port = await navigator.serial.requestPort()
      const ports = await navigator.serial.getPorts()

      // const { usbProductId, usbVendorId } = await this.port.getInfo()
      
      for (let p of ports) {
        try {
          await p.open({baudRate: this.baudRate, dataBits: this.dataBits, parity: this.parity, stopBits: this.stopBits})
          console.log("Connected")
          p.ondisconnect = (e) => {
            console.log("ondisconnect", e)
            onDisconnect()
          }
          onConnect()
          
          break;
  
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)      
    }
  }

  async deviceDisconnect() {
    await this.port.close()
  }

  async writePort(input) {
    const encoder = new TextEncoder()
    const writer = this.port.writable.getWriter()
    await writer.write(encoder.encode(input))
    writer.releaseLock()
  }

  async readPort() {
    const textDecoder = new TextDecoderStream()
    const reader = textDecoder.readable.getReader()
    this.port.readable.pipeTo(textDecoder.writable)

    try {
      while (true) {
        const { value, done } = await reader.read()
        if (done) { break }
        console.log(value)
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      reader.releaseLock()
    }
  }
}




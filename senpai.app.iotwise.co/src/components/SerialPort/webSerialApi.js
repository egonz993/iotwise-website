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
      // const { usbProductId, usbVendorId } = await this.port.getInfo()
      
      this.port.onconnect = (e) => {
        console.log("onconnect", e)
        onConnect()
      }
      this.port.ondisconnect = (e) => {
        console.log("ondisconnect", e)
        window.location.reload()
      }
      
      const ports = await navigator.serial.getPorts()

      for (let p of ports) {
        try {
          await p.open({baudRate: this.baudRate, dataBits: this.dataBits, parity: this.parity, stopBits: this.stopBits})
          console.log("Connected"
          )
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
    window.location.reload()
  }

  async writePort(input) {
    const encoder = new TextEncoder()
    const writer = this.port.writable.getWriter()
    await writer.write(encoder.encode(input))
    writer.releaseLock()
  }

  async readPort(callback) {
    const textDecoder = new TextDecoderStream()
    const reader = textDecoder.readable.getReader()
    this.port.readable.pipeTo(textDecoder.writable)

    try {
      while (true) {
        const { value, done } = await reader.read()
        if (done) { break }
        callback(value)
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




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
    this.port = await navigator.serial.requestPort()
    // const { usbProductId, usbVendorId } = await this.port.getInfo()
    
    const ports = await navigator.serial.getPorts()

    for (let p of ports) {
      try {
        await p.open({
          baudRate: this.baudRate,
          dataBits: this.dataBits,
          parity: this.parity,
          stopBits: this.stopBits
        })

        p.ondisconnect = (e) => {
          console.log("ondisconnect", e)
          onDisconnect()
        }

        this.readPort()
        onConnect()

      } catch (error) {
        console.log(error)
      }
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
    // const readableStreamClosed = this.port.readable.pipeTo(textDecoder.writable)

    try {
      while (true) {
        const { value, done } = await reader.read()
        console.log(value)
        if (done) { break }
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




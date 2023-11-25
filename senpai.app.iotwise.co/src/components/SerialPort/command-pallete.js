export const cmd_execute = (cmd, opt) => {
  switch (cmd) {

    case 'clear':
    case 'cls':
      opt.clearOutput()
      break;

    case 'clear -r':
      opt.clearRecords()
      opt.pushOutput({ type: 'message-info', user: 'serialport·IoTWise', text: 'cmd: clear -r > clear console records' })
      break;

    case 'exit':
      opt.clearRecords()
      opt.clearOutput()
      opt.handleCloseWindow()
      break;

    case 'set interval':
      opt.pushOutput({ type: 'message-info', user: 'serialport·IoTWise', text: 'cmd: set interval > Set Data Interval' })
      break;

    case 'clear interval':
      opt.pushOutput({ type: 'message-info', user: 'serialport·IoTWise', text: 'cmd: clear interval > Clear Data Interval' })
      break;
      
    default:
      opt.pushOutput({ type: 'message-error', user: 'serialport·IoTWise', text: `cmd: no se reconoce el comando <${cmd}>` })
      break;
  }

}
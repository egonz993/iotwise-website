export const cmd_execute = (cmd, opt) => {
  switch (cmd) {

    case 'clear':
      opt.clearOutput()
      break;

    case 'reset':
      opt.clearOutput()
      opt.clearRecords()
      opt.pushOutput({ type: 'message-info', email: 'serialport·IoTWise', text: 'cmd: reset > reset all cached data from terminal' })
      break;

    case 'clear -r':
      opt.clearRecords()
      opt.pushOutput({ type: 'message-info', email: 'serialport·IoTWise', text: 'cmd: clear -r > clear console records' })
      break;

    case 'exit':
      opt.clearRecords()
      opt.clearOutput()
      opt.handleCloseWindow()
      break;

    case 'set interval':
      opt.pushOutput({ type: 'message-info', email: 'serialport·IoTWise', text: 'cmd: set interval > Set Data Interval' })
      break;

    case 'clear interval':
      opt.pushOutput({ type: 'message-info', email: 'serialport·IoTWise', text: 'cmd: clear interval > Clear Data Interval' })
      break;
      
    default:
      opt.pushOutput({ type: 'message-error', email: 'serialport·IoTWise', text: `cmd: no se reconoce el comando <${cmd}>` })
      break;
  }

}
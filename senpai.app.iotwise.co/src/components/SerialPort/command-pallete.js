export const cmd_execute = (cmd, opt, cnt) => {
  switch (cmd) {

    case 'clear':
    case 'cls':
      opt.clearOutput()
      opt.fromCnt()
      break;

    case 'clear -r':
      opt.clearRecords()
      opt.pushOutput({ type: 'info', text: 'cmd: clear -r > clear console records' })
      break;

    case 'exit':
      opt.clearRecords()
      opt.clearOutput()
      opt.handleCloseWindow()
      break;

    case 'set interval':
      opt.pushOutput({ type: 'info', text: 'cmd: set interval > Set Data Interval' })
      break;

    case 'clear interval':
      opt.pushOutput({ type: 'info', text: 'cmd: clear interval > Clear Data Interval' })
      break;
      
    default:
      opt.pushOutput({ type: 'error', text: `cmd: no se reconoce el comando <${cmd}>` })
      break;
  }

}
export const cmd_execute = (cmd, opt) => {

  switch(cmd){
    case 'clear':
      opt.clearOutput()
      break;
    case 'reset':
      opt.clearOutput()
      opt.clearRecords()
      opt.pushOutput({type:'terminal-info', email: 'terminal·IoTWise', text: 'cmd: reset > reset all cached data from terminal'})
      break;
    case 'clear -r':
      opt.clearRecords()
      opt.pushOutput({type:'terminal-info', email: 'terminal·IoTWise', text: 'cmd: clear -r > clear console records'})
      break;
    case 'exit':
      opt.clearRecords()
      opt.clearOutput()
      window.history.back()
      break;
    default:
      opt.pushOutput({type:'terminal-error', email: 'terminal·IoTWise', text: `cmd: no se reconoce el comando <${cmd}>`})
      break;
  }

}
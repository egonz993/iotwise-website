export const cmd_execute = (cmd, opt) => {
  switch (cmd) {

    case 'help':
      const cmd_list = [
        {
          cmd: "help",
          description: "Limpiar Pantalla",
          spacing: '\t\t'
        },
        {
          cmd: "clear",
          description: "Limpiar Pantalla",
          spacing: '\t\t'
        },
        {
          cmd: "cls",
          description: "Limpiar Pantalla",
          spacing: '\t\t'
        },
        {
          cmd: "clr",
          description: "Limpiar Historial de Comandos",
          spacing: '\t\t'
        },
        {
          cmd: "connect",
          description: "Connectar Dispositivo",
          spacing: '\t'
        },
        {
          cmd: "disconnect",
          description: "Desconnectar Dispositivo",
          spacing: '\t'
        },
        {
          cmd: "config",
          description: "Abrir Opciones de Configuración",
          spacing: '\t'
        },
        {
          cmd: "exit",
          description: "Salir de la Terminal",
          spacing: '\t\t'
        },
      ]

      opt.print(`\n«${cmd}» | Documentación Paleta de Comandos`)
      opt.print(`\n***************************************************************`)
      cmd_list.forEach((item) => {
        opt.print(`\n«${item.cmd}» ${item.spacing} ${item.description}`)
      })
      opt.print(`\n***************************************************************`)
      break;

    case 'clear':
    case 'cls':
      opt.clearOutput()
      opt.print(`\n[control] «${cmd}» | Limpiar Pantalla\n`)
      break;

    case 'clr':
      opt.clearRecords()
      opt.print(`\n[control] «${cmd}» | Limpiar Historial de Comandos\n`)
      break;

    case 'connect':
    case 'disconnect':
      opt.print(`\n[control] «${cmd}» | Connectar/Desconnectar Dispositivo\n`)
      opt.btnConnectRef.current.click()
      break;

    case 'config':
        opt.print(`\n[control] «${cmd}» | Abrir Opciones de Configuración\n`)
        opt.btnOptionsRef.current.click()
        break;

    case 'exit':
      opt.print(`\n[control] «${cmd}» | Salir de la Terminal\n`)
      opt.handleCloseTerminal()
      break;
      
    default:
      opt.print(`\n[control] «${cmd}» | No se reconoce el comando\n`)
      break;
  }

}
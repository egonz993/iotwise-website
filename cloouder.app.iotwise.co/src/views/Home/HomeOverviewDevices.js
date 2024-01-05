import React from 'react'

export const HomeOverviewDevices = ({devices}) => {

  const CardWidget = ({ title, icon, value, units, description }) => {

    const [counter, setCounter] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = Math.ceil(prevCounter + value / 50)
          return newCounter >= value ? value : newCounter
        })
      }, 10)

      return () => clearInterval(timer)
    }, [value])

    return (
      <div className={`p-2 col-12`}>
        <div className='card bg-transparent border-0'>
          <div className='card-info py-2 px-4'>
            <div className='d-flex justify-content-between'>
              <img src={icon} width={45} alt='' />
              <h5 className="card-title pt-3">{title}</h5>
            </div>

            <i className='fa fa-info-circle link-secondary'
              title={description}
              style={{ cursor: 'help', position: 'absolute', bottom: '10%' }}
              onClick={() => alert(description)}
            />

            <div className='d-flex flex-row-reverse'>
              <p className="card-text display-6">{counter} {units}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">

      <div className='w-100 text-center'>
        <h4>Dispositivos</h4>
      </div>
      
      <CardWidget
        title="Registrados"
        icon="/images/device-wireless.svg"
        value={devices.length}
        units=""
        description="Total de dispositivos registrados en la plataforma"
      />

      <CardWidget
        title="Conectados"
        icon="/images/wifi.svg"
        value={devices
          .filter(device => device.LastUplinkReceivedAt)
          .map(device => new Date().getTime() - new Date(device.LastUplinkReceivedAt).getTime())
          .filter(last_tx => last_tx <= 24*60*60*1000)
          .length
        }
        units=""
        description="Dispositivos que han enviado datos en las últimas 24 horas"
      />

      <CardWidget
        title="Desconectados"
        icon="/images/wifi-slash.svg"
        value={devices
          .filter(device => device.LastUplinkReceivedAt)
          .map(device => new Date().getTime() - new Date(device.LastUplinkReceivedAt).getTime())
          .filter(last_tx => last_tx > 24*60*60*1000)
          .length
        }
        units=""
        description="Dispositivos con más de 24 horas sin enviar datos"
      />

      <CardWidget
        title="Desconocidos"
        icon="/images/unknow.svg"
        value={devices.filter(device => !device.LastUplinkReceivedAt).length}
        units=""
        description="Dispositivos que nunca han enviado datos"
      />

    </div>
  )
}

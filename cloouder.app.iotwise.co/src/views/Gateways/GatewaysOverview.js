import React from 'react'

export const GatewaysOverview = ({gateways}) => {

  const CardWidget = ({ title, icon, value, units, description }) => {

    const [counter, setCounter] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = Math.ceil(prevCounter + value / 50)
          return newCounter >= value ? value : newCounter
        })
      }, 50)

      return () => clearInterval(timer)
    }, [value])

    return (
      <div className={`p-2 col-12 col-sm-6`}>
        <div className='card bg-transparent border-0'>
          <div className='card-info p-4'>
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
        <h4>Información General</h4>
      </div>

      <CardWidget
        title="Registrados"
        icon="/images/gateway-wireless.svg"
        value={gateways.length}
        units=""
        description="Total de gateways registrados en la plataforma"
      />

      <CardWidget
        title="Conectados"
        icon="/images/wifi.svg"
        value={gateways.filter(gtw => gtw.ConnectionStatus === "Connected").length}
        units=""
        description="Gateways conectados"
      />

      <CardWidget
        title="Desconectados"
        icon="/images/wifi-slash.svg"
        value={gateways.filter(gtw => gtw.ConnectionStatus === "Disconnected").length}
        units=""
        description="Gateways desconectados"
      />

      <CardWidget
        title="Desconocidos"
        icon="/images/unknow.svg"
        value={gateways.filter(gtw => !gtw.LastUplinkReceivedAt).length}
        units=""
        description="Gateways que nunca han enviado datos"
      />

    </div>
  )
}

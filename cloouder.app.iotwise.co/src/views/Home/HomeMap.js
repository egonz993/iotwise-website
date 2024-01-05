// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react'
import { GatewayEditDrawer } from '../Gateways/GatewayEditDrawer'

const defaultProps = {
  center: {
    lat: 6.25921,
    lng: -75.57537,
  },
  zoom: 11
}

export const HomeMap = ({gateways}) => {

  const [ready, setReady] = React.useState(false)
  const [drawerGtwId, setDrawerGtwId] = React.useState(0)
  const drawerBtnRef = React.useRef()

  const renderMarkers = (map, maps) => {

    const check_icon = {
      url: '/images/check-icon.png',
      scaledSize: new maps.Size(30, 30),
      origin: new maps.Point(0, 0),
      anchor: new maps.Point(15, 15),
    }

    const cross_icon = {
      url: '/images/cross-icon.png',
      scaledSize: new maps.Size(30, 30),
      origin: new maps.Point(0, 0),
      anchor: new maps.Point(15, 15),
    }

    const question_icon = {
      url: '/images/question-icon.png',
      scaledSize: new maps.Size(30, 30),
      origin: new maps.Point(0, 0),
      anchor: new maps.Point(15, 15),
    }

    gateways.forEach((gateway, idx) => {

      const marker = new maps.Marker({
        position: {
          lat: gateway.latitude,
          lng: gateway.longitude
        },
        icon: gateway.ConnectionStatus === "Connected" ? check_icon : gateway.ConnectionStatus === "Disconnected" ? cross_icon : question_icon,
        title: gateway.Name,
        map
      })

      marker.addListener('click', () => {
        setDrawerGtwId(idx)
        drawerBtnRef.current.click()
      })
    })
  }

  React.useEffect(() => {
    setReady(gateways.length > 0)
  }, [gateways])


  return (
    ready && <>
      <div className='w-100 text-center'>
        <h4>Mapa del Proyecto</h4>
      </div>

      <div style={{ height: '495px', backgroundColor: 'transparent', overflow: 'hidden', marginTop: '1em', border: 'solid 5px black', borderRadius: '15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true} 
        />
        <GatewayEditDrawer item={gateways[drawerGtwId]}>
          <button ref={drawerBtnRef} className='d-none' />
        </GatewayEditDrawer>
      </div>
    </>
  )
}

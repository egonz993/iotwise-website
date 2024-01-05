// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useScreenSize } from '../../hooks/useScreensize';
import { GatewayEditDrawer } from './GatewayEditDrawer';

const defaultProps = {
  center: {
    lat: 6.25921,
    lng: -75.57537
  },
  zoom: 10.5
}


export const GatewaysMap = ({gateways}) => {

  const screen = useScreenSize()
  const [mapHeight, setMapHeight] = React.useState(0)

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

      console.log(gateway.ConnectionStatus, gateway.latitude)

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
    switch (screen) {
      case 'xs':
        setMapHeight(320)
        break;
      case 'sm':
        setMapHeight(400)
        break;
      case 'md':
        setMapHeight(400)
        break;
      case 'lg':
        setMapHeight(320)
        break;
      case 'xl':
        setMapHeight(320)
        break;
      default:
        setMapHeight(320)
        break;
    }
  }, [screen])

  React.useEffect(() => {
    setReady(gateways.length > 0)
  }, [gateways])


  return (
    ready && <>
      <div className='w-100 text-center'>
        <h4>Ubicación</h4>
      </div>

      <div className='my-2' style={{ height: mapHeight, backgroundColor: 'transparent', overflow: 'hidden', border: 'solid 5px black', borderRadius: '15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true} 
        />
      </div>
      <GatewayEditDrawer item={gateways[drawerGtwId]}>
        <button ref={drawerBtnRef} className='d-none' />
      </GatewayEditDrawer>
    </>
  )
}

// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useScreenSize } from '../../hooks/useScreensize';

const defaultProps = {
  center: {
    lat: 6.25921,
    lng: -75.57537
  },
  zoom: 10.5
}

export const GatewaysMap = () => {

  const screen = useScreenSize()
  const [mapHeight, setMapHeight] = React.useState(0)

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

    let coords = [
      [6.34624, -75.50692, 'Gateway 1'],
      [6.34453, -75.56629, 'Gateway 2'],
      [6.15503, -75.63910, 'Gateway 3'],
      [6.31116, -75.57599, 'Gateway 4'],
      [6.28598, -75.54628, 'Gateway 5'],
      [6.28487, -75.59408, 'Gateway 6'],
      [6.26609, -75.61464, 'Gateway 7'],
      [6.23847, -75.54850, 'Gateway 8'],
      [6.25670, -75.57240, 'Gateway 9'],
      [6.19924, -75.56462, 'Gateway 10'],
      [6.17152, -75.57511, 'Gateway 11'],
      [6.15890, -75.60591, 'Gateway 12'],
      [6.18469, -75.60371, 'Gateway 13'],
      [6.22464, -75.59860, 'Gateway 14'],
    ]

    coords.forEach((coord, idx) => {

      const marker = new maps.Marker({
        position: {
          lat: coord[0],
          lng: coord[1]
        },
        icon: idx === 6 ? cross_icon : check_icon,
        title: coord[2],
        map
      })

      marker.addListener('click', () => alert(coord[2]))
    })
  }


  return (
    <>
      <div className='w-100 text-center'>
        <h4>Ubicación</h4>
      </div>

      <div className='my-2' style={{ height: mapHeight, backgroundColor: 'transparent', overflow: 'hidden', border: 'solid 5px black', borderRadius: '15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        />
      </div>
    </>
  )
}

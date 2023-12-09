// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useScreenSize } from '../../hooks/useScreensize';

const defaultProps = {
  center: {
    lat: 6.25921,
    lng: -75.57537
  },
  zoom: 10
}

export const GatewaysMap = () => {

  const screen = useScreenSize()
  const [mapHeight, setMapHeight] = React.useState(0)

  React.useEffect(() => {
    switch (screen) {
      case 'xs':
        setMapHeight(300)
        break;
      case 'sm':
        setMapHeight(400)
        break;
      case 'md':
        setMapHeight(400)
        break;
      case 'lg':
        setMapHeight(300)
        break;
      case 'xl':
        setMapHeight(300)
        break;
      default:
        setMapHeight(300)
        break;
    }
  }, [screen])

  const renderMarkers = (map, maps) => {
    let coords = [
      [6.34624, -75.50692],
      [6.34453, -75.56629],
      [6.15503, -75.63910],
      [6.31116, -75.57599],
      [6.28598, -75.54628],
      [6.28487, -75.59408],
      [6.26609, -75.61464],
      [6.23847, -75.54850],
      [6.25670, -75.57240],
      [6.19924, -75.56462],
      [6.17152, -75.57511],
      [6.15890, -75.60591],
      [6.18469, -75.60371],
      [6.22464, -75.59860],
    ]

    coords.forEach((coord) => {
      new maps.Marker({
        position: {
          lat: coord[0],
          lng: coord[1]
        },
        map
      })
    })
  }


  return (
    <div className='my-2' style={{ height: mapHeight, backgroundColor: 'transparent', overflow: 'hidden' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}

        />
    </div>
  )
}

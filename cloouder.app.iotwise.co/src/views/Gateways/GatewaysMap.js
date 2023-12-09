// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useScreenSize } from '../../hooks/useScreensize';

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

  const defaultProps = {
    center: {
      lat: 6.25921,
      lng: -75.57537
    },
    zoom: 11
  }

  const Marker = ({ text }) => <div>{text}</div>;


  return (
    <div className='my-2' style={{ height: mapHeight, backgroundColor: 'transparent', overflow: 'hidden' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

// Documentation: https://www.npmjs.com/package/google-map-react

import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 6.25921,
    lng: -75.57537,
  },
  zoom: 11
}

export const HomeMap = () => {

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
        <h4>Mapa del Proyecto</h4>
      </div>

      <div style={{ height: '495px', backgroundColor: 'transparent', overflow: 'hidden', marginTop: '1em', border: 'solid 5px black', borderRadius: '15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTahGbblN15gRsvU5hJOMsj5UfEQO9B4E" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        />
      </div>
    </>
  )
}

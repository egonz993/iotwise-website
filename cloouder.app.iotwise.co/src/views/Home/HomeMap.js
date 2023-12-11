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

const gateways = [
  { id: 1, name: 'Gateway 1', eui: '0102030405060701', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa01', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.34624, longitude: -75.50692 },
  { id: 2, name: 'Gateway 2', eui: '0102030405060702', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa02', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.34453, longitude: -75.56629 },
  { id: 3, name: 'Gateway 3', eui: '0102030405060703', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa03', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.15503, longitude: -75.63910 },
  { id: 4, name: 'Gateway 4', eui: '0102030405060704', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa04', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.31116, longitude: -75.57599 },
  { id: 5, name: 'Gateway 5', eui: '0102030405060705', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa05', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.28598, longitude: -75.54628 },
  { id: 6, name: 'Gateway 6', eui: '0102030405060706', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa06', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.28487, longitude: -75.59408 },
  { id: 7, name: 'Gateway 7', eui: '0102030405060707', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa07', last_seen: new Date().toLocaleString(), status: 'Desconectado', latitude: 6.26609, longitude: -75.61464 },
  { id: 8, name: 'Gateway 8', eui: '0102030405060708', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa08', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.23847, longitude: -75.54850 },
  { id: 9, name: 'Gateway 9', eui: '0102030405060709', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa09', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.25670, longitude: -75.57240 },
  { id: 10, name: 'Gateway 10', eui: '0102030405060710', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa10', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.19924, longitude: -75.56462 },
  { id: 11, name: 'Gateway 11', eui: '0102030405060711', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa11', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.17152, longitude: -75.57511 },
  { id: 12, name: 'Gateway 12', eui: '0102030405060712', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa12', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.15890, longitude: -75.60591 },
  { id: 13, name: 'Gateway 13', eui: '0102030405060713', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa13', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.18469, longitude: -75.60371 },
  { id: 14, name: 'Gateway 14', eui: '0102030405060714', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa14', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.22464, longitude: -75.59860 },
]

export const HomeMap = () => {

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

    gateways.forEach((gateway, idx) => {

      const marker = new maps.Marker({
        position: {
          lat: gateway.latitude,
          lng: gateway.longitude
        },
        icon: idx === 6 ? cross_icon : check_icon,
        title: gateway.name,
        map
      })

      marker.addListener('click', () => {
        setDrawerGtwId(idx)
        drawerBtnRef.current.click()
      })
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
        <GatewayEditDrawer item={gateways[drawerGtwId]}>
          <button ref={drawerBtnRef} className='d-none' />
        </GatewayEditDrawer>
      </div>
    </>
  )
}

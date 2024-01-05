import { APIGatewayService } from "../services/aws-apigateway.service"
import { Database } from "../services/firebase/database.service"

export const databaseSync = async () => {

  const getData = async (command, object) => {
    const data = []

    const getDataRecursively = async (NextToken = null) => {

      const result = await APIGatewayService.lorawan(command, { NextToken })
      result[object].forEach(device => data.push(device))

      if (result.NextToken) {
        console.log(`Descargando: ${object}`, data.length)
        await getDataRecursively(result.NextToken)
      } else {
        console.log(`${object}:`, data.length)
      }
    }

    await getDataRecursively()
    return data
  }

  const devices = await getData('ListWirelessDevices', 'WirelessDeviceList')
  
  const _gateways = await getData('ListWirelessGateways', 'WirelessGatewayList')
  let gateways = []
  for(let gateway of _gateways){
    
    const statistics = await APIGatewayService.lorawan('GetWirelessGatewayStatistics', {WirelessGatewayId: gateway.Id})
    if(statistics.ConnectionStatus){
      gateway = { ...gateway, ConnectionStatus: statistics.ConnectionStatus }
    }

    const position = await APIGatewayService.lorawan('GetResourcePosition', {ResourceType: 'WirelessGateway', ResourceIdentifier: gateway.Id })
    const arr = new Uint8Array(Object.values(position.GeoJsonPayload))
    const blob = new Blob([arr])
    const location = JSON.parse(await blob.text(blob))

    if(location.coordinates){
      gateway = { ...gateway, latitude: location.coordinates[1], longitude: location.coordinates[0], altitude: location.coordinates[2] }
    }

    
    gateways.push(gateway)
  }

  const destinations = await getData('ListDestinations', 'DestinationList')
  const deviceProfiles = await getData('ListDeviceProfiles', 'DeviceProfileList')
  const serviceProfiles = await getData('ListServiceProfiles', 'ServiceProfileList')

  const data = {
    devices,
    gateways,
    destinations,
    deviceProfiles,
    serviceProfiles,
  }

  const result = await Database.set('cloouder', data)
  if(result)
    console.log("Base de datos actualiada")
}
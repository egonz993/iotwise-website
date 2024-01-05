import { IoTWirelessList } from './iot-wireless/list.js'
import { IoTWirelessGet } from './iot-wireless/get.js'

const event = {
  device: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:WirelessDevice/64000522-4963-4e84-b21b-1ca4c2f80efc',
    DestinationName: 'LoRaWAN_Sandbox',
    Id: '64000522-4963-4e84-b21b-1ca4c2f80efc',
    LoRaWAN: {
      DevEui: 'ac1f09fffe056840',
      DeviceProfileId: '3e7e1a5f-4cf9-42a2-8573-1af477e6be74',
      FPorts: { Applications: [Array], Positioning: [Object] },
      OtaaV1_0_x: {
        AppEui: 'ac1f09fff9153172',
        AppKey: '01020304050607080910111213141516'
      },
      ServiceProfileId: '748a0f12-1cc7-47bc-97ca-1994d4fbccc9'
    },
    Name: '2243',
    Positioning: 'Disabled',
    Type: 'LoRaWAN'
  },
  gateway: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:WirelessGateway/31e87229-b985-4e58-bde7-1b77c3aedfde',
    Id: '31e87229-b985-4e58-bde7-1b77c3aedfde',
    LoRaWAN: {
      Beaconing: {},
      GatewayEui: '7076ff0054070670',
      RfRegion: 'AU915',
      SubBands: [ 1, 2 ]
    },
    Name: 'ZONA NORTE',
    ThingArn: 'arn:aws:iot:us-east-1:411089006294:thing/cd781fe6-4913-4c1f-bdf4-eb6de9d15284',
  },
  destination: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:Destination/LoRaWAN_Sandbox',
    Description: 'Sandbox Telemetik for LoRaWAN',
    Expression: 'lorawan/sandbox',
    ExpressionType: 'MqttTopic',
    Name: 'LoRaWAN_Sandbox',
    RoleArn: 'arn:aws:iam::411089006294:role/AWS_LoRaWAN_DestinationRole'
  },
  deviceProfile: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:DeviceProfile/3e7e1a5f-4cf9-42a2-8573-1af477e6be74',
    Id: '3e7e1a5f-4cf9-42a2-8573-1af477e6be74',
    Name: 'AU915-C-OTAA'
  },
  serviceProfile: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:ServiceProfile/748a0f12-1cc7-47bc-97ca-1994d4fbccc9',
    Id: '748a0f12-1cc7-47bc-97ca-1994d4fbccc9',
    Name: 'RAK3172 Service Profile'
  },
  multicast:     {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:MulticastGroup/3ec31e6a-eaea-478e-a6d7-96aa3071004c',
    Id: '3ec31e6a-eaea-478e-a6d7-96aa3071004c',
    Name: 'MC_Group'
  },
  network_analyzer: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:NetworkAnalyzerConfiguration/test',
    Name: 'test'
  }
}

export async function handler(event) {
  let result = null;

  // result = await IoTWirelessGet.GetDestination({ Name: event['destination'].Name })
  

  // result = await IoTWirelessGet.GetDeviceProfile({ Id: event['deviceProfile'].Id })


  // result = await IoTWirelessGet.GetServiceProfile({ Id: event['serviceProfile'].Id })
  

  // result = await IoTWirelessGet.GetWirelessDevice({ IdentifierType: 'WirelessDeviceId', Identifier: event['device'].Id })
  // result = await IoTWirelessGet.GetWirelessDeviceStatistics({ WirelessDeviceId: event['device'].Id })
  

  // result = await IoTWirelessGet.GetWirelessGateway({ IdentifierType: 'WirelessGatewayId' , Identifier: event['gateway'].Id })
  // result = await IoTWirelessGet.GetWirelessGatewayStatistics({ WirelessGatewayId: event['gateway'].Id })
  // result = await IoTWirelessGet.GetWirelessGatewayFirmwareInformation({ Id: event['gateway'].Id })
  // result = await IoTWirelessGet.GetWirelessGatewayCertificate({ Id: event['gateway'].Id })
  

  // result = await IoTWirelessGet.GetServiceEndpoint({ ServiceType: 'CUPS' })
  // result = await IoTWirelessGet.GetServiceEndpoint({ ServiceType: 'LNS' })


  // result = await IoTWirelessGet.GetMulticastGroup({ Id: event['multicast'].Id })
  // result = await IoTWirelessGet.GetMulticastGroupSession({ Id: event['multicast'].Id })


  // result = await IoTWirelessGet.GetNetworkAnalyzerConfiguration({ ConfigurationName: event['network_analyzer'].Name })


  // result = await IoTWirelessGet.GetLogLevelsByResourceTypes({ })
  // result = await IoTWirelessGet.GetResourceLogLevel({ ResourceType: 'WirelessDevice', ResourceIdentifier: event['device'].Id })
  // result = await IoTWirelessGet.GetResourceLogLevel({ ResourceType: 'WirelessGateway', ResourceIdentifier: event['gateway'].Id })
  

  // result = await IoTWirelessGet.GetEventConfigurationByResourceTypes({ })
  // result = await IoTWirelessGet.GetResourceEventConfiguration({ PartnerType: null, IdentifierType: 'WirelessDeviceId' , Identifier: event['device'].Id })
  // result = await IoTWirelessGet.GetResourceEventConfiguration({ PartnerType: null, IdentifierType: 'WirelessGatewayId' , Identifier: event['gateway'].Id })


  // result = await IoTWirelessGet.GetResourcePosition({ ResourceType: 'WirelessDevice', ResourceIdentifier: event['device'].Id })
  // result = await IoTWirelessGet.GetResourcePosition({ ResourceType: 'WirelessGateway', ResourceIdentifier: event['gateway'].Id })

  
  // result = await IoTWirelessGet.GetWirelessGatewayTask({ Id: event['gateway'].Id })
  // result = await IoTWirelessGet.GetWirelessGatewayTaskDefinition({ Id: event['gateway'].Id })


  // result = await IoTWirelessCreate.CreateDestination({ 
  //   Name: 'FromNodeJs',
  //   ExpressionType: 'MqttTopic',
  //   Expression: 'test/nodejs',
  //   RoleArn: event['destination'].RoleArn,  // TODO: Automatizar la selección/creación del Rol
  //   Description: 'Test from NodeJs',
  // })

  // result = await IoTWirelessCreate.CreateDeviceProfile({
  //   Name: "TEST_PROFILE",
  //   LoRaWAN: {
  //     SupportsClassB: false,
  //     SupportsClassC: true,
  //     SupportsJoin: true,
  //     Supports32BitFCnt: true,
  //     RfRegion: "AU915",
  //     MacVersion: "1.0.2",
  //     RegParamsRevision: "RP002-1.0.1"
  //   }
  // })

  // result = await IoTWirelessCreate.CreateServiceProfile({
  //   Name: "TEST_PROFILE",
  //   LoRaWAN: {
  //     AddGwMetadata: true,
  //   }
  // })

  // result = await IoTWirelessCreate.CreateWirelessDevice({ 
  //   Type: 'LoRaWAN',
  //   Name: 'TEST_DEVICE_NODEJS',
  //   DestinationName: 'ProcessLoRa',
  //   Description: 'Prueba desde NodeJS',
  //   LoRaWAN: {
  //     DevEui: "ffff01020304ffff",
  //     DeviceProfileId: event['deviceProfile'].Id,
  //     ServiceProfileId: event['serviceProfile'].Id,
  //     OtaaV1_0_x: {
  //       AppKey: "01020304050607080102030405060708",
  //       GenAppKey: "01020304050607080102030405060708",
  //       AppEui: "0102030405060708",
  //       JoinEui: "0102030405060708",
  //     },
  //     // OtaaV1_1: {
  //     //   AppKey: "STRING_VALUE",
  //     //   NwkKey: "STRING_VALUE",
  //     //   JoinEui: "STRING_VALUE",
  //     // },
  //     // AbpV1_0_x: {
  //     //   DevAddr: "STRING_VALUE",
  //     //   SessionKeys: {
  //     //     NwkSKey: "STRING_VALUE",
  //     //     AppSKey: "STRING_VALUE",
  //     //   },
  //     //   FCntStart: Number("int"),
  //     // },
  //     // AbpV1_1: {
  //     //   DevAddr: "STRING_VALUE",
  //     //   SessionKeys: {
  //     //     FNwkSIntKey: "STRING_VALUE",
  //     //     SNwkSIntKey: "STRING_VALUE",
  //     //     NwkSEncKey: "STRING_VALUE",
  //     //     AppSKey: "STRING_VALUE",
  //     //   },
  //     //   FCntStart: Number("int"),
  //     // }
  //   }
  // })


  // result = await IoTWirelessCreate.CreateWirelessGateway({
  //   Name: 'PRUEBA NODEJS',
  //   Description: 'Prueba desde NodeJS',
  //   LoRaWAN: {
  //     GatewayEui: "000001020304ffff",
  //     RfRegion: "AU915",
  //     SubBands: [1, 2, 3, 4, 5, 6, 7, 8],
  //   }
  // })

  
  // result = await IoTWirelessCreate.CreateMulticastGroup({
  //   Name: "TEST_MULTICAST",
  //   Description: "Grupo de Prueba",
  //   LoRaWAN: {
  //     RfRegion: "AU915",
  //     DlClass: "ClassC",
  //   }
  // })


  // result = await IoTWirelessCreate.CreateNetworkAnalyzerConfiguration({ 
  //   Name: 'PRUEBA',
  //   Description: 'Prueba desde NodeJS',
  //   WirelessDevices: [event['device'].Id],
  //   WirelessGateways: [event['gateway'].Id],
  //   MulticastGroups: [event['multicast'].Id],
  //   TraceContent: {
  //     WirelessDeviceFrameInfo: "ENABLED",
  //     LogLevel: "INFO",
  //     MulticastFrameInfo: "DISABLED",
  //   }
  // })





  // result = await IoTWirelessUpdate.UpdateDestination({ 
  //   Name: 'FromNodeJs',
  //   ExpressionType: 'MqttTopic',
  //   Expression: 'test/nodejs',
  //   RoleArn: event['destination'].RoleArn,  // TODO: Automatizar la selección/creación del Rol
  //   Description: 'Test from NodeJs',
  // })

  // result = await IoTWirelessUpdate.UpdateMulticastGroup({
  //   Id: event['multicast'].Id,
  //   Name: "TEST_MULTICAST2",
  //   Description: "Grupo de Prueba",
  //   LoRaWAN: {
  //     RfRegion: "AU915",
  //     DlClass: "ClassC",
  //   }
  // })

  // result = IoTWirelessUpdate.UpdateNetworkAnalyzerConfiguration({
  //   ConfigurationName: 'PRUEBA',
  //   Description: 'Prueba desde NodeJS',
  //   WirelessDevicesToAdd: [event['device'].Id],
  //   WirelessGatewaysToAdd: [event['gateway'].Id],
  //   MulticastGroupsToAdd: [event['multicast'].Id],
  //   // WirelessDevicesToRemove: [event['device'].Id],
  //   // WirelessGatewaysToRemove: [event['gateway'].Id],
  //   // MulticastGroupsToRemove: [event['multicast'].Id],
  //   TraceContent: {
  //     WirelessDeviceFrameInfo: "ENABLED",
  //     LogLevel: "INFO",
  //     MulticastFrameInfo: "DISABLED",
  //   }
  // })

  // result = await IoTWirelessUpdate.UpdateWirelessGateway({
  //   Id: '0cff8715-abca-467b-a496-381758f84e28',
  //   Name: 'PRUEBA NODEJS 2',
  //   Description: 'Prueba desde NodeJS',
  // })


  // result = await IoTWirelessUpdate.UpdateWirelessDevice({
  //   Id: '8e557781-e691-4ee0-9724-5832a728f421',
  //   Name: 'TEST_DEVICE_NODEJS',
  //   DestinationName: 'ProcessLoRa',
  //   Description: 'Prueba desde NodeJS',
  //   LoRaWAN: {
  //     DeviceProfileId: event['deviceProfile'].Id,
  //     ServiceProfileId: event['serviceProfile'].Id,
  //   }
  // })
  



    // result = await IoTWirelessDelete.DeleteDestination({ Name: 'FromNodeJs' })
    // result = await IoTWirelessDelete.DeleteDeviceProfile({ Id: 'ee80b7a9-52b5-42c1-9fff-d3a1b3b322c6' })
    // result = await IoTWirelessDelete.DeleteServiceProfile({ Id: '877c81e4-5669-49d1-b4e9-5fec92617313' })
    // result = await IoTWirelessDelete.DeleteServiceProfile({ Id: '47c58783-0a2e-4a64-88e0-4261a000810f' })
    // result = await IoTWirelessDelete.DeleteWirelessDevice({ Id: '0fa87813-6783-4341-9bcd-2c9c5915eceb' })
    // result = await IoTWirelessDelete.DeleteWirelessGateway({ Id: 'b5d1e8e2-266d-4fca-b3cb-f6f29d721b64' })


  // result = await IoTWirelessDelete.DeleteMulticastGroup({Id: "3ec31e6a-eaea-478e-a6d7-96aa3071004c"})
  // result = await IoTWirelessDelete.DeleteNetworkAnalyzerConfiguration({ ConfigurationName: 'PRUEBA' })

  // result = await IoTWirelessSend.SendDataToWirelessDeviceCommand({
  //   Id: event['device'].Id,
  //   PayloadData: 'AA==',
  //   TransmitMode: 0,
  //   WirelessMetadata: {
  //     LoRaWAN: {
  //       FPort: 1
  //     }
  //   }
  // })

  // result = await IoTWirelessSend.SendDataToMulticastGroupCommand({
  //   Id: event['multicast'].Id,
  //   PayloadData: 'AA==',
  //   TransmitMode: 0,
  //   WirelessMetadata: {
  //     LoRaWAN: {
  //       FPort: 1
  //     }
  //   }
  // })

  // result = await IoTWirelessCreate.CreateKeysAndCertificate({ setAsActive: true })
  // console.log(result)

  // result = await IoTWirelessAssociate.AssociateWirelessGatewayWithCertificate({
  //   Id: event['gateway'].Id,
  //   IotCertificateId: event['certificate'].certificateId
  // })

  // result = await IoTWirelessDisassociate.DisassociateWirelessGatewayFromCertificate({
  //   Id: event['gateway'].Id
  // })


}


await handler(event)

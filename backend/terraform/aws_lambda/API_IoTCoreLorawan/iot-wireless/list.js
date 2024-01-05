// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // List Commands
  ListDestinationsCommand,
  ListDeviceProfilesCommand,
  ListDevicesForWirelessDeviceImportTaskCommand,
  ListEventConfigurationsCommand,
  ListFuotaTasksCommand,
  ListMulticastGroupsByFuotaTaskCommand,
  ListMulticastGroupsCommand,
  ListNetworkAnalyzerConfigurationsCommand,
  ListPartnerAccountsCommand,
  ListQueuedMessagesCommand,
  ListServiceProfilesCommand,
  ListTagsForResourceCommand,
  ListWirelessDeviceImportTasksCommand,
  ListWirelessDevicesCommand,
  ListWirelessGatewaysCommand,
  ListWirelessGatewayTaskDefinitionsCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessList = {}

/* ************************* */
/*      CUSTOM COMMANDS      */
/* ************************* */


/** Return the full list of the wireless devices registered to your AWS account.
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.listAllDevices = async (NextToken = null) => {
  const devices = []

  const getDevicesRecursively = async (nextToken) => {
    const command = new ListWirelessDevicesCommand({ NextToken: nextToken })

    const result = await iotwireless.send(command)
    result.WirelessDeviceList.forEach(device => devices.push(device))

    if (result.NextToken) {
      console.log('Descargando dispositivos: ', devices.length)
      await getDevicesRecursively(result.NextToken)
    } else {
      console.log('Total dispositivos descargados: ', devices.length)
    }
  }

  await getDevicesRecursively(NextToken)
  return devices
}

/** Return the full list of the gateway devices registered to your AWS account.
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.listAllGateways = async (NextToken = null) => {
  const gateways = []

  const getDevicesRecursively = async (nextToken) => {
    const command = new ListWirelessGatewaysCommand({ NextToken: nextToken })

    const result = await iotwireless.send(command)
    result.WirelessGatewayList.forEach(gateway => gateways.push(gateway))

    if (result.NextToken) {
      console.log('Descargando gateways: ', gateways.length)
      await getDevicesRecursively(result.NextToken)
    } else {
      console.log('Total gateways descargados: ', gateways.length)
    }
  }

  await getDevicesRecursively(NextToken)
  return gateways
}


/* *********************** */
/*      LIST COMMANDS      */
/* *********************** */


/** #### Lists the destinations registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListDestinationsCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListDestinations = async (NextToken = null) => {
  const command = new ListDestinationsCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the device profiles registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListDeviceProfilesCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListDeviceProfiles = async (NextToken = null) => {
  const command = new ListDeviceProfilesCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List the Sidewalk devices in an import task and their onboarding status.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListDevicesForWirelessDeviceImportTaskCommand/
 * 
 * @param {string} Id The identifier of the import task for which wireless devices are listed.
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListDevicesForWirelessDeviceImportTask = async (Id, NextToken = null) => {
  const command = new ListDevicesForWirelessDeviceImportTaskCommand({ Id, NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List event configurations where at least one event topic has been enabled.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListEventConfigurationsCommand/
 * 
 * @param {string} ResourceType 'WirelessDevice' | 'WirelessGateway' | 'SidewalkAccount'
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListEventConfigurations = async (ResourceType, NextToken = null) => {
  const command = new ListEventConfigurationsCommand({ ResourceType, NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the FUOTA tasks registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListFuotaTasksCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListFuotaTasks = async (NextToken = null) => {
  const command = new ListFuotaTasksCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List all multicast groups associated with a fuota task.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListMulticastGroupsByFuotaTaskCommand/
 * 
 * @param {string} Id The ID of a FUOTA task.
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListMulticastGroupsByFuotaTask = async (Id, NextToken = null) => {
  const command = new ListMulticastGroupsByFuotaTaskCommand({ Id, NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the multicast groups registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListMulticastGroupsCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListMulticastGroups = async (NextToken = null) => {
  const command = new ListMulticastGroupsCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the network analyzer configurations.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListNetworkAnalyzerConfigurationsCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListNetworkAnalyzerConfigurations = async (NextToken = null) => {
  const command = new ListNetworkAnalyzerConfigurationsCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the partner accounts associated with your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListPartnerAccountsCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListPartnerAccounts = async (NextToken = null) => {
  const command = new ListPartnerAccountsCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List queued messages in the downlink queue.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListQueuedMessagesCommand/
 * 
 * @param {string} Id The ID of a given wireless device which the downlink message packets are being sent.
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListQueuedMessages = async (Id, NextToken = null) => {
  const command = new ListQueuedMessagesCommand({ Id, NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the service profiles registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListServiceProfilesCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListServiceProfiles = async (NextToken = null) => {
  const command = new ListServiceProfilesCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the tags (metadata) you have assigned to the resource.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListTagsForResourceCommand/
 * 
 * @param {string | null} ResourceArn The ARN of the resource for which you want to list tags.
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListTagsForResource = async (ResourceArn, NextToken = null) => {
  const command = new ListTagsForResourceCommand({ ResourceArn, NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List wireless devices that have been added to an import task.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListWirelessDeviceImportTasksCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListWirelessDeviceImportTasks = async (NextToken = null) => {
  const command = new ListWirelessDeviceImportTasksCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the wireless devices registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListWirelessDevicesCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListWirelessDevices = async (NextToken = null) => {
  const command = new ListWirelessDevicesCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### Lists the wireless gateways registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListWirelessGatewaysCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListWirelessGateways = async (NextToken = null) => {
  const command = new ListWirelessGatewaysCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}

/** #### List the wireless gateway tasks definitions registered to your AWS account.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/ListWirelessGatewayTaskDefinitionsCommand/
 * 
 * @param {string | null} NextToken To retrieve the next set of results
 * @returns 
 */
IoTWirelessList.ListWirelessGatewayTaskDefinitions = async (NextToken = null) => {
  const command = new ListWirelessGatewayTaskDefinitionsCommand({ NextToken })
  const result = await iotwireless.send(command)
  return result
}
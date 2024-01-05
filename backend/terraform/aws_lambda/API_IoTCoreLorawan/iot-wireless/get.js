// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Get Commands
  GetDestinationCommand,
  GetDeviceProfileCommand,
  GetEventConfigurationByResourceTypesCommand,
  GetFuotaTaskCommand,
  GetLogLevelsByResourceTypesCommand,
  GetMulticastGroupCommand,
  GetMulticastGroupSessionCommand,
  GetNetworkAnalyzerConfigurationCommand,
  GetPartnerAccountCommand,
  GetPositionEstimateCommand,
  GetResourceEventConfigurationCommand,
  GetResourceLogLevelCommand,
  GetResourcePositionCommand,
  GetServiceEndpointCommand,
  GetServiceProfileCommand,
  GetWirelessDeviceCommand,
  GetWirelessDeviceImportTaskCommand,
  GetWirelessDeviceStatisticsCommand,
  GetWirelessGatewayCertificateCommand,
  GetWirelessGatewayCommand,
  GetWirelessGatewayFirmwareInformationCommand,
  GetWirelessGatewayStatisticsCommand,
  GetWirelessGatewayTaskCommand,
  GetWirelessGatewayTaskDefinitionCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessGet = {}


/* ********************** */
/*      GET COMMANDS      */
/* ********************** */


/** Gets information about a destination.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetDestinationCommand/
 * 
 * @param {string} Name The name of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetDestination = async ({ Name }) => {
  const command = new GetDestinationCommand({ Name })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a device profile.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetDeviceProfileCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetDeviceProfile = async ({ Id }) => {
  const command = new GetDeviceProfileCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Get the event configuration based on resource types.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetEventConfigurationByResourceTypesCommand/
 * 
 * @returns 
 */
IoTWirelessGet.GetEventConfigurationByResourceTypes = async ({ }) => {
  const command = new GetEventConfigurationByResourceTypesCommand({ })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a FUOTA task.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetFuotaTaskCommand/
 * 
 * @param {string} Id The ID of a FUOTA task.
 * @returns 
 */
IoTWirelessGet.GetFuotaTask = async ({ Id }) => {
  const command = new GetFuotaTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Returns current default log levels or log levels by resource types. Based on resource types, log levels can be for wireless device log options or wireless gateway log options.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetLogLevelsByResourceTypesCommand/
 * 
 * @returns 
 */
IoTWirelessGet.GetLogLevelsByResourceTypes = async ({ }) => {
  const command = new GetLogLevelsByResourceTypesCommand({ })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a multicast group.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetMulticastGroupCommand/
 * 
 * @param {string} Id The ID of the multicast group.
 * @returns 
 */
IoTWirelessGet.GetMulticastGroup = async ({ Id }) => {
  const command = new GetMulticastGroupCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a multicast group session.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetMulticastGroupSessionCommand/
 * 
 * @param {string} Id The ID of the multicast group.
 * @returns 
 */
IoTWirelessGet.GetMulticastGroupSession = async ({ Id }) => {
  const command = new GetMulticastGroupSessionCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Get network analyzer configuration.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetNetworkAnalyzerConfigurationCommand/
 * 
 * @param {string} ConfigurationName Name of the network analyzer configuration.
 * @returns 
 */
IoTWirelessGet.GetNetworkAnalyzerConfiguration = async ({ ConfigurationName }) => {
  const command = new GetNetworkAnalyzerConfigurationCommand({ ConfigurationName })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a partner account. If PartnerAccountId and PartnerType are null, returns all partner accounts.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetPartnerAccountCommand/
 * 
 * @param {string} PartnerType 'Sidewalk'
 * @param {string} PartnerAccountId The partner account ID to disassociate from the AWS account.
 * @returns 
 */
IoTWirelessGet.GetPartnerAccount = async ({ PartnerType, PartnerAccountId }) => {
  const command = new GetPartnerAccountCommand({ PartnerType, PartnerAccountId })
  const result = await iotwireless.send(command)
  return result
}

/** Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetPositionEstimateCommand/
 * 
 * @param {object} CellTowers
 * @param {object} Gnss
 * @param {object} Ip
 * @param {object} Timestamp
 * @param {object} WiFiAccessPoints
 * @returns 
 */
IoTWirelessGet.GetPositionEstimate = async ({CellTowers, Gnss, Ip, Timestamp, WiFiAccessPoints}) => {
  const command = new GetPositionEstimateCommand({CellTowers, Gnss, Ip, Timestamp, WiFiAccessPoints})
  const result = await iotwireless.send(command)
  return result
}

/** Get the event configuration for a particular resource identifier.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetResourceEventConfigurationCommand/
 * 
 * @param {string} PartnerType 'Sidewalk'
 * @param {string} IdentifierType 'DevEui' | 'GatewayEui' | 'PartnerAccountId' | 'WirelessDeviceId' | 'WirelessGatewayId'
 * @param {string} Identifier Resource identifier to opt in for event messaging.
 * @returns 
 */
IoTWirelessGet.GetResourceEventConfiguration = async ({ PartnerType, IdentifierType, Identifier }) => {
  const command = new GetResourceEventConfigurationCommand({ PartnerType, IdentifierType, Identifier })
  const result = await iotwireless.send(command)
  return result
}

/** Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetResourceLogLevelCommand/
 * 
 * @param {string} ResourceType 'WirelessDevice' | 'WirelessGateway'
 * @param {string} ResourceIdentifier The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.
 * @returns 
 */
IoTWirelessGet.GetResourceLogLevel = async ({ ResourceType, ResourceIdentifier }) => {
  const command = new GetResourceLogLevelCommand({ ResourceType, ResourceIdentifier })
  const result = await iotwireless.send(command)
  return result
}

/** Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetResourceLogLevelCommand/
 * 
 * @param {string} ResourceType 'WirelessDevice' | 'WirelessGateway'
 * @param {string} ResourceIdentifier The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.
 * @returns 
 */
IoTWirelessGet.GetResourcePosition = async ({ ResourceType, ResourceIdentifier }) => {
  const command = new GetResourcePositionCommand({ ResourceType, ResourceIdentifier })
  const result = await iotwireless.send(command)
  return result
}

/** Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetServiceEndpointCommand/
 * 
 * @param {string} ServiceType 'CUPS' | 'LNS'
 * @returns 
 */
IoTWirelessGet.GetServiceEndpoint = async ({ ServiceType }) => {
  const command = new GetServiceEndpointCommand({ ServiceType })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a service profile.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetServiceProfileCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetServiceProfile = async ({ Id }) => {
  const command = new GetServiceProfileCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a wireless device.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessDeviceCommand/
 * 
 * @param {string} IdentifierType 'DevEui' | 'WirelessDeviceId' | 'ThingName' | 'SidewalkManufacturingSn'
 * @param {string} Identifier The identifier of the wireless device to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessDevice = async ({ IdentifierType, Identifier }) => {
  const command = new GetWirelessDeviceCommand({ IdentifierType, Identifier })
  const result = await iotwireless.send(command)
  return result
}

/** Get information about an import task and count of device onboarding summary information for the import task.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessDeviceImportTaskCommand/
 * 
 * @param {string} Id The identifier of the import task for which information is requested.
 * @returns 
 */
IoTWirelessGet.GetWirelessDeviceImportTask = async ({ Id }) => {
  const command = new GetWirelessDeviceImportTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets operating information about a wireless device.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessDeviceStatisticsCommand/
 * 
 * @param {string} WirelessDeviceId The ID of the wireless device for which to get the data.
 * @returns 
 */
IoTWirelessGet.GetWirelessDeviceStatistics = async ({ WirelessDeviceId }) => {
  const command = new GetWirelessDeviceStatisticsCommand({ WirelessDeviceId })
  const result = await iotwireless.send(command)
  return result
}

/** Gets the ID of the certificate that is currently associated with a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayCertificateCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessGatewayCertificate = async ({ Id }) => {
  const command = new GetWirelessGatewayCertificateCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayCommand/
 * 
 * @param {string} IdentifierType 'GatewayEui' | 'WirelessGatewayId' | 'ThingName'
 * @param {string} Identifier The identifier of the wireless gateway to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessGateway = async ({ IdentifierType, Identifier }) => {
  const command = new GetWirelessGatewayCommand({ IdentifierType, Identifier })
  const result = await iotwireless.send(command)
  return result
}

/** Gets the firmware version and other information about a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayFirmwareInformationCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessGatewayFirmwareInformation = async ({ Id }) => {
  const command = new GetWirelessGatewayFirmwareInformationCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets operating information about a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayStatisticsCommand/
 * 
 * @param {string} WirelessGatewayId The ID of the wireless gateway for which to get the data.
 * @returns 
 */
IoTWirelessGet.GetWirelessGatewayStatistics = async ({ WirelessGatewayId }) => {
  const command = new GetWirelessGatewayStatisticsCommand({ WirelessGatewayId })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a wireless gateway task.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayTaskCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessGatewayTask = async ({ Id }) => {
  const command = new GetWirelessGatewayTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Gets information about a wireless gateway task definition.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/GetWirelessGatewayTaskDefinitionCommand/
 * 
 * @param {string} Id The ID of the resource to get.
 * @returns 
 */
IoTWirelessGet.GetWirelessGatewayTaskDefinition = async ({ Id }) => {
  const command = new GetWirelessGatewayTaskDefinitionCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

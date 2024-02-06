// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Delete Commands
  DeleteDestinationCommand,
  DeleteDeviceProfileCommand,
  DeleteServiceProfileCommand,
  DeleteWirelessDeviceCommand,
  DeleteWirelessGatewayCommand,
  DeleteMulticastGroupCommand,
  DeleteNetworkAnalyzerConfigurationCommand,
  DeleteQueuedMessagesCommand,
  DeleteFuotaTaskCommand,
  DeleteWirelessDeviceImportTaskCommand,
  DeleteWirelessGatewayTaskCommand,
  DeleteWirelessGatewayTaskDefinitionCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessDelete = {}

/** Delete a Destination
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteDestinationCommand/
 * 
 * @param {string} Name The Name of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteDestination = async ({ Name }) => {
  const command = new DeleteDestinationCommand({ Name })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Device Profile
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteDeviceProfileCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteDeviceProfile = async ({ Id }) => {
  const command = new DeleteDeviceProfileCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Service Profile
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteServiceProfileCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteServiceProfile = async ({ Id }) => {
  const command = new DeleteServiceProfileCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Wireless Device
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteWirelessDeviceCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteWirelessDevice = async ({ Id }) => {
  const command = new DeleteWirelessDeviceCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Wireless Gateway
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteWirelessGatewayCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteWirelessGateway = async ({ Id }) => {
  const command = new DeleteWirelessGatewayCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Multicast Group
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteMulticastGroupCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteMulticastGroup = async ({ Id }) => {
  const command = new DeleteMulticastGroupCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Network Analyzer Configuration
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteNetworkAnalyzerConfigurationCommand/
 * 
 * @param {string} ConfigurationName	 The Name of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteNetworkAnalyzerConfiguration = async ({ ConfigurationName	 }) => {
  const command = new DeleteNetworkAnalyzerConfigurationCommand({ ConfigurationName	 })
  const result = await iotwireless.send(command)
  return result
}

/** Delete Queued Messages
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteQueuedMessagesCommand/
 * 
 * @param {string} Id                   The ID of a given wireless device for which downlink messages will be deleted.
 * @param {string} WirelessDeviceType   The type of the device: 'LoRaWAN' | 'Sidewalk'
 * @param {string} MessageId            The ID of the specific message to delete. If message ID is "*", it cleares the entire downlink queue for a given device
 * @returns 
 */
IoTWirelessDelete.DeleteQueuedMessages = async ({ Id, WirelessDeviceType, MessageId }) => {
  const command = new DeleteQueuedMessagesCommand({ Id, WirelessDeviceType, MessageId })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Fuota Task
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteFuotaTaskCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteFuotaTask = async ({ Id }) => {
  const command = new DeleteFuotaTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Wireless Device Import Task
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteWirelessDeviceImportTaskCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteWirelessDeviceImportTask = async ({ Id }) => {
  const command = new DeleteWirelessDeviceImportTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Wireless Gateway Task
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteWirelessGatewayTaskCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteWirelessGatewayTask = async ({ Id }) => {
  const command = new DeleteWirelessGatewayTaskCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Delete a Wireless Gateway Task Definition
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DeleteWirelessGatewayTaskDefinitionCommand/
 * 
 * @param {string} Id The ID of the resource to delete.
 * @returns 
 */
IoTWirelessDelete.DeleteWirelessGatewayTaskDefinition = async ({ Id }) => {
  const command = new DeleteWirelessGatewayTaskDefinitionCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}
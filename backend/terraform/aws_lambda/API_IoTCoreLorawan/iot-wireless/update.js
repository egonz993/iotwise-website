// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Update Commands
  UpdateDestinationCommand,
  UpdateWirelessDeviceCommand,
  UpdateWirelessGatewayCommand,
  UpdateMulticastGroupCommand,
  UpdateNetworkAnalyzerConfigurationCommand,

  /* TODO: Implementation Pending */
  UpdateEventConfigurationByResourceTypesCommand,
  UpdateFuotaTaskCommand,
  UpdateLogLevelsByResourceTypesCommand,
  UpdatePartnerAccountCommand,
  UpdateResourceEventConfigurationCommand,
  UpdateResourcePositionCommand,
  UpdateWirelessDeviceImportTaskCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessUpdate = {}


/** Update a destination that maps a device message to an AWS IoT rule.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/UpdateDestinationCommand/
 * 
 * @param {string} Name           The name of the resource to edit.
 * @param {string} ExpressionType The type of value in Expression: 'MqttTopic' | 'RuleName'
 * @param {string} Expression     The rule name or topic rule to send messages to.
 * @param {string} RoleArn        The ARN of the IAM Role that authorizes the destination.
 * @param {string} Description    The description of the resource to edit.
 * @returns 
 */
IoTWirelessUpdate.UpdateDestination = async ({ Name, ExpressionType, Expression, RoleArn, Description }) => {
  const command = new UpdateDestinationCommand({ Name, ExpressionType, Expression, RoleArn, Description })
  const result = await iotwireless.send(command)
  return result
}

/** Update a wireless device.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/UpdateWirelessDeviceCommand/
 * 
 * @param {string} Id               The ID of the resource to update.
 * @param {string} Name             The name of the resource to update.
 * @param {string} DestinationName  The name of the destination to assign to the wireless device to update.
 * @param {string} Description      The description of the resource to update.
 * @param {any} LoRaWAN             The device configuration information to use to create the wireless device.
 * @param {any} Positioning         FPort values for the GNSS, stream, and ClockSync functions of the positioning information.
 * @returns 
 */
IoTWirelessUpdate.UpdateWirelessDevice = async ({ Id, Name, DestinationName, Description, LoRaWAN, Positioning }) => {
  const command = new UpdateWirelessDeviceCommand({ Id, Name, DestinationName, Description, LoRaWAN, Positioning })
  const result = await iotwireless.send(command)
  return result
}

/** Update a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/UpdateWirelessGatewayCommand/
 * 
 * @param {string} Id               The ID of the resource to edit.
 * @param {string} Name             The name of the resource to edit.
 * @param {string} Description      The description of the resource to edit.
 * @returns 
 */
IoTWirelessUpdate.UpdateWirelessGateway = async ({ Id, Name, Description }) => {
  const command = new UpdateWirelessGatewayCommand({ Id, Name, Description })
  const result = await iotwireless.send(command)
  return result
}

/** Updates properties of a multicast group session.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/UpdateMulticastGroupCommand/
 * 
 * @param {string} Id               The ID of the resource to edit.
 * @param {string} Name             The name of the resource to edit.
 * @param {string} Description      The description of the resource to edit.
 * @param {any} LoRaWAN             The device configuration information to use to create the wireless device.
 * @returns 
 */
IoTWirelessUpdate.UpdateMulticastGroup = async ({ Id, Name, Description, LoRaWAN }) => {
  const command = new UpdateMulticastGroupCommand({ Id, Name, Description, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Update a network analyzer configuration.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/UpdateNetworkAnalyzerConfigurationCommand/
 * 
 * @param {string} ConfigurationName                  ConfigurationName of the network analyzer configuration.
 * @param {string} Description                        The description of the resource to edit.
 * @param {any} TraceContent                          Trace content for your wireless devices, gateways, and multicast groups.
 * @param {Array<string>} WirelessDevicesToAdd        Wireless device resources to add to the network analyzer configuration.
 * @param {Array<string>} WirelessGatewaysToAdd        Wireless gateway resources to add to the network analyzer configuration.
 * @param {Array<string>} MulticastGroupsToAdd        Multicast Group resources to add to the network analyzer configruation.
 * @param {Array<string>} WirelessDevicesToRemove     Wireless device resources to remove to the network analyzer configuration.
 * @param {Array<string>} WirelessGatewaysToRemove     Wireless gateway resources to remove to the network analyzer configuration.
 * @param {Array<string>} MulticastGroupsToRemove     Multicast Group resources to remove to the network analyzer configruation.
 * @returns 
 */
IoTWirelessUpdate.UpdateNetworkAnalyzerConfiguration = async ({ ConfigurationName, Description, TraceContent, WirelessDevicesToAdd, WirelessGatewaysToAdd, MulticastGroupsToAdd, WirelessDevicesToRemove, WirelessGatewaysToRemove, MulticastGroupsToRemove }) => {
  const command = new UpdateNetworkAnalyzerConfigurationCommand({ ConfigurationName, Description, TraceContent, WirelessDevicesToAdd, WirelessGatewaysToAdd, MulticastGroupsToAdd, WirelessDevicesToRemove, WirelessGatewaysToRemove, MulticastGroupsToRemove })
  const result = await iotwireless.send(command)
  return result
}
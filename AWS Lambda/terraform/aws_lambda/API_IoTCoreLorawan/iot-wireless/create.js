// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Create Commands
  CreateDestinationCommand,
  CreateDeviceProfileCommand,
  CreateServiceProfileCommand,
  CreateWirelessDeviceCommand,
  CreateWirelessGatewayCommand,
  CreateMulticastGroupCommand,
  CreateNetworkAnalyzerConfigurationCommand,

  /* TODO: Implementation Pending */
  CreateFuotaTaskCommand,
  CreateWirelessGatewayTaskCommand,
  CreateWirelessGatewayTaskDefinitionCommand,
} from '@aws-sdk/client-iot-wireless'

import { IoTClient, CreateKeysAndCertificateCommand } from "@aws-sdk/client-iot";

const iotwireless = new IoTWirelessClient()
const iotclient = new IoTClient()

export const IoTWirelessCreate = {}

/** Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot/command/CreateKeysAndCertificateCommand/
 * 
 * @param {boolean} setAsActive   Specifies whether the certificate is active.
 * @returns 
 */
IoTWirelessCreate.CreateKeysAndCertificate = async ({ setAsActive }) => {
  const command = new CreateKeysAndCertificateCommand({ setAsActive })
  const result = await iotclient.send(command)
  return result
}


/** Creates a new destination that maps a device message to an AWS IoT rule.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateDestinationCommand/
 * 
 * @param {string} Name           The name of the new resource.
 * @param {string} ExpressionType The type of value in Expression: 'MqttTopic' | 'RuleName'
 * @param {string} Expression     The rule name or topic rule to send messages to.
 * @param {string} RoleArn        The ARN of the IAM Role that authorizes the destination.
 * @param {string} Description    The description of the new resource.
 * @returns 
 */
IoTWirelessCreate.CreateDestination = async ({ Name, ExpressionType, Expression, RoleArn, Description }) => {
  const command = new CreateDestinationCommand({ Name, ExpressionType, Expression, RoleArn, Description })
  const result = await iotwireless.send(command)
  return result
}

/** Creates a new device profile.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateDeviceProfileCommand/
 * 
 * @param {LoRaWANServiceProfile} Name The service profile information to use to create the service profile.
 * @param {any} LoRaWAN    The name of the new resource.
 * @returns 
 */
IoTWirelessCreate.CreateDeviceProfile = async ({ Name, LoRaWAN }) => {
  const command = new CreateDeviceProfileCommand({ Name, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Creates a new service profile.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateServiceProfileCommand/
 * 
 * @param {LoRaWANServiceProfile} Name The service profile information to use to create the service profile.
 * @param {any} LoRaWAN The name of the new resource.
 * @returns 
 */
IoTWirelessCreate.CreateServiceProfile = async ({ Name, LoRaWAN }) => {
  const command = new CreateServiceProfileCommand({ Name, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Provisions a wireless device.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateWirelessDeviceCommand/
 * 
 * @param {string} Type             The wireless device type: 'LoRaWAN' | 'Sidewalk'
 * @param {string} Name             The name of the new resource.
 * @param {string} DestinationName  The name of the destination to assign to the new wireless device.
 * @param {string} Description      The description of the new resource.
 * @param {any} LoRaWAN             The device configuration information to use to create the wireless device.
 * @returns 
 */
IoTWirelessCreate.CreateWirelessDevice = async ({ Type, Name, DestinationName, Description, LoRaWAN }) => {
  const command = new CreateWirelessDeviceCommand({ Type, Name, DestinationName, Description, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Provisions a wireless gateway.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateWirelessGatewayCommand/
 * 
 * @param {string} Name             The name of the new resource.
 * @param {string} Description      The description of the new resource.
 * @param {any} LoRaWAN             The device configuration information to use to create the wireless device.
 * @returns 
 */
IoTWirelessCreate.CreateWirelessGateway = async ({ Name, Description, LoRaWAN }) => {
  const command = new CreateWirelessGatewayCommand({ Name, Description, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Creates a multicast group.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateMulticastGroupCommand/
 * 
 * @param {string} Name             The name of the multicast group.
 * @param {string} Description      The description of the multicast group.
 * @param {any} LoRaWAN             The LoRaWAN information that is to be used with the multicast group.
 * @returns 
 */
IoTWirelessCreate.CreateMulticastGroup = async ({ Name, Description, LoRaWAN }) => {
  const command = new CreateMulticastGroupCommand({ Name, Description, LoRaWAN })
  const result = await iotwireless.send(command)
  return result
}

/** Creates a new network analyzer configuration.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/CreateNetworkAnalyzerConfigurationCommand/
 * 
 * @param {string} Name                     Name of the network analyzer configuration.
 * @param {string} Description              The description of the new resource.
 * @param {any} TraceContent             Trace content for your wireless devices, gateways, and multicast groups.
 * @param {Array<string>} WirelessDevices   Wireless device resources to add to the network analyzer configuration. Provide the WirelessDeviceId of the resource to add in the input array.
 * @param {Array<string>} WirelessGateways  Wireless gateway resources to add to the network analyzer configuration. Provide the WirelessGatewayId of the resource to add in the input array.
 * @param {Array<string>} MulticastGroups   Multicast Group resources to add to the network analyzer configruation. Provide the MulticastGroupId of the resource to add in the input array.
 * @returns 
 */
IoTWirelessCreate.CreateNetworkAnalyzerConfiguration = async ({ Name, TraceContent, Description, WirelessDevices, WirelessGateways, MulticastGroups }) => {
  const command = new CreateNetworkAnalyzerConfigurationCommand({ Name, TraceContent, Description, WirelessDevices, WirelessGateways, MulticastGroups })
  const result = await iotwireless.send(command)
  return result
}
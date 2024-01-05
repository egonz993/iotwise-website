// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Disassociate Command
  DisassociateWirelessDeviceFromMulticastGroupCommand,
  DisassociateWirelessDeviceFromThingCommand,
  DisassociateWirelessGatewayFromThingCommand,
  DisassociateWirelessGatewayFromCertificateCommand,
  
  /* TODO: Implementation Pending */
  DisassociateAwsAccountFromPartnerAccountCommand,
  DisassociateMulticastGroupFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromFuotaTaskCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessDisassociate = {}


/** Disassociates a wireless device with a multicast group.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DisassociateWirelessDeviceFromMulticastGroupCommand/
 * 
 * @param {string} Id                 The ID of the multicast group.
 * @param {string} WirelessDeviceId   The ID of the wireless device.
 * @returns 
 */
IoTWirelessDisassociate.DisassociateWirelessDeviceFromMulticastGroup = async ({ Id, WirelessDeviceId }) => {
  const command = new DisassociateWirelessDeviceFromMulticastGroupCommand({ Id, WirelessDeviceId })
  const result = await iotwireless.send(command)
  return result
}

/** Disassociates a wireless device with a thing.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DisassociateWirelessDeviceFromThingCommand/
 * 
 * @param {string} Id                 The ID of the resource to update.
 * @returns 
 */
IoTWirelessDisassociate.DisassociateWirelessDeviceFromThing = async ({ Id }) => {
  const command = new DisassociateWirelessDeviceFromThingCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Disassociates a wireless gateway with a thing.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DisassociateWirelessGatewayFromThingCommand/
 * 
 * @param {string} Id                 The ID of the resource to update.
 * @returns 
 */
IoTWirelessDisassociate.DisassociateWirelessGatewayFromThing = async ({ Id }) => {
  const command = new DisassociateWirelessGatewayFromThingCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

/** Disassociates a wireless gateway with a certificate.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/DisassociateWirelessGatewayFromCertificateCommand/
 * 
 * @param {string} Id                 The ID of the multicast group.
 * @returns 
 */
IoTWirelessDisassociate.DisassociateWirelessGatewayFromCertificate = async ({ Id }) => {
  const command = new DisassociateWirelessGatewayFromCertificateCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}

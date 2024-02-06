// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Associate Commands
  AssociateWirelessDeviceWithMulticastGroupCommand,
  AssociateWirelessDeviceWithThingCommand,
  AssociateWirelessGatewayWithThingCommand,
  AssociateWirelessGatewayWithCertificateCommand,
  
  /* TODO: Implementation Pending */
  AssociateAwsAccountWithPartnerAccountCommand,
  AssociateMulticastGroupWithFuotaTaskCommand,
  AssociateWirelessDeviceWithFuotaTaskCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessAssociate = {}


/** Associates a wireless device with a multicast group.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/AssociateWirelessDeviceWithMulticastGroupCommand/
 * 
 * @param {string} Id                 The ID of the multicast group.
 * @param {string} WirelessDeviceId   The ID of the wireless device.
 * @returns 
 */
IoTWirelessAssociate.AssociateWirelessDeviceWithMulticastGroup = async ({ Id, WirelessDeviceId }) => {
  const command = new AssociateWirelessDeviceWithMulticastGroupCommand({ Id, WirelessDeviceId })
  const result = await iotwireless.send(command)
  return result
}

/** Associates a wireless device with a thing.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/AssociateWirelessDeviceWithThingCommand/
 * 
 * @param {string} Id                 The ID of the resource to update.
 * @param {string} ThingArn           The ARN of the thing to associate with the wireless device.
 * @returns 
 */
IoTWirelessAssociate.AssociateWirelessDeviceWithThing = async ({ Id, ThingArn }) => {
  const command = new AssociateWirelessDeviceWithThingCommand({ Id, ThingArn })
  const result = await iotwireless.send(command)
  return result
}

/** Associates a wireless gateway with a thing.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/AssociateWirelessGatewayWithThingCommand/
 * 
 * @param {string} Id                 The ID of the resource to update.
 * @param {string} ThingArn           The ARN of the thing to associate with the wireless device.
 * @returns 
 */
IoTWirelessAssociate.AssociateWirelessGatewayWithThing = async ({ Id, ThingArn }) => {
  const command = new AssociateWirelessGatewayWithThingCommand({ Id, ThingArn })
  const result = await iotwireless.send(command)
  return result
}

/** Associates a wireless gateway with a certificate.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/AssociateWirelessGatewayWithCertificateCommand/
 * 
 * @param {string} Id                 The ID of the multicast group.
 * @param {string} IotCertificateId   The ID of the certificate to associate with the wireless gateway.
 * @returns 
 */
IoTWirelessAssociate.AssociateWirelessGatewayWithCertificate = async ({ Id, IotCertificateId }) => {
  const command = new AssociateWirelessGatewayWithCertificateCommand({ Id, IotCertificateId })
  const result = await iotwireless.send(command)
  return result
}

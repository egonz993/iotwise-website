// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Send Commands
  SendDataToWirelessDeviceCommand,
  SendDataToMulticastGroupCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessSend = {}


/** Send Data To Wireless Device
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/SendDataToWirelessDeviceCommand/
 * 
 * @param {string} Id               The ID of the wireless device to receive the data.
 * @param {string} PayloadData      The binary to be sent to the end device, encoded in base64.
 * @param {number} TransmitMode     Can be: 0 for UM (unacknowledge mode) or 1 for AM (acknowledge mode).
 * @param {any} WirelessMetadata    The ID of the resource to get. {LoRaWAN: {FPort: 1-255 }}
 * @returns 
 */
IoTWirelessSend.SendDataToWirelessDeviceCommand = async ({ Id, PayloadData, TransmitMode, WirelessMetadata }) => {
  const command = new SendDataToWirelessDeviceCommand({ Id, PayloadData, TransmitMode, WirelessMetadata })
  const result = await iotwireless.send(command)
  return result
}


/** Send Data To Multicast Group
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/SendDataToMulticastGroupCommand/
 * 
 * @param {string} Id               The ID of the multicast group.
 * @param {string} PayloadData      The binary to be sent to the end device, encoded in base64.
 * @param {number} TransmitMode     Can be: 0 for UM (unacknowledge mode) or 1 for AM (acknowledge mode).
 * @param {any} WirelessMetadata    The ID of the resource to get. {LoRaWAN: {FPort: 1-255 }}
 * @returns 
 */
IoTWirelessSend.SendDataToMulticastGroupCommand = async ({ Id, PayloadData, TransmitMode, WirelessMetadata }) => {
  const command = new SendDataToMulticastGroupCommand({ Id, PayloadData, TransmitMode, WirelessMetadata })
  const result = await iotwireless.send(command)
  return result
}
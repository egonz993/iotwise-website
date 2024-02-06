// Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/

import {
  // Client
  IoTWirelessClient,

  // Commands
  TestWirelessDeviceCommand,
  
  /* TODO: Implementation Pending */
  CancelMulticastGroupSessionCommand,
  DeregisterWirelessDeviceCommand,
  PutResourceLogLevelCommand,
  ResetResourceLogLevelCommand,
  ResetAllResourceLogLevelsCommand,
  TagResourceCommand,
  UntagResourceCommand,
} from '@aws-sdk/client-iot-wireless'

const iotwireless = new IoTWirelessClient()

export const IoTWirelessCommand = {}

/** Simulates a provisioned device by sending an uplink data payload of Hello.
 * 
 * Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Class/TestWirelessDeviceCommand/
 * 
 * @param {string} Id The ID of the wireless device to test.
 * @returns 
 */
IoTWirelessCommand.TestWirelessDevice = async ({ Id }) => {
  const command = new TestWirelessDeviceCommand({ Id })
  const result = await iotwireless.send(command)
  return result
}
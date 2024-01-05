import { IoTWirelessAssociate } from './iot-wireless/associate.js';
import { IoTWirelessCreate } from './iot-wireless/create.js';
import { IoTWirelessDelete } from './iot-wireless/delete.js';
import { IoTWirelessDisassociate } from './iot-wireless/diassociate.js';
import { IoTWirelessGet } from './iot-wireless/get.js'
import { IoTWirelessList } from './iot-wireless/list.js'
import { IoTWirelessSend } from './iot-wireless/send.js';
import { IoTWirelessUpdate } from './iot-wireless/update.js';
import { IoTWirelessCommand } from './iot-wireless/others.js';

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
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:WirelessGateway/0cff8715-abca-467b-a496-381758f84e28',
    Id: '0cff8715-abca-467b-a496-381758f84e28',
    LoRaWAN: {
      Beaconing: {},
      GatewayEui: '7076ff0054070670',
      RfRegion: 'AU915',
      SubBands: [1, 2]
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
  multicast: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:MulticastGroup/5809b3d4-73df-4e66-8c55-2b6326b47186',
    Id: '5809b3d4-73df-4e66-8c55-2b6326b47186',
    Name: 'MC_Group'
  },
  network_analyzer: {
    Arn: 'arn:aws:iotwireless:us-east-1:411089006294:NetworkAnalyzerConfiguration/test',
    Name: 'test'
  },
  certificate: {
    certificateArn: 'arn:aws:iot:us-east-1:411089006294:cert/dd49c34a1b50f38fd1380d77e724a510829eae97dc12674ed989ecbc70daf184',
    certificateId: 'dd49c34a1b50f38fd1380d77e724a510829eae97dc12674ed989ecbc70daf184',
    certificatePem: '-----BEGIN CERTIFICATE-----\n' +
      'MIIDWTCCAkGgAwIBAgIUGMKV8s5gmTmCrk5QxIZLr6Wuw8UwDQYJKoZIhvcNAQEL\n' +
      'BQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g\n' +
      'SW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIzMTIxMzE1MTky\n' +
      'MFoXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQVdTIElvVCBDZXJ0aWZpY2F0\n' +
      'ZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALLJgsoOS/7K9Ke7TmQy\n' +
      'aj/cgbUG9LeuW8oqFGkWYFL393Ho1EGgz18KVW1wzIyFFp19eoH6S0/ccQOlbp7O\n' +
      'IGbXzphtLnN/+PiAEYlzLql9idtBuuRy/Z5dlpcPcuSuGnwD2ylgTZnxIFOmSrUw\n' +
      'x/0bBpsIV9KdeMsEuIIzcWBul4nEdRQteTULvV8bQg0hA7Jdt5a9yhERP26829G7\n' +
      'm3vVC6SfUG4PX1eRwqWJJIl7ghTP1nB1dEATMrwRcGDXl5alpQ1MKxHQVntXiwoP\n' +
      'EsbjfonAYyWk3ICCMXFigzFjNOCuLc9OQjUEPkDhQmyGAu6VwaWPh6QqGmw7lKGD\n' +
      '7YkCAwEAAaNgMF4wHwYDVR0jBBgwFoAUz6hx2AlOdtfubMizLv0GwGM2HmswHQYD\n' +
      'VR0OBBYEFJ+VNf5zS+SMyrjVMFrBk2pDKRzXMAwGA1UdEwEB/wQCMAAwDgYDVR0P\n' +
      'AQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4IBAQA7mK8Y+uLlpAUrye90HScmbCYk\n' +
      '76KJLCbpX4w7KZidqT21eutb5UAEKLS/rmz11ZHEMZeOJE9wpyQusfyxxAlmZ8xx\n' +
      'yBAlHYKhRcIt3hvg4R6zlSZ71N7hWfBJTuwmvl85skyJwSCEmuk0fPDdFhZJB3E/\n' +
      'aquG+jUhWXRDOaIBttCEJGvw5vhA+IcYM2VLoEfER6oI/cXOspXw/dDfbl4qxV5o\n' +
      'OHwx7EpmqnZv129CAqHo+h517RlV3Jw3yOSSvicUzHb3WwQVjX7UkfKaEx674ee/\n' +
      'RC2XFpWLY8ETOaqDNaGt6pcIDvNbaxKucecgKCxcLg62Gf8XD6CD3o6e6uyz\n' +
      '-----END CERTIFICATE-----\n',
    keyPair: {
      PrivateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'MIIEpAIBAAKCAQEAssmCyg5L/sr0p7tOZDJqP9yBtQb0t65byioUaRZgUvf3cejU\n' +
        'QaDPXwpVbXDMjIUWnX16gfpLT9xxA6Vuns4gZtfOmG0uc3/4+IARiXMuqX2J20G6\n' +
        '5HL9nl2Wlw9y5K4afAPbKWBNmfEgU6ZKtTDH/RsGmwhX0p14ywS4gjNxYG6XicR1\n' +
        'FC15NQu9XxtCDSEDsl23lr3KERE/brzb0bube9ULpJ9Qbg9fV5HCpYkkiXuCFM/W\n' +
        'cHV0QBMyvBFwYNeXlqWlDUwrEdBWe1eLCg8SxuN+icBjJaTcgIIxcWKDMWM04K4t\n' +
        'z05CNQQ+QOFCbIYC7pXBpY+HpCoabDuUoYPtiQIDAQABAoIBAAyi4XOWfxiLD6+r\n' +
        'NWcviQLqeuBolXNGB4bKYpbq1fQHQp3ybs4Up5N4D4Gkr1BfN7H55Ga7YgdK9VHk\n' +
        'p2Th/LhIGHn9fYL8UIR/yL2GPo4MKWotwx/SYMqIotQaa2xuQcDyJNNP0yxGNpqy\n' +
        '7iTQRdJFzrm2ZT6lkpwGwWOybxj5mb52v6/YZc6zyBJsLmMuLR/UShzXitgnH20J\n' +
        'r7pfF4SN5muOAt+VuFoydftaiHdJFqLNKU2lsT6L/qLZsFm637Bo14+T/AbaDnXR\n' +
        'aFbw6w3PurbzDRDyEBuYQNpmOYAw5h5Ce7r7YnpiwPrQjP/38tER95mAc7p0+McO\n' +
        '0mdWOeECgYEA5B2z4LtzH1Q8HHapItikJtbTydSSVg5ugIIIR3NZA7gSOcuEZ8xO\n' +
        'm1FKzbXFFnfYZojUc0rVAfYYMJyfacWzTUQAqZQV4nTfOqlxsYr7VOT9WuZtPqMC\n' +
        'd8+x2NwFeIMiv4n6+9uaCrrQH34HjDAczDgA7hN4zXHodMrGHnHdzd8CgYEAyKQw\n' +
        'hBCnd/5YwpwpkN7m9bpMzk3Lhpja68sKiKYTyYZyL4Buj3O8yjgVbVHkj/VBESmd\n' +
        '3llprqDK+HWlIygBuY+hcmLotapP4CNCW+it8FtVh6KQYNzhHoUFmW6BhiAxE6wA\n' +
        'BI0tD87OPdhuSB0wBgV11uqDpbJwVdKPBm0SYZcCgYBdr+VEkzgA0fOuLP3iFd+1\n' +
        'I93vsqI3Pc4ccUs9LR6N7HdvzSogB0TxfT2fptu/EpGJ6wB2KXG6UHw22tyN8Ghn\n' +
        'f1pWSz+BtkZILXdIV7BJeZKkVqbfZsuIsYB1dEe66wDGccDm15Y4eekoRfaLmOb6\n' +
        '6LVZEh43ImU6Ml2T+2gBOQKBgQCKeLZ7DrtllwZPGVOehhfD01WatBoYxHmibjjQ\n' +
        '4j2Zwc4gdnTXUDslHNu83N3vdIX5gE1R3UeQm6w5GYhk4QF/vV7hAN42Mlp6CBuO\n' +
        'LuGMlpxKxaj7ELXVSFz67Uc6+BCm0PgaLAzDcijoiexinLI+FZqkPqmou6PHt0+6\n' +
        'UaBz9QKBgQCIUH6kcYAOE8gxOtqWGhwHbQohjASfUGXsZNTCgbNSUWYFv/pTZ9Xm\n' +
        '9Qzrc0AcujEP1Nr8dOUdzDqTxqbMKfZCaOoDvWvOeqFJqKQDvDEOy3qvkZlJZHaP\n' +
        'VdOtJSr92iYIO0oBo1g8gCS+oJdp2WjFiwdLlnRXUjKadmmF5jes+g==\n' +
        '-----END RSA PRIVATE KEY-----\n',
      PublicKey: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAssmCyg5L/sr0p7tOZDJq\n' +
        'P9yBtQb0t65byioUaRZgUvf3cejUQaDPXwpVbXDMjIUWnX16gfpLT9xxA6Vuns4g\n' +
        'ZtfOmG0uc3/4+IARiXMuqX2J20G65HL9nl2Wlw9y5K4afAPbKWBNmfEgU6ZKtTDH\n' +
        '/RsGmwhX0p14ywS4gjNxYG6XicR1FC15NQu9XxtCDSEDsl23lr3KERE/brzb0bub\n' +
        'e9ULpJ9Qbg9fV5HCpYkkiXuCFM/WcHV0QBMyvBFwYNeXlqWlDUwrEdBWe1eLCg8S\n' +
        'xuN+icBjJaTcgIIxcWKDMWM04K4tz05CNQQ+QOFCbIYC7pXBpY+HpCoabDuUoYPt\n' +
        'iQIDAQAB\n' +
        '-----END PUBLIC KEY-----\n'
    }
  }
}


export async function handler(event) {

  let result = null;

  // result = await IoTWirelessCommand.TestWirelessDevice({
  //   Id: event['device'].Id
  // })

  result = await IoTWirelessSend.SendDataToWirelessDeviceCommand({
    Id: event['device'].Id,
    PayloadData: 'AA==',
    TransmitMode: 0,
    WirelessMetadata: {
      LoRaWAN: {
        FPort: 1
      }
    }
  })


  console.log(result)
}


await handler(event)
import { IoTDataPlaneClient, PublishCommand } from '@aws-sdk/client-iot-data-plane';
import dotenv from 'dotenv'; dotenv.config();

const client = process.env.CLIENT;

export const handler = async (event) => {

    if (event.hasOwnProperty('WirelessMetadata')) {
        let filtered = filter(event);
        let decoded = decoder(filtered.payload);

        let datapacket = {
            topic: `${client}/telelamp/data`,

            // Time
            time: new Date().getTime(),

            // Lorawan metadata
            deveui: filtered.deveui,
            fcnt: filtered.fcnt,
            rssi: filtered.rssi,
            freq: filtered.freq,
            sf_used: filtered.sf_used,
            snr: filtered.snr,
            time_on_air_ms: filtered.time_on_air_ms,

            // Telelamp Payload
            payload: filtered.payload,
            timestamp: decoded.timestamp,
            energy_wh: decoded.energy_wh,
            voltage_v: decoded.voltage_v,
            current_a: decoded.current_a,
            active_power_kw: decoded.active_power_kw,
            power_factor: decoded.power_factor,
            temperature_c: decoded.temperature_c,
            illuminance_lx: decoded.illuminance_lx,
            dimmer: decoded.dimmer,
            stat: decoded.stat,
        };

        console.log(datapacket);
        await MQTTPublish(`${client}/telelamp/data`, datapacket);
    }

    return{
        statusCode: 200,
        body: JSON.stringify('Success'),
    };
};

const filter = (event) => {

    //let timestamp = event.WirelessMetadata.LoRaWAN.Timestamp;
    let timestamp = new Date(new Date(event.WirelessMetadata.LoRaWAN.Timestamp).getTime());
    let deveui = event.WirelessMetadata.LoRaWAN.DevEui;
    let fcnt = event.WirelessMetadata.LoRaWAN.FCnt;
    let gateways = event.WirelessMetadata.LoRaWAN.Gateways;
    let rssi = gateways.map(gw => gw.Rssi).reduce((acc, x) => Math.max(acc, x));
    let payload = Buffer.from(event.PayloadData, 'base64').toString('hex');
    let freq = event.WirelessMetadata.LoRaWAN.Frequency;
    let sf_used = event.WirelessMetadata.LoRaWAN.SpreadingFactor;
    let snr = gateways.map(gw => gw.Snr).reduce((acc, x) => Math.max(acc, x));
    let time_on_air_ms = 0;

    let datapacket = {
        timestamp,
        deveui,
        fcnt,
        rssi,
        freq,
        sf_used,
        snr,
        time_on_air_ms,
        // gateways,
        payload
    };

    return datapacket;
};

const decoder = (dataFrame) => {

    let decoded = {};

    decoded.timestamp = parseInt(dataFrame.substr(0, 8), 16);
    decoded.energy_wh = parseInt(dataFrame.substr(12, 8), 16) / 10;
    decoded.voltage_v = parseInt(dataFrame.substr(20, 4), 16) / 100;
    decoded.current_a = parseInt(dataFrame.substr(24, 4), 16) / 1000;
    decoded.active_power_kw = Math.trunc(decoded.voltage_v * decoded.current_a);

    decoded.power_factor = Math.trunc(parseInt(dataFrame.substring(32, 36), 16) / 10);
    if (decoded.power_factor > 100) decoded.power_factor = 0;

    decoded.temperature_c = parseInt(dataFrame.substr(36, 4), 16) / 100;
    decoded.illuminance_lx = parseInt(dataFrame.substr(40, 4), 16);
    decoded.dimmer = parseInt(dataFrame.substr(44, 2), 16);
    decoded.stat = parseInt(dataFrame.substr(47, 1), 16);

    return decoded;
};

const MQTTPublish = async (topic, datapacket) => {
    const client = new IoTDataPlaneClient({ region: 'us-east-1' });

    const command = new PublishCommand({
        topic,
        payload: JSON.stringify(datapacket),
        qos: 0
    });

    try {
        await client.send(command);
    } catch (error) {
        console.log(error);
    }
};

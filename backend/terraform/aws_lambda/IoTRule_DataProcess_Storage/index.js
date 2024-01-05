import * as pg from 'pg';
import dotenv from 'dotenv'; dotenv.config();


export const handler = async (event) => {
  
  const body = JSON.parse(event.body);

  const dbConfig = {
    user: 'tsdbadmin',
    host: 'lsudxhqaxr.w48ghx9b7g.tsdb.cloud.timescale.com',
    database: 'tsdb',
    password: 'xkx6jmf2yfto48kp',
    port: 33696,
  };

  const client = new pg.default.Client(dbConfig);

  try {

    await client.connect();

    const insertQuery = `
          INSERT INTO telelamp_sabaneta(time, deveui, voltage_v, current_a, rssi, energy_wh, energy_total_wh, active_power_kw, power_factor, temperature_c, illuminance_lx, dimmer, stat, fcnt )  
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        `;

    await client.query(insertQuery, [body.time, body.deveui, body.voltage_v, body.current_a, body.rssi, body.energy_wh, body.energy_total_wh, body.active_power_kw, body.power_factor, body.temperature_c, body.illuminance_lx, body.dimmer, body.stat, body.fcnt]);

    return {
      statusCode: 200,
      body: JSON.stringify('Datos insertados correctamente en la tabla de TimescaleDB'),
    };

  } catch (error) {
    console.error('Error al insertar datos:', error);
    return {
      statusCode: 500,
      body: JSON.stringify('Error al insertar datos en la tabla de TimescaleDB'),
    };
  } finally {

    await client.end();
  }
};
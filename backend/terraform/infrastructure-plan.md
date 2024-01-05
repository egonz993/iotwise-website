# INFRAESTRUCTURA CLOUD TELELAMP

## PostgreSQL Timescale

- **users**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - name (VARCHAR[50])
    - email (VARCHAR[50])
    - rol (VARCHAR[50])
    - permissions
    - restrictions

- **lighting**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - type (VARCHAR[50])
    - height (INT)
    - sector  (VARCHAR[50])
    - latitude (DOUBLE)
    - longitude (DOUBLE)

- **devices**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - #uid (VARCHAR[50])
    - type (VARCHAR[50])
    - module (VARCHAR[50])

- **devices_uplink**
  - Columns:
    - #id (BIGINT - AUTO INCREMENT)
    - lighting_id (VARCHAR[50])
    - device_id (INT)
    - timestamp (TIMESTAMP)
    - ul_payload (VARCHAR[255])

- **devices_downlink**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - lighting_id (VARCHAR[50])
    - device_id (INT)
    - user_id (INT)
    - timestamp (TIMESTAMP)
    - dl_payload (VARCHAR[50])
    - description (VARCHAR[50])

- **events**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - lighting_id (INT)
    - device_id (INT)
    - timestamp (TIMESTAMP)
    - user_id (INT)
    - event (INT)
    - status (INT)
    - description (VARCHAR[50])

- **lighting_monitor_realtime**
  - Columns:
    - #id (BIGINT)
    - #lighting_id(INT)
    - device_id (INT)
    - timestamp (TIMESTAMP)
    - energy (LONG)
    - voltage (INT)
    - current (FLOAT)
    - power (INT)
    - powerf (INT)
    - dimmer (INT)
    - rssi (FLOAT)
    - snr (INT)
    - status (INT)

- **lighting_monitor_timeseries**
  - Columns:
    - #id (BIGINT)
    - lighting_id(INT)
    - device_id (INT)
    - timestamp (TIMESTAMP)
    - energy (LONG)
    - voltage (INT)
    - current (FLOAT)
    - power (INT)
    - powerf (INT)
    - dimmer (INT)
    - rssi (FLOAT)
    - snr (INT)
    - status (INT)

**Lorawan Tables**

- **lorawan_gateways**
  - Columns:
    - #id (INT - AUTO INCREMENT)
    - #gtweui (VARCHAR[50])
    - description (VARCHAR[50])
    - sector (VARCHAR[50])
    - height (INT)
    - latitude (DOUBLE)
    - longitude (DOUBLE)
    - status (DOUBLE)

## Amazon EC2

- **SSH Key-Pair**
  - key-pair: For EC2 SSH Connection


- **Application Server**
  - **Frontend**
    - Telelamp GUI

  - **Backend**
    - Alerts, Alarms and Messaging (E-mail, Telegram, Whatsapp, In-App Messaging)
    - Lorawan Gateway Status
    - Lorawan QoS Analyzer


## AWS S3

- **Datalake**
  - Storage for all data received in MQTT Topics


## AWS IoT CORE

**LPWAN Devices**
  - Gateways
  - Devices
  - Profiles
      - Device Profile
        - AU915-C OTAA 1.0.2
      - Service Profile
        - Telelamp Service Profile
  - Destination
      - Prod: {client}/telelamp/lorawan/uplink

**Message Routing (Rules)**
  - **DataLakeRule**
    - Topic: {client}/#
    - Description: S3 Storage
  - **DataProcessRule**
    - Topic: {client}/telelamp/data/#
    - Description: Database Storage and Alerts
  - **LorawanDecoderRule**
    - Topic: {client}/telelamp/lorawan/uplink
    - Description: Lambda: Lorawan Decoder, republish decoded data to {client}/data/{deveui}


## Amazon API Gateway

- **PostgreSQL Timescale CRUD**
  - **/timescale/:database/:table/:method**
    - **method: get**
      query params: columns, table, condition
    - **method: post**
      body: {data}
    - **method: put**
      body: {id, new_data}
    - **method: delete**
      body: {id}
    - **method: query**
      body: {query}

- **IoT Core for Lorawan**
  - **/lorawan/:client/:action**
      - **action: lorawan_device_register**
          body: {deveui, appeui, appkey, name}
      - **action: lorawan_gateway_register**
          body: {deveui, name}
      - **action: lorawan_device_remove**
          body: {id}
      - **action: lorawan_gateway_remove**
          body: {id}

- **API Version 1**
  - **/api/v1/:action**
      - **action: lighting**
        query params: id, lighting_id, device_id, type, sector, limit
      - **action: poles**
        query params: id, type, height, sector, limit
      - **action: alarms**
        query params: id, time, lighting_id, device_id, type, state, from_date, to_date, limit
      - **action: users**
        query params: id, name, email, rol, permissions, restrictions, limit
      - **action: installation**
        query params: id, time, lighting_id, device_id, user_id, event, from_date, to_date, limit
      - **action: lorawan_gateway_list**
        query params: no_required
      - **action: lorawan_gateway_info**
        query params: id, gtweui, status, limit
      - **action: lorawan_device_list**
        query params: no-required
      - **action: lorawan_device_info**
        query params: id, deveui, limit
      - **action: lorawan_device_ul**
        query params: id, lighting_id, device_id, from_date, to_date, limit
      - **action: lorawan_device_dl**
        query params: id, lighting_id, device_id, from_date, to_date, limit
      - **action: lorawan_device_ul_dl**
        query params: id, lighting_id, device_id, from_date, to_date, limit
     

## AWS Lambda

**IoT Core Rules**
  - **IoTRule_DataLake**
    - Store in S3 all messages from topic
  - **IoTRule_LorawanDecoder**
    - Decode a LoRaWAN Uplink Payload and republish to {client}/data
  - **IoTRule_DataProcess_Storage**
    - Cold Path: Store decoded data to Database
  - **IoTRule_DataProcess_Alarms**
    - Warm Path: Check if any alarm or alert from received data

**PostgreSQL Timescale**
  - **API_PostgreSQLTimescale**
    - Custom Query to PostgreSQL Timescale
    - Query SELECT to PostgreSQL Timescale
    - Query INSERT to PostgreSQL Timescale
    - Query UPDATE to PostgreSQL Timescale
    - Query DELETE to PostgreSQL Timescale

**IoT Core LPWAN**
  - **API_IoTCoreLorawan**
    - Register a new Device to IoT Core for LoRaWAN
    - Register a new Gateway to IoT Core for LoRaWAN
    - Remove a Device from IoT Core for LoRaWAN
    - Remove a Gateway from IoT Core for LoRaWAN

**API Version 1**
  - **API_UserApiVersion1**
    - Get data from tables:
      - lighting
      - poles
      - alarms
      - users
      - installation
      - gateways
      - lorawan-devices
      - lorawan-downlinks
      - lorawan-uplinks
      - lorawan-downlinks and lorawan-uplinks
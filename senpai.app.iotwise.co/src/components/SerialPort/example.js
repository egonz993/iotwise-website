//disable form submit
$('form').submit(false);

let device;
let port = navigator.serial;
let portOptions = {
    baudRate: 115200,
    dataBits: 8,
    parity: "none",
    stopBits: 1
}

let baudRate = 9600;

port.onconnect = event => {
    console.log(event)
};
port.ondisconnect = event => {
    console.log(event)
    $('#btn_connect').prop('disabled', false);
    $('#masthead').removeClass('d-none');
    $('#card_control').addClass('d-none');
    $('#txt_payload').val("");
    device.close()
    // window.location.reload()
};

async function deviceConnect(baudRate) {
    portOptions.baudRate = baudRate;

    await port.requestPort();

    await port.getPorts().then(devices => {
        console.log(devices);

        device = devices[0];
        device.open(portOptions).then(result => {
            console.log("Connected");
            readPort();
            $('#btn_connect').prop('disabled', true);
            $('#masthead').addClass('d-none');
            $('#card_control').removeClass('d-none');
            $('#txt_payload').val("");
        });
    })
}

async function readPort() {
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = device.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    try {
        while (true) {
            const {
                value,
                done
            } = await reader.read();
            if (done) {
                // |reader| has been canceled.
                break;
            }
            // Do something with |value|...
            //console.log(value);
            $('#txt_payload').val($('#txt_payload').val() + value);
            $('#txt_payload').scrollTop($('#txt_payload')[0].scrollHeight);
        }
    } catch (error) {
        // Handle |error|...
    } finally {
        reader.releaseLock();
    }
}

function sendData() {
    let payload = $('#txt_sendPayload').val()
    writePort(payload);
}

async function writePort(payload) {
    payload += "\r\n";
    console.log(payload);


    $('#txt_payload').val($('#txt_payload').val() + ">> " + payload);
    $('#txt_payload').scrollTop($('#txt_payload')[0].scrollHeight);

    const encoder = new TextEncoder();
    const writer = device.writable.getWriter();
    await writer.write(encoder.encode(payload));
    writer.releaseLock();
}

async function writePort_awaitResponse(str, res, t = 500) {
    if (str.length > 0) writePort(str)

    res = res.split(",")
    return new Promise((resolve) => {
        setTimeout(() => {
            let response = $('#txt_payload').val()
            for (let i = 0; i < res.length; i++) {
                if (response.includes(res[i])) {
                    console.log("response", res[i])
                    resolve(true)
                }
            }
            resolve(false)
        }, t)
    });
}

async function awaitResponse(res, t) {

    return new Promise((resolve) => {
        setTimeout(() => {
            let response = $('#txt_payload').val()
            if (response.includes(res)) resolve(true)
            else resolve(false)
        }, t)
    });
}

async function RegisterDevice() {
    $('#txt_payload').val("")

    await writePort_awaitResponse("AT+NWM=1", "LoRaWAN,OK", 1500).then((result) => {
        if (result) {
            console.log("REGISTER")

            let deveui, appkey, deveuiStatus, appkeyStatus

            writePort_awaitResponse("AT+DEVEUI=?", "OK").then((response) => {
                let idx = $('#txt_payload').val().toUpperCase().indexOf("AC1F")
                console.log(idx)

                deveui = $('#txt_payload').val().slice(idx, idx + 16).toUpperCase()
                deveuiStatus = response
                console.log(deveui)

                appkey = "01020304050607080910111213141516"
                writePort_awaitResponse("AT+APPKEY=" + appkey, "OK").then((response) => {
                    appkeyStatus = response

                    if (deveuiStatus && appkeyStatus) {
                        if (deveui.length == 16) {
                            var comment = prompt("Numero de dispositivo").toUpperCase()
                        }

                        if (deveui.length == 16 && comment.length > 0) {
                            console.log(deveui, comment)
                            registerNewDevice(deveui, comment)
                        }
                        else
                            alert("Bad Request")
                    } else {
                        alert("Error AT")
                    }
                })
            })


        }
    })


}

function registerNewDevice(deveui, comment) {

    let configIdx = 1;

    let config = [
        {
            user: "alcaldiamedellin",
            userKey: "YWxjYWxkaWFtZWRlbGxpbjpZMETCvzNIOWEhU2Mk",
            appkey: "",
            groups: '',
            device_profile_uuid: '',
            service_profile_uuid: '',
            applications: ''
        },
        {
            user: "hector.hoyos.cebayos",
            userKey: "aGVjdG9yLmhveW9zLmNlYmFsbG9zOjYyK0FLbzZ6QEtpJA==",
            appkey: "01020304050607080910111213141516",
            groups: 'keepalive',
            device_profile_uuid: 'ae1f5fd4-cb7e-47ab-bb55-1c0038ad4543',
            service_profile_uuid: '17cf02ed-a438-4202-ba95-f4d587d4a1e8',
            applications: 'aws_iot'
        },
        {
            user: "egonzalez",
            userKey: "ZWdvbnphbGV6OlQzbDNtM3RyMWsxMjM=",
            appkey: "01020304050607080910111213141516",
            groups: 'keepalive',
            device_profile_uuid: '3c4b7571-9ba7-4ee9-bf3c-c5455f42c211',
            service_profile_uuid: 'db077c6b-33a8-4816-96d0-b096421370f7',
            applications: 'sandbox_epm'
        }
    ]

    let url = "https://nst.au.saas.orbiwise.com:8443/rest/nodes"
    let requestHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + config[configIdx].userKey
    })

    console.log(config[configIdx])

    let requestBody = {}
    requestBody['deveui'] = deveui;
    requestBody['comment'] = comment;
    requestBody['appkey'] = config[configIdx].appkey;
    requestBody['groups'] = config[configIdx].groups;
    requestBody['device_profile_uuid'] = config[configIdx].device_profile_uuid;
    requestBody['service_profile_uuid'] = config[configIdx].service_profile_uuid;
    requestBody['applications'] = config[configIdx].applications;
    requestBody['lora_device_class'] = 2;
    requestBody['activated'] = true;

    console.log(JSON.stringify(requestBody))

    let requestOptions = {
        method: 'post',
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
    };

    fetch(url, requestOptions)
        .then((data) => {
            console.log(data.status, data.statusText)
            if (data.status == 200) {
                console.log(data.status, data.statusText)
                //alert(data.status + ": " + data.statusText)
                $("#card_RAK3172").removeClass('d-none')
                RAK3172_CONFIG()
            }
            else alert(data.status + ": " + data.statusText)
        })
}

async function closePort() {
    await device.readable.releaseLock();
    await device.close();
}

function getMsg() {
    alert(document.getElementById('txt_payload').value)
}

function clearConsole() {
    $('#txt_payload').val("");
}

document.querySelector('#txt_sendPayload').addEventListener('keyup', function (e) {
    $('#txt_sendPayload').val($('#txt_sendPayload').val().toUpperCase())

    if (e.key === 'Enter') {
        let payload = $('#txt_sendPayload').val()
        writePort(payload);
    }
});

document.querySelector('#txt_interval_payload').addEventListener('keyup', function (e) {
    $('#txt_interval_payload').val($('#txt_interval_payload').val().toUpperCase());
});


var count = 0;
var timer = 0
var interval;

function setPayloadInterval() {
    let payload = $('#txt_interval_payload').val().toUpperCase();
    let time = Math.trunc($('#txt_interval_time').val())

    let error = false

    if (payload.length == 0) error = true;
    if (time < 1) error = true;
    if (time > 3600) error = true;

    if (!error) {

        $('#txt_interval_payload').prop("disabled", true);
        $('#txt_interval_time').prop("disabled", true);

        $('#btn_setInterval').addClass("d-none");
        $('#btn_clearInterval').removeClass("d-none");

        $('#txt_payload').val($('#txt_payload').val() + "\n****************************************");
        $('#txt_payload').val($('#txt_payload').val() + "\nSTARTED SEND-INTERVAL\n\n- Time: " + time + " seconds" + "\n- Command: " + payload)
        $('#txt_payload').val($('#txt_payload').val() + "\n****************************************");
        $('#txt_payload').val($('#txt_payload').val() + "\n\n");

        writePort(payload);
        console.log("Interval: " + count++);

        timer = time;

        interval = setInterval(function () {
            count++;
            timer--;

            $('#txt_interval_time').val(timer + 1)

            if (timer == -1) {
                console.log("Interval: " + count);
                $('#txt_interval_time').val("SEND")

                timer = time;
                writePort(payload);
            }



        }, 1000);
    }


}


function clearPayloadInterval() {
    clearInterval(interval)

    $('#btn_clearInterval').addClass("d-none");
    $('#btn_setInterval').removeClass("d-none");

    $('#txt_interval_payload').prop("disabled", false);
    $('#txt_interval_time').prop("disabled", false);
}


function overrideView() {
    $('#btn_connect').prop('disabled', true);
    $('#masthead').addClass('d-none');
    $('#card_control').removeClass('d-none');
}



/* ******************** */
/* RAK3172 PANEL COMMANDS */
/* ******************** */

let btn_collapse_RAK3172 = document.getElementById("btn_collapse_RAK3172")
btn_collapse_RAK3172.addEventListener("click", () => document.getElementById("card_RAK3172").classList.toggle("d-none"))

const RAK3172_BAUD_9600 = () => writePort("AT+BAUD=9600")
const RAK3172_AT = () => writePort("AT")
const RAK3172_GET_DEVEUI = () => writePort_awaitResponse("AT+DEVEUI=?", 16)
const RAK3172_GET_APPKEY = () => writePort("AT+APPKEY=?")
const RAK3172_GET_APPEUI = () => writePort("AT+APPEUI=?")

const RAK3172_GET_NETWORK = () => writePort("AT+NWM=?")
const RAK3172_GET_CLASS = () => writePort("AT+CLASS=?")
const RAK3172_GET_BAND = () => writePort("AT+BAND=?")
const RAK3172_GET_MASK = () => writePort("AT+MASK=?")

const RAK3172_ATE = () => writePort("ATE")

const RAK3172_NETWORK = (_network) => writePort("AT+NWM=" + _network)
const RAK3172_ADR = (_adr) => writePort("AT+ADR=" + _adr)
const RAK3172_DR = (_dr) => writePort("AT+DR=" + _dr)
const RAK3172_CLASS = (_class) => writePort("AT+CLASS=" + _class)
const RAK3172_BAND = (_band) => writePort("AT+BAND=" + _band)
const RAK3172_MASK = (_mask) => writePort("AT+MASK=" + _mask)
const RAK3172_CFM = (_cfm) => writePort("AT+CFM=" + _cfm)
const RAK3172_MULTICAST = () => writePort("AT+ADDMULC=C:01020304:01020304050607080910111213141516:01020304050607080910111213141516")

const RAK3172_JOIN = (_join) => writePort("AT+JOIN=" + _join + ":1:8:255")

const RAK3172_RESET = (_join) => writePort("ATZ")

const RAK3172_SEND = () => writePort("AT+SEND=1:" + $("#txt_RAK3172_Send").val())
const RAK3172_SEND_DATA = (data) => writePort("AT+SEND=1:" + data)

const RAK3172_FIRST_SEND = async () => {
    await writePort_awaitResponse("AT+DR=3", "OK").then((response) => {
        if (response) {
            writePort_awaitResponse("AT+SEND=1:000000000000000000000000000000000000000000000026", "OK").then(() => {
                if (response) {
                    $('#txt_payload').val("Esperando respuesta del servidor... \n\n");
                }
                else $('#txt_payload').val($('#txt_payload').val() + "\n\n Error, intentar de nuevo... \n\n");
            })
        }
        else $('#txt_payload').val($('#txt_payload').val() + "\n\n Error, intentar de nuevo... \n\n");
    })
}

const RAK3172_CONFIG = async () => {
    result = true
    $('#RAK3172_btn_complete').addClass('d-none')

    $("#RAK3172_btn_at").addClass('btn-success')
    $("#RAK3172_btn_network").addClass('btn-success')
    $("#RAK3172_btn_adr").addClass('btn-success')
    $("#RAK3172_btn_class").addClass('btn-success')
    $("#RAK3172_btn_band").addClass('btn-success')
    $("#RAK3172_btn_mask").addClass('btn-success')
    $("#RAK3172_btn_cfm").addClass('btn-success')
    $("#RAK3172_btn_multicast").addClass('btn-success')
    $("#RAK3172_btn_join").addClass('btn-success')
    $("#RAK3172_btn_reset").addClass('btn-success')

    $("#RAK3172_btn_config").removeClass('btn-success')
    $("#RAK3172_btn_config").addClass('btn-primary')


    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT", "OK")
        $("#RAK3172_btn_at").removeClass('btn-success')
        $("#RAK3172_btn_at").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_at").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+ADR=0", "OK")
        $("#RAK3172_btn_adr").removeClass('btn-success')
        $("#RAK3172_btn_adr").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_adr").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+CLASS=C", "OK")
        $("#RAK3172_btn_class").removeClass('btn-success')
        $("#RAK3172_btn_class").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_class").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+BAND=6", "OK")
        $("#RAK3172_btn_band").removeClass('btn-success')
        $("#RAK3172_btn_band").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_band").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+MASK=0001", "OK")
        $("#RAK3172_btn_mask").removeClass('btn-success')
        $("#RAK3172_btn_mask").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_mask").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+CFM=0", "OK")
        $("#RAK3172_btn_cfm").removeClass('btn-success')
        $("#RAK3172_btn_cfm").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_cfm").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+ADDMULC=C:01020304:01020304050607080910111213141516:01020304050607080910111213141516:915000000:0", "OK")
        $("#RAK3172_btn_multicast").removeClass('btn-success')
        $("#RAK3172_btn_multicast").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_multicast").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("AT+JOIN=1:1:8:255", "OK")
        $("#RAK3172_btn_join").removeClass('btn-success')
        $("#RAK3172_btn_join").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_join").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    $('#txt_payload').val("")
    if (result) {
        result = await writePort_awaitResponse("ATZ", "LoRaWAN", 1000)
        $("#RAK3172_btn_reset").removeClass('btn-success')
        $("#RAK3172_btn_reset").addClass('btn-primary')
    } else {
        $("#RAK3172_btn_reset").addClass('btn-danger')
        $("#RAK3172_btn_config").addClass('btn-success')
    }
    console.log(result)

    if (result) {
        setTimeout(() => {
            $('#txt_payload').val("Trying to Join... \n\n");
        }, 500)
    }





    let interval;
    interval = setInterval(() => {
        awaitResponse("+EVT:JOINED", 400).then((result) => {
            console.log(result)
            if (result) {
                $('#txt_payload').val("Joined...\n\n")

                $("#RAK3172_btn_send").removeClass('btn-success')
                $("#RAK3172_btn_send").addClass('btn-primary')

                clearInterval(interval)
                RAK3172_FIRST_SEND()
            }
        })

    }, 500)
}

var count2 = 0;
var timer2 = 0
var intervalSimulator;

const getRandom = (ref, p) => Math.trunc(ref * (2 * p * Math.random() + 1 - p))

const toHex = (number, bytes) => {
    let hex = Math.trunc(number).toString(16).split('').reverse()
    let arr = new Array(2 * bytes).fill(0).map((x, idx) => hex[idx] ? hex[idx] : '0').reverse().join('')
    return arr.toUpperCase()
}

const getRandomPayload = () => {
    /* 
    ○ Timestamp (4 bytes)
    ○ Energía activa actual (2 bytes)
    ○ Energía activa totalizada (4 bytes)
    ○ Voltaje actual (2 bytes)
    ○ Corriente actual (2 bytes)
    ○ Potencia activa actual (2 bytes)
    ○ Factor de potencia actual (2 bytes)
    ○ Temperatura ambiente de la fotocelda (2 bytes)
    ○ Iluminancia actual (2 bytes)
    ○ Dimerización actual (1 byte)
    ○ Estado de la fotocelda (1 byte)
    */
    let timestamp = Math.trunc(new Date().getTime() / 1000);
    let energy = 0
    let energy_total = 0
    let volts = getRandom(24500, 0.025)
    let ampers = getRandom(330, 0.025)
    let power = Math.trunc(volts * ampers / 100000)

    let power_factor = getRandom(990, 0.01)
    power_factor = power_factor >> 15 ? 1 - (power_factor & parseInt('0x7FFF', 16)) / 1000 : power_factor / 10

    let temperature = getRandom(1, 0.025)
    let illuminance = getRandom(1, 0.025)
    let dimmer = 100
    let stat = 0x16

    let payload = toHex(timestamp, 4)
        + toHex(energy, 2)
        + toHex(energy_total, 4)
        + toHex(volts, 2)
        + toHex(ampers, 2)
        + toHex(power, 2)
        + toHex(power_factor, 2)
        + toHex(temperature, 2)
        + toHex(illuminance, 2)
        + toHex(dimmer, 1)
        + toHex(stat, 1)

    return payload
}


const RAK3172_SIMULATOR_START = (t) => {
    let payload = "AT+SEND=2:" + getRandomPayload()
    let time = Math.trunc($('#rak3172_txt_simulator_time').val())

    let error = false

    if (time < 1) error = true;
    if (time > 3600) error = true;

    if (!error) {

        $('#rak3172_txt_simulator_time').prop("disabled", true);

        $('#rak3172_btn_setInterval').addClass("d-none");
        $('#rak3172_btn_clearInterval').removeClass("d-none");

        $('#txt_payload').val($('#txt_payload').val() + "\n****************************************");
        $('#txt_payload').val($('#txt_payload').val() + "\nSTARTED TELELAMP SIMULATOR\n\n- Time: " + time)
        $('#txt_payload').val($('#txt_payload').val() + "\n****************************************");
        $('#txt_payload').val($('#txt_payload').val() + "\n\n");

        writePort(payload);
        console.log("Interval: " + count2++);

        timer2 = time;

        intervalSimulator = setInterval(function () {
            count2++;
            timer2--;

            $('#rak3172_txt_simulator_time').val(timer2 + 1)

            if (timer2 == -1) {
                console.log("Interval: " + count2);
                $('#rak3172_txt_simulator_time').val("SEND")

                timer2 = time;
                let payload = "AT+SEND=2:" + getRandomPayload()
                writePort(payload);
            }
        }, 1000);
    }

}


const RAK3172_SIMULATOR_STOP = () => {
    clearInterval(intervalSimulator)
    $('#rak3172_btn_clearInterval').addClass("d-none");
    $('#rak3172_btn_setInterval').removeClass("d-none");
    $('#rak3172_txt_simulator_time').prop("disabled", false);
}


/* ******************** */
/* EG915 PANEL COMMANDS */
/* ******************** */

let btn_collapse_EG915 = document.getElementById("btn_collapse_EG915")
btn_collapse_EG915.addEventListener("click", () => document.getElementById("card_EG915").classList.toggle("d-none"))

//Basic Config
const EG915_ATE0 = () => writePort("ATE0")
const EG915_CFUN0 = () => writePort("AT+CFUN=0")
const EG915_QCFG = () => writePort("AT+QCFG=\"nwscanmode\",3,1")
const EG915_QICSGP = () => writePort("AT+QICSGP=1,1,\"linksnet\",\"\",\"\",1")
const EG915_CFUN1 = () => writePort("AT+CFUN=1")
const EG915_QIACT = () => writePort("AT+QIACT=1")

//AWS Certs Storage
const EG915_QFUPL_UPLOAD = () => $('#inputFile').click();
const EG915_QFDEL = () => writePort("AT+QFDEL=\"*\"")
const EG915_QFUPL_CACERT = () => writePort("AT+QFUPL=\"cacert.pem\",1188,1000")
const EG915_QFUPL_CLIENT = () => writePort("AT+QFUPL=\"client.pem\",1224,1000")
const EG915_QFUPL_USER = () => writePort("AT+QFUPL=\"user_key.pem\",1675,1000")
const EG915_QFLST = () => writePort("AT+QFLST=\"*\"")

var file = "";
const EG915_readfile = () => {
    let file = document.getElementById("inputFile").files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (evt) => {
            file = evt.target.result
            writePort(file)
        };
        reader.onerror = (evt) => {
            console.error(evt)
        };
    }

}

//Securuty Keys Config
const EG915_QSSLCFG_CACERT = () => writePort("AT+QSSLCFG=\"cacert\",0,\"cacert.pem\"")
const EG915_QSSLCFG_CLIENT = () => writePort("AT+QSSLCFG=\"clientcert\",0,\"client.pem\"")
const EG915_QSSLCFG_USER = () => writePort("AT+QSSLCFG=\"clientkey\",0,\"user_key.pem\"")
const EG915_QSSLCFG_SECLEVEL = () => writePort("AT+QSSLCFG=\"seclevel\",0,2")
const EG915_QSSLCFG_SSLVERSION = () => writePort("AT+QSSLCFG=\"sslversion\",0,4")
const EG915_QSSLCFG_CIPHERSUITE = () => writePort("AT+QSSLCFG=\"ciphersuite\",0,0xFFFF")
const EG915_QSSLCFG_IGNORELOCALTIME = () => writePort("AT+QSSLCFG=\"ignorelocaltime\",0,1")

//SSL Configuration
const EG915_SSL = () => writePort("AT+QMTCFG=\"ssl\",0,1,0")

//MQTT Configuration
const EG915_MQTT_VER = () => writePort("AT+QMTCFG=\"version\",0,4")
const EG915_MQTT_OPEN = () => writePort("AT+QMTOPEN=0,\"a1uojn2ol3d07z-ats.iot.us-west-2.amazonaws.com\",8883")
const EG915_MQTT_CONN = () => writePort("AT+QMTCONN=0,\"EG915\"")
const EG915_MQTT_SUB = () => writePort("AT+QMTSUB=0,1,\"Telelamp/EG915\",0")

//MQTT Publish Data
const EG915_MQTT_PUB = () => writePort("AT+QMTPUB=0,1,1,0,\"Telelamp/EG915\"")
const EG915_sendMQTT = () => writePort($("#txt_EG915_Send").val() + String.fromCharCode(0x1A))    //  0x1A  ==> Ctrl+Z
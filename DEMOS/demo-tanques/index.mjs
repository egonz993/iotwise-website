import { FirebaseApp } from "./firebase.mjs";

export const handler = async (event) => {

    const data = { ...event, id: 1, timestamp: new Date().getTime() };
    console.log({ data });

    await FirebaseApp.database().ref("test").push(data, (e) => {
        if (e) console.log(e);
        else console.log('Complete!');
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ ok: true })
    };
};
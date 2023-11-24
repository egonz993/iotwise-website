import { FirebaseApp } from "./firebase.service"
import { getDatabase, ref, child, set, get, update, remove, push, onValue, off } from "firebase/database";

const database = getDatabase(FirebaseApp);

const Database = []

Database.set = (_ref, value) => {
    return new Promise(async (resolve) => {
        const database_ref = ref(database, `${_ref}`);

        try {
            await set(database_ref, value)
            resolve(true)
        } catch (error) {
            resolve(error)
        }
    })
}

Database.get = (_ref) => {
    return new Promise(async (resolve) => {
        const database_ref = ref(database);

        try {
            let data = await get(child(database_ref, `${_ref}`));
            resolve(data.val())
        } catch (error) {
            resolve(false)
        }
    })
}

Database.push = (_ref, value) => {
    return new Promise(async (resolve) => {
        const database_ref = ref(database);
        const key = push(child(database_ref, `${_ref}`)).key;
        const updates = {};
        updates[`/${_ref}/` + key] = value;

        try {
            await update(database_ref, updates);
            resolve(true)
        } catch (error) {
            resolve(false)
        }
    })
}

Database.update = (_ref, value) => {
    return new Promise(async (resolve) => {
        const database_ref = ref(database);
        const updates = {};
        updates[`/${_ref}/`] = value;

        try {
            await update(database_ref, updates);
            resolve(true)
        } catch (error) {
            resolve(false)
        }
    })
}

Database.remove = (_ref) => {
    return new Promise(async (resolve) => {
        const database_ref = ref(database, `${_ref}`);

        try {
            await remove(database_ref)
            resolve(true)
        } catch (error) {
            resolve(false)
        }
    })
}

Database.onValue = (_ref, callback) => {
    const database_ref = ref(database, `${_ref}`);

    onValue(database_ref, (snapshot) => {
        const data = snapshot.val();
        callback(data)
    });
}

Database.off = (_ref) => {
    return new Promise((resolve) => {
        const database_ref = ref(database, `${_ref}`);

        try {
            off(database_ref)
            resolve(true)
        } catch (error) {
            resolve(false)
        }
    })
}

export { Database }
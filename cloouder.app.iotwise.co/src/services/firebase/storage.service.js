import { FirebaseApp } from "./firebase.service"
import { getStorage, ref, uploadBytes, listAll, getBlob } from "firebase/storage";

const storage = getStorage(FirebaseApp);

const Storage = []

Storage.upload = async (name, json) => {

    const jsonString = JSON.stringify(json)

    const blob = new Blob([jsonString], { type: "application/json" })

    const storageRef = ref(storage, `datalog-devices/${name}`);

    try {
        await uploadBytes(storageRef, blob)
        return true
    } catch (error) {
        console.log(error)
        return false        
    }
}

Storage.listFiles = async (_ref) => {
    const listRef = ref(storage, _ref);
    let files = []
    
    try {
        let res = await listAll(listRef)
        res.items.forEach((itemRef) => {
            files.push(itemRef._location.path)
        });
        return files

    } catch (error) {
        return false
    }
}

Storage.download = async (_ref) => {
    const storageRef = ref(storage, _ref);
    let blob = getBlob(storageRef)
    return blob
}




export { Storage }
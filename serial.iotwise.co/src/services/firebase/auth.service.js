import { FirebaseApp } from "./firebase.service"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth"

const auth = getAuth(FirebaseApp)

// Singleton Class
export class Auth {

    static instance = null
    static getInstance() {
        if (Auth.instance === null) {
            Auth.instance = new Auth()
        }
        return Auth.instance
    }

    constructor() {
        this.auth = auth
    }

    
    /**
     * Handle Function for Auth State Change
     * 
     * @param {function} callback 
     */
    onAuthStateChanged = (callback) => {
        this.auth.onAuthStateChanged((user) => callback(user))
    }


    /**
     * Create a new user with email and password
     * 
     * @param {string} email     Email of the user
     * @param {string} password  Password of the user
     */
    createUserWithEmailAndPassword = async (email, password) => {

        return await new Promise((resolve) => {
            createUserWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    resolve(userCredential.user)
                })
                .catch((error) => {
                    resolve(error)
                });
        })
    }


    /**
     * Sign in with email and password
     * 
     * @param {string} email     Email of the user
     * @param {string} password  Password of the user
     */
    signInWithEmailAndPassword = async (email, password) => {

        return await new Promise((resolve) => {
            signInWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    resolve(userCredential.user)
                })
                .catch((error) => {
                    resolve(error)
                });
        })
    }

    /**
     * Sign out
     * 
     * @returns {Promise}  Promise
     */
    signOut = async () => {
        return await new Promise((resolve) => {
            this.auth.signOut().then(() => {
                this.isAuth = false
                resolve(true)
            }).catch((error) => {
                resolve(error)
            });
        })
    }

    /**
     * sendPasswordResetEmail
     * 
     * @param {string} email     Email of the user
     */
    sendPasswordResetEmail = async (email) => {
        new Promise((resolve) => {
            sendPasswordResetEmail(auth, email).then(() => {
                resolve(true)
            }).catch((error) => {
                resolve(error)
            });
        })
    }
}
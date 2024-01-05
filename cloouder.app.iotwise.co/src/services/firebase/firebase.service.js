// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6TqKz0EF4a0IuRsjC7OsTmDkrasKu5ss",
  authDomain: "iotwise.firebaseapp.com",
  // databaseURL: "https://iotwise.firebaseio.com/",
  databaseURL: "https://iotwise-default-rtdb.firebaseio.com",
  projectId: "iotwise",
  storageBucket: "iotwise.appspot.com",
  messagingSenderId: "223260555512",
  appId: "1:223260555512:web:08aea5e7ba19c0134fa30d",
  measurementId: "G-MSEESG8F1P"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAnalytics = getAnalytics(FirebaseApp);

export {FirebaseApp, FirebaseAnalytics} 
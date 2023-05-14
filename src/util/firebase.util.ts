// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(`"${process.env.REACT_APP_API_KEY}"`)
// const firebaseConfig = {
//   apiKey: "AIzaSyDKA3OVdvEA0h0yW_TjcK62e7IMJGUL6WU",
//   authDomain: "invoice-web-app-49c35.firebaseapp.com",
//   databaseURL: "https://invoice-web-app-49c35-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "invoice-web-app-49c35",
//   storageBucket: "invoice-web-app-49c35.appspot.com",
//   messagingSenderId: "527001125873",
//   appId: "1:527001125873:web:e8ee0533e1c881f29efa50"
// };
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_ID,
  databaseURL: import.meta.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getDatabase();

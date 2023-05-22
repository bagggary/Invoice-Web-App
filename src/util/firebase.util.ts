// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import Data from "../assets/Data.json";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_ID,
  databaseURL: import.meta.env.REACT_APP_DATABASE_URL,
};

export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getDatabase();

export const createDocumentFromUserAuth = async (userId: string | null) => {
  const userDocRef = ref(db, `user/${userId}`);
  onValue(userDocRef, async (snapshot) => {
    console.log(snapshot.exists());
    if (!snapshot.exists()) {
      try {
        await set(userDocRef, { Data });
      } catch (error) {
        console.error("user Created Error ", error);
      }
    }
    const userData = snapshot.val();
    return userData;
  });
};

export const signOutUser = async () => {
  return await signOut(Auth);
};

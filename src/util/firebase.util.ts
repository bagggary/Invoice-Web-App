// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";
import Data from "../assets/Data.json";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../store/user/user.selector";
import { store } from "../store/store";

import { FormValues } from "../components/types/types";
import firebase from "firebase/compat/app";

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

export const createDocumentFromUserAuth = async (user: any) => {
  if (!user) return;
  const { uid } = user;
  const userDocRef = ref(db, `user/${uid}`);
  try {
    const snapshot = await get(userDocRef);
    if (!snapshot.exists()) {
      await set(userDocRef, { Data });
    }
  } catch (error) {
    console.error("user Created Error ", error);
  }
  return userDocRef;
};

export const getInvoicesAndDocument = async (): Promise<
  | {
      Data: any[];
      uid?: string;
    }
  | FormValues[]
> => {
  return new Promise((resolve, reject) => {
    const { currentUser } = store.getState().user;
    if (!currentUser) {
      reject("no user found");
    }
    const { uid } = currentUser;
    const userRef = ref(db, `user/${uid}`);
    let reconstructureData: FormValues[] = [];

    onValue(
      userRef,
      (snapshot) => {
        // resolve(snapshot.val());
        const { Data } = snapshot.val();
        if (Array.isArray(Data)) {
          reconstructureData = Data;
        } else if (typeof Data === "object") {
          Object.keys(Data).forEach((key) => {
            reconstructureData.push(Data[key]);
          });
        }
        resolve(reconstructureData);
      },
      (error) => {
        reject(error);
        console.log(error);
      }
    );
  });
};

export const deleteFromDatabase = (id: string, userId: string) => {
  try {
    let data;
    const { currentUser } = store.getState().user;
    const { uid } = currentUser;
    const userRef = ref(db, `user/${uid}`);
    let dataKey;
    onValue(userRef, (snapshot) => {
      const { Data } = snapshot.val();
      data = Data;
    });
    Object.entries(data).filter(([key, value]: any) => {
      if (value.id === id) {
        dataKey = key;
      }
    });
    remove(ref(db, `user/${userId}/Data/${dataKey}`));
  } catch (e) {
    console.log("error :", e);
  }
};

export const formatDataToDatabase = async (dataToFormat, userId) => {
  try {
    await set(ref(db, `user/${userId}`), dataToFormat);
  } catch (error: Error | unknown) {
    console.log("error : ", error);
  }
};

export const writeDataToDatabase = async (newData, userId) => {
  try {
    let defaultData: any = await getInvoicesAndDocument();

    if (!defaultData) {
      defaultData = [];
    }
    defaultData.push(newData);

    await set(ref(db, `user/${userId}/Data`), defaultData);
    console.log("Previous Data Coming from the Database", defaultData);
    console.log("New data to be added", newData);

    // console.log("Data written to the database successfully!");
  } catch (e) {
    console.error("Error writing data to the database:", e);
  }
};

export const signOutUser = async () => await signOut(Auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(Auth, callback);

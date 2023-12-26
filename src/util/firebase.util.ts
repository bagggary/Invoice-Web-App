import { initializeApp } from "firebase/app";
import {
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  get,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import Data from "../assets/Data.json";

import { store } from "../store/store";

import { FormValues } from "../components/types/types";

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
    let filteredData;

    onValue(
      userRef,
      (snapshot) => {
        // resolve(snapshot.val());
        const { Data } = snapshot.val();
        if (Array.isArray(Data)) {
          reconstructureData = Data;
        } else if (typeof Data === "object") {
          reconstructureData = Object.values(Data);
        }
        filteredData = reconstructureData.filter((p) => p);
        resolve(filteredData);
      },
      (error) => {
        reject(error);
        console.log("error :", error);
      }
    );
  });
};

export const deleteFromDatabase = async (id: string, userId: string) => {
  try {
    const { currentUser } = store.getState().user;
    const { uid } = currentUser;
    const userRef = ref(db, `user/${uid}`);
    const snapshot = await get(userRef);
    const { Data } = snapshot.val();
    let dataKey: string | undefined;
    // onValue(userRef, (snapshot) => {
    //   const { Data } = snapshot.val();
    //   data = Data;
    // });
    Object.entries(Data).filter(([key, value]: any) => {
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
    const invoiceListRef = ref(db, `user/${userId}/Data`);
    const newInvoiceRef = push(invoiceListRef);
    await set(newInvoiceRef, newData);

    console.log("Data written to the database successfully!");
  } catch (e) {
    console.error("Error writing data to the database:", e);
  }
};

export const signOutUser = async () => await signOut(Auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(Auth, callback);

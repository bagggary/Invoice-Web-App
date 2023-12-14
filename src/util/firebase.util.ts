// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import Data from "../assets/Data.json";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../store/user/user.selector";
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
  const existingData = await getInvoicesAndDocument();
  try {
    if (!existingData) {
      await set(userDocRef, { Data });
      console.log("New user data added successfully!");
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
        } else {
          reconstructureData = [];
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

export const deleteFromDatase = (index, userId) => {
  try {
    remove(ref(db, `user/${userId}/Data/${index}`));
  } catch (e) {
    console.log("error :", e);
  }
};

export const writeDataToDatabase = async (newData, userId) => {
  try {
    let defaultData: any = await getInvoicesAndDocument();

    if (!defaultData) {
      defaultData = { Data: [] };
    }
    defaultData.push(newData);

    await set(ref(db, `user/${userId}`), defaultData);

    console.log("Data written to the database successfully!");
  } catch (e) {
    console.error("Error writing data to the database:", e);
  }
};

export const signOutUser = async () => await signOut(Auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(Auth, callback);

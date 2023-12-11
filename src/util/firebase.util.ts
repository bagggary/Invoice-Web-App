// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { get, getDatabase, onValue, ref, set } from "firebase/database";
import Data from "../assets/Data.json";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../store/user/user.selector";
import { store } from "../store/store";
import { useDispatch } from "react-redux";
import { fetchInvoicesSuccess } from "../store/invoice/invoice.action";
import { useEffect } from "react";

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
export const invoicesListener = async (uid) => {
  const dispatch = useDispatch();
  const invoicesRef = ref(db, `user/${uid}`);

  const unsubscribe = onValue(invoicesRef, (snapshot) => {
    const invoicesData = snapshot.val();
    dispatch(fetchInvoicesSuccess(invoicesData));
  });

  return unsubscribe;
};

export const getInvoicesAndDocument = async (): Promise<{
  Data: any[];
  uid?: string;
}> => {
  return new Promise((resolve, reject) => {
    const { currentUser } = store.getState().user;
    if (!currentUser) {
      reject("no user found");
    }
    const { uid } = currentUser;
    const userRef = ref(db, `user/${uid}`);

    onValue(
      userRef,
      (snapshot) => {
        resolve(snapshot.val());
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const writeDataToDatabase = async (newData, userId) => {
  try {
    let defaultData = await getInvoicesAndDocument();

    if (!defaultData) {
      defaultData = { Data: [] };
    }

    defaultData.Data.push(newData);

    await set(ref(db, `user/${userId}`), defaultData);

    console.log("Data written to the database successfully!");
  } catch (e) {
    console.error("Error writing data to the database:", e);
  }
};

export const signOutUser = async () => await signOut(Auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(Auth, callback);

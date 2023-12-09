import { useEffect } from "react";
import Authentication from "./routes/Authentication/Authentication.component";
import "./index.css";
import {
  createDocumentFromUserAuth,
  db,
  invoicesListener,
  onAuthStateChangedListener,
} from "./util/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main/Main.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Details from "./routes/details/Details.component";
import { ref, onValue } from "firebase/database";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleUserAuthentication = async (user) => {
      if (user) {
        await createDocumentFromUserAuth(user);
        const userDocRef = ref(db, `user/${user.uid}`);

        const unsubscribe = onValue(userDocRef, (snapshot) => {
          const data = snapshot.val();
          // If the user has data, start listening for updates
          invoicesListener(user.uid);
        });
        return unsubscribe;

        dispatch(setCurrentUser(user));
      }
    };

    const unsubscribe = onAuthStateChangedListener(handleUserAuthentication);

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [dispatch]);
  //   useEffect(() => {
  //     const handleUserAuthentication = async (user) => {
  //       if (user) {
  //         await createDocumentFromUserAuth(user);
  //         const userDocRef = ref(db, `user/${user.uid}`);
  //         // const snapshot = await get(userDocRef);
  //        on(userDocRef , 'value' , (snapshot) => [
  //         const data = snapshot.val();
  //         invoicesListener(user.uid)
  //         ])

  //         if (snapshot.exists()) {
  //           // If the user has data, start listening for updates
  //           invoicesListener(user.uid);
  //         } else {
  //           // Handle the case when a new value is created
  //           console.log("New value created:", snapshot.val());
  //           // Perform actions specific to new values
  //         }

  //         dispatch(setCurrentUser(user));
  //       }
  //     };
  // //     const userDocRef = ref(db, `user/${user.uid}`);

  // //     const unsubscribe = on(userDocRef, 'value', (snapshot) => {
  // //       const data = snapshot.val();
  // //       // If the user has data, start listening for updates
  // //       invoicesListener(user.uid);
  // //     });

  // //     dispatch(setCurrentUser(user));
  // //   }
  // // };

  //     const unsubscribe = onAuthStateChangedListener(handleUserAuthentication);

  //     return () => {
  //       // Unsubscribe when the component unmounts
  //       unsubscribe();
  //     };
  //   }, [dispatch]);

  return (
    <div className=" bg-[#F8F8FB] dark:bg-black  ">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Sidebar />}>
          <Route index element={<Main />} />
          <Route path=":Id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

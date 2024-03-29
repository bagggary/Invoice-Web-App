import { useEffect } from "react";
import Authentication from "./routes/Authentication/Authentication.component";
import "./index.css";
import {
  createDocumentFromUserAuth,
  db,
  onAuthStateChangedListener,
} from "./util/firebase.util";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main/Main.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Details from "./routes/details/Details.component";
import PrivateRoute from "./routes/Private/privateRoute";
import { onValue, ref } from "firebase/database";
import { selectCurrentUser } from "./store/user/user.selector";
import { FormValues } from "./components/types/types";
import { fetchInvoicesSuccess } from "./store/invoice/invoice.action";
import Reset from "./components/mis/reset.component";
import NotFound from "./components/mis/404.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createDocumentFromUserAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const userRef = ref(db, `user/${user && user.uid}`);
    let updatedData: FormValues[] = [];
    let filteredData: FormValues[] | [];
    const unsubscribe = onValue(userRef, (snapshot) => {
      const { Data } = snapshot.val();
      console.log("data from snapshot", Data);
      if (Data) {
        if (Array.isArray(Data)) {
          updatedData = Data;
        } else if (typeof Data === "object") {
          updatedData = Object.values(Data);
        }
        filteredData = updatedData.filter((p) => p);
        dispatch(fetchInvoicesSuccess(filteredData));
      } else {
        dispatch(fetchInvoicesSuccess([]));
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className=" bg-[#F8F8FB] dark:bg-black  ">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>
          }
        >
          <Route index element={<Main />} />
          <Route
            path=":Id"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/resetPassword" element={<Reset />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

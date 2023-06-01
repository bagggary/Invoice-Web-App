import { useEffect } from "react";
import Authentication from "./routes/Authentication/Authentication.component";
import "./index.css";
import {
  createDocumentFromUserAuth,
  onAuthStateChangedListener,
} from "./util/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main/Main.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createDocumentFromUserAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  );
}

export default App;

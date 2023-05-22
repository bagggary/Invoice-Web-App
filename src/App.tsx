import { useEffect } from "react";
import Authentication from "./components/Authentication/Authentication.component";
import "./index.css";
import {
  createDocumentFromUserAuth,
  onAuthStateChangedListener,
} from "./util/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log(user);
        createDocumentFromUserAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return <Authentication />;
}

export default App;

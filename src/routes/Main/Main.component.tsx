import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoadingData } from "../../store/invoice/invoice.selector";

import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";
import Home from "../../components/home/home.component";
import { db } from "../../util/firebase.util";
import { onValue, ref } from "firebase/database";
import { fetchInvoicesSuccess } from "../../store/invoice/invoice.action";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   dispatch(clearInvoices());
  //   navigate("/");
  // };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const unsubscribe = () => {
      const userRef = ref(db, `user/${user.uid}`);
      const unsubscribe = onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(fetchInvoicesSuccess(data));
      });
      return unsubscribe;
    };

    return () => {
      unsubscribe();
    };
  }, []);

  return <Home />;
};
export default Main;

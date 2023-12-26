import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoadingData } from "../../store/invoice/invoice.selector";

import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";
import Home from "../../components/home/home.component";
import { db } from "../../util/firebase.util";
import { onValue, ref } from "firebase/database";
import { fetchInvoicesSuccess } from "../../store/invoice/invoice.action";
import { FormValues } from "../../components/types/types";

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
      let updatedData: FormValues[] = [];
      let filteredData;
      const unsubscribe = onValue(userRef, (snapshot) => {
        const { Data } = snapshot.val();
        if (Array.isArray(Data)) {
          updatedData = Data;
        } else if (typeof Data === "object") {
          updatedData = Object.values(Data);
        }
        filteredData = updatedData.filter((p) => p);
        dispatch(fetchInvoicesSuccess(filteredData));
        // console.log(filteredData);
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

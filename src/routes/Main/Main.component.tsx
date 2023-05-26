import { useDispatch, useSelector } from "react-redux";
import {
  selectInvoicesData,
  selectIsLoadingData,
} from "../../store/invoice/invoice.selector";
import { signOutUser } from "../../util/firebase.util";
import { clearInvoices } from "../../store/invoice/invoice.action";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Loading = useSelector(selectIsLoadingData);
  const Data = useSelector(selectInvoicesData);
  const user = useSelector(selectCurrentUser);
  const signOutHandler = async () => {
    await signOutUser();
    dispatch(clearInvoices());
    navigate("/");
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      {Loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <button
            onClick={signOutHandler}
            type="button"
            className="p-2 bg-teal-500 rounded-md m-4"
          >
            Sign Out
          </button>
          Data:
          <pre>{JSON.stringify(Data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Main;

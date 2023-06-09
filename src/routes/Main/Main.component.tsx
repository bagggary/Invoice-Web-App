import { useSelector } from "react-redux";
// import { selectIsLoadingData } from "../../store/invoice/invoice.selector";

import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";
import Home from "../../components/home/home.component";
import { Outlet } from "react-router-dom";

const Main = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const Loading = useSelector(selectIsLoadingData);
  // const Data = useSelector(selectInvoicesData);
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
  }, []);
  return (
    <>
      <Outlet />
      <Home />
    </>
  );
};
export default Main;

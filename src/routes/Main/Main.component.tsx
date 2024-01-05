import { useEffect } from "react";
import Home from "../../components/home/home.component";

const Main = () => {
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   dispatch(clearInvoices());
  //   navigate("/");
  // };

  useEffect(() => {
    document.title = "Home | Invoice App";
  }, []);

  return <Home />;
};
export default Main;

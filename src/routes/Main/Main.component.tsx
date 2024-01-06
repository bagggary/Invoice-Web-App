import { useEffect } from "react";
import Home from "../../components/home/home.component";

const Main = () => {
  useEffect(() => {
    document.title = "Home | Invoice App";
  }, []);

  return <Home />;
};
export default Main;

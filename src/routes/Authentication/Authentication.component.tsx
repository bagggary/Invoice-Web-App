import SignUp from "../../components/SignUp/Signup.component";
import SignIn from "../../components/SignIn/SignIn.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../util/firebase.util";
import { clearInvoices } from "../../store/invoice/invoice.action";

const Authentication = () => {
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(clearInvoices());
  };

  useEffect(() => {
    signOutHandler();
  }, []);

  console.log("render from authentication component");

  return (
    <>
      <div className="flex w-full ">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Authentication;

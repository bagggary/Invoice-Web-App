import SignUp from "../../components/SignUp/Signup.component";
import SignIn from "../../components/SignIn/SignIn.component";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../util/firebase.util";
import { clearInvoices } from "../../store/invoice/invoice.action";
import logo from "../../assets/logo.svg";

const Authentication = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(clearInvoices());
  };

  useEffect(() => {
    signOutHandler();
  }, []);
  return (
    <div className=" bg-auth bg-cover bg-no-repeat bg-blend-multiply bg-primary ">
      <div className=" flex flex-col gap-4 items-center justify-center h-screen transition-opacity">
        <img src={logo} alt="invoice app logo" className="w-auto h-10" />
        <div className=" p-8 backdrop-blur-3xle  rounded shadow-lg transition-all duration-300">
          <div className="tabs">
            <input
              type="radio"
              id="signin"
              name="login-methods"
              value="signin"
              onClick={() => setLoginStatus(true)}
            />
            <label htmlFor="signin">Sign in</label>
            <input
              type="radio"
              id="signup"
              name="login-methods"
              value="signup"
              onClick={() => setLoginStatus(false)}
            />
            <label htmlFor="signup">Sign up</label>
          </div>
          {loginStatus ? (
            <SignIn status={loginStatus} setStatus={setLoginStatus} />
          ) : (
            <SignUp status={loginStatus} setStatus={setLoginStatus} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;

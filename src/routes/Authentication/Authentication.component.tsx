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
          <div
            className={`flex relative items-center justify-center mt-6 after:transition-all after:absolute after:w-1/4 after:h-[2px] ${
              loginStatus ? "after:-translate-x-11 " : "after:translate-x-11 "
            }  after:bottom-0 after:bg-primary after:duration-300 after:ease-linear`}
          >
            <div
              className={`w-1/3 pb-4 cursor-pointer ${
                loginStatus
                  ? "text-black-1 dark:text-gray-300"
                  : " text-gray-500 dark:text-gray-300"
              }  p-4 font-medium text-center capitalize`}
              onClick={() => setLoginStatus(true)}
            >
              sign in
            </div>
            <div
              className={`w-1/3 pb-4 cursor-pointer ${
                !loginStatus
                  ? "text-black-1 dark:text-gray-300"
                  : " text-gray-500 dark:text-gray-300"
              }   p-4 font-medium text-center capitalize `}
              onClick={() => setLoginStatus(false)}
            >
              sign up
            </div>
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
{
  /* // <>
//   <div className="flex w-full ">
//     <SignIn />
//     <SignUp />
//   </div>
// </> */
}

{
  /* <form className="w-full max-w-md">

<div className="relative flex items-center mt-8">
  <span className="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </span>

  <input
    type="text"
    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Username"
  />
</div>

<label
  id="dropzone-file"
  className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-300 dark:text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>

  <h2 className="mx-3 text-gray-400">Profile Photo</h2>

  <input id="dropzone-file" type="file" className="hidden" />
</label>

<div className="relative flex items-center mt-6">
  <span className="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </span>

  <input
    type="email"
    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Email address"
  />
</div>

<div className="relative flex items-center mt-4">
  <span className="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  </span>

  <input
    type="password"
    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Password"
  />
</div>

<div className="relative flex items-center mt-4">
  <span className="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  </span>

  <input
    type="password"
    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Confirm Password"
  />
</div>

<div className="mt-6">
  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    Sign Up
  </button>

  <div className="mt-6 text-center ">
    <a className="text-sm text-blue-500 hover:underline dark:text-blue-400">
      Already have an account?
    </a>
  </div>
</div>
</form> */
}

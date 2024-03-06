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
          <div className="tabs has-[input:nth-of-type(1)] relative grid h-12 auto-cols-fr grid-flow-col rounded-lg border-4 border-black bg-black after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[calc(100%/var(--count,3))] after:translate-x-[calc(var(--active,0)*100%)] after:rounded-md after:bg-white after:mix-blend-difference after:outline after:outline-2 after:outline-transparent after:transition-[transform,outline] after:duration-200 after:content-[''] has-[input:nth-of-type(2)]:[--count:2] has-[input:nth-of-type(3)]:[--count:3] has-[:checked:nth-of-type(1)]:[--active:0] has-[:checked:nth-of-type(2)]:[--active:1] has-[:checked:nth-of-type(3)]:[--active:2] has-[:focus-visible]:after:outline-red-500">
            <input
              type="radio"
              id="htmlTwo"
              name="fav_language_two"
              value="HTMLTwo"
              className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
            />
            <label
              htmlFor="htmlTwo"
              className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
            >
              HTML
            </label>
            <input
              type="radio"
              id="cssTwo"
              name="fav_language_two"
              value="CSSTwo"
              className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
            />
            <label
              htmlFor="cssTwo"
              className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
            >
              CSS
            </label>
          </div>
          {/* <div
            className={`flex relative items-center justify-center mt-6 after:transition-all after:absolute after:w-1/4 after:h-[2px] ${
              loginStatus ? "after:-translate-x-11 " : "after:translate-x-11 "
            }  after:bottom-0 after:bg-primary after:duration-300 after:ease-linear`}
          > */}
          {/* <div className=" tabs has-[input:nth-of-type(1)] relative grid h-12 auto-cols-fr grid-flow-col rounded-lg border-4 border-black bg-black after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[calc(100%/var(--count,3))] after:translate-x-[calc(var(--active,0)*100%)] after:rounded-md after:bg-white after:mix-blend-difference after:outline after:outline-2 after:outline-transparent after:transition-[transform,outline] after:duration-200 after:content-[''] has-[input:nth-of-type(2)]:[--count:2] has-[input:nth-of-type(3)]:[--count:3] has-[:checked:nth-of-type(1)]:[--active:0] has-[:checked:nth-of-type(2)]:[--active:1] has-[:checked:nth-of-type(3)]:[--active:2] has-[:focus-visible]:after:outline-red-500"> */}
          {/* <div
              className={`w-1/3 pb-4 cursor-pointer ${
                loginStatus
                  ? "text-black-1 dark:text-gray-300"
                  : " text-gray-500 dark:text-gray-300"
              }  p-4 font-medium text-center capitalize`}
              onClick={() => setLoginStatus(true)}
            >
              sign in
            </div> */}
          {/* <input
              type="radio"
              id="signin"
              name="login-methods"
              value="signin"
              onClick={() => setLoginStatus(true)}
              className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
            /> */}
          {/* <label
              htmlFor="signin"
              className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
            > */}
          {/* Sgin in
            </label>
            <input
              type="radio"
              id="signup"
              name="login-methods"
              value="signup"
              onClick={() => setLoginStatus(false)}
              className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
            />
            <label
              htmlFor="signup"
              className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
            >
              Sign up
            </label> */}

          {/* <div
              className={`w-1/3 pb-4 cursor-pointer ${
                !loginStatus
                  ? "text-black-1 dark:text-gray-300"
                  : " text-gray-500 dark:text-gray-300"
              }   p-4 font-medium text-center capitalize `}
              onClick={() => setLoginStatus(false)}
            >
              sign up
            </div> */}
          {/* </div> */}
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

//  <div className="tabs has-[input:nth-of-type(1)] relative grid h-12 auto-cols-fr grid-flow-col rounded-lg border-4 border-black bg-black after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[calc(100%/var(--count,3))] after:translate-x-[calc(var(--active,0)*100%)] after:rounded-md after:bg-white after:mix-blend-difference after:outline after:outline-2 after:outline-transparent after:transition-[transform,outline] after:duration-200 after:content-[''] has-[input:nth-of-type(2)]:[--count:2] has-[input:nth-of-type(3)]:[--count:3] has-[:checked:nth-of-type(1)]:[--active:0] has-[:checked:nth-of-type(2)]:[--active:1] has-[:checked:nth-of-type(3)]:[--active:2] has-[:focus-visible]:after:outline-red-500">
//         <input
//           type="radio"
//           id="htmlTwo"
//           name="fav_language_two"
//           value="HTMLTwo"
//           className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
//         />
//         <label
//           htmlFor="htmlTwo"
//           className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
//         >
//           HTML
//         </label>
//         <input
//           type="radio"
//           id="cssTwo"
//           name="fav_language_two"
//           value="CSSTwo"
//           className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
//         />
//         <label
//           htmlFor="cssTwo"
//           className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
//         >
//           CSS
//         </label>
//       </div>

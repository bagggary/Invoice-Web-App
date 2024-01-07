import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth, createDocumentFromUserAuth } from "../../util/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { fetchInvoicesStart } from "../../store/invoice/invoice.action";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignIn = ({
  status,
  setStatus,
}: {
  status: boolean;
  setStatus: (status: boolean) => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  type SignInTypes = {
    email: string;
    password: string;
  };
  const defaultFields: SignInTypes = {
    email: "",
    password: "",
  };
  const [signInForm, setSignInForm] = useState(defaultFields);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetFormFields = () => {
    setSignInForm(defaultFields);
  };

  const sumbitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = signInForm;
    try {
      const { user } = await signInWithEmailAndPassword(Auth, email, password);
      dispatch(setCurrentUser(user));
      navigate("/home");
      await createDocumentFromUserAuth(user);
      dispatch(fetchInvoicesStart());
    } catch (error) {
      console.error(error);
    }
    resetFormFields();
  };

  return (
    <form
      className={`space-y-4 md:space-y-6 transition-opacity duration-300 ease-in-out ${
        status ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex items-center mt-8">
        <MdOutlineEmail className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 " />
        <input
          type="email"
          name="Email"
          id="email"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email"
        />
      </div>
      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 " />
        <input
          type="password"
          name="password"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          id="password"
        />
      </div>

      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-gray-300"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="button"
        className="w-full text-white  bg-primary hover:bg-secondry   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-secondry  cursor-pointer"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <div
          className="font-medium text-primary hover:underline dark:text-primary-500 cursor-pointer "
          onClick={() => setStatus(!status)}
        >
          Sign up
        </div>
      </p>
    </form>
  );
};
export default SignIn;

{
  /* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
<a
  href="#"
  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
>
  <img
    className="w-8 h-8 mr-2"
    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
    alt="logo"
  />
  Flowbite
</a>
<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Sign In
    </h1>
    <form
      className="space-y-4 md:space-y-6"
      action="#"
      onSubmit={(e) => sumbitHandler(e)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          onChange={(e) => changeHandler(e)}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          onChange={(e) => changeHandler(e)}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign In
      </button>
    </form>
  </div>
</div>
</div> */
}

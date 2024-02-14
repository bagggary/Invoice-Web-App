import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth, createDocumentFromUserAuth } from "../../util/firebase.util";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { fetchInvoicesStart } from "../../store/invoice/invoice.action";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Alert from "../mis/alert.component";

const SignIn = ({
  status,
  setStatus,
}: {
  status: boolean;
  setStatus: (status: boolean) => void;
}) => {
  const [alert, setAlert] = useState({
    success: "",
    failed: "",
  });
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
    setAlert({
      success: "",
      failed: "",
    });
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

  const sumbitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = signInForm;
    try {
      const { user } = await signInWithEmailAndPassword(Auth, email, password);
      dispatch(setCurrentUser(user));
      navigate("/home");
      await createDocumentFromUserAuth(user);
      dispatch(fetchInvoicesStart());
      resetFormFields();
    } catch (error: any) {
      console.error(error);
      setAlert((prev) => {
        return {
          ...prev,
          failed: error.message,
        };
      });
    }
  };

  return (
    <form
      className={`space-y-4 md:space-y-6 transition-opacity duration-300 ease-in-out ${
        status ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        {alert.success && <Alert type="success" message={alert.success} />}
        {alert.failed && <Alert type="failed" message={alert.failed} />}
      </div>
      <div className="relative flex items-center mt-8">
        <MdOutlineEmail className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 " />
        <input
          onChange={changeHandler}
          type="email"
          name="email"
          id="email"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email"
          value={signInForm.email}
        />
      </div>
      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 " />
        <input
          onChange={changeHandler}
          type="password"
          name="password"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          id="password"
          value={signInForm.password}
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={"/resetPassword"}
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-gray-300"
        >
          Forgot password?
        </Link>
      </div>
      <button
        type="button"
        className="w-full text-white  bg-primary hover:bg-secondry   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-secondry  cursor-pointer"
        onClick={sumbitHandler}
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

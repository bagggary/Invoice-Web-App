import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth, createDocumentFromUserAuth } from "../../util/firebase.util";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Alert from "../mis/alert.component";

const SignUp = ({
  status,
  setStatus,
}: {
  status: boolean;
  setStatus: (status: boolean) => void;
}) => {
  type FormTypes = {
    email: string;
    password: string;
    confirmPassword: string;
  };
  2;
  const defaultFormFields: FormTypes = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [alert, setAlert] = useState({
    success: "",
    failed: "",
  });

  const resetFormFields = (): void => {
    setFormFields(defaultFormFields);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAlert({
      success: "",
      failed: "",
    });
    const { value, name } = e.target;
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const { email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      setAlert((prev) => {
        return {
          ...prev,
          failed: "Password doesn't match ",
        };
      });
      return;
    }
    try {
      const createUser = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      const { user } = createUser;
      await createDocumentFromUserAuth(user);
      setAlert((prev) => {
        return {
          ...prev,
          success: "Thanks for signing up. Your account has been created",
        };
      });
    } catch (error: any) {
      console.error("unhandled Error", error);
      setAlert((prev) => {
        return {
          ...prev,
          failed: error.message,
        };
      });
    }
    resetFormFields();
  };
  return (
    <form
      className={`w-full max-w-md duration-300 transition-opacity linear ${
        !status ? "opacity-100" : "opacity-0 hidden "
      }`}
    >
      <div>
        {alert.success && <Alert type="success" message={alert.success} />}
        {alert.failed && <Alert type="failed" message={alert.failed} />}
      </div>
      <div className="relative flex items-center mt-8">
        <MdOutlineEmail className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          onChange={changeHandler}
          type="email"
          name="email"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email"
          value={formFields.email}
        />
      </div>

      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          onChange={changeHandler}
          type="password"
          name="password"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          id="password"
          value={formFields.password}
        />
      </div>

      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          onChange={changeHandler}
          type="password"
          name="confirmPassword"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={formFields.confirmPassword}
        />
      </div>

      <div className="mt-6">
        <button
          onClick={submitHandler}
          type="button"
          className="w-full text-white  bg-primary hover:bg-secondry   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-secondry  cursor-pointer"
        >
          Sign Up
        </button>

        <div className="mt-6 text-center ">
          <a
            className="text-sm text-primary hover:underline dark:text-secondry cursor-pointer"
            onClick={() => setStatus(!status)}
          >
            Already have an account?
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUp;

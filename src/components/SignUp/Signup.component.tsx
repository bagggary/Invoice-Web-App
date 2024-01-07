import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth, createDocumentFromUserAuth } from "../../util/firebase.util";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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

  const resetFormFields = (): void => {
    setFormFields(defaultFormFields);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
      alert("Password doesn't match ");
    }
    try {
      const createUser = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      const { user } = createUser;
      await createDocumentFromUserAuth(user);
    } catch (error) {
      console.error("unhandled Error", error);
    }
    resetFormFields();
  };
  return (
    <form
      className={`w-full max-w-md duration-300 transition-opacity linear ${
        !status ? "opacity-100" : "opacity-0 hidden "
      }`}
    >
      <div className="relative flex items-center mt-8">
        <MdOutlineEmail className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          type="email"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email"
        />
      </div>

      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          type="password"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          id="password"
        />
      </div>

      <div className="relative flex items-center mt-4">
        <RiLockPasswordFill className="absolute w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        <input
          type="password"
          className="block w-full  px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-primary focus:border-secondry dark:focus:border-secondry focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Confirm Password"
          id="confirmpassword"
        />
      </div>

      <div className="mt-6">
        <button className="w-full text-white  bg-primary hover:bg-secondry   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-secondry  cursor-pointer">
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

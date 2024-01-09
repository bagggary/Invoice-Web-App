import { useState } from "react";
import { useNavigate } from "react-router";
import Alert from "./alert.component";
import { resetPassword } from "../../util/firebase.util";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({
    success: "",
    failed: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlert({
      success: "",
      failed: "",
    });
    const { value } = e.target;
    setEmail(value);
  };

  const handleReset = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      if (!email) return;
      await resetPassword(email);
      setAlert((prev) => {
        return {
          ...prev,
          success:
            "Instructions have been sent to your email. Please check your inbox",
        };
      });
    } catch (e: any) {
      setAlert((prev) => {
        return {
          ...prev,
          failed: e.message,
        };
      });
    }
  };

  return (
    <div className=" bg-auth bg-cover bg-no-repeat bg-blend-multiply h-screen flex items-center justify-center bg-primary ">
      <div className=" bg-white w-auto  p-8 rounded-xl shadow ">
        <h1 className="text-2xl text-center font-medium">Reset password</h1>
        <p className="text-slate-500">Fill up the form to reset the password</p>
        <div>
          {alert.success && <Alert type="success" message={alert.success} />}
          {alert.failed && <Alert type="failed" message={alert.failed} />}
        </div>
        <form className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                onChange={changeHandler}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
                value={email}
              />
            </label>

            <button
              onClick={handleReset}
              type="button"
              className="w-full py-3 font-medium text-white bg-primary hover:bg-secondry rounded-lg border-secondry hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Reset password</span>
            </button>
            <p className="text-center">
              Not registered yet?
              <a
                className="text-primary cursor-pointer font-medium inline-flex hover:underline space-x-1 items-center"
                onClick={() => navigate("/")}
              >
                <span className=" ml-1"> Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

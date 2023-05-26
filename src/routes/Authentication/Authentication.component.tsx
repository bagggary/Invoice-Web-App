import SignUp from "../../components/SignUp/Signup.component";
import SignIn from "../../components/SignIn/SignIn.component";

const Authentication = () => {
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

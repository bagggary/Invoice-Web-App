
import SignUp from "../SignUp/Signup.component"
import SignIn from "../SignIn/SignIn.component"


const Authentication = ()=>{
  return (
    <div className="flex w-full ">
      <SignIn/>
      <SignUp />
    </div>
  )
}

export default Authentication
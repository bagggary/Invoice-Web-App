import { useNavigate } from "react-router";
import Button from "../button/Button.component";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Button
        text="Go Home"
        type="primary"
        submitType={false}
        handleChange={() => navigate("/")}
      />
    </div>
  );
}

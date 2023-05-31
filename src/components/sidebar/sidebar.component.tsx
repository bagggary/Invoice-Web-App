import logo from "../../assets/logo.svg";
import darkSwitch from "../../assets/icon-moon.svg";
import logOut from "../../assets/log-out.svg";

function Sidebar() {
  return (
    <aside className=" md:fixed bg-[#373B53] left-0 top-0 md:h-full h-20 md:w-[103px] w-full  md:rounded-r-[20px] flex md:flex-col justify-between">
      <div className="md:w-full md:h-[103px] h-20 w-20 bg-primary flex justify-center items-center rounded-r-[20px] relative overflow-hidden">
        <div className="absolute w-full h-full top-[50%] bg-secondry rounded-l-[20px] "></div>
        <img
          src={logo}
          alt="logo"
          className=" md:h-[37.1px] md:w-[40px] z-10 w-[31px] h-[29px] "
        />
      </div>
      <div className="flex md:flex-col">
        <div className="flex justify-center items-center md:pb-8 px-8">
          <img src={darkSwitch} alt="switch" className=" cursor-pointer" />
        </div>
        <div className=" group flex justify-center items-center md:py-6 md:border-t  border-r-0 border-[#494E6E] px-8 border-l md:relative">
          <img src={logOut} alt="logOut" className=" h-6 cursor-pointer" />
          <div className="absolute -right-20 z-20 top-4 text-white bg-[#373B53] p-2 rounded-lg invisible group-hover:visible">
            logOut
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

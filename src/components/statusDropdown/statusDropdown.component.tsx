import { useEffect, useRef } from "react";
import downarrow from "../../assets/icon-arrow-down.svg";
import { useToggle } from "../../util/hooks/useToggle.hooks";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StatusDropdown = () => {
  const [showStatus, setShowStatus] = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const handleClickOff = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setShowStatus.off();
      }
    };
    document.addEventListener("mousedown", handleClickOff);
    return () => {
      document.removeEventListener("mousedown", handleClickOff);
    };
  });
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      console.log(e.target.name, "checked");
      setSearchParams({ status: e.target.name });
    } else {
      setSearchParams({});
    }
  };
  const status = ["Draft", "Pending", "Paid"];
  return (
    <div
      className=" relative flex gap-4 items-center cursor-pointer"
      onClick={() => setShowStatus.toggle()}
      ref={ref}
    >
      <div className=" sm:block hidden text-sm font-bold dark:text-white">
        Filter by status
      </div>
      <div className="text-sm font-bold dark:text-white block sm:hidden">
        Filter
      </div>
      <img
        src={downarrow}
        alt="downarrow"
        className={`${
          showStatus ? "rotate-180 " : " rotate-0"
        } transition-transform duration-200 ease-linear `}
      />
      <div
        className={`absolute ${
          showStatus ? "translate-y-0  visible" : "-translate-y-4  invisible"
        }  top-12 flex flex-col  gap-4 p-6 rounded-lg -left-1/3 bg-white dark:bg-blue-light w-[192px] shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] dark:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]`}
      >
        {status.map((stat) => {
          return (
            <div className="flex items-center">
              <input
                type="checkbox"
                className="opacity-0 absolute pointer-events-none hidden peer"
                id={stat}
                name={stat}
                onChange={handleSearchQuery}
              />
              <label
                htmlFor={stat}
                className={`before:peer-checked:bg-primary  peer-checked:before:text-white text-blue-light dark:text-white peer-checked:before:border-primary peer-checked:before:flex before:peer-checked:content-link peer-checked:before:items-center peer-checked:before:justify-center before:dark:bg-blue-dark before:dark:border-blue-dark  cursor-pointer flex items-center font-bold select-none before:mr-3 before:mb-[2px] before:bg-gray-light before:border before:border-gray-light  text-sm whitespace-nowrap before:content-[''] before:w-4 before:h-4 rounded-sm before:hover:border-primary before:dark:hover:border-primary`}
              >
                {stat}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusDropdown;

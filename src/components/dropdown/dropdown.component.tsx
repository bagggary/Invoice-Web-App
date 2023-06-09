import { ReactComponent as ArrowDown } from "../../assets/icon-arrow-down.svg";
import { useToggle } from "../../util/hooks/useToggle.hooks";

const options = [
  { label: "Net 1 Day", value: 1 },
  { label: "Net 7 Days", value: 7 },
  { label: "Net 14 Days", value: 14 },
  { label: "Net 30 Days", value: 30 },
];
const Dropdown = () => {
  const [show, showDrop] = useToggle();

  const dropDownHandler = () => {
    showDrop.toggle();
  };

  return (
    <div className="flex gap-[10px] flex-col">
      <label htmlFor="dropdown" className="text-torko   font-medium text-sm ">
        Payments Terms
      </label>
      <div
        id="dropdown"
        className=" relative cursor-pointer h-12 w-[240px] border bg-white dark:bg-blue-dark rounded-[4px] border-gray-light dark:border-blue-light flex justify-between items-center p-6"
        onClick={dropDownHandler}
      >
        <p className="font-bold text-sm dark:text-white text-black-1">
          Net 30 Days
        </p>
        <ArrowDown
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 ease`}
        />
        <div
          className={`absolute ${
            show
              ? "opacity-100 translate-y-4 visible"
              : "opacity-0 translate-y-0 hidden"
          } opacity-0  top-[2.5rem] left-0 bg-white dark:bg-blue-light  bg-red-white w-[240px] rounded-lg transition-all duration-300 ease-linear`}
        >
          {options?.map((term) => {
            return (
              <div className=" cursor-pointer dark:gray-light dark:text-gray-light dark:hover:text-primary dark:border-blue-dark hover:text-primary text-sm font-bold text-black-1 border-b border-gray-light px-6 py-3 last:border-0">
                {term.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

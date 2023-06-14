import { DatePicker } from "../dataPicker/DataPicker.component";
import Dropdown from "../dropdown/dropdown.component";
import { ReactComponent as Delete } from "../../assets/icon-delete.svg";
import Button from "../button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectNewform } from "../../store/switch/switch.selector";
import { useEffect, useRef } from "react";
import { setNewForm } from "../../store/switch/switch.action";

const NewForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const toggleNewForm = useSelector(selectNewform);
  // const [showNewForm, toggleShowForm] = useToggle(toggleNewForm);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleNewForm) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          dispatch(setNewForm(false));
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleNewForm]);

  return (
    <>
      <div
        className={`fixed w-[719px] top-0 ${
          !toggleNewForm ? "-translate-x-[40rem] invisible" : "translate-x-0"
        } transition-all duration-300 ease-linear z-[3] left-0 pb-8 rounded-r-[20px]  pt-14 pr-14 overflow-auto  h-screen bottom-0 bg-white pl-[160px]`}
        ref={ref}
      >
        <h2 className="font-bold text-2xl text-black-1">New Invoice</h2>
        <form className="mt-12">
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary">Bill From</h2>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="st-add"
                className="font-medium text-sm text-torko"
              >
                Street Address
              </label>
              <input
                type="text"
                id="st-add"
                className="h-12  border border-gray-light  py-4 px-5"
              />
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <div className="flex gap-6">
              <div className=" w-[152px] flex flex-col gap-[10px]">
                <label
                  htmlFor="sd-city"
                  className="font-medium  text-sm text-torko"
                >
                  City
                </label>
                <input
                  type="text"
                  id="sd-city"
                  className="h-12  border border-gray-light py-4 px-5"
                />
              </div>

              <div className=" w-[152px]  flex flex-col gap-[10px]">
                <label
                  htmlFor="sd-postcode"
                  className="font-medium text-sm text-torko"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="sd-postcode"
                  className="h-12  border border-gray-light  py-4 px-5"
                />
              </div>

              <div className=" w-[152px] flex flex-col gap-[10px]">
                <label
                  htmlFor="sd-country"
                  className="font-medium text-sm text-torko"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="sd-country"
                  className="h-12  border border-gray-light  py-4 px-5"
                />
              </div>
            </div>
          </div>
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary">Bill To</h2>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="to-name"
                className="font-medium text-sm text-torko"
              >
                Client's Name
              </label>
              <input
                type="text"
                id="to-name"
                className="h-12  border border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="to-email"
                className="font-medium text-sm text-torko"
              >
                Client's Email
              </label>
              <input
                type="email"
                id="to-email"
                className="h-12  border border-gray-light  py-4 px-5"
                placeholder="e.g. email@example.com"
              />
            </div>
            <div className="flex gap-6">
              <div className=" w-[152px] flex flex-col gap-[10px]">
                <label
                  htmlFor="st-city"
                  className="font-medium  text-sm text-torko"
                >
                  City
                </label>
                <input
                  type="text"
                  id="st-city"
                  className="h-12  border border-gray-light py-4 px-5"
                />
              </div>

              <div className=" w-[152px]  flex flex-col gap-[10px]">
                <label
                  htmlFor="st-postcode"
                  className="font-medium text-sm text-torko"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="st-postcode"
                  className="h-12  border border-gray-light  py-4 px-5"
                />
              </div>

              <div className=" w-[152px] flex flex-col gap-[10px]">
                <label
                  htmlFor="st-country"
                  className="font-medium text-sm text-torko"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="st-country"
                  className="h-12  border border-gray-light  py-4 px-5"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <DatePicker />
              <Dropdown />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="pj-desc"
                className="font-medium text-sm text-torko"
              >
                Project Description
              </label>
              <input
                type="text"
                id="pj-desc"
                className="h-12  border border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="font-bold text-lg text-[#777F98]">Item List</h2>
              {/* item list container */}
              <div>
                <div className="flex w-full  gap-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="item-1">Item Name</label>
                    <input
                      type="text"
                      className="h-12 border border-gray-light hover:border-primary "
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="qty-1">QTY.</label>
                      <input
                        type="text"
                        className="h-12 w-[46px] border border-gray-light hover:border-primary cursor-pointer text-center"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="price-1">Price</label>
                      <input
                        type="text"
                        className="h-12 w-[100px] border border-gray-light hover:border-primary cursor-pointer py-4 pl-5"
                      />
                    </div>
                    <div className="flex flex-col gap-4 content-center">
                      <div className="self-start">Total</div>
                      <p className="h-12 flex ">0.00</p>
                    </div>
                    <Delete className="self-center flex " />
                  </div>
                </div>
              </div>
              {/* item list container */}
              <button
                type="button"
                className="w-full h-12 text-torko font-bold text-sm rounded-3xl dark:text-gray-light cursor-pointer "
              >
                + Add New Item{" "}
              </button>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>
                <Button type="secondry" text="Discard" />
              </div>
              <div className="flex gap-2">
                <Button type="draft" text="Save as Draft" />
                <Button type="primary" text="Save & Send" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className={` inset-0 top-0 left-0 w-full ${
          toggleNewForm ? "fixed" : "hidden"
        } overflow-hidden transition-opacity bg-[rgb(0,0,0,.5)]`}
      ></div>
    </>
  );
};

export default NewForm;

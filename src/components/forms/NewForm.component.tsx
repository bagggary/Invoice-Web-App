import { DatePicker } from "../dataPicker/DataPicker.component";
import Dropdown from "../dropdown/dropdown.component";
import Button from "../button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectNewform } from "../../store/switch/switch.selector";
import { useEffect, useRef } from "react";
import { setNewForm } from "../../store/switch/switch.action";

const NewForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const toggleNewForm = useSelector(selectNewform);
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
        className={`fixed md:w-[719px] w-full top-0 ${
          !toggleNewForm ? "-translate-x-[40rem] invisible" : "translate-x-0"
        } transition-all dark:bg-black duration-300 ease-linear z-[3] left-0 pb-8 rounded-r-[20px]  pt-14 pr-14 overflow-auto  h-screen bottom-0 bg-white pl-[160px]`}
        ref={ref}
      >
        <h2 className="font-bold  text-2xl text-black-1 dark:text-white">
          New Invoice
        </h2>
        <form className="mt-12">
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary ">Bill From</h2>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="st-add"
                className="font-medium text-sm text-torko dark:text-gray-light"
              >
                Street Address
              </label>
              <input
                type="text"
                id="st-add"
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                  className="h-12 border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
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
                className="h-12 border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex flex-col w-full gap-4 ">
              <h2 className="font-bold text-lg text-[#777F98]">Item List</h2>
              {/* item list container */}

              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}

              <div className="block md:flex gap-6">
                <div className="flex flex-col gap-4 w-full ">
                  <label
                    htmlFor="item-1"
                    className="text-torko font-medium text-sm dark:text-gray-light"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="h-12 border py-4 px-5  dark:bg-blue-dark dark:hover:border-primary  dark:border-[#252945] cursor-pointer border-gray-light rounded-[4px] text-black-1 dark:text-white font-bold text-sm hover:border-primary "
                  />
                </div>

                {/* .priceInfo {
  display: grid;
  place-items: center;
  justify-items: center;
  grid-template-columns: 25% 25% 0.9fr 0.9fr;
  column-gap: 1rem;
  margin-bottom: 3rem;
  input {
    padding-right: 0rem;
  }

  input:disabled {
    border: none;
    background: none;
    color: $shipCove;
    text-align: right;
    padding: 0;
  }
  button {
    border: none;
    background: none;
  }

  @media (min-width: $tablet) {
    margin-bottom: 1rem;

    div {
      margin-bottom: 1rem;
    }
  }
} */}
                <div className="grid grid-cols-[25%_25%_0.9fr_0.9fr] place-items-center justify-items-center gap-x-4 md:gap-y-0 gap-y-[18px] ">
                  <div className="flex flex-col md:gap-4 gap-[10px] pr-0">
                    <label
                      htmlFor="qty-1"
                      className="text-torko font-medium text-sm dark:text-gray-light"
                    >
                      QTY.
                    </label>
                    <input
                      type="text"
                      className="h-12 w-full border  dark:bg-blue-dark dark:hover:border-primary  dark:border-[#252945]  border-gray-light text-black-1 dark:text-white font-bold text-sm  hover:border-primary cursor-pointer text-center"
                    />
                  </div>
                  <div className="flex flex-col md:gap-4 gap-[10px] pr-0">
                    <label
                      htmlFor="price-1"
                      className="text-torko font-medium text-sm dark:text-gray-light"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      className="h-12 w-full border  dark:bg-blue-dark dark:hover:border-primary  dark:border-[#252945]  border-gray-light  hover:border-primary cursor-pointer text-black-1 dark:text-white font-bold text-sm text-center"
                    />
                  </div>
                  <div className="flex flex-col self-start md:gap-4 gap-[10px] content-center pr-0">
                    <div className="text-torko font-medium text-sm dark:text-gray-light">
                      Total
                    </div>
                    <p className="mt-4 font-bold text-sm text-dark-gray dark:text-gray-light">
                      0.00
                    </p>
                  </div>
                  {/* Bin button to delete sub invoices */}
                  <button type="button" className=" translate-y-full">
                    <svg
                      width="13"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                        fill="#888EB0"
                        fill-rule="nonzero"
                        className=" hover:fill-red"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/* item list container */}
              {/* adding main content to disgrace the fianl solution to the  */}
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

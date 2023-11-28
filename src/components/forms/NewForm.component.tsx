import { DatePicker } from "../dataPicker/DataPicker.component";
import Dropdown from "../dropdown/dropdown.component";
import Button from "../button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectNewform } from "../../store/switch/switch.selector";
import { useEffect, useId, useRef, useState } from "react";
import { setNewForm } from "../../store/switch/switch.action";
import backArrow from "../../assets/icon-arrow-left.svg";
import ItemList from "../items/itemslist.component";
import { ItemTypes } from "../items/itemslist.component";

const NewForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const toggleNewForm = useSelector(selectNewform);
  const [itemList, setItemList] = useState<ItemTypes[]>([
    { item: "", itemQty: 0, itemPrice: 0, itemTotal: 0, id: useId() },
  ]);

  const uniqueID = () => {
    return (Math.random() * Date.now()).toString();
  };

  const removeItemFields = (id: string) => {
    const updatedItems = itemList.filter((itm) => itm.id != id);
    setItemList(updatedItems);
  };

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

  function addItemField() {
    const newItemList = {
      id: uniqueID(),
      item: "",
      itemQty: 0,
      itemPrice: 0,
      itemTotal: 0,
    };
    setItemList((prev) => {
      return [...prev, newItemList];
    });
  }
  const backClickChange = (): void => {
    dispatch(setNewForm(false));
  };

  return (
    <>
      <div
        className={`fixed md:w-[719px] sm:w-[616px]  w-full top-0 ${
          !toggleNewForm ? "-translate-x-[40rem] invisible" : "translate-x-0"
        } transition-all dark:bg-black duration-300 ease-linear z-[3] left-0 pb-8 sm:rounded-r-[20px]  md:pt-14 pt-[136px] md:pr-14 overflow-auto  h-screen bottom-0 bg-white md:pl-[160px] px-6 sm:pl-14 `}
        ref={ref}
      >
        <div
          onClick={backClickChange}
          className=" md:hidden  flex gap-6 items-center cursor-pointer"
        >
          <img src={backArrow} alt="back arrow" />
          <p className="font-bold text-sm hover:text-torko dark:text-white">
            Go back
          </p>
        </div>
        <h2 className="font-bold mt-6  text-2xl text-black-1 dark:text-white">
          New Invoice
        </h2>
        <form className="mt-12 flex flex-col gap-12">
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary ">Bill From</h2>
            <div className="flex w-full flex-col gap-[10px]">
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

            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap ">
              <div className=" w-1/3 flex flex-grow flex-col gap-[10px]">
                <label
                  htmlFor="sd-city"
                  className=" flex-grow flex-shrink font-medium  text-sm text-torko"
                >
                  City
                </label>
                <input
                  type="text"
                  id="sd-city"
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                />
              </div>

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px]">
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

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px]">
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
          {/* bill to container */}
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
            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap ">
              <div className=" w-1/3 flex-grow flex flex-col gap-[10px]">
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

              <div className=" w-1/3 flex-grow  flex flex-col gap-[10px]">
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

              <div className=" w-1/3 flex flex-grow flex-col gap-[10px]">
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
            <div className="flex flex-col ">
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
              <div className="flex flex-col gap-5">
                {itemList.map((item, index) => {
                  return (
                    <ItemList
                      key={item.id}
                      itemData={item}
                      index={index}
                      id={item.id}
                      setItemList={setItemList}
                      handleRemove={() => removeItemFields(item.id)}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={addItemField}
                className="w-full h-12 text-torko hover:bg-gray-light dark:hover:bg-blue-light font-bold text-sm rounded-3xl dark:text-gray-light cursor-pointer "
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

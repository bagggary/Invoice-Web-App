import { DatePicker } from "../dataPicker/DataPicker.component";
import Dropdown from "../dropdown/dropdown.component";
import Button from "../button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectNewform } from "../../store/switch/switch.selector";
import { useEffect, useRef } from "react";
import { setNewForm } from "../../store/switch/switch.action";
import backArrow from "../../assets/icon-arrow-left.svg";
import ItemList from "../items/itemslist.component";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormValues } from "../types/types";
const NewForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const toggleNewForm = useSelector(selectNewform);
  // const [itemList, setItemList] = useState<ItemTypes[]>([
  //   { item: "", itemQty: 0, itemPrice: 0, itemTotal: 0 },
  // ]);

  const form = useForm<FormValues>({
    defaultValues: {
      id: "",
      createdAt: "",
      paymentDue: "",
      description: "",
      paymentTerms: 0,
      clientName: " ",
      clientEmail: "",
      status: "",
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
      total: 0,
    },
  });
  const { register, control, handleSubmit, setValue, watch } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form Submitted", data);
  };
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const addField = () => {
    const itemsField = { name: "", quantity: 0, price: 0, total: 0 };
    append(itemsField);
  };

  // const removeItemFields = (index: number) => {
  //   setItemList((prevItemList) => {
  //     const data = [...prevItemList];
  //     data.splice(index, 1);
  //     return data;
  //   });
  // };

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

  // function addItemField() {
  //   const newItemList = {
  //     id: uniqueID(),
  //     item: "",
  //     itemQty: 0,
  //     itemPrice: 0,
  //     itemTotal: 0,
  //   };
  //   setItemList((prev) => {
  //     return [...prev, newItemList];
  //   });
  // }
  const backClickChange = (): void => {
    dispatch(setNewForm(false));
  };

  // const handleRemove = (index: number) => {
  //   removeItemFields(index);
  // };

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
        <form
          className="mt-12 flex flex-col gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary ">Bill From</h2>
            <div className="flex w-full flex-col gap-[10px]">
              <label
                htmlFor="senderStreet"
                className="font-medium text-sm text-torko dark:text-gray-light"
              >
                Street Address
              </label>
              <input
                type="text"
                id="senderStreet"
                {...register("senderAddress.street")}
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
              />
            </div>
            {/*  */}
            {/*  */}
            {/*  */}

            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap ">
              <div className=" w-1/3 flex flex-grow flex-col gap-[10px]">
                <label
                  htmlFor="senderCity"
                  className=" flex-grow flex-shrink font-medium  text-sm text-torko"
                >
                  City
                </label>
                <input
                  type="text"
                  id="senderCity"
                  {...register("senderAddress.city")}
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                />
              </div>

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px]">
                <label
                  htmlFor="senderPostCode"
                  className="font-medium text-sm text-torko"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="senderPostCode"
                  {...register("senderAddress.postCode")}
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                />
              </div>

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px]">
                <label
                  htmlFor="senderCountry"
                  className="font-medium text-sm text-torko"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="senderCountry"
                  {...register("senderAddress.country")}
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
                htmlFor="clientName"
                className="font-medium text-sm text-torko"
              >
                Client's Name
              </label>
              <input
                type="text"
                id="clientName"
                {...register("clientName")}
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="clientEmail"
                className="font-medium text-sm text-torko"
              >
                Client's Email
              </label>
              <input
                type="email"
                id="clientEmail"
                {...register("clientEmail")}
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                placeholder="e.g. email@example.com"
              />
            </div>
            <div className="flex w-full flex-col gap-[10px]">
              <label
                htmlFor="clientStreet"
                className="font-medium text-sm text-torko dark:text-gray-light"
              >
                Street Address
              </label>
              <input
                type="text"
                id="clientStreet"
                {...register("clientAddress.street")}
                className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap ">
              <div className=" w-1/3 flex-grow flex flex-col gap-[10px]">
                <label
                  htmlFor="clientCity"
                  className="font-medium  text-sm text-torko"
                >
                  City
                </label>
                <input
                  type="text"
                  id="clientCity"
                  {...register("clientAddress.city")}
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                />
              </div>

              <div className=" w-1/3 flex-grow  flex flex-col gap-[10px]">
                <label
                  htmlFor="clientPostCode"
                  className="font-medium text-sm text-torko"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="clientPostCode"
                  {...register("clientAddress.postCode")}
                  className="h-12  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
                />
              </div>

              <div className=" w-1/3 flex flex-grow flex-col gap-[10px]">
                <label
                  htmlFor="clientCountry"
                  className="font-medium text-sm text-torko"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="clientCountry"
                  {...register("clientAddress.country")}
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
                htmlFor="description"
                className="font-medium text-sm text-torko"
              >
                Project Description
              </label>
              <input
                type="text"
                id="description"
                {...register("description")}
                className="h-12 border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5"
              />
            </div>
            <div className="flex flex-col w-full gap-4 ">
              <h2 className="font-bold text-lg text-[#777F98]">Item List</h2>
              <div className="flex flex-col gap-5">
                {fields?.map((filed, index) => {
                  return (
                    <ItemList
                      key={filed.id}
                      index={index}
                      register={register}
                      remove={remove}
                      watch={watch}
                      setValue={setValue}
                      fields={fields}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={addField}
                className="w-full h-12 text-torko hover:bg-gray-light dark:hover:bg-blue-light font-bold text-sm rounded-3xl dark:text-gray-light cursor-pointer "
              >
                + Add New Item
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
        <DevTool control={control} />
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

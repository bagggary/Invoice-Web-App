import { DatePicker } from "../dataPicker/DataPicker.component";
import Dropdown from "../dropdown/dropdown.component";
import Button from "../button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectEditform } from "../../store/switch/switch.selector";
import { useEffect, useRef } from "react";
import { setEditForm, setNewForm } from "../../store/switch/switch.action";
import backArrow from "../../assets/icon-arrow-left.svg";
import ItemList from "../items/itemslist.component";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormValues } from "../types/types";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateData } from "../../util/firebase.util";

const EditForm = ({ invoiceData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const toggleEditForm = useSelector(selectEditform);

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const {
    id,
    description,
    clientAddress,
    createdAt,
    paymentDue,
    senderAddress,
    clientEmail,
    clientName,
    status,
    items,
    total,
    paymentTerms,
  } = invoiceData[0];

  const form = useForm<FormValues>({
    defaultValues: {
      id: id,
      createdAt: createdAt,
      paymentDue: paymentDue,
      description: description,
      paymentTerms: paymentTerms,
      clientName: clientName,
      clientEmail: clientEmail,
      status: status,
      senderAddress: {
        street: senderAddress.street,
        city: senderAddress.city,
        postCode: senderAddress.postCode,
        country: senderAddress.country,
      },
      clientAddress: {
        street: clientAddress.street,
        city: clientAddress.city,
        postCode: clientAddress.postCode,
        country: clientAddress.country,
      },
      items: (invoiceData && items) || [],
      total: total,
    },
  });
  const { register, control, handleSubmit, setValue, watch, formState, reset } =
    form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: FormValues) => {
    await updateData(id, user.uid, data);
    dispatch(setEditForm(false));
  };
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const watchTest = useWatch({
    control,
    name: "items",
    defaultValue: fields as any,
  });

  const addField = () => {
    const itemsField = { name: "", quantity: 0, price: 0, total: 0 };
    append(itemsField);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleEditForm) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          dispatch(setEditForm(false));
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleEditForm]);

  const backClickChange = (): void => {
    dispatch(setNewForm(false));
  };

  return (
    <>
      <div
        className={`fixed md:w-[719px] sm:w-[616px]  w-full top-0 ${
          !toggleEditForm ? "-translate-x-[40rem] invisible" : "translate-x-0"
        } transition-all dark:bg-black duration-200 ease-linear z-[3] left-0 pb-8 sm:rounded-r-[20px]  md:pt-14 pt-[136px] md:pr-14 overflow-auto  h-screen bottom-0 bg-white md:pl-[160px] px-6 sm:pl-14 `}
        ref={ref}
      >
        <div
          onClick={backClickChange}
          className=" md:hidden flex gap-6 items-center cursor-pointer"
        >
          <img src={backArrow} alt="back arrow" />
          <p className="font-bold text-sm hover:text-torko dark:text-white">
            Go back
          </p>
        </div>
        <h2 className="font-bold mt-6  text-2xl text-black-1 dark:text-white">
          {`Edit #${id}`}
        </h2>
        <form
          className="mt-12 flex flex-col gap-12"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* bill from container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary ">Bill From</h2>
            <div className="flex w-full flex-col gap-[10px] relative">
              <label
                htmlFor="senderStreet"
                className={`font-medium ${
                  errors.senderAddress?.street?.message ?? `text-red`
                } text-sm text-torko dark:text-gray-light`}
              >
                Street Address
              </label>
              <input
                type="text"
                id="senderStreet"
                {...register("senderAddress.street" as const, {
                  required: "can't be empty",
                })}
                className={`h-12 ${
                  errors.senderAddress?.street?.message
                    ? ` border-red hover:border-red`
                    : ``
                }   border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white  py-4 px-5`}
              />
              <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                {errors?.senderAddress?.street?.message}
              </p>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}

            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap ">
              <div className=" w-1/3 flex flex-grow flex-col gap-[10px] relative">
                <label
                  htmlFor="senderCity"
                  className={`flex-grow ${
                    errors.senderAddress?.city?.message ? `text-red` : ``
                  } flex-shrink font-medium  text-sm text-torko`}
                >
                  City
                </label>
                <input
                  type="text"
                  id="senderCity"
                  {...register("senderAddress.city" as const, {
                    required: "can't be empty",
                  })}
                  className={`h-12  border ${
                    errors.senderAddress?.city?.message
                      ? `border-red hover:border-red`
                      : ``
                  } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.clientAddress?.city?.message}
                </p>
              </div>

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px] relative">
                <label
                  htmlFor="senderPostCode"
                  className={`font-medium ${
                    errors.clientAddress?.postCode?.message ? `text-red ` : ``
                  } text-sm text-torko`}
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="senderPostCode"
                  {...register("senderAddress.postCode" as const, {
                    required: "can't be empty",
                  })}
                  className={` h-12 ${
                    errors.senderAddress?.postCode?.message
                      ? `border-red hover:border-red`
                      : ``
                  }  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.senderAddress?.postCode?.message}
                </p>
              </div>

              <div className="  w-1/3 flex-grow flex flex-col gap-[10px] relative">
                <label
                  htmlFor="senderCountry"
                  className={`font-medium ${
                    errors.clientAddress?.country?.message ? `text-red` : ``
                  } text-sm text-torko`}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="senderCountry"
                  {...register("senderAddress.country" as const, {
                    required: "can't be empty",
                  })}
                  className={`h-12 ${
                    errors.clientAddress?.country?.message
                      ? `border-red hover:border-red `
                      : ``
                  }  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.clientAddress?.country?.message}
                </p>
              </div>
            </div>
          </div>
          {/* bill to container */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-sm text-primary">Bill To</h2>
            <div className="flex flex-col gap-[10px] relative">
              <label
                htmlFor="clientName"
                className={`font-medium text-sm text-torko ${
                  errors.clientName?.message ? `text-red` : ``
                }`}
              >
                Client's Name
              </label>
              <input
                type="text"
                id="clientName"
                {...register("clientName" as const, {
                  required: "can't be empty",
                })}
                className={`h-12  border ${
                  errors.clientName?.message
                    ? `border-red hover:border-red`
                    : ``
                } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
              />
              <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                {errors?.clientName?.message}
              </p>
            </div>
            <div className="flex flex-col gap-[10px] relative">
              <label
                htmlFor="clientEmail"
                className={`font-medium text-sm text-torko ${
                  errors.clientEmail?.message ? `text-red` : ``
                }`}
              >
                Client's Email
              </label>
              <input
                type="email"
                id="clientEmail"
                {...register("clientEmail" as const, {
                  required: "can't be empty",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email format",
                  },
                })}
                className={`h-12  border ${
                  errors.clientEmail?.message
                    ? `border-red : hover:border-red`
                    : ``
                } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                placeholder="e.g. email@example.com"
              />
              <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                {errors?.clientEmail?.message}
              </p>
            </div>
            <div className="flex w-full flex-col gap-[10px] relative">
              <label
                htmlFor="clientStreet"
                className={`${
                  errors.clientAddress?.street?.message ? `text-red` : ``
                } font-medium text-sm text-torko dark:text-gray-light`}
              >
                Street Address
              </label>
              <input
                type="text"
                id="clientStreet"
                {...register("clientAddress.street" as const, {
                  required: "can't be empty",
                })}
                className={`h-12 ${
                  errors.clientAddress?.street?.message
                    ? `border-red hover:border-red`
                    : ``
                }  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
              />
              <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                {errors?.clientAddress?.street?.message}
              </p>
            </div>
            <div className="flex gap-6 sm:max-w-[calc(100%-48px)]  sm:flex-nowrap flex-wrap  ">
              <div className=" w-1/3 flex-grow flex flex-col gap-[10px] relative">
                <label
                  htmlFor="clientCity"
                  className={`font-medium  text-sm text-torko ${
                    errors.clientAddress?.city?.message ? `text-red` : ``
                  }`}
                >
                  City
                </label>
                <input
                  type="text"
                  id="clientCity"
                  {...register("clientAddress.city" as const, {
                    required: "can't be empty",
                  })}
                  className={`h-12 ${
                    errors.clientAddress?.city?.message
                      ? `border-red hover:border-red`
                      : ``
                  }  border hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.clientAddress?.city?.message}
                </p>
              </div>

              <div className=" w-1/3 flex-grow  flex flex-col gap-[10px] relative">
                <label
                  htmlFor="clientPostCode"
                  className={`font-medium ${
                    errors.clientAddress?.postCode?.message ? `text-red` : ``
                  } text-sm text-torko`}
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="clientPostCode"
                  {...register("clientAddress.postCode" as const, {
                    required: "can't be empty",
                  })}
                  className={`h-12  border ${
                    errors.clientAddress?.postCode?.message
                      ? `border-red hover:border-red`
                      : ``
                  } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.clientAddress?.postCode?.message}
                </p>
              </div>

              <div className=" w-1/3 flex flex-grow flex-col gap-[10px] relative">
                <label
                  htmlFor="clientCountry"
                  className={`font-medium ${
                    errors.clientAddress?.country?.message ? `text-red` : ``
                  } text-sm text-torko`}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="clientCountry"
                  {...register("clientAddress.country" as const, {
                    required: "can't be empty",
                  })}
                  className={`h-12  border ${
                    errors.clientAddress?.country?.message
                      ? `border-red hover:border-red`
                      : ``
                  } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
                />
                <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                  {errors?.clientAddress?.country?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <DatePicker setValue={setValue} disable={true} />
              <Dropdown
                setValue={setValue}
                watch={watch}
                submitSuccessful={isSubmitSuccessful}
                reset={() => reset()}
              />
            </div>
            <div className="flex flex-col gap-[10px relative">
              <label
                htmlFor="description"
                className="font-medium text-sm text-torko"
              >
                Project Description
              </label>
              <input
                type="text"
                id="description"
                {...register("description", {
                  required: "can't be empty",
                })}
                className={`h-12 border ${
                  errors.description?.message
                    ? `border-red hover:border-red`
                    : ``
                } hover:border-primary cursor-pointer  dark:bg-blue-dark dark:hover:border-primary rounded-[4px] dark:border-[#252945] text-black-1 font-bold text-sm dark:text-white border-gray-light  py-4 px-5`}
              />
              <p className=" absolute top-0 text-red right-0 text-[10px] font-semibold">
                {errors.description?.message}
              </p>
            </div>
            <div className="flex flex-col w-full gap-4 ">
              <h2 className="font-bold text-lg text-[#777F98]">Item List</h2>
              <div className="flex flex-col gap-5">
                {fields?.map((field, index) => {
                  const watchItem = watchTest[index] || {};
                  const totalAmount = watchItem.quantity * watchItem.price || 0;
                  field.total = totalAmount;
                  return (
                    <ItemList
                      key={field.id}
                      index={index}
                      register={register}
                      remove={remove}
                      watch={watch}
                      setValue={setValue}
                      total={totalAmount}
                      errors={errors}
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
            {!isObjEmpty(errors) && (
              <p className=" text-[12px] text-red font-semibold ">
                - All fields must be added
              </p>
            )}
            {/* */}
            <div className="flex justify-end gap-2">
              <Button
                type="secondry"
                handleChange={() => dispatch(setEditForm(false))}
                text="cancel"
                submitType={false}
              />
              <Button type="primary" text="Save changes" submitType={true} />
            </div>
          </div>
        </form>
        <DevTool control={control} />
      </div>
      <div
        className={` inset-0 top-0 left-0 w-full ${
          toggleEditForm ? "fixed" : "hidden"
        } overflow-hidden transition-opacity bg-[rgb(0,0,0,.5)]`}
      ></div>
    </>
  );
};

export default EditForm;

import { useRef, useState, useEffect } from "react";
import { useToggle } from "../../util/hooks/useToggle.hooks";
import { getDaysInMonth, format, getYear } from "date-fns";
import rightArrow from "../../assets/icon-arrow-right.svg";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { ReactComponent as Calender } from "../../assets/icon-calendar.svg";
import { DateProps } from "../types/types";

export const DatePicker: React.FC<DateProps> = ({ setValue }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const todayDate = () => {
    const initDate = new Date(Date.now());
    const year = initDate.getFullYear();
    const month = initDate.getMonth() + 1;
    const day = initDate.getDate();
    return `${year}-${month}-${day}`;
  };

  const value = todayDate();

  const initialSelectedDate = value ? new Date(value) : new Date(Date.now());
  const initialCurrentMonth = new Date(initialSelectedDate).getMonth();
  const initialCurrentYear = getYear(initialSelectedDate);
  const initialDaysInMonth = getDaysInMonth(initialSelectedDate);

  const [open, openHandlers] = useToggle();
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [currentMonth, setCurrentMonth] = useState(initialCurrentMonth);
  const [currentYear, setCurrentYear] = useState(initialCurrentYear);
  const [daysInMonth, setDaysInMonth] = useState(initialDaysInMonth);

  useEffect(() => {
    const invoiceDate = `${selectedDate.getFullYear()}-${(
      selectedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${selectedDate.getDate().toString().padStart(2, "0")}`;
    setValue("createdAt", invoiceDate);
  }, [selectedDate]);

  useEffect(() => {
    setSelectedDate(new Date(value));
  }, [value]);

  const resetDaysInMonthEffect = () => {
    setDaysInMonth(getDaysInMonth(new Date(currentYear, currentMonth)));
  };

  const handleClickOff = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      openHandlers.off();
    }
  };

  const clickOffEffect = () => {
    if (open) {
      window.addEventListener("click", handleClickOff);
    } else {
      window.removeEventListener("click", handleClickOff);
    }
    return () => {
      window.removeEventListener("click", handleClickOff);
    };
  };

  const setFocus = () => {
    if (open) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  };

  useEffect(resetDaysInMonthEffect, [currentMonth]);
  useEffect(clickOffEffect, [open]);
  useEffect(setFocus, [open]);

  const handlePrevMonth = () => {
    setCurrentMonth((curr) => {
      if (curr - 1 < 0) {
        setCurrentYear((prev) => prev - 1);
        return 11;
      } else {
        return curr - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((curr) => {
      if (curr + 1 > 11) {
        setCurrentYear((prev) => prev + 1);
        return 0;
      } else {
        return curr + 1;
      }
    });
  };

  const handleDateSelect = (selectedDay: number) => {
    const newDate = new Date(currentYear, currentMonth, selectedDay);
    setSelectedDate(newDate);
    openHandlers.off();
  };

  return (
    <div ref={ref} className="relative mb-6 ">
      <div className="flex flex-col gap-[10px]">
        <label
          htmlFor="invoice-date"
          className=" font-medium text-sm text-torko"
        >
          Invoice Date
        </label>
        <div className="relative w-[100%] flex">
          <input
            ref={inputRef}
            placeholder={format(selectedDate, "dd MMM yyyy")}
            className="h-[3rem] placeholder:text-black-1 dark:placeholder:text-white dark:border-blue-light dark:bg-blue-dark py-4 pl-5 w-full text-sm text-black-1 rounded-md border border-gray-light font-bold cursor-pointer"
            onFocus={openHandlers.on}
            type="text"
          />
          <Calender
            className="absolute top-4 right-4 cursor-pointer"
            onClick={openHandlers.on}
          />
        </div>
      </div>
      {open && (
        <div className="absolute bg-white dark:bg-blue-light top-[105%] left-0 max-w-[100%] py-6 px-5 w-full bg-whtie min-h-[243px] text-center rounded-lg z-[4] shadow-sm">
          <div className="flex w-[calc(100% - 48px)] mx-auto  items-center justify-between mb-4">
            <button type="button" onClick={handlePrevMonth}>
              <img src={leftArrow} alt="Prev Month Icon" />
            </button>
            <p className="text-black-1 dark:text-gray-light">
              {format(new Date(currentYear, currentMonth), "MMM")} {currentYear}
            </p>
            <button type="button" onClick={handleNextMonth}>
              <img src={rightArrow} alt="Next Month Icon" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-y-4 font-bold">
            {Array.from(Array(daysInMonth).keys())
              .map((p) => p + 1)
              .map((p, i) =>
                selectedDate.getDate() === p &&
                selectedDate.getFullYear() === currentYear &&
                selectedDate.getMonth() === currentMonth ? (
                  <p
                    key={i}
                    className="text-primary"
                    onClick={() => handleDateSelect(p)}
                  >
                    {p}
                  </p>
                ) : (
                  <p
                    className=" cursor-pointer text-black-1 hover:text-primary dark:text-gray-light dark:hover:text-primary"
                    onClick={() => handleDateSelect(p)}
                  >
                    {p}
                  </p>
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
};

const ItemList = () => {
  return (
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
      <div className="md:mt-0 mt-6 grid grid-cols-[25%_25%_0.9fr_0.9fr] place-items-center justify-items-center gap-x-4 md:gap-y-0 gap-y-[18px] ">
        <div className="flex flex-col md:gap-4 gap-[10px] pr-0">
          <label
            htmlFor="qty-1"
            className="text-torko font-medium text-sm dark:text-gray-light"
          >
            QTY.
          </label>
          <input
            type="number"
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
          <div className="mt-4 font-bold text-sm text-dark-gray dark:text-gray-light">
            0.00
          </div>
        </div>
        {/* Bin button to delete sub invoices */}
        <button type="button" className=" translate-y-full">
          <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
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
  );
};

export default ItemList;
